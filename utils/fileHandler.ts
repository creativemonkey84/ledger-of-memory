import fs from 'fs/promises';

export async function loadFile(filePath: string): Promise<Buffer> {
  return await fs.readFile(filePath);
}
