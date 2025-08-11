/**
 * Human demo for browsers
 * @default Human Library
 * @summary <https://github.com/vladmandic/human>
 * @author <https://github.com/vladmandic>
 * @copyright <https://github.com/vladmandic>
 * @license MIT
 */

import * as H from '../../dist/human.esm.js'; // equivalent of @vladmandic/Human
import * as indexDb from './indexdb'; // methods to deal with indexdb

const humanConfig: Partial<H.Config> = { // user configuration for human, used to fine-tune behavior
  cacheSensitivity: 0.01,
  modelBasePath: '../../models',
  filter: { enabled: true, equalization: true }, // lets run with histogram equilizer
  backend: 'humangl',
  debug: true,
  face: {
    enabled: true,
    detector: { maxDetected: 3, rotation: true, return: false, mask: false }, // no need to return tensors in realtime mode
    description: { enabled: true }, // default model for face descriptor extraction is faceres
    // mobilefacenet: { enabled: true, modelPath: 'https://vladmandic.github.io/human-models/models/mobilefacenet.json' }, // alternative model
    // insightface: { enabled: true, modelPath: 'https://vladmandic.github.io/insightface/models/insightface-mobilenet-swish.json' }, // alternative model
    iris: { enabled: false }, // iris disabled: operate without gaze/gesture
    emotion: { enabled: false }, // not needed
    // antispoof: { enabled: true }, // enable optional antispoof module
    // liveness: { enabled: true }, // enable optional liveness module
  },
  body: { enabled: false },
  hand: { enabled: false },
  object: { enabled: false },
  // gesture: { enabled: true }, // parses face and iris gestures
};

// const matchOptions = { order: 2, multiplier: 1000, min: 0.0, max: 1.0 }; // for embedding model
const matchOptions = { order: 2, multiplier: 25, min: 0.2, max: 0.8 }; // for faceres model

const options = {
  minConfidence: 0.6, // overal face confidence for box, face, gender, real, live
  minSize: 224, // min input to face descriptor model before degradation
  maxTime: 30000, // max time before giving up
  blinkMin: 10, // minimum duration of a valid blink
  blinkMax: 800, // maximum duration of a valid blink
  threshold: 0.5, // minimum similarity
  distanceMin: 0.4, // closest that face is allowed to be to the cammera in cm
  distanceMax: 1.0, // farthest that face is allowed to be to the cammera in cm
  mask: humanConfig.face?.detector?.mask,
  rotation: humanConfig.face?.detector?.rotation,
  ...matchOptions,
};

// Real-time mode: validation gates removed

const current: { face: H.FaceResult | null, record: indexDb.FaceRecord | null } = { face: null, record: null }; // backward-compatible current selection
let knownFaces: indexDb.FaceRecord[] = [];
let knownDescriptors: number[][] = [];

// gesture/iris disabled: remove blink and gaze-related state

// let db: Array<{ name: string, source: string, embedding: number[] }> = []; // holds loaded face descriptor database
const human = new H.Human(humanConfig); // create instance of human with overrides from user configuration

human.env.perfadd = false; // is performance data showing instant or total values
human.draw.options.font = 'small-caps 18px "Lato"'; // set font used to draw labels when using draw methods
human.draw.options.lineHeight = 20;

const dom = { // grab instances of dom objects so we dont have to look them up later
  video: document.getElementById('video') as HTMLVideoElement,
  canvas: document.getElementById('canvas') as HTMLCanvasElement,
  log: document.getElementById('log') as HTMLPreElement,
  fps: document.getElementById('fps') as HTMLPreElement,
  match: document.getElementById('match') as HTMLDivElement,
  matches: document.getElementById('matches') as HTMLDivElement,
  name: document.getElementById('name') as HTMLInputElement,
  save: document.getElementById('save') as HTMLSpanElement,
  delete: document.getElementById('delete') as HTMLSpanElement,
  source: document.getElementById('source') as HTMLCanvasElement,
};
const timestamp = { detect: 0, draw: 0 }; // holds information used to calculate performance and possible memory leaks
let startTime = 0;

const log = (...msg) => { // helper method to output messages
  dom.log.innerText += msg.join(' ') + '\n';
  console.log(...msg); // eslint-disable-line no-console
};

