/*
  Human
  homepage: <https://github.com/vladmandic/human>
  author: <https://github.com/vladmandic>'
*/

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// demo/faceid/index.ts
import * as H from "../../dist/human.esm.js";

// demo/faceid/indexdb.ts
var db;
var database = "human";
var table = "person";
var log = (...msg) => console.log("indexdb", ...msg);
async function open() {
  if (db) return true;
  return new Promise((resolve) => {
    const request = indexedDB.open(database, 1);
    request.onerror = (evt) => log("error:", evt);
    request.onupgradeneeded = (evt) => {
      log("create:", evt.target);
      db = evt.target.result;
      db.createObjectStore(table, { keyPath: "id", autoIncrement: true });
    };
    request.onsuccess = (evt) => {
      db = evt.target.result;
      log("open:", db);
      resolve(true);
    };
  });
}
async function load() {
  const faceDB = [];
  if (!db) await open();
  return new Promise((resolve) => {
    const cursor = db.transaction([table], "readwrite").objectStore(table).openCursor(null, "next");
    cursor.onerror = (evt) => log("load error:", evt);
    cursor.onsuccess = (evt) => {
      if (evt.target.result) {
        faceDB.push(evt.target.result.value);
        evt.target.result.continue();
      } else {
        resolve(faceDB);
      }
    };
  });
}
async function save(faceRecord) {
  if (!db) await open();
  const newRecord = { name: faceRecord.name, descriptor: faceRecord.descriptor, image: faceRecord.image };
  db.transaction([table], "readwrite").objectStore(table).put(newRecord);
  log("save:", newRecord);
}
async function remove(faceRecord) {
  if (!db) await open();
  db.transaction([table], "readwrite").objectStore(table).delete(faceRecord.id);
  log("delete:", faceRecord);
}

