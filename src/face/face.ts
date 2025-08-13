/**
 * Face algorithm implementation
 * Uses FaceMesh, Emotion and FaceRes models to create a unified pipeline
 */

import * as tf from 'dist/tfjs.esm.js';
import * as emotion from '../gear/emotion';
import * as gear from '../gear/gear';
import * as ssrnetAge from '../gear/ssrnet-age';
import * as ssrnetGender from '../gear/ssrnet-gender';
import type { Human } from '../human';
import type { Emotion, FaceResult, Gender, Race } from '../result';
import type { Tensor4D } from '../tfjs/types';
import { env } from '../util/env';
import { log, now } from '../util/util';
import { calculateFaceAngle } from './angles';
import { calculateCameraDistance } from './anthropometry';
import * as antispoof from './antispoof';
import * as facemesh from './facemesh';
import * as faceres from './faceres';
import * as insightface from './insightface';
import * as liveness from './liveness';
import * as mask from './mask';
import * as mobilefacenet from './mobilefacenet';

interface DescRes { age: number, gender: Gender, genderScore: number, descriptor: number[], race?: { score: number, race: Race }[] }

// util: box 중심 x 계산 (box 없으면 mesh로 추정)
function centerX(f: FaceResult): number {
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
  // 안전망: 정보 없으면 큰 값
  return Number.MAX_SAFE_INTEGER;
}