function drawFaceCrop(ctx: CanvasRenderingContext2D, video: HTMLVideoElement, box: [number, number, number, number], destX: number, destY: number, size = 96) {
  const [bx, by, bw, bh] = box;
  const sx = Math.max(0, Math.floor(bx));
  const sy = Math.max(0, Math.floor(by));
  const sw = Math.max(1, Math.min(video.videoWidth - sx, Math.floor(bw)));
  const sh = Math.max(1, Math.min(video.videoHeight - sy, Math.floor(bh)));
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(video, sx, sy, sw, sh, destX, Math.max(0, destY), size, size);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  ctx.strokeRect(destX - 0.5, Math.max(0, destY) - 0.5, size + 1, size + 1);
}

function getFaceCropImageData(video: HTMLVideoElement, box: [number, number, number, number], size = 128): ImageData {
  const [bx, by, bw, bh] = box;
  const sx = Math.max(0, Math.floor(bx));
  const sy = Math.max(0, Math.floor(by));
  const sw = Math.max(1, Math.min(video.videoWidth - sx, Math.floor(bw)));
  const sh = Math.max(1, Math.min(video.videoHeight - sy, Math.floor(bh)));
  const off = document.createElement('canvas');
  off.width = size; off.height = size;
  const octx = off.getContext('2d') as CanvasRenderingContext2D;
  octx.imageSmoothingEnabled = true;
  octx.imageSmoothingQuality = 'high';
  octx.drawImage(video, sx, sy, sw, sh, 0, 0, size, size);
  return octx.getImageData(0, 0, size, size);
}

async function webCam() { // initialize webcam
  // @ts-ignore resizeMode is not yet defined in tslib
  const cameraOptions: MediaStreamConstraints = { audio: false, video: { facingMode: 'user', resizeMode: 'none', width: { ideal: document.body.clientWidth } } };
  const stream: MediaStream = await navigator.mediaDevices.getUserMedia(cameraOptions);
  const ready = new Promise((resolve) => { dom.video.onloadeddata = () => resolve(true); });
  dom.video.srcObject = stream;
  void dom.video.play();
  await ready;
  // set canvas internal size to match video pixels
  dom.canvas.width = dom.video.videoWidth;
  dom.canvas.height = dom.video.videoHeight;
  // ensure canvas CSS size tracks the video's rendered size
  const stage = document.getElementById('stage') as HTMLDivElement | null;
  if (stage) {
    const resize = () => {
      // canvas is absolutely positioned with width/height 100% in CSS, so nothing else required
      // but some browsers need a reflow to sync; toggling transform forces it
      dom.canvas.style.transform = 'translateZ(0)';
    };
    new ResizeObserver(resize).observe(stage);
    resize();
  }
  if (human.env.initial) log('video:', dom.video.videoWidth, dom.video.videoHeight, '|', stream.getVideoTracks()[0].label);
  dom.canvas.onclick = () => { // pause when clicked on screen and resume on next click
    if (dom.video.paused) void dom.video.play();
    else dom.video.pause();
  };
}

