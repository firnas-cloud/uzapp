import fs from 'fs/promises';
import path from 'path';
export async function saveLocalFile(name: string, content: Buffer) {
  const dir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(dir, { recursive: true });
  const filePath = path.join(dir, name);
  await fs.writeFile(filePath, content);
  return `/uploads/${name}`;
}
export function getStorageMode() { return process.env.STORAGE_MODE || 'local'; }
