/**
 * Results interpolation for smoothening of video detection results inbetween detected frames
 */

import { Box, empty, FaceLandmark, FaceResult, Point, Result } from '../result';

import { env } from './env';
import { now } from './util';

const bufferedResult: Result = empty();
let interpolateTime = 0;

export function calc(newResult: Result): Result {
  const t0 = now();
  if (!newResult) return empty();
  // each record is only updated using deep clone when number of detected record changes, otherwise it will converge by itself
  // otherwise bufferedResult is a shallow clone of result plus updated local calculated values
  // thus mixing by-reference and by-value assignments to minimize memory operations

  const elapsed = Date.now() - newResult.timestamp;

  /* curve fitted: buffer = 8 - ln(delay)
     interpolation formula: current = ((buffer - 1) * previous + live) / buffer
    - at  50ms delay buffer = ~4.1 => 28% towards live data
    - at 250ms delay buffer = ~2.5 => 40% towards live data
    - at 500ms delay buffer = ~1.8 => 55% towards live data
    - at 750ms delay buffer = ~1.4 => 71% towards live data
    - at  1sec delay buffer = 1 which means live data is used
  */
  const bufferedFactor = elapsed < 1000 ? 8 - Math.log(elapsed + 1) : 1;

  if (newResult.canvas) bufferedResult.canvas = newResult.canvas;
  if (newResult.error) bufferedResult.error = newResult.error;

  // interpolate face results
  if (!bufferedResult.face || (newResult.face.length !== bufferedResult.face.length)) {
    bufferedResult.face = JSON.parse(JSON.stringify(newResult.face)) as FaceResult[]; // deep clone once
  } else {
    for (let i = 0; i < newResult.face.length; i++) {
      const box = (newResult.face[i].box // update box
        .map((b, j) => ((bufferedFactor - 1) * bufferedResult.face[i].box[j] + b) / bufferedFactor)) as Box;
      const boxRaw = (newResult.face[i].boxRaw // update boxRaw
        .map((b, j) => ((bufferedFactor - 1) * bufferedResult.face[i].boxRaw[j] + b) / bufferedFactor)) as Box;
      let annotations: Record<FaceLandmark, Point[]> = newResult.face[i].annotations;
      if (Object.keys(bufferedResult.face[i].annotations).length !== Object.keys(newResult.face[i].annotations).length) {
        bufferedResult.face[i].annotations = newResult.face[i].annotations; // reset annotations as previous frame did not have them
        annotations = bufferedResult.face[i].annotations;
      } else if (newResult.face[i].annotations) {
        for (const key of Object.keys(newResult.face[i].annotations)) { // update annotations
          annotations[key] = newResult.face[i]?.annotations?.[key]?.[0]
            ? newResult.face[i].annotations[key]
              .map((val, j: number) => val
                .map((coord: number, k: number) => ((bufferedFactor - 1) * bufferedResult.face[i].annotations[key][j][k] + coord) / bufferedFactor))
            : null;
        }
      }
      if (newResult.face[i].rotation) {
        const rotation: {
          matrix: [number, number, number, number, number, number, number, number, number],
          angle: { roll: number, yaw: number, pitch: number },
          gaze: { bearing: number, strength: number }
        } = { matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0], angle: { roll: 0, yaw: 0, pitch: 0 }, gaze: { bearing: 0, strength: 0 } };
        rotation.matrix = newResult.face[i].rotation?.matrix as [number, number, number, number, number, number, number, number, number];
        rotation.angle = {
          roll: ((bufferedFactor - 1) * (bufferedResult.face[i].rotation?.angle?.roll || 0) + (newResult.face[i].rotation?.angle?.roll || 0)) / bufferedFactor,
          yaw: ((bufferedFactor - 1) * (bufferedResult.face[i].rotation?.angle?.yaw || 0) + (newResult.face[i].rotation?.angle?.yaw || 0)) / bufferedFactor,
          pitch: ((bufferedFactor - 1) * (bufferedResult.face[i].rotation?.angle?.pitch || 0) + (newResult.face[i].rotation?.angle?.pitch || 0)) / bufferedFactor,
        };
        rotation.gaze = {
          // not fully correct due projection on circle, also causes wrap-around draw on jump from negative to positive
          bearing: ((bufferedFactor - 1) * (bufferedResult.face[i].rotation?.gaze.bearing || 0) + (newResult.face[i].rotation?.gaze.bearing || 0)) / bufferedFactor,
          strength: ((bufferedFactor - 1) * (bufferedResult.face[i].rotation?.gaze.strength || 0) + (newResult.face[i].rotation?.gaze.strength || 0)) / bufferedFactor,
        };
        bufferedResult.face[i] = { ...newResult.face[i], rotation, box, boxRaw, annotations }; // shallow clone plus updated values
      } else {
        bufferedResult.face[i] = { ...newResult.face[i], box, boxRaw, annotations }; // shallow clone plus updated values
      }
    }
  }

  // copy resolution info
  bufferedResult.width = newResult.width;
  bufferedResult.height = newResult.height;

  // append interpolation performance data
  const t1 = now();
  interpolateTime = env.perfadd ? interpolateTime + Math.round(t1 - t0) : Math.round(t1 - t0);
  if (newResult.performance) bufferedResult.performance = { ...newResult.performance, interpolate: interpolateTime };

  return bufferedResult;
}
