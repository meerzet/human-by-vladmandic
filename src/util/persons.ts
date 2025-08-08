/**
 * Analyze detection Results and sort&combine them into per-person view
 */

import type { Box, FaceResult, PersonResult } from '../result';

export function join(faces: FaceResult[], shape: number[] | undefined): PersonResult[] {
  let id = 0;
  const persons: PersonResult[] = [];
  for (const face of faces) { // person is defined primarily by face and then we append other objects as found
    const person: PersonResult = { id: id++, face, body: null, hands: { left: null, right: null }, gestures: [], box: [0, 0, 0, 0] };

    // create new overarching box from all boxes belonging to person
    const x: number[] = [];
    const y: number[] = [];
    const extractXY = (box: Box | undefined) => { // extract all [x, y] coordinates from boxes [x, y, width, height]
      if (box && box.length === 4) {
        x.push(box[0], box[0] + box[2]);
        y.push(box[1], box[1] + box[3]);
      }
    };
    extractXY(person.face.box);
    extractXY(person.body?.box);
    extractXY(person.hands.left?.box);
    extractXY(person.hands.right?.box);
    const minX = Math.min(...x);
    const minY = Math.min(...y);
    person.box = [minX, minY, Math.max(...x) - minX, Math.max(...y) - minY]; // create new overarching box

    // shape is known so we calculate boxRaw as well
    if (shape?.[1] && shape?.[2]) person.boxRaw = [person.box[0] / shape[2], person.box[1] / shape[1], person.box[2] / shape[2], person.box[3] / shape[1]];

    persons.push(person);
  }
  return persons;
}