// demo/faceid/face-tracker.ts
var FaceTracker = class {
  constructor(knownDescriptors2, knownFaces2, matchOptions2, human2) {
    this.knownDescriptors = knownDescriptors2;
    this.knownFaces = knownFaces2;
    this.matchOptions = matchOptions2;
    this.human = human2;
    __publicField(this, "trackedFaces", /* @__PURE__ */ new Map());
    __publicField(this, "trackingThreshold", 5e3);
    // 5 seconds
    __publicField(this, "similarityThreshold", 0.6);
    // threshold for considering faces as same person
    __publicField(this, "autoSaveEnabled", true);
  }
  updateKnownFaces(descriptors, faces) {
    this.knownDescriptors = descriptors;
    this.knownFaces = faces;
  }
  generateFaceId(face) {
    if (!face.box) return Math.random().toString();
    const [x, y, w, h] = face.box;
    return `${Math.round(x)}_${Math.round(y)}_${Math.round(w)}_${Math.round(h)}`;
  }
  isSameFace(face1, face2) {
    if (!face1.box || !face2.box) return false;
    const [x1, y1, w1, h1] = face1.box;
    const [x2, y2, w2, h2] = face2.box;
    const positionThreshold = 50;
    const sizeThreshold = 30;
    return Math.abs(x1 - x2) < positionThreshold && Math.abs(y1 - y2) < positionThreshold && Math.abs(w1 - w2) < sizeThreshold && Math.abs(h1 - h2) < sizeThreshold;
  }
  findMatchingKnownFace(face) {
    if (!face.embedding || face.embedding.length === 0 || this.knownDescriptors.length === 0) {
      return null;
    }
    const res = this.human.match.find(face.embedding, this.knownDescriptors, this.matchOptions);
    const record = this.knownFaces[res.index];
    if (record && res.similarity > this.similarityThreshold) {
      return { record, similarity: res.similarity };
    }
    return null;
  }
  async processFaces(faces) {
    const now = Date.now();
    const currentFaceIds = /* @__PURE__ */ new Set();
    const newlyRegistered = [];
    const updates = [];
    for (const face of faces) {
      if (!face.embedding || face.embedding.length === 0) continue;
      const matchResult = this.findMatchingKnownFace(face);
      const isMatched = matchResult !== null;
      let trackedFace = null;
      for (const [id, tracked] of this.trackedFaces) {
        if (this.isSameFace(face, tracked.face)) {
          trackedFace = tracked;
          currentFaceIds.add(id);
          break;
        }
      }
      if (!trackedFace) {
        const id = this.generateFaceId(face);
        trackedFace = {
          id,
          face,
          firstSeen: now,
          lastSeen: now,
          trackingDuration: 0,
          isMatched,
          matchedRecord: matchResult == null ? void 0 : matchResult.record
        };
        this.trackedFaces.set(id, trackedFace);
        currentFaceIds.add(id);
      } else {
        trackedFace.face = face;
        trackedFace.lastSeen = now;
        trackedFace.trackingDuration = now - trackedFace.firstSeen;
        trackedFace.isMatched = isMatched;
        trackedFace.matchedRecord = matchResult == null ? void 0 : matchResult.record;
      }
      if (!trackedFace.isMatched && trackedFace.trackingDuration >= this.trackingThreshold && this.autoSaveEnabled) {
        await this.autoRegisterFace(trackedFace);
        newlyRegistered.push(trackedFace);
      }
      updates.push(trackedFace);
    }
    for (const [id, tracked] of this.trackedFaces) {
      if (!currentFaceIds.has(id)) {
        if (now - tracked.lastSeen > 2e3) {
          this.trackedFaces.delete(id);
        }
      }
    }
    return { newlyRegistered, updates };
  }
  async autoRegisterFace(trackedFace) {
    try {
      const timestamp2 = (/* @__PURE__ */ new Date()).toLocaleString("ko-KR");
      const autoName = `Unknown_${timestamp2}`;
      const image = this.getFaceCropImageData(trackedFace.face);
      const record = {
        id: 0,
        // will be auto-incremented
        name: autoName,
        descriptor: trackedFace.face.embedding,
        image
      };
      await save(record);
      trackedFace.isMatched = true;
      console.log("Auto-registered face:", autoName);
    } catch (error) {
      console.error("Failed to auto-register face:", error);
    }
  }
  getFaceCropImageData(face) {
    if (!face.box) {
      const canvas2 = document.createElement("canvas");
      canvas2.width = canvas2.height = 128;
      const ctx2 = canvas2.getContext("2d");
      return ctx2.getImageData(0, 0, 128, 128);
    }
    const video = document.getElementById("video");
    const [bx, by, bw, bh] = face.box;
    const sx = Math.max(0, Math.floor(bx));
    const sy = Math.max(0, Math.floor(by));
    const sw = Math.max(1, Math.min(video.videoWidth - sx, Math.floor(bw)));
    const sh = Math.max(1, Math.min(video.videoHeight - sy, Math.floor(bh)));
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 128;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, 128, 128);
    return ctx.getImageData(0, 0, 128, 128);
  }
  getTrackedFaces() {
    return Array.from(this.trackedFaces.values());
  }
  getTrackingInfo(faceId) {
    return this.trackedFaces.get(faceId) || null;
  }
};

