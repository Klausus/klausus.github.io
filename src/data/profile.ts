// Contenido de la web. Para actualizar textos, puestos o proyectos
// solo hay que tocar este fichero: los componentes leen de aquí.
//
// Idiomas: un texto puede ser un string (igual en todos los idiomas, p. ej. nombres
// o tecnologías) o un objeto { es, ca, en } con las tres versiones. En los textos,
// \n es un salto de línea.

import type { ImageMetadata } from 'astro';
import type { Locale, Text } from '../i18n/ui';
import muaytaxPanel from '../assets/projects/muaytax/panel-contabilidad.webp';
import muaytaxFacturas from '../assets/projects/muaytax/listado-facturas.webp';
import muaytaxLogin from '../assets/projects/muaytax/inicio-sesion.webp';
import muaytaxWeb from '../assets/projects/muaytax/web-publica.webp';
import masgaMascota from '../assets/projects/masga/mascota.webp';
import pagameMorosoPortada from '../assets/projects/pagamemoroso/portada.webp';
import pagameMorosoAviso from '../assets/projects/pagamemoroso/aviso.webp';
import pagameMorosoCalculadora from '../assets/projects/pagamemoroso/calculadora.webp';
import pagameMorosoPlantillas from '../assets/projects/pagamemoroso/plantillas.webp';

export const profile = {
  name: 'Cristian Mateu Gómez',
  alias: 'Klausus',
  aliasJp: 'クラウスス',
  role: 'Tech Lead & Full Stack Developer',
  tagline: 'SYS:// TECH_LEAD // FULL_STACK // VALENCIA_ES',
  summary: {
    es: 'Tech Lead y desarrollador full stack. Más de 15 años de código: de técnico de sistemas a Tech Leader de un equipo de 8 devs.\nPython, Django, Vue, PostgreSQL y DevOps.',
    ca: "Tech Lead i desenvolupador full stack. Més de 15 anys de codi: de tècnic de sistemes a Tech Leader d'un equip de 8 devs.\nPython, Django, Vue, PostgreSQL i DevOps.",
    en: 'Tech Lead and full stack developer. Over 15 years of code: from systems technician to Tech Leader of a team of 8 devs.\nPython, Django, Vue, PostgreSQL and DevOps.',
  } as Text,
  email: 'CristianMateuGomez@gmail.com',
  // CV en PDF de cada idioma, dentro de public/ (se regeneran con `npm run cv` desde cv/).
  // Con null, el botón "Descargar CV" no se muestra.
  cvUrl: {
    es: '/cv/CV-Cristian-Mateu-Gomez-ES.pdf',
    ca: '/cv/CV-Cristian-Mateu-Gomez-CA.pdf',
    en: '/cv/CV-Cristian-Mateu-Gomez-EN.pdf',
  } as Text | null,
  terminalStack: 'python django vue postgres docker ci/cd',
};

// Cada columna es una lista de bloques; `label` (opcional) es el título resaltado del bloque.
export const about: { label?: Text; text: Text }[][] = [
  [
    {
      label: { es: 'Actualmente', ca: 'Actualment', en: 'Currently' },
      text: {
        es: 'Desarrollador full stack que ha evolucionado a\nTech Leader del equipo técnico de Muay Tax Group.\n\nMe muevo por todas las capas:\ndatos, APIs, interfaz, despliegues y CI/CD.',
        ca: "Desenvolupador full stack que ha evolucionat a\nTech Leader de l'equip tècnic de Muay Tax Group.\n\nEm moc per totes les capes:\ndades, APIs, interfície, desplegaments i CI/CD.",
        en: 'Full stack developer who has grown into\nTech Leader of the technical team at\nMuay Tax Group.\n\nI work across every layer:\ndata, APIs, UI, deployments and CI/CD.',
      },
    },
  ],
  [
    {
      label: { es: 'Anteriormente', ca: 'Anteriorment', en: 'Previously' },
      text: {
        es: 'Stack MEAN · Java · .NET · RPA con UiPath\nMigraciones ETL con Talend.',
        ca: 'Stack MEAN · Java · .NET · RPA amb UiPath\nMigracions ETL amb Talend.',
        en: 'MEAN stack · Java · .NET · RPA with UiPath\nETL migrations with Talend.',
      },
    },
    {
      label: { es: 'Formación', ca: 'Formació', en: 'Education' },
      text: {
        es: '- Ingeniero informático por la UPV\n- Grado Superior DAI\n- Grado Medio ESI',
        ca: '- Enginyer informàtic per la UPV\n- Grau Superior DAI\n- Grau Mitjà ESI',
        en: '- Computer Engineering degree, UPV\n- Higher Vocational Diploma in Software Development (DAI)\n- Intermediate Vocational Diploma in IT Systems (ESI)',
      },
    },
  ],
];

