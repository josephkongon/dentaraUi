import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from '~/translations/en.json';

export const getLanguage = (): string =>
  (window.localStorage.getItem('i18nextLng') as string) || i18n.language || 'en';

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export function getAllLanguages() {
  return Object.keys(resources);
}