function centerY(f: FaceResult): number {
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

export const detectFace = async (instance: Human /* instance of human */, input: Tensor4D): Promise<FaceResult[]> => {
  // run facemesh, includes blazeface and iris
  let timeStamp: number = now();
  let ageRes: { age: number } | Promise<{ age: number }> | null;
  let gearRes: gear.GearType | Promise<gear.GearType> | null;
  let genderRes: { gender: string, genderScore: number } | Promise<{ gender: string, genderScore: number }> | null;
  let emotionRes: { score: number, emotion: Emotion }[] | Promise<{ score: number, emotion: Emotion }[]>;
  let mobilefacenetRes: number[] | Promise<number[]> | null;
  let insightfaceRes: number[] | Promise<number[]> | null;
  let antispoofRes: number | Promise<number> | null;
  let livenessRes: number | Promise<number> | null;
  let descRes: DescRes | Promise<DescRes> | null;

  const faceRes: FaceResult[] = [];
  instance.state = 'run:face';
  const faces: FaceResult[] = await facemesh.predict(input, instance.config);
  instance.performance.face = env.perfadd ? (instance.performance.face || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
  if (!input.shape || input.shape.length !== 4) return [];
  if (!faces) return [];
  // for (const face of faces) {
  for (let i = 0; i < faces.length; i++) {
    instance.analyze('Get Face');

    // is something went wrong, skip the face
    // @ts-ignore possibly undefied
    if (!faces[i].tensor || faces[i].tensor.isDisposedInternal) {
      log('Face object is disposed:', faces[i].tensor);
      continue;
    }

    // optional face mask
    if (instance.config.face.detector?.mask) {
      const masked = await mask.mask(faces[i]);
      tf.dispose(faces[i].tensor);
      if (masked) faces[i].tensor = masked;
    }

    // calculate face angles
    const rotation = faces[i].mesh && (faces[i].mesh.length > 200) ? calculateFaceAngle(faces[i], [input.shape[2], input.shape[1]]) : null;

    // run emotion, inherits face from blazeface
    instance.analyze('Start Emotion:');
    if (instance.config.async) {
      emotionRes = instance.config.face.emotion?.enabled ? emotion.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : [];
    } else {
      instance.state = 'run:emotion';
      timeStamp = now();
      emotionRes = instance.config.face.emotion?.enabled ? await emotion.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : [];
      instance.performance.emotion = env.perfadd ? (instance.performance.emotion || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze('End Emotion:');

    // run antispoof, inherits face from blazeface
    instance.analyze('Start AntiSpoof:');
    if (instance.config.async) {
      antispoofRes = instance.config.face.antispoof?.enabled ? antispoof.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : 0;
    } else {
      instance.state = 'run:antispoof';
      timeStamp = now();
      antispoofRes = instance.config.face.antispoof?.enabled ? await antispoof.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : 0;
      instance.performance.antispoof = env.perfadd ? (instance.performance.antispoof || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze('End AntiSpoof:');

    // run liveness, inherits face from blazeface
    instance.analyze('Start Liveness:');
    if (instance.config.async) {
      livenessRes = instance.config.face.liveness?.enabled ? liveness.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : 0;
    } else {
      instance.state = 'run:liveness';
      timeStamp = now();
      livenessRes = instance.config.face.liveness?.enabled ? await liveness.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : 0;
      instance.performance.liveness = env.perfadd ? (instance.performance.antispoof || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze('End Liveness:');

    // run gear, inherits face from blazeface
    instance.analyze('Start GEAR:');
    if (instance.config.async) {
      gearRes = instance.config.face.gear?.enabled ? gear.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = 'run:gear';
      timeStamp = now();
      gearRes = instance.config.face.gear?.enabled ? await gear.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.gear = Math.trunc(now() - timeStamp);
    }
    instance.analyze('End GEAR:');

    // run gear, inherits face from blazeface
    instance.analyze('Start SSRNet:');
    if (instance.config.async) {
      ageRes = instance.config.face['ssrnet']?.enabled ? ssrnetAge.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
      genderRes = instance.config.face['ssrnet']?.enabled ? ssrnetGender.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = 'run:ssrnet';
      timeStamp = now();
      ageRes = instance.config.face['ssrnet']?.enabled ? await ssrnetAge.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
      genderRes = instance.config.face['ssrnet']?.enabled ? await ssrnetGender.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.ssrnet = Math.trunc(now() - timeStamp);
    }
    instance.analyze('End SSRNet:');

    // run mobilefacenet alternative, inherits face from blazeface
    instance.analyze('Start MobileFaceNet:');
    if (instance.config.async) {
      mobilefacenetRes = instance.config.face['mobilefacenet']?.enabled ? mobilefacenet.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = 'run:mobilefacenet';
      timeStamp = now();
      mobilefacenetRes = instance.config.face['mobilefacenet']?.enabled ? await mobilefacenet.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.mobilefacenet = Math.trunc(now() - timeStamp);
    }
    instance.analyze('End MobileFaceNet:');

    // run insightface alternative, inherits face from blazeface
    instance.analyze('Start InsightFace:');
    if (instance.config.async) {
      insightfaceRes = instance.config.face['insightface']?.enabled ? insightface.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
    } else {
      instance.state = 'run:mobilefacenet';
      timeStamp = now();
      insightfaceRes = instance.config.face['insightface']?.enabled ? await insightface.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length) : null;
      instance.performance.mobilefacenet = Math.trunc(now() - timeStamp);
    }
    instance.analyze('End InsightFace:');

    // run faceres, inherits face from blazeface
    instance.analyze('Start Description:');
    if (instance.config.async) {
      descRes = faceres.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length);
    } else {
      instance.state = 'run:description';
      timeStamp = now();
      descRes = await faceres.predict(faces[i].tensor as Tensor4D || tf.tensor([]), instance.config, i, faces.length);
      instance.performance.description = env.perfadd ? (instance.performance.description || 0) + Math.trunc(now() - timeStamp) : Math.trunc(now() - timeStamp);
    }
    instance.analyze('End Description:');

    // if async wait for results
    if (instance.config.async) {
      [ageRes, genderRes, emotionRes, mobilefacenetRes, insightfaceRes, descRes, gearRes, antispoofRes, livenessRes] = await Promise.all([ageRes, genderRes, emotionRes, mobilefacenetRes, insightfaceRes, descRes, gearRes, antispoofRes, livenessRes]);
    }
    instance.analyze('Finish Face:');

    if (instance.config.face['ssrnet']?.enabled && ageRes && genderRes) { // override age/gender if ssrnet model is used
      descRes = {
        ...(descRes as DescRes),
        age: (ageRes as { age: number}).age,
        gender: (genderRes as { gender: Gender, genderScore: number }).gender,
        genderScore: (genderRes as { gender: Gender, genderScore: number }).genderScore,
      };
    }
    if (instance.config.face.gear?.enabled && gearRes) { // override age/gender/race if gear model is used
      descRes = {
        ...(descRes as DescRes),
        age: (gearRes as gear.GearType).age,
        gender: (gearRes as gear.GearType).gender,
        genderScore: (gearRes as gear.GearType).genderScore,
        race: (gearRes as gear.GearType).race,
      };
    }
    if (instance.config.face['mobilefacenet']?.enabled && mobilefacenetRes) { // override descriptor if mobilefacenet model is used
      (descRes as DescRes).descriptor = mobilefacenetRes as number[];
    }

    if (instance.config.face['insightface']?.enabled && insightfaceRes) { // override descriptor if insightface model is used
      (descRes as DescRes).descriptor = insightfaceRes as number[];
    }

    const irisSize = instance.config.face.iris?.enabled ? calculateCameraDistance(faces[i], input.shape[2]) : 0;

    // optionally return tensor
    const tensor = instance.config.face.detector?.return ? tf.squeeze(faces[i].tensor as Tensor4D) : null;
    // dispose original face tensor
    tf.dispose(faces[i].tensor);
    // delete temp face image
    if (faces[i].tensor) delete faces[i].tensor;
    // combine results
    const res: FaceResult = {
      ...faces[i],
      id: i,
    };
    if ((descRes as DescRes).age) res.age = (descRes as DescRes).age;
    if ((descRes as DescRes).gender) res.gender = (descRes as DescRes).gender;
    if ((descRes as DescRes).genderScore) res.genderScore = (descRes as DescRes).genderScore;
    if ((descRes as DescRes).descriptor) res.embedding = (descRes as DescRes).descriptor;
    if ((descRes as DescRes).race) res.race = (descRes as DescRes).race as { score: number, race: Race }[];
    if (emotionRes) res.emotion = emotionRes as { score: number, emotion: Emotion }[];
    if (antispoofRes) res.real = antispoofRes as number;
    if (livenessRes) res.live = livenessRes as number;
    if (irisSize > 0) res.distance = irisSize;
    if (rotation) res.rotation = rotation;
    if (tensor) res.tensor = tensor;
    faceRes.push(res);
    instance.analyze('End Face');
  }
  faceRes.sort((a, b) => {
    const dx = centerX(a) - centerX(b);
    if (dx !== 0) return dx;
    // 2) x가 거의 같은 경우 위->아래로 안정화 (선택)
    return centerY(a) - centerY(b);
  });
  instance.analyze('End FaceMesh:');
  if (instance.config.async) {
    if (instance.performance.face) delete instance.performance.face;
    if (instance.performance.age) delete instance.performance.age;
    if (instance.performance.gender) delete instance.performance.gender;
    if (instance.performance.emotion) delete instance.performance.emotion;
  }
  return faceRes;
};