export const socials = [
  { label: 'linkedin', url: 'https://www.linkedin.com/in/cristianmateugomez/' },
  { label: 'github', url: 'https://github.com/Klausus' },
  { label: 'twitter', url: 'https://x.com/KlaususKun' },
  { label: 'instagram', url: 'https://www.instagram.com/klaususkun/' },
];

// `items` puede ser una lista simple o una lista de líneas (cada línea en su propio renglón)
export const stack: { title: Text; jp: string; items: Text[] | Text[][] }[] = [
  { title: 'backend', jp: 'サーバー', items: [['Python', 'Django'], ['Node', 'Express'], ['PHP', 'Java', 'C#']] },
  { title: 'frontend', jp: '画面', items: [['Vue', 'Angular'], ['HTML', 'CSS', 'JS'], ['jQuery', 'Bootstrap']] },
  {
    title: { es: 'datos', ca: 'dades', en: 'data' },
    jp: 'データ',
    items: [
      ['PostgreSQL', 'MySQL'],
      ['Oracle', 'MongoDB'],
      [{ es: 'ETL con Talend', ca: 'ETL amb Talend', en: 'ETL with Talend' }],
    ],
  },
  {
    title: 'devops',
    jp: '運用',
    items: [
      ['CI/CD', { es: 'Despliegues', ca: 'Desplegaments', en: 'Deployments' }],
      ['Docker', 'Git'],
      ['Bash', 'PowerShell'],
    ],
  },
  {
    title: { es: 'otros', ca: 'altres', en: 'other' },
    jp: 'その他',
    items: [
      ['Jira', 'Scrum'],
      ['UiPath Studio'],
      [
        { es: 'IA', ca: 'IA', en: 'AI' },
        { es: 'Tests unitarios', ca: 'Tests unitaris', en: 'Unit testing' },
      ],
    ],
  },
];

export interface Job {
  role: Text;
  company?: string;
  location?: string;
  /** 'AAAA-MM' */
  start: string;
  /** 'AAAA-MM', o null si es el puesto actual */
  end: string | null;
  description: Text;
  /** tecnologías usadas; se muestran en una línea aparte */
  stack?: string;
  /** etiqueta opcional junto al puesto (por ejemplo, prácticas) */
  tag?: Text;
}

