import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { wordDownloads } from '../src/modules/resume/content/downloads.ts';

const root = fileURLToPath(new URL('../dist/client/', import.meta.url));
const basePath = JSON.parse(
  fs.readFileSync(
    new URL('../dist/pages-base-path.json', import.meta.url),
    'utf8',
  ),
);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.ok(
  html.includes('Java'),
  'Home page must contain prerendered resume content',
);
assert.ok(fs.existsSync(path.join(root, '.nojekyll')));
assert.ok(fs.existsSync(path.join(root, 'robots.txt')));

for (const [, value] of html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)) {
  if (value.startsWith('data:') || value.startsWith('http')) continue;
  assert.ok(
    value.startsWith(`${basePath}/`),
    `Asset has incorrect Pages path: ${value}`,
  );
  const file = path.join(
    root,
    decodeURIComponent(value.slice(basePath.length)),
  );
  assert.ok(fs.existsSync(file), `Missing published asset: ${value}`);
}
for (const { path: relative } of Object.values(wordDownloads)) {
  const output = fs.readFileSync(path.join(root, relative));
  const original = fs.readFileSync(
    new URL(`../public${relative}`, import.meta.url),
  );
  assert.equal(
    output.readUInt32LE(0),
    0x04034b50,
    'Word download must be a DOCX package',
  );
  assert.deepEqual(
    output,
    original,
    'Published Word must match the fixed file exactly',
  );
}
console.log(
  `Pages HTML, static assets and both fixed Word files verified for ${basePath || '/'}`,
);
