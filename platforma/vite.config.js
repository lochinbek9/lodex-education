import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

// Repo ichidagi alohida ilovalar: platforma ularni o'z manzili ostida beradi.
//   /simulyator/ -> ../simulyator   (3D robot simulyatori)
//   /qollanma/   -> ../qollanma     (mentorlar uchun metodik qo'llanma)
const SIBLINGS = { simulyator: '../simulyator', qollanma: '../qollanma' };
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.md': 'text/markdown; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
};

function siblingApps() {
  return {
    name: 'sibling-apps',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0]);
        for (const [name, dir] of Object.entries(SIBLINGS)) {
          if (url === `/${name}`) { res.statusCode = 301; res.setHeader('Location', `/${name}/`); return res.end(); }
          if (!url.startsWith(`/${name}/`)) continue;
          const root = path.resolve(here, dir);
          const file = path.resolve(root, url.slice(name.length + 2) || 'index.html');
          if (!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()) break;
          res.setHeader('Content-Type', MIME[path.extname(file)] || 'application/octet-stream');
          return fs.createReadStream(file).pipe(res);
        }
        next();
      });
    },
    closeBundle() {
      for (const [name, dir] of Object.entries(SIBLINGS)) {
        fs.cpSync(path.resolve(here, dir), path.resolve(here, 'dist', name), {
          recursive: true,
          filter: src => !/node_modules|\.DS_Store/.test(src),
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), siblingApps()],
  server: { port: 5173 },
});