// Ordenado del más reciente al más antiguo. El primero sin `end`
// es el que aparece en la terminal de la portada (`job --current`).
export const experience: Job[] = [
  {
    role: 'Tech Leader',
    company: 'Muay Tax Group',
    location: 'Valencia',
    start: '2025-01',
    end: null,
    description: {
      es: 'Tech Leader en un equipo de 8 devs full stack.',
      ca: "Tech Leader d'un equip de 8 devs full stack.",
      en: 'Tech Leader of a team of 8 full stack devs.',
    },
    stack: 'Python/Django, Vue, PostgreSQL, Bootstrap, Docker, Git, CI/CD.',
  },
  {
    role: 'Freelance',
    start: '2022-11',
    end: '2024-12',
    description: {
      es: 'Full stack. Cliente principal: Muaytax.',
      ca: 'Full stack. Client principal: Muaytax.',
      en: 'Full stack. Main client: Muaytax.',
    },
    stack: 'Python/Django, Vue, PostgreSQL, Bootstrap, Docker, Git, CI/CD.',
  },
  {
    role: 'Full Stack Developer',
    company: 'PFS Group',
    start: '2018-11',
    end: '2021-11',
    description: 'MEAN, Java, Oracle, PostgreSQL, Talend, UiPath, Docker.',
  },
  {
    role: { es: 'Programador RPA y .NET', ca: 'Programador RPA i .NET', en: 'RPA & .NET Developer' },
    company: 'DXC Technology',
    start: '2017-12',
    end: '2018-11',
    description: {
      es: 'RPA con UiPath. VB.NET y C#.',
      ca: 'RPA amb UiPath. VB.NET i C#.',
      en: 'RPA with UiPath. VB.NET and C#.',
    },
  },
  {
    role: { es: 'Programador Java', ca: 'Programador Java', en: 'Java Developer' },
    company: 'ODEC',
    start: '2011-03',
    end: '2011-06',
    description: {
      es: 'App hospitalaria para el gobierno balear.',
      ca: 'App hospitalària per al govern balear.',
      en: 'Hospital app for the Balearic Islands government.',
    },
    tag: {
      es: 'Prácticas Grado Superior',
      ca: 'Pràctiques Grau Superior',
      en: 'Internship · Higher Vocational Diploma',
    },
  },
  {
    role: { es: 'Técnico informático', ca: 'Tècnic informàtic', en: 'IT Technician' },
    company: 'SERMICRO',
    start: '2009-03',
    end: '2009-06',
    description: {
      es: 'Instalación de software y reparación de equipos.',
      ca: "Instal·lació de programari i reparació d'equips.",
      en: 'Software installation and hardware repair.',
    },
    tag: {
      es: 'Prácticas Grado Medio',
      ca: 'Pràctiques Grau Mitjà',
      en: 'Internship · Intermediate Vocational Diploma',
    },
  },
];

export const education = {
  degree: {
    es: 'Ingeniería Informática, UPV (2011–2016)',
    ca: 'Enginyeria Informàtica, UPV (2011–2016)',
    en: 'Computer Engineering, UPV (2011–2016)',
  } as Text,
  cert: 'Scrum Foundation Professional (2019)' as Text,
};

