export type MemoryType = 'text' | 'audio' | 'photo' | 'video';

export interface MemoryEntry {
  type: MemoryType;
  content: Buffer;
  timestamp: number;
  location: {
    lat: number;
    lng: number;
    blurRadius?: number;
  };
  title?: string;
}

export interface EncryptedMemory {
  encrypted: Buffer;
  nonce: Buffer;
  key: Buffer; // Ephemeral key (exported only for testing; in prod, use secure enclave)
}

export interface HashedMemory {
  cid: string; // Content hash
}
