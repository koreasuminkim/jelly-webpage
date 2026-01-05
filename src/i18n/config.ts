import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ko from './locales/ko.json';
import en from './locales/en.json';

// 언어 코드 정규화 함수
const normalizeLanguage = (lng: string): string => {
  if (!lng) return 'ko';
  
  const lowerLng = lng.toLowerCase();
  
  // 'en-US', 'en-GB', 'en' 등을 'en'으로 변환
  if (lowerLng.startsWith('en')) {
    return 'en';
  }
  // 'ko-KR', 'ko' 등을 'ko'로 변환
  if (lowerLng.startsWith('ko')) {
    return 'ko';
  }
  // 기본값은 한국어
  return 'ko';
};

// 커스텀 언어 감지 함수
const customLanguageDetector = {
  name: 'customDetector',
  lookup() {
    // localStorage에서 먼저 확인
    const stored = localStorage.getItem('i18nextLng');
    if (stored) {
      return normalizeLanguage(stored);
    }
    
    // 브라우저 언어 확인
    const browserLang = navigator.language || (navigator as any).userLanguage;
    if (browserLang) {
      return normalizeLanguage(browserLang);
    }
    
    // 기본값
    return 'ko';
  },
  cacheUserLanguage(lng: string) {
    localStorage.setItem('i18nextLng', normalizeLanguage(lng));
  },
};

i18n
  .use(customLanguageDetector as any)
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
      order: ['customDetector', 'navigator', 'htmlTag', 'localStorage', 'cookie', 'querystring'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',
      lookupQuerystring: 'lng',
    },
    interpolation: {
      escapeValue: false,
    },
  });

// 언어 변경 시 localStorage에 저장
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', normalizeLanguage(lng));
});

export default i18n;

