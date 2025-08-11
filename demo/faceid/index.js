/*
  Human
  homepage: <https://github.com/vladmandic/human>
  author: <https://github.com/vladmandic>'
*/


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
var matchOptions = { order: 2, multiplier: 25, min: 0.2, max: 0.8 };
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
  if (dom.video.paused) return;
  await human.detect(dom.video);
  const interpolated = human.next(human.result);
  const ctx = dom.canvas.getContext("2d");
  ctx == null ? void 0 : ctx.clearRect(0, 0, dom.canvas.width, dom.canvas.height);
  const faces = human.result.face.slice(0, 3);
  const labels = [];
  const matchedRecs = [];
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
    if (f.embedding && f.embedding.length > 0 && knownDescriptors.length > 0) {
      const res = human.match.find(f.embedding, knownDescriptors, matchOptions);
      const rec = knownFaces[res.index];
      if (rec) {
        matchedRec = rec;
        label = `${rec.name} (${Math.round(res.similarity * 100)}%)`;
        if (!primaryBest || res.similarity > primaryBest.similarity) primaryBest = { name: rec.name, similarity: res.similarity, record: rec };
      } else {
        label = `unknown (${Math.round(res.similarity * 100)}%)`;
      }
    }
    if (ctx && f.box) {
      const [x, y, w, h] = f.box;
      ctx.strokeStyle = "lime";
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
  if (dom.matches) {
    dom.matches.innerHTML = "";
    faces.forEach((f, i) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "8px";
      row.style.margin = "4px 0";
      const text = document.createElement("div");
      text.innerText = `face ${i + 1}: ${labels[i] || "unknown"}`;
      row.appendChild(text);
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
    if (faces.length === 0) dom.matches.innerText = "no faces detected";
  }
  const now = human.now();
  timestamp.detect = now;
  requestAnimationFrame(detectionLoop);
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
