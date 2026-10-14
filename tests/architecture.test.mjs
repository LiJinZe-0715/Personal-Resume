import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = new URL('../src/modules/resume/', import.meta.url);
function files(dir) {
  if (dir instanceof URL) dir = fileURLToPath(dir);
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  });
}

void test('data and model cannot depend on UI, persistence or framework adapters', () => {
  for (const layer of ['domain', 'content'])
    for (const file of files(new URL(layer, root))) {
      const source = fs.readFileSync(file, 'utf8');
      const imports = [...source.matchAll(/from\s+['"]([^'"]+)['"]/g)].map(
        (match) => match[1],
      );
      for (const dependency of imports) {
        assert.doesNotMatch(
          dependency,
          /presentation|infrastructure|react|next|cloudflare|docx|\.css$/,
          file,
        );
        if (layer === 'domain')
          assert.doesNotMatch(dependency, /content/, file);
      }
      assert.doesNotMatch(
        source,
        /\b(window|document|fetch|localStorage)\s*[.(]/,
        file,
      );
    }
});

void test('presentation templates do not embed data sources or network operations', () => {
  for (const file of files(new URL('presentation/components', root))) {
    assert.doesNotMatch(
      fs.readFileSync(file, 'utf8'),
      /content\/defaults|infrastructure|\bfetch\(|localStorage|style=\{|\b(?:editing|updateProject|addItem|deleteItem)\b/,
      file,
    );
  }
});

void test('removed routes, persistence and export dependencies cannot return', () => {
  const projectRoot = new URL('../', import.meta.url);
  for (const file of [
    'app/admin/page.tsx',
    'app/api/resume/route.ts',
    'app/api/word/route.ts',
    'db/schema.ts',
    'drizzle.config.ts',
  ]) {
    assert.equal(fs.existsSync(new URL(file, projectRoot)), false, file);
  }
  const pkg = JSON.parse(
    fs.readFileSync(new URL('package.json', projectRoot), 'utf8'),
  );
  for (const dependency of ['docx', 'drizzle-orm', 'drizzle-kit']) {
    assert.equal(
      pkg.dependencies?.[dependency] ?? pkg.devDependencies?.[dependency],
      undefined,
    );
  }
  for (const file of files(root)) {
    assert.doesNotMatch(
      fs.readFileSync(file, 'utf8'),
      /\bfetch\(|resume_export_word|li-yang-resume-v[123]/,
      file,
    );
  }
});
