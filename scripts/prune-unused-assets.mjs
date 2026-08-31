/**
 * Astro emits the untouched source image alongside the generated webp variants.
 * Nothing references those originals, and for this site they are ~13 MB of PNG.
 * This drops any file in dist/_astro that no built HTML, CSS or JS mentions.
 */
import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const ASSETS = join(DIST, '_astro');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const all = await walk(DIST);
const textFiles = all.filter((f) => /\.(html|css|js|xml|json)$/.test(f));
const haystack = (await Promise.all(textFiles.map((f) => readFile(f, 'utf8')))).join('\n');

let freed = 0;
let removed = 0;
for (const file of await walk(ASSETS)) {
  const name = file.split('/').pop();
  if (haystack.includes(name)) continue;
  freed += (await stat(file)).size;
  await unlink(file);
  removed++;
  console.log(`  pruned ${relative(DIST, file)}`);
}

console.log(`prune: removed ${removed} unreferenced asset(s), freed ${(freed / 1e6).toFixed(1)} MB`);
