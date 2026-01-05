import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ko from './locales/ko.json';
import en from './locales/en.json';

// 언어 코드 정규화 함수
const normalizeLanguage = (lng: string): string => {
  // 'en-US', 'en-GB' 등을 'en'으로 변환
  if (lng.startsWith('en')) {
    return 'en';
  }
  // 'ko-KR', 'ko' 등을 'ko'로 변환
  if (lng.startsWith('ko')) {
    return 'ko';
  }
  // 기본값은 한국어
  return 'ko';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: {
        translation: ko,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'ko',
    supportedLngs: ['ko', 'en'],
    detection: {
      order: ['navigator', 'htmlTag', 'localStorage', 'cookie', 'querystring', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',
      lookupQuerystring: 'lng',
      convertDetectedLanguage: (lng: string) => normalizeLanguage(lng),
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