async function detectionLoop() { // main detection + render + match loop
  if (dom.video.paused) return;
  await human.detect(dom.video);
  const interpolated = human.next(human.result);
  const ctx = dom.canvas.getContext('2d');
  ctx?.clearRect(0, 0, dom.canvas.width, dom.canvas.height);
  // draw and match up to 3 faces
  const faces = human.result.face.slice(0, 3);
  const labels: string[] = [];
  const matchedRecs: Array<indexDb.FaceRecord | null> = [];
  if (ctx) {
    ctx.save();
    ctx.font = '16px Lato';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
  }
  let primaryBest = null as null | { name: string, similarity: number, record: indexDb.FaceRecord };
  for (let i = 0; i < faces.length; i += 1) {
    const f = faces[i];
    let label = 'unknown';
    let matchedRec: indexDb.FaceRecord | null = null;
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
    // draw box and label near face and crop preview above
    if (ctx && f.box) {
      const [x, y, w, h] = f.box as [number, number, number, number];
      ctx.strokeStyle = 'lime';
      ctx.strokeRect(x, y, w, h);
      const ty = Math.max(0, y - 6);
      ctx.strokeStyle = 'black';
      ctx.strokeText(label, x, ty);
      ctx.fillText(label, x, ty);
    }
    labels.push(label);
    matchedRecs.push(matchedRec);
  }
  // update current selection for save/delete (use primary best match or largest face)
  current.face = faces.sort((a, b) => (b.box[2] * b.box[3]) - (a.box[2] * a.box[3]))[0] || null;
  current.record = primaryBest ? primaryBest.record : null;
  // update matches list UI
  if (dom.matches) {
    dom.matches.innerHTML = '';
    faces.forEach((f, i) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '8px';
      row.style.margin = '4px 0';
      const text = document.createElement('div');
      text.innerText = `face ${i + 1}: ${labels[i] || 'unknown'}`;
      row.appendChild(text);
      // live crop from video
      if (f.box && dom.video.videoWidth > 0) {
        const [bx, by, bw, bh] = f.box as [number, number, number, number];
        const sx = Math.max(0, Math.floor(bx));
        const sy = Math.max(0, Math.floor(by));
        const sw = Math.min(dom.video.videoWidth - sx, Math.floor(bw));
        const sh = Math.min(dom.video.videoHeight - sy, Math.floor(bh));
        const live = document.createElement('canvas');
        live.width = 96; live.height = 96;
        const lctx = live.getContext('2d');
        if (lctx && sw > 0 && sh > 0) lctx.drawImage(dom.video, sx, sy, sw, sh, 0, 0, 96, 96);
        row.appendChild(live);
      }
      const rec = matchedRecs[i];
      if (rec?.image) {
        const c = document.createElement('canvas');
        c.width = rec.image.width;
        c.height = rec.image.height;
        c.style.width = '96px';
        c.style.height = '96px';
        const cctx = c.getContext('2d');
        cctx?.putImageData(rec.image, 0, 0);
        row.appendChild(c);
      }
      dom.matches.appendChild(row);
    });
    if (faces.length === 0) dom.matches.innerText = 'no faces detected';
  }
  const now = human.now();
  timestamp.detect = now;
  requestAnimationFrame(detectionLoop);
}

// validation removed

async function saveRecords() {
  if (dom.name.value.length > 0) {
    // choose the largest detected face for saving
    const faces = human.result.face;
    const faceToSave = faces.sort((a, b) => (b.box[2] * b.box[3]) - (a.box[2] * a.box[3]))[0];
    if (!faceToSave?.embedding) { log('no face embedding to save'); return; }
    const image = getFaceCropImageData(dom.video, faceToSave.box as [number, number, number, number], 128);
    const rec = { id: 0, name: dom.name.value, descriptor: faceToSave.embedding as number[], image };
    await indexDb.save(rec);
    await refreshKnownFaces();
    log('saved face record:', rec.name, 'descriptor length:', (faceToSave.embedding?.length || 0));
    log('known face records:', knownFaces.length);
  } else {
    log('invalid name');
  }
}

async function deleteRecord() {
  if (current.record && current.record.id > 0) {
    await indexDb.remove(current.record);
    await refreshKnownFaces();
  }
}

// detectFace flow removed; handled in detectionLoop per-frame

async function main() { // main entry point for continuous mode
  dom.match.style.display = 'flex';
  dom.save.style.display = 'flex';
  dom.delete.style.display = 'flex';
  dom.source.style.display = 'none';
  dom.canvas.style.height = '';
  document.body.style.background = 'black';
  if (dom.video.paused) void dom.video.play();
  await detectionLoop();
}

async function init() {
  log('human version:', human.version, '| tfjs version:', human.tf.version['tfjs-core']);
  log('options:', JSON.stringify(options).replace(/{|}|"|\[|\]/g, '').replace(/,/g, ' '));
  log('initializing webcam...');
  await webCam(); // start webcam
  log('loading human models...');
  await human.load(); // preload all models
  log('initializing human...');
  // log('face embedding model:', humanConfig.face.description.enabled ? 'faceres' : '', humanConfig.face['mobilefacenet']?.enabled ? 'mobilefacenet' : '', humanConfig.face['insightface']?.enabled ? 'insightface' : '');
  log('loading face database...');
  await refreshKnownFaces();
  dom.save.addEventListener('click', saveRecords);
  dom.delete.addEventListener('click', deleteRecord);
  await human.warmup(); // warmup function to initialize backend for future faster detection
  await main();
}

window.onload = init;

async function refreshKnownFaces() {
  knownFaces = await indexDb.load();
  knownDescriptors = knownFaces.map((rec) => rec.descriptor).filter((d) => d.length > 0);
  log('known face records:', knownFaces.length);
}
