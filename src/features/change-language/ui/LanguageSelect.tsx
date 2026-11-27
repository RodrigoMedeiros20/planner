import { useTranslation } from 'react-i18next'
import { supportedLanguages, type Language } from '@/shared/config/i18n'

const languageNames: Record<Language, string> = {
  'pt-BR': 'Português',
  en: 'English',
}

export function LanguageSelect() {
  const { t, i18n } = useTranslation()

  return (
    <label className="flex max-w-xs flex-col gap-2">
      <span className="text-sm font-semibold">{t('settings.language')}</span>
      <select
        value={i18n.language}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        className="border-border bg-surface text-foreground min-h-11 rounded-xl border px-3 text-sm transition-colors"
      >
        {supportedLanguages.map((language) => (
          <option key={language} value={language}>
            {languageNames[language]}
          </option>
        ))}
      </select>
    </label>
  )
}