export interface Project {
  title: Text;
  /** Subtítulo corto bajo el título */
  tagline?: Text;
  description: Text;
  tags: string[];
  /** Distinción o premio, se muestra como etiqueta */
  award?: Text;
  /** Estado del proyecto (p. ej. en desarrollo), se muestra como etiqueta */
  status?: Text;
  /** Logo o ilustración que se muestra entera (sin recortar) cuando no hay capturas */
  logo?: { src: ImageMetadata; alt: Text };
  /** Kanji decorativo cuando no hay capturas */
  glyph?: string;
  /**
   * Capturas (en src/assets); la primera es la portada de la tarjeta.
   * En el carrusel, por defecto la imagen se recorta para llenar el hueco:
   * `focus` es la parte que se mantiene visible (object-position, por defecto 'left top').
   * Con `fit: 'contain'` se muestra entera, y `background` rellena el espacio sobrante.
   */
  gallery?: {
    src: ImageMetadata;
    alt: Text;
    focus?: string;
    fit?: 'cover' | 'contain';
    background?: string;
  }[];
  url?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: { es: 'Plataforma fiscal Muay Tax', ca: 'Plataforma fiscal Muay Tax', en: 'Muay Tax platform' },
    description: {
      es: 'Plataforma de gestión fiscal nacional e internacional especializada en vendedores de e-commerce y marketplaces como Amazon.',
      ca: "Plataforma de gestió fiscal nacional i internacional especialitzada en venedors d'e-commerce i marketplaces com Amazon.",
      en: 'National and international tax management platform specialized in e-commerce and marketplace sellers such as Amazon.',
    },
    tags: ['django', 'vue', 'postgresql', 'docker', 'ci/cd'],
    award: 'ファイナリスト · Marketplaces Awards 2025',
    url: 'https://muaytax.com/',
    glyph: '税',
    gallery: [
      {
        src: muaytaxLogin,
        alt: { es: 'Pantalla de inicio de sesión', ca: "Pantalla d'inici de sessió", en: 'Login screen' },
        focus: 'center',
        fit: 'contain',
        background: '#f4f8fb',
      },
      {
        src: muaytaxPanel,
        alt: {
          es: 'Panel de contabilidad con ingresos, gastos y beneficios',
          ca: 'Tauler de comptabilitat amb ingressos, despeses i beneficis',
          en: 'Accounting dashboard with income, expenses and profit',
        },
        focus: 'center',
        fit: 'contain',
        background: '#f4f8fb',
      },
      {
        src: muaytaxFacturas,
        alt: { es: 'Listado de facturas', ca: 'Llistat de factures', en: 'Invoice list' },
        focus: 'center',
        fit: 'contain',
        background: '#f4f8fb',
      },
      {
        src: muaytaxWeb,
        alt: {
          es: 'Landing page de la tienda de servicios de Muay Tax',
          ca: 'Landing page de la botiga de serveis de Muay Tax',
          en: 'Landing page of the Muay Tax services store',
        },
        focus: 'center',
        fit: 'contain',
        background: '#ffffff',
      },
    ],
    featured: true,
  },
  {
    title: 'Págame, moroso',
    tagline: {
      es: 'Recordatorios de deudas para amigos que se hacen los locos',
      ca: 'Recordatoris de deutes per a amics que es fan els despistats',
      en: 'Debt reminders for friends who play dumb',
    },
    description: {
      es: 'Side project: recordatorios con gracia para quien te debe dinero, listos para WhatsApp, con guías, plantillas y calculadora de intereses. Sin base de datos: todo viaja en el enlace.',
      ca: "Side project: recordatoris amb gràcia per a qui et deu diners, a punt per a WhatsApp, amb guies, plantilles i calculadora d'interessos. Sense base de dades: tot viatja en l'enllaç.",
      en: 'Side project: witty reminders for whoever owes you money, ready for WhatsApp, with guides, templates and an interest calculator. No database: everything travels in the link.',
    },
    tags: ['astro', 'typescript', 'cloudflare pages', 'd1', 'vitest'],
    status: '公開中 · Live',
    url: 'https://pagamemoroso.com/',
    gallery: [
      {
        src: pagameMorosoPortada,
        alt: {
          es: 'Portada: ¿Te deben pasta? Recordatorio de ejemplo para mandar por WhatsApp',
          ca: "Portada: Et deuen diners? Recordatori d'exemple per a enviar per WhatsApp",
          en: 'Home: Owed money? Sample reminder to send via WhatsApp',
        },
        focus: 'center',
        fit: 'contain',
        background: '#ffe24d',
      },
      {
        src: pagameMorosoAviso,
        alt: {
          es: 'Aviso que ve el moroso al abrir el enlace',
          ca: "Avís que veu el morós en obrir l'enllaç",
          en: 'Notice the debtor sees when opening the link',
        },
        focus: 'center',
        fit: 'contain',
        background: '#ffe24d',
      },
      {
        src: pagameMorosoCalculadora,
        alt: {
          es: 'Calculadora de intereses de demora',
          ca: "Calculadora d'interessos de demora",
          en: 'Late-payment interest calculator',
        },
        focus: 'center',
        fit: 'contain',
        background: '#ffe24d',
      },
      {
        src: pagameMorosoPlantillas,
        alt: {
          es: 'Plantillas de mensajes y cartas de reclamación',
          ca: 'Plantilles de missatges i cartes de reclamació',
          en: 'Message and claim letter templates',
        },
        focus: 'center',
        fit: 'contain',
        background: '#ffe24d',
      },
    ],
    featured: true,
  },
  {
    title: 'MASGA',
    tagline: 'Make Anime Subtitles Great Again',
    description: {
      es: 'Side project personal: una app de escritorio que recupera el estilo de los fansubs clásicos. Analiza el audio de cada episodio para saber qué personaje habla en cada línea y le asigna automáticamente su propio color y tipografía, sin editar los subtítulos a mano.',
      ca: "Side project personal: una app d'escriptori que recupera l'estil dels fansubs clàssics. Analitza l'àudio de cada episodi per a saber quin personatge parla en cada línia i li assigna automàticament el seu propi color i tipografia, sense editar els subtítols a mà.",
      en: "Personal side project: a desktop app that brings back the style of classic anime fansubs. It analyzes each episode's audio to work out which character speaks each line and automatically gives them their own color and font, with no manual subtitle editing.",
    },
    tags: ['python', 'pyside6', 'pyannote', 'whisperx', 'demucs', 'ffmpeg', 'llm'],
    status: '近日公開 · Coming soon',
    logo: {
      src: masgaMascota,
      alt: {
        es: 'Mascota de MASGA: una chica anime con una gorra roja de MASGA',
        ca: 'Mascota de MASGA: una xica anime amb una gorra roja de MASGA',
        en: 'MASGA mascot: an anime girl wearing a red MASGA cap',
      },
    },
    featured: true,
  },
  // Para añadir más proyectos, copia este bloque:
  // {
  //   title: 'Nombre del proyecto',
  //   description: { es: 'Una línea sobre qué hace.', en: 'One line about what it does.' },
  //   tags: ['vue', 'django'],
  //   url: 'https://github.com/Klausus/...',
  // },
];

