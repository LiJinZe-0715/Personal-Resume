import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const output = path.resolve(
  fileURLToPath(new URL('../dist/client/', import.meta.url)),
);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
assert.ok(
  fs.existsSync(path.join(output, 'index.html')),
  'Static export must produce index.html',
);

// vinext includes assetPrefix in its output paths; Pages already mounts the
// artifact at that prefix, so publish the assets relative to the artifact root.
if (basePath) {
  const source = path.resolve(output, `.${basePath}`, '_next');
  assert.ok(
    source.startsWith(output + path.sep),
    'Assets must stay inside the build directory',
  );
  fs.renameSync(source, path.join(output, '_next'));
}
fs.writeFileSync(
  new URL('../dist/pages-base-path.json', import.meta.url),
  JSON.stringify(basePath),
);
console.log(`Static Pages artifact ready for ${basePath || '/'}`);
