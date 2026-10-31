# klausus.dev

Web personal y portfolio de **Cristian Mateu Gómez (Klausus)**: Tech Lead y desarrollador full stack.

- Producción: https://klausus.dev (Cloudflare Pages)
- Copia: https://klausus.github.io (GitHub Pages, con `canonical` apuntando a klausus.dev)

## Stack

- [Astro](https://astro.build) 7, generación estática
- [Vue](https://vuejs.org) 3 para las partes interactivas (la terminal de la portada)
- Fuentes autoalojadas con Fontsource (Orbitron, Space Grotesk, JetBrains Mono, Dela Gothic One, Zen Kaku Gothic New)
- Node 26 LTS (fijado en `.node-version`)

## Desarrollo

```sh
npm install
npm run dev      # servidor local en http://localhost:4321
npm run check    # chequeo de tipos
npm run build    # genera la web estática en dist/
npm run preview  # sirve dist/ en local
```

## Editar el contenido

Todos los textos (perfil, stack, experiencia, proyectos, aficiones, redes) están en
[`src/data/profile.ts`](src/data/profile.ts). No hace falta tocar los componentes para actualizarlos.

- **Idiomas:** la web está en español (`/`), valenciano/catalán (`/ca/`) e inglés (`/en/`). Cada texto es un string si es igual en todos los idiomas (nombres, tecnologías) o un objeto `{ es: '…', ca: '…', en: '…' }` si se traduce; si falta alguna versión, `npm run check` lo avisa. Los textos de la interfaz (menú, botones, títulos) están en [`src/i18n/ui.ts`](src/i18n/ui.ts).
- **Nuevo puesto:** añádelo al principio de `experience` con `end: null` y pon fecha de fin al anterior. La terminal de la portada (`job --current`) se actualiza sola.
- **Nuevo proyecto:** añade un objeto a `projects` (hay un ejemplo comentado).
- **CV descargable:** hay un PDF por idioma en `public/cv/` y sus rutas están en `profile.cvUrl` (con `null` se oculta el botón). Las fuentes son `cv/cv-es.html`, `cv/cv-ca.html` y `cv/cv-en.html`, con los estilos comunes en `cv/cv.css`: edítalas y ejecuta `npm run cv` para regenerar los tres PDF con Chrome (avisa si alguno no cabe en una página).

- **Imagen para redes sociales:** al compartir la web se muestra `public/og-image.png` (1200×630). Su fuente es [`design/og-image.html`](design/og-image.html): edítala y ejecuta `npm run og` para regenerarla.

## Despliegue

Cada push a `main` despliega en los dos sitios:

| Sitio | Cómo | Configuración |
|---|---|---|
| klausus.dev | Cloudflare Pages | Build command `npm run build`, output `dist` |
| klausus.github.io | GitHub Actions (`.github/workflows/deploy.yml`) | Settings → Pages → Source: **GitHub Actions** |
