import sodium from 'libsodium-wrappers';
import { MemoryEntry, EncryptedMemory } from './types';

export async function encryptMemory(entry: MemoryEntry): Promise<EncryptedMemory> {
  await sodium.ready;

  const key = sodium.randombytes_buf(sodium.crypto_secretbox_KEYBYTES);
  const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);

  const encrypted = sodium.crypto_secretbox_easy(entry.content, nonce, key);

  return {
    encrypted: Buffer.from(encrypted),
    nonce: Buffer.from(nonce),
    key: Buffer.from(key), // In production, store only in secure enclave
  };
}
