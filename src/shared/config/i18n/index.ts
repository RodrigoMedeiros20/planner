import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './locales/en'
import { ptBR } from './locales/pt-BR'

export const supportedLanguages = ['pt-BR', 'en'] as const
export type Language = (typeof supportedLanguages)[number]

export const LANGUAGE_STORAGE_KEY = 'planner:language'

function isLanguage(value: string | null): value is Language {
  return supportedLanguages.includes(value as Language)
}

function getInitialLanguage(): Language {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return isLanguage(saved) ? saved : 'pt-BR'
}

i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: ptBR },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
})

document.documentElement.lang = i18n.language

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
})

export { i18n }