// demo/faceid/index.ts
var humanConfig = {
  // user configuration for human, used to fine-tune behavior
  cacheSensitivity: 0.01,
  modelBasePath: "../../models",
  filter: { enabled: true, equalization: true },
  // lets run with histogram equilizer
  backend: "humangl",
  debug: true,
  face: {
    enabled: true,
    detector: { maxDetected: 3, rotation: true, return: false, mask: false },
    // no need to return tensors in realtime mode
    description: { enabled: true },
    // default model for face descriptor extraction is faceres
    // mobilefacenet: { enabled: true, modelPath: 'https://vladmandic.github.io/human-models/models/mobilefacenet.json' }, // alternative model
    // insightface: { enabled: true, modelPath: 'https://vladmandic.github.io/insightface/models/insightface-mobilenet-swish.json' }, // alternative model
    iris: { enabled: false },
    // iris disabled: operate without gaze/gesture
    emotion: { enabled: false }
    // not needed
    // antispoof: { enabled: true }, // enable optional antispoof module
    // liveness: { enabled: true }, // enable optional liveness module
  },
  body: { enabled: false },
  hand: { enabled: false },
  object: { enabled: false }
  // gesture: { enabled: true }, // parses face and iris gestures
};
var matchOptions = { order: 2, multiplier: 20, min: 0.1, max: 0.9 };
var _a, _b, _c, _d;
var options = {
  minConfidence: 0.6,
  // overal face confidence for box, face, gender, real, live
  minSize: 224,
  // min input to face descriptor model before degradation
  maxTime: 3e4,
  // max time before giving up
  blinkMin: 10,
  // minimum duration of a valid blink
  blinkMax: 800,
  // maximum duration of a valid blink
  threshold: 0.5,
  // minimum similarity
  distanceMin: 0.4,
  // closest that face is allowed to be to the cammera in cm
  distanceMax: 1,
  // farthest that face is allowed to be to the cammera in cm
  mask: (_b = (_a = humanConfig.face) == null ? void 0 : _a.detector) == null ? void 0 : _b.mask,
  rotation: (_d = (_c = humanConfig.face) == null ? void 0 : _c.detector) == null ? void 0 : _d.rotation,
  ...matchOptions
};
var current = { face: null, record: null };
var knownFaces = [];
var knownDescriptors = [];
var faceTracker;
var human = new H.Human(humanConfig);
human.env.perfadd = false;
human.draw.options.font = 'small-caps 18px "Lato"';
human.draw.options.lineHeight = 20;
var dom = {
  // grab instances of dom objects so we dont have to look them up later
  video: document.getElementById("video"),
  canvas: document.getElementById("canvas"),
  log: document.getElementById("log"),
  fps: document.getElementById("fps"),
  match: document.getElementById("match"),
  matches: document.getElementById("matches"),
  name: document.getElementById("name"),
  save: document.getElementById("save"),
  delete: document.getElementById("delete"),
  source: document.getElementById("source")
};
var timestamp = { detect: 0, draw: 0 };
var log2 = (...msg) => {
  dom.log.innerText += msg.join(" ") + "\n";
  console.log(...msg);
};
function getFaceCropImageData(video, box, size = 128) {
  const [bx, by, bw, bh] = box;
  const sx = Math.max(0, Math.floor(bx));
  const sy = Math.max(0, Math.floor(by));
  const sw = Math.max(1, Math.min(video.videoWidth - sx, Math.floor(bw)));
  const sh = Math.max(1, Math.min(video.videoHeight - sy, Math.floor(bh)));
  const off = document.createElement("canvas");
  off.width = size;
  off.height = size;
  const octx = off.getContext("2d");
  octx.imageSmoothingEnabled = true;
  octx.imageSmoothingQuality = "high";
  octx.drawImage(video, sx, sy, sw, sh, 0, 0, size, size);
  return octx.getImageData(0, 0, size, size);
}
async function webCam() {
  const cameraOptions = { audio: false, video: { facingMode: "user", resizeMode: "none", width: { ideal: document.body.clientWidth } } };
  const stream = await navigator.mediaDevices.getUserMedia(cameraOptions);
  const ready = new Promise((resolve) => {
    dom.video.onloadeddata = () => resolve(true);
  });
  dom.video.srcObject = stream;
  void dom.video.play();
  await ready;
  dom.canvas.width = dom.video.videoWidth;
  dom.canvas.height = dom.video.videoHeight;
  const stage = document.getElementById("stage");
  if (stage) {
    const resize = () => {
      dom.canvas.style.transform = "translateZ(0)";
    };
    new ResizeObserver(resize).observe(stage);
    resize();
  }
  if (human.env.initial) log2("video:", dom.video.videoWidth, dom.video.videoHeight, "|", stream.getVideoTracks()[0].label);
  dom.canvas.onclick = () => {
    if (dom.video.paused) void dom.video.play();
    else dom.video.pause();
  };
}
async function detectionLoop() {
  var _a2;
  if (dom.video.paused) return;
  await human.detect(dom.video);
  const interpolated = human.next(human.result);
  const ctx = dom.canvas.getContext("2d");
  ctx == null ? void 0 : ctx.clearRect(0, 0, dom.canvas.width, dom.canvas.height);
  const faces = interpolated.face.slice(0, 3);
  const { newlyRegistered, updates } = await faceTracker.processFaces(faces);
  if (newlyRegistered.length > 0) {
    await refreshKnownFaces();
    faceTracker.updateKnownFaces(knownDescriptors, knownFaces);
    for (const registered of newlyRegistered) {
      log2("\uC790\uB3D9 \uB4F1\uB85D\uB428:", ((_a2 = registered.matchedRecord) == null ? void 0 : _a2.name) || "Unknown");
    }
  }
  const labels = [];
  const matchedRecs = [];
  const trackedFaces = faceTracker.getTrackedFaces();
  if (ctx) {
    ctx.save();
    ctx.font = "16px Lato";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
  }
  let primaryBest = null;
  for (let i = 0; i < faces.length; i += 1) {
    const f = faces[i];
    let label = "unknown";
    let matchedRec = null;
    const tracked = trackedFaces.find(
      (tf) => tf.face.box && f.box && Math.abs(tf.face.box[0] - f.box[0]) < 50 && Math.abs(tf.face.box[1] - f.box[1]) < 50
    );
    if (tracked) {
      if (tracked.isMatched && tracked.matchedRecord) {
        matchedRec = tracked.matchedRecord;
        label = `${tracked.matchedRecord.name}`;
        if (!primaryBest) primaryBest = { name: tracked.matchedRecord.name, similarity: 1, record: tracked.matchedRecord };
      } else {
        const progress = Math.min(tracked.trackingDuration / 5e3, 1);
        const remaining = Math.max(0, 5e3 - tracked.trackingDuration);
        label = `\uCD94\uC801\uC911 ${(progress * 100).toFixed(0)}% (${(remaining / 1e3).toFixed(1)}s)`;
      }
    }
    if (ctx && f.box) {
      const [x, y, w, h] = f.box;
      if (tracked == null ? void 0 : tracked.isMatched) {
        ctx.strokeStyle = "lime";
      } else if (tracked) {
        const progress = Math.min(tracked.trackingDuration / 5e3, 1);
        ctx.strokeStyle = `rgb(${255 - Math.round(progress * 255)}, ${Math.round(progress * 255)}, 0)`;
      } else {
        ctx.strokeStyle = "red";
      }
      ctx.strokeRect(x, y, w, h);
      const ty = Math.max(0, y - 6);
      ctx.strokeStyle = "black";
      ctx.strokeText(label, x, ty);
      ctx.fillText(label, x, ty);
    }
    labels.push(label);
    matchedRecs.push(matchedRec);
  }
  current.face = faces.sort((a, b) => b.box[2] * b.box[3] - a.box[2] * a.box[3])[0] || null;
  current.record = primaryBest ? primaryBest.record : null;
  updateMatchesUI(faces, labels, matchedRecs, trackedFaces);
  const now = human.now();
  timestamp.detect = now;
  requestAnimationFrame(detectionLoop);
}
function updateMatchesUI(faces, labels, matchedRecs, trackedFaces) {
  if (!dom.matches) return;
  dom.matches.innerHTML = "";
  if (faces.length === 0) {
    dom.matches.innerText = "no faces detected";
    return;
  }
  faces.forEach((f, i) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "8px";
    row.style.margin = "4px 0";
    const text = document.createElement("div");
    text.innerText = `face ${i + 1}: ${labels[i] || "unknown"}`;
    row.appendChild(text);
    const tracked = trackedFaces.find(
      (tf) => tf.face.box && f.box && Math.abs(tf.face.box[0] - f.box[0]) < 50 && Math.abs(tf.face.box[1] - f.box[1]) < 50
    );
    if (tracked && !tracked.isMatched) {
      const status = document.createElement("div");
      status.style.fontSize = "12px";
      status.style.color = "#888";
      const remaining = Math.max(0, 5e3 - tracked.trackingDuration);
      status.innerText = `(${(remaining / 1e3).toFixed(1)}\uCD08 \uD6C4 \uC790\uB3D9 \uB4F1\uB85D)`;
      row.appendChild(status);
    }
    if (f.box && dom.video.videoWidth > 0) {
      const [bx, by, bw, bh] = f.box;
      const sx = Math.max(0, Math.floor(bx));
      const sy = Math.max(0, Math.floor(by));
      const sw = Math.min(dom.video.videoWidth - sx, Math.floor(bw));
      const sh = Math.min(dom.video.videoHeight - sy, Math.floor(bh));
      const live = document.createElement("canvas");
      live.width = 96;
      live.height = 96;
      const lctx = live.getContext("2d");
      if (lctx && sw > 0 && sh > 0) lctx.drawImage(dom.video, sx, sy, sw, sh, 0, 0, 96, 96);
      row.appendChild(live);
    }
    const rec = matchedRecs[i];
    if (rec == null ? void 0 : rec.image) {
      const c = document.createElement("canvas");
      c.width = rec.image.width;
      c.height = rec.image.height;
      c.style.width = "96px";
      c.style.height = "96px";
      const cctx = c.getContext("2d");
      cctx == null ? void 0 : cctx.putImageData(rec.image, 0, 0);
      row.appendChild(c);
    }
    dom.matches.appendChild(row);
  });
}
async function saveRecords() {
  var _a2;
  if (dom.name.value.length > 0) {
    const faces = human.result.face;
    const faceToSave = faces.sort((a, b) => b.box[2] * b.box[3] - a.box[2] * a.box[3])[0];
    if (!(faceToSave == null ? void 0 : faceToSave.embedding)) {
      log2("no face embedding to save");
      return;
    }
    const image = getFaceCropImageData(dom.video, faceToSave.box, 128);
    const rec = { id: 0, name: dom.name.value, descriptor: faceToSave.embedding, image };
    await save(rec);
    await refreshKnownFaces();
    log2("saved face record:", rec.name, "descriptor length:", ((_a2 = faceToSave.embedding) == null ? void 0 : _a2.length) || 0);
    log2("known face records:", knownFaces.length);
  } else {
    log2("invalid name");
  }
}
async function deleteRecord() {
  if (current.record && current.record.id > 0) {
    await remove(current.record);
    await refreshKnownFaces();
  }
}
async function main() {
  dom.match.style.display = "flex";
  dom.save.style.display = "flex";
  dom.delete.style.display = "flex";
  dom.source.style.display = "none";
  dom.canvas.style.height = "";
  document.body.style.background = "black";
  if (dom.video.paused) void dom.video.play();
  await detectionLoop();
}
async function init() {
  log2("human version:", human.version, "| tfjs version:", human.tf.version["tfjs-core"]);
  log2("options:", JSON.stringify(options).replace(/{|}|"|\[|\]/g, "").replace(/,/g, " "));
  log2("initializing webcam...");
  await webCam();
  log2("loading human models...");
  await human.load();
  log2("initializing human...");
  log2("loading face database...");
  await refreshKnownFaces();
  faceTracker = new FaceTracker(knownDescriptors, knownFaces, matchOptions, human);
  log2("face tracker initialized");
  dom.save.addEventListener("click", saveRecords);
  dom.delete.addEventListener("click", deleteRecord);
  await human.warmup();
  await main();
}
window.onload = init;
async function refreshKnownFaces() {
  knownFaces = await load();
  knownDescriptors = knownFaces.map((rec) => rec.descriptor).filter((d) => d.length > 0);
  log2("known face records:", knownFaces.length);
}
//# sourceMappingURL=index.js.map
