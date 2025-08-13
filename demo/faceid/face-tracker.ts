/**
 * Face tracking system for automatic registration
 */

import * as H from '../../dist/human.esm.js';
import * as indexDb from './indexdb';

export interface TrackedFace {
  id: string;
  face: H.FaceResult;
  firstSeen: number;
  lastSeen: number;
  trackingDuration: number;
  isMatched: boolean;
  matchedRecord?: indexDb.FaceRecord;
}

export class FaceTracker {
  private trackedFaces = new Map<string, TrackedFace>();
  private readonly trackingThreshold = 5000; // 5 seconds
  private readonly similarityThreshold = 0.6; // threshold for considering faces as same person
  private readonly autoSaveEnabled = true;

  constructor(
    private knownDescriptors: number[][],
    private knownFaces: indexDb.FaceRecord[],
    private matchOptions: H.match.MatchOptions,
    private human: H.Human
  ) {}

  updateKnownFaces(descriptors: number[][], faces: indexDb.FaceRecord[]) {
    this.knownDescriptors = descriptors;
    this.knownFaces = faces;
  }

  private generateFaceId(face: H.FaceResult): string {
    // Generate simple ID based on face position and size
    if (!face.box) return Math.random().toString();
    const [x, y, w, h] = face.box;
    return `${Math.round(x)}_${Math.round(y)}_${Math.round(w)}_${Math.round(h)}`;
  }

  private isSameFace(face1: H.FaceResult, face2: H.FaceResult): boolean {
    if (!face1.box || !face2.box) return false;
    
    const [x1, y1, w1, h1] = face1.box;
    const [x2, y2, w2, h2] = face2.box;
    
    // Check if faces are in similar position and size
    const positionThreshold = 50;
    const sizeThreshold = 30;
    
    return Math.abs(x1 - x2) < positionThreshold &&
           Math.abs(y1 - y2) < positionThreshold &&
           Math.abs(w1 - w2) < sizeThreshold &&
           Math.abs(h1 - h2) < sizeThreshold;
  }

  private findMatchingKnownFace(face: H.FaceResult): { record: indexDb.FaceRecord; similarity: number } | null {
    if (!face.embedding || face.embedding.length === 0 || this.knownDescriptors.length === 0) {
      return null;
    }

    const res = this.human.match.find(face.embedding, this.knownDescriptors, this.matchOptions);
    const record = this.knownFaces[res.index];
    
    if (record && res.similarity > this.similarityThreshold) { // threshold for considering a match
      return { record, similarity: res.similarity };
    }
    
    return null;
  }

  async processFaces(faces: H.FaceResult[]): Promise<{ newlyRegistered: TrackedFace[], updates: TrackedFace[] }> {
    const now = Date.now();
    const currentFaceIds = new Set<string>();
    const newlyRegistered: TrackedFace[] = [];
    const updates: TrackedFace[] = [];

    // Process each detected face
    for (const face of faces) {
      if (!face.embedding || face.embedding.length === 0) continue;

      // Check if face matches known faces
      const matchResult = this.findMatchingKnownFace(face);
      const isMatched = matchResult !== null;

      // Find existing tracked face or create new one
      let trackedFace: TrackedFace | null = null;
      
      // Try to find existing tracked face by similarity
      for (const [id, tracked] of this.trackedFaces) {
        if (this.isSameFace(face, tracked.face)) {
          trackedFace = tracked;
          currentFaceIds.add(id);
          break;
        }
      }

      if (!trackedFace) {
        // Create new tracked face
        const id = this.generateFaceId(face);
        trackedFace = {
          id,
          face,
          firstSeen: now,
          lastSeen: now,
          trackingDuration: 0,
          isMatched,
          matchedRecord: matchResult?.record
        };
        this.trackedFaces.set(id, trackedFace);
        currentFaceIds.add(id);
      } else {
        // Update existing tracked face
        trackedFace.face = face;
        trackedFace.lastSeen = now;
        trackedFace.trackingDuration = now - trackedFace.firstSeen;
        trackedFace.isMatched = isMatched;
        trackedFace.matchedRecord = matchResult?.record;
      }

      // Check if unknown face should be auto-registered
      if (!trackedFace.isMatched && 
          trackedFace.trackingDuration >= this.trackingThreshold && 
          this.autoSaveEnabled) {
        
        await this.autoRegisterFace(trackedFace);
        newlyRegistered.push(trackedFace);
      }

      updates.push(trackedFace);
    }

    // Remove faces that are no longer detected
    for (const [id, tracked] of this.trackedFaces) {
      if (!currentFaceIds.has(id)) {
        // Face not seen for a while, remove it
        if (now - tracked.lastSeen > 2000) { // 2 second timeout
          this.trackedFaces.delete(id);
        }
      }
    }

    return { newlyRegistered, updates };
  }

  private async autoRegisterFace(trackedFace: TrackedFace) {
    try {
      // Generate automatic name
      const timestamp = new Date().toLocaleString('ko-KR');
      const autoName = `Unknown_${timestamp}`;

      // Get face crop for image storage
      const image = this.getFaceCropImageData(trackedFace.face);
      
      const record: indexDb.FaceRecord = {
        id: 0, // will be auto-incremented
        name: autoName,
        descriptor: trackedFace.face.embedding as number[],
        image
      };

      await indexDb.save(record);
      
      // Mark as matched to prevent re-registration
      trackedFace.isMatched = true;
      
      console.log('Auto-registered face:', autoName);
    } catch (error) {
      console.error('Failed to auto-register face:', error);
    }
  }

  private getFaceCropImageData(face: H.FaceResult): ImageData {
    if (!face.box) {
      // Return empty ImageData if no box
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      return ctx.getImageData(0, 0, 128, 128);
    }

    const video = document.getElementById('video') as HTMLVideoElement;
    const [bx, by, bw, bh] = face.box as [number, number, number, number];
    const sx = Math.max(0, Math.floor(bx));
    const sy = Math.max(0, Math.floor(by));
    const sw = Math.max(1, Math.min(video.videoWidth - sx, Math.floor(bw)));
    const sh = Math.max(1, Math.min(video.videoHeight - sy, Math.floor(bh)));
    
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, 128, 128);
    
    return ctx.getImageData(0, 0, 128, 128);
  }

  getTrackedFaces(): TrackedFace[] {
    return Array.from(this.trackedFaces.values());
  }

  getTrackingInfo(faceId: string): TrackedFace | null {
    return this.trackedFaces.get(faceId) || null;
  }
}