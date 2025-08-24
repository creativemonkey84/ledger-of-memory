import { createHash } from 'crypto';

export function generateContentHash(buffer: Buffer): string {
  return createHash('sha256').update(buffer).digest('hex');
}
