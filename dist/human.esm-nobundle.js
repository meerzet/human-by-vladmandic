/*
  Human
  homepage: <https://github.com/vladmandic/human>
  author: <https://github.com/vladmandic>'
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod3, secondTarget) => (__copyProps(target, mod3, "default"), secondTarget && __copyProps(secondTarget, mod3, "default"));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// dist/tfjs.esm.js
var tfjs_esm_exports = {};
__export(tfjs_esm_exports, {
  node: () => node,
  version: () => version7
});
__reExport(tfjs_esm_exports, dist_star);
__reExport(tfjs_esm_exports, dist_star2);
__reExport(tfjs_esm_exports, dist_star3);
__reExport(tfjs_esm_exports, dist_star4);
__reExport(tfjs_esm_exports, dist_star5);
__reExport(tfjs_esm_exports, dist_star6);
import * as dist_star from "@tensorflow/tfjs-core/dist/index.js";
import * as dist_star2 from "@tensorflow/tfjs-converter/dist/index.js";
import * as dist_star3 from "@tensorflow/tfjs-backend-cpu/dist/index.js";
import * as dist_star4 from "@tensorflow/tfjs-backend-webgl/dist/index.js";
import * as dist_star5 from "@tensorflow/tfjs-backend-wasm/dist/index.js";
import * as dist_star6 from "@tensorflow/tfjs-backend-webgpu/dist/index.js";
var version = "4.22.0";
var version2 = "4.22.0";
var version3 = "4.22.0";
var version4 = "4.22.0";
var version5 = "4.22.0";
var version6 = "4.22.0";
var version7 = {
  tfjs: version,
  "tfjs-core": version,
  // 'tfjs-data': tfjsDataVersion,
  // 'tfjs-layers': tfjsLayersVersion,
  "tfjs-converter": version2,
  "tfjs-backend-cpu": version3,
  "tfjs-backend-webgl": version4,
  "tfjs-backend-wasm": version5,
  "tfjs-backend-webgpu": version6
};
var node = void 0;

// package.json
var version8 = "3.3.5";

// src/config.ts
var config = {
  backend: "",
  modelBasePath: "",
  cacheModels: true,
  validateModels: true,
  wasmPath: "",
  wasmPlatformFetch: false,
  debug: false,
  async: true,
  warmup: "full",
  cacheSensitivity: 0.7,
  skipAllowed: false,
  deallocate: false,
  flags: {},
  softwareKernels: false,
  filter: {
    enabled: true,
    equalization: false,
    width: 0,
    height: 0,
    flip: false,
    return: true,
    autoBrightness: true,
    brightness: 0,
    contrast: 0,
    sharpness: 0,
    blur: 0,
    saturation: 0,
    hue: 0,
    negative: false,
    sepia: false,
    vintage: false,
    kodachrome: false,
    technicolor: false,
    polaroid: false,
    pixelate: 0
  },
  gesture: {
    enabled: true
  },
  face: {
    enabled: true,
    detector: {
      modelPath: "blazeface.json",
      rotation: false,
      maxDetected: 1,
      skipFrames: 99,
      skipTime: 2500,
      minConfidence: 0.2,
      minSize: 0,
      iouThreshold: 0.1,
      scale: 1.4,
      mask: false,
      return: false
    },
    mesh: {
      enabled: true,
      modelPath: "facemesh.json",
      keepInvalid: false
    },
    attention: {
      enabled: false,
      modelPath: "facemesh-attention.json"
    },
    iris: {
      enabled: true,
      scale: 2.3,
      modelPath: "iris.json"
    },
    emotion: {
      enabled: true,
      minConfidence: 0.1,
      skipFrames: 99,
      skipTime: 1500,
      modelPath: "emotion.json"
    },
    description: {
      enabled: true,
      modelPath: "faceres.json",
      skipFrames: 99,
      skipTime: 3e3,
      minConfidence: 0.1
    },
    antispoof: {
      enabled: false,
      skipFrames: 99,
      skipTime: 4e3,
      modelPath: "antispoof.json"
    },
    liveness: {
      enabled: false,
      skipFrames: 99,
      skipTime: 4e3,
      modelPath: "liveness.json"
    }
  },
  body: {
    enabled: true,
    modelPath: "movenet-lightning.json",
    maxDetected: -1,
    minConfidence: 0.3,
    skipFrames: 1,
    skipTime: 200
  },
  hand: {
    enabled: true,
    rotation: true,
    skipFrames: 99,
    skipTime: 1e3,
    minConfidence: 0.5,
    iouThreshold: 0.2,
    maxDetected: -1,
    landmarks: true,
    detector: {
      modelPath: "handtrack.json"
    },
    skeleton: {
      modelPath: "handlandmark-lite.json"
    }
  },
  object: {
    enabled: false,
    modelPath: "centernet.json",
    minConfidence: 0.2,
    iouThreshold: 0.4,
    maxDetected: 10,
    skipFrames: 99,
    skipTime: 2e3
  },
  segmentation: {
    enabled: false,
    modelPath: "rvm.json",
    ratio: 0.5,
    mode: "default"
  }
};

// src/draw/draw.ts
var draw_exports = {};
__export(draw_exports, {
  all: () => all,
  body: () => body,
  canvas: () => canvas2,
  face: () => face,
  gesture: () => gesture,
  hand: () => hand,
  init: () => init,
  object: () => object,
  options: () => options,
  person: () => person,
  tensor: () => tensor2
});

// src/image/imagefxshaders.ts
var vertexIdentity = `
  precision highp float;
  attribute vec2 pos;
  attribute vec2 uv;
  varying vec2 vUv;
  uniform float flipY;
  void main(void) {
    vUv = uv;
    gl_Position = vec4(pos.x, pos.y*flipY, 0.0, 1.);
  }
`;
var colorMatrixWithAlpha = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform float m[20];
  void main(void) {
    vec4 c = texture2D(texture, vUv);
    gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[3] * c.a + m[4];
    gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[8] * c.a + m[9];
    gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[13] * c.a + m[14];
    gl_FragColor.a = m[15] * c.r + m[16] * c.g + m[17] * c.b + m[18] * c.a + m[19];
  }
`;
var colorMatrixWithoutAlpha = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform float m[20];
  void main(void) {
    vec4 c = texture2D(texture, vUv);
    gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[4];
    gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[9];
    gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[14];
    gl_FragColor.a = c.a;
  }
`;
var pixelate = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 size;
  uniform sampler2D texture;
  vec2 pixelate(vec2 coord, vec2 size) {
    return floor( coord / size ) * size;
  }
  void main(void) {
    gl_FragColor = vec4(0.0);
    vec2 coord = pixelate(vUv, size);
    gl_FragColor += texture2D(texture, coord);
  }
`;
var blur = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform vec2 px;
  void main(void) {
    gl_FragColor = vec4(0.0);
    gl_FragColor += texture2D(texture, vUv + vec2(-7.0*px.x, -7.0*px.y))*0.0044299121055113265;
    gl_FragColor += texture2D(texture, vUv + vec2(-6.0*px.x, -6.0*px.y))*0.00895781211794;
    gl_FragColor += texture2D(texture, vUv + vec2(-5.0*px.x, -5.0*px.y))*0.0215963866053;
    gl_FragColor += texture2D(texture, vUv + vec2(-4.0*px.x, -4.0*px.y))*0.0443683338718;
    gl_FragColor += texture2D(texture, vUv + vec2(-3.0*px.x, -3.0*px.y))*0.0776744219933;
    gl_FragColor += texture2D(texture, vUv + vec2(-2.0*px.x, -2.0*px.y))*0.115876621105;
    gl_FragColor += texture2D(texture, vUv + vec2(-1.0*px.x, -1.0*px.y))*0.147308056121;
    gl_FragColor += texture2D(texture, vUv                             )*0.159576912161;
    gl_FragColor += texture2D(texture, vUv + vec2( 1.0*px.x,  1.0*px.y))*0.147308056121;
    gl_FragColor += texture2D(texture, vUv + vec2( 2.0*px.x,  2.0*px.y))*0.115876621105;
    gl_FragColor += texture2D(texture, vUv + vec2( 3.0*px.x,  3.0*px.y))*0.0776744219933;
    gl_FragColor += texture2D(texture, vUv + vec2( 4.0*px.x,  4.0*px.y))*0.0443683338718;
    gl_FragColor += texture2D(texture, vUv + vec2( 5.0*px.x,  5.0*px.y))*0.0215963866053;
    gl_FragColor += texture2D(texture, vUv + vec2( 6.0*px.x,  6.0*px.y))*0.00895781211794;
    gl_FragColor += texture2D(texture, vUv + vec2( 7.0*px.x,  7.0*px.y))*0.0044299121055113265;
  }
`;
var convolution = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D texture;
  uniform vec2 px;
  uniform float m[9];
  void main(void) {
    vec4 c11 = texture2D(texture, vUv - px); // top left
    vec4 c12 = texture2D(texture, vec2(vUv.x, vUv.y - px.y)); // top center
    vec4 c13 = texture2D(texture, vec2(vUv.x + px.x, vUv.y - px.y)); // top right
    vec4 c21 = texture2D(texture, vec2(vUv.x - px.x, vUv.y) ); // mid left
    vec4 c22 = texture2D(texture, vUv); // mid center
    vec4 c23 = texture2D(texture, vec2(vUv.x + px.x, vUv.y) ); // mid right
    vec4 c31 = texture2D(texture, vec2(vUv.x - px.x, vUv.y + px.y) ); // bottom left
    vec4 c32 = texture2D(texture, vec2(vUv.x, vUv.y + px.y) ); // bottom center
    vec4 c33 = texture2D(texture, vUv + px ); // bottom right
    gl_FragColor = 
    c11 * m[0] + c12 * m[1] + c22 * m[2] +
    c21 * m[3] + c22 * m[4] + c23 * m[5] +
    c31 * m[6] + c32 * m[7] + c33 * m[8];
    gl_FragColor.a = c22.a;
  }
`;

// src/util/util.ts
function log(...msg) {
  const dt = /* @__PURE__ */ new Date();
  const ts = `${dt.getHours().toString().padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt.getSeconds().toString().padStart(2, "0")}.${dt.getMilliseconds().toString().padStart(3, "0")}`;
  if (msg) console.log(ts, "Human:", ...msg);
}
function join(folder, file) {
  const separator = folder.endsWith("/") ? "" : "/";
  const skipJoin = file.startsWith(".") || file.startsWith("/") || file.startsWith("http:") || file.startsWith("https:") || file.startsWith("file:");
  const path = skipJoin ? `${file}` : `${folder}${separator}${file}`;
  if (!path.toLocaleLowerCase().includes(".json")) throw new Error(`modelpath error: expecting json file: ${path}`);
  return path;
}
var now = () => {
  if (typeof performance !== "undefined") return performance.now();
  return parseInt((Number(process.hrtime.bigint()) / 1e3 / 1e3).toString());
};
function validate(defaults, config3, parent = "config", msgs = []) {
  for (const key of Object.keys(config3)) {
    if (typeof config3[key] === "object") {
      validate(defaults[key], config3[key], key, msgs);
    } else {
      const defined = defaults && typeof defaults[key] !== "undefined";
      if (!defined) msgs.push({ reason: "unknown property", where: `${parent}.${key} = ${config3[key]}` });
      const same = defaults && typeof defaults[key] === typeof config3[key];
      if (defined && !same) msgs.push({ reason: "property type mismatch", where: `${parent}.${key} = ${config3[key]}`, expected: typeof defaults[key] });
    }
  }
  if (config3.debug && parent === "config" && msgs.length > 0) log("invalid configuration", msgs);
  return msgs;
}
function mergeDeep(...objects) {
  const isObject = (obj) => obj && typeof obj === "object";
  return objects.reduce((prev, obj) => {
    Object.keys(obj || {}).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];
      if (Array.isArray(pVal) && Array.isArray(oVal)) prev[key] = pVal.concat(...oVal);
      else if (isObject(pVal) && isObject(oVal)) prev[key] = mergeDeep(pVal, oVal);
      else prev[key] = oVal;
    });
    return prev;
  }, {});
}

// src/image/imagefx.ts
var collect = (source, prefix, collection) => {
  const r = new RegExp("\\b" + prefix + " \\w+ (\\w+)", "ig");
  source.replace(r, (match, name) => {
    collection[name] = 0;
    return match;
  });
};
var GLProgram = class {
  constructor(gl, vertexSource, fragmentSource) {
    __publicField(this, "uniform", {});
    __publicField(this, "attribute", {});
    __publicField(this, "gl");
    __publicField(this, "id");
    __publicField(this, "compile", (source, type) => {
      const shader = this.gl.createShader(type);
      if (!shader) {
        log("filter: could not create shader");
        return null;
      }
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);
      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        log(`filter: gl compile failed: ${this.gl.getShaderInfoLog(shader) || "unknown"}`);
        return null;
      }
      return shader;
    });
    this.gl = gl;
    const vertexShader = this.compile(vertexSource, this.gl.VERTEX_SHADER);
    const fragmentShader = this.compile(fragmentSource, this.gl.FRAGMENT_SHADER);
    this.id = this.gl.createProgram();
    if (!vertexShader || !fragmentShader) return;
    if (!this.id) {
      log("filter: could not create webgl program");
      return;
    }
    this.gl.attachShader(this.id, vertexShader);
    this.gl.attachShader(this.id, fragmentShader);
    this.gl.linkProgram(this.id);
    if (!this.gl.getProgramParameter(this.id, this.gl.LINK_STATUS)) {
      log(`filter: gl link failed: ${this.gl.getProgramInfoLog(this.id) || "unknown"}`);
      return;
    }
    this.gl.useProgram(this.id);
    collect(vertexSource, "attribute", this.attribute);
    for (const a in this.attribute) this.attribute[a] = this.gl.getAttribLocation(this.id, a);
    collect(vertexSource, "uniform", this.uniform);
    collect(fragmentSource, "uniform", this.uniform);
    for (const u in this.uniform) this.uniform[u] = this.gl.getUniformLocation(this.id, u);
  }
};
function GLImageFilter() {
  let drawCount = 0;
  let sourceTexture = null;
  let lastInChain = false;
  let currentFramebufferIndex = -1;
  let tempFramebuffers = [null, null];
  let filterChain = [];
  let vertexBuffer = null;
  let currentProgram = null;
  const fxcanvas = canvas(100, 100);
  const shaderProgramCache = {};
  const DRAW = { INTERMEDIATE: 1 };
  const gl = fxcanvas.getContext("webgl");
  if (!gl) {
    log("filter: cannot get webgl context");
    return;
  }
  this.gl = gl;
  function resize(width, height) {
    if (width === fxcanvas.width && height === fxcanvas.height) return;
    fxcanvas.width = width;
    fxcanvas.height = height;
    if (!vertexBuffer) {
      const vertices = new Float32Array([-1, -1, 0, 1, 1, -1, 1, 1, -1, 1, 0, 0, -1, 1, 0, 0, 1, -1, 1, 1, 1, 1, 1, 0]);
      vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    }
    gl.viewport(0, 0, fxcanvas.width, fxcanvas.height);
    tempFramebuffers = [null, null];
  }
  function createFramebufferTexture(width, height) {
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    const renderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { fbo, texture };
  }
  function getTempFramebuffer(index2) {
    tempFramebuffers[index2] = tempFramebuffers[index2] || createFramebufferTexture(fxcanvas.width, fxcanvas.height);
    return tempFramebuffers[index2];
  }
  function draw(flags = 0) {
    if (!currentProgram) return;
    let source = null;
    let target = null;
    let flipY = false;
    if (drawCount === 0) source = sourceTexture;
    else source = getTempFramebuffer(currentFramebufferIndex).texture || null;
    drawCount++;
    if (lastInChain && !(flags & DRAW.INTERMEDIATE)) {
      target = null;
      flipY = drawCount % 2 === 0;
    } else {
      currentFramebufferIndex = (currentFramebufferIndex + 1) % 2;
      target = getTempFramebuffer(currentFramebufferIndex).fbo || null;
    }
    gl.bindTexture(gl.TEXTURE_2D, source);
    gl.bindFramebuffer(gl.FRAMEBUFFER, target);
    gl.uniform1f(currentProgram.uniform["flipY"], flipY ? -1 : 1);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  function compileShader(fragmentSource) {
    if (shaderProgramCache[fragmentSource]) {
      currentProgram = shaderProgramCache[fragmentSource];
      gl.useProgram((currentProgram ? currentProgram.id : null) || null);
      return currentProgram;
    }
    currentProgram = new GLProgram(gl, vertexIdentity, fragmentSource);
    if (!currentProgram) {
      log("filter: could not get webgl program");
      return null;
    }
    const floatSize = Float32Array.BYTES_PER_ELEMENT;
    const vertSize = 4 * floatSize;
    gl.enableVertexAttribArray(currentProgram.attribute["pos"]);
    gl.vertexAttribPointer(currentProgram.attribute["pos"], 2, gl.FLOAT, false, vertSize, 0 * floatSize);
    gl.enableVertexAttribArray(currentProgram.attribute["uv"]);
    gl.vertexAttribPointer(currentProgram.attribute["uv"], 2, gl.FLOAT, false, vertSize, 2 * floatSize);
    shaderProgramCache[fragmentSource] = currentProgram;
    return currentProgram;
  }
  const filter = {
    colorMatrix: (matrix) => {
      const m = new Float32Array(matrix);
      m[4] /= 255;
      m[9] /= 255;
      m[14] /= 255;
      m[19] /= 255;
      const shader = m[18] === 1 && m[3] === 0 && m[8] === 0 && m[13] === 0 && m[15] === 0 && m[16] === 0 && m[17] === 0 && m[19] === 0 ? colorMatrixWithoutAlpha : colorMatrixWithAlpha;
      const program = compileShader(shader);
      if (!program) return;
      gl.uniform1fv(program.uniform["m"], m);
      draw();
    },
    brightness: (brightness) => {
      const b = (brightness || 0) + 1;
      filter.colorMatrix([
        b,
        0,
        0,
        0,
        0,
        0,
        b,
        0,
        0,
        0,
        0,
        0,
        b,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    saturation: (amount) => {
      const x = (amount || 0) * 2 / 3 + 1;
      const y = (x - 1) * -0.5;
      filter.colorMatrix([
        x,
        y,
        y,
        0,
        0,
        y,
        x,
        y,
        0,
        0,
        y,
        y,
        x,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    desaturate: () => {
      filter.saturation(-1);
    },
    contrast: (amount) => {
      const v = (amount || 0) + 1;
      const o = -128 * (v - 1);
      filter.colorMatrix([
        v,
        0,
        0,
        0,
        o,
        0,
        v,
        0,
        0,
        o,
        0,
        0,
        v,
        0,
        o,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    negative: () => {
      filter.contrast(-2);
    },
    hue: (rotation) => {
      rotation = (rotation || 0) / 180 * Math.PI;
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      const lumR = 0.213;
      const lumG = 0.715;
      const lumB = 0.072;
      filter.colorMatrix([
        lumR + cos * (1 - lumR) + sin * -lumR,
        lumG + cos * -lumG + sin * -lumG,
        lumB + cos * -lumB + sin * (1 - lumB),
        0,
        0,
        lumR + cos * -lumR + sin * 0.143,
        lumG + cos * (1 - lumG) + sin * 0.14,
        lumB + cos * -lumB + sin * -0.283,
        0,
        0,
        lumR + cos * -lumR + sin * -(1 - lumR),
        lumG + cos * -lumG + sin * lumG,
        lumB + cos * (1 - lumB) + sin * lumB,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    desaturateLuminance: () => {
      filter.colorMatrix([
        0.2764723,
        0.929708,
        0.0938197,
        0,
        -37.1,
        0.2764723,
        0.929708,
        0.0938197,
        0,
        -37.1,
        0.2764723,
        0.929708,
        0.0938197,
        0,
        -37.1,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    sepia: () => {
      filter.colorMatrix([
        0.393,
        0.7689999,
        0.18899999,
        0,
        0,
        0.349,
        0.6859999,
        0.16799999,
        0,
        0,
        0.272,
        0.5339999,
        0.13099999,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    brownie: () => {
      filter.colorMatrix([
        0.5997023498159715,
        0.34553243048391263,
        -0.2708298674538042,
        0,
        47.43192855600873,
        -0.037703249837783157,
        0.8609577587992641,
        0.15059552388459913,
        0,
        -36.96841498319127,
        0.24113635128153335,
        -0.07441037908422492,
        0.44972182064877153,
        0,
        -7.562075277591283,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    vintagePinhole: () => {
      filter.colorMatrix([
        0.6279345635605994,
        0.3202183420819367,
        -0.03965408211312453,
        0,
        9.651285835294123,
        0.02578397704808868,
        0.6441188644374771,
        0.03259127616149294,
        0,
        7.462829176470591,
        0.0466055556782719,
        -0.0851232987247891,
        0.5241648018700465,
        0,
        5.159190588235296,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    kodachrome: () => {
      filter.colorMatrix([
        1.1285582396593525,
        -0.3967382283601348,
        -0.03992559172921793,
        0,
        63.72958762196502,
        -0.16404339962244616,
        1.0835251566291304,
        -0.05498805115633132,
        0,
        24.732407896706203,
        -0.16786010706155763,
        -0.5603416277695248,
        1.6014850761964943,
        0,
        35.62982807460946,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    technicolor: () => {
      filter.colorMatrix([
        1.9125277891456083,
        -0.8545344976951645,
        -0.09155508482755585,
        0,
        11.793603434377337,
        -0.3087833385928097,
        1.7658908555458428,
        -0.10601743074722245,
        0,
        -70.35205161461398,
        -0.231103377548616,
        -0.7501899197440212,
        1.847597816108189,
        0,
        30.950940869491138,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    polaroid: () => {
      filter.colorMatrix([
        1.438,
        -0.062,
        -0.062,
        0,
        0,
        -0.122,
        1.378,
        -0.122,
        0,
        0,
        -0.016,
        -0.016,
        1.483,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    shiftToBGR: () => {
      filter.colorMatrix([
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    },
    convolution: (matrix) => {
      const m = new Float32Array(matrix);
      const pixelSizeX = 1 / fxcanvas.width;
      const pixelSizeY = 1 / fxcanvas.height;
      const program = compileShader(convolution);
      if (!program) return;
      gl.uniform1fv(program.uniform["m"], m);
      gl.uniform2f(program.uniform["px"], pixelSizeX, pixelSizeY);
      draw();
    },
    detectEdges: () => {
      filter.convolution.call(this, [
        0,
        1,
        0,
        1,
        -4,
        1,
        0,
        1,
        0
      ]);
    },
    sobelX: () => {
      filter.convolution.call(this, [
        -1,
        0,
        1,
        -2,
        0,
        2,
        -1,
        0,
        1
      ]);
    },
    sobelY: () => {
      filter.convolution.call(this, [
        -1,
        -2,
        -1,
        0,
        0,
        0,
        1,
        2,
        1
      ]);
    },
    sharpen: (amount) => {
      const a = amount || 1;
      filter.convolution.call(this, [
        0,
        -1 * a,
        0,
        -1 * a,
        1 + 4 * a,
        -1 * a,
        0,
        -1 * a,
        0
      ]);
    },
    emboss: (size2) => {
      const s = size2 || 1;
      filter.convolution.call(this, [
        -2 * s,
        -1 * s,
        0,
        -1 * s,
        1,
        1 * s,
        0,
        1 * s,
        2 * s
      ]);
    },
    blur: (size2) => {
      const blurSizeX = size2 / 7 / fxcanvas.width;
      const blurSizeY = size2 / 7 / fxcanvas.height;
      const program = compileShader(blur);
      if (!program) return;
      gl.uniform2f(program.uniform["px"], 0, blurSizeY);
      draw(DRAW.INTERMEDIATE);
      gl.uniform2f(program.uniform["px"], blurSizeX, 0);
      draw();
    },
    pixelate: (size2) => {
      const blurSizeX = size2 / fxcanvas.width;
      const blurSizeY = size2 / fxcanvas.height;
      const program = compileShader(pixelate);
      if (!program) return;
      gl.uniform2f(program.uniform["size"], blurSizeX, blurSizeY);
      draw();
    }
  };
  this.add = function(name) {
    const args = Array.prototype.slice.call(arguments, 1);
    const func = filter[name];
    filterChain.push({ func, args });
  };
  this.reset = function() {
    filterChain = [];
  };
  this.get = function() {
    return filterChain;
  };
  this.apply = function(image28) {
    resize(image28.width, image28.height);
    drawCount = 0;
    if (!sourceTexture) sourceTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, sourceTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image28);
    for (let i = 0; i < filterChain.length; i++) {
      lastInChain = i === filterChain.length - 1;
      const f = filterChain[i];
      f.func.apply(this, f.args || []);
    }
    return fxcanvas;
  };
  this.draw = function(image28) {
    this.add("brightness", 0);
    return this.apply(image28);
  };
}

// src/image/enhance.ts
async function histogramEqualization(inputImage) {
  const squeeze14 = inputImage.shape.length === 4 ? tfjs_esm_exports.squeeze(inputImage) : inputImage;
  const rgb3 = tfjs_esm_exports.split(squeeze14, 3, 2);
  const min2 = [tfjs_esm_exports.min(rgb3[0]), tfjs_esm_exports.min(rgb3[1]), tfjs_esm_exports.min(rgb3[2])];
  const max5 = [tfjs_esm_exports.max(rgb3[0]), tfjs_esm_exports.max(rgb3[1]), tfjs_esm_exports.max(rgb3[2])];
  const absMax = await Promise.all(max5.map((channel) => channel.data()));
  const maxValue = Math.max(absMax[0][0], absMax[1][0], absMax[2][0]);
  const maxRange = maxValue > 1 ? 255 : 1;
  const factor = maxRange / maxValue;
  let final;
  if (factor > 1) {
    const sub11 = [tfjs_esm_exports.sub(rgb3[0], min2[0]), tfjs_esm_exports.sub(rgb3[1], min2[1]), tfjs_esm_exports.sub(rgb3[2], min2[2])];
    const range2 = [tfjs_esm_exports.sub(max5[0], min2[0]), tfjs_esm_exports.sub(max5[1], min2[1]), tfjs_esm_exports.sub(max5[2], min2[2])];
    const enh = [tfjs_esm_exports.mul(sub11[0], factor), tfjs_esm_exports.mul(sub11[1], factor), tfjs_esm_exports.mul(sub11[2], factor)];
    const stack5 = tfjs_esm_exports.stack([enh[0], enh[1], enh[2]], 2);
    final = tfjs_esm_exports.reshape(stack5, [1, squeeze14.shape[0] || 0, squeeze14.shape[1] || 0, 3]);
    tfjs_esm_exports.dispose([...sub11, ...range2, ...enh, stack5]);
  } else {
    final = tfjs_esm_exports.expandDims(squeeze14, 0);
  }
  tfjs_esm_exports.dispose([...rgb3, ...min2, ...max5, rgb3, squeeze14, inputImage]);
  return final;
}

// src/image/image.ts
var maxSize = 3840;
var inCanvas = null;
var outCanvas = null;
var tmpCanvas = null;
var fx;
var last = {
  inputSum: 0,
  cacheDiff: 1,
  sumMethod: 0,
  inputTensor: void 0
};
function reset() {
  last.inputSum = 0;
  last.cacheDiff = 1;
  last.sumMethod = 0;
  last.inputTensor = void 0;
}
function canvas(width, height) {
  let c;
  if (env.browser) {
    if (env.worker) {
      if (typeof OffscreenCanvas === "undefined") throw new Error("canvas error: attempted to run in web worker but OffscreenCanvas is not supported");
      c = new OffscreenCanvas(width, height);
    } else {
      if (typeof document !== "undefined") {
        c = document.createElement("canvas");
        c.width = width;
        c.height = height;
      } else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
        if (typeof env.Canvas !== "undefined") c = new env.Canvas(width, height);
        else if (typeof globalThis.Canvas !== "undefined") c = new globalThis.Canvas(width, height);
        else throw new Error("canvas error: attempted to use canvas in react-native without canvas support installed");
      } else {
        throw new Error("canvas error: attempted to run in browser but DOM is not defined");
      }
    }
  } else {
    if (typeof env.Canvas !== "undefined") c = new env.Canvas(width, height);
    else if (typeof globalThis.Canvas !== "undefined") c = new globalThis.Canvas(width, height);
  }
  return c;
}
function copy(input, output) {
  const outputCanvas = output || canvas(input.width, input.height);
  const ctx = outputCanvas.getContext("2d");
  ctx.drawImage(input, 0, 0);
  return outputCanvas;
}
async function process2(input, config3, getTensor = true) {
  var _a, _b, _c;
  if (!input) {
    if (config3.debug) log("input error: input is missing");
    return { tensor: null, canvas: null };
  }
  if (!(input instanceof tfjs_esm_exports.Tensor) && !(typeof Image !== "undefined" && input instanceof Image) && !(typeof globalThis.Canvas !== "undefined" && input instanceof globalThis.Canvas) && !(typeof ImageData !== "undefined" && input instanceof ImageData) && !(typeof ImageBitmap !== "undefined" && input instanceof ImageBitmap) && !(typeof HTMLImageElement !== "undefined" && input instanceof HTMLImageElement) && !(typeof HTMLMediaElement !== "undefined" && input instanceof HTMLMediaElement) && !(typeof HTMLVideoElement !== "undefined" && input instanceof HTMLVideoElement) && !(typeof HTMLCanvasElement !== "undefined" && input instanceof HTMLCanvasElement) && !(typeof OffscreenCanvas !== "undefined" && input instanceof OffscreenCanvas)) {
    throw new Error("input error: type not recognized");
  }
  if (input instanceof tfjs_esm_exports.Tensor) {
    let tensor8 = null;
    if (input["isDisposedInternal"]) throw new Error("input error: attempted to use tensor but it is disposed");
    if (!input.shape) throw new Error("input error: attempted to use tensor without a shape");
    if (input.shape.length === 3) {
      if (input.shape[2] === 3) {
        tensor8 = tfjs_esm_exports.expandDims(input, 0);
      } else if (input.shape[2] === 4) {
        const rgb3 = tfjs_esm_exports.slice3d(input, [0, 0, 0], [-1, -1, 3]);
        tensor8 = tfjs_esm_exports.expandDims(rgb3, 0);
        tfjs_esm_exports.dispose(rgb3);
      }
    } else if (input.shape.length === 4) {
      if (input.shape[3] === 3) {
        tensor8 = tfjs_esm_exports.clone(input);
      } else if (input.shape[3] === 4) {
        tensor8 = tfjs_esm_exports.slice4d(input, [0, 0, 0, 0], [-1, -1, -1, 3]);
      }
    }
    if (tensor8 == null || tensor8.shape.length !== 4 || tensor8.shape[0] !== 1 || tensor8.shape[3] !== 3) throw new Error(`input error: attempted to use tensor with unrecognized shape: ${input.shape.toString()}`);
    if (tensor8.dtype === "int32") {
      const cast8 = tfjs_esm_exports.cast(tensor8, "float32");
      tfjs_esm_exports.dispose(tensor8);
      tensor8 = cast8;
    }
    return { tensor: tensor8, canvas: config3.filter.return ? outCanvas : null };
  }
  if (typeof input["readyState"] !== "undefined" && input.readyState <= 2) {
    if (config3.debug) log("input stream is not ready");
    return { tensor: null, canvas: inCanvas };
  }
  const originalWidth = input["naturalWidth"] || input["videoWidth"] || input["width"] || input["shape"] && input["shape"][1] > 0;
  const originalHeight = input["naturalHeight"] || input["videoHeight"] || input["height"] || input["shape"] && input["shape"][2] > 0;
  if (!originalWidth || !originalHeight) {
    if (config3.debug) log("cannot determine input dimensions");
    return { tensor: null, canvas: inCanvas };
  }
  let targetWidth = originalWidth;
  let targetHeight = originalHeight;
  if (targetWidth > maxSize) {
    targetWidth = maxSize;
    targetHeight = Math.trunc(targetWidth * originalHeight / originalWidth);
  }
  if (targetHeight > maxSize) {
    targetHeight = maxSize;
    targetWidth = Math.trunc(targetHeight * originalWidth / originalHeight);
  }
  if ((((_a = config3.filter) == null ? void 0 : _a.width) || 0) > 0) targetWidth = config3.filter.width;
  else if ((((_b = config3.filter) == null ? void 0 : _b.height) || 0) > 0) targetWidth = originalWidth * ((config3.filter.height || 0) / originalHeight);
  if ((config3.filter.height || 0) > 0) targetHeight = config3.filter.height;
  else if ((config3.filter.width || 0) > 0) targetHeight = originalHeight * ((config3.filter.width || 0) / originalWidth);
  if (!targetWidth || !targetHeight) throw new Error("input error: cannot determine dimension");
  if (!inCanvas || inCanvas.width !== targetWidth || inCanvas.height !== targetHeight) inCanvas = canvas(targetWidth, targetHeight);
  const inCtx = inCanvas.getContext("2d");
  if (typeof ImageData !== "undefined" && input instanceof ImageData) {
    inCtx.putImageData(input, 0, 0);
  } else {
    if (config3.filter.flip && typeof inCtx.translate !== "undefined") {
      inCtx.translate(originalWidth, 0);
      inCtx.scale(-1, 1);
      inCtx.drawImage(input, 0, 0, originalWidth, originalHeight, 0, 0, inCanvas.width, inCanvas.height);
      inCtx.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      inCtx.drawImage(input, 0, 0, originalWidth, originalHeight, 0, 0, inCanvas.width, inCanvas.height);
    }
  }
  if (!outCanvas || inCanvas.width !== outCanvas.width || inCanvas.height !== outCanvas.height) outCanvas = canvas(inCanvas.width, inCanvas.height);
  if (config3.filter.enabled && env.webgl.supported) {
    if (!fx) fx = env.browser ? new GLImageFilter() : null;
    env.filter = !!fx;
    if (!(fx == null ? void 0 : fx.add)) {
      if (config3.debug) log("input process error: cannot initialize filters");
      env.webgl.supported = false;
      config3.filter.enabled = false;
      copy(inCanvas, outCanvas);
    } else {
      fx.reset();
      if (config3.filter.brightness !== 0) fx.add("brightness", config3.filter.brightness);
      if (config3.filter.contrast !== 0) fx.add("contrast", config3.filter.contrast);
      if (config3.filter.sharpness !== 0) fx.add("sharpen", config3.filter.sharpness);
      if (config3.filter.blur !== 0) fx.add("blur", config3.filter.blur);
      if (config3.filter.saturation !== 0) fx.add("saturation", config3.filter.saturation);
      if (config3.filter.hue !== 0) fx.add("hue", config3.filter.hue);
      if (config3.filter.negative) fx.add("negative");
      if (config3.filter.sepia) fx.add("sepia");
      if (config3.filter.vintage) fx.add("brownie");
      if (config3.filter.sepia) fx.add("sepia");
      if (config3.filter.kodachrome) fx.add("kodachrome");
      if (config3.filter.technicolor) fx.add("technicolor");
      if (config3.filter.polaroid) fx.add("polaroid");
      if (config3.filter.pixelate !== 0) fx.add("pixelate", config3.filter.pixelate);
      if (((_c = fx.get()) == null ? void 0 : _c.length) > 1) outCanvas = fx.apply(inCanvas);
      else outCanvas = fx.draw(inCanvas);
    }
  } else {
    copy(inCanvas, outCanvas);
    if (fx) fx = null;
    env.filter = !!fx;
  }
  if (!getTensor) return { tensor: null, canvas: outCanvas };
  if (!outCanvas) throw new Error("canvas error: cannot create output");
  let pixels;
  let depth = 3;
  if (typeof ImageData !== "undefined" && input instanceof ImageData || input.data && input.width && input.height) {
    if (env.browser && tfjs_esm_exports.browser) {
      pixels = tfjs_esm_exports.browser ? tfjs_esm_exports.browser.fromPixels(input) : null;
    } else {
      depth = input.data.length / input.height / input.width;
      const arr = new Uint8Array(input.data.buffer);
      pixels = tfjs_esm_exports.tensor(arr, [input.height, input.width, depth], "int32");
    }
  } else {
    if (!tmpCanvas || outCanvas.width !== tmpCanvas.width || outCanvas.height !== tmpCanvas.height) tmpCanvas = canvas(outCanvas.width, outCanvas.height);
    if (tfjs_esm_exports.browser && env.browser) {
      if (config3.backend === "webgl" || config3.backend === "humangl" || config3.backend === "webgpu") {
        pixels = tfjs_esm_exports.browser.fromPixels(outCanvas);
      } else {
        tmpCanvas = copy(outCanvas);
        pixels = tfjs_esm_exports.browser.fromPixels(tmpCanvas);
      }
    } else {
      const tempCanvas = copy(outCanvas);
      const tempCtx = tempCanvas.getContext("2d");
      const tempData = tempCtx.getImageData(0, 0, targetWidth, targetHeight);
      depth = tempData.data.length / targetWidth / targetHeight;
      const arr = new Uint8Array(tempData.data.buffer);
      pixels = tfjs_esm_exports.tensor(arr, [targetWidth, targetHeight, depth]);
    }
  }
  if (depth === 4) {
    const rgb3 = tfjs_esm_exports.slice3d(pixels, [0, 0, 0], [-1, -1, 3]);
    tfjs_esm_exports.dispose(pixels);
    pixels = rgb3;
  }
  if (!pixels) throw new Error("input error: cannot create tensor");
  const casted = tfjs_esm_exports.cast(pixels, "float32");
  const tensor7 = config3.filter.equalization ? await histogramEqualization(casted) : tfjs_esm_exports.expandDims(casted, 0);
  tfjs_esm_exports.dispose([pixels, casted]);
  if (config3.filter.autoBrightness) {
    const max5 = tfjs_esm_exports.max(tensor7);
    const maxVal = await max5.data();
    config3.filter.brightness = maxVal[0] > 1 ? 1 - maxVal[0] / 255 : 1 - maxVal[0];
    tfjs_esm_exports.dispose(max5);
  }
  return { tensor: tensor7, canvas: config3.filter.return ? outCanvas : null };
}
async function skip(config3, input) {
  let skipFrame = false;
  if (config3.cacheSensitivity === 0 || !input.shape || input.shape.length !== 4 || input.shape[1] > 3840 || input.shape[2] > 2160) return skipFrame;
  if (!last.inputTensor) {
    last.inputTensor = tfjs_esm_exports.clone(input);
  } else if (last.inputTensor.shape[1] !== input.shape[1] || last.inputTensor.shape[2] !== input.shape[2]) {
    tfjs_esm_exports.dispose(last.inputTensor);
    last.inputTensor = tfjs_esm_exports.clone(input);
  } else {
    const t2 = {};
    t2.diff = tfjs_esm_exports.sub(input, last.inputTensor);
    t2.squared = tfjs_esm_exports.mul(t2.diff, t2.diff);
    t2.sum = tfjs_esm_exports.sum(t2.squared);
    const diffSum = await t2.sum.data();
    const diffRelative = diffSum[0] / (input.shape[1] || 1) / (input.shape[2] || 1) / 255 / 3;
    tfjs_esm_exports.dispose([last.inputTensor, t2.diff, t2.squared, t2.sum]);
    last.inputTensor = tfjs_esm_exports.clone(input);
    skipFrame = diffRelative <= (config3.cacheSensitivity || 0);
  }
  return skipFrame;
}
async function compare(config3, input1, input2) {
  const t2 = {};
  if (!input1 || !input2 || input1.shape.length !== 4 || input1.shape.length !== input2.shape.length) {
    if (!config3.debug) log("invalid input tensor or tensor shapes do not match:", input1.shape, input2.shape);
    return 0;
  }
  if (input1.shape[0] !== 1 || input2.shape[0] !== 1 || input1.shape[3] !== 3 || input2.shape[3] !== 3) {
    if (!config3.debug) log("input tensors must be of shape [1, height, width, 3]:", input1.shape, input2.shape);
    return 0;
  }
  t2.input1 = tfjs_esm_exports.clone(input1);
  t2.input2 = input1.shape[1] !== input2.shape[1] || input1.shape[2] !== input2.shape[2] ? tfjs_esm_exports.image.resizeBilinear(input2, [input1.shape[1], input1.shape[2]]) : tfjs_esm_exports.clone(input2);
  t2.diff = tfjs_esm_exports.sub(t2.input1, t2.input2);
  t2.squared = tfjs_esm_exports.mul(t2.diff, t2.diff);
  t2.sum = tfjs_esm_exports.sum(t2.squared);
  const diffSum = await t2.sum.data();
  const diffRelative = diffSum[0] / (input1.shape[1] || 1) / (input1.shape[2] || 1) / 255 / 3;
  tfjs_esm_exports.dispose([t2.input1, t2.input2, t2.diff, t2.squared, t2.sum]);
  return diffRelative;
}

// src/util/env.ts
var _canvas, _image, _imageData;
var Env = class {
  constructor() {
    /** Running in Browser */
    __publicField(this, "browser");
    /** Running in NodeJS */
    __publicField(this, "node");
    /** Running in WebWorker thread */
    __publicField(this, "worker");
    /** Detected platform */
    __publicField(this, "platform", "");
    /** Detected agent */
    __publicField(this, "agent", "");
    /** List of supported backends */
    __publicField(this, "backends", []);
    /** Has any work been performed so far */
    __publicField(this, "initial");
    /** Are image filters supported? */
    __publicField(this, "filter");
    /** TFJS instance details */
    __publicField(this, "tfjs");
    /** Is offscreenCanvas supported? */
    __publicField(this, "offscreen");
    /** Are performance counter instant values or additive */
    __publicField(this, "perfadd", false);
    /** If using tfjs-node get version of underlying tensorflow shared library and if gpu acceleration is enabled */
    __publicField(this, "tensorflow", {
      version: void 0,
      gpu: void 0
    });
    /** WASM detected capabilities */
    __publicField(this, "wasm", {
      supported: void 0,
      backend: void 0,
      simd: void 0,
      multithread: void 0
    });
    /** WebGL detected capabilities */
    __publicField(this, "webgl", {
      supported: void 0,
      backend: void 0,
      version: void 0,
      renderer: void 0,
      shader: void 0,
      vendor: void 0
    });
    /** WebGPU detected capabilities */
    __publicField(this, "webgpu", {
      supported: void 0,
      backend: void 0,
      adapter: void 0
    });
    /** CPU info */
    __publicField(this, "cpu", {
      model: void 0,
      flags: []
    });
    /** List of supported kernels for current backend */
    __publicField(this, "kernels", []);
    /** MonkeyPatch for Canvas/Image/ImageData */
    __privateAdd(this, _canvas);
    __privateAdd(this, _image);
    __privateAdd(this, _imageData);
    this.browser = typeof navigator !== "undefined" && typeof navigator.appVersion !== "undefined";
    this.node = typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    this.tfjs = { version: version7["tfjs-core"] };
    this.offscreen = typeof OffscreenCanvas !== "undefined";
    this.initial = true;
    this.worker = this.browser && this.offscreen ? typeof WorkerGlobalScope !== "undefined" : void 0;
    if (typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined") {
      const agent = navigator.userAgent || "";
      const raw = agent.match(/\(([^()]+)\)/g);
      if (raw == null ? void 0 : raw[0]) {
        const platformMatch = raw[0].match(/\(([^()]+)\)/g);
        this.platform = (platformMatch == null ? void 0 : platformMatch[0]) ? platformMatch[0].replace(/\(|\)/g, "") : "";
        this.agent = agent.replace(raw[0], "");
        if (this.platform[1]) this.agent = this.agent.replace(raw[1], "");
        this.agent = this.agent.replace(/  /g, " ");
      }
    } else if (typeof process !== "undefined") {
      this.platform = `${process.platform} ${process.arch}`;
      this.agent = `NodeJS ${process.version}`;
    }
  }
  get Canvas() {
    return __privateGet(this, _canvas);
  }
  set Canvas(val) {
    __privateSet(this, _canvas, val);
    globalThis.Canvas = val;
  }
  get Image() {
    return __privateGet(this, _image);
  }
  // @ts-ignore monkey-patch;
  set Image(val) {
    __privateSet(this, _image, val);
    globalThis.Image = val;
  }
  get ImageData() {
    return __privateGet(this, _imageData);
  }
  // @ts-ignore monkey-patch;
  set ImageData(val) {
    __privateSet(this, _imageData, val);
    globalThis.ImageData = val;
  }
  /** update backend information */
  async updateBackend() {
    this.backends = Object.keys(tfjs_esm_exports.engine().registryFactory);
    try {
      this.tensorflow = {
        version: tfjs_esm_exports.backend()["binding"] ? tfjs_esm_exports.backend()["binding"].TF_Version : void 0,
        gpu: tfjs_esm_exports.backend()["binding"] ? tfjs_esm_exports.backend()["binding"].isUsingGpuDevice() : void 0
      };
    } catch (e) {
    }
    this.wasm.supported = typeof WebAssembly !== "undefined";
    this.wasm.backend = this.backends.includes("wasm");
    if (this.wasm.supported && this.wasm.backend) {
      this.wasm.simd = await tfjs_esm_exports.env().getAsync("WASM_HAS_SIMD_SUPPORT");
      this.wasm.multithread = await tfjs_esm_exports.env().getAsync("WASM_HAS_MULTITHREAD_SUPPORT");
    }
    const c = canvas(100, 100);
    const gl = c ? c.getContext("webgl2") : void 0;
    this.webgl.supported = typeof gl !== "undefined";
    this.webgl.backend = this.backends.includes("webgl");
    if (this.webgl.supported && this.webgl.backend && gl) {
      this.webgl.version = gl.getParameter(gl.VERSION);
      this.webgl.vendor = gl.getParameter(gl.VENDOR);
      this.webgl.renderer = gl.getParameter(gl.RENDERER);
      this.webgl.shader = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);
    }
    this.webgpu.supported = this.browser && typeof navigator !== "undefined" && typeof navigator.gpu !== "undefined";
    this.webgpu.backend = this.backends.includes("webgpu");
    try {
      if (this.webgpu.supported) {
        const adapter = await navigator.gpu.requestAdapter();
        if (adapter) {
          if ("requestAdapterInfo" in adapter) this.webgpu.adapter = await adapter.requestAdapterInfo();
          else this.webgpu.adapter = await adapter.info;
        }
      }
    } catch (e) {
      this.webgpu.supported = false;
    }
    try {
      this.kernels = tfjs_esm_exports.getKernelsForBackend(tfjs_esm_exports.getBackend()).map((kernel) => kernel.kernelName.toLowerCase());
    } catch (e) {
    }
  }
  /** update cpu information */
  updateCPU() {
    const cpu = { model: "", flags: [] };
    if (this.node && this.platform.startsWith("linux")) {
    }
    if (!this.cpu) Object.defineProperty(this, "cpu", { value: cpu });
    else this.cpu = cpu;
  }
};
_canvas = new WeakMap();
_image = new WeakMap();
_imageData = new WeakMap();
var env = new Env();

// src/face/facemeshcoords.ts
var meshAnnotations = {
  silhouette: [
    10,
    338,
    297,
    332,
    284,
    251,
    389,
    356,
    454,
    323,
    361,
    288,
    397,
    365,
    379,
    378,
    400,
    377,
    152,
    148,
    176,
    149,
    150,
    136,
    172,
    58,
    132,
    93,
    234,
    127,
    162,
    21,
    54,
    103,
    67,
    109
  ],
  // lipsUpperOuter: [61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291], // 11
  // lipsLowerOuter: [146, 91, 181, 84, 17, 314, 405, 321, 375, 291], // 10
  // lipsUpperInner: [78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308], // 11
  // lipsLowerInner: [78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308], // 11
  lipsUpperOuter: [185, 40, 39, 37, 0, 267, 269, 270, 409],
  lipsLowerOuter: [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291],
  lipsUpperInner: [191, 80, 81, 82, 13, 312, 311, 310, 415],
  lipsLowerInner: [78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308],
  lipsLowerSemiOuter: [76, 77, 90, 180, 85, 16, 315, 404, 320, 307, 306],
  lipsUpperSemiOuter: [184, 74, 73, 72, 11, 302, 303, 304, 408],
  lipsLowerSemiInner: [62, 96, 89, 179, 86, 15, 316, 403, 319, 325, 292],
  lipsUpperSemiInner: [183, 42, 41, 38, 12, 268, 271, 272, 407],
  rightEyeUpper0: [246, 161, 160, 159, 158, 157, 173],
  // 7
  rightEyeLower0: [33, 7, 163, 144, 145, 153, 154, 155, 133],
  // 9
  rightEyeUpper1: [247, 30, 29, 27, 28, 56, 190],
  // 7
  rightEyeLower1: [130, 25, 110, 24, 23, 22, 26, 112, 243],
  // 9
  rightEyeUpper2: [113, 225, 224, 223, 222, 221, 189],
  // 7
  rightEyeLower2: [226, 31, 228, 229, 230, 231, 232, 233, 244],
  // 9
  rightEyeLower3: [143, 111, 117, 118, 119, 120, 121, 128, 245],
  // 9
  rightEyebrowUpper: [156, 70, 63, 105, 66, 107, 55, 193],
  // 8
  rightEyebrowLower: [35, 124, 46, 53, 52, 65],
  // 6
  rightEyeIris: [473, 474, 475, 476, 477],
  // 5
  leftEyeUpper0: [466, 388, 387, 386, 385, 384, 398],
  leftEyeLower0: [263, 249, 390, 373, 374, 380, 381, 382, 362],
  leftEyeUpper1: [467, 260, 259, 257, 258, 286, 414],
  leftEyeLower1: [359, 255, 339, 254, 253, 252, 256, 341, 463],
  leftEyeUpper2: [342, 445, 444, 443, 442, 441, 413],
  leftEyeLower2: [446, 261, 448, 449, 450, 451, 452, 453, 464],
  leftEyeLower3: [372, 340, 346, 347, 348, 349, 350, 357, 465],
  leftEyebrowUpper: [383, 300, 293, 334, 296, 336, 285, 417],
  leftEyebrowLower: [265, 353, 276, 283, 282, 295],
  leftEyeIris: [468, 469, 470, 471, 472],
  midwayBetweenEyes: [168],
  noseTip: [1],
  noseBottom: [2],
  noseRightCorner: [98],
  noseLeftCorner: [327],
  rightCheek: [205],
  leftCheek: [425]
};
var meshLandmarks = {
  count: 468,
  mouth: 13,
  symmetryLine: [13, meshAnnotations.midwayBetweenEyes[0]]
};
var blazeFaceLandmarks = {
  leftEye: 0,
  rightEye: 1,
  nose: 2,
  mouth: 3,
  leftEar: 4,
  rightEar: 5,
  symmetryLine: [3, 2]
};
var irisIndices = [
  // A mapping from facemesh model keypoints to iris model keypoints.
  { key: "EyeUpper0", indices: [9, 10, 11, 12, 13, 14, 15] },
  // 7 x 3d
  { key: "EyeUpper1", indices: [25, 26, 27, 28, 29, 30, 31] },
  // 7 x 3d
  { key: "EyeUpper2", indices: [41, 42, 43, 44, 45, 46, 47] },
  // 7 x 3d
  { key: "EyeLower0", indices: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
  // 7 x 3d
  { key: "EyeLower1", indices: [16, 17, 18, 19, 20, 21, 22, 23, 24] },
  // 9 x 3d
  { key: "EyeLower2", indices: [32, 33, 34, 35, 36, 37, 38, 39, 40] },
  // 9 x 3d
  { key: "EyeLower3", indices: [54, 55, 56, 57, 58, 59, 60, 61, 62] },
  // 9 x 3d
  { key: "EyebrowUpper", indices: [63, 64, 65, 66, 67, 68, 69, 70] },
  // 8 x 3d
  { key: "EyebrowLower", indices: [48, 49, 50, 51, 52, 53] }
  // 6 x 3d
];
var UV468 = [
  [0.499976992607117, 0.652534008026123],
  [0.500025987625122, 0.547487020492554],
  [0.499974012374878, 0.602371990680695],
  [0.482113003730774, 0.471979022026062],
  [0.500150978565216, 0.527155995368958],
  [0.499909996986389, 0.498252987861633],
  [0.499523013830185, 0.40106201171875],
  [0.289712011814117, 0.380764007568359],
  [0.499954998493195, 0.312398016452789],
  [0.499987006187439, 0.269918978214264],
  [0.500023007392883, 0.107050001621246],
  [0.500023007392883, 0.666234016418457],
  [0.5000159740448, 0.679224014282227],
  [0.500023007392883, 0.692348003387451],
  [0.499976992607117, 0.695277988910675],
  [0.499976992607117, 0.70593398809433],
  [0.499976992607117, 0.719385027885437],
  [0.499976992607117, 0.737019002437592],
  [0.499967992305756, 0.781370997428894],
  [0.499816000461578, 0.562981009483337],
  [0.473773002624512, 0.573909997940063],
  [0.104906998574734, 0.254140973091125],
  [0.365929991006851, 0.409575998783112],
  [0.338757991790771, 0.41302502155304],
  [0.311120003461838, 0.409460008144379],
  [0.274657994508743, 0.389131009578705],
  [0.393361985683441, 0.403706014156342],
  [0.345234006643295, 0.344011008739471],
  [0.370094001293182, 0.346076011657715],
  [0.319321990013123, 0.347265005111694],
  [0.297903001308441, 0.353591024875641],
  [0.24779200553894, 0.410809993743896],
  [0.396889001131058, 0.842755019664764],
  [0.280097991228104, 0.375599980354309],
  [0.106310002505779, 0.399955987930298],
  [0.2099249958992, 0.391353011131287],
  [0.355807989835739, 0.534406006336212],
  [0.471751004457474, 0.65040397644043],
  [0.474155008792877, 0.680191993713379],
  [0.439785003662109, 0.657229006290436],
  [0.414617002010345, 0.66654098033905],
  [0.450374007225037, 0.680860996246338],
  [0.428770989179611, 0.682690978050232],
  [0.374971002340317, 0.727805018424988],
  [0.486716985702515, 0.547628998756409],
  [0.485300987958908, 0.527395009994507],
  [0.257764995098114, 0.314490020275116],
  [0.401223003864288, 0.455172002315521],
  [0.429818987846375, 0.548614978790283],
  [0.421351999044418, 0.533740997314453],
  [0.276895999908447, 0.532056987285614],
  [0.483370006084442, 0.499586999416351],
  [0.33721199631691, 0.282882988452911],
  [0.296391993761063, 0.293242990970612],
  [0.169294998049736, 0.193813979625702],
  [0.447580009698868, 0.302609980106354],
  [0.392390012741089, 0.353887975215912],
  [0.354490011930466, 0.696784019470215],
  [0.067304998636246, 0.730105042457581],
  [0.442739009857178, 0.572826027870178],
  [0.457098007202148, 0.584792017936707],
  [0.381974011659622, 0.694710969924927],
  [0.392388999462128, 0.694203019142151],
  [0.277076005935669, 0.271932005882263],
  [0.422551989555359, 0.563233017921448],
  [0.385919004678726, 0.281364023685455],
  [0.383103013038635, 0.255840003490448],
  [0.331431001424789, 0.119714021682739],
  [0.229923993349075, 0.232002973556519],
  [0.364500999450684, 0.189113974571228],
  [0.229622006416321, 0.299540996551514],
  [0.173287004232407, 0.278747975826263],
  [0.472878992557526, 0.666198015213013],
  [0.446828007698059, 0.668527007102966],
  [0.422762006521225, 0.673889994621277],
  [0.445307999849319, 0.580065965652466],
  [0.388103008270264, 0.693961024284363],
  [0.403039008378983, 0.706539988517761],
  [0.403629004955292, 0.693953037261963],
  [0.460041999816895, 0.557139039039612],
  [0.431158006191254, 0.692366003990173],
  [0.452181994915009, 0.692366003990173],
  [0.475387006998062, 0.692366003990173],
  [0.465828001499176, 0.779190003871918],
  [0.472328990697861, 0.736225962638855],
  [0.473087012767792, 0.717857003211975],
  [0.473122000694275, 0.704625964164734],
  [0.473033010959625, 0.695277988910675],
  [0.427942007780075, 0.695277988910675],
  [0.426479011774063, 0.703539967536926],
  [0.423162013292313, 0.711845993995667],
  [0.4183090031147, 0.720062971115112],
  [0.390094995498657, 0.639572978019714],
  [0.013953999616206, 0.560034036636353],
  [0.499913990497589, 0.58014702796936],
  [0.413199990987778, 0.69539999961853],
  [0.409626007080078, 0.701822996139526],
  [0.468080013990402, 0.601534962654114],
  [0.422728985548019, 0.585985004901886],
  [0.463079988956451, 0.593783974647522],
  [0.37211999297142, 0.47341400384903],
  [0.334562003612518, 0.496073007583618],
  [0.411671012639999, 0.546965003013611],
  [0.242175996303558, 0.14767599105835],
  [0.290776997804642, 0.201445996761322],
  [0.327338010072708, 0.256527006626129],
  [0.399509996175766, 0.748921036720276],
  [0.441727995872498, 0.261676013469696],
  [0.429764986038208, 0.187834024429321],
  [0.412198007106781, 0.108901023864746],
  [0.288955003023148, 0.398952007293701],
  [0.218936994671822, 0.435410976409912],
  [0.41278201341629, 0.398970007896423],
  [0.257135003805161, 0.355440020561218],
  [0.427684992551804, 0.437960982322693],
  [0.448339998722076, 0.536936044692993],
  [0.178560003638268, 0.45755398273468],
  [0.247308000922203, 0.457193970680237],
  [0.286267012357712, 0.467674970626831],
  [0.332827985286713, 0.460712015628815],
  [0.368755996227264, 0.447206974029541],
  [0.398963987827301, 0.432654976844788],
  [0.476410001516342, 0.405806005001068],
  [0.189241006970406, 0.523923993110657],
  [0.228962004184723, 0.348950982093811],
  [0.490725994110107, 0.562400996685028],
  [0.404670000076294, 0.485132992267609],
  [0.019469000399113, 0.401564002037048],
  [0.426243007183075, 0.420431017875671],
  [0.396993011236191, 0.548797011375427],
  [0.266469985246658, 0.376977026462555],
  [0.439121007919312, 0.51895797252655],
  [0.032313998788595, 0.644356966018677],
  [0.419054001569748, 0.387154996395111],
  [0.462783008813858, 0.505746960639954],
  [0.238978996872902, 0.779744982719421],
  [0.198220998048782, 0.831938028335571],
  [0.107550002634525, 0.540755033493042],
  [0.183610007166862, 0.740257024765015],
  [0.134409993886948, 0.333683013916016],
  [0.385764002799988, 0.883153975009918],
  [0.490967005491257, 0.579378008842468],
  [0.382384985685349, 0.508572995662689],
  [0.174399003386497, 0.397670984268188],
  [0.318785011768341, 0.39623498916626],
  [0.343364000320435, 0.400596976280212],
  [0.396100014448166, 0.710216999053955],
  [0.187885001301765, 0.588537991046906],
  [0.430987000465393, 0.944064974784851],
  [0.318993002176285, 0.898285031318665],
  [0.266247987747192, 0.869701027870178],
  [0.500023007392883, 0.190576016902924],
  [0.499976992607117, 0.954452991485596],
  [0.366169989109039, 0.398822009563446],
  [0.393207013607025, 0.39553701877594],
  [0.410373002290726, 0.391080021858215],
  [0.194993004202843, 0.342101991176605],
  [0.388664990663528, 0.362284004688263],
  [0.365961998701096, 0.355970978736877],
  [0.343364000320435, 0.355356991291046],
  [0.318785011768341, 0.35834002494812],
  [0.301414996385574, 0.363156020641327],
  [0.058132998645306, 0.319076001644135],
  [0.301414996385574, 0.387449026107788],
  [0.499987989664078, 0.618434011936188],
  [0.415838003158569, 0.624195992946625],
  [0.445681989192963, 0.566076993942261],
  [0.465844005346298, 0.620640993118286],
  [0.49992299079895, 0.351523995399475],
  [0.288718998432159, 0.819945991039276],
  [0.335278987884521, 0.852819979190826],
  [0.440512001514435, 0.902418971061707],
  [0.128294005990028, 0.791940987110138],
  [0.408771991729736, 0.373893976211548],
  [0.455606997013092, 0.451801002025604],
  [0.499877005815506, 0.908990025520325],
  [0.375436991453171, 0.924192011356354],
  [0.11421000212431, 0.615022003650665],
  [0.448662012815475, 0.695277988910675],
  [0.4480200111866, 0.704632043838501],
  [0.447111994028091, 0.715808033943176],
  [0.444831997156143, 0.730794012546539],
  [0.430011987686157, 0.766808986663818],
  [0.406787008047104, 0.685672998428345],
  [0.400738000869751, 0.681069016456604],
  [0.392399996519089, 0.677703022956848],
  [0.367855995893478, 0.663918972015381],
  [0.247923001646996, 0.601333022117615],
  [0.452769994735718, 0.420849978923798],
  [0.43639200925827, 0.359887003898621],
  [0.416164010763168, 0.368713974952698],
  [0.413385987281799, 0.692366003990173],
  [0.228018000721931, 0.683571994304657],
  [0.468268007040024, 0.352671027183533],
  [0.411361992359161, 0.804327011108398],
  [0.499989002943039, 0.469825029373169],
  [0.479153990745544, 0.442654013633728],
  [0.499974012374878, 0.439637005329132],
  [0.432112008333206, 0.493588984012604],
  [0.499886006116867, 0.866917014122009],
  [0.49991300702095, 0.821729004383087],
  [0.456548988819122, 0.819200992584229],
  [0.344549000263214, 0.745438992977142],
  [0.37890899181366, 0.574010014533997],
  [0.374292999505997, 0.780184984207153],
  [0.319687992334366, 0.570737957954407],
  [0.357154995203018, 0.604269981384277],
  [0.295284003019333, 0.621580958366394],
  [0.447750002145767, 0.862477004528046],
  [0.410986006259918, 0.508723020553589],
  [0.31395098567009, 0.775308012962341],
  [0.354128003120422, 0.812552988529205],
  [0.324548006057739, 0.703992962837219],
  [0.189096003770828, 0.646299958229065],
  [0.279776990413666, 0.71465802192688],
  [0.1338230073452, 0.682700991630554],
  [0.336768001317978, 0.644733011722565],
  [0.429883986711502, 0.466521978378296],
  [0.455527991056442, 0.548622965812683],
  [0.437114000320435, 0.558896005153656],
  [0.467287987470627, 0.529924988746643],
  [0.414712011814117, 0.335219979286194],
  [0.37704598903656, 0.322777986526489],
  [0.344107985496521, 0.320150971412659],
  [0.312875986099243, 0.32233202457428],
  [0.283526003360748, 0.333190023899078],
  [0.241245999932289, 0.382785975933075],
  [0.102986000478268, 0.468762993812561],
  [0.267612010240555, 0.424560010433197],
  [0.297879010438919, 0.433175981044769],
  [0.333433985710144, 0.433878004550934],
  [0.366427004337311, 0.426115989685059],
  [0.396012008190155, 0.416696012020111],
  [0.420121014118195, 0.41022801399231],
  [0.007561000064015, 0.480777025222778],
  [0.432949006557465, 0.569517970085144],
  [0.458638995885849, 0.479089021682739],
  [0.473466008901596, 0.545744001865387],
  [0.476087987422943, 0.563830018043518],
  [0.468472003936768, 0.555056989192963],
  [0.433990985155106, 0.582361996173859],
  [0.483518004417419, 0.562983989715576],
  [0.482482999563217, 0.57784903049469],
  [0.42645001411438, 0.389798998832703],
  [0.438998997211456, 0.39649498462677],
  [0.450067013502121, 0.400434017181396],
  [0.289712011814117, 0.368252992630005],
  [0.276670008897781, 0.363372981548309],
  [0.517862021923065, 0.471948027610779],
  [0.710287988185883, 0.380764007568359],
  [0.526226997375488, 0.573909997940063],
  [0.895093023777008, 0.254140973091125],
  [0.634069979190826, 0.409575998783112],
  [0.661242008209229, 0.41302502155304],
  [0.688880026340485, 0.409460008144379],
  [0.725341975688934, 0.389131009578705],
  [0.606630027294159, 0.40370500087738],
  [0.654766023159027, 0.344011008739471],
  [0.629905998706818, 0.346076011657715],
  [0.680678009986877, 0.347265005111694],
  [0.702096998691559, 0.353591024875641],
  [0.75221198797226, 0.410804986953735],
  [0.602918028831482, 0.842862963676453],
  [0.719901978969574, 0.375599980354309],
  [0.893692970275879, 0.399959981441498],
  [0.790081977844238, 0.391354024410248],
  [0.643998026847839, 0.534487962722778],
  [0.528249025344849, 0.65040397644043],
  [0.525849997997284, 0.680191040039062],
  [0.560214996337891, 0.657229006290436],
  [0.585384011268616, 0.66654098033905],
  [0.549625992774963, 0.680860996246338],
  [0.57122802734375, 0.682691991329193],
  [0.624852001667023, 0.72809898853302],
  [0.513050019741058, 0.547281980514526],
  [0.51509702205658, 0.527251958847046],
  [0.742246985435486, 0.314507007598877],
  [0.598631024360657, 0.454979002475739],
  [0.570338010787964, 0.548575043678284],
  [0.578631997108459, 0.533622980117798],
  [0.723087012767792, 0.532054007053375],
  [0.516445994377136, 0.499638974666595],
  [0.662801027297974, 0.282917976379395],
  [0.70362401008606, 0.293271005153656],
  [0.830704987049103, 0.193813979625702],
  [0.552385985851288, 0.302568018436432],
  [0.607609987258911, 0.353887975215912],
  [0.645429015159607, 0.696707010269165],
  [0.932694971561432, 0.730105042457581],
  [0.557260990142822, 0.572826027870178],
  [0.542901992797852, 0.584792017936707],
  [0.6180260181427, 0.694710969924927],
  [0.607590973377228, 0.694203019142151],
  [0.722943007946014, 0.271963000297546],
  [0.577413976192474, 0.563166975975037],
  [0.614082992076874, 0.281386971473694],
  [0.616907000541687, 0.255886018276215],
  [0.668509006500244, 0.119913995265961],
  [0.770092010498047, 0.232020974159241],
  [0.635536015033722, 0.189248979091644],
  [0.77039098739624, 0.299556016921997],
  [0.826722025871277, 0.278755009174347],
  [0.527121007442474, 0.666198015213013],
  [0.553171992301941, 0.668527007102966],
  [0.577238023281097, 0.673889994621277],
  [0.554691970348358, 0.580065965652466],
  [0.611896991729736, 0.693961024284363],
  [0.59696102142334, 0.706539988517761],
  [0.596370995044708, 0.693953037261963],
  [0.539958000183105, 0.557139039039612],
  [0.568841993808746, 0.692366003990173],
  [0.547818005084991, 0.692366003990173],
  [0.52461302280426, 0.692366003990173],
  [0.534089982509613, 0.779141008853912],
  [0.527670979499817, 0.736225962638855],
  [0.526912987232208, 0.717857003211975],
  [0.526877999305725, 0.704625964164734],
  [0.526966989040375, 0.695277988910675],
  [0.572058022022247, 0.695277988910675],
  [0.573521018028259, 0.703539967536926],
  [0.57683801651001, 0.711845993995667],
  [0.581691026687622, 0.720062971115112],
  [0.609944999217987, 0.639909982681274],
  [0.986046016216278, 0.560034036636353],
  [0.5867999792099, 0.69539999961853],
  [0.590372025966644, 0.701822996139526],
  [0.531915009021759, 0.601536989212036],
  [0.577268004417419, 0.585934996604919],
  [0.536915004253387, 0.593786001205444],
  [0.627542972564697, 0.473352015018463],
  [0.665585994720459, 0.495950996875763],
  [0.588353991508484, 0.546862006187439],
  [0.757824003696442, 0.14767599105835],
  [0.709249973297119, 0.201507985591888],
  [0.672684013843536, 0.256581008434296],
  [0.600408971309662, 0.74900496006012],
  [0.55826598405838, 0.261672019958496],
  [0.570303976535797, 0.187870979309082],
  [0.588165998458862, 0.109044015407562],
  [0.711045026779175, 0.398952007293701],
  [0.781069993972778, 0.435405015945435],
  [0.587247014045715, 0.398931980133057],
  [0.742869973182678, 0.355445981025696],
  [0.572156012058258, 0.437651991844177],
  [0.55186802148819, 0.536570012569427],
  [0.821442008018494, 0.457556009292603],
  [0.752701997756958, 0.457181990146637],
  [0.71375697851181, 0.467626988887787],
  [0.66711300611496, 0.460672974586487],
  [0.631101012229919, 0.447153985500336],
  [0.6008620262146, 0.432473003864288],
  [0.523481011390686, 0.405627012252808],
  [0.810747981071472, 0.523926019668579],
  [0.771045982837677, 0.348959028720856],
  [0.509127020835876, 0.562718033790588],
  [0.595292985439301, 0.485023975372314],
  [0.980530977249146, 0.401564002037048],
  [0.573499977588654, 0.420000016689301],
  [0.602994978427887, 0.548687994480133],
  [0.733529984951019, 0.376977026462555],
  [0.560611009597778, 0.519016981124878],
  [0.967685997486115, 0.644356966018677],
  [0.580985009670258, 0.387160003185272],
  [0.537728011608124, 0.505385041236877],
  [0.760966002941132, 0.779752969741821],
  [0.801778972148895, 0.831938028335571],
  [0.892440974712372, 0.54076099395752],
  [0.816350996494293, 0.740260004997253],
  [0.865594983100891, 0.333687007427216],
  [0.614073991775513, 0.883246004581451],
  [0.508952975273132, 0.579437971115112],
  [0.617941975593567, 0.508316040039062],
  [0.825608015060425, 0.397674977779388],
  [0.681214988231659, 0.39623498916626],
  [0.656635999679565, 0.400596976280212],
  [0.603900015354156, 0.710216999053955],
  [0.81208598613739, 0.588539004325867],
  [0.56801301240921, 0.944564998149872],
  [0.681007981300354, 0.898285031318665],
  [0.733752012252808, 0.869701027870178],
  [0.633830010890961, 0.398822009563446],
  [0.606792986392975, 0.39553701877594],
  [0.589659988880157, 0.391062021255493],
  [0.805015981197357, 0.342108011245728],
  [0.611334979534149, 0.362284004688263],
  [0.634037971496582, 0.355970978736877],
  [0.656635999679565, 0.355356991291046],
  [0.681214988231659, 0.35834002494812],
  [0.698584973812103, 0.363156020641327],
  [0.941866993904114, 0.319076001644135],
  [0.698584973812103, 0.387449026107788],
  [0.584177017211914, 0.624107003211975],
  [0.554318010807037, 0.566076993942261],
  [0.534153997898102, 0.62064003944397],
  [0.711217999458313, 0.819975018501282],
  [0.664629995822906, 0.852871000766754],
  [0.559099972248077, 0.902631998062134],
  [0.871706008911133, 0.791940987110138],
  [0.591234028339386, 0.373893976211548],
  [0.544341027736664, 0.451583981513977],
  [0.624562978744507, 0.924192011356354],
  [0.88577002286911, 0.615028977394104],
  [0.551338016986847, 0.695277988910675],
  [0.551980018615723, 0.704632043838501],
  [0.552887976169586, 0.715808033943176],
  [0.555167973041534, 0.730794012546539],
  [0.569944024085999, 0.767035007476807],
  [0.593203008174896, 0.685675978660583],
  [0.599261999130249, 0.681069016456604],
  [0.607599973678589, 0.677703022956848],
  [0.631937980651855, 0.663500010967255],
  [0.752032995223999, 0.601315021514893],
  [0.547226011753082, 0.420395016670227],
  [0.563543975353241, 0.359827995300293],
  [0.583841025829315, 0.368713974952698],
  [0.586614012718201, 0.692366003990173],
  [0.771915018558502, 0.683578014373779],
  [0.531597018241882, 0.352482974529266],
  [0.588370978832245, 0.804440975189209],
  [0.52079701423645, 0.442565023899078],
  [0.567984998226166, 0.493479013442993],
  [0.543282985687256, 0.819254994392395],
  [0.655317008495331, 0.745514988899231],
  [0.621008992195129, 0.574018001556396],
  [0.625559985637665, 0.78031200170517],
  [0.680198013782501, 0.570719003677368],
  [0.64276397228241, 0.604337990283966],
  [0.704662978649139, 0.621529996395111],
  [0.552012026309967, 0.862591981887817],
  [0.589071989059448, 0.508637011051178],
  [0.685944974422455, 0.775357007980347],
  [0.645735025405884, 0.812640011310577],
  [0.675342977046967, 0.703978002071381],
  [0.810858011245728, 0.646304965019226],
  [0.72012197971344, 0.714666962623596],
  [0.866151988506317, 0.682704985141754],
  [0.663187026977539, 0.644596993923187],
  [0.570082008838654, 0.466325998306274],
  [0.544561982154846, 0.548375964164734],
  [0.562758982181549, 0.558784961700439],
  [0.531987011432648, 0.530140042304993],
  [0.585271000862122, 0.335177004337311],
  [0.622952997684479, 0.32277899980545],
  [0.655896008014679, 0.320163011550903],
  [0.687132000923157, 0.322345972061157],
  [0.716481983661652, 0.333200991153717],
  [0.758756995201111, 0.382786989212036],
  [0.897013008594513, 0.468769013881683],
  [0.732392013072968, 0.424547016620636],
  [0.70211398601532, 0.433162987232208],
  [0.66652500629425, 0.433866024017334],
  [0.633504986763, 0.426087975502014],
  [0.603875994682312, 0.416586995124817],
  [0.579657971858978, 0.409945011138916],
  [0.992439985275269, 0.480777025222778],
  [0.567192018032074, 0.569419980049133],
  [0.54136598110199, 0.478899002075195],
  [0.526564002037048, 0.546118021011353],
  [0.523913025856018, 0.563830018043518],
  [0.531529009342194, 0.555056989192963],
  [0.566035985946655, 0.582329034805298],
  [0.51631098985672, 0.563053965568542],
  [0.5174720287323, 0.577877044677734],
  [0.573594987392426, 0.389806985855103],
  [0.560697972774506, 0.395331978797913],
  [0.549755990505219, 0.399751007556915],
  [0.710287988185883, 0.368252992630005],
  [0.723330020904541, 0.363372981548309]
];
var TRI468 = [
  127,
  34,
  139,
  11,
  0,
  37,
  232,
  231,
  120,
  72,
  37,
  39,
  128,
  121,
  47,
  232,
  121,
  128,
  104,
  69,
  67,
  175,
  171,
  148,
  157,
  154,
  155,
  118,
  50,
  101,
  73,
  39,
  40,
  9,
  151,
  108,
  48,
  115,
  131,
  194,
  204,
  211,
  74,
  40,
  185,
  80,
  42,
  183,
  40,
  92,
  186,
  230,
  229,
  118,
  202,
  212,
  214,
  83,
  18,
  17,
  76,
  61,
  146,
  160,
  29,
  30,
  56,
  157,
  173,
  106,
  204,
  194,
  135,
  214,
  192,
  203,
  165,
  98,
  21,
  71,
  68,
  51,
  45,
  4,
  144,
  24,
  23,
  77,
  146,
  91,
  205,
  50,
  187,
  201,
  200,
  18,
  91,
  106,
  182,
  90,
  91,
  181,
  85,
  84,
  17,
  206,
  203,
  36,
  148,
  171,
  140,
  92,
  40,
  39,
  193,
  189,
  244,
  159,
  158,
  28,
  247,
  246,
  161,
  236,
  3,
  196,
  54,
  68,
  104,
  193,
  168,
  8,
  117,
  228,
  31,
  189,
  193,
  55,
  98,
  97,
  99,
  126,
  47,
  100,
  166,
  79,
  218,
  155,
  154,
  26,
  209,
  49,
  131,
  135,
  136,
  150,
  47,
  126,
  217,
  223,
  52,
  53,
  45,
  51,
  134,
  211,
  170,
  140,
  67,
  69,
  108,
  43,
  106,
  91,
  230,
  119,
  120,
  226,
  130,
  247,
  63,
  53,
  52,
  238,
  20,
  242,
  46,
  70,
  156,
  78,
  62,
  96,
  46,
  53,
  63,
  143,
  34,
  227,
  173,
  155,
  133,
  123,
  117,
  111,
  44,
  125,
  19,
  236,
  134,
  51,
  216,
  206,
  205,
  154,
  153,
  22,
  39,
  37,
  167,
  200,
  201,
  208,
  36,
  142,
  100,
  57,
  212,
  202,
  20,
  60,
  99,
  28,
  158,
  157,
  35,
  226,
  113,
  160,
  159,
  27,
  204,
  202,
  210,
  113,
  225,
  46,
  43,
  202,
  204,
  62,
  76,
  77,
  137,
  123,
  116,
  41,
  38,
  72,
  203,
  129,
  142,
  64,
  98,
  240,
  49,
  102,
  64,
  41,
  73,
  74,
  212,
  216,
  207,
  42,
  74,
  184,
  169,
  170,
  211,
  170,
  149,
  176,
  105,
  66,
  69,
  122,
  6,
  168,
  123,
  147,
  187,
  96,
  77,
  90,
  65,
  55,
  107,
  89,
  90,
  180,
  101,
  100,
  120,
  63,
  105,
  104,
  93,
  137,
  227,
  15,
  86,
  85,
  129,
  102,
  49,
  14,
  87,
  86,
  55,
  8,
  9,
  100,
  47,
  121,
  145,
  23,
  22,
  88,
  89,
  179,
  6,
  122,
  196,
  88,
  95,
  96,
  138,
  172,
  136,
  215,
  58,
  172,
  115,
  48,
  219,
  42,
  80,
  81,
  195,
  3,
  51,
  43,
  146,
  61,
  171,
  175,
  199,
  81,
  82,
  38,
  53,
  46,
  225,
  144,
  163,
  110,
  246,
  33,
  7,
  52,
  65,
  66,
  229,
  228,
  117,
  34,
  127,
  234,
  107,
  108,
  69,
  109,
  108,
  151,
  48,
  64,
  235,
  62,
  78,
  191,
  129,
  209,
  126,
  111,
  35,
  143,
  163,
  161,
  246,
  117,
  123,
  50,
  222,
  65,
  52,
  19,
  125,
  141,
  221,
  55,
  65,
  3,
  195,
  197,
  25,
  7,
  33,
  220,
  237,
  44,
  70,
  71,
  139,
  122,
  193,
  245,
  247,
  130,
  33,
  71,
  21,
  162,
  153,
  158,
  159,
  170,
  169,
  150,
  188,
  174,
  196,
  216,
  186,
  92,
  144,
  160,
  161,
  2,
  97,
  167,
  141,
  125,
  241,
  164,
  167,
  37,
  72,
  38,
  12,
  145,
  159,
  160,
  38,
  82,
  13,
  63,
  68,
  71,
  226,
  35,
  111,
  158,
  153,
  154,
  101,
  50,
  205,
  206,
  92,
  165,
  209,
  198,
  217,
  165,
  167,
  97,
  220,
  115,
  218,
  133,
  112,
  243,
  239,
  238,
  241,
  214,
  135,
  169,
  190,
  173,
  133,
  171,
  208,
  32,
  125,
  44,
  237,
  86,
  87,
  178,
  85,
  86,
  179,
  84,
  85,
  180,
  83,
  84,
  181,
  201,
  83,
  182,
  137,
  93,
  132,
  76,
  62,
  183,
  61,
  76,
  184,
  57,
  61,
  185,
  212,
  57,
  186,
  214,
  207,
  187,
  34,
  143,
  156,
  79,
  239,
  237,
  123,
  137,
  177,
  44,
  1,
  4,
  201,
  194,
  32,
  64,
  102,
  129,
  213,
  215,
  138,
  59,
  166,
  219,
  242,
  99,
  97,
  2,
  94,
  141,
  75,
  59,
  235,
  24,
  110,
  228,
  25,
  130,
  226,
  23,
  24,
  229,
  22,
  23,
  230,
  26,
  22,
  231,
  112,
  26,
  232,
  189,
  190,
  243,
  221,
  56,
  190,
  28,
  56,
  221,
  27,
  28,
  222,
  29,
  27,
  223,
  30,
  29,
  224,
  247,
  30,
  225,
  238,
  79,
  20,
  166,
  59,
  75,
  60,
  75,
  240,
  147,
  177,
  215,
  20,
  79,
  166,
  187,
  147,
  213,
  112,
  233,
  244,
  233,
  128,
  245,
  128,
  114,
  188,
  114,
  217,
  174,
  131,
  115,
  220,
  217,
  198,
  236,
  198,
  131,
  134,
  177,
  132,
  58,
  143,
  35,
  124,
  110,
  163,
  7,
  228,
  110,
  25,
  356,
  389,
  368,
  11,
  302,
  267,
  452,
  350,
  349,
  302,
  303,
  269,
  357,
  343,
  277,
  452,
  453,
  357,
  333,
  332,
  297,
  175,
  152,
  377,
  384,
  398,
  382,
  347,
  348,
  330,
  303,
  304,
  270,
  9,
  336,
  337,
  278,
  279,
  360,
  418,
  262,
  431,
  304,
  408,
  409,
  310,
  415,
  407,
  270,
  409,
  410,
  450,
  348,
  347,
  422,
  430,
  434,
  313,
  314,
  17,
  306,
  307,
  375,
  387,
  388,
  260,
  286,
  414,
  398,
  335,
  406,
  418,
  364,
  367,
  416,
  423,
  358,
  327,
  251,
  284,
  298,
  281,
  5,
  4,
  373,
  374,
  253,
  307,
  320,
  321,
  425,
  427,
  411,
  421,
  313,
  18,
  321,
  405,
  406,
  320,
  404,
  405,
  315,
  16,
  17,
  426,
  425,
  266,
  377,
  400,
  369,
  322,
  391,
  269,
  417,
  465,
  464,
  386,
  257,
  258,
  466,
  260,
  388,
  456,
  399,
  419,
  284,
  332,
  333,
  417,
  285,
  8,
  346,
  340,
  261,
  413,
  441,
  285,
  327,
  460,
  328,
  355,
  371,
  329,
  392,
  439,
  438,
  382,
  341,
  256,
  429,
  420,
  360,
  364,
  394,
  379,
  277,
  343,
  437,
  443,
  444,
  283,
  275,
  440,
  363,
  431,
  262,
  369,
  297,
  338,
  337,
  273,
  375,
  321,
  450,
  451,
  349,
  446,
  342,
  467,
  293,
  334,
  282,
  458,
  461,
  462,
  276,
  353,
  383,
  308,
  324,
  325,
  276,
  300,
  293,
  372,
  345,
  447,
  382,
  398,
  362,
  352,
  345,
  340,
  274,
  1,
  19,
  456,
  248,
  281,
  436,
  427,
  425,
  381,
  256,
  252,
  269,
  391,
  393,
  200,
  199,
  428,
  266,
  330,
  329,
  287,
  273,
  422,
  250,
  462,
  328,
  258,
  286,
  384,
  265,
  353,
  342,
  387,
  259,
  257,
  424,
  431,
  430,
  342,
  353,
  276,
  273,
  335,
  424,
  292,
  325,
  307,
  366,
  447,
  345,
  271,
  303,
  302,
  423,
  266,
  371,
  294,
  455,
  460,
  279,
  278,
  294,
  271,
  272,
  304,
  432,
  434,
  427,
  272,
  407,
  408,
  394,
  430,
  431,
  395,
  369,
  400,
  334,
  333,
  299,
  351,
  417,
  168,
  352,
  280,
  411,
  325,
  319,
  320,
  295,
  296,
  336,
  319,
  403,
  404,
  330,
  348,
  349,
  293,
  298,
  333,
  323,
  454,
  447,
  15,
  16,
  315,
  358,
  429,
  279,
  14,
  15,
  316,
  285,
  336,
  9,
  329,
  349,
  350,
  374,
  380,
  252,
  318,
  402,
  403,
  6,
  197,
  419,
  318,
  319,
  325,
  367,
  364,
  365,
  435,
  367,
  397,
  344,
  438,
  439,
  272,
  271,
  311,
  195,
  5,
  281,
  273,
  287,
  291,
  396,
  428,
  199,
  311,
  271,
  268,
  283,
  444,
  445,
  373,
  254,
  339,
  263,
  466,
  249,
  282,
  334,
  296,
  449,
  347,
  346,
  264,
  447,
  454,
  336,
  296,
  299,
  338,
  10,
  151,
  278,
  439,
  455,
  292,
  407,
  415,
  358,
  371,
  355,
  340,
  345,
  372,
  390,
  249,
  466,
  346,
  347,
  280,
  442,
  443,
  282,
  19,
  94,
  370,
  441,
  442,
  295,
  248,
  419,
  197,
  263,
  255,
  359,
  440,
  275,
  274,
  300,
  383,
  368,
  351,
  412,
  465,
  263,
  467,
  466,
  301,
  368,
  389,
  380,
  374,
  386,
  395,
  378,
  379,
  412,
  351,
  419,
  436,
  426,
  322,
  373,
  390,
  388,
  2,
  164,
  393,
  370,
  462,
  461,
  164,
  0,
  267,
  302,
  11,
  12,
  374,
  373,
  387,
  268,
  12,
  13,
  293,
  300,
  301,
  446,
  261,
  340,
  385,
  384,
  381,
  330,
  266,
  425,
  426,
  423,
  391,
  429,
  355,
  437,
  391,
  327,
  326,
  440,
  457,
  438,
  341,
  382,
  362,
  459,
  457,
  461,
  434,
  430,
  394,
  414,
  463,
  362,
  396,
  369,
  262,
  354,
  461,
  457,
  316,
  403,
  402,
  315,
  404,
  403,
  314,
  405,
  404,
  313,
  406,
  405,
  421,
  418,
  406,
  366,
  401,
  361,
  306,
  408,
  407,
  291,
  409,
  408,
  287,
  410,
  409,
  432,
  436,
  410,
  434,
  416,
  411,
  264,
  368,
  383,
  309,
  438,
  457,
  352,
  376,
  401,
  274,
  275,
  4,
  421,
  428,
  262,
  294,
  327,
  358,
  433,
  416,
  367,
  289,
  455,
  439,
  462,
  370,
  326,
  2,
  326,
  370,
  305,
  460,
  455,
  254,
  449,
  448,
  255,
  261,
  446,
  253,
  450,
  449,
  252,
  451,
  450,
  256,
  452,
  451,
  341,
  453,
  452,
  413,
  464,
  463,
  441,
  413,
  414,
  258,
  442,
  441,
  257,
  443,
  442,
  259,
  444,
  443,
  260,
  445,
  444,
  467,
  342,
  445,
  459,
  458,
  250,
  289,
  392,
  290,
  290,
  328,
  460,
  376,
  433,
  435,
  250,
  290,
  392,
  411,
  416,
  433,
  341,
  463,
  464,
  453,
  464,
  465,
  357,
  465,
  412,
  343,
  412,
  399,
  360,
  363,
  440,
  437,
  399,
  456,
  420,
  456,
  363,
  401,
  435,
  288,
  372,
  383,
  353,
  339,
  255,
  249,
  448,
  261,
  255,
  133,
  243,
  190,
  133,
  155,
  112,
  33,
  246,
  247,
  33,
  130,
  25,
  398,
  384,
  286,
  362,
  398,
  414,
  362,
  463,
  341,
  263,
  359,
  467,
  263,
  249,
  255,
  466,
  467,
  260,
  75,
  60,
  166,
  238,
  239,
  79,
  162,
  127,
  139,
  72,
  11,
  37,
  121,
  232,
  120,
  73,
  72,
  39,
  114,
  128,
  47,
  233,
  232,
  128,
  103,
  104,
  67,
  152,
  175,
  148,
  173,
  157,
  155,
  119,
  118,
  101,
  74,
  73,
  40,
  107,
  9,
  108,
  49,
  48,
  131,
  32,
  194,
  211,
  184,
  74,
  185,
  191,
  80,
  183,
  185,
  40,
  186,
  119,
  230,
  118,
  210,
  202,
  214,
  84,
  83,
  17,
  77,
  76,
  146,
  161,
  160,
  30,
  190,
  56,
  173,
  182,
  106,
  194,
  138,
  135,
  192,
  129,
  203,
  98,
  54,
  21,
  68,
  5,
  51,
  4,
  145,
  144,
  23,
  90,
  77,
  91,
  207,
  205,
  187,
  83,
  201,
  18,
  181,
  91,
  182,
  180,
  90,
  181,
  16,
  85,
  17,
  205,
  206,
  36,
  176,
  148,
  140,
  165,
  92,
  39,
  245,
  193,
  244,
  27,
  159,
  28,
  30,
  247,
  161,
  174,
  236,
  196,
  103,
  54,
  104,
  55,
  193,
  8,
  111,
  117,
  31,
  221,
  189,
  55,
  240,
  98,
  99,
  142,
  126,
  100,
  219,
  166,
  218,
  112,
  155,
  26,
  198,
  209,
  131,
  169,
  135,
  150,
  114,
  47,
  217,
  224,
  223,
  53,
  220,
  45,
  134,
  32,
  211,
  140,
  109,
  67,
  108,
  146,
  43,
  91,
  231,
  230,
  120,
  113,
  226,
  247,
  105,
  63,
  52,
  241,
  238,
  242,
  124,
  46,
  156,
  95,
  78,
  96,
  70,
  46,
  63,
  116,
  143,
  227,
  116,
  123,
  111,
  1,
  44,
  19,
  3,
  236,
  51,
  207,
  216,
  205,
  26,
  154,
  22,
  165,
  39,
  167,
  199,
  200,
  208,
  101,
  36,
  100,
  43,
  57,
  202,
  242,
  20,
  99,
  56,
  28,
  157,
  124,
  35,
  113,
  29,
  160,
  27,
  211,
  204,
  210,
  124,
  113,
  46,
  106,
  43,
  204,
  96,
  62,
  77,
  227,
  137,
  116,
  73,
  41,
  72,
  36,
  203,
  142,
  235,
  64,
  240,
  48,
  49,
  64,
  42,
  41,
  74,
  214,
  212,
  207,
  183,
  42,
  184,
  210,
  169,
  211,
  140,
  170,
  176,
  104,
  105,
  69,
  193,
  122,
  168,
  50,
  123,
  187,
  89,
  96,
  90,
  66,
  65,
  107,
  179,
  89,
  180,
  119,
  101,
  120,
  68,
  63,
  104,
  234,
  93,
  227,
  16,
  15,
  85,
  209,
  129,
  49,
  15,
  14,
  86,
  107,
  55,
  9,
  120,
  100,
  121,
  153,
  145,
  22,
  178,
  88,
  179,
  197,
  6,
  196,
  89,
  88,
  96,
  135,
  138,
  136,
  138,
  215,
  172,
  218,
  115,
  219,
  41,
  42,
  81,
  5,
  195,
  51,
  57,
  43,
  61,
  208,
  171,
  199,
  41,
  81,
  38,
  224,
  53,
  225,
  24,
  144,
  110,
  105,
  52,
  66,
  118,
  229,
  117,
  227,
  34,
  234,
  66,
  107,
  69,
  10,
  109,
  151,
  219,
  48,
  235,
  183,
  62,
  191,
  142,
  129,
  126,
  116,
  111,
  143,
  7,
  163,
  246,
  118,
  117,
  50,
  223,
  222,
  52,
  94,
  19,
  141,
  222,
  221,
  65,
  196,
  3,
  197,
  45,
  220,
  44,
  156,
  70,
  139,
  188,
  122,
  245,
  139,
  71,
  162,
  145,
  153,
  159,
  149,
  170,
  150,
  122,
  188,
  196,
  206,
  216,
  92,
  163,
  144,
  161,
  164,
  2,
  167,
  242,
  141,
  241,
  0,
  164,
  37,
  11,
  72,
  12,
  144,
  145,
  160,
  12,
  38,
  13,
  70,
  63,
  71,
  31,
  226,
  111,
  157,
  158,
  154,
  36,
  101,
  205,
  203,
  206,
  165,
  126,
  209,
  217,
  98,
  165,
  97,
  237,
  220,
  218,
  237,
  239,
  241,
  210,
  214,
  169,
  140,
  171,
  32,
  241,
  125,
  237,
  179,
  86,
  178,
  180,
  85,
  179,
  181,
  84,
  180,
  182,
  83,
  181,
  194,
  201,
  182,
  177,
  137,
  132,
  184,
  76,
  183,
  185,
  61,
  184,
  186,
  57,
  185,
  216,
  212,
  186,
  192,
  214,
  187,
  139,
  34,
  156,
  218,
  79,
  237,
  147,
  123,
  177,
  45,
  44,
  4,
  208,
  201,
  32,
  98,
  64,
  129,
  192,
  213,
  138,
  235,
  59,
  219,
  141,
  242,
  97,
  97,
  2,
  141,
  240,
  75,
  235,
  229,
  24,
  228,
  31,
  25,
  226,
  230,
  23,
  229,
  231,
  22,
  230,
  232,
  26,
  231,
  233,
  112,
  232,
  244,
  189,
  243,
  189,
  221,
  190,
  222,
  28,
  221,
  223,
  27,
  222,
  224,
  29,
  223,
  225,
  30,
  224,
  113,
  247,
  225,
  99,
  60,
  240,
  213,
  147,
  215,
  60,
  20,
  166,
  192,
  187,
  213,
  243,
  112,
  244,
  244,
  233,
  245,
  245,
  128,
  188,
  188,
  114,
  174,
  134,
  131,
  220,
  174,
  217,
  236,
  236,
  198,
  134,
  215,
  177,
  58,
  156,
  143,
  124,
  25,
  110,
  7,
  31,
  228,
  25,
  264,
  356,
  368,
  0,
  11,
  267,
  451,
  452,
  349,
  267,
  302,
  269,
  350,
  357,
  277,
  350,
  452,
  357,
  299,
  333,
  297,
  396,
  175,
  377,
  381,
  384,
  382,
  280,
  347,
  330,
  269,
  303,
  270,
  151,
  9,
  337,
  344,
  278,
  360,
  424,
  418,
  431,
  270,
  304,
  409,
  272,
  310,
  407,
  322,
  270,
  410,
  449,
  450,
  347,
  432,
  422,
  434,
  18,
  313,
  17,
  291,
  306,
  375,
  259,
  387,
  260,
  424,
  335,
  418,
  434,
  364,
  416,
  391,
  423,
  327,
  301,
  251,
  298,
  275,
  281,
  4,
  254,
  373,
  253,
  375,
  307,
  321,
  280,
  425,
  411,
  200,
  421,
  18,
  335,
  321,
  406,
  321,
  320,
  405,
  314,
  315,
  17,
  423,
  426,
  266,
  396,
  377,
  369,
  270,
  322,
  269,
  413,
  417,
  464,
  385,
  386,
  258,
  248,
  456,
  419,
  298,
  284,
  333,
  168,
  417,
  8,
  448,
  346,
  261,
  417,
  413,
  285,
  326,
  327,
  328,
  277,
  355,
  329,
  309,
  392,
  438,
  381,
  382,
  256,
  279,
  429,
  360,
  365,
  364,
  379,
  355,
  277,
  437,
  282,
  443,
  283,
  281,
  275,
  363,
  395,
  431,
  369,
  299,
  297,
  337,
  335,
  273,
  321,
  348,
  450,
  349,
  359,
  446,
  467,
  283,
  293,
  282,
  250,
  458,
  462,
  300,
  276,
  383,
  292,
  308,
  325,
  283,
  276,
  293,
  264,
  372,
  447,
  346,
  352,
  340,
  354,
  274,
  19,
  363,
  456,
  281,
  426,
  436,
  425,
  380,
  381,
  252,
  267,
  269,
  393,
  421,
  200,
  428,
  371,
  266,
  329,
  432,
  287,
  422,
  290,
  250,
  328,
  385,
  258,
  384,
  446,
  265,
  342,
  386,
  387,
  257,
  422,
  424,
  430,
  445,
  342,
  276,
  422,
  273,
  424,
  306,
  292,
  307,
  352,
  366,
  345,
  268,
  271,
  302,
  358,
  423,
  371,
  327,
  294,
  460,
  331,
  279,
  294,
  303,
  271,
  304,
  436,
  432,
  427,
  304,
  272,
  408,
  395,
  394,
  431,
  378,
  395,
  400,
  296,
  334,
  299,
  6,
  351,
  168,
  376,
  352,
  411,
  307,
  325,
  320,
  285,
  295,
  336,
  320,
  319,
  404,
  329,
  330,
  349,
  334,
  293,
  333,
  366,
  323,
  447,
  316,
  15,
  315,
  331,
  358,
  279,
  317,
  14,
  316,
  8,
  285,
  9,
  277,
  329,
  350,
  253,
  374,
  252,
  319,
  318,
  403,
  351,
  6,
  419,
  324,
  318,
  325,
  397,
  367,
  365,
  288,
  435,
  397,
  278,
  344,
  439,
  310,
  272,
  311,
  248,
  195,
  281,
  375,
  273,
  291,
  175,
  396,
  199,
  312,
  311,
  268,
  276,
  283,
  445,
  390,
  373,
  339,
  295,
  282,
  296,
  448,
  449,
  346,
  356,
  264,
  454,
  337,
  336,
  299,
  337,
  338,
  151,
  294,
  278,
  455,
  308,
  292,
  415,
  429,
  358,
  355,
  265,
  340,
  372,
  388,
  390,
  466,
  352,
  346,
  280,
  295,
  442,
  282,
  354,
  19,
  370,
  285,
  441,
  295,
  195,
  248,
  197,
  457,
  440,
  274,
  301,
  300,
  368,
  417,
  351,
  465,
  251,
  301,
  389,
  385,
  380,
  386,
  394,
  395,
  379,
  399,
  412,
  419,
  410,
  436,
  322,
  387,
  373,
  388,
  326,
  2,
  393,
  354,
  370,
  461,
  393,
  164,
  267,
  268,
  302,
  12,
  386,
  374,
  387,
  312,
  268,
  13,
  298,
  293,
  301,
  265,
  446,
  340,
  380,
  385,
  381,
  280,
  330,
  425,
  322,
  426,
  391,
  420,
  429,
  437,
  393,
  391,
  326,
  344,
  440,
  438,
  458,
  459,
  461,
  364,
  434,
  394,
  428,
  396,
  262,
  274,
  354,
  457,
  317,
  316,
  402,
  316,
  315,
  403,
  315,
  314,
  404,
  314,
  313,
  405,
  313,
  421,
  406,
  323,
  366,
  361,
  292,
  306,
  407,
  306,
  291,
  408,
  291,
  287,
  409,
  287,
  432,
  410,
  427,
  434,
  411,
  372,
  264,
  383,
  459,
  309,
  457,
  366,
  352,
  401,
  1,
  274,
  4,
  418,
  421,
  262,
  331,
  294,
  358,
  435,
  433,
  367,
  392,
  289,
  439,
  328,
  462,
  326,
  94,
  2,
  370,
  289,
  305,
  455,
  339,
  254,
  448,
  359,
  255,
  446,
  254,
  253,
  449,
  253,
  252,
  450,
  252,
  256,
  451,
  256,
  341,
  452,
  414,
  413,
  463,
  286,
  441,
  414,
  286,
  258,
  441,
  258,
  257,
  442,
  257,
  259,
  443,
  259,
  260,
  444,
  260,
  467,
  445,
  309,
  459,
  250,
  305,
  289,
  290,
  305,
  290,
  460,
  401,
  376,
  435,
  309,
  250,
  392,
  376,
  411,
  433,
  453,
  341,
  464,
  357,
  453,
  465,
  343,
  357,
  412,
  437,
  343,
  399,
  344,
  360,
  440,
  420,
  437,
  456,
  360,
  420,
  363,
  361,
  401,
  288,
  265,
  372,
  353,
  390,
  339,
  249,
  339,
  448,
  255
];
var VTX68 = [
  /* cont  */
  127,
  234,
  132,
  58,
  172,
  150,
  149,
  148,
  152,
  377,
  378,
  379,
  397,
  288,
  361,
  454,
  356,
  /* brows */
  70,
  63,
  105,
  66,
  107,
  336,
  296,
  334,
  293,
  300,
  /* nose  */
  168,
  6,
  195,
  4,
  98,
  97,
  2,
  326,
  327,
  /* eyes  */
  33,
  160,
  158,
  133,
  153,
  144,
  362,
  385,
  387,
  263,
  373,
  380,
  /* lip   */
  57,
  40,
  37,
  0,
  267,
  270,
  287,
  321,
  314,
  17,
  84,
  91,
  /* mouth */
  78,
  81,
  13,
  311,
  308,
  402,
  14,
  178
];
var VTX33 = [33, 133, 362, 263, 1, 62, 308, 159, 145, 386, 374, 6, 102, 331, 2, 13, 14, 70, 105, 107, 336, 334, 300, 54, 10, 284, 50, 280, 234, 454, 58, 288, 152];
var VTX7 = [33, 133, 362, 263, 1, 78, 308];
var UV68 = VTX68.map((x) => UV468[x]);
var UV33 = VTX33.map((x) => UV468[x]);
var UV7 = VTX7.map((x) => UV468[x]);
function connectionsToIndices(connections) {
  const indices = connections.map((connection) => connection[0]);
  indices.push(connections[connections.length - 1][1]);
  return indices;
}
var pairsLips = [
  [61, 146],
  [146, 91],
  [91, 181],
  [181, 84],
  [84, 17],
  [17, 314],
  [314, 405],
  [405, 321],
  [321, 375],
  [375, 291],
  [61, 185],
  [185, 40],
  [40, 39],
  [39, 37],
  [37, 0],
  [0, 267],
  [267, 269],
  [269, 270],
  [270, 409],
  [409, 291],
  [78, 95],
  [95, 88],
  [88, 178],
  [178, 87],
  [87, 14],
  [14, 317],
  [317, 402],
  [402, 318],
  [318, 324],
  [324, 308],
  [78, 191],
  [191, 80],
  [80, 81],
  [81, 82],
  [82, 13],
  [13, 312],
  [312, 311],
  [311, 310],
  [310, 415],
  [415, 308]
];
var pairsLeftEye = [[263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]];
var pairsLeftEyebrow = [[276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]];
var pairsLeftIris = [[474, 475], [475, 476], [476, 477], [477, 474]];
var pairsRightEye = [[33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]];
var pairsRightEyebrow = [[46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]];
var pairsRightIris = [[469, 470], [470, 471], [471, 472], [472, 469]];
var pairsFaceContour = [
  [10, 338],
  [338, 297],
  [297, 332],
  [332, 284],
  [284, 251],
  [251, 389],
  [389, 356],
  [356, 454],
  [454, 323],
  [323, 361],
  [361, 288],
  [288, 397],
  [397, 365],
  [365, 379],
  [379, 378],
  [378, 400],
  [400, 377],
  [377, 152],
  [152, 148],
  [148, 176],
  [176, 149],
  [149, 150],
  [150, 136],
  [136, 172],
  [172, 58],
  [58, 132],
  [132, 93],
  [93, 234],
  [234, 127],
  [127, 162],
  [162, 21],
  [21, 54],
  [54, 103],
  [103, 67],
  [67, 109],
  [109, 10]
];
var contourKeypoints = {
  lips: connectionsToIndices(pairsLips),
  leftEye: connectionsToIndices(pairsLeftEye),
  leftEyebrow: connectionsToIndices(pairsLeftEyebrow),
  leftIris: connectionsToIndices(pairsLeftIris),
  rightEye: connectionsToIndices(pairsRightEye),
  rightEyebrow: connectionsToIndices(pairsRightEyebrow),
  rightIris: connectionsToIndices(pairsRightIris),
  faceOval: connectionsToIndices(pairsFaceContour)
};

// src/draw/primitives.ts
var getCanvasContext = (input) => {
  if (!input) log("draw error: invalid canvas");
  else if (!input.getContext) log("draw error: canvas context not defined");
  else {
    const ctx = input.getContext("2d", { willReadFrequently: true });
    if (!ctx) log("draw error: cannot get canvas context");
    else return ctx;
  }
  return null;
};
var rad2deg = (theta) => Math.round(theta * 180 / Math.PI);
var replace = (str, source, target) => str.replace(source, typeof target === "number" ? target.toFixed(1) : target);
var colorDepth = (z, opt) => {
  if (!opt.useDepth || typeof z === "undefined") return opt.color;
  const rgb3 = Uint8ClampedArray.from([127 + 2 * z, 127 - 2 * z, 255]);
  return `rgba(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]}, ${opt.alpha})`;
};
function labels(ctx, str, startX, startY, localOptions2) {
  const line = str.replace(/\[.*\]/g, "").split("\n").map((l) => l.trim());
  const x = Math.max(0, startX);
  for (let i = line.length - 1; i >= 0; i--) {
    const y = i * localOptions2.lineHeight + startY;
    if (localOptions2.shadowColor && localOptions2.shadowColor !== "") {
      ctx.fillStyle = localOptions2.shadowColor;
      ctx.fillText(line[i], x + 5, y + 16);
    }
    ctx.fillStyle = localOptions2.labelColor;
    ctx.fillText(line[i], x + 4, y + 15);
  }
}
function point(ctx, x, y, z, localOptions2) {
  ctx.fillStyle = colorDepth(z, localOptions2);
  ctx.beginPath();
  ctx.arc(x, y, localOptions2.pointSize, 0, 2 * Math.PI);
  ctx.fill();
}
function rect(ctx, x, y, width, height, localOptions2) {
  ctx.beginPath();
  ctx.lineWidth = localOptions2.lineWidth;
  if (localOptions2.useCurves) {
    const cx = (x + x + width) / 2;
    const cy = (y + y + height) / 2;
    ctx.ellipse(cx, cy, width / 2, height / 2, 0, 0, 2 * Math.PI);
  } else {
    ctx.moveTo(x + localOptions2.roundRect, y);
    ctx.lineTo(x + width - localOptions2.roundRect, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + localOptions2.roundRect);
    ctx.lineTo(x + width, y + height - localOptions2.roundRect);
    ctx.quadraticCurveTo(x + width, y + height, x + width - localOptions2.roundRect, y + height);
    ctx.lineTo(x + localOptions2.roundRect, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - localOptions2.roundRect);
    ctx.lineTo(x, y + localOptions2.roundRect);
    ctx.quadraticCurveTo(x, y, x + localOptions2.roundRect, y);
    ctx.closePath();
  }
  ctx.stroke();
}
function lines(ctx, points, localOptions2) {
  if (points.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (const pt of points) {
    ctx.strokeStyle = colorDepth(pt[2] || 0, localOptions2);
    ctx.lineTo(Math.trunc(pt[0]), Math.trunc(pt[1]));
  }
  ctx.stroke();
  if (localOptions2.fillPolygons) {
    ctx.closePath();
    ctx.fill();
  }
}
function curves(ctx, points, localOptions2) {
  if (points.length < 2) return;
  ctx.lineWidth = localOptions2.lineWidth;
  if (!localOptions2.useCurves || points.length <= 2) {
    lines(ctx, points, localOptions2);
    return;
  }
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 0; i < points.length - 2; i++) {
    const xc = (points[i][0] + points[i + 1][0]) / 2;
    const yc = (points[i][1] + points[i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
  }
  ctx.quadraticCurveTo(points[points.length - 2][0], points[points.length - 2][1], points[points.length - 1][0], points[points.length - 1][1]);
  ctx.stroke();
  if (localOptions2.fillPolygons) {
    ctx.closePath();
    ctx.fill();
  }
}
function arrow(ctx, from, to, radius = 5) {
  let angle;
  let x;
  let y;
  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  angle = Math.atan2(to[1] - from[1], to[0] - from[0]);
  x = radius * Math.cos(angle) + to[0];
  y = radius * Math.sin(angle) + to[1];
  ctx.moveTo(x, y);
  angle += 1 / 3 * (2 * Math.PI);
  x = radius * Math.cos(angle) + to[0];
  y = radius * Math.sin(angle) + to[1];
  ctx.lineTo(x, y);
  angle += 1 / 3 * (2 * Math.PI);
  x = radius * Math.cos(angle) + to[0];
  y = radius * Math.sin(angle) + to[1];
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// src/draw/options.ts
var options = {
  color: "rgba(173, 216, 230, 0.6)",
  // 'lightblue' with light alpha channel
  labelColor: "rgba(173, 216, 230, 1)",
  // 'lightblue' with dark alpha channel
  shadowColor: "black",
  alpha: 0.5,
  font: 'small-caps 16px "Segoe UI"',
  lineHeight: 18,
  lineWidth: 4,
  pointSize: 2,
  roundRect: 8,
  drawPoints: false,
  drawLabels: true,
  drawBoxes: true,
  drawAttention: true,
  drawGestures: true,
  drawPolygons: true,
  drawGaze: true,
  fillPolygons: false,
  useDepth: true,
  useCurves: false,
  faceLabels: "",
  bodyLabels: "",
  bodyPartLabels: "",
  objectLabels: "",
  handLabels: "",
  fingerLabels: "",
  gestureLabels: ""
};

// src/face/constants.ts
var LIPS_CONNECTIONS = [
  [61, 146],
  [146, 91],
  [91, 181],
  [181, 84],
  [84, 17],
  [17, 314],
  [314, 405],
  [405, 321],
  [321, 375],
  [375, 291],
  [61, 185],
  [185, 40],
  [40, 39],
  [39, 37],
  [37, 0],
  [0, 267],
  [267, 269],
  [269, 270],
  [270, 409],
  [409, 291],
  [78, 95],
  [95, 88],
  [88, 178],
  [178, 87],
  [87, 14],
  [14, 317],
  [317, 402],
  [402, 318],
  [318, 324],
  [324, 308],
  [78, 191],
  [191, 80],
  [80, 81],
  [81, 82],
  [82, 13],
  [13, 312],
  [312, 311],
  [311, 310],
  [310, 415],
  [415, 308]
];
var LEFT_EYE_CONNECTIONS = [[263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]];
var LEFT_EYEBROW_CONNECTIONS = [[276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]];
var LEFT_IRIS_CONNECTIONS = [[474, 475], [475, 476], [476, 477], [477, 474]];
var RIGHT_EYE_CONNECTIONS = [[33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]];
var RIGHT_EYEBROW_CONNECTIONS = [[46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]];
var RIGHT_IRIS_CONNECTIONS = [[469, 470], [470, 471], [471, 472], [472, 469]];
var FACE_OVAL_CONNECTIONS = [
  [10, 338],
  [338, 297],
  [297, 332],
  [332, 284],
  [284, 251],
  [251, 389],
  [389, 356],
  [356, 454],
  [454, 323],
  [323, 361],
  [361, 288],
  [288, 397],
  [397, 365],
  [365, 379],
  [379, 378],
  [378, 400],
  [400, 377],
  [377, 152],
  [152, 148],
  [148, 176],
  [176, 149],
  [149, 150],
  [150, 136],
  [136, 172],
  [172, 58],
  [58, 132],
  [132, 93],
  [93, 234],
  [234, 127],
  [127, 162],
  [162, 21],
  [21, 54],
  [54, 103],
  [103, 67],
  [67, 109],
  [109, 10]
];
function connectionsToIndices2(connections) {
  const indices = connections.map((connection) => connection[0]);
  indices.push(connections[connections.length - 1][1]);
  return indices;
}
var MEDIAPIPE_FACE_MESH_KEYPOINTS_BY_CONTOUR = {
  lips: connectionsToIndices2(LIPS_CONNECTIONS),
  leftEye: connectionsToIndices2(LEFT_EYE_CONNECTIONS),
  leftEyebrow: connectionsToIndices2(LEFT_EYEBROW_CONNECTIONS),
  leftIris: connectionsToIndices2(LEFT_IRIS_CONNECTIONS),
  rightEye: connectionsToIndices2(RIGHT_EYE_CONNECTIONS),
  rightEyebrow: connectionsToIndices2(RIGHT_EYEBROW_CONNECTIONS),
  rightIris: connectionsToIndices2(RIGHT_IRIS_CONNECTIONS),
  faceOval: connectionsToIndices2(FACE_OVAL_CONNECTIONS)
};
var indexLabelPairs = Object.entries(MEDIAPIPE_FACE_MESH_KEYPOINTS_BY_CONTOUR).map(([label, indices]) => indices.map((index2) => [index2, label])).flat();
var MEDIAPIPE_FACE_MESH_KEYPOINTS = new Map(indexLabelPairs);
var LANDMARKS_REFINEMENT_LIPS_CONFIG = [
  61,
  146,
  91,
  181,
  84,
  17,
  314,
  405,
  321,
  375,
  291,
  // Lower outer.
  185,
  40,
  39,
  37,
  0,
  267,
  269,
  270,
  409,
  // Upper outer(excluding corners).
  78,
  95,
  88,
  178,
  87,
  14,
  317,
  402,
  318,
  324,
  308,
  // Lower inner.
  191,
  80,
  81,
  82,
  13,
  312,
  311,
  310,
  415,
  // Upper inner(excluding corners).
  76,
  77,
  90,
  180,
  85,
  16,
  315,
  404,
  320,
  307,
  306,
  // Lower semi - outer.
  184,
  74,
  73,
  72,
  11,
  302,
  303,
  304,
  408,
  // Upper semi - outer(excluding corners).
  62,
  96,
  89,
  179,
  86,
  15,
  316,
  403,
  319,
  325,
  292,
  // Lower semi - inner.
  183,
  42,
  41,
  38,
  12,
  268,
  271,
  272,
  407
  // Upper semi - inner(excluding corners).
];
var LANDMARKS_REFINEMENT_LEFT_EYE_CONFIG = [
  33,
  7,
  163,
  144,
  145,
  153,
  154,
  155,
  133,
  // Lower contour.
  246,
  161,
  160,
  159,
  158,
  157,
  173,
  // upper contour (excluding corners).
  130,
  25,
  110,
  24,
  23,
  22,
  26,
  112,
  243,
  // Halo x2 lower contour.
  247,
  30,
  29,
  27,
  28,
  56,
  190,
  // Halo x2 upper contour (excluding corners).
  226,
  31,
  228,
  229,
  230,
  231,
  232,
  233,
  244,
  // Halo x3 lower contour.
  113,
  225,
  224,
  223,
  222,
  221,
  189,
  // Halo x3 upper contour (excluding corners).
  35,
  124,
  46,
  53,
  52,
  65,
  // Halo x4 upper contour (no lower because of mesh structure) or eyebrow inner contour.
  143,
  111,
  117,
  118,
  119,
  120,
  121,
  128,
  245,
  // Halo x5 lower contour.
  156,
  70,
  63,
  105,
  66,
  107,
  55,
  193
  // Halo x5 upper contour (excluding corners) or eyebrow outer contour.
];
var LANDMARKS_REFINEMENT_RIGHT_EYE_CONFIG = [
  263,
  249,
  390,
  373,
  374,
  380,
  381,
  382,
  362,
  // Lower contour.
  466,
  388,
  387,
  386,
  385,
  384,
  398,
  // Upper contour (excluding corners).
  359,
  255,
  339,
  254,
  253,
  252,
  256,
  341,
  463,
  // Halo x2 lower contour.
  467,
  260,
  259,
  257,
  258,
  286,
  414,
  // Halo x2 upper contour (excluding corners).
  446,
  261,
  448,
  449,
  450,
  451,
  452,
  453,
  464,
  // Halo x3 lower contour.
  342,
  445,
  444,
  443,
  442,
  441,
  413,
  // Halo x3 upper contour (excluding corners).
  265,
  353,
  276,
  283,
  282,
  295,
  // Halo x4 upper contour (no lower because of mesh structure) or/ eyebrow inner contour.
  372,
  340,
  346,
  347,
  348,
  349,
  350,
  357,
  465,
  // Halo x5 lower contour.
  383,
  300,
  293,
  334,
  296,
  336,
  285,
  417
  // Halo x5 upper contour (excluding corners) or eyebrow outer contour.
];

// src/draw/face.ts
var localOptions;
function drawLabels(f, ctx) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (!localOptions.drawLabels || ((_a = localOptions.faceLabels) == null ? void 0 : _a.length) === 0) return;
  let l = localOptions.faceLabels.slice();
  l = replace(l, "[id]", f.id.toFixed(0));
  if (f.score) l = replace(l, "[score]", 100 * f.score);
  if (f.gender) l = replace(l, "[gender]", f.gender);
  if (f.genderScore) l = replace(l, "[genderScore]", 100 * f.genderScore);
  if (f.age) l = replace(l, "[age]", f.age);
  if (f.distance) l = replace(l, "[distance]", 100 * f.distance);
  if (f.real) l = replace(l, "[real]", 100 * f.real);
  if (f.live) l = replace(l, "[live]", 100 * f.live);
  if (f.emotion && f.emotion.length > 0) {
    const emotion2 = f.emotion.map((a) => `${Math.trunc(100 * a.score)}% ${a.emotion}`);
    if (emotion2.length > 3) emotion2.length = 3;
    l = replace(l, "[emotions]", emotion2.join(" "));
  }
  if ((_c = (_b = f.rotation) == null ? void 0 : _b.angle) == null ? void 0 : _c.roll) l = replace(l, "[roll]", rad2deg(f.rotation.angle.roll));
  if ((_e = (_d = f.rotation) == null ? void 0 : _d.angle) == null ? void 0 : _e.yaw) l = replace(l, "[yaw]", rad2deg(f.rotation.angle.yaw));
  if ((_g = (_f = f.rotation) == null ? void 0 : _f.angle) == null ? void 0 : _g.pitch) l = replace(l, "[pitch]", rad2deg(f.rotation.angle.pitch));
  if ((_i = (_h = f.rotation) == null ? void 0 : _h.gaze) == null ? void 0 : _i.bearing) l = replace(l, "[gaze]", rad2deg(f.rotation.gaze.bearing));
  labels(ctx, l, f.box[0], f.box[1], localOptions);
}
function drawIrisElipse(f, ctx) {
  var _a, _b, _c, _d;
  if (((_a = f.annotations) == null ? void 0 : _a.leftEyeIris) && ((_b = f.annotations) == null ? void 0 : _b.leftEyeIris[0])) {
    ctx.strokeStyle = localOptions.useDepth ? "rgba(255, 200, 255, 0.3)" : localOptions.color;
    ctx.beginPath();
    const sizeX = Math.abs(f.annotations.leftEyeIris[3][0] - f.annotations.leftEyeIris[1][0]) / 2;
    const sizeY = Math.abs(f.annotations.leftEyeIris[4][1] - f.annotations.leftEyeIris[2][1]) / 2;
    ctx.ellipse(f.annotations.leftEyeIris[0][0], f.annotations.leftEyeIris[0][1], sizeX, sizeY, 0, 0, 2 * Math.PI);
    ctx.stroke();
    if (localOptions.fillPolygons) {
      ctx.fillStyle = localOptions.useDepth ? "rgba(255, 255, 200, 0.3)" : localOptions.color;
      ctx.fill();
    }
  }
  if (((_c = f.annotations) == null ? void 0 : _c.rightEyeIris) && ((_d = f.annotations) == null ? void 0 : _d.rightEyeIris[0])) {
    ctx.strokeStyle = localOptions.useDepth ? "rgba(255, 200, 255, 0.3)" : localOptions.color;
    ctx.beginPath();
    const sizeX = Math.abs(f.annotations.rightEyeIris[3][0] - f.annotations.rightEyeIris[1][0]) / 2;
    const sizeY = Math.abs(f.annotations.rightEyeIris[4][1] - f.annotations.rightEyeIris[2][1]) / 2;
    ctx.ellipse(f.annotations.rightEyeIris[0][0], f.annotations.rightEyeIris[0][1], sizeX, sizeY, 0, 0, 2 * Math.PI);
    ctx.stroke();
    if (localOptions.fillPolygons) {
      ctx.fillStyle = localOptions.useDepth ? "rgba(255, 255, 200, 0.3)" : localOptions.color;
      ctx.fill();
    }
  }
}
function drawGazeSpheres(f, ctx) {
  var _a;
  if (localOptions.drawGaze && ((_a = f.rotation) == null ? void 0 : _a.angle) && typeof Path2D !== "undefined") {
    ctx.strokeStyle = "pink";
    const valX = f.box[0] + f.box[2] / 2 - f.box[3] * rad2deg(f.rotation.angle.yaw) / 90;
    const valY = f.box[1] + f.box[3] / 2 + f.box[2] * rad2deg(f.rotation.angle.pitch) / 90;
    const pathV = new Path2D(`
      M ${f.box[0] + f.box[2] / 2} ${f.box[1]}
      C
        ${valX} ${f.box[1]},
        ${valX} ${f.box[1] + f.box[3]},
        ${f.box[0] + f.box[2] / 2} ${f.box[1] + f.box[3]}
    `);
    const pathH = new Path2D(`
      M ${f.box[0]} ${f.box[1] + f.box[3] / 2}
      C 
        ${f.box[0]} ${valY},
        ${f.box[0] + f.box[2]} ${valY},
        ${f.box[0] + f.box[2]} ${f.box[1] + f.box[3] / 2}
    `);
    ctx.stroke(pathH);
    ctx.stroke(pathV);
  }
}
function drawGazeArrows(f, ctx) {
  var _a;
  if (localOptions.drawGaze && ((_a = f.rotation) == null ? void 0 : _a.gaze.strength) && f.rotation.gaze.bearing && f.annotations.leftEyeIris && f.annotations.rightEyeIris && f.annotations.leftEyeIris[0] && f.annotations.rightEyeIris[0]) {
    ctx.strokeStyle = "pink";
    ctx.fillStyle = "pink";
    const leftGaze = [
      f.annotations.leftEyeIris[0][0] + Math.sin(f.rotation.gaze.bearing) * f.rotation.gaze.strength * f.box[3],
      f.annotations.leftEyeIris[0][1] + Math.cos(f.rotation.gaze.bearing) * f.rotation.gaze.strength * f.box[2]
    ];
    arrow(ctx, [f.annotations.leftEyeIris[0][0], f.annotations.leftEyeIris[0][1]], [leftGaze[0], leftGaze[1]], 4);
    const rightGaze = [
      f.annotations.rightEyeIris[0][0] + Math.sin(f.rotation.gaze.bearing) * f.rotation.gaze.strength * f.box[3],
      f.annotations.rightEyeIris[0][1] + Math.cos(f.rotation.gaze.bearing) * f.rotation.gaze.strength * f.box[2]
    ];
    arrow(ctx, [f.annotations.rightEyeIris[0][0], f.annotations.rightEyeIris[0][1]], [rightGaze[0], rightGaze[1]], 4);
  }
}
function drawFacePolygons(f, ctx) {
  if (localOptions.drawPolygons && f.mesh.length >= 468) {
    ctx.lineWidth = 1;
    for (let i = 0; i < TRI468.length / 3; i++) {
      const points = [TRI468[i * 3 + 0], TRI468[i * 3 + 1], TRI468[i * 3 + 2]].map((index2) => f.mesh[index2]);
      lines(ctx, points, localOptions);
    }
    drawIrisElipse(f, ctx);
  }
}
function drawFacePoints(f, ctx) {
  if (localOptions.drawPoints) {
    if ((f == null ? void 0 : f.mesh.length) >= 468) {
      for (let i = 0; i < f.mesh.length; i++) {
        point(ctx, f.mesh[i][0], f.mesh[i][1], f.mesh[i][2], localOptions);
        if (localOptions.drawAttention) {
          if (LANDMARKS_REFINEMENT_LIPS_CONFIG.includes(i)) point(ctx, f.mesh[i][0], f.mesh[i][1], f.mesh[i][2] + 127, localOptions);
          if (LANDMARKS_REFINEMENT_LEFT_EYE_CONFIG.includes(i)) point(ctx, f.mesh[i][0], f.mesh[i][1], f.mesh[i][2] - 127, localOptions);
          if (LANDMARKS_REFINEMENT_RIGHT_EYE_CONFIG.includes(i)) point(ctx, f.mesh[i][0], f.mesh[i][1], f.mesh[i][2] - 127, localOptions);
        }
      }
    } else {
      for (const [k, v] of Object.entries((f == null ? void 0 : f.annotations) || {})) {
        if (!(v == null ? void 0 : v[0])) continue;
        const pt = v[0];
        point(ctx, pt[0], pt[1], 0, localOptions);
        if (localOptions.drawLabels) labels(ctx, k, pt[0], pt[1], localOptions);
      }
    }
  }
}
function drawFaceBoxes(f, ctx) {
  if (localOptions.drawBoxes) {
    rect(ctx, f.box[0], f.box[1], f.box[2], f.box[3], localOptions);
  }
}
function face(inCanvas2, result, drawOptions) {
  localOptions = mergeDeep(options, drawOptions);
  if (!result || !inCanvas2) return;
  const ctx = getCanvasContext(inCanvas2);
  if (!ctx) return;
  ctx.font = localOptions.font;
  ctx.strokeStyle = localOptions.color;
  ctx.fillStyle = localOptions.color;
  for (const f of result) {
    drawFaceBoxes(f, ctx);
    drawLabels(f, ctx);
    if (f.mesh && f.mesh.length > 0) {
      drawFacePoints(f, ctx);
      drawFacePolygons(f, ctx);
      drawGazeSpheres(f, ctx);
      drawGazeArrows(f, ctx);
    }
  }
}

// src/draw/labels.ts
var defaultLabels = {
  face: `face
    confidence: [score]%
    [gender] [genderScore]%
    age: [age] years
    distance: [distance]cm
    real: [real]%
    live: [live]%
    [emotions]
    roll: [roll]\xB0 yaw:[yaw]\xB0 pitch:[pitch]\xB0
    gaze: [gaze]\xB0`,
  body: "body [score]%",
  bodyPart: "[label] [score]%",
  object: "[label] [score]%",
  hand: "[label] [score]%",
  finger: "[label]",
  gesture: "[where] [who]: [what]"
};

// src/draw/body.ts
function body(inCanvas2, result, drawOptions) {
  var _a, _b;
  const localOptions2 = mergeDeep(options, drawOptions);
  if (!result || !inCanvas2) return;
  const ctx = getCanvasContext(inCanvas2);
  if (!ctx) return;
  ctx.lineJoin = "round";
  for (let i = 0; i < result.length; i++) {
    ctx.strokeStyle = localOptions2.color;
    ctx.fillStyle = localOptions2.color;
    ctx.lineWidth = localOptions2.lineWidth;
    ctx.font = localOptions2.font;
    if (localOptions2.drawBoxes && result[i].box && result[i].box.length === 4) {
      rect(ctx, result[i].box[0], result[i].box[1], result[i].box[2], result[i].box[3], localOptions2);
      if (localOptions2.drawLabels && ((_a = localOptions2.bodyLabels) == null ? void 0 : _a.length) > 0) {
        let l = localOptions2.bodyLabels.slice();
        l = replace(l, "[id]", result[i].id.toFixed(0));
        l = replace(l, "[score]", 100 * result[i].score);
        labels(ctx, l, result[i].box[0], result[i].box[1], localOptions2);
      }
    }
    if (localOptions2.drawPoints && result[i].keypoints) {
      for (let pt = 0; pt < result[i].keypoints.length; pt++) {
        if (!result[i].keypoints[pt].score || result[i].keypoints[pt].score === 0) continue;
        ctx.fillStyle = colorDepth(result[i].keypoints[pt].position[2], localOptions2);
        point(ctx, result[i].keypoints[pt].position[0], result[i].keypoints[pt].position[1], 0, localOptions2);
      }
    }
    if (localOptions2.drawLabels && ((_b = localOptions2.bodyPartLabels) == null ? void 0 : _b.length) > 0 && result[i].keypoints) {
      ctx.font = localOptions2.font;
      for (const pt of result[i].keypoints) {
        if (!pt.score || pt.score === 0) continue;
        let l = localOptions2.bodyPartLabels.slice();
        l = replace(l, "[label]", pt.part);
        l = replace(l, "[score]", 100 * pt.score);
        labels(ctx, l, pt.position[0], pt.position[1], localOptions2);
      }
    }
    if (localOptions2.drawPolygons && result[i].keypoints && result[i].annotations) {
      for (const part of Object.values(result[i].annotations)) {
        for (const connected4 of part) curves(ctx, connected4, localOptions2);
      }
    }
  }
}

// src/draw/gesture.ts
function gesture(inCanvas2, result, drawOptions) {
  var _a;
  const localOptions2 = mergeDeep(options, drawOptions);
  if (!result || !inCanvas2) return;
  if (localOptions2.drawGestures && ((_a = localOptions2.gestureLabels) == null ? void 0 : _a.length) > 0) {
    const ctx = getCanvasContext(inCanvas2);
    if (!ctx) return;
    ctx.font = localOptions2.font;
    ctx.fillStyle = localOptions2.color;
    let i = 1;
    for (let j = 0; j < result.length; j++) {
      const [where, what] = Object.entries(result[j]);
      if (what.length > 1 && what[1].length > 0) {
        const who = where[1] > 0 ? `#${where[1]}` : "";
        let l = localOptions2.gestureLabels.slice();
        l = replace(l, "[where]", where[0]);
        l = replace(l, "[who]", who);
        l = replace(l, "[what]", what[1]);
        labels(ctx, l, 8, 2 + i * localOptions2.lineHeight, localOptions2);
        i += 1;
      }
    }
  }
}

// src/draw/hand.ts
function hand(inCanvas2, result, drawOptions) {
  var _a, _b;
  const localOptions2 = mergeDeep(options, drawOptions);
  if (!result || !inCanvas2) return;
  const ctx = getCanvasContext(inCanvas2);
  if (!ctx) return;
  ctx.lineJoin = "round";
  ctx.font = localOptions2.font;
  for (const h of result) {
    if (localOptions2.drawBoxes) {
      ctx.strokeStyle = localOptions2.color;
      ctx.fillStyle = localOptions2.color;
      rect(ctx, h.box[0], h.box[1], h.box[2], h.box[3], localOptions2);
      if (localOptions2.drawLabels && ((_a = localOptions2.handLabels) == null ? void 0 : _a.length) > 0) {
        let l = localOptions2.handLabels.slice();
        l = replace(l, "[id]", h.id.toFixed(0));
        l = replace(l, "[label]", h.label);
        l = replace(l, "[score]", 100 * h.score);
        labels(ctx, l, h.box[0], h.box[1], localOptions2);
      }
      ctx.stroke();
    }
    if (localOptions2.drawPoints) {
      if (h.keypoints && h.keypoints.length > 0) {
        for (const pt of h.keypoints) {
          ctx.fillStyle = colorDepth(pt[2], localOptions2);
          point(ctx, pt[0], pt[1], 0, localOptions2);
        }
      }
    }
    if (localOptions2.drawLabels && h.annotations && ((_b = localOptions2.fingerLabels) == null ? void 0 : _b.length) > 0) {
      for (const [part, pt] of Object.entries(h.annotations)) {
        let l = localOptions2.fingerLabels.slice();
        l = replace(l, "[label]", part);
        labels(ctx, l, pt[pt.length - 1][0], pt[pt.length - 1][1], localOptions2);
      }
    }
    if (localOptions2.drawPolygons && h.annotations) {
      const addHandLine = (part) => {
        if (!part || part.length === 0 || !part[0]) return;
        for (let i = 0; i < part.length; i++) {
          ctx.beginPath();
          const z = part[i][2] || 0;
          ctx.strokeStyle = colorDepth(i * z, localOptions2);
          ctx.moveTo(part[i > 0 ? i - 1 : 0][0], part[i > 0 ? i - 1 : 0][1]);
          ctx.lineTo(part[i][0], part[i][1]);
          ctx.stroke();
        }
      };
      ctx.lineWidth = localOptions2.lineWidth;
      addHandLine(h.annotations.index);
      addHandLine(h.annotations.middle);
      addHandLine(h.annotations.ring);
      addHandLine(h.annotations.pinky);
      addHandLine(h.annotations.thumb);
    }
  }
}

// src/draw/object.ts
function object(inCanvas2, result, drawOptions) {
  var _a;
  const localOptions2 = mergeDeep(options, drawOptions);
  if (!result || !inCanvas2) return;
  const ctx = getCanvasContext(inCanvas2);
  if (!ctx) return;
  ctx.lineJoin = "round";
  ctx.font = localOptions2.font;
  for (const h of result) {
    if (localOptions2.drawBoxes) {
      ctx.strokeStyle = localOptions2.color;
      ctx.fillStyle = localOptions2.color;
      rect(ctx, h.box[0], h.box[1], h.box[2], h.box[3], localOptions2);
      if (localOptions2.drawLabels && ((_a = localOptions2.objectLabels) == null ? void 0 : _a.length) > 0) {
        let l = localOptions2.objectLabels.slice();
        l = replace(l, "[id]", h.id.toFixed(0));
        l = replace(l, "[label]", h.label);
        l = replace(l, "[score]", 100 * h.score);
        labels(ctx, l, h.box[0], h.box[1], localOptions2);
      }
      ctx.stroke();
    }
  }
}

// src/draw/draw.ts
var drawTime = 0;
function person(inCanvas2, result, drawOptions) {
  const localOptions2 = mergeDeep(options, drawOptions);
  if (!result || !inCanvas2) return;
  const ctx = getCanvasContext(inCanvas2);
  if (!ctx) return;
  ctx.lineJoin = "round";
  ctx.font = localOptions2.font;
  for (let i = 0; i < result.length; i++) {
    if (localOptions2.drawBoxes) {
      ctx.strokeStyle = localOptions2.color;
      ctx.fillStyle = localOptions2.color;
      rect(ctx, result[i].box[0], result[i].box[1], result[i].box[2], result[i].box[3], localOptions2);
      if (localOptions2.drawLabels) {
        const label = `person #${i}`;
        if (localOptions2.shadowColor && localOptions2.shadowColor !== "") {
          ctx.fillStyle = localOptions2.shadowColor;
          ctx.fillText(label, result[i].box[0] + 3, 1 + result[i].box[1] + localOptions2.lineHeight, result[i].box[2]);
        }
        ctx.fillStyle = localOptions2.labelColor;
        ctx.fillText(label, result[i].box[0] + 2, 0 + result[i].box[1] + localOptions2.lineHeight, result[i].box[2]);
      }
      ctx.stroke();
    }
  }
}
function canvas2(input, output) {
  if (!input || !output) return;
  const ctx = getCanvasContext(output);
  if (!ctx) return;
  ctx.drawImage(input, 0, 0);
}
async function tensor2(input, output) {
  if (!input || !output) return;
  if (!env.browser) return;
  await tfjs_esm_exports.browser.toPixels(input, output);
}
async function all(inCanvas2, result, drawOptions) {
  if (!(result == null ? void 0 : result.performance) || !inCanvas2) return null;
  const timeStamp = now();
  const localOptions2 = mergeDeep(options, drawOptions);
  const promise = Promise.all([
    face(inCanvas2, result.face, localOptions2)
    // person(inCanvas, result.persons, localOptions); // already included above
  ]);
  drawTime = env.perfadd ? drawTime + Math.round(now() - timeStamp) : Math.round(now() - timeStamp);
  result.performance.draw = drawTime;
  return promise;
}
function init() {
  options.faceLabels = defaultLabels.face;
  options.bodyLabels = defaultLabels.body;
  options.bodyPartLabels = defaultLabels.bodyPart;
  options.handLabels = defaultLabels.hand;
  options.fingerLabels = defaultLabels.finger;
  options.objectLabels = defaultLabels.object;
  options.gestureLabels = defaultLabels.gesture;
}

// src/tfjs/constants.ts
var constants = {
  tf255: 255,
  tf1: 1,
  tf2: 2,
  tf05: 0.5,
  tf127: 127.5,
  rgb: [0.2989, 0.587, 0.114]
};
function init2() {
  constants.tf255 = tfjs_esm_exports.scalar(255, "float32");
  constants.tf1 = tfjs_esm_exports.scalar(1, "float32");
  constants.tf2 = tfjs_esm_exports.scalar(2, "float32");
  constants.tf05 = tfjs_esm_exports.scalar(0.5, "float32");
  constants.tf127 = tfjs_esm_exports.scalar(127.5, "float32");
  constants.rgb = tfjs_esm_exports.tensor1d([0.2989, 0.587, 0.114], "float32");
}

// models/models.json
var models_exports = {};
__export(models_exports, {
  antispoof: () => antispoof,
  blazeface: () => blazeface,
  centernet: () => centernet,
  default: () => models_default,
  emotion: () => emotion,
  facemesh: () => facemesh,
  faceres: () => faceres,
  "handlandmark-lite": () => handlandmark_lite,
  handtrack: () => handtrack,
  iris: () => iris,
  liveness: () => liveness,
  models: () => models,
  "movenet-lightning": () => movenet_lightning
});
var antispoof = 853098;
var blazeface = 538928;
var centernet = 4030290;
var emotion = 820516;
var facemesh = 1477958;
var faceres = 6978814;
var handlandmark_lite = 2023432;
var handtrack = 2964837;
var iris = 2599092;
var liveness = 592976;
var models = 0;
var movenet_lightning = 4650216;
var models_default = {
  antispoof,
  blazeface,
  centernet,
  emotion,
  facemesh,
  faceres,
  "handlandmark-lite": handlandmark_lite,
  handtrack,
  iris,
  liveness,
  models,
  "movenet-lightning": movenet_lightning
};

// src/tfjs/load.ts
var options2 = {
  cacheModels: true,
  cacheSupported: true,
  verbose: true,
  debug: false,
  modelBasePath: ""
};
var modelStats = {};
async function httpHandler(url, init4) {
  if (options2.debug) log("load model fetch:", url, init4);
  return fetch(url, init4);
}
function setModelLoadOptions(config3) {
  options2.cacheModels = config3.cacheModels;
  options2.verbose = config3.debug;
  options2.modelBasePath = config3.modelBasePath;
}
async function loadModel(modelPath) {
  var _a, _b, _c, _d, _e, _f;
  let modelUrl = join(options2.modelBasePath, modelPath || "");
  if (!modelUrl.toLowerCase().endsWith(".json")) modelUrl += ".json";
  const modelPathSegments = modelUrl.includes("/") ? modelUrl.split("/") : modelUrl.split("\\");
  const shortModelName = modelPathSegments[modelPathSegments.length - 1].replace(".json", "");
  const cachedModelName = "indexeddb://" + shortModelName;
  modelStats[shortModelName] = {
    name: shortModelName,
    loaded: false,
    sizeFromManifest: 0,
    sizeLoadedWeights: 0,
    sizeDesired: models_exports[shortModelName],
    inCache: false,
    url: ""
  };
  options2.cacheSupported = typeof indexedDB !== "undefined";
  let cachedModels = {};
  try {
    cachedModels = options2.cacheSupported && options2.cacheModels ? await tfjs_esm_exports.io.listModels() : {};
  } catch (e) {
    options2.cacheSupported = false;
  }
  modelStats[shortModelName].inCache = options2.cacheSupported && options2.cacheModels && Object.keys(cachedModels).includes(cachedModelName);
  modelStats[shortModelName].url = modelStats[shortModelName].inCache ? cachedModelName : modelUrl;
  const tfLoadOptions = typeof fetch === "undefined" ? {} : { fetchFunc: (url, init4) => httpHandler(url, init4) };
  let model23 = new tfjs_esm_exports.GraphModel(modelStats[shortModelName].url, tfLoadOptions);
  modelStats[shortModelName].loaded = false;
  try {
    model23.findIOHandler();
    if (options2.debug) log("model load handler:", model23["handler"]);
  } catch (err) {
    log("error finding model i/o handler:", modelUrl, err);
  }
  try {
    const artifacts = await ((_a = model23.handler) == null ? void 0 : _a.load()) || null;
    modelStats[shortModelName].sizeFromManifest = ((_b = artifacts == null ? void 0 : artifacts.weightData) == null ? void 0 : _b.byteLength) || 0;
    if (artifacts) model23.loadSync(artifacts);
    else model23 = await tfjs_esm_exports.loadGraphModel(modelStats[shortModelName].inCache ? cachedModelName : modelUrl, tfLoadOptions);
    modelStats[shortModelName].sizeLoadedWeights = ((_d = (_c = model23.artifacts) == null ? void 0 : _c.weightData) == null ? void 0 : _d.byteLength) || ((_f = (_e = model23.artifacts) == null ? void 0 : _e.weightData) == null ? void 0 : _f[0].byteLength) || 0;
    if (options2.verbose) log("load:", { model: shortModelName, url: model23["modelUrl"], bytes: modelStats[shortModelName].sizeLoadedWeights });
    modelStats[shortModelName].loaded = true;
  } catch (err) {
    log("error loading model:", modelUrl, err);
  }
  if (modelStats[shortModelName].loaded && options2.cacheModels && options2.cacheSupported && !modelStats[shortModelName].inCache) {
    try {
      const saveResult = await model23.save(cachedModelName);
      if (options2.debug) log("model saved:", cachedModelName, saveResult);
    } catch (err) {
      log("error saving model:", modelUrl, err);
    }
  }
  return model23;
}

// src/gear/emotion.ts
var annotations = [];
var model;
var last2 = [];
var lastCount = 0;
var lastTime = 0;
var skipped = Number.MAX_SAFE_INTEGER;
var rgb = false;
async function load(config3) {
  var _a, _b, _c;
  if (env.initial) model = null;
  if (!model) {
    model = await loadModel((_a = config3.face.emotion) == null ? void 0 : _a.modelPath);
    rgb = ((_c = (_b = model == null ? void 0 : model.inputs) == null ? void 0 : _b[0].shape) == null ? void 0 : _c[3]) === 3;
    if (!rgb) annotations = ["\uD654\uB0A8", "\uBD88\uCF8C", "\uACF5\uD3EC", "\uD589\uBCF5", "\uC2AC\uD514", "\uB180\uB78C", "\uBB34\uD45C\uC815"];
    else annotations = ["\uD654\uB0A8", "\uBD88\uCF8C", "\uACF5\uD3EC", "\uD589\uBCF5", "\uBB34\uD45C\uC815", "\uC2AC\uD514", "\uB180\uB78C"];
  } else if (config3.debug) {
    log("cached model:", model["modelUrl"]);
  }
  return model;
}
async function predict(image28, config3, idx, count2) {
  var _a, _b;
  if (!model) return [];
  const skipFrame = skipped < (((_a = config3.face.emotion) == null ? void 0 : _a.skipFrames) || 0);
  const skipTime = (((_b = config3.face.emotion) == null ? void 0 : _b.skipTime) || 0) > now() - lastTime;
  if (config3.skipAllowed && skipTime && skipFrame && lastCount === count2 && last2[idx] && last2[idx].length > 0) {
    skipped++;
    return last2[idx];
  }
  skipped = 0;
  return new Promise(async (resolve) => {
    var _a2, _b2, _c;
    const obj = [];
    if ((_a2 = config3.face.emotion) == null ? void 0 : _a2.enabled) {
      const t2 = {};
      const inputSize10 = (model == null ? void 0 : model.inputs[0].shape) ? model.inputs[0].shape[2] : 0;
      if (((_b2 = config3.face.emotion) == null ? void 0 : _b2["crop"]) > 0) {
        const crop = (_c = config3.face.emotion) == null ? void 0 : _c["crop"];
        const box = [[crop, crop, 1 - crop, 1 - crop]];
        t2.resize = tfjs_esm_exports.image.cropAndResize(image28, box, [0], [inputSize10, inputSize10]);
      } else {
        t2.resize = tfjs_esm_exports.image.resizeBilinear(image28, [inputSize10, inputSize10], false);
      }
      if (rgb) {
        t2.mul = tfjs_esm_exports.mul(t2.resize, 255);
        t2.normalize = tfjs_esm_exports.sub(t2.mul, [103.939, 116.779, 123.68]);
        t2.emotion = model == null ? void 0 : model.execute(t2.normalize);
      } else {
        t2.channels = tfjs_esm_exports.mul(t2.resize, constants.rgb);
        t2.grayscale = tfjs_esm_exports.sum(t2.channels, 3, true);
        t2.grayscaleSub = tfjs_esm_exports.sub(t2.grayscale, constants.tf05);
        t2.grayscaleMul = tfjs_esm_exports.mul(t2.grayscaleSub, constants.tf2);
        t2.emotion = model == null ? void 0 : model.execute(t2.grayscaleMul);
      }
      lastTime = now();
      const data = await t2.emotion.data();
      for (let i = 0; i < data.length; i++) {
        if (data[i] > (config3.face.emotion.minConfidence || 0)) obj.push({ score: Math.min(0.99, Math.trunc(100 * data[i]) / 100), emotion: annotations[i] });
      }
      obj.sort((a, b) => b.score - a.score);
      Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
    }
    last2[idx] = obj;
    lastCount = count2;
    resolve(obj);
  });
}

// src/gear/gear.ts
var model2;
var last3 = [];
var raceNames = ["white", "black", "asian", "indian", "other"];
var ageWeights = [15, 23, 28, 35.5, 45.5, 55.5, 65];
var lastCount2 = 0;
var lastTime2 = 0;
var skipped2 = Number.MAX_SAFE_INTEGER;
async function load2(config3) {
  var _a;
  if (env.initial) model2 = null;
  if (!model2) model2 = await loadModel((_a = config3.face.gear) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", model2["modelUrl"]);
  return model2;
}
async function predict2(image28, config3, idx, count2) {
  var _a, _b;
  if (!model2) return { age: 0, gender: "unknown", genderScore: 0, race: [] };
  const skipFrame = skipped2 < (((_a = config3.face.gear) == null ? void 0 : _a.skipFrames) || 0);
  const skipTime = (((_b = config3.face.gear) == null ? void 0 : _b.skipTime) || 0) > now() - lastTime2;
  if (config3.skipAllowed && skipTime && skipFrame && lastCount2 === count2 && last3[idx]) {
    skipped2++;
    return last3[idx];
  }
  skipped2 = 0;
  return new Promise(async (resolve) => {
    var _a2, _b2, _c, _d;
    if (!(model2 == null ? void 0 : model2.inputs[0].shape)) return;
    const t2 = {};
    let box = [[0, 0.1, 0.9, 0.9]];
    if (((_a2 = config3.face.gear) == null ? void 0 : _a2["crop"]) > 0) {
      const crop = (_b2 = config3.face.gear) == null ? void 0 : _b2["crop"];
      box = [[crop, crop, 1 - crop, 1 - crop]];
    }
    t2.resize = tfjs_esm_exports.image.cropAndResize(image28, box, [0], [model2.inputs[0].shape[2], model2.inputs[0].shape[1]]);
    const obj = { age: 0, gender: "unknown", genderScore: 0, race: [] };
    if ((_c = config3.face.gear) == null ? void 0 : _c.enabled) [t2.age, t2.gender, t2.race] = model2.execute(t2.resize, ["age_output", "gender_output", "race_output"]);
    const gender = await t2.gender.data();
    obj.gender = gender[0] > gender[1] ? "\uB0A8\uC131" : "\uC5EC\uC131";
    obj.genderScore = Math.round(100 * (gender[0] > gender[1] ? gender[0] : gender[1])) / 100;
    const race = await t2.race.data();
    for (let i = 0; i < race.length; i++) {
      if (race[i] > (((_d = config3.face.gear) == null ? void 0 : _d.minConfidence) || 0.2)) obj.race.push({ score: Math.round(100 * race[i]) / 100, race: raceNames[i] });
    }
    obj.race.sort((a, b) => b.score - a.score);
    const ageDistribution = Array.from(await t2.age.data());
    const ageSorted = ageDistribution.map((a, i) => [ageWeights[i], a]).sort((a, b) => b[1] - a[1]);
    let age = ageSorted[0][0];
    for (let i = 1; i < ageSorted.length; i++) age += ageSorted[i][1] * (ageSorted[i][0] - age);
    obj.age = Math.round(10 * age) / 10;
    Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
    last3[idx] = obj;
    lastCount2 = count2;
    lastTime2 = now();
    resolve(obj);
  });
}

// src/gear/ssrnet-age.ts
var model3;
var last4 = [];
var lastCount3 = 0;
var lastTime3 = 0;
var skipped3 = Number.MAX_SAFE_INTEGER;
async function load3(config3) {
  if (env.initial) model3 = null;
  if (!model3) model3 = await loadModel(config3.face["ssrnet"].modelPathAge);
  else if (config3.debug) log("cached model:", model3["modelUrl"]);
  return model3;
}
async function predict3(image28, config3, idx, count2) {
  var _a, _b, _c, _d;
  if (!model3) return { age: 0 };
  const skipFrame = skipped3 < (((_a = config3.face["ssrnet"]) == null ? void 0 : _a.skipFrames) || 0);
  const skipTime = (((_b = config3.face["ssrnet"]) == null ? void 0 : _b.skipTime) || 0) > now() - lastTime3;
  if (config3.skipAllowed && skipFrame && skipTime && lastCount3 === count2 && ((_c = last4[idx]) == null ? void 0 : _c.age) && ((_d = last4[idx]) == null ? void 0 : _d.age) > 0) {
    skipped3++;
    return last4[idx];
  }
  skipped3 = 0;
  return new Promise(async (resolve) => {
    var _a2, _b2, _c2;
    if (!(model3 == null ? void 0 : model3.inputs) || !model3.inputs[0] || !model3.inputs[0].shape) return;
    const t2 = {};
    if (((_a2 = config3.face["ssrnet"]) == null ? void 0 : _a2["crop"]) > 0) {
      const crop = (_b2 = config3.face["ssrnet"]) == null ? void 0 : _b2["crop"];
      const box = [[crop, crop, 1 - crop, 1 - crop]];
      t2.resize = tfjs_esm_exports.image.cropAndResize(image28, box, [0], [model3.inputs[0].shape[2], model3.inputs[0].shape[1]]);
    } else {
      t2.resize = tfjs_esm_exports.image.resizeBilinear(image28, [model3.inputs[0].shape[2], model3.inputs[0].shape[1]], false);
    }
    t2.enhance = tfjs_esm_exports.mul(t2.resize, constants.tf255);
    const obj = { age: 0 };
    if ((_c2 = config3.face["ssrnet"]) == null ? void 0 : _c2.enabled) t2.age = model3.execute(t2.enhance);
    if (t2.age) {
      const data = await t2.age.data();
      obj.age = Math.trunc(10 * data[0]) / 10;
    }
    Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
    last4[idx] = obj;
    lastCount3 = count2;
    lastTime3 = now();
    resolve(obj);
  });
}

// src/gear/ssrnet-gender.ts
var model4;
var last5 = [];
var lastCount4 = 0;
var lastTime4 = 0;
var skipped4 = Number.MAX_SAFE_INTEGER;
var rgb2 = [0.2989, 0.587, 0.114];
async function load4(config3) {
  var _a;
  if (env.initial) model4 = null;
  if (!model4) model4 = await loadModel((_a = config3.face["ssrnet"]) == null ? void 0 : _a.modelPathGender);
  else if (config3.debug) log("cached model:", model4["modelUrl"]);
  return model4;
}
async function predict4(image28, config3, idx, count2) {
  var _a, _b, _c, _d;
  if (!model4) return { gender: "unknown", genderScore: 0 };
  const skipFrame = skipped4 < (((_a = config3.face["ssrnet"]) == null ? void 0 : _a.skipFrames) || 0);
  const skipTime = (((_b = config3.face["ssrnet"]) == null ? void 0 : _b.skipTime) || 0) > now() - lastTime4;
  if (config3.skipAllowed && skipFrame && skipTime && lastCount4 === count2 && ((_c = last5[idx]) == null ? void 0 : _c.gender) && ((_d = last5[idx]) == null ? void 0 : _d.genderScore) > 0) {
    skipped4++;
    return last5[idx];
  }
  skipped4 = 0;
  return new Promise(async (resolve) => {
    var _a2, _b2, _c2;
    if (!(model4 == null ? void 0 : model4.inputs[0].shape)) return;
    const t2 = {};
    if (((_a2 = config3.face["ssrnet"]) == null ? void 0 : _a2["crop"]) > 0) {
      const crop = (_b2 = config3.face["ssrnet"]) == null ? void 0 : _b2["crop"];
      const box = [[crop, crop, 1 - crop, 1 - crop]];
      t2.resize = tfjs_esm_exports.image.cropAndResize(image28, box, [0], [model4.inputs[0].shape[2], model4.inputs[0].shape[1]]);
    } else {
      t2.resize = tfjs_esm_exports.image.resizeBilinear(image28, [model4.inputs[0].shape[2], model4.inputs[0].shape[1]], false);
    }
    t2.enhance = tfjs_esm_exports.tidy(() => {
      var _a3, _b3;
      let normalize2;
      if (((_b3 = (_a3 = model4 == null ? void 0 : model4.inputs) == null ? void 0 : _a3[0].shape) == null ? void 0 : _b3[3]) === 1) {
        const [red, green, blue] = tfjs_esm_exports.split(t2.resize, 3, 3);
        const redNorm = tfjs_esm_exports.mul(red, rgb2[0]);
        const greenNorm = tfjs_esm_exports.mul(green, rgb2[1]);
        const blueNorm = tfjs_esm_exports.mul(blue, rgb2[2]);
        const grayscale = tfjs_esm_exports.addN([redNorm, greenNorm, blueNorm]);
        normalize2 = tfjs_esm_exports.mul(tfjs_esm_exports.sub(grayscale, constants.tf05), 2);
      } else {
        normalize2 = tfjs_esm_exports.mul(tfjs_esm_exports.sub(t2.resize, constants.tf05), 2);
      }
      return normalize2;
    });
    const obj = { gender: "unknown", genderScore: 0 };
    if ((_c2 = config3.face["ssrnet"]) == null ? void 0 : _c2.enabled) t2.gender = model4.execute(t2.enhance);
    const data = await t2.gender.data();
    obj.gender = data[0] > data[1] ? "\uC5EC\uC131" : "\uB0A8\uC131";
    obj.genderScore = data[0] > data[1] ? Math.trunc(100 * data[0]) / 100 : Math.trunc(100 * data[1]) / 100;
    Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
    last5[idx] = obj;
    lastCount4 = count2;
    lastTime4 = now();
    resolve(obj);
  });
}

// src/face/angles.ts
var calculateGaze = (face3) => {
  const radians = (pt1, pt2) => Math.atan2(pt1[1] - pt2[1], pt1[0] - pt2[0]);
  if (!face3.annotations.rightEyeIris || !face3.annotations.leftEyeIris) return { bearing: 0, strength: 0 };
  const offsetIris = [0, -0.1];
  const eyeRatio = 1;
  const left = (face3.mesh[33][2] || 0) > (face3.mesh[263][2] || 0);
  const irisCenter = left ? face3.mesh[473] : face3.mesh[468];
  const eyeCenter = left ? [(face3.mesh[133][0] + face3.mesh[33][0]) / 2, (face3.mesh[133][1] + face3.mesh[33][1]) / 2] : [(face3.mesh[263][0] + face3.mesh[362][0]) / 2, (face3.mesh[263][1] + face3.mesh[362][1]) / 2];
  const eyeSize = left ? [face3.mesh[133][0] - face3.mesh[33][0], face3.mesh[23][1] - face3.mesh[27][1]] : [face3.mesh[263][0] - face3.mesh[362][0], face3.mesh[253][1] - face3.mesh[257][1]];
  const eyeDiff = [
    // x distance between extreme point and center point normalized with eye size
    (eyeCenter[0] - irisCenter[0]) / eyeSize[0] - offsetIris[0],
    eyeRatio * (irisCenter[1] - eyeCenter[1]) / eyeSize[1] - offsetIris[1]
  ];
  let strength = Math.sqrt(eyeDiff[0] * eyeDiff[0] + eyeDiff[1] * eyeDiff[1]);
  strength = Math.min(strength, face3.boxRaw[2] / 2, face3.boxRaw[3] / 2);
  const bearing = (radians([0, 0], eyeDiff) + Math.PI / 2) % Math.PI;
  return { bearing, strength };
};
var calculateFaceAngle = (face3, imageSize) => {
  const normalize2 = (v) => {
    const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    v[0] /= length;
    v[1] /= length;
    v[2] /= length;
    return v;
  };
  const subVectors = (a, b) => {
    const x = a[0] - b[0];
    const y = a[1] - b[1];
    const z = a[2] - b[2];
    return [x, y, z];
  };
  const crossVectors = (a, b) => {
    const x = a[1] * b[2] - a[2] * b[1];
    const y = a[2] * b[0] - a[0] * b[2];
    const z = a[0] * b[1] - a[1] * b[0];
    return [x, y, z];
  };
  const rotationMatrixToEulerAngle = (r) => {
    const [r00, _r01, _r02, r10, r11, r12, r20, r21, r22] = r;
    let thetaX;
    let thetaY;
    let thetaZ;
    if (r10 < 1) {
      if (r10 > -1) {
        const cosThetaZ = Math.sqrt(r00 * r00 + r20 * r20);
        thetaZ = Math.atan2(r10, cosThetaZ);
        thetaY = Math.atan2(-r20, r00);
        thetaX = Math.atan2(-r12, r11);
      } else {
        thetaZ = -Math.PI / 2;
        thetaY = -Math.atan2(r21, r22);
        thetaX = 0;
      }
    } else {
      thetaZ = Math.PI / 2;
      thetaY = Math.atan2(r21, r22);
      thetaX = 0;
    }
    if (Number.isNaN(thetaX)) thetaX = 0;
    if (Number.isNaN(thetaY)) thetaY = 0;
    if (Number.isNaN(thetaZ)) thetaZ = 0;
    return { pitch: -thetaX, yaw: -thetaY, roll: -thetaZ };
  };
  const mesh = face3.meshRaw;
  if (!mesh || mesh.length < 300) return { angle: { pitch: 0, yaw: 0, roll: 0 }, matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1], gaze: { bearing: 0, strength: 0 } };
  const size2 = Math.max(face3.boxRaw[2] * imageSize[0], face3.boxRaw[3] * imageSize[1]) / 1.5;
  const pts = [mesh[10], mesh[152], mesh[234], mesh[454]].map((pt) => [pt[0] * imageSize[0] / size2, pt[1] * imageSize[1] / size2, pt[2]]);
  const yAxis = normalize2(subVectors(pts[1], pts[0]));
  let xAxis = normalize2(subVectors(pts[3], pts[2]));
  const zAxis = normalize2(crossVectors(xAxis, yAxis));
  xAxis = crossVectors(yAxis, zAxis);
  const matrix = [
    xAxis[0],
    xAxis[1],
    xAxis[2],
    yAxis[0],
    yAxis[1],
    yAxis[2],
    zAxis[0],
    zAxis[1],
    zAxis[2]
  ];
  const angle = rotationMatrixToEulerAngle(matrix);
  const gaze = mesh.length === 478 ? calculateGaze(face3) : { bearing: 0, strength: 0 };
  return { angle, matrix, gaze };
};

// src/face/anthropometry.ts
function calculateCameraDistance(face3, width) {
  const f = face3 == null ? void 0 : face3.annotations;
  if (!(f == null ? void 0 : f.leftEyeIris) || !(f == null ? void 0 : f.rightEyeIris)) return 0;
  const irisSize = Math.max(Math.abs(f.leftEyeIris[3][0] - f.leftEyeIris[1][0]), Math.abs(f.rightEyeIris[3][0] - f.rightEyeIris[1][0])) / width;
  const cameraDistance = Math.round(1.17 / irisSize) / 100;
  return cameraDistance;
}

// src/face/antispoof.ts
var model5;
var cached = [];
var skipped5 = Number.MAX_SAFE_INTEGER;
var lastCount5 = 0;
var lastTime5 = 0;
async function load5(config3) {
  var _a;
  if (env.initial) model5 = null;
  if (!model5) model5 = await loadModel((_a = config3.face.antispoof) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", model5["modelUrl"]);
  return model5;
}
async function predict5(image28, config3, idx, count2) {
  var _a, _b;
  if (!(model5 == null ? void 0 : model5["executor"])) return 0;
  const skipTime = (((_a = config3.face.antispoof) == null ? void 0 : _a.skipTime) || 0) > now() - lastTime5;
  const skipFrame = skipped5 < (((_b = config3.face.antispoof) == null ? void 0 : _b.skipFrames) || 0);
  if (config3.skipAllowed && skipTime && skipFrame && lastCount5 === count2 && cached[idx]) {
    skipped5++;
    return cached[idx];
  }
  skipped5 = 0;
  return new Promise(async (resolve) => {
    const resize = tfjs_esm_exports.image.resizeBilinear(image28, [(model5 == null ? void 0 : model5.inputs[0].shape) ? model5.inputs[0].shape[2] : 0, (model5 == null ? void 0 : model5.inputs[0].shape) ? model5.inputs[0].shape[1] : 0], false);
    const res = model5 == null ? void 0 : model5.execute(resize);
    const num = (await res.data())[0];
    cached[idx] = Math.round(100 * num) / 100;
    lastCount5 = count2;
    lastTime5 = now();
    tfjs_esm_exports.dispose([resize, res]);
    resolve(cached[idx]);
  });
}

// src/face/facemeshutil.ts
var getBoxSize = (box) => [Math.abs(box.endPoint[0] - box.startPoint[0]), Math.abs(box.endPoint[1] - box.startPoint[1])];
var getBoxCenter = (box) => [box.startPoint[0] + (box.endPoint[0] - box.startPoint[0]) / 2, box.startPoint[1] + (box.endPoint[1] - box.startPoint[1]) / 2, 1];
var clampBox = (box, input) => box ? [
  Math.trunc(Math.max(0, box.startPoint[0])),
  Math.trunc(Math.max(0, box.startPoint[1])),
  Math.trunc(Math.min(input.shape[2] || 0, box.endPoint[0]) - Math.max(0, box.startPoint[0])),
  Math.trunc(Math.min(input.shape[1] || 0, box.endPoint[1]) - Math.max(0, box.startPoint[1]))
] : [0, 0, 0, 0];
var getRawBox = (box, input) => box ? [
  box.startPoint[0] / (input.shape[2] || 0),
  box.startPoint[1] / (input.shape[1] || 0),
  (box.endPoint[0] - box.startPoint[0]) / (input.shape[2] || 0),
  (box.endPoint[1] - box.startPoint[1]) / (input.shape[1] || 0)
] : [0, 0, 0, 0];
var scaleBoxCoordinates = (box, factor, anchor) => {
  const startPoint = [box.startPoint[0] * factor[0], box.startPoint[1] * factor[1]];
  const endPoint = [box.endPoint[0] * factor[0], box.endPoint[1] * factor[1]];
  const landmarks = box.landmarks.map((pt) => [(pt[0] + anchor[0]) * factor[0], (pt[1] + anchor[1]) * factor[1]]);
  return { startPoint, endPoint, landmarks, confidence: box.confidence };
};
var cutAndResize = (box, image28, cropSize) => {
  const h = image28.shape[1];
  const w = image28.shape[2];
  const cutBox = [box.startPoint[1] / h, box.startPoint[0] / w, box.endPoint[1] / h, box.endPoint[0] / w];
  const crop = tfjs_esm_exports.image.cropAndResize(image28, [cutBox], [0], cropSize);
  const norm = tfjs_esm_exports.div(crop, constants.tf255);
  tfjs_esm_exports.dispose(crop);
  return norm;
};
var enlargeBox = (box, factor) => {
  const center = getBoxCenter(box);
  const size2 = getBoxSize(box);
  const halfSize = [factor * size2[0] / 2, factor * size2[1] / 2];
  return {
    startPoint: [center[0] - halfSize[0], center[1] - halfSize[1]],
    endPoint: [center[0] + halfSize[0], center[1] + halfSize[1]],
    landmarks: box.landmarks,
    confidence: box.confidence,
    size: size2
  };
};
var squarifyBox = (box) => {
  const centers = getBoxCenter(box);
  const size2 = getBoxSize(box);
  const halfSize = Math.max(...size2) / 2;
  return {
    startPoint: [Math.round(centers[0] - halfSize), Math.round(centers[1] - halfSize)],
    endPoint: [Math.round(centers[0] + halfSize), Math.round(centers[1] + halfSize)],
    landmarks: box.landmarks,
    confidence: box.confidence,
    size: [Math.round(size2[0]), Math.round(size2[1])]
  };
};
var calculateLandmarksBoundingBox = (landmarks) => {
  const x = landmarks.map((d) => d[0]);
  const y = landmarks.map((d) => d[1]);
  return {
    startPoint: [Math.min(...x), Math.min(...y)],
    endPoint: [Math.max(...x), Math.max(...y)],
    landmarks
  };
};
var fixedRotationMatrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
var normalizeRadians = (angle) => angle - 2 * Math.PI * Math.floor((angle + Math.PI) / (2 * Math.PI));
var computeRotation = (point1, point2) => normalizeRadians(Math.PI / 2 - Math.atan2(-(point2[1] - point1[1]), point2[0] - point1[0]));
var buildTranslationMatrix = (x, y) => [[1, 0, x], [0, 1, y], [0, 0, 1]];
var dot = (v1, v2) => {
  let product = 0;
  for (let i = 0; i < v1.length; i++) product += v1[i] * v2[i];
  return product;
};
var getColumnFrom2DArr = (arr, columnIndex) => {
  const column = [];
  for (let i = 0; i < arr.length; i++) column.push(arr[i][columnIndex]);
  return column;
};
var multiplyTransformMatrices = (mat1, mat2) => {
  const product = [];
  const size2 = mat1.length;
  for (let row = 0; row < size2; row++) {
    product.push([]);
    for (let col = 0; col < size2; col++) product[row].push(dot(mat1[row], getColumnFrom2DArr(mat2, col)));
  }
  return product;
};
var buildRotationMatrix = (rotation, center) => {
  const cosA = Math.cos(rotation);
  const sinA = Math.sin(rotation);
  const rotationMatrix = [[cosA, -sinA, 0], [sinA, cosA, 0], [0, 0, 1]];
  const translationMatrix = buildTranslationMatrix(center[0], center[1]);
  const translationTimesRotation = multiplyTransformMatrices(translationMatrix, rotationMatrix);
  const negativeTranslationMatrix = buildTranslationMatrix(-center[0], -center[1]);
  return multiplyTransformMatrices(translationTimesRotation, negativeTranslationMatrix);
};
var invertTransformMatrix = (matrix) => {
  const rotationComponent = [[matrix[0][0], matrix[1][0]], [matrix[0][1], matrix[1][1]]];
  const translationComponent = [matrix[0][2], matrix[1][2]];
  const invertedTranslation = [-dot(rotationComponent[0], translationComponent), -dot(rotationComponent[1], translationComponent)];
  return [rotationComponent[0].concat(invertedTranslation[0]), rotationComponent[1].concat(invertedTranslation[1]), [0, 0, 1]];
};
var rotatePoint = (homogeneousCoordinate, rotationMatrix) => [dot(homogeneousCoordinate, rotationMatrix[0]), dot(homogeneousCoordinate, rotationMatrix[1])];
function generateAnchors(inputSize10) {
  const spec = inputSize10 === 192 ? { strides: [4], anchors: [1] } : { strides: [inputSize10 / 16, inputSize10 / 8], anchors: [2, 6] };
  const anchors3 = [];
  for (let i = 0; i < spec.strides.length; i++) {
    const stride = spec.strides[i];
    const gridRows = Math.floor((inputSize10 + stride - 1) / stride);
    const gridCols = Math.floor((inputSize10 + stride - 1) / stride);
    const anchorsNum = spec.anchors[i];
    for (let gridY = 0; gridY < gridRows; gridY++) {
      const anchorY = stride * (gridY + 0.5);
      for (let gridX = 0; gridX < gridCols; gridX++) {
        const anchorX = stride * (gridX + 0.5);
        for (let n = 0; n < anchorsNum; n++) anchors3.push([anchorX, anchorY]);
      }
    }
  }
  return anchors3;
}
function transformRawCoords(coordsRaw, box, angle, rotationMatrix, inputSize10) {
  const boxSize = getBoxSize(box);
  const coordsScaled = coordsRaw.map((coord) => [
    // scaled around zero-point
    boxSize[0] / inputSize10 * (coord[0] - inputSize10 / 2),
    boxSize[1] / inputSize10 * (coord[1] - inputSize10 / 2),
    coord[2] || 0
  ]);
  const largeAngle = angle && angle !== 0 && Math.abs(angle) > 0.2;
  const coordsRotationMatrix = largeAngle ? buildRotationMatrix(angle, [0, 0]) : fixedRotationMatrix;
  const coordsRotated = largeAngle ? coordsScaled.map((coord) => [...rotatePoint(coord, coordsRotationMatrix), coord[2]]) : coordsScaled;
  const inverseRotationMatrix = largeAngle ? invertTransformMatrix(rotationMatrix) : fixedRotationMatrix;
  const boxCenter = getBoxCenter(box);
  const offsets = [dot(boxCenter, inverseRotationMatrix[0]), dot(boxCenter, inverseRotationMatrix[1])];
  return coordsRotated.map((coord) => [
    Math.trunc(coord[0] + offsets[0]),
    Math.trunc(coord[1] + offsets[1]),
    Math.trunc(coord[2] || 0)
  ]);
}
function correctFaceRotation(rotate, box, input, inputSize10) {
  const symmetryLine = box.landmarks.length >= meshLandmarks.count ? meshLandmarks.symmetryLine : blazeFaceLandmarks.symmetryLine;
  let angle = 0;
  let rotationMatrix = fixedRotationMatrix;
  let face3;
  if (rotate && env.kernels.includes("rotatewithoffset")) {
    angle = computeRotation(box.landmarks[symmetryLine[0]], box.landmarks[symmetryLine[1]]);
    const largeAngle = angle && angle !== 0 && Math.abs(angle) > 0.2;
    if (largeAngle) {
      const center = getBoxCenter(box);
      const centerRaw = [center[0] / input.shape[2], center[1] / input.shape[1]];
      const rotated = tfjs_esm_exports.image.rotateWithOffset(input, angle, 0, [centerRaw[0], centerRaw[1]]);
      rotationMatrix = buildRotationMatrix(-angle, center);
      face3 = cutAndResize(box, rotated, [inputSize10, inputSize10]);
      tfjs_esm_exports.dispose(rotated);
    } else {
      face3 = cutAndResize(box, input, [inputSize10, inputSize10]);
    }
  } else {
    face3 = cutAndResize(box, input, [inputSize10, inputSize10]);
  }
  return [angle, rotationMatrix, face3];
}
var findFaceCenter = (mesh) => {
  const x = mesh.map((m) => m[0]);
  const y = mesh.map((m) => m[1]);
  return [Math.min(...x) + (Math.max(...x) - Math.min(...x)) / 2, Math.min(...y) + (Math.max(...y) - Math.min(...y)) / 2];
};
var calculateFaceBox = (mesh, previousBox) => {
  const center = findFaceCenter(mesh);
  const boxSize = getBoxSize(previousBox);
  const calculatedBox = {
    startPoint: [center[0] - boxSize[0] / 2, center[1] - boxSize[1] / 2],
    endPoint: [center[0] + boxSize[0] / 2, center[1] + boxSize[1] / 2]
  };
  return calculatedBox;
};

// src/face/blazeface.ts
var keypointsCount = 6;
var model6;
var anchors = null;
var inputSize = 0;
var inputSizeT = null;
var size = () => inputSize;
async function load6(config3) {
  var _a;
  if (env.initial) model6 = null;
  if (!model6) model6 = await loadModel((_a = config3.face.detector) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", model6["modelUrl"]);
  inputSize = model6["executor"] && model6.inputs[0].shape ? model6.inputs[0].shape[2] : 256;
  inputSizeT = tfjs_esm_exports.scalar(inputSize, "int32");
  anchors = tfjs_esm_exports.tensor2d(generateAnchors(inputSize));
  return model6;
}
function decodeBoxes(boxOutputs) {
  if (!anchors || !inputSizeT) return tfjs_esm_exports.zeros([0, 0]);
  const t2 = {};
  t2.boxStarts = tfjs_esm_exports.slice(boxOutputs, [0, 1], [-1, 2]);
  t2.centers = tfjs_esm_exports.add(t2.boxStarts, anchors);
  t2.boxSizes = tfjs_esm_exports.slice(boxOutputs, [0, 3], [-1, 2]);
  t2.boxSizesNormalized = tfjs_esm_exports.div(t2.boxSizes, inputSizeT);
  t2.centersNormalized = tfjs_esm_exports.div(t2.centers, inputSizeT);
  t2.halfBoxSize = tfjs_esm_exports.div(t2.boxSizesNormalized, constants.tf2);
  t2.starts = tfjs_esm_exports.sub(t2.centersNormalized, t2.halfBoxSize);
  t2.ends = tfjs_esm_exports.add(t2.centersNormalized, t2.halfBoxSize);
  t2.startNormalized = tfjs_esm_exports.mul(t2.starts, inputSizeT);
  t2.endNormalized = tfjs_esm_exports.mul(t2.ends, inputSizeT);
  const boxes = tfjs_esm_exports.concat2d([t2.startNormalized, t2.endNormalized], 1);
  Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
  return boxes;
}
async function getBoxes(inputImage, config3) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (!inputImage || inputImage["isDisposedInternal"] || inputImage.shape.length !== 4 || inputImage.shape[1] < 1 || inputImage.shape[2] < 1) return [];
  const t2 = {};
  let pad4 = [0, 0];
  let scale2 = [1, 1];
  if ((_b = (_a = config3 == null ? void 0 : config3.face) == null ? void 0 : _a.detector) == null ? void 0 : _b.square) {
    const xy = Math.max(inputImage.shape[2], inputImage.shape[1]);
    pad4 = [Math.floor((xy - inputImage.shape[2]) / 2), Math.floor((xy - inputImage.shape[1]) / 2)];
    t2.padded = tfjs_esm_exports.pad(inputImage, [[0, 0], [pad4[1], pad4[1]], [pad4[0], pad4[0]], [0, 0]]);
    scale2 = [inputImage.shape[2] / xy, inputImage.shape[1] / xy];
    pad4 = [pad4[0] / inputSize, pad4[1] / inputSize];
  } else {
    t2.padded = inputImage.clone();
  }
  t2.resized = tfjs_esm_exports.image.resizeBilinear(t2.padded, [inputSize, inputSize]);
  t2.div = tfjs_esm_exports.div(t2.resized, constants.tf127);
  t2.normalized = tfjs_esm_exports.sub(t2.div, constants.tf1);
  const res = model6 == null ? void 0 : model6.execute(t2.normalized);
  if (Array.isArray(res) && res.length > 2) {
    const sorted = res.sort((a, b) => a.size - b.size);
    t2.concat384 = tfjs_esm_exports.concat([sorted[0], sorted[2]], 2);
    t2.concat512 = tfjs_esm_exports.concat([sorted[1], sorted[3]], 2);
    t2.concat = tfjs_esm_exports.concat([t2.concat512, t2.concat384], 1);
    t2.batch = tfjs_esm_exports.squeeze(t2.concat, [0]);
  } else if (Array.isArray(res)) {
    t2.batch = tfjs_esm_exports.squeeze(res[0]);
  } else {
    t2.batch = tfjs_esm_exports.squeeze(res);
  }
  tfjs_esm_exports.dispose(res);
  t2.boxes = decodeBoxes(t2.batch);
  t2.logits = tfjs_esm_exports.slice(t2.batch, [0, 0], [-1, 1]);
  t2.sigmoid = tfjs_esm_exports.sigmoid(t2.logits);
  t2.scores = tfjs_esm_exports.squeeze(t2.sigmoid);
  t2.nms = await tfjs_esm_exports.image.nonMaxSuppressionAsync(t2.boxes, t2.scores, ((_c = config3.face.detector) == null ? void 0 : _c.maxDetected) || 0, ((_d = config3.face.detector) == null ? void 0 : _d.iouThreshold) || 0, ((_e = config3.face.detector) == null ? void 0 : _e.minConfidence) || 0);
  const nms = await t2.nms.array();
  const boxes = [];
  const scores = await t2.scores.data();
  for (let i = 0; i < nms.length; i++) {
    const confidence = scores[nms[i]];
    if (confidence > (((_f = config3.face.detector) == null ? void 0 : _f.minConfidence) || 0)) {
      const b = {};
      b.bbox = tfjs_esm_exports.slice(t2.boxes, [nms[i], 0], [1, -1]);
      b.slice = tfjs_esm_exports.slice(t2.batch, [nms[i], keypointsCount - 1], [1, -1]);
      b.squeeze = tfjs_esm_exports.squeeze(b.slice);
      b.landmarks = tfjs_esm_exports.reshape(b.squeeze, [keypointsCount, -1]);
      const points = await b.bbox.data();
      const unpadded = [
        // TODO fix this math
        points[0] * scale2[0] - pad4[0],
        points[1] * scale2[1] - pad4[1],
        points[2] * scale2[0] - pad4[0],
        points[3] * scale2[1] - pad4[1]
      ];
      const rawBox = {
        startPoint: [unpadded[0], unpadded[1]],
        endPoint: [unpadded[2], unpadded[3]],
        landmarks: await b.landmarks.array(),
        confidence
      };
      b.anchor = tfjs_esm_exports.slice(anchors, [nms[i], 0], [1, 2]);
      const anchor = await b.anchor.data();
      const scaledBox = scaleBoxCoordinates(rawBox, [(inputImage.shape[2] || 0) / inputSize, (inputImage.shape[1] || 0) / inputSize], anchor);
      const enlargedBox = enlargeBox(scaledBox, ((_g = config3.face.detector) == null ? void 0 : _g.scale) || 1.4);
      const squaredBox = squarifyBox(enlargedBox);
      if (squaredBox.size[0] > (((_h = config3.face.detector) == null ? void 0 : _h["minSize"]) || 0) && squaredBox.size[1] > (((_i = config3.face.detector) == null ? void 0 : _i["minSize"]) || 0)) boxes.push(squaredBox);
      Object.keys(b).forEach((tensor7) => tfjs_esm_exports.dispose(b[tensor7]));
    }
  }
  Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
  return boxes;
}

// src/face/iris.ts
var model7;
var inputSize2 = 0;
var leftOutline = meshAnnotations.leftEyeLower0;
var rightOutline = meshAnnotations.rightEyeLower0;
var eyeLandmarks = {
  leftBounds: [leftOutline[0], leftOutline[leftOutline.length - 1]],
  rightBounds: [rightOutline[0], rightOutline[rightOutline.length - 1]]
};
var irisLandmarks = {
  upperCenter: 3,
  lowerCenter: 4,
  index: 71,
  numCoordinates: 76
};
async function load7(config3) {
  var _a, _b;
  if (env.initial) model7 = null;
  if (!model7) model7 = await loadModel((_a = config3.face.iris) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", model7["modelUrl"]);
  inputSize2 = (model7 == null ? void 0 : model7["executor"]) && ((_b = model7.inputs) == null ? void 0 : _b[0].shape) ? model7.inputs[0].shape[2] : 0;
  if (inputSize2 === -1) inputSize2 = 64;
  return model7;
}
function replaceIrisCoords(rawCoords, newCoords, prefix, keys) {
  for (let i = 0; i < irisIndices.length; i++) {
    const { key, indices } = irisIndices[i];
    const originalIndices = meshAnnotations[`${prefix}${key}`];
    if (!keys || keys.includes(key)) {
      for (let j = 0; j < indices.length; j++) {
        const index2 = indices[j];
        rawCoords[originalIndices[j]] = [
          newCoords[index2][0],
          newCoords[index2][1],
          (newCoords[index2][2] + rawCoords[originalIndices[j]][2]) / 2
        ];
      }
    }
  }
}
var getLeftToRightEyeDepthDifference = (rawCoords) => {
  const leftEyeZ = rawCoords[eyeLandmarks.leftBounds[0]][2];
  const rightEyeZ = rawCoords[eyeLandmarks.rightBounds[0]][2];
  return leftEyeZ - rightEyeZ;
};
var getEyeBox = (rawCoords, face3, eyeInnerCornerIndex, eyeOuterCornerIndex, meshSize, flip = false, scale2 = 2.3) => {
  const box = squarifyBox(enlargeBox(calculateLandmarksBoundingBox([rawCoords[eyeInnerCornerIndex], rawCoords[eyeOuterCornerIndex]]), scale2));
  const boxSize = getBoxSize(box);
  let crop = tfjs_esm_exports.image.cropAndResize(face3, [[
    box.startPoint[1] / meshSize,
    box.startPoint[0] / meshSize,
    box.endPoint[1] / meshSize,
    box.endPoint[0] / meshSize
  ]], [0], [inputSize2, inputSize2]);
  if (flip && env.kernels.includes("flipleftright")) {
    const flipped = tfjs_esm_exports.image.flipLeftRight(crop);
    tfjs_esm_exports.dispose(crop);
    crop = flipped;
  }
  return { box, boxSize, crop };
};
var getEyeCoords = (eyeData, eyeBox, eyeBoxSize, flip = false) => {
  const eyeRawCoords = [];
  for (let i = 0; i < irisLandmarks.numCoordinates; i++) {
    const x = eyeData[i * 3];
    const y = eyeData[i * 3 + 1];
    const z = eyeData[i * 3 + 2];
    eyeRawCoords.push([
      (flip ? 1 - x / inputSize2 : x / inputSize2) * eyeBoxSize[0] + eyeBox.startPoint[0],
      y / inputSize2 * eyeBoxSize[1] + eyeBox.startPoint[1],
      z
    ]);
  }
  return { rawCoords: eyeRawCoords, iris: eyeRawCoords.slice(irisLandmarks.index) };
};
var getAdjustedIrisCoords = (rawCoords, irisCoords, direction) => {
  const upperCenterZ = rawCoords[meshAnnotations[`${direction}EyeUpper0`][irisLandmarks.upperCenter]][2];
  const lowerCenterZ = rawCoords[meshAnnotations[`${direction}EyeLower0`][irisLandmarks.lowerCenter]][2];
  const averageZ = (upperCenterZ + lowerCenterZ) / 2;
  return irisCoords.map((coord, i) => {
    let z = averageZ;
    if (i === 2) {
      z = upperCenterZ;
    } else if (i === 4) {
      z = lowerCenterZ;
    }
    return [coord[0], coord[1], z];
  });
};
async function augmentIris(rawCoords, face3, meshSize, config3) {
  var _a, _b;
  if (!(model7 == null ? void 0 : model7["executor"])) return rawCoords;
  const { box: leftEyeBox, boxSize: leftEyeBoxSize, crop: leftEyeCrop } = getEyeBox(rawCoords, face3, eyeLandmarks.leftBounds[0], eyeLandmarks.leftBounds[1], meshSize, true, ((_a = config3.face.iris) == null ? void 0 : _a.scale) || 2.3);
  const { box: rightEyeBox, boxSize: rightEyeBoxSize, crop: rightEyeCrop } = getEyeBox(rawCoords, face3, eyeLandmarks.rightBounds[0], eyeLandmarks.rightBounds[1], meshSize, true, ((_b = config3.face.iris) == null ? void 0 : _b.scale) || 2.3);
  const combined = tfjs_esm_exports.concat([leftEyeCrop, rightEyeCrop]);
  tfjs_esm_exports.dispose(leftEyeCrop);
  tfjs_esm_exports.dispose(rightEyeCrop);
  const eyePredictions = model7.execute(combined);
  tfjs_esm_exports.dispose(combined);
  const eyePredictionsData = await eyePredictions.data();
  tfjs_esm_exports.dispose(eyePredictions);
  const leftEyeData = eyePredictionsData.slice(0, irisLandmarks.numCoordinates * 3);
  const { rawCoords: leftEyeRawCoords, iris: leftIrisRawCoords } = getEyeCoords(leftEyeData, leftEyeBox, leftEyeBoxSize, true);
  const rightEyeData = eyePredictionsData.slice(irisLandmarks.numCoordinates * 3);
  const { rawCoords: rightEyeRawCoords, iris: rightIrisRawCoords } = getEyeCoords(rightEyeData, rightEyeBox, rightEyeBoxSize, false);
  const leftToRightEyeDepthDifference = getLeftToRightEyeDepthDifference(rawCoords);
  if (Math.abs(leftToRightEyeDepthDifference) < 30) {
    replaceIrisCoords(rawCoords, leftEyeRawCoords, "left", null);
    replaceIrisCoords(rawCoords, rightEyeRawCoords, "right", null);
  } else if (leftToRightEyeDepthDifference < 1) {
    replaceIrisCoords(rawCoords, leftEyeRawCoords, "left", ["EyeUpper0", "EyeLower0"]);
  } else {
    replaceIrisCoords(rawCoords, rightEyeRawCoords, "right", ["EyeUpper0", "EyeLower0"]);
  }
  const adjustedLeftIrisCoords = getAdjustedIrisCoords(rawCoords, leftIrisRawCoords, "left");
  const adjustedRightIrisCoords = getAdjustedIrisCoords(rawCoords, rightIrisRawCoords, "right");
  const newCoords = rawCoords.concat(adjustedLeftIrisCoords).concat(adjustedRightIrisCoords);
  return newCoords;
}

// src/face/attention.ts
async function augment(rawCoords, results) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const t2 = {
    // all attention models produce 2d results so it needs to be later augmented with correct z-coords
    // mesh: results[0], // already have it in rawCoords // output_mesh_identity
    // flag: results[1], // already processed in parent // conv_faceflag
    lips: await ((_b = (_a = results.filter((r) => r.size === 160)) == null ? void 0 : _a[0]) == null ? void 0 : _b.data()),
    // 80 x 2d = 160 // output_lips
    irisL: await ((_d = (_c = results.filter((r) => r.size === 10)) == null ? void 0 : _c[0]) == null ? void 0 : _d.data()),
    // 5 x 2d = 10 // output_right_iris
    eyeL: await ((_f = (_e = results.filter((r) => r.size === 142)) == null ? void 0 : _e[0]) == null ? void 0 : _f.data()),
    // 71 x 2d = 142 // output_right_eye
    irisR: await ((_h = (_g = results.filter((r) => r.size === 10)) == null ? void 0 : _g[1]) == null ? void 0 : _h.data()),
    // 5 x 2d = 10 // output_left_iris
    eyeR: await ((_j = (_i = results.filter((r) => r.size === 142)) == null ? void 0 : _i[1]) == null ? void 0 : _j.data())
    // 71 x 2d = 142// output_left_eye
  };
  for (const val of Object.values(t2)) {
    if (!val) return rawCoords;
  }
  const irisLDepth = LANDMARKS_REFINEMENT_LEFT_EYE_CONFIG.reduce((prev, curr) => prev += rawCoords[curr][2], 0) / LANDMARKS_REFINEMENT_LEFT_EYE_CONFIG.length;
  for (let i = 0; i < t2.irisL.length / 2; i++) rawCoords.push([t2.irisL[2 * i + 0], t2.irisL[2 * i + 1], irisLDepth]);
  const irisRDepth = LANDMARKS_REFINEMENT_RIGHT_EYE_CONFIG.reduce((prev, curr) => prev += rawCoords[curr][2], 0) / LANDMARKS_REFINEMENT_RIGHT_EYE_CONFIG.length;
  for (let i = 0; i < t2.irisR.length / 2; i++) rawCoords.push([t2.irisR[2 * i + 0], t2.irisR[2 * i + 1], irisRDepth]);
  for (let i = 0; i < t2.eyeL.length / 2; i++) rawCoords[LANDMARKS_REFINEMENT_LEFT_EYE_CONFIG[i]] = [t2.eyeL[2 * i + 0], t2.eyeL[2 * i + 1], rawCoords[LANDMARKS_REFINEMENT_LEFT_EYE_CONFIG[i]][2]];
  for (let i = 0; i < t2.eyeR.length / 2; i++) rawCoords[LANDMARKS_REFINEMENT_RIGHT_EYE_CONFIG[i]] = [t2.eyeR[2 * i + 0], t2.eyeR[2 * i + 1], rawCoords[LANDMARKS_REFINEMENT_RIGHT_EYE_CONFIG[i]][2]];
  for (let i = 0; i < t2.lips.length / 2; i++) rawCoords[LANDMARKS_REFINEMENT_LIPS_CONFIG[i]] = [t2.lips[2 * i + 0], t2.lips[2 * i + 1], rawCoords[LANDMARKS_REFINEMENT_LIPS_CONFIG[i]][2]];
  return rawCoords;
}

// src/face/facemesh.ts
var cache = {
  boxes: [],
  skipped: Number.MAX_SAFE_INTEGER,
  timestamp: 0
};
var model8 = null;
var inputSize3 = 0;
async function predict6(input, config3) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const skipTime = (((_a = config3.face.detector) == null ? void 0 : _a.skipTime) || 0) > now() - cache.timestamp;
  const skipFrame = cache.skipped < (((_b = config3.face.detector) == null ? void 0 : _b.skipFrames) || 0);
  if (!config3.skipAllowed || !skipTime || !skipFrame || cache.boxes.length === 0) {
    cache.boxes = await getBoxes(input, config3);
    cache.timestamp = now();
    cache.skipped = 0;
  } else {
    cache.skipped++;
  }
  const faces = [];
  const newCache = [];
  let id = 0;
  const size2 = inputSize3;
  for (let i = 0; i < cache.boxes.length; i++) {
    const box = cache.boxes[i];
    let angle = 0;
    let rotationMatrix;
    const face3 = {
      // init face result
      id: id++,
      mesh: [],
      meshRaw: [],
      box: [0, 0, 0, 0],
      boxRaw: [0, 0, 0, 0],
      score: 0,
      boxScore: 0,
      faceScore: 0,
      size: [0, 0],
      // contoursRaw: [],
      // contours: [],
      annotations: {}
    };
    [angle, rotationMatrix, face3.tensor] = correctFaceRotation((_c = config3.face.detector) == null ? void 0 : _c.rotation, box, input, ((_d = config3.face.mesh) == null ? void 0 : _d.enabled) ? inputSize3 : size());
    if (config3.filter.equalization) {
      const equilized = face3.tensor ? await histogramEqualization(face3.tensor) : void 0;
      tfjs_esm_exports.dispose(face3.tensor);
      if (equilized) face3.tensor = equilized;
    }
    face3.boxScore = Math.round(100 * box.confidence) / 100;
    if (!((_e = config3.face.mesh) == null ? void 0 : _e.enabled) || !(model8 == null ? void 0 : model8["executor"])) {
      face3.box = clampBox(box, input);
      face3.boxRaw = getRawBox(box, input);
      face3.score = face3.boxScore;
      face3.size = box.size;
      face3.mesh = box.landmarks;
      face3.meshRaw = face3.mesh.map((pt) => [pt[0] / (input.shape[2] || 0), pt[1] / (input.shape[1] || 0), (pt[2] || 0) / size2]);
      for (const key of Object.keys(blazeFaceLandmarks)) face3.annotations[key] = [face3.mesh[blazeFaceLandmarks[key]]];
    } else if (!model8) {
      if (config3.debug) log("face mesh detection requested, but model is not loaded");
    } else {
      if (((_f = config3.face.attention) == null ? void 0 : _f.enabled) && !env.kernels.includes("atan2")) {
        config3.face.attention.enabled = false;
        tfjs_esm_exports.dispose(face3.tensor);
        return faces;
      }
      const results = model8.execute(face3.tensor);
      const confidenceT = results.find((t2) => t2.shape[t2.shape.length - 1] === 1);
      const faceConfidence = await confidenceT.data();
      face3.faceScore = Math.round(100 * faceConfidence[0]) / 100;
      if (face3.faceScore < (((_g = config3.face.detector) == null ? void 0 : _g.minConfidence) || 1)) {
        box.confidence = face3.faceScore;
        if (config3.face.mesh["keepInvalid"]) {
          face3.box = clampBox(box, input);
          face3.boxRaw = getRawBox(box, input);
          face3.size = box.size;
          face3.score = face3.boxScore;
          face3.mesh = box.landmarks;
          face3.meshRaw = face3.mesh.map((pt) => [pt[0] / (input.shape[2] || 1), pt[1] / (input.shape[1] || 1), (pt[2] || 0) / size2]);
          for (const key of Object.keys(blazeFaceLandmarks)) {
            face3.annotations[key] = [face3.mesh[blazeFaceLandmarks[key]]];
          }
        }
      } else {
        const meshT = results.find((t2) => t2.shape[t2.shape.length - 1] === 1404);
        const coordsReshaped = tfjs_esm_exports.reshape(meshT, [-1, 3]);
        let rawCoords = await coordsReshaped.array();
        tfjs_esm_exports.dispose(coordsReshaped);
        if ((_h = config3.face.attention) == null ? void 0 : _h.enabled) {
          rawCoords = await augment(rawCoords, results);
        } else if ((_i = config3.face.iris) == null ? void 0 : _i.enabled) {
          rawCoords = await augmentIris(rawCoords, face3.tensor, inputSize3, config3);
        }
        face3.mesh = transformRawCoords(rawCoords, box, angle, rotationMatrix, inputSize3);
        face3.meshRaw = face3.mesh.map((pt) => [pt[0] / (input.shape[2] || 0), pt[1] / (input.shape[1] || 0), (pt[2] || 0) / size2]);
        for (const key of Object.keys(meshAnnotations)) face3.annotations[key] = meshAnnotations[key].map((index2) => face3.mesh[index2]);
        face3.score = face3.faceScore;
        const calculatedBox = {
          ...calculateFaceBox(face3.mesh, box),
          confidence: box.confidence,
          landmarks: box.landmarks,
          size: box.size
        };
        face3.box = clampBox(calculatedBox, input);
        face3.boxRaw = getRawBox(calculatedBox, input);
        face3.size = calculatedBox.size;
        newCache.push(calculatedBox);
      }
      tfjs_esm_exports.dispose(results);
    }
    if (face3.score > (((_j = config3.face.detector) == null ? void 0 : _j.minConfidence) || 1)) faces.push(face3);
    else tfjs_esm_exports.dispose(face3.tensor);
  }
  cache.boxes = newCache;
  return faces;
}
async function load8(config3) {
  var _a, _b, _c, _d, _e, _f;
  if (env.initial) model8 = null;
  if (((_a = config3.face.attention) == null ? void 0 : _a.enabled) && (model8 == null ? void 0 : model8["signature"])) {
    if (Object.keys(((_b = model8 == null ? void 0 : model8["signature"]) == null ? void 0 : _b.outputs) || {}).length < 6) model8 = null;
  }
  if (!model8) {
    if ((_c = config3.face.attention) == null ? void 0 : _c.enabled) model8 = await loadModel(config3.face.attention.modelPath);
    else model8 = await loadModel((_d = config3.face.mesh) == null ? void 0 : _d.modelPath);
  } else if (config3.debug) {
    log("cached model:", model8["modelUrl"]);
  }
  inputSize3 = model8["executor"] && ((_e = model8 == null ? void 0 : model8.inputs) == null ? void 0 : _e[0].shape) ? (_f = model8 == null ? void 0 : model8.inputs) == null ? void 0 : _f[0].shape[2] : 256;
  return model8;
}
var triangulation = TRI468;
var uvmap = UV468;

// src/face/faceres.ts
var model9;
var last6 = [];
var lastTime6 = 0;
var lastCount6 = 0;
var skipped6 = Number.MAX_SAFE_INTEGER;
async function load9(config3) {
  var _a;
  if (env.initial) model9 = null;
  if (!model9) model9 = await loadModel((_a = config3.face.description) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", model9["modelUrl"]);
  return model9;
}
function enhance(input, config3) {
  var _a, _b;
  const tensor7 = input.image || input.tensor || input;
  if (!(model9 == null ? void 0 : model9.inputs[0].shape)) return tensor7;
  let crop;
  if (((_a = config3.face.description) == null ? void 0 : _a["crop"]) > 0) {
    const cropval = (_b = config3.face.description) == null ? void 0 : _b["crop"];
    const box = [[cropval, cropval, 1 - cropval, 1 - cropval]];
    crop = tfjs_esm_exports.image.cropAndResize(tensor7, box, [0], [model9.inputs[0].shape[2], model9.inputs[0].shape[1]]);
  } else {
    crop = tfjs_esm_exports.image.resizeBilinear(tensor7, [model9.inputs[0].shape[2], model9.inputs[0].shape[1]], false);
  }
  const norm = tfjs_esm_exports.mul(crop, constants.tf255);
  tfjs_esm_exports.dispose(crop);
  return norm;
}
async function predict7(image28, config3, idx, count2) {
  var _a, _b, _c, _d;
  const obj = {
    age: 0,
    gender: "unknown",
    genderScore: 0,
    descriptor: []
  };
  if (!(model9 == null ? void 0 : model9["executor"])) return obj;
  const skipFrame = skipped6 < (((_a = config3.face.description) == null ? void 0 : _a.skipFrames) || 0);
  const skipTime = (((_b = config3.face.description) == null ? void 0 : _b.skipTime) || 0) > now() - lastTime6;
  if (config3.skipAllowed && skipFrame && skipTime && lastCount6 === count2 && ((_c = last6 == null ? void 0 : last6[idx]) == null ? void 0 : _c.age) > 0 && ((_d = last6 == null ? void 0 : last6[idx]) == null ? void 0 : _d.genderScore) > 0) {
    skipped6++;
    return last6[idx];
  }
  skipped6 = 0;
  return new Promise(async (resolve) => {
    var _a2;
    if ((_a2 = config3.face.description) == null ? void 0 : _a2.enabled) {
      const enhanced = enhance(image28, config3);
      const resT = model9 == null ? void 0 : model9.execute(enhanced);
      lastTime6 = now();
      tfjs_esm_exports.dispose(enhanced);
      const genderT = resT.find((t2) => t2.shape[1] === 1);
      const gender = await genderT.data();
      const confidence = Math.trunc(200 * Math.abs(gender[0] - 0.5)) / 100;
      if (confidence > (config3.face.description.minConfidence || 0)) {
        obj.gender = gender[0] <= 0.5 ? "\uC5EC\uC131" : "\uB0A8\uC131";
        obj.genderScore = Math.min(0.99, confidence);
      }
      const ageT = resT.find((t2) => t2.shape[1] === 100);
      const alpha2 = 0.85;
      const alphaScalar = tfjs_esm_exports.scalar(alpha2, "float32");
      const pPow = tfjs_esm_exports.pow(ageT, alphaScalar);
      const Z = tfjs_esm_exports.sum(pPow, -1);
      const pAdj = tfjs_esm_exports.div(pPow, Z);
      const ageIndices = tfjs_esm_exports.range(0, 100, 1, "float32");
      const halfScalar = tfjs_esm_exports.scalar(0.5, "float32");
      const ageCenters = tfjs_esm_exports.add(ageIndices, halfScalar);
      const mulPAge = tfjs_esm_exports.mul(pAdj, ageCenters);
      const expected = tfjs_esm_exports.sum(mulPAge, -1);
      const ageVal = (await expected.data())[0];
      obj.age = Math.round(ageVal * 10) / 10;
      tfjs_esm_exports.dispose([expected, mulPAge, ageCenters, halfScalar, ageIndices, pAdj, Z, pPow, alphaScalar]);
      if (Number.isNaN(gender[0]) || Number.isNaN(ageVal)) log("faceres error:", { model: model9, result: resT });
      const desc = resT.find((t2) => t2.shape[1] === 1024);
      const descriptor = desc ? await desc.data() : [];
      obj.descriptor = Array.from(descriptor);
      resT.forEach((t2) => tfjs_esm_exports.dispose(t2));
    }
    last6[idx] = obj;
    lastCount6 = count2;
    resolve(obj);
  });
}

// src/face/insightface.ts
var model10;
var last7 = [];
var lastCount7 = 0;
var lastTime7 = 0;
var skipped7 = Number.MAX_SAFE_INTEGER;
async function load10(config3) {
  if (env.initial) model10 = null;
  if (!model10) model10 = await loadModel(config3.face["insightface"].modelPath);
  else if (config3.debug) log("cached model:", model10["modelUrl"]);
  return model10;
}
async function predict8(input, config3, idx, count2) {
  var _a, _b;
  if (!(model10 == null ? void 0 : model10["executor"])) return [];
  const skipFrame = skipped7 < (((_a = config3.face["insightface"]) == null ? void 0 : _a.skipFrames) || 0);
  const skipTime = (((_b = config3.face["insightface"]) == null ? void 0 : _b.skipTime) || 0) > now() - lastTime7;
  if (config3.skipAllowed && skipTime && skipFrame && lastCount7 === count2 && last7[idx]) {
    skipped7++;
    return last7[idx];
  }
  return new Promise(async (resolve) => {
    var _a2;
    let data = [];
    if (((_a2 = config3.face["insightface"]) == null ? void 0 : _a2.enabled) && (model10 == null ? void 0 : model10.inputs[0].shape)) {
      const t2 = {};
      t2.crop = tfjs_esm_exports.image.resizeBilinear(input, [model10.inputs[0].shape[2], model10.inputs[0].shape[1]], false);
      t2.data = model10.execute(t2.crop);
      const output = await t2.data.data();
      data = Array.from(output);
      Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
    }
    last7[idx] = data;
    lastCount7 = count2;
    lastTime7 = now();
    resolve(data);
  });
}

// src/face/liveness.ts
var model11;
var cached2 = [];
var skipped8 = Number.MAX_SAFE_INTEGER;
var lastCount8 = 0;
var lastTime8 = 0;
async function load11(config3) {
  var _a;
  if (env.initial) model11 = null;
  if (!model11) model11 = await loadModel((_a = config3.face.liveness) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", model11["modelUrl"]);
  return model11;
}
async function predict9(image28, config3, idx, count2) {
  var _a, _b;
  if (!(model11 == null ? void 0 : model11["executor"])) return 0;
  const skipTime = (((_a = config3.face.liveness) == null ? void 0 : _a.skipTime) || 0) > now() - lastTime8;
  const skipFrame = skipped8 < (((_b = config3.face.liveness) == null ? void 0 : _b.skipFrames) || 0);
  if (config3.skipAllowed && skipTime && skipFrame && lastCount8 === count2 && cached2[idx]) {
    skipped8++;
    return cached2[idx];
  }
  skipped8 = 0;
  return new Promise(async (resolve) => {
    const resize = tfjs_esm_exports.image.resizeBilinear(image28, [(model11 == null ? void 0 : model11.inputs[0].shape) ? model11.inputs[0].shape[2] : 0, (model11 == null ? void 0 : model11.inputs[0].shape) ? model11.inputs[0].shape[1] : 0], false);
    const res = model11 == null ? void 0 : model11.execute(resize);
    const num = (await res.data())[0];
    cached2[idx] = Math.round(100 * num) / 100;
    lastCount8 = count2;
    lastTime8 = now();
    tfjs_esm_exports.dispose([resize, res]);
    resolve(cached2[idx]);
  });
}

// src/face/mask.ts
var expandFact = 0.1;
var alpha = 0.5;
function insidePoly(x, y, polygon) {
  let inside = false;
  let j = polygon.length - 1;
  for (let i = 0; i < polygon.length; j = i++) {
    if (polygon[i].y > y !== polygon[j].y > y && x < (polygon[j].x - polygon[i].x) * (y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x) inside = !inside;
  }
  return inside;
}
async function mask(face3) {
  if (!face3.tensor) return face3.tensor;
  if (!face3.mesh || face3.mesh.length < 100) return face3.tensor;
  const width = face3.tensor.shape[2] || 0;
  const height = face3.tensor.shape[1] || 0;
  const buffer = await face3.tensor.buffer();
  let silhouette = [];
  for (const pt of meshAnnotations.silhouette) silhouette.push({ x: (face3.mesh[pt][0] - face3.box[0]) / face3.box[2], y: (face3.mesh[pt][1] - face3.box[1]) / face3.box[3] });
  if (expandFact && expandFact > 0) silhouette = silhouette.map((pt) => ({ x: pt.x > 0.5 ? pt.x + expandFact : pt.x - expandFact, y: pt.y > 0.5 ? pt.y + expandFact : pt.y - expandFact }));
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const inside = insidePoly(x / width, y / width, silhouette);
      if (!inside) {
        buffer.set(alpha * buffer.get(0, y, x, 0), 0, y, x, 0);
        buffer.set(alpha * buffer.get(0, y, x, 1), 0, y, x, 1);
        buffer.set(alpha * buffer.get(0, y, x, 2), 0, y, x, 2);
      }
    }
  }
  const output = buffer.toTensor();
  return output;
}

// src/face/mobilefacenet.ts
var model12;
var last8 = [];
var lastCount9 = 0;
var lastTime9 = 0;
var skipped9 = Number.MAX_SAFE_INTEGER;
async function load12(config3) {
  var _a;
  if (env.initial) model12 = null;
  if (!model12) model12 = await loadModel((_a = config3.face["mobilefacenet"]) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", model12["modelUrl"]);
  return model12;
}
async function predict10(input, config3, idx, count2) {
  var _a, _b;
  if (!(model12 == null ? void 0 : model12["executor"])) return [];
  const skipFrame = skipped9 < (((_a = config3.face["mobilefacenet"]) == null ? void 0 : _a.skipFrames) || 0);
  const skipTime = (((_b = config3.face["mobilefacenet"]) == null ? void 0 : _b.skipTime) || 0) > now() - lastTime9;
  if (config3.skipAllowed && skipTime && skipFrame && lastCount9 === count2 && last8[idx]) {
    skipped9++;
    return last8[idx];
  }
  return new Promise(async (resolve) => {
    var _a2;
    let data = [];
    if (((_a2 = config3.face["mobilefacenet"]) == null ? void 0 : _a2.enabled) && (model12 == null ? void 0 : model12.inputs[0].shape)) {
      const t2 = {};
      t2.crop = tfjs_esm_exports.image.resizeBilinear(input, [model12.inputs[0].shape[2], model12.inputs[0].shape[1]], false);
      t2.data = model12.execute(t2.crop);
      const output = await t2.data.data();
      data = Array.from(output);
      Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
    }
    last8[idx] = data;
    lastCount9 = count2;
    lastTime9 = now();
    resolve(data);
  });
}

// src/face/face.ts
function centerX(f) {
  if (f.box && f.box.length === 4) {
    const [x, , w] = [f.box[0], f.box[1], f.box[2]];
    return x + w / 2;
  }
  if (f.mesh && f.mesh.length) {
    let minX = Infinity;
    let maxX = -Infinity;
    for (const pt of f.mesh) {
      if (pt[0] < minX) minX = pt[0];
      if (pt[0] > maxX) maxX = pt[0];
    }
    return (minX + maxX) / 2;
  }
  return Number.MAX_SAFE_INTEGER;
}
function centerY(f) {
  if (f.box && f.box.length === 4) {
    return f.box[1] + f.box[3] / 2;
  }
  if (f.mesh && f.mesh.length) {
    let minY = Infinity;
    let maxY = -Infinity;
    for (const pt of f.mesh) {
      if (pt[1] < minY) minY = pt[1];
      if (pt[1] > maxY) maxY = pt[1];
    }
    return (minY + maxY) / 2;
  }
  return Number.MAX_SAFE_INTEGER;
}
var detectFace = async (instance, input) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
  let timeStamp = now();
  let ageRes;
  let gearRes;
  let genderRes;
  let emotionRes;
  let mobilefacenetRes;
  let insightfaceRes;
  let antispoofRes;
  let livenessRes;
  let descRes;
  const faceRes = [];
  instance.state = "run:face";
  const faces = await predict6(input, instance.config);
  instance.performance.face = env.perfadd ? (instance.performance.face || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
  if (!input.shape || input.shape.length !== 4) return [];
  if (!faces) return [];
  for (let i = 0; i < faces.length; i++) {
    instance.analyze("Get Face");
    if (!faces[i].tensor || faces[i].tensor.isDisposedInternal) {
      log("Face object is disposed:", faces[i].tensor);
      continue;
    }
    if ((_a = instance.config.face.detector) == null ? void 0 : _a.mask) {
      const masked = await mask(faces[i]);
      tfjs_esm_exports.dispose(faces[i].tensor);
      if (masked) faces[i].tensor = masked;
    }
    const rotation = faces[i].mesh && faces[i].mesh.length > 200 ? calculateFaceAngle(faces[i], [input.shape[2], input.shape[1]]) : null;
    instance.analyze("Start Emotion:");
    if (instance.config.async) {
      emotionRes = ((_b = instance.config.face.emotion) == null ? void 0 : _b.enabled) ? predict(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : [];
    } else {
      instance.state = "run:emotion";
      timeStamp = now();
      emotionRes = ((_c = instance.config.face.emotion) == null ? void 0 : _c.enabled) ? await predict(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : [];
      instance.performance.emotion = env.perfadd ? (instance.performance.emotion || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze("End Emotion:");
    instance.analyze("Start AntiSpoof:");
    if (instance.config.async) {
      antispoofRes = ((_d = instance.config.face.antispoof) == null ? void 0 : _d.enabled) ? predict5(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : 0;
    } else {
      instance.state = "run:antispoof";
      timeStamp = now();
      antispoofRes = ((_e = instance.config.face.antispoof) == null ? void 0 : _e.enabled) ? await predict5(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : 0;
      instance.performance.antispoof = env.perfadd ? (instance.performance.antispoof || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze("End AntiSpoof:");
    instance.analyze("Start Liveness:");
    if (instance.config.async) {
      livenessRes = ((_f = instance.config.face.liveness) == null ? void 0 : _f.enabled) ? predict9(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : 0;
    } else {
      instance.state = "run:liveness";
      timeStamp = now();
      livenessRes = ((_g = instance.config.face.liveness) == null ? void 0 : _g.enabled) ? await predict9(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : 0;
      instance.performance.liveness = env.perfadd ? (instance.performance.antispoof || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze("End Liveness:");
    instance.analyze("Start GEAR:");
    if (instance.config.async) {
      gearRes = ((_h = instance.config.face.gear) == null ? void 0 : _h.enabled) ? predict2(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = "run:gear";
      timeStamp = now();
      gearRes = ((_i = instance.config.face.gear) == null ? void 0 : _i.enabled) ? await predict2(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.gear = Math.trunc(now() - timeStamp);
    }
    instance.analyze("End GEAR:");
    instance.analyze("Start SSRNet:");
    if (instance.config.async) {
      ageRes = ((_j = instance.config.face["ssrnet"]) == null ? void 0 : _j.enabled) ? predict3(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
      genderRes = ((_k = instance.config.face["ssrnet"]) == null ? void 0 : _k.enabled) ? predict4(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = "run:ssrnet";
      timeStamp = now();
      ageRes = ((_l = instance.config.face["ssrnet"]) == null ? void 0 : _l.enabled) ? await predict3(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
      genderRes = ((_m = instance.config.face["ssrnet"]) == null ? void 0 : _m.enabled) ? await predict4(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.ssrnet = Math.trunc(now() - timeStamp);
    }
    instance.analyze("End SSRNet:");
    instance.analyze("Start MobileFaceNet:");
    if (instance.config.async) {
      mobilefacenetRes = ((_n = instance.config.face["mobilefacenet"]) == null ? void 0 : _n.enabled) ? predict10(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = "run:mobilefacenet";
      timeStamp = now();
      mobilefacenetRes = ((_o = instance.config.face["mobilefacenet"]) == null ? void 0 : _o.enabled) ? await predict10(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.mobilefacenet = Math.trunc(now() - timeStamp);
    }
    instance.analyze("End MobileFaceNet:");
    instance.analyze("Start InsightFace:");
    if (instance.config.async) {
      insightfaceRes = ((_p = instance.config.face["insightface"]) == null ? void 0 : _p.enabled) ? predict8(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = "run:mobilefacenet";
      timeStamp = now();
      insightfaceRes = ((_q = instance.config.face["insightface"]) == null ? void 0 : _q.enabled) ? await predict8(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.mobilefacenet = Math.trunc(now() - timeStamp);
    }
    instance.analyze("End InsightFace:");
    instance.analyze("Start Description:");
    if (instance.config.async) {
      descRes = predict7(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length);
    } else {
      instance.state = "run:description";
      timeStamp = now();
      descRes = await predict7(faces[i].tensor || tfjs_esm_exports.tensor([]), instance.config, i, faces.length);
      instance.performance.description = env.perfadd ? (instance.performance.description || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze("End Description:");
    if (instance.config.async) {
      [ageRes, genderRes, emotionRes, mobilefacenetRes, insightfaceRes, descRes, gearRes, antispoofRes, livenessRes] = await Promise.all([ageRes, genderRes, emotionRes, mobilefacenetRes, insightfaceRes, descRes, gearRes, antispoofRes, livenessRes]);
    }
    instance.analyze("Finish Face:");
    if (((_r = instance.config.face["ssrnet"]) == null ? void 0 : _r.enabled) && ageRes && genderRes) {
      descRes = {
        ...descRes,
        age: ageRes.age,
        gender: genderRes.gender,
        genderScore: genderRes.genderScore
      };
    }
    if (((_s = instance.config.face.gear) == null ? void 0 : _s.enabled) && gearRes) {
      descRes = {
        ...descRes,
        age: gearRes.age,
        gender: gearRes.gender,
        genderScore: gearRes.genderScore,
        race: gearRes.race
      };
    }
    if (((_t = instance.config.face["mobilefacenet"]) == null ? void 0 : _t.enabled) && mobilefacenetRes) {
      descRes.descriptor = mobilefacenetRes;
    }
    if (((_u = instance.config.face["insightface"]) == null ? void 0 : _u.enabled) && insightfaceRes) {
      descRes.descriptor = insightfaceRes;
    }
    const irisSize = ((_v = instance.config.face.iris) == null ? void 0 : _v.enabled) ? calculateCameraDistance(faces[i], input.shape[2]) : 0;
    const tensor7 = ((_w = instance.config.face.detector) == null ? void 0 : _w.return) ? tfjs_esm_exports.squeeze(faces[i].tensor) : null;
    tfjs_esm_exports.dispose(faces[i].tensor);
    if (faces[i].tensor) delete faces[i].tensor;
    const res = {
      ...faces[i],
      id: i
    };
    if (descRes.age) res.age = descRes.age;
    if (descRes.gender) res.gender = descRes.gender;
    if (descRes.genderScore) res.genderScore = descRes.genderScore;
    if (descRes.descriptor) res.embedding = descRes.descriptor;
    if (descRes.race) res.race = descRes.race;
    if (emotionRes) res.emotion = emotionRes;
    if (antispoofRes) res.real = antispoofRes;
    if (livenessRes) res.live = livenessRes;
    if (irisSize > 0) res.distance = irisSize;
    if (rotation) res.rotation = rotation;
    if (tensor7) res.tensor = tensor7;
    faceRes.push(res);
    instance.analyze("End Face");
  }
  faceRes.sort((a, b) => {
    const dx = centerX(a) - centerX(b);
    if (dx !== 0) return dx;
    return centerY(a) - centerY(b);
  });
  instance.analyze("End FaceMesh:");
  if (instance.config.async) {
    if (instance.performance.face) delete instance.performance.face;
    if (instance.performance.age) delete instance.performance.age;
    if (instance.performance.gender) delete instance.performance.gender;
    if (instance.performance.emotion) delete instance.performance.emotion;
  }
  return faceRes;
};

// src/face/match.ts
var match_exports = {};
__export(match_exports, {
  distance: () => distance,
  find: () => find,
  similarity: () => similarity
});
function distance(descriptor1, descriptor2, options3 = { order: 2, multiplier: 25 }) {
  if (!descriptor1 || !descriptor1) return Number.MAX_SAFE_INTEGER;
  let sum4 = 0;
  for (let i = 0; i < descriptor1.length; i++) {
    const diff = !options3.order || options3.order === 2 ? descriptor1[i] - descriptor2[i] : Math.abs(descriptor1[i] - descriptor2[i]);
    sum4 += !options3.order || options3.order === 2 ? diff * diff : diff ** options3.order;
  }
  const dist = Math.round(100 * (options3.multiplier || 20) * sum4) / 100;
  return dist;
}
var normalizeDistance = (dist, order, min2, max5) => {
  if (dist === 0) return 1;
  const root = order === 2 ? Math.sqrt(dist) : dist ** (1 / order);
  const norm = (1 - root / 100 - min2) / (max5 - min2);
  const clamp2 = Math.round(100 * Math.max(Math.min(norm, 1), 0)) / 100;
  return clamp2;
};
function similarity(descriptor1, descriptor2, options3 = { order: 2, multiplier: 25, min: 0.2, max: 0.8 }) {
  const dist = distance(descriptor1, descriptor2, options3);
  return normalizeDistance(dist, options3.order || 2, options3.min || 0, options3.max || 1);
}
function find(descriptor, descriptors, options3 = { order: 2, multiplier: 25, threshold: 0, min: 0.2, max: 0.8 }) {
  if (!Array.isArray(descriptor) || !Array.isArray(descriptors) || descriptor.length < 64 || descriptors.length === 0) {
    return { index: -1, distance: Number.POSITIVE_INFINITY, similarity: 0 };
  }
  let lowestDistance = Number.MAX_SAFE_INTEGER;
  let index2 = -1;
  for (let i = 0; i < descriptors.length; i++) {
    const res = descriptors[i].length === descriptor.length ? distance(descriptor, descriptors[i], options3) : Number.MAX_SAFE_INTEGER;
    if (res < lowestDistance) {
      lowestDistance = res;
      index2 = i;
    }
    if (lowestDistance < (options3.threshold || 0)) break;
  }
  const normalizedSimilarity = normalizeDistance(lowestDistance, options3.order || 2, options3.min || 0, options3.max || 1);
  return { index: index2, distance: lowestDistance, similarity: normalizedSimilarity };
}

// src/models.ts
var models_exports2 = {};
__export(models_exports2, {
  Models: () => Models,
  validateModel: () => validateModel
});

// src/body/blazeposedetector.ts
var model13;
var inputSize4 = 224;
var anchorTensor;
var numLayers = 5;
var strides = [8, 16, 32, 32, 32];
function createAnchors() {
  const anchors3 = [];
  let layerId = 0;
  while (layerId < numLayers) {
    let anchorCount = 0;
    let lastSameStrideLayer = layerId;
    while (lastSameStrideLayer < strides.length && strides[lastSameStrideLayer] === strides[layerId]) {
      anchorCount += 2;
      lastSameStrideLayer++;
    }
    const stride = strides[layerId];
    const featureMapHeight = Math.ceil(inputSize4 / stride);
    const featureMapWidth = Math.ceil(inputSize4 / stride);
    for (let y = 0; y < featureMapHeight; ++y) {
      for (let x = 0; x < featureMapWidth; ++x) {
        for (let anchorId = 0; anchorId < anchorCount; ++anchorId) {
          anchors3.push({ x: (x + 0.5) / featureMapWidth, y: (y + 0.5) / featureMapHeight });
        }
      }
    }
    layerId = lastSameStrideLayer;
  }
  anchorTensor = { x: tfjs_esm_exports.tensor1d(anchors3.map((a) => a.x)), y: tfjs_esm_exports.tensor1d(anchors3.map((a) => a.y)) };
}
async function loadDetector(config3) {
  if (env.initial) model13 = null;
  if (!model13 && config3.body["detector"] && config3.body["detector"].modelPath || "") {
    model13 = await loadModel(config3.body["detector"].modelPath);
    const inputs = (model13 == null ? void 0 : model13["executor"]) ? Object.values(model13.modelSignature["inputs"]) : void 0;
    inputSize4 = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[1].size) : 0;
  } else if (config3.debug && model13) log("cached model:", model13["modelUrl"]);
  createAnchors();
  return model13;
}

// src/body/blazepose.ts
var model14;
var inputSize5 = 256;
var skipped10 = Number.MAX_SAFE_INTEGER;
var loadDetect = (config3) => loadDetector(config3);
async function loadPose(config3) {
  if (env.initial) model14 = null;
  if (!model14) {
    model14 = await loadModel(config3.body.modelPath);
    const inputs = (model14 == null ? void 0 : model14["executor"]) ? Object.values(model14.modelSignature["inputs"]) : void 0;
    inputSize5 = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[1].size) : 0;
  } else if (config3.debug) log("cached model:", model14["modelUrl"]);
  return model14;
}

// src/object/centernet.ts
var model15;
var inputSize6 = 0;
var skipped11 = Number.MAX_SAFE_INTEGER;
async function load13(config3) {
  if (env.initial) model15 = null;
  if (!model15) {
    model15 = await loadModel(config3.object.modelPath);
    const inputs = (model15 == null ? void 0 : model15["executor"]) ? Object.values(model15.modelSignature["inputs"]) : void 0;
    inputSize6 = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[2].size) : 0;
  } else if (config3.debug) log("cached model:", model15["modelUrl"]);
  return model15;
}

// src/body/efficientpose.ts
var model16;
var skipped12 = Number.MAX_SAFE_INTEGER;
async function load14(config3) {
  if (env.initial) model16 = null;
  if (!model16) model16 = await loadModel(config3.body.modelPath);
  else if (config3.debug) log("cached model:", model16["modelUrl"]);
  return model16;
}

// src/hand/fingerdef.ts
var Finger = {
  thumb: 0,
  index: 1,
  middle: 2,
  ring: 3,
  pinky: 4,
  all: [0, 1, 2, 3, 4],
  // just for convenience
  nameMapping: { 0: "thumb", 1: "index", 2: "middle", 3: "ring", 4: "pinky" },
  // Describes mapping of joints based on the 21 points returned by handpose.
  // [0]     Palm
  // [1-4]   Thumb
  // [5-8]   Index
  // [9-12]  Middle
  // [13-16] Ring
  // [17-20] Pinky
  pointsMapping: {
    0: [[0, 1], [1, 2], [2, 3], [3, 4]],
    1: [[0, 5], [5, 6], [6, 7], [7, 8]],
    2: [[0, 9], [9, 10], [10, 11], [11, 12]],
    3: [[0, 13], [13, 14], [14, 15], [15, 16]],
    4: [[0, 17], [17, 18], [18, 19], [19, 20]]
  },
  getName: (value) => Finger.nameMapping[value],
  getPoints: (value) => Finger.pointsMapping[value]
};
var FingerCurl = {
  none: 0,
  half: 1,
  full: 2,
  nameMapping: { 0: "none", 1: "half", 2: "full" },
  getName: (value) => FingerCurl.nameMapping[value]
};
var FingerDirection = {
  verticalUp: 0,
  verticalDown: 1,
  horizontalLeft: 2,
  horizontalRight: 3,
  diagonalUpRight: 4,
  diagonalUpLeft: 5,
  diagonalDownRight: 6,
  diagonalDownLeft: 7,
  nameMapping: { 0: "verticalUp", 1: "verticalDown", 2: "horizontalLeft", 3: "horizontalRight", 4: "diagonalUpRight", 5: "diagonalUpLeft", 6: "diagonalDownRight", 7: "diagonalDownLeft" },
  getName: (value) => FingerDirection.nameMapping[value]
};
var FingerGesture = class {
  constructor(name) {
    __publicField(this, "name");
    __publicField(this, "curls");
    __publicField(this, "directions");
    __publicField(this, "weights");
    __publicField(this, "weightsRelative");
    this.name = name;
    this.curls = {};
    this.directions = {};
    this.weights = [1, 1, 1, 1, 1];
    this.weightsRelative = [1, 1, 1, 1, 1];
  }
  curl(finger, curl, confidence) {
    if (typeof this.curls[finger] === "undefined") this.curls[finger] = [];
    this.curls[finger].push([curl, confidence]);
  }
  direction(finger, position, confidence) {
    if (!this.directions[finger]) this.directions[finger] = [];
    this.directions[finger].push([position, confidence]);
  }
  weight(finger, weight) {
    this.weights[finger] = weight;
    const total = this.weights.reduce((a, b) => a + b, 0);
    this.weightsRelative = this.weights.map((el) => el * 5 / total);
  }
  matchAgainst(detectedCurls, detectedDirections) {
    let confidence = 0;
    for (const fingerIdx in detectedCurls) {
      const detectedCurl = detectedCurls[fingerIdx];
      const expectedCurls = this.curls[fingerIdx];
      if (typeof expectedCurls === "undefined") {
        confidence += this.weightsRelative[fingerIdx];
        continue;
      }
      for (const [expectedCurl, score] of expectedCurls) {
        if (detectedCurl === expectedCurl) {
          confidence += score * this.weightsRelative[fingerIdx];
          break;
        }
      }
    }
    for (const fingerIdx in detectedDirections) {
      const detectedDirection = detectedDirections[fingerIdx];
      const expectedDirections = this.directions[fingerIdx];
      if (typeof expectedDirections === "undefined") {
        confidence += this.weightsRelative[fingerIdx];
        continue;
      }
      for (const [expectedDirection, score] of expectedDirections) {
        if (detectedDirection === expectedDirection) {
          confidence += score * this.weightsRelative[fingerIdx];
          break;
        }
      }
    }
    return confidence / 10;
  }
};

// src/hand/fingergesture.ts
var { thumb, index, middle, ring, pinky } = Finger;
var { none, half, full } = FingerCurl;
var { verticalUp, verticalDown, horizontalLeft, horizontalRight, diagonalUpRight, diagonalUpLeft, diagonalDownRight, diagonalDownLeft } = FingerDirection;
var ThumbsUp = new FingerGesture("thumbs up");
ThumbsUp.curl(thumb, none, 1);
ThumbsUp.direction(thumb, verticalUp, 1);
ThumbsUp.direction(thumb, diagonalUpLeft, 0.25);
ThumbsUp.direction(thumb, diagonalUpRight, 0.25);
for (const finger of [Finger.index, Finger.middle, Finger.ring, Finger.pinky]) {
  ThumbsUp.curl(finger, full, 1);
  ThumbsUp.direction(finger, horizontalLeft, 1);
  ThumbsUp.direction(finger, horizontalRight, 1);
}
var Victory = new FingerGesture("victory");
Victory.curl(thumb, half, 0.5);
Victory.curl(thumb, none, 0.5);
Victory.direction(thumb, verticalUp, 1);
Victory.direction(thumb, diagonalUpLeft, 1);
Victory.curl(index, none, 1);
Victory.direction(index, verticalUp, 0.75);
Victory.direction(index, diagonalUpLeft, 1);
Victory.curl(middle, none, 1);
Victory.direction(middle, verticalUp, 1);
Victory.direction(middle, diagonalUpLeft, 0.75);
Victory.curl(ring, full, 1);
Victory.direction(ring, verticalUp, 0.2);
Victory.direction(ring, diagonalUpLeft, 1);
Victory.direction(ring, horizontalLeft, 0.2);
Victory.curl(pinky, full, 1);
Victory.direction(pinky, verticalUp, 0.2);
Victory.direction(pinky, diagonalUpLeft, 1);
Victory.direction(pinky, horizontalLeft, 0.2);
Victory.weight(index, 2);
Victory.weight(middle, 2);
var Point = new FingerGesture("point");
Point.curl(thumb, full, 1);
Point.curl(index, none, 0.5);
Point.curl(middle, full, 0.5);
Point.curl(ring, full, 0.5);
Point.curl(pinky, full, 0.5);
Point.weight(index, 2);
Point.weight(middle, 2);
var MiddleFinger = new FingerGesture("middle finger");
MiddleFinger.curl(thumb, none, 1);
MiddleFinger.curl(index, full, 0.5);
MiddleFinger.curl(middle, full, 0.5);
MiddleFinger.curl(ring, full, 0.5);
MiddleFinger.curl(pinky, full, 0.5);
MiddleFinger.weight(index, 2);
MiddleFinger.weight(middle, 2);
var OpenPalm = new FingerGesture("open palm");
OpenPalm.curl(thumb, none, 0.75);
OpenPalm.curl(index, none, 0.75);
OpenPalm.curl(middle, none, 0.75);
OpenPalm.curl(ring, none, 0.75);
OpenPalm.curl(pinky, none, 0.75);

// src/hand/handpose.ts
var handDetectorModel;
var handPoseModel;
async function loadDetect2(config3) {
  var _a;
  if (env.initial) handDetectorModel = null;
  if (!handDetectorModel) handDetectorModel = await loadModel((_a = config3.hand.detector) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", handDetectorModel["modelUrl"]);
  return handDetectorModel;
}
async function loadSkeleton(config3) {
  var _a;
  if (env.initial) handPoseModel = null;
  if (!handPoseModel) handPoseModel = await loadModel((_a = config3.hand.skeleton) == null ? void 0 : _a.modelPath);
  else if (config3.debug) log("cached model:", handPoseModel["modelUrl"]);
  return handPoseModel;
}

// src/tfjs/humangl.ts
var config2 = {
  name: "humangl",
  priority: 999,
  canvas: null,
  gl: null,
  extensions: [],
  webGLattr: {
    // https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.2
    alpha: false,
    antialias: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    depth: false,
    stencil: false,
    failIfMajorPerformanceCaveat: false,
    // default=true
    desynchronized: true
    // default=undefined
  }
};
function extensions() {
  const gl = config2.gl;
  if (!gl) return;
  config2.extensions = gl.getSupportedExtensions();
}
function register(instance) {
  var _a;
  if (instance.config.backend !== "humangl") return;
  if (config2.name in tfjs_esm_exports.engine().registry && !((_a = config2 == null ? void 0 : config2.gl) == null ? void 0 : _a.getParameter(config2.gl.VERSION))) {
    log("humangl error: backend invalid context");
    instance.models.reset();
  }
  if (!tfjs_esm_exports.findBackend(config2.name)) {
    try {
      config2.canvas = canvas(100, 100);
    } catch (err) {
      log("humangl error: cannot create canvas:", err);
      return;
    }
    try {
      config2.gl = config2.canvas.getContext("webgl2", config2.webGLattr);
      if (!config2.gl) {
        log("humangl error: cannot get webgl context");
        return;
      }
      const glv2 = config2.gl.getParameter(config2.gl.VERSION).includes("2.0");
      if (!glv2) {
        log("backend override: using fallback webgl backend as webgl 2.0 is not detected");
        instance.config.backend = "webgl";
        return;
      }
      if (config2.canvas) {
        config2.canvas.addEventListener("webglcontextlost", (e) => {
          log("humangl error:", e.type);
          log("possible browser memory leak using webgl or conflict with multiple backend registrations");
          instance.emit("error");
          throw new Error("backend error: webgl context lost");
        });
        config2.canvas.addEventListener("webglcontextrestored", (e) => {
          log("humangl error: context restored:", e);
        });
        config2.canvas.addEventListener("webglcontextcreationerror", (e) => {
          log("humangl error: context create:", e);
        });
      }
    } catch (err) {
      log("humangl error: cannot get webgl context:", err);
      return;
    }
    try {
      tfjs_esm_exports.setWebGLContext(2, config2.gl);
    } catch (err) {
      log("humangl error: cannot set webgl context:", err);
      return;
    }
    try {
      const ctx = new tfjs_esm_exports.GPGPUContext(config2.gl);
      tfjs_esm_exports.registerBackend(config2.name, () => new tfjs_esm_exports.MathBackendWebGL(ctx), config2.priority);
    } catch (err) {
      log("humangl error: cannot register webgl backend:", err);
      return;
    }
    try {
      const kernels = tfjs_esm_exports.getKernelsForBackend("webgl");
      kernels.forEach((kernelConfig) => {
        const newKernelConfig = { ...kernelConfig, backendName: config2.name };
        tfjs_esm_exports.registerKernel(newKernelConfig);
      });
    } catch (err) {
      log("humangl error: cannot update webgl backend registration:", err);
      return;
    }
    try {
      if (tfjs_esm_exports.env().flagRegistry.WEBGL_VERSION) tfjs_esm_exports.env().set("WEBGL_VERSION", 2);
    } catch (err) {
      log("humangl error: cannot set WebGL backend flags:", err);
      return;
    }
    extensions();
    const backend4 = tfjs_esm_exports.backend();
    const current = typeof backend4["gpgpu"] !== "undefined" ? backend4["getGPGPUContext"]().gl : null;
    if (current) {
      if (instance.config.debug) log("humangl backend registered:", { webgl: current.getParameter(current.VERSION), renderer: current.getParameter(current.RENDERER) });
    } else {
      log("humangl error: no current gl context:", current, config2.gl);
    }
  }
}

// src/tfjs/backend.ts
async function getBestBackend() {
  var _a;
  await env.updateBackend();
  if ((_a = env.tensorflow) == null ? void 0 : _a.version) return "tensorflow";
  if (env.webgpu.supported && env.webgpu.backend) return "webgpu";
  if (env.webgl.supported && env.webgl.backend) return "webgl";
  if (env.wasm.supported && env.wasm.backend) return "wasm";
  return "cpu";
}
function registerCustomOps(config3) {
  const newKernels = [];
  if (!env.kernels.includes("mod")) {
    const kernelMod = {
      kernelName: "Mod",
      backendName: tfjs_esm_exports.getBackend(),
      kernelFunc: (op) => tfjs_esm_exports.tidy(() => tfjs_esm_exports.sub(op.inputs.a, tfjs_esm_exports.mul(tfjs_esm_exports.div(op.inputs.a, op.inputs.b), op.inputs.b)))
    };
    tfjs_esm_exports.registerKernel(kernelMod);
    env.kernels.push("mod");
    newKernels.push("mod");
  }
  if (!env.kernels.includes("floormod")) {
    const kernelFloorMod = {
      kernelName: "FloorMod",
      backendName: tfjs_esm_exports.getBackend(),
      kernelFunc: (op) => tfjs_esm_exports.tidy(() => tfjs_esm_exports.add(tfjs_esm_exports.mul(tfjs_esm_exports.floorDiv(op.inputs.a, op.inputs.b), op.inputs.b), tfjs_esm_exports.mod(op.inputs.a, op.inputs.b)))
    };
    tfjs_esm_exports.registerKernel(kernelFloorMod);
    env.kernels.push("floormod");
    newKernels.push("floormod");
  }
  if (!env.kernels.includes("rotatewithoffset") && config3.softwareKernels) {
    const kernelRotateWithOffset = {
      kernelName: "RotateWithOffset",
      backendName: tfjs_esm_exports.getBackend(),
      kernelFunc: (op) => tfjs_esm_exports.tidy(() => {
        const backend4 = tfjs_esm_exports.getBackend();
        tfjs_esm_exports.setBackend("cpu");
        const t2 = tfjs_esm_exports.image.rotateWithOffset(op.inputs.image, op.attrs.radians, op.attrs.fillValue, op.attrs.center);
        tfjs_esm_exports.setBackend(backend4);
        return t2;
      })
    };
    tfjs_esm_exports.registerKernel(kernelRotateWithOffset);
    env.kernels.push("rotatewithoffset");
    newKernels.push("rotatewithoffset");
  }
  if (newKernels.length > 0 && config3.debug) log("registered kernels:", newKernels);
}
var defaultFlags = {};
async function check(instance, force = false) {
  var _a, _b;
  instance.state = "backend";
  if (((_a = instance.config.backend) == null ? void 0 : _a.length) === 0) instance.config.backend = await getBestBackend();
  if (force || env.initial || instance.config.backend && instance.config.backend.length > 0 && tfjs_esm_exports.getBackend() !== instance.config.backend) {
    const timeStamp = now();
    if (instance.config.backend && instance.config.backend.length > 0) {
      if (typeof window === "undefined" && typeof WorkerGlobalScope !== "undefined" && instance.config.debug) {
        if (instance.config.debug) log("running inside web worker");
      }
      if (typeof navigator !== "undefined" && ((_b = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _b.toLowerCase().includes("electron"))) {
        if (instance.config.debug) log("running inside electron");
      }
      let available = Object.keys(tfjs_esm_exports.engine().registryFactory);
      if (instance.config.backend === "humangl" && !available.includes("humangl")) {
        register(instance);
        available = Object.keys(tfjs_esm_exports.engine().registryFactory);
      }
      if (instance.config.debug) log("available backends:", available);
      if (env.browser && !env.node && instance.config.backend === "tensorflow" && available.includes("webgl")) {
        if (instance.config.debug) log("override: backend set to tensorflow while running in browser");
        instance.config.backend = "webgl";
      }
      if (env.node && !env.browser && (instance.config.backend === "webgl" || instance.config.backend === "humangl") && available.includes("tensorflow")) {
        if (instance.config.debug) log(`override: backend set to ${instance.config.backend} while running in nodejs`);
        instance.config.backend = "tensorflow";
      }
      if (env.browser && instance.config.backend === "webgpu") {
        if (typeof navigator === "undefined" || typeof navigator.gpu === "undefined") {
          log("override: backend set to webgpu but browser does not support webgpu");
          instance.config.backend = "webgl";
        } else {
          const adapter = await navigator.gpu.requestAdapter();
          if (instance.config.debug) log("enumerated webgpu adapter:", adapter);
          if (!adapter) {
            log("override: backend set to webgpu but browser reports no available gpu");
            instance.config.backend = "webgl";
          } else {
            let adapterInfo;
            if ("requestAdapterInfo" in adapter) adapterInfo = await (adapter == null ? void 0 : adapter.requestAdapterInfo());
            else adapterInfo = adapter.info;
            log("webgpu adapter info:", adapterInfo);
          }
        }
      }
      if (!available.includes(instance.config.backend)) {
        log(`error: backend ${instance.config.backend} not found in registry`);
        instance.config.backend = env.node ? "tensorflow" : "webgl";
        if (instance.config.debug) log(`override: setting backend ${instance.config.backend}`);
      }
      if (instance.config.debug) log("setting backend:", [instance.config.backend]);
      if (instance.config.backend === "wasm") {
        if (tfjs_esm_exports.env().flagRegistry.CANVAS2D_WILL_READ_FREQUENTLY) tfjs_esm_exports.env().set("CANVAS2D_WILL_READ_FREQUENTLY", true);
        if (instance.config.debug) log("wasm path:", instance.config.wasmPath);
        if (typeof tfjs_esm_exports.setWasmPaths !== "undefined") tfjs_esm_exports.setWasmPaths(instance.config.wasmPath, instance.config.wasmPlatformFetch);
        else throw new Error("backend error: attempting to use wasm backend but wasm path is not set");
        let mt = false;
        let simd = false;
        try {
          mt = await tfjs_esm_exports.env().getAsync("WASM_HAS_MULTITHREAD_SUPPORT");
          simd = await tfjs_esm_exports.env().getAsync("WASM_HAS_SIMD_SUPPORT");
          if (instance.config.debug) log(`wasm execution: ${simd ? "simd" : "no simd"} ${mt ? "multithreaded" : "singlethreaded"}`);
          if (instance.config.debug && !simd) log("warning: wasm simd support is not enabled");
        } catch (e) {
          log("wasm detection failed");
        }
      }
      try {
        await tfjs_esm_exports.setBackend(instance.config.backend);
        await tfjs_esm_exports.ready();
      } catch (err) {
        log("error: cannot set backend:", instance.config.backend, err);
        return false;
      }
      if (instance.config.debug) defaultFlags = JSON.parse(JSON.stringify(tfjs_esm_exports.env().flags));
    }
    if (tfjs_esm_exports.getBackend() === "humangl" || tfjs_esm_exports.getBackend() === "webgl") {
      if (tfjs_esm_exports.env().flagRegistry.WEBGL_USE_SHAPES_UNIFORMS) tfjs_esm_exports.env().set("WEBGL_USE_SHAPES_UNIFORMS", true);
      if (tfjs_esm_exports.env().flagRegistry.WEBGL_EXP_CONV) tfjs_esm_exports.env().set("WEBGL_EXP_CONV", true);
      if (instance.config.debug && typeof instance.config.deallocate !== "undefined" && instance.config.deallocate) {
        log("changing webgl: WEBGL_DELETE_TEXTURE_THRESHOLD:", true);
        tfjs_esm_exports.env().set("WEBGL_DELETE_TEXTURE_THRESHOLD", 0);
      }
    }
    if (tfjs_esm_exports.getBackend() === "webgpu") {
    }
    if (instance.config.debug) {
      const newFlags = tfjs_esm_exports.env().flags;
      const updatedFlags = {};
      for (const key of Object.keys(newFlags)) {
        if (defaultFlags[key] === newFlags[key]) continue;
        updatedFlags[key] = newFlags[key];
      }
      if (instance.config.debug && Object.keys(updatedFlags).length > 0) log("backend:", tfjs_esm_exports.getBackend(), "flags:", updatedFlags);
    }
    if (instance.config.flags && Object.keys(instance.config.flags).length > 0) {
      if (instance.config.debug) log("flags:", instance.config["flags"]);
      for (const [key, val] of Object.entries(instance.config.flags)) {
        tfjs_esm_exports.env().set(key, val);
      }
    }
    tfjs_esm_exports.enableProdMode();
    init2();
    instance.performance.initBackend = Math.trunc(now() - timeStamp);
    instance.config.backend = tfjs_esm_exports.getBackend();
    await env.updateBackend();
    registerCustomOps(instance.config);
  }
  return true;
}
function fakeOps(kernelNames, config3) {
  for (const kernelName of kernelNames) {
    const kernelConfig = {
      kernelName,
      backendName: config3.backend,
      kernelFunc: (param) => {
        var _a;
        if (config3.debug) log("kernelFunc", kernelName, config3.backend, param);
        return (_a = param == null ? void 0 : param.inputs) == null ? void 0 : _a.info;
      }
      // setupFunc: () => { if (config.debug) log('kernelFunc', kernelName, config.backend); },
      // disposeFunc: () => { if (config.debug) log('kernelFunc', kernelName, config.backend); },
    };
    tfjs_esm_exports.registerKernel(kernelConfig);
  }
  env.kernels = tfjs_esm_exports.getKernelsForBackend(tfjs_esm_exports.getBackend()).map((kernel) => kernel.kernelName.toLowerCase());
}

// src/hand/handtrack.ts
var models2 = [null, null];
var inputSize7 = [[0, 0], [0, 0]];
var skipped13 = Number.MAX_SAFE_INTEGER;
async function loadDetect3(config3) {
  var _a;
  if (env.initial) models2[0] = null;
  if (!models2[0]) {
    fakeOps(["tensorlistreserve", "enter", "tensorlistfromtensor", "merge", "loopcond", "switch", "exit", "tensorliststack", "nextiteration", "tensorlistsetitem", "tensorlistgetitem", "reciprocal", "shape", "split", "where"], config3);
    models2[0] = await loadModel((_a = config3.hand.detector) == null ? void 0 : _a.modelPath);
    const inputs = models2[0]["executor"] ? Object.values(models2[0].modelSignature["inputs"]) : void 0;
    inputSize7[0][0] = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[1].size) : 0;
    inputSize7[0][1] = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[2].size) : 0;
  } else if (config3.debug) log("cached model:", models2[0]["modelUrl"]);
  return models2[0];
}
async function loadSkeleton2(config3) {
  var _a;
  if (env.initial) models2[1] = null;
  if (!models2[1]) {
    models2[1] = await loadModel((_a = config3.hand.skeleton) == null ? void 0 : _a.modelPath);
    const inputs = models2[1]["executor"] ? Object.values(models2[1].modelSignature["inputs"]) : void 0;
    inputSize7[1][0] = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[1].size) : 0;
    inputSize7[1][1] = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[2].size) : 0;
  } else if (config3.debug) log("cached model:", models2[1]["modelUrl"]);
  return models2[1];
}

// src/segmentation/meet.ts
var model17;
async function load15(config3) {
  if (!model17 || env.initial) model17 = await loadModel(config3.segmentation.modelPath);
  else if (config3.debug) log("cached model:", model17["modelUrl"]);
  return model17;
}
async function predict11(input, config3) {
  var _a;
  if (!model17) model17 = await load15(config3);
  if (!(model17 == null ? void 0 : model17["executor"]) || !((_a = model17 == null ? void 0 : model17.inputs) == null ? void 0 : _a[0].shape)) return null;
  const t2 = {};
  t2.resize = tfjs_esm_exports.image.resizeBilinear(input, [model17.inputs[0].shape ? model17.inputs[0].shape[1] : 0, model17.inputs[0].shape ? model17.inputs[0].shape[2] : 0], false);
  t2.norm = tfjs_esm_exports.div(t2.resize, constants.tf255);
  t2.res = model17.execute(t2.norm);
  t2.squeeze = tfjs_esm_exports.squeeze(t2.res, [0]);
  [t2.bgRaw, t2.fgRaw] = tfjs_esm_exports.unstack(t2.squeeze, 2);
  t2.fg = tfjs_esm_exports.softmax(t2.fgRaw);
  t2.mul = tfjs_esm_exports.mul(t2.fg, constants.tf255);
  t2.expand = tfjs_esm_exports.expandDims(t2.mul, 2);
  t2.output = tfjs_esm_exports.image.resizeBilinear(t2.expand, [input.shape[1] || 0, input.shape[2] || 0]);
  let rgba;
  switch (config3.segmentation.mode || "default") {
    case "default":
      t2.input = tfjs_esm_exports.squeeze(input);
      t2.concat = tfjs_esm_exports.concat([t2.input, t2.output], -1);
      rgba = tfjs_esm_exports.cast(t2.concat, "int32");
      break;
    case "alpha":
      rgba = tfjs_esm_exports.cast(t2.output, "int32");
      break;
    default:
      rgba = tfjs_esm_exports.tensor(0);
  }
  Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
  return rgba;
}

// src/body/movenet.ts
var model18;
var inputSize8 = 0;
var skipped14 = Number.MAX_SAFE_INTEGER;
async function load16(config3) {
  var _a;
  if (env.initial) model18 = null;
  if (!model18) {
    fakeOps(["size"], config3);
    model18 = await loadModel(config3.body.modelPath);
  } else if (config3.debug) log("cached model:", model18["modelUrl"]);
  inputSize8 = (model18 == null ? void 0 : model18["executor"]) && ((_a = model18 == null ? void 0 : model18.inputs) == null ? void 0 : _a[0].shape) ? model18.inputs[0].shape[2] : 0;
  if (inputSize8 < 64) inputSize8 = 256;
  if (tfjs_esm_exports.env().flagRegistry.WEBGL_USE_SHAPES_UNIFORMS) tfjs_esm_exports.env().set("WEBGL_USE_SHAPES_UNIFORMS", false);
  return model18;
}

// src/object/nanodet.ts
var model19;
var skipped15 = Number.MAX_SAFE_INTEGER;
var inputSize9 = 0;
async function load17(config3) {
  if (!model19 || env.initial) {
    model19 = await loadModel(config3.object.modelPath);
    const inputs = (model19 == null ? void 0 : model19["executor"]) ? Object.values(model19.modelSignature["inputs"]) : void 0;
    inputSize9 = Array.isArray(inputs) ? parseInt(inputs[0].tensorShape.dim[2].size) : 416;
  } else if (config3.debug) log("cached model:", model19["modelUrl"]);
  return model19;
}

// src/body/posenetutils.ts
var partNames = [
  "nose",
  "leftEye",
  "rightEye",
  "leftEar",
  "rightEar",
  "leftShoulder",
  "rightShoulder",
  "leftElbow",
  "rightElbow",
  "leftWrist",
  "rightWrist",
  "leftHip",
  "rightHip",
  "leftKnee",
  "rightKnee",
  "leftAnkle",
  "rightAnkle"
];
var count = partNames.length;
var partIds = partNames.reduce((result, jointName, i) => {
  result[jointName] = i;
  return result;
}, {});
var connectedPartNames = [
  ["leftHip", "leftShoulder"],
  ["leftElbow", "leftShoulder"],
  ["leftElbow", "leftWrist"],
  ["leftHip", "leftKnee"],
  ["leftKnee", "leftAnkle"],
  ["rightHip", "rightShoulder"],
  ["rightElbow", "rightShoulder"],
  ["rightElbow", "rightWrist"],
  ["rightHip", "rightKnee"],
  ["rightKnee", "rightAnkle"],
  ["leftShoulder", "rightShoulder"],
  ["leftHip", "rightHip"]
];
var connectedPartIndices = connectedPartNames.map(([jointNameA, jointNameB]) => [partIds[jointNameA], partIds[jointNameB]]);

// src/body/posenet.ts
var model20;
var squaredNmsRadius = 50 ** 2;
async function load18(config3) {
  if (!model20 || env.initial) model20 = await loadModel(config3.body.modelPath);
  else if (config3.debug) log("cached model:", model20["modelUrl"]);
  return model20;
}

// src/segmentation/rvm.ts
var model21;
var outputNodes = ["fgr", "pha", "r1o", "r2o", "r3o", "r4o"];
var t = {};
var ratio = 0;
function init3(config3) {
  tfjs_esm_exports.dispose([t.r1i, t.r2i, t.r3i, t.r4i, t.downsample_ratio]);
  t.r1i = tfjs_esm_exports.tensor(0);
  t.r2i = tfjs_esm_exports.tensor(0);
  t.r3i = tfjs_esm_exports.tensor(0);
  t.r4i = tfjs_esm_exports.tensor(0);
  ratio = config3.segmentation.ratio || 0.5;
  t.downsample_ratio = tfjs_esm_exports.tensor(ratio);
}
async function load19(config3) {
  if (!model21 || env.initial) model21 = await loadModel(config3.segmentation.modelPath);
  else if (config3.debug) log("cached model:", model21["modelUrl"]);
  init3(config3);
  return model21;
}
var normalize = (r) => tfjs_esm_exports.tidy(() => {
  const squeeze14 = tfjs_esm_exports.squeeze(r, [0]);
  const mul15 = tfjs_esm_exports.mul(squeeze14, constants.tf255);
  const cast8 = tfjs_esm_exports.cast(mul15, "int32");
  return cast8;
});
function getRGBA(fgr, pha) {
  const rgb3 = fgr ? normalize(fgr) : tfjs_esm_exports.fill([pha.shape[1] || 0, pha.shape[2] || 0, 3], 255, "int32");
  const a = pha ? normalize(pha) : tfjs_esm_exports.fill([fgr.shape[1] || 0, fgr.shape[2] || 0, 1], 255, "int32");
  const rgba = tfjs_esm_exports.concat([rgb3, a], -1);
  tfjs_esm_exports.dispose([rgb3, a]);
  return rgba;
}
function getState(state) {
  return tfjs_esm_exports.tidy(() => {
    const r = {};
    r.unstack = tfjs_esm_exports.unstack(state, -1);
    r.concat = tfjs_esm_exports.concat(r.unstack, 1);
    r.split = tfjs_esm_exports.split(r.concat, 4, 1);
    r.stack = tfjs_esm_exports.concat(r.split, 2);
    r.squeeze = tfjs_esm_exports.squeeze(r.stack, [0]);
    r.expand = tfjs_esm_exports.expandDims(r.squeeze, -1);
    r.add = tfjs_esm_exports.add(r.expand, 1);
    r.mul = tfjs_esm_exports.mul(r.add, 127.5);
    r.cast = tfjs_esm_exports.cast(r.mul, "int32");
    r.tile = tfjs_esm_exports.tile(r.cast, [1, 1, 3]);
    r.alpha = tfjs_esm_exports.fill([r.tile.shape[0] || 0, r.tile.shape[1] || 0, 1], 255, "int32");
    return tfjs_esm_exports.concat([r.tile, r.alpha], -1);
  });
}
async function predict12(input, config3) {
  if (!model21) model21 = await load19(config3);
  if (!(model21 == null ? void 0 : model21["executor"])) return null;
  t.src = tfjs_esm_exports.div(input, 255);
  if (ratio !== config3.segmentation.ratio) init3(config3);
  const [fgr, pha, r1o, r2o, r3o, r4o] = await model21.executeAsync(t, outputNodes);
  let rgba;
  switch (config3.segmentation.mode || "default") {
    case "default":
      rgba = getRGBA(fgr, pha);
      break;
    case "alpha":
      rgba = getRGBA(null, pha);
      break;
    case "foreground":
      rgba = getRGBA(fgr, null);
      break;
    case "state":
      rgba = getState(r1o);
      break;
    default:
      rgba = tfjs_esm_exports.tensor(0);
  }
  tfjs_esm_exports.dispose([t.src, fgr, pha, t.r1i, t.r2i, t.r3i, t.r4i]);
  [t.r1i, t.r2i, t.r3i, t.r4i] = [r1o, r2o, r3o, r4o];
  return rgba;
}

// src/segmentation/selfie.ts
var model22;
async function load20(config3) {
  if (!model22 || env.initial) model22 = await loadModel(config3.segmentation.modelPath);
  else if (config3.debug) log("cached model:", model22["modelUrl"]);
  return model22;
}
async function predict13(input, config3) {
  var _a;
  if (!model22) model22 = await load20(config3);
  if (!(model22 == null ? void 0 : model22["executor"]) || !((_a = model22 == null ? void 0 : model22.inputs) == null ? void 0 : _a[0].shape)) return null;
  const t2 = {};
  t2.resize = tfjs_esm_exports.image.resizeBilinear(input, [model22.inputs[0].shape ? model22.inputs[0].shape[1] : 0, model22.inputs[0].shape ? model22.inputs[0].shape[2] : 0], false);
  t2.norm = tfjs_esm_exports.div(t2.resize, constants.tf255);
  t2.res = model22.execute(t2.norm);
  t2.squeeze = tfjs_esm_exports.squeeze(t2.res, [0]);
  t2.alpha = tfjs_esm_exports.image.resizeBilinear(t2.squeeze, [input.shape[1] || 0, input.shape[2] || 0]);
  t2.mul = tfjs_esm_exports.mul(t2.alpha, constants.tf255);
  let rgba;
  switch (config3.segmentation.mode || "default") {
    case "default":
      t2.input = tfjs_esm_exports.squeeze(input);
      t2.concat = tfjs_esm_exports.concat([t2.input, t2.mul], -1);
      rgba = tfjs_esm_exports.cast(t2.concat, "int32");
      break;
    case "alpha":
      rgba = tfjs_esm_exports.cast(t2.mul, "int32");
      break;
    default:
      rgba = tfjs_esm_exports.tensor(0);
  }
  Object.keys(t2).forEach((tensor7) => tfjs_esm_exports.dispose(t2[tensor7]));
  return rgba;
}

// src/models.ts
function validateModel(instance, model23, name) {
  var _a, _b;
  if (!model23) return null;
  if (!((_a = instance == null ? void 0 : instance.config) == null ? void 0 : _a.validateModels)) return null;
  const simpleOps = ["const", "placeholder", "noop", "pad", "squeeze", "add", "sub", "mul", "div"];
  const ignoreOps = ["biasadd", "fusedbatchnormv3", "matmul", "switch", "shape", "merge", "split", "broadcastto"];
  const ops = [];
  const missing = [];
  const url = model23["modelUrl"];
  const executor = model23["executor"];
  if ((_b = executor == null ? void 0 : executor.graph) == null ? void 0 : _b.nodes) {
    for (const kernel of Object.values(executor.graph.nodes)) {
      const op = kernel.op.toLowerCase();
      if (!ops.includes(op)) ops.push(op);
    }
  } else {
    if (!executor && instance.config.debug) {
      log("model not loaded", name);
    }
  }
  for (const op of ops) {
    if (!simpleOps.includes(op) && !ignoreOps.includes(op) && !instance.env.kernels.includes(op) && !instance.env.kernels.includes(op.replace("_", "")) && !instance.env.kernels.includes(op.replace("native", "")) && !instance.env.kernels.includes(op.replace("v2", ""))) {
      missing.push(op);
    }
  }
  if (instance.config.debug && missing.length > 0) log("model validation failed:", name, missing);
  return missing.length > 0 ? { name, missing, ops, url } : null;
}
var Models = class {
  constructor(currentInstance) {
    __publicField(this, "instance");
    __publicField(this, "models", {});
    this.models = {};
    this.instance = currentInstance;
  }
  stats() {
    let totalSizeFromManifest = 0;
    let totalSizeWeights = 0;
    let totalSizeLoading = 0;
    for (const m of Object.values(modelStats)) {
      totalSizeFromManifest += Number.isNaN(+m.sizeFromManifest) ? 0 : m.sizeFromManifest;
      totalSizeWeights += Number.isNaN(+m.sizeLoadedWeights) ? 0 : m.sizeLoadedWeights;
      totalSizeLoading += Number.isNaN(+m.sizeDesired) ? 0 : m.sizeDesired;
    }
    const percentageLoaded = totalSizeLoading > 0 ? totalSizeWeights / totalSizeLoading : 0;
    return {
      numLoadedModels: Object.values(modelStats).filter((m) => m == null ? void 0 : m.loaded).length,
      numDefinedModels: Object.keys(this.models).length,
      percentageLoaded,
      totalSizeFromManifest,
      totalSizeWeights,
      totalSizeLoading,
      modelStats: Object.values(modelStats)
    };
  }
  reset() {
    for (const model23 of Object.keys(this.models)) this.models[model23] = null;
  }
  async load(instance) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
    if (env.initial) this.reset();
    if (instance) this.instance = instance;
    const m = {};
    m.blazeface = this.instance.config.face.enabled && !this.models.blazeface ? load6(this.instance.config) : null;
    m.antispoof = this.instance.config.face.enabled && ((_a = this.instance.config.face.antispoof) == null ? void 0 : _a.enabled) && !this.models.antispoof ? load5(this.instance.config) : null;
    m.liveness = this.instance.config.face.enabled && ((_b = this.instance.config.face.liveness) == null ? void 0 : _b.enabled) && !this.models.liveness ? load11(this.instance.config) : null;
    m.faceres = this.instance.config.face.enabled && ((_c = this.instance.config.face.description) == null ? void 0 : _c.enabled) && !this.models.faceres ? load9(this.instance.config) : null;
    m.emotion = this.instance.config.face.enabled && ((_d = this.instance.config.face.emotion) == null ? void 0 : _d.enabled) && !this.models.emotion ? load(this.instance.config) : null;
    m.iris = this.instance.config.face.enabled && ((_e = this.instance.config.face.iris) == null ? void 0 : _e.enabled) && !((_f = this.instance.config.face.attention) == null ? void 0 : _f.enabled) && !this.models.iris ? load7(this.instance.config) : null;
    m.facemesh = this.instance.config.face.enabled && ((_g = this.instance.config.face.mesh) == null ? void 0 : _g.enabled) && !this.models.facemesh ? load8(this.instance.config) : null;
    m.gear = this.instance.config.face.enabled && ((_h = this.instance.config.face["gear"]) == null ? void 0 : _h.enabled) && !this.models.gear ? load2(this.instance.config) : null;
    m.ssrnetage = this.instance.config.face.enabled && ((_i = this.instance.config.face["ssrnet"]) == null ? void 0 : _i.enabled) && !this.models.ssrnetage ? load3(this.instance.config) : null;
    m.ssrnetgender = this.instance.config.face.enabled && ((_j = this.instance.config.face["ssrnet"]) == null ? void 0 : _j.enabled) && !this.models.ssrnetgender ? load4(this.instance.config) : null;
    m.mobilefacenet = this.instance.config.face.enabled && ((_k = this.instance.config.face["mobilefacenet"]) == null ? void 0 : _k.enabled) && !this.models.mobilefacenet ? load12(this.instance.config) : null;
    m.insightface = this.instance.config.face.enabled && ((_l = this.instance.config.face["insightface"]) == null ? void 0 : _l.enabled) && !this.models.insightface ? load10(this.instance.config) : null;
    m.blazepose = this.instance.config.body.enabled && !this.models.blazepose && ((_m = this.instance.config.body.modelPath) == null ? void 0 : _m.includes("blazepose")) ? loadPose(this.instance.config) : null;
    m.blazeposedetect = this.instance.config.body.enabled && !this.models.blazeposedetect && this.instance.config.body["detector"] && this.instance.config.body["detector"].modelPath ? loadDetect(this.instance.config) : null;
    m.efficientpose = this.instance.config.body.enabled && !this.models.efficientpose && ((_n = this.instance.config.body.modelPath) == null ? void 0 : _n.includes("efficientpose")) ? load14(this.instance.config) : null;
    m.movenet = this.instance.config.body.enabled && !this.models.movenet && ((_o = this.instance.config.body.modelPath) == null ? void 0 : _o.includes("movenet")) ? load16(this.instance.config) : null;
    m.posenet = this.instance.config.body.enabled && !this.models.posenet && ((_p = this.instance.config.body.modelPath) == null ? void 0 : _p.includes("posenet")) ? load18(this.instance.config) : null;
    m.handtrack = this.instance.config.hand.enabled && !this.models.handtrack && ((_r = (_q = this.instance.config.hand.detector) == null ? void 0 : _q.modelPath) == null ? void 0 : _r.includes("handtrack")) ? loadDetect3(this.instance.config) : null;
    m.handskeleton = this.instance.config.hand.enabled && this.instance.config.hand.landmarks && !this.models.handskeleton && ((_t = (_s = this.instance.config.hand.detector) == null ? void 0 : _s.modelPath) == null ? void 0 : _t.includes("handtrack")) ? loadSkeleton2(this.instance.config) : null;
    if (this.instance.config.hand.enabled && !this.models.handdetect && ((_v = (_u = this.instance.config.hand.detector) == null ? void 0 : _u.modelPath) == null ? void 0 : _v.includes("handdetect"))) {
      m.handdetect = loadDetect2(this.instance.config);
      m.handskeleton = loadSkeleton(this.instance.config);
    }
    m.centernet = this.instance.config.object.enabled && !this.models.centernet && ((_w = this.instance.config.object.modelPath) == null ? void 0 : _w.includes("centernet")) ? load13(this.instance.config) : null;
    m.nanodet = this.instance.config.object.enabled && !this.models.nanodet && ((_x = this.instance.config.object.modelPath) == null ? void 0 : _x.includes("nanodet")) ? load17(this.instance.config) : null;
    m.selfie = this.instance.config.segmentation.enabled && !this.models.selfie && ((_y = this.instance.config.segmentation.modelPath) == null ? void 0 : _y.includes("selfie")) ? load20(this.instance.config) : null;
    m.meet = this.instance.config.segmentation.enabled && !this.models.meet && ((_z = this.instance.config.segmentation.modelPath) == null ? void 0 : _z.includes("meet")) ? load15(this.instance.config) : null;
    m.rvm = this.instance.config.segmentation.enabled && !this.models.rvm && ((_A = this.instance.config.segmentation.modelPath) == null ? void 0 : _A.includes("rvm")) ? load19(this.instance.config) : null;
    for (const [model23, promise] of Object.entries(m)) {
      if (promise == null ? void 0 : promise["then"]) promise["then"]((val) => this.models[model23] = val);
    }
    await Promise.all(Object.values(m));
  }
  list() {
    const models3 = Object.keys(this.models).map((model23) => {
      var _a;
      return { name: model23, loaded: this.models[model23] !== null, size: 0, url: this.models[model23] ? (_a = this.models[model23]) == null ? void 0 : _a["modelUrl"] : null };
    });
    for (const m of models3) {
      const stats = Object.keys(modelStats).find((s) => s.startsWith(m.name));
      if (!stats) continue;
      m.size = modelStats[stats].sizeLoadedWeights;
      m.url = modelStats[stats].url;
    }
    return models3;
  }
  loaded() {
    const list = this.list();
    const loaded = list.filter((model23) => model23.loaded).map((model23) => model23.name);
    return loaded;
  }
  validate() {
    const missing = [];
    for (const defined of Object.keys(this.models)) {
      const model23 = this.models[defined];
      if (!model23) continue;
      const res = validateModel(this.instance, model23, defined);
      if (res) missing.push(res);
    }
    return missing;
  }
};

// src/result.ts
var empty = (error = null) => ({ face: [], performance: {}, timestamp: 0, width: 0, height: 0, error });

// src/util/interpolate.ts
var bufferedResult = empty();
var interpolateTime = 0;
function calc2(newResult) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  const t0 = now();
  if (!newResult) return empty();
  const elapsed = Date.now() - newResult.timestamp;
  const bufferedFactor = elapsed < 1e3 ? 8 - Math.log(elapsed + 1) : 1;
  if (newResult.canvas) bufferedResult.canvas = newResult.canvas;
  if (newResult.error) bufferedResult.error = newResult.error;
  if (!bufferedResult.face || newResult.face.length !== bufferedResult.face.length) {
    bufferedResult.face = JSON.parse(JSON.stringify(newResult.face));
  } else {
    for (let i = 0; i < newResult.face.length; i++) {
      const box = newResult.face[i].box.map((b, j) => ((bufferedFactor - 1) * bufferedResult.face[i].box[j] + b) / bufferedFactor);
      const boxRaw = newResult.face[i].boxRaw.map((b, j) => ((bufferedFactor - 1) * bufferedResult.face[i].boxRaw[j] + b) / bufferedFactor);
      let annotations2 = newResult.face[i].annotations;
      if (Object.keys(bufferedResult.face[i].annotations).length !== Object.keys(newResult.face[i].annotations).length) {
        bufferedResult.face[i].annotations = newResult.face[i].annotations;
        annotations2 = bufferedResult.face[i].annotations;
      } else if (newResult.face[i].annotations) {
        for (const key of Object.keys(newResult.face[i].annotations)) {
          annotations2[key] = ((_c = (_b = (_a = newResult.face[i]) == null ? void 0 : _a.annotations) == null ? void 0 : _b[key]) == null ? void 0 : _c[0]) ? newResult.face[i].annotations[key].map((val, j) => val.map((coord, k) => ((bufferedFactor - 1) * bufferedResult.face[i].annotations[key][j][k] + coord) / bufferedFactor)) : null;
        }
      }
      if (newResult.face[i].rotation) {
        const rotation = { matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0], angle: { roll: 0, yaw: 0, pitch: 0 }, gaze: { bearing: 0, strength: 0 } };
        rotation.matrix = (_d = newResult.face[i].rotation) == null ? void 0 : _d.matrix;
        rotation.angle = {
          roll: ((bufferedFactor - 1) * (((_f = (_e = bufferedResult.face[i].rotation) == null ? void 0 : _e.angle) == null ? void 0 : _f.roll) || 0) + (((_h = (_g = newResult.face[i].rotation) == null ? void 0 : _g.angle) == null ? void 0 : _h.roll) || 0)) / bufferedFactor,
          yaw: ((bufferedFactor - 1) * (((_j = (_i = bufferedResult.face[i].rotation) == null ? void 0 : _i.angle) == null ? void 0 : _j.yaw) || 0) + (((_l = (_k = newResult.face[i].rotation) == null ? void 0 : _k.angle) == null ? void 0 : _l.yaw) || 0)) / bufferedFactor,
          pitch: ((bufferedFactor - 1) * (((_n = (_m = bufferedResult.face[i].rotation) == null ? void 0 : _m.angle) == null ? void 0 : _n.pitch) || 0) + (((_p = (_o = newResult.face[i].rotation) == null ? void 0 : _o.angle) == null ? void 0 : _p.pitch) || 0)) / bufferedFactor
        };
        rotation.gaze = {
          // not fully correct due projection on circle, also causes wrap-around draw on jump from negative to positive
          bearing: ((bufferedFactor - 1) * (((_q = bufferedResult.face[i].rotation) == null ? void 0 : _q.gaze.bearing) || 0) + (((_r = newResult.face[i].rotation) == null ? void 0 : _r.gaze.bearing) || 0)) / bufferedFactor,
          strength: ((bufferedFactor - 1) * (((_s = bufferedResult.face[i].rotation) == null ? void 0 : _s.gaze.strength) || 0) + (((_t = newResult.face[i].rotation) == null ? void 0 : _t.gaze.strength) || 0)) / bufferedFactor
        };
        bufferedResult.face[i] = { ...newResult.face[i], rotation, box, boxRaw, annotations: annotations2 };
      } else {
        bufferedResult.face[i] = { ...newResult.face[i], box, boxRaw, annotations: annotations2 };
      }
    }
  }
  bufferedResult.width = newResult.width;
  bufferedResult.height = newResult.height;
  const t1 = now();
  interpolateTime = env.perfadd ? interpolateTime + Math.round(t1 - t0) : Math.round(t1 - t0);
  if (newResult.performance) bufferedResult.performance = { ...newResult.performance, interpolate: interpolateTime };
  return bufferedResult;
}

// src/util/webcam.ts
var WebCam = class {
  constructor() {
    // eslint-disable-line @typescript-eslint/no-extraneous-class
    /** current webcam configuration */
    __publicField(this, "config");
    /** instance of dom element associated with webcam stream */
    __publicField(this, "element");
    /** active webcam stream */
    __publicField(this, "stream");
    /** enumerated video devices */
    __publicField(this, "devices", []);
    __publicField(this, "enumerate", async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        this.devices = devices.filter((device) => device.kind === "videoinput");
      } catch (e) {
        this.devices = [];
      }
      return this.devices;
    });
    /** start method initializizes webcam stream and associates it with a dom video element */
    __publicField(this, "start", async (webcamConfig) => {
      var _a, _b;
      if (webcamConfig == null ? void 0 : webcamConfig.debug) this.config.debug = webcamConfig == null ? void 0 : webcamConfig.debug;
      if (webcamConfig == null ? void 0 : webcamConfig.crop) this.config.crop = webcamConfig == null ? void 0 : webcamConfig.crop;
      if (webcamConfig == null ? void 0 : webcamConfig.mode) this.config.mode = webcamConfig == null ? void 0 : webcamConfig.mode;
      if (webcamConfig == null ? void 0 : webcamConfig.width) this.config.width = webcamConfig == null ? void 0 : webcamConfig.width;
      if (webcamConfig == null ? void 0 : webcamConfig.height) this.config.height = webcamConfig == null ? void 0 : webcamConfig.height;
      if (webcamConfig == null ? void 0 : webcamConfig.id) this.config.id = webcamConfig == null ? void 0 : webcamConfig.id;
      if (webcamConfig == null ? void 0 : webcamConfig.element) {
        if (typeof webcamConfig.element === "string") {
          const el = document.getElementById(webcamConfig.element);
          if (el && el instanceof HTMLVideoElement) {
            this.element = el;
          } else {
            if (this.config.debug) log("webcam", "cannot get dom element", webcamConfig.element);
            return `webcam error: cannot get dom element: ${webcamConfig.element}`;
          }
        } else if (webcamConfig.element instanceof HTMLVideoElement) {
          this.element = webcamConfig.element;
        } else {
          if (this.config.debug) log("webcam", "unknown dom element", webcamConfig.element);
          return `webcam error: unknown dom element: ${webcamConfig.element}`;
        }
      } else {
        this.element = document.createElement("video");
      }
      const requestedConstraints = {
        audio: false,
        video: {
          facingMode: this.config.mode === "front" ? "user" : "environment",
          // @ts-ignore // resizeMode is still not defined in tslib
          resizeMode: this.config.crop ? "crop-and-scale" : "none"
        }
      };
      if (((_a = this.config) == null ? void 0 : _a.width) > 0) requestedConstraints.video.width = { ideal: this.config.width };
      if (((_b = this.config) == null ? void 0 : _b.height) > 0) requestedConstraints.video.height = { ideal: this.config.height };
      if (this.config.id) requestedConstraints.video.deviceId = this.config.id;
      this.element.addEventListener("play", () => {
        if (this.config.debug) log("webcam", "play");
      });
      this.element.addEventListener("pause", () => {
        if (this.config.debug) log("webcam", "pause");
      });
      this.element.addEventListener("click", async () => {
        if (!this.element || !this.stream) return;
        if (this.element.paused) await this.element.play();
        else this.element.pause();
      });
      if (!(navigator == null ? void 0 : navigator.mediaDevices)) {
        if (this.config.debug) log("webcam error", "no devices");
        return "webcam error: no devices";
      }
      try {
        this.stream = await navigator.mediaDevices.getUserMedia(requestedConstraints);
      } catch (err) {
        log("webcam", err);
        return `webcam error: ${err}`;
      }
      if (!this.stream) {
        if (this.config.debug) log("webcam error", "no stream");
        return "webcam error no stream";
      }
      this.element.srcObject = this.stream;
      const ready4 = new Promise((resolve) => {
        if (!this.element) resolve(false);
        else this.element.onloadeddata = () => resolve(true);
      });
      await ready4;
      await this.element.play();
      if (this.config.debug) {
        log("webcam", {
          width: this.width,
          height: this.height,
          label: this.label,
          stream: this.stream,
          track: this.track,
          settings: this.settings,
          constraints: this.constraints,
          capabilities: this.capabilities
        });
      }
      return `webcam: ${this.label}`;
    });
    /** pause webcam video method */
    __publicField(this, "pause", () => {
      if (this.element) this.element.pause();
    });
    /** play webcam video method */
    __publicField(this, "play", async () => {
      if (this.element) await this.element.play();
    });
    /** stop method stops active webcam stream track and disconnects webcam */
    __publicField(this, "stop", () => {
      if (this.config.debug) log("webcam", "stop");
      if (this.track) this.track.stop();
    });
    this.config = {
      element: void 0,
      debug: true,
      mode: "front",
      crop: false,
      width: 0,
      height: 0
    };
  }
  /** get active webcam stream track */
  get track() {
    if (!this.stream) return void 0;
    return this.stream.getVideoTracks()[0];
  }
  /** get webcam capabilities */
  get capabilities() {
    if (!this.track) return void 0;
    return this.track.getCapabilities ? this.track.getCapabilities() : void 0;
  }
  /** get webcam constraints */
  get constraints() {
    if (!this.track) return void 0;
    return this.track.getConstraints ? this.track.getConstraints() : void 0;
  }
  /** get webcam settings */
  get settings() {
    if (!this.stream) return void 0;
    const track = this.stream.getVideoTracks()[0];
    return track.getSettings ? track.getSettings() : void 0;
  }
  /** get webcam label */
  get label() {
    if (!this.track) return "";
    return this.track.label;
  }
  /** is webcam paused */
  get paused() {
    var _a;
    return ((_a = this.element) == null ? void 0 : _a.paused) || false;
  }
  /** webcam current width */
  get width() {
    var _a;
    return ((_a = this.element) == null ? void 0 : _a.videoWidth) || 0;
  }
  /** webcam current height */
  get height() {
    var _a;
    return ((_a = this.element) == null ? void 0 : _a.videoHeight) || 0;
  }
};

// src/sample.ts
var face2 = `
/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUA
AAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQu
bmV0IDQuMi4xMwAA/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxob
IxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgo
KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgBAAEAAwEhAAIRAQMRAf/E
AB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAE
EQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZH
SElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1
tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEB
AQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXET
IjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFla
Y2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXG
x8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+qaKACigApGOKAML
Xp8xlF5A7V4X8RtYs7PzfNImnx8sa8Kp9z3q2tEgp6angWs62ZZ5CTGoJ6DArGNz5p+UrID6EUrF
PUlW1EuN0XNW7PQ2L5j3JnoKXN0KijqNP0eYoqXBdgPuuo+ZPeupisWn2Jd4+0r924XgsQOCff3/
AJ1FzRKxDqGii6m3siiQ8F1XGfXI6YNWLfRbiRQMkcZI9fpTDluT2/h6Qy8gDPbtmtG38JeY480Z
5zSLUTZg8M28YwYxjAArXtdPt402qgHbpSaLWhma3o0Uqk7Nx9DWLaaVblgPs6qRyds2M/gRSQp9
zZOni2iWS2hlQ+kjYz9OMGrdjq89vIPPVhj+8M/lQyDq9P1WOYBlMZz1AOD+VdDaTiReOKulK0jO
tHmi0WDTlr0TyxRVhT8tJjIX+9SUxHXUV553BRQAVBcPhSBTSuxPY86+IGti0s5I7dsORy9fM3i6
8e8mfDO5P90ZrWWiJicNPpZZtxV/xrW0jQt4DOv6Vk2dEEdTY6BHuB25rpbPSo0QARjP0qTRI17W
wA/hFaMWmoQMgflQXYsDS142rU9tpqqenfNA7GgtihxkdKuRW6qMY/GkDZY8sY4Ap4hXbyB+VArk
EtuH4wPyrk/EGkOm+a3jw3suRQLc5i38SX9hJ9nnY+XnBUdPyNdFY6pa3KkkAE9l6f8AfJ/pSJT6
GhDmI+Zb4ZRycdv6ium0nUhKFydrelTsNnS2829RnrVgV6NKXNG55lWPLIM81Op+WrZkRMfmNNzT
A7GivPO4KKAEY4XNYWt3vkwPg4OK0giJdjw/xrqhm87Zs8tc7pX5A+leSajf6aHYJ50kn4AZpTep
rBWRm2Vobm4BXfyehPFdnpmnBFUY5rI2SN63tlToK0YI+KZpFF+3QdavwoKTLtoW0Toaswpk5pCb
LCxipAhoIuP2dKevHXoaYDylRyxhlwRQI4nxVoCXWZI1GfpXGtbSWjYPGP73+NIGupt6TqMsLruZ
ih4xnP5V09mQ+JLd8gn0xSYJnVaVdkook69K34zuUGunDS3Rx4qOzHVIp4rrOMY3NJQI7GivPO8K
KAILt9kZrz3xlebYiu8KCCWb0XvW0NFch6ysfO3jLVjfXLIn+pQkKorl7WxNxIPl71g2dUUdpo+l
pBGvHPet23iC8ihFosrxirkHQUFo0IF4FXI1O726CpKLacCrMJoJLYHAPpTwucHpSRJJ5e4AZI9x
UqpxzVpCuOC8cUpQUMRnXttuB4rjNdsYyeVwfXpmpGmcvcQyafMCFJjPY10eg34BUg4DcZP8jUO4
HaRq3lLNF+IHet7R7jz7c56rwa2wz9+xhiVeFy/T1PFegeaNPWigDsc0ZrzzvDNIaAM7VpNqdegr
xL4l6kywyRhseZ19lrdfAZL4jxYg3Fw20d63tJsdrDI5rm3Z3R0R0Mce1eKnQYAplIkWrMJ45oZS
NO3PHbNXIyfpSGWowSOasxLUiZdjFSqtNEMkUemKlAGKsRJjAppFAiORMjmsTVrNZEO4cfSoZSOD
1eJ7WXBUzQZ+7nkfSo7e2Ei+ZaMzxntjBX2NSU1Y6/wxqojiEFzkA8KTXYaUoWRyv3W5rSjpNHPX
+BmpSg8V6J5gUUAdhRXnneFFAGHrTfu5PpXzj8S70/aZtxzztXFbv4DKHxHI+H4GZiz9zxXXW8G3
GBXMjvLRXAx0oPGPSmMVeOnWrMTYpFI0bcg1fh54xmgovRcD3qxETSIZcRvzp+/BpEkqsBUqsM9K
q4Em4Gkxk0yRGXrVW6i8yFhkg+tJjRxGsWrxllkUMh9eK5uMz6bcebbnfG33kPcVkay2OntPKuo0
nhXI67c8qa7Lw3c+adjcEDGK1paSRhVV4s6A0or0jyRRQ1AHX0V553hRQBz+vNtt5z3xXzX8Qbdm
uic5YnOMdK3l8JnTXvlbwpYl+WySOgrp5YfLOOB9O1c62O7qQkc+9RsKChFPWp4DluOlSykaNruH
ArUgHShFNF2NT1qxGO3NBmyxGcE1N2560CFzjrUysO9JAPDDjFOVuKoQuSRTWouBkazbCa3cd8cV
wF7IISQccHBzUSWpV9C3o1x5b5GAjdQD1rs9DjC3kckbEhqKfxIzn8LOupRXqnkPccBSkUAzraK8
87wooA5rxMSI3HqK8B8bQl9Q8sffY5b/AAraXwkUviNrw9pH2W1ViMMRTdRjw4HpWNtDti9TPc4P
FQs2M5qdyyMHLcfjV63HTAoBGtap0wK0YxigpsuRDtVhVYd6GQydVwwIqdRnqKCR23I5pCMUW6gD
YNKuetAEise9KTxQBWuFyhrznxNZkXjFeN3I+tTIZg2OqmzmxNF0PO3vXp/g2+hukVl4zyPanTXv
JmVR+60dpThXpnlPceopWFAbnV0V553hSGgRynjC5FujOey14Ssp1HxNmTnc+a3kvcIpv37HoEYQ
QmMdVHSsnVbYJF5jVk0dsNzlruVIsl2wKxbjWrVHILjg1CRbZJb+ILHPzyhfStODWLQgFJFYd+el
UJM27HUIXxhga1Y5lLVLKLkMnoauxnPPrSEx7ShF+Y/n2qrc6xBbhizDAqkK1zJuvG9nbg8ZA681
ly/Ei052RO3uKAsZlx8QGd8xxvt9Aa1NH8dK7AXMcip64zigdkdrZX8F7EJLdwwNXMkrz1qRMRly
CK4TxmpidWI49felPYSOMmi80NIoOV6qRzXYeA5SskYPfirpfEjGr8LPWVHyD6U4CvQPL3ZItOYc
UDOoNFeed4Uhpks4H4iE/Z5MeleMeGULeLgjds10S+BGdL+Jc9OSBU2Huc5Nc74yvUtrcDBrJnZF
63PJdXvLy/lKWw46bvQVz82jXhkLO5Y+9ZlsYthcRnbIjY9R3q3awTRkEM3WmJI6C0ea3dGRsr1x
XY6TqW9FLHnjrUs0izpLK5DDjofSta3ckH09KRUkZuuTvFGdvPauE1Y3U6Mqbssf/rUxHPTaJPK2
ZmJPbBqzY6DCZh5xJC9s9aBJHU6dpemJjfEmfetJtI0+VPkUr/unFOxdiextHs33W07YHQHk11mk
Xb3KbZ1xIvcd6LEyWho4Nct41sTPYb16ipexCPPZN+wYGCvH1rrPAEJmvkPoc1VL4kZVvgZ6yFwK
cBXoHkkqinFaVyzo80GuE7WJRQSziPiGdthK5HQV4x4J/wBI8WPIewNdEvgRNL42emO/yj1UHNef
eNpRczbC+I17DvWT2OqJxc0sMK4TCisy41q0hfEkqj8aixdwTXNOlwvmqD9anS9tXH7uVG+hosO4
/wC0oOhrR0+6G4YNIEzsNEuCxAPNdjZruA4xxUmjINSjURksOlcbqFykbnjFA1sYGoassaknCqO5
rl7rxhGm7yBnBxuJq0rkSlYpw+NLlsfd5P8AerVsvHEqSBHwPVgcgVpyMyVXU3rXxcHYETAk+hru
/DWti6ZSTyOKzZqndHaxvvUGq2rQ+dYyqR24qWI8dvbr7LqDxyDAzXpvw6FvIxePGSM06Xxoyr/A
zviKFHNegeX1J41zUhXioGbuaSuM6wpCaBHG/EcA6HN/exxXjXw2jL67cv8A3Qa6H8CFR+NnoWpO
I4XI44rxLxrqjQzSEsQM1gdSPM9U1uR1YbmWIdXHf2rmpIb67YS28UrRlsLI3c/jW0VZGUpO5pW1
jfLNOjahawzwReYI5cjzMkDavHJ5/SrVv9uhtPtVxCPLBwzxnlT9KGghLU3tKvvPjHzbl7EGuisJ
GRxWLOg7nRXJEbDjmvSNK+aFSfSoZr0KutRkphc4NcRrdkVjL9aVio7Hk3iqS8ubhrWzUlsZY9kG
cZNc5D4aee5MclzJIFTzHAO0MfatqSOWu7bFS1srDUZEis0vIZoUxPvfcC+4/dx2xjr712XiTwXb
WmlQ6hol3cRhoFd4rlg3zY5wR0GelavQwjq7GD4etdVvSnk2wAB+9v8A8mvcfA2kXiRo0/UdcDis
ZnTTulqeoWqbUAJqWUb42X1FZlnjfjSwlGrr5S/eNdD4RkvLAAQ4yRyaUZcruVKl7TQ9I0G+mnzH
ckFwM8VuIK7ac3KF2eXiKapz5UWYxipNtMyNejNch0jSar3cjR27uoyQCRVRWom9DxTx54gu5fMi
lbKdMVjfCZPNlv5v9rFbVHpYqjGzbOn8SzFI9o715L4u0r7arYzk+lYdTqSujy7U/C0u4vHk+WwO
xuh9q3J9dgvbdVukMV1EwbDDgn04rZMwlHoZ+orZ6hfQ3RWVnQYCgZAq+8U0ln5NtBsV2yxYcfgK
JtW0CnB31LlroVwJ1nQLGDjeP7w+lb0dsFxjrWB0tHS6NuWPJ6A16ToUm63T3Gallr4S7cxiTjrX
PaxaF7dlVeSMUhxZ5jd+H7qCa4eF3DSE5x3zXN3Wk6jbyeaiFWUY6ZyPStYS5SalPmVipFbX0E4c
W0alvmPHJrag0rVvEE6LdljGpG2NRtQD+tW5XMI0uU9M8NeFo9PiQhecDIIrtrOMIoG3H4VlJm9t
C6CB06VPGM1IHLeItGS6uw+ORT7e3jsbQvj7gzUNam0JaWE+HN7NqOqX80n3FO1RXo8YzXdS+BHk
4z+KyzGPapcU2YIv7qQtiuaxvcaWqG4O6FwfSrS1JbPnrxoxkv7qIfejcitj4V2f2exumI+8+aKn
xHTT+G5d8Txlm4rjLxMsQwzWT3OiK0Mm6sEkVsAcjFc1d+FEmlGwEDPQVopaEuOpr6f4ZWNAu3tW
vHpAj5ZQcUFIWaDjGMVUMQ3cVDBmvbhY7QAV2nh+T/R1yeKhlrY31+b61FcQK6nIoJMi401WblRi
qr6PCw5UYq9y+YgOgWzNkRrx3xWjp+nx2v3FQcelAbmko9anQ4GBUNisPHWr1qMrQhS2K11HvmYV
hamcxSRZ5xRIqluS/DKAQQXZxyXrvo2FdlL4EeZjH+/ZbjNSZpswLNBrE1Gt7VE4ODVIlnh/j61F
j4lmeTGyUbq6LwdEqWbeX0YbhSqfEddP4Bddj4JIrhL5d8h7VjI6oLQqKNzelWre3yc4/ClFjaL6
wqBxxUUxwCKu5BmXRA6c+9ZjP83FSBoQuPs4BrsNBlUW659KmRrDY6G1lyQtW3Hy0lqQ1qVJnAbm
oy3b9KYJCqRj3o4zRctIlhjLHmpSuOBRbQOpLGpPFaES7UqkZzKN1KsEc87/AHUUmvPLTVGv72aQ
k7WJwKmRrQ3ud74Ltilgz4++2a6iNDXdS0gjyMU71my7GpqTbxSbMki3SViajTTHqkSeR/GeyZmg
nQHkEE1S+F+oPPavBL96I4/Cia1udVF+4dVrkW+Fq8+v4tjMDWUkdVJ6WM0cNV+F+MVmjUcZgqnP
1qpNNnkcVRLiZtxIS1UzzIF7mghlxUZpVQdq6nTVdAoAOKzkbQWhvwM6gMM1twOJYx3NOJE11Kt1
H1/pVVlwBkk+9NocXoOQ45FPj+fkUJFF2NSB700v/hTEty5ZpkjvVyUgcCq6GM9zC14/8Se6GcZQ
1574Xs5WkI2HBPHFQ1dm1KSSZ7Rotn9l0+KPHIHNacae1dy0Vjxaj5ptlhVp+2s2CJ9ppCKzuWNx
zSFc1SYrHNeNdIGpaYw25ZeRXmvheyk0jVpEdcLJ0q3ZxNKTa0O3vQHg/DNcHrsJDmsmjspnNzNt
fFIJ24GazOhC+azDmgZIOOKBsp3J2qSaZodubq58yQ4QAnmhGT3NO18pb7BORmu205LfYpyKVkWp
Oxr5gKYWoIZWgfGfloFq1qTPLubnGO1RPtxg4P0oBAkY/hBz6VNDDkZ6AU0W2WSdqkdKr9ZOaGSj
VtcLHmnOcgmmYvcz7mBLy3MbdD1q9ouiRK6bUAVeelOC1InPlidSsWMDFOCEdq3uefykqrinYqGy
rFvApMVka2DAowKAsMkRXQqwyDXn/iWyitNQ3qPl6itIvRoF8RXinW4tQ6HI6GuW8SIVBPalc6qe
5x9x97r3qruwTjrWZ0ksZ9TUmcDNAmZ9/wAoao63rR0+w22MLPtAzt6mghmfofiB76LdJBJBIp5D
d/oa7bSdWLIPnpDi9TM8TeKdas51XTbIyxd3J/pXS+E/EFxqNoFu7do5OmD60maHWrnZyDRkn/69
MlEyOR0xntVoNx+FUgYjPxg4FLCuWDZyKQr2RoRnP0qO+nEFpJITgAUzLqZnhu6+0rknOTXpOmwJ
Fbrt5yMmnHYyr6Oxb2ijaKLnPYMClwKQWK3n0hn+lachHOJ9pNNN0apQFzsY10a4v4hXQh0xpieQ
MA1XLZNjhK80cT8OdV+3Wl3A7ZZJCw+hrR1qLcjZ/CsbnfHRnFXseHJArOYYbrUs1uPhYbuatqFP
ByfSkMq3UIINYkto+87Tx6GkSxfsDbflGD7CtTw/pk4nzITtPIFMFudsukh4Rxz71paTpKwP5jcn
0qTRy0NORMDgVCqewoJTJgAoxjntTiTu7fWmFxAcnn1q3EPl+X8KZMi4gKqB1Peob/Tv7Us5bfeU
yOoq4R5nYxqT5I8xieH9J1DTbvyJELRg8ODwa9Ms5mSFV9BWiptbnNVrKdmif7Q1KLg96XIZc5Is
pNL5pqeUrmMtZs0jzV08phchaY00zH1p2ZNxjS1g+LdJOt6U9ssmxjyGp2urDjLlaZzng/wUPDqz
TSTmWeTrjpVjVk3Rvjr2rnqQ5dDvo1XUd2cTqSNk9OKxXGCeKxZ1DAxHTr2q5C/y8GokUhsz54qu
uCxzSQjQ0+FZblR2ro4bZYiMVQ0dBb7Qi5x0qzuG5QOh71LYErDufpSeWrHnimIXbjkUjLkH1Hem
gGxryc+tXI19KYmWegq9YLiLJ7mtqS945cS7QsWehqxA9dEjz4krPSxyZqbFFhGxUm6smjRM55Lk
HvSvNxXTY57kLT+9MNwKdhXGm5FIbkU7Bca1wMEVhaiuQcVhXWiZ14R6tHGanGBI2OtYkqEHjgVy
s9ErEeo6UBsHipKEZs5qpPdRxcbhx70NCSuybTNWihc5brW9Fq6vjMnFSdEIdDRi8RRKygZbHFbu
m6nb3RA3gMegNJhOm0jbXGOoxTuCc1Rz3FyoGKawz9KaAVcZqeMgCmIkB4FaUTbYwB6V00Fuzixb
0SFMuDU8Mlbs4UPeXHeiOXkUrDuXYnyKk3cVk0ap6HMxxketSMhrcwRC0dMMZFMQ3yzSeVQAeUaz
9Vj8uPd271nVV4m+GdpnHX67pCeKyLtBtNcR6xlk9RVeWTb3qRnO6trgttyIfm71z7ai8j7/AJmN
DNqUVa5Yi1AnjynHuBV+11YJhWWXcP8AZNSzqgmaEerSsf3NtIQP4mGKtRavdRgMIpVI9KjU0a7n
R6T43uYQI7qN2Tpkqciu503VVuQGAYZHQjFVc4alPlZrpKGAznpTwxOc9+lWjIlUACnM4XApiLNk
nmvnsK0NvpXZRVonmYqV52GsmanhXitTmFkSiJTSAvwrxUxXIrJ7miOfjf1pzNWxkRlqYWpgJupu
6gQbuahvIxPA6eo4pNXVioS5WmefakGhndH4INZs5DJXA10PaTurmLO21uKpSZqGMoXGnRzBiyjd
9Kx5rcQS428fSkjanLoaOliHGZFB56VswW+mtPufcBsGOAfmxz+tFkd8HpoaUx09FAtFY8DO71qb
Sms/Nb7RbecG6AEjFLS5c78t+p0djpVs9wsyQiJAdyr1rW+zqjErzSe559Sbk9S3C+MA1bjbgE1S
MSXzMVG0vNUI2tPKrAuCMnrVzNd0PhR49W/O2xrHmp4TxVMzQshpIzzQBehqesnuaI5VGzT2bitz
FEbNTC1ADS1JupgG6l3UAc14s04yR/aYRll+8BXCtLncDXFWjys9TCz5oW7GddH5qqNzWDOgQnC8
VSuo1kHzAGkPYopEY2+RWxV23Vzj5G/Kg3jWaNazhZuqNXS6TaKhB2c0jR1nJWOlhOxRxU4YkCgx
Y0OQatQyDbyaaFYe8uF4NY3iC9ltbVGj43NTIL3h7WzMihjzXVQXYYDdW9Cf2WcOJpfaRZ3g9KsQ
mupnCLIabGeaAL0LcVY3cVmzRHIxtUhetzEjZqjLUAIWpN1ArhupwagAfDKQ3Q1594v0c2bm6tx+
5Y8j+6ayrR5onThp8s7dzkZjuqAAmuBnqC7c0iwgtzSA0rWzjfGRW3ZadDu4AoNYo2rfS4v7orSh
05UA2r0pDbsTm29KRottBNyJ0wpJ9KhD7f6U0ikNWffIFBz60zVUW52ow4UcUN6EPcx44WsbgOmd
ua7TT5Bd24KHnFKnLlZFSN4koluLdueRWvp14swweG9DXoxldHlTjYtzGoo25qzEvwtUxas2jRPQ
5CNqkLVsYoYzUzdQA3dSFqBBmnqaBhuqhriCXTpVIzxUz+Fl03aSPI9QTypW2/dz0qKNw3SvOPZR
Mqin8VLKRcs3O4Cuk0w/MDjt1NBtHY6O2IIHY1pxgFaETIRwMkjtVSUEk4570MlFW5bap6dKzWm8
1tqH8aY+hp2FvGoGayNevVt7/ap4xzUvYjqTLtvLPcvJxSaVcyWsxTnFZlnT2t15xHmCtOBYwQy4
B9q7cPO+jPPxFO2qLEj5HWo42+aus4HpoX4W4FTF+KlotbHII9SFuK0MUNZqiLUDE3UbqBBupwag
Bc1DefPbyD/ZND2KjujyPWlKzuPesRZjHJXms9lMuw3StjnmphKDSLTJ7OfE3JrpbO4GQc9qlnRA
3LO82k5NbFvdADkjBoCSHyXIIIzgVQvdRigT7wzjgUzO1jHknlvG7qnp61etYFQDIpCZoqVijzXn
3iC8EmsOuaCGb/heR/s0ijkVv6fbxy3QMg5xmsnuX0Ldzut3+UYTPWk+2GJSe+M1pFtamcldalmx
1eO4XaThhWnC+TXqR2PHqL3maUJ4qRjxSEjj42qXdxVmaGs1MJoATfSbqBAG5p6mgAzTJTmNvpQU
tzzHXY83D/U1zF5FhjgV5r3Pa6FMsV5HWnLe7RhqBRdmTwagN2d2K2rPU1C5LAnPrUs6Iysbdrq6
f3gK0BrUKj/WClY05iM6xLOcQAj3NT29uznfKSzHuadzNu7NSBFjHNSm5VO9IRnajqoWMhTzXFtA
bvUfMduSeg702Qz0rS7FbTToQFwzjJqaGTFyfK5PQViyzUuFmuIdgGABya5u/vTaN5cnUHFUmLoZ
zyskwlgJweSK6zQdUEwVJeGr0aUrxPLxEfe0OrhPAqVjxWhznGRtUwatDK4jNxURbmkAm6jNABup
6tQAFqhupNtu59qUnZFwV5JHnWsHdIx96w5lz15rzT2uhRmt85xWbcxMnUGmZlB0bdxmrNvFIcfM
350mWjbs7YkDJY/jW5ZWW4jikWkdNp9mqYJFaJdEHHakUULu/VB1rLn1Ld/FgetMGYd/qWSQmSa0
/AemS32pfa7piLeLkg9z6UmQtz0W7uQ2cZx0A9BVzR7cAea6j2rPqX0L99KRat5A6Dk1wOoKZ52a
YfMORTYRLujiGWEq6/NWza2yKQVHNdOHerRy4laJo6TTnbbtb8KuM3Fdh5z3OJjbmpt3FaMxAtUZ
agBN1GaQBzTwaAAms3VbjERUGsa07RsdeFpuUuY4jUjljWTKK4j02RE4IpJYFk6imQkVl0xWarsO
mAEcUi0bNnZBR0rWtoguMCkUi21wI161mXuocEKaYXMS4u+pY/hVCSWSY4HT0pEmlouiSahdpEBl
mOceleiwWcNjClvHgJH97Hc1EmVFFi3Czy7mwIl/WtJbjP7uLgd/apQ2VNVvtsBhiPzdK5S4nAuR
nqOCaTGi9pcytPlU+XpmumtWII44rah8ZjiNIXRuWeNvvViQ/LXpJWPJbu7nCRvVkNxVsxBmqJmo
EPiXca0YLMuOlJsuKuPlsSi5IrNuG8s4HWs5VEkbwoOTKsk+FJY4rC1K53k1xTk5O7PSpwVNWRzt
4cms+WpKICtSLTETQj5q0YeBSGiys23pUguGxQMq3E59ayrm4x3yaAKiRtO2WPHcmhruKFxFajzZ
ScA44qRHoXhuMaLpxaUg6hcDLMf4F9KlhuDeXGASIl+8azZslYma68y48m1+7nFW5rtbRNhb5z1p
iMKbUg0zuW4A4rPgb7VdKXOMmpA7HRbMS7nUYiUda0lkQOBngVrS+JGdbWLRt2bAx5BqeQ/LXpnj
PQ4GJ+ashuK0MhWaoWcA0AaOmASMK7jRNPWYBmHyiuepO2x10qfcv6vYxCzYqoGK4HVYVTJrmb5l
c6oaM5TUJ8EgGsG4kLNUHT0M64OaqMMikSRsuKbnFMRLG3zVehOaGNE445NNlnVFpDMu6uie9Vo1
8z5mOAOST2pDK91cNN+5tsrH3PrW54a06KxT7fdrlh/q1Pc+tJ6IUdZGvHPLezMcnBOWbsPap5r3
ylFtbdT1xUWNWzU0/Zbwlgfmx8zGsHWtRHmMqE59aAMyNifvHPc1f0gtPdqkY5JosJHeNci2tktY
euPnNY+oXWZEVJNrZ9aun8SIq/CzodHuriIokhDIR1ronbKZr0o6o8ipoz//2Q==`;
var body2 = `
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
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAa2p1UYo5adbz+xbxMlvqJ1OqjDHLXree0ejmzNrWm953tPmTPWbWneZ7yoy5YhjrXXTjH8s75N
mtkyxt0VZM2/m175N1V03yTKubMLXVXybeYLLX2VXy7eam+b0bOg4VquJW+rry4/O9uyZOq3UjVm
9r25axMzPaIdvhns1kzbZddM0p5Y47z8/R2+HcF03Doi1a8+Xzvbv+TotJnjDXkt+K8ODHp8cY8N
IpSO0RCwF2YAAAAAAAAACvUZYw6fJkntWN3k8dfHz2vLucdz8mkjFE9bz1+UOZosX1UzPm0nqI/W
MYo9FlcPNklfFGeH/NshLGun+Cz6PtHZtVZWlRLS+jxPkRpIn7rdoupHTdA5s6SI+7H6Mfo+32Y2
+To3neSIiZ7A0IjPXpXLePlMotGW3272t85datKzHZjbTVnsDj+FG/2Y/RlGP4R+jo20u7H6N1Ql
o+H8I/REY957R+jpfReiK6eOYHLtj2tttH6KrY/6Y/R2c+kjeJiFVtLG24hxpw7/AHY/RRkw9O37
O99Hrt1YX0tfOBLjcGp4XF8c+u8fs9c4dcVcGemSI61nd3IneN1orQAAAAAAAAAAAAABFqxes1tE
TE9JiUgPKcX4RbRXnNgiZwWnrH4XPi28PdXpW9JraImsxtMS8pxXhF9DecuGJtgmf+1TWW2N/la1
L7N7T5e3Vy6W3hsYcvLbqzbO9jvvCzvDR0+XeO7crO6FmGSvRThy/RtVXJ92elvk2rRvDUzU7pl4
izsd2J3jeBpcNz+Lg5LT7+Pp+Xk3W7js5eAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs0NTrN96Yp6edkW8Wzm6+LNTq4pvTHO9vOfRoWtt
1mes95YWvs1s2fZldddOczLPLn2ju0MmebT3YZc2/mpm3qqllN1drsbZIhr3yzvtHf4AsvlYYseb
V5Yx4KTe0+UQ6nDvZ3UazbJqd8OKeu33peq0eh0+hxcmnxxWPOfOfm0mP+steT/ji8N9mKY9suum
L37+HHaPm9DSlaVitKxWsdohI0Y22gAgAAAAAAAAAABXnyRhw3yT92Nwef4xm8bVzET0rPJH5d12
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
AOZE/OsPS29nuH27YrV+VpeV9pdPXhOtw49NG9Mld55+vXcTPd42I47qo7xSfyWV9oM8d8VJ/VxM
d8l46xWF9cV7en6o/qLfxp2I9ob+eCv/AHMo9op89P8A/wBORGmyT5R+qfo2X8P7n9Q/jTsx7RR5
6ef+4/8AuHftg/8A6cWcOSO9J/WEbWr3pY7Efzp2Lcfv5YK/9zWy8d1E/ZpSv5Oba1/+Hb9lc+LP
bFt87I7E/wAabWbiurvEx4nL/pjZzc2bJkn372t85ZXx55/BX85lucC0vPxnTxlnnjm32mOiZqUu
LJ2p4TwnVavNWaYbRTfre0bQ99pcH0bT0xb78vmtiIiNojaErMwAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAHnfarF7umzRHaZrLjYrdIen9ocPi8JyTt1xzF4eUw23rCm3R4r6bMy
wt6kdTaWLdjswmNoZontsCm0K5XWjopnuDC0dGpqG5bs08/daKV672MjbSaif6oh6Z5f2LtvptRX
0tEvUN3Jfo8f7cYve0eX4zV7B5z20xc/C8eSPuZIRficfXlcPaG7ino08HWIbePpLF2NuiyOyrHK
3fZFSwuovHVfaVF4QK5YWTM9UT0EKry6Ps1Tn4zjn8NZn9nOtLseydObiWW34cf918fWfk+PYANn
KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq1WKM+ly4p+/WYeBxTNd6zG0xO0
vobw3FcP0bi2em20Tbmj5Srr418V9sa2Z7qKyzi07MXUylhaU7yjqhLCeiq3ddaFNxFYW7NLNG8t
zya+WO6Va9J7FW66mvwidnrXiPY3Ny8RyUn71Jj9Ht3RPjk19HK9pMHj8D1ER3rHN+jqqtTjjNps
uOe16zAifXzfTz7kNyndpYazS9qT0mszDdoxrsi6m8LazMq6zDOsq1ZEyrt1WWlXaUCqyq0rbKbi
Fdp6PReyFd8uqv8ACsfy83aXrPZHHto89/xX2/SP/dpj6y8vx6EBq5gAAAAAAAAAAAAAAAAAAAAA
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
NO67NbkhzNVnmInqzaOZrL93JyZeV0M1++7S02jvxDWxhxx033tPpC8Z6rrezWjmZyazJG2/u03h
2vFibTHoqvamiwVwY+nLGzV0+SZ1Mx8G0/45tOhzJ5lXMc3UVXRdlF1HP+iYsDPLPPy49/tz1+Te
pSIr0ho6ak5Ms5J8o2q6NImOrHV7XX488ypzTtHXo0s9t6zG7c1G1qz6ubeZiZ3UatXJG3yauSO7
cvMTEx5tPLb3prPRMVr0HB8vicNxf0+7+kt+LOJwTJyY/Bnz3tH93X36N58cWvq6LSyiyndMSlC7
mZcymLJiwLosmJVRLKLAtiU7q4lMSCzc3YxJuDMRuAlKAEgAAAlAkAAAAAABKAEgAAAAAJAAAAAA
AAAAAAAEgAAAAAAAAAAAAAkAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAhIAAACAAAASgAAAAAAEAAAA
hGzJAImGMwzQDDZjNVuyNgUTVhNGxysZqDVmiu1G5NN2M4waM0+DCaN2cbGcQNGaMZq3JxMJxA1J
qx2bU4kU09slorWNwa20z02RXHbJbl26QvtFovbHWkxEdJt5y2MOHlr2U1W3jx+1hiw8vSO63lmI
XRTaEWmtY6snRHO1VpmJ+DjavpSZl2s8b7y4HFcnh0n0gha5ebJN55KRM2mdoiPN6fh+kpwXh0Wy
RHj5Otp/s5Ps1p62y31+em9aTMYt/OfVfxTiPjZ52naI7fBrI5t66xz5+a1rW7yx0eSL6iZjtEOX
qNbSletom3lENjh2fbHzbbWt3iVozruc+5ztWubf4M4ybpQ2Oboyrva0Vjza8WdDR4OkXt3n9ldX
kaePP9VtYqctYhdvt5oivTeCZ2YOxXk6ubqMfV0b9mrljfqlFcq88k7z2U5axeItDa1OPessuC8P
ya7XRWYnwqdbT/ZMilvIu4dpslNdixXja8Y5tt85djZdbDWnGOesRtXFtuw6T27No5Kx2OrKYQlC
ExKJgBnEpiyvdlEgsizKLKollFgWxLKJVRLKJBbEp3VxLKJBnuMWQJEbpBIAAAJAAAABIAAAAAAA
lAJAAAAAAAAAAAAAASAAAAAAAAAAAAAJAAAABAJABAlAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAA
AAABAJQAAAAgAABAAI2EoBGyJhkgGPKxmqxAKpownHC+YRMdN5BrTj67R3bOn01o7p01Iv71u89o
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
2Q==`;

// src/warmup.ts
async function warmupBitmap(instance) {
  const b64toBlob = (base64, type = "application/octet-stream") => fetch(`data:${type};base64,${base64}`).then((res2) => res2.blob());
  let blob;
  let res;
  switch (instance.config.warmup) {
    case "face":
      blob = await b64toBlob(face2);
      break;
    case "body":
    case "full":
      blob = await b64toBlob(body2);
      break;
    default:
      blob = null;
  }
  if (blob) {
    const bitmap = await createImageBitmap(blob);
    res = await instance.detect(bitmap, instance.config);
    bitmap.close();
  }
  return res;
}
async function warmupCanvas(instance) {
  return new Promise((resolve) => {
    let src;
    switch (instance.config.warmup) {
      case "face":
        src = "data:image/jpeg;base64," + face2;
        break;
      case "full":
      case "body":
        src = "data:image/jpeg;base64," + body2;
        break;
      default:
        src = "";
    }
    let img;
    if (typeof Image !== "undefined") img = new Image();
    else if (env.Image) img = new env.Image();
    else {
      resolve(void 0);
      return;
    }
    img.onload = async () => {
      const canvas3 = canvas(img.naturalWidth, img.naturalHeight);
      if (!canvas3) {
        log("Warmup: Canvas not found");
        resolve(void 0);
      } else {
        const ctx = canvas3.getContext("2d");
        if (ctx) ctx.drawImage(img, 0, 0);
        const tensor7 = await instance.image(canvas3, true);
        const res = tensor7.tensor ? await instance.detect(tensor7.tensor, instance.config) : void 0;
        resolve(res);
      }
    };
    if (src) img.src = src;
    else resolve(void 0);
  });
}
async function warmupNode(instance) {
  const atob = (str) => Buffer.from(str, "base64");
  let img;
  if (instance.config.warmup === "face") img = atob(face2);
  else img = atob(body2);
  let res;
  if ("node" in tfjs_esm_exports && tfjs_esm_exports.getBackend() === "tensorflow") {
    const data = node.decodeJpeg(img);
    const expanded = tfjs_esm_exports.expandDims(data, 0);
    instance.tf.dispose(data);
    res = await instance.detect(expanded, instance.config);
    instance.tf.dispose(expanded);
  } else {
    if (instance.config.debug) log("Warmup tfjs-node not loaded");
  }
  return res;
}
async function runInference(instance) {
  let res;
  if (typeof createImageBitmap === "function") res = await warmupBitmap(instance);
  else if (typeof Image !== "undefined" || env.Canvas !== void 0) res = await warmupCanvas(instance);
  else res = await warmupNode(instance);
  return res;
}
async function runCompile(instance) {
  var _a, _b, _c, _d;
  if (!tfjs_esm_exports.env().flagRegistry.ENGINE_COMPILE_ONLY) return;
  const backendType = tfjs_esm_exports.getBackend();
  const webGLBackend = tfjs_esm_exports.backend();
  if (backendType !== "webgl" && backendType !== "humangl" || !(webGLBackend == null ? void 0 : webGLBackend["checkCompileCompletion"])) {
    return;
  }
  tfjs_esm_exports.env().set("ENGINE_COMPILE_ONLY", true);
  const numTensorsStart = tfjs_esm_exports.engine().state.numTensors;
  const compiledModels = [];
  for (const [modelName, model23] of Object.entries(instance.models.models)) {
    if (!model23) continue;
    const shape = (model23 == null ? void 0 : model23.modelSignature) && ((_b = (_a = model23 == null ? void 0 : model23.inputs) == null ? void 0 : _a[0]) == null ? void 0 : _b.shape) ? [...model23.inputs[0].shape] : [1, 64, 64, 3];
    const dtype = (model23 == null ? void 0 : model23.modelSignature) && ((_d = (_c = model23 == null ? void 0 : model23.inputs) == null ? void 0 : _c[0]) == null ? void 0 : _d.dtype) ? model23.inputs[0].dtype : "float32";
    for (let dim = 0; dim < shape.length; dim++) {
      if (shape[dim] === -1) shape[dim] = dim === 0 ? 1 : 64;
    }
    const tensor7 = tfjs_esm_exports.zeros(shape, dtype);
    try {
      const res = model23.execute(tensor7);
      compiledModels.push(modelName);
      if (Array.isArray(res)) res.forEach((t2) => tfjs_esm_exports.dispose(t2));
      else tfjs_esm_exports.dispose(res);
    } catch (e) {
      if (instance.config.debug) log("compile fail model:", modelName);
    }
    tfjs_esm_exports.dispose(tensor7);
  }
  const kernels = await webGLBackend["checkCompileCompletionAsync"]();
  webGLBackend["getUniformLocations"]();
  if (instance.config.debug) log("compile pass:", { models: compiledModels, kernels: kernels.length });
  tfjs_esm_exports.env().set("ENGINE_COMPILE_ONLY", false);
  const numTensorsEnd = tfjs_esm_exports.engine().state.numTensors;
  if (numTensorsEnd - numTensorsStart > 0) log("tensor leak:", numTensorsEnd - numTensorsStart);
}
async function warmup(instance, userConfig) {
  await check(instance, false);
  const t0 = now();
  instance.state = "warmup";
  if (userConfig) instance.config = mergeDeep(instance.config, userConfig);
  if (!instance.config.warmup || instance.config.warmup.length === 0 || instance.config.warmup === "none") {
    return empty();
  }
  return new Promise(async (resolve) => {
    await instance.models.load();
    await tfjs_esm_exports.ready();
    await runCompile(instance);
    const res = await runInference(instance);
    const t1 = now();
    if (instance.config.debug) log("warmup", instance.config.warmup, Math.round(t1 - t0), "ms");
    instance.emit("warmup");
    resolve(res);
  });
}

// src/human.ts
var _numTensors, _analyzeMemoryLeaks, _checkSanity, _sanity, _loops;
var Human = class {
  // definition end
  /** Constructor for **Human** library that is futher used for all operations
   * @param userConfig - user configuration object {@link Config}
   */
  constructor(userConfig) {
    /** Current version of Human library in *semver* format */
    __publicField(this, "version");
    /** Current configuration
     * - Defaults: [config](https://github.com/vladmandic/human/blob/main/src/config.ts#L262)
     */
    __publicField(this, "config");
    /** Last known result of detect run
     * - Can be accessed anytime after initial detection
    */
    __publicField(this, "result");
    /** Current state of Human library
     * - Can be polled to determine operations that are currently executed
     * - Progresses through: 'config', 'check', 'backend', 'load', 'run:<model>', 'idle'
     */
    __publicField(this, "state");
    /** currenty processed image tensor and canvas */
    __publicField(this, "process");
    /** Instance of TensorFlow/JS used by Human
     *  - Can be embedded or externally provided
     * [TFJS API](https://js.tensorflow.org/api/latest/)
     */
    __publicField(this, "tf");
    /** Object containing environment information used for diagnostics */
    __publicField(this, "env", env);
    /** Draw helper classes that can draw detected objects on canvas using specified draw
     * - canvas: draws input to canvas
     * - options: are global settings for all draw operations, can be overriden for each draw method {@link DrawOptions}
     * - face, body, hand, gesture, object, person: draws detected results as overlays on canvas
     */
    // draw: { canvas: typeof draw.canvas, face: typeof draw.face, body: typeof draw.body, hand: typeof draw.hand, gesture: typeof draw.gesture, object: typeof draw.object, person: typeof draw.person, all: typeof draw.all, options: DrawOptions };
    __publicField(this, "draw", draw_exports);
    /** Face Matching
     * - similarity: compare two face descriptors and return similarity index
     * - distance: compare two face descriptors and return raw calculated differences
     * - find: compare face descriptor to array of face descriptors and return best match
     */
    __publicField(this, "match", match_exports);
    /** Currently loaded models
     * @internal
     * {@link models#Models}
    */
    __publicField(this, "models");
    /** Container for events dispatched by Human
     * Possible events:
     * - `create`: triggered when Human object is instantiated
     * - `load`: triggered when models are loaded (explicitly or on-demand)
     * - `image`: triggered when input image is processed
     * - `result`: triggered when detection is complete
     * - `warmup`: triggered when warmup is complete
     * - `error`: triggered on some errors
     */
    __publicField(this, "events");
    /** Reference face triangualtion array of 468 points, used for triangle references between points */
    __publicField(this, "faceTriangulation");
    /** Refernce UV map of 468 values, used for 3D mapping of the face mesh */
    __publicField(this, "faceUVMap");
    /** Performance object that contains values for all recently performed operations */
    __publicField(this, "performance");
    // perf members are dynamically defined as needed
    __privateAdd(this, _numTensors);
    __privateAdd(this, _analyzeMemoryLeaks);
    __privateAdd(this, _checkSanity);
    /** internal function to measure tensor leaks */
    __publicField(this, "analyze", (...msg) => {
      if (!__privateGet(this, _analyzeMemoryLeaks)) return;
      const currentTensors = this.tf.engine().state.numTensors;
      const previousTensors = __privateGet(this, _numTensors);
      __privateSet(this, _numTensors, currentTensors);
      const leaked = currentTensors - previousTensors;
      if (leaked !== 0) log(...msg, leaked);
    });
    /** internal function for quick sanity check on inputs @hidden */
    __privateAdd(this, _sanity, (input) => {
      if (!__privateGet(this, _checkSanity)) return null;
      if (!input) return "input is not defined";
      if (this.env.node && !(input instanceof tfjs_esm_exports.Tensor)) return "input must be a tensor";
      try {
        this.tf.getBackend();
      } catch (e) {
        return "backend not loaded";
      }
      return null;
    });
    /** WebCam helper methods
     *
     */
    __publicField(this, "webcam", new WebCam());
    /** emit event */
    __publicField(this, "emit", (event) => {
      var _a;
      if ((_a = this.events) == null ? void 0 : _a.dispatchEvent) this.events.dispatchEvent(new Event(event));
    });
    /** internal structure that keeps track of processed videos @hidden */
    __privateAdd(this, _loops, {});
    const tfVersion = (version7.tfjs || tfjs_esm_exports.version_core).replace(/-(.*)/, "");
    config.wasmPath = `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${tfVersion}/dist/`;
    config.modelBasePath = env.browser ? "../models/" : "file://models/";
    this.version = version8;
    Object.defineProperty(this, "version", { value: version8 });
    this.config = JSON.parse(JSON.stringify(config));
    Object.seal(this.config);
    this.config.cacheModels = typeof indexedDB !== "undefined";
    if (userConfig) this.config = mergeDeep(this.config, userConfig);
    setModelLoadOptions(this.config);
    this.tf = tfjs_esm_exports;
    this.state = "idle";
    __privateSet(this, _numTensors, 0);
    __privateSet(this, _analyzeMemoryLeaks, false);
    __privateSet(this, _checkSanity, false);
    this.performance = {};
    this.events = typeof EventTarget !== "undefined" ? new EventTarget() : void 0;
    this.models = new Models(this);
    init();
    this.result = empty();
    this.process = { tensor: null, canvas: null };
    this.faceTriangulation = triangulation;
    this.faceUVMap = uvmap;
    validateModel(this, null, "");
    this.emit("create");
    if (this.config.debug || this.env.browser) log(`version: ${this.version}`);
    if (this.config.debug) log(`tfjs version: ${this.tf.version["tfjs-core"]}`);
    const envTemp = JSON.parse(JSON.stringify(this.env));
    delete envTemp.kernels;
    delete envTemp.initial;
    delete envTemp.perfadd;
    if (this.config.debug) log("environment:", envTemp);
  }
  /** Reset configuration to default values */
  reset() {
    const currentBackend = this.config.backend;
    this.config = JSON.parse(JSON.stringify(config));
    this.config.backend = currentBackend;
    reset();
    env.initial = true;
  }
  /** Validate current configuration schema */
  validate(userConfig) {
    const msgs = validate(config, userConfig || this.config);
    if (msgs.length === 0) this.config = mergeDeep(this.config, userConfig);
    return msgs;
  }
  /** Utility wrapper for performance.now() */
  now() {
    return now();
  }
  /** Process input as return canvas and tensor
   *
   * @param input - any input {@link Input}
   * @param getTensor - should image processing also return tensor or just canvas
   * Returns object with `tensor` and `canvas`
   */
  image(input, getTensor = false) {
    return process2(input, this.config, getTensor);
  }
  /** Segmentation method takes any input and returns RGBA tensor
   * Note: Segmentation is not triggered as part of detect process
   *
   * @param input - {@link Input}
   * Returns tensor which contains image data in RGBA format
   */
  async segmentation(input, userConfig) {
    var _a, _b, _c;
    if (userConfig) this.config = mergeDeep(this.config, userConfig);
    if (!this.config.segmentation.enabled) return null;
    const processed = await process2(input, this.config);
    if (!processed.tensor) return null;
    let tensor7 = null;
    if ((_a = this.config.segmentation.modelPath) == null ? void 0 : _a.includes("rvm")) tensor7 = await predict12(processed.tensor, this.config);
    if ((_b = this.config.segmentation.modelPath) == null ? void 0 : _b.includes("meet")) tensor7 = await predict11(processed.tensor, this.config);
    if ((_c = this.config.segmentation.modelPath) == null ? void 0 : _c.includes("selfie")) tensor7 = await predict13(processed.tensor, this.config);
    tfjs_esm_exports.dispose(processed.tensor);
    return tensor7;
  }
  /** Compare two input tensors for pixel similarity
   * - use `human.image` to process any valid input and get a tensor that can be used for compare
   * - when passing manually generated tensors:
   *  - both input tensors must be in format [1, height, width, 3]
   *  - if resolution of tensors does not match, second tensor will be resized to match resolution of the first tensor
   * - return value is pixel similarity score normalized by input resolution and rgb channels
  */
  compare(firstImageTensor, secondImageTensor) {
    return compare(this.config, firstImageTensor, secondImageTensor);
  }
  /** Explicit backend initialization
   *  - Normally done implicitly during initial load phase
   *  - Call to explictly register and initialize TFJS backend without any other operations
   *  - Use when changing backend during runtime
   */
  async init() {
    await check(this, true);
    await this.tf.ready();
    reset();
  }
  /** Load method preloads all configured models on-demand
   * - Not explicitly required as any required model is load implicitly on it's first run
   *
   * @param userConfig - {@link Config}
  */
  async load(userConfig) {
    this.state = "load";
    const timeStamp = now();
    const count2 = Object.values(this.models.models).filter((model23) => model23).length;
    if (userConfig) this.config = mergeDeep(this.config, userConfig);
    if (this.env.initial) {
      if (!await check(this, false)) log("error: backend check failed");
      await tfjs_esm_exports.ready();
      if (this.env.browser) {
        if (this.config.debug) log("configuration:", this.config);
        if (this.config.debug) log("tf flags:", this.tf.ENV.flags);
      }
    }
    await this.models.load(this);
    if (this.env.initial && this.config.debug) log("tf engine state:", this.tf.engine().state.numBytes, "bytes", this.tf.engine().state.numTensors, "tensors");
    this.env.initial = false;
    const loaded = Object.values(this.models.models).filter((model23) => model23).length;
    if (loaded !== count2) {
      this.models.validate();
      this.emit("load");
    }
    const current = Math.trunc(now() - timeStamp);
    if (current > (this.performance.loadModels || 0)) this.performance.loadModels = this.env.perfadd ? (this.performance.loadModels || 0) + current : current;
  }
  /** Runs interpolation using last known result and returns smoothened result
   * Interpolation is based on time since last known result so can be called independently
   *
   * @param result - {@link Result} optional use specific result set to run interpolation on
   * @returns result - {@link Result}
   */
  next(result = this.result) {
    return calc2(result);
  }
  /** Warmup method pre-initializes all configured models for faster inference
   * - can take significant time on startup
   * - only used for `webgl` and `humangl` backends
   * @param userConfig - {@link Config}
   * @returns result - {@link Result}
  */
  async warmup(userConfig) {
    const t0 = now();
    const res = await warmup(this, userConfig);
    const t1 = now();
    this.performance.warmup = Math.trunc(t1 - t0);
    return res;
  }
  /** Run detect with tensorflow profiling
   * - result object will contain total exeuction time information for top-20 kernels
   * - actual detection object can be accessed via `human.result`
  */
  async profile(input, userConfig) {
    const profile = await this.tf.profile(() => this.detect(input, userConfig));
    const kernels = {};
    let total = 0;
    for (const kernel of profile.kernels) {
      const ms = Number(kernel.kernelTimeMs) || 0;
      if (kernels[kernel.name]) kernels[kernel.name] += ms;
      else kernels[kernel.name] = ms;
      total += ms;
    }
    const kernelArr = [];
    Object.entries(kernels).forEach((key) => kernelArr.push({ kernel: key[0], time: key[1], perc: 0 }));
    for (const kernel of kernelArr) {
      kernel.perc = Math.round(1e3 * kernel.time / total) / 1e3;
      kernel.time = Math.round(1e3 * kernel.time) / 1e3;
    }
    kernelArr.sort((a, b) => b.time - a.time);
    kernelArr.length = 20;
    return kernelArr;
  }
  /** Main detection method
   * - Analyze configuration: {@link Config}
   * - Pre-process input: {@link Input}
   * - Run inference for all configured models
   * - Process and return result: {@link Result}
   *
   * @param input - {@link Input}
   * @param userConfig - {@link Config}
   * @returns result - {@link Result}
  */
  async detect(input, userConfig) {
    this.state = "detect";
    return new Promise(async (resolve) => {
      var _a;
      this.state = "config";
      let timeStamp;
      this.config = mergeDeep(this.config, userConfig);
      this.state = "check";
      const error = __privateGet(this, _sanity).call(this, input);
      if (error) {
        log(error, input);
        this.emit("error");
        resolve(empty(error));
      }
      const timeStart = now();
      await this.load();
      timeStamp = now();
      this.state = "image";
      const img = await process2(input, this.config);
      this.process = img;
      this.performance.inputProcess = this.env.perfadd ? (this.performance.inputProcess || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
      this.analyze("Get Image:");
      if (!img.tensor) {
        if (this.config.debug) log("could not convert input to tensor");
        this.emit("error");
        resolve(empty("could not convert input to tensor"));
        return;
      }
      this.emit("image");
      timeStamp = now();
      this.config.skipAllowed = await skip(this.config, img.tensor);
      this.config.filter.autoBrightness = (this.config.filter.autoBrightness || false) && this.config.skipAllowed;
      if (!this.performance.totalFrames) this.performance.totalFrames = 0;
      if (!this.performance.cachedFrames) this.performance.cachedFrames = 0;
      this.performance.totalFrames++;
      if (this.config.skipAllowed) this.performance.cachedFrames++;
      this.performance.cacheCheck = this.env.perfadd ? (this.performance.cacheCheck || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
      this.analyze("Check Changed:");
      let faceRes = [];
      this.state = "detect:face";
      if (this.config.async) {
        faceRes = this.config.face.enabled ? detectFace(this, img.tensor) : [];
        if (this.performance.face) delete this.performance.face;
      } else {
        timeStamp = now();
        faceRes = this.config.face.enabled ? await detectFace(this, img.tensor) : [];
        this.performance.face = this.env.perfadd ? (this.performance.face || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
      }
      if (this.config.async && (this.config.body.maxDetected === -1 || this.config.hand.maxDetected === -1)) faceRes = await faceRes;
      this.state = "detect:await";
      if (this.config.async) [faceRes] = await Promise.all([faceRes]);
      this.performance.total = this.env.perfadd ? (this.performance.total || 0) + Math.trunc(now() - timeStart) : Math.trunc(now() - timeStart);
      const shape = ((_a = this.process.tensor) == null ? void 0 : _a.shape) || [0, 0, 0, 0];
      this.result = {
        face: faceRes,
        performance: this.performance,
        canvas: this.process.canvas,
        timestamp: Date.now(),
        error: null,
        width: shape[2],
        height: shape[1]
      };
      tfjs_esm_exports.dispose(img.tensor);
      this.emit("detect");
      this.state = "idle";
      resolve(this.result);
    });
  }
  /** Helper function
   * @param ms - sleep time in miliseconds
   */
  async sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  /** Continously detect video frames
   * @param element - HTMLVideoElement input
   * @param run - boolean run continously or stop if already running, default true
   * @param delay - number delay detection between frames for number of miliseconds, default 0
   */
  async video(element, run = true, delay = 0) {
    if (run) {
      if (!__privateGet(this, _loops)[element.id]) {
        if (this.config.debug) log("video start", element.id);
        __privateGet(this, _loops)[element.id] = true;
      }
      if (!element.paused && __privateGet(this, _loops)[element.id] && element.readyState >= 2) await this.detect(element);
      if (delay > 0) await this.sleep(delay);
      if (__privateGet(this, _loops)[element.id]) requestAnimationFrame(() => this.video(element, run, delay));
    } else {
      if (this.config.debug) log("video stop", element.id);
      __privateGet(this, _loops)[element.id] = false;
    }
  }
};
_numTensors = new WeakMap();
_analyzeMemoryLeaks = new WeakMap();
_checkSanity = new WeakMap();
_sanity = new WeakMap();
_loops = new WeakMap();
export {
  Env,
  Human,
  Human as default,
  config as defaults,
  draw_exports as draw,
  empty,
  env,
  match_exports as match,
  models_exports2 as models
};
