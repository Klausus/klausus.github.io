// Genera los CV en PDF (uno por idioma) a partir de cv/cv-<idioma>.html con Chrome sin ventana:
//   public/cv/CV-Cristian-Mateu-Gomez-ES.pdf, -CA.pdf y -EN.pdf
// Uso: npm run cv   (si Chrome no está en una ruta habitual: CHROME_PATH=/ruta/a/chrome npm run cv)

import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const languages = ['es', 'ca', 'en'];

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
const profile = mkdtempSync(join(tmpdir(), 'cv-chrome-'));
try {
  for (const lang of languages) {
    const source = resolve(`cv/cv-${lang}.html`);
    const output = resolve(`public/cv/CV-Cristian-Mateu-Gomez-${lang.toUpperCase()}.pdf`);
    execFileSync(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--user-data-dir=${profile}`,
      `--print-to-pdf=${output}`,
      pathToFileURL(source).href,
    ], { stdio: 'ignore' });

    const pages = (readFileSync(output, 'latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    const warning = pages > 1 ? `  ⚠ ocupa ${pages} páginas: recorta texto en cv/cv-${lang}.html` : '';
    console.log(`CV ${lang.toUpperCase()}: ${output}${warning}`);
  }
} finally {
  rmSync(profile, { recursive: true, force: true });
}
