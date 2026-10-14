import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(
  fileURLToPath(new URL('../dist/client/', import.meta.url)),
);
const basePath = JSON.parse(
  await fs.readFile(
    new URL('../dist/pages-base-path.json', import.meta.url),
    'utf8',
  ),
);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.docx':
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

const server = createServer((request, response) => {
  void (async () => {
    const pathname = decodeURIComponent(
      new URL(request.url, 'http://localhost').pathname,
    );
    if (basePath && pathname === basePath) {
      response.writeHead(301, { location: `${basePath}/` }).end();
      return;
    }
    if (!pathname.startsWith(`${basePath}/`)) {
      response.writeHead(404).end('Not found');
      return;
    }
    let file = path.resolve(root, `.${pathname.slice(basePath.length)}`);
    if (file !== root && !file.startsWith(root + path.sep)) {
      response.writeHead(404).end('Not found');
      return;
    }
    const stat = await fs.stat(file);
    if (stat.isDirectory()) file = path.join(file, 'index.html');
    await fs.access(file);
    response.writeHead(200, {
      'content-type': types[path.extname(file)] ?? 'application/octet-stream',
    });
    createReadStream(file)
      .on('error', () => response.destroy())
      .pipe(response);
  })().catch(() => response.writeHead(404).end('Not found'));
});

const port = Number(process.env.PORT ?? 4173);
server.listen(port, '127.0.0.1', () =>
  console.log(`Static Pages preview: http://localhost:${port}${basePath}/`),
);
