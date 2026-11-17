import { readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const directory = fileURLToPath(new URL('../src/assets/projects/', import.meta.url));
const originals = (await readdir(directory)).filter((name) => /\.(png|jpe?g)$/i.test(name));
let before = 0;
let after = 0;

for (const name of originals) {
  const input = path.join(directory, name);
  const output = path.join(directory, name.replace(/\.(png|jpe?g)$/i, '.webp'));
  await sharp(input).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(output);
  before += (await stat(input)).size;
  after += (await stat(output)).size;
}

console.log(`Optimized ${originals.length} images: ${(before / 1e6).toFixed(2)} MB → ${(after / 1e6).toFixed(2)} MB. Originals are preserved; update imports before removing them.`);
