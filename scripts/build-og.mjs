// Genera public/og-image.png (1200×630, imagen para redes sociales) a partir de design/og-image.html
// con Chrome sin ventana.
// Uso: npm run og   (si Chrome no está en una ruta habitual: CHROME_PATH=/ruta/a/chrome npm run og)

import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const source = resolve('design/og-image.html');
const output = resolve('public/og-image.png');

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const chrome = candidates.find((path) => existsSync(path));
if (!chrome) {
  console.error('No encuentro Chrome. Indica su ruta con la variable CHROME_PATH.');
  process.exit(1);
}

// perfil temporal para no interferir con el Chrome que tengas abierto
const profile = mkdtempSync(join(tmpdir(), 'og-chrome-'));
try {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--user-data-dir=${profile}`,
    '--window-size=1200,630',
    `--screenshot=${output}`,
    pathToFileURL(source).href,
  ], { stdio: 'ignore' });
  console.log(`Imagen generada: ${output}`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
