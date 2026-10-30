// Textos de la interfaz (menú, botones, títulos...). El contenido personal está en src/data/profile.ts.

export const locales = ['es', 'ca', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

/** Texto con una versión por idioma */
export type Localized = Record<Locale, string>;
/** Texto que puede ser igual en todos los idiomas (string) o traducido */
export type Text = string | Localized;

const es = {
  'meta.locale': 'es_ES',
  'skip': 'Saltar al contenido',
  'nav.label': 'Principal',
  'nav.about': '/sobre_mí',
  'nav.stack': '/stack',
  'nav.career': '/trayectoria',
  'nav.projects': '/proyectos',
  'nav.hobbies': '/pasatiempos',
  'nav.contact': '/contacto',
  'lang.label': 'Idioma',
  'lang.switchTo': 'Cambiar a',
  'lang.es': 'español',
  'lang.ca': 'valenciano/catalán',
  'lang.en': 'inglés',
  'hero.projects': 'Ver proyectos',
  'hero.cv': 'Descargar CV',
  'terminal.whoami': 'klausus — tech lead & full stack dev',
  'terminal.present': 'actualidad',
  'section.about': 'Sobre mí',
  'section.stack': 'Stack',
  'section.career': 'Trayectoria profesional',
  'section.projects': 'Proyectos',
  'section.hobbies': 'Pasatiempos',
  'contact.title': '¿Hablamos?',
  'contact.invite': 'escríbeme cuando quieras',
  'project.zoom': 'Ampliar captura',
  'project.screenshots': 'Capturas de',
  'project.show': 'Ver captura',
  'project.prev': 'Captura anterior',
  'project.next': 'Captura siguiente',
  'project.close': 'Cerrar',
  'project.newTab': '(se abre en una pestaña nueva)',
};

// valenciano (norma de l'AVL), que también es catalán correcto
const ca: Record<keyof typeof es, string> = {
  'meta.locale': 'ca_ES',
  'skip': 'Salta al contingut',
  'nav.label': 'Principal',
  'nav.about': '/sobre_mi',
  'nav.stack': '/stack',
  'nav.career': '/trajectòria',
  'nav.projects': '/projectes',
  'nav.hobbies': '/passatemps',
  'nav.contact': '/contacte',
  'lang.label': 'Idioma',
  'lang.switchTo': 'Canvia a',
  'lang.es': 'castellà',
  'lang.ca': 'valencià/català',
  'lang.en': 'anglés',
  'hero.projects': 'Veure projectes',
  'hero.cv': 'Descarrega el CV',
  'terminal.whoami': 'klausus — tech lead & full stack dev',
  'terminal.present': 'actualitat',
  'section.about': 'Sobre mi',
  'section.stack': 'Stack',
  'section.career': 'Trajectòria professional',
  'section.projects': 'Projectes',
  'section.hobbies': 'Passatemps',
  'contact.title': 'Parlem?',
  'contact.invite': 'escriu-me quan vulgues',
  'project.zoom': 'Amplia la captura',
  'project.screenshots': 'Captures de',
  'project.show': 'Mostra la captura',
  'project.prev': 'Captura anterior',
  'project.next': 'Captura següent',
  'project.close': 'Tanca',
  'project.newTab': "(s'obri en una pestanya nova)",
};

const en: Record<keyof typeof es, string> = {
  'meta.locale': 'en_US',
  'skip': 'Skip to content',
  'nav.label': 'Main',
  'nav.about': '/about',
  'nav.stack': '/stack',
  'nav.career': '/career',
  'nav.projects': '/projects',
  'nav.hobbies': '/hobbies',
  'nav.contact': '/contact',
  'lang.label': 'Language',
  'lang.switchTo': 'Switch to',
  'lang.es': 'Spanish',
  'lang.ca': 'Valencian/Catalan',
  'lang.en': 'English',
  'hero.projects': 'View projects',
  'hero.cv': 'Download CV',
  'terminal.whoami': 'klausus — tech lead & full stack dev',
  'terminal.present': 'present',
  'section.about': 'About me',
  'section.stack': 'Stack',
  'section.career': 'Career',
  'section.projects': 'Projects',
  'section.hobbies': 'Hobbies',
  'contact.title': "Let's talk",
  'contact.invite': 'feel free to reach out',
  'project.zoom': 'Enlarge screenshot',
  'project.screenshots': 'Screenshots of',
  'project.show': 'Show screenshot',
  'project.prev': 'Previous screenshot',
  'project.next': 'Next screenshot',
  'project.close': 'Close',
  'project.newTab': '(opens in a new tab)',
};

const ui = { es, ca, en };

export type UiKey = keyof typeof es;

export function getLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

/** Devuelve la función de traducción de la interfaz para un idioma */
export function useTranslations(locale: Locale) {
  return (key: UiKey) => ui[locale][key];
}

/** Resuelve un texto de contenido: si es string se usa tal cual, si no, su versión en `locale` */
export function tr(text: Text, locale: Locale): string {
  return typeof text === 'string' ? text : text[locale];
}

/** Ruta de la portada en cada idioma */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
