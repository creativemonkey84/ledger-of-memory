import { loadFile } from './utils/fileHandler';
import { encryptMemory } from './encrypt';
import { generateContentHash } from './hash';

async function runMemoryCapture(filePath: string) {
  const content = await loadFile(filePath);

  const entry = {
    type: 'audio',
    content,
    timestamp: Date.now(),
    location: {
      lat: 39.905, // Tiananmen latitude
      lng: 116.391, // Tiananmen longitude
      blurRadius: 0.5, // km radius
    },
    title: 'The Woman in the White Shirt',
  };

  const encrypted = await encryptMemory(entry);
  const cid = generateContentHash(encrypted.encrypted);

  console.log('Memory Encrypted');
  console.log('Hash (CID):', cid);
  console.log('Nonce:', encrypted.nonce.toString('hex'));
  console.log('Key:', encrypted.key.toString('hex')); // For demo/testing only
}

runMemoryCapture('./example/audio-testimony.wav');
