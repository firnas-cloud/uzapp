import fs from 'fs/promises';
import path from 'path';
export async function saveLocalFile(name: string, data: Buffer) {
  const filePath = path.join(process.cwd(), 'public', 'uploads', name);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, data);
  return `/uploads/${name}`;
}
