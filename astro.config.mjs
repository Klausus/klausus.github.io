// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://klausus.dev',
  // español en la raíz (/), valenciano/catalán en /ca/ e inglés en /en/
  i18n: {
    locales: ['es', 'ca', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    vue(),
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', ca: 'ca-ES', en: 'en-US' } },
    }),
  ],
});