// `highlight` (opcional) es una frase destacada que aparece encima del texto;
// `wide` hace la tarjeta más ancha que las demás, para textos largos
export const hobbies: { jp: string; title: Text; highlight?: Text; text: Text; wide?: boolean }[] = [
  {
    jp: 'アニメ',
    title: { es: 'Anime y manga', ca: 'Anime i manga', en: 'Anime & manga' },
    highlight: { es: 'Otaku declarado', ca: 'Otaku declarat', en: 'Proud otaku' },
    text: {
      es: 'El anime y el manga son mi gran afición.',
      ca: "L'anime i el manga són la meua gran afició.",
      en: 'Anime and manga are my biggest passion.',
    },
  },
  {
    jp: 'ゲーム',
    title: { es: 'Videojuegos', ca: 'Videojocs', en: 'Video games' },
    highlight: {
      es: 'Segero → Sonyer → Nintendero',
      ca: 'Seguer → Sonyer → Nintender',
      en: 'Sega kid → Sony fan → Nintendo fan',
    },
    text: {
      es: 'Infancia: Master System II y Mega Drive.\nAdolescencia: PlayStation 1 y 2.\nHoy: Nintendo y PC Master Race.',
      ca: 'Infància: Master System II i Mega Drive.\nAdolescència: PlayStation 1 i 2.\nHui: Nintendo i PC Master Race.',
      en: 'Childhood: Master System II and Mega Drive.\nTeens: PlayStation 1 and 2.\nToday: Nintendo and PC Master Race.',
    },
    wide: true,
  },
  {
    jp: '音楽',
    title: { es: 'Música', ca: 'Música', en: 'Music' },
    text: {
      es: 'JPOP y anisongs principalmente.\nTambién escucho rock, hip hop, pop y BSO.',
      ca: 'JPOP i anisongs principalment.\nTambé escolte rock, hip hop, pop i BSO.',
      en: 'Mostly JPOP and anisongs.\nI also listen to rock, hip hop, pop and soundtracks.',
    },
  },
  {
    jp: '映画',
    title: { es: 'Series y cine', ca: 'Sèries i cine', en: 'TV & film' },
    text: {
      es: 'Géneros favoritos:\nCiencia ficción y sitcoms.',
      ca: 'Gèneres preferits:\nCiència-ficció i sitcoms.',
      en: 'Favorite genres:\nSci-fi and sitcoms.',
    },
  },
  {
    jp: '日本',
    title: { es: 'Japón', ca: 'Japó', en: 'Japan' },
    text: {
      es: 'Amante de Japón y de las culturas asiáticas.',
      ca: 'Amant del Japó i de les cultures asiàtiques.',
      en: 'In love with Japan and Asian cultures.',
    },
  },
];

// --- utilidades de formato ---

const MONTHS: Record<Locale, string[]> = {
  es: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'],
  ca: ['gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export function formatMonth(ym: string, locale: Locale): string {
  const [year, month] = ym.split('-');
  return `${MONTHS[locale][Number(month) - 1]} ${year}`;
}

export function yearRange(job: Job): string {
  const from = job.start.slice(0, 4);
  if (job.end === null) return `${from} → now`;
  const to = job.end.slice(0, 4);
  return from === to ? from : `${from} → ${to}`;
}

export function logTitle(role: string, company?: string): string {
  const slug = (s: string) => s.toUpperCase().replace(/\s+/g, '_');
  return company ? `${slug(role)} @ ${slug(company)}` : slug(role);
}

export const currentJob = experience.find((job) => job.end === null);
