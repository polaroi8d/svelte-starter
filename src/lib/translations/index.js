import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  log: {
    level: dev ? 'warn' : 'error',
  },
  translations: {
    en: { lang },
    hu: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'hu',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./hu/home.json')).default,
    },
  ],
};
export const {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute,
} = new i18n(config);

loading.subscribe(
  ($loading) => $loading && console.log('Loading translations...')
);
