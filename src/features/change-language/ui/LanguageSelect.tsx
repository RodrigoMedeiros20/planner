import { useTranslation } from 'react-i18next'
import { supportedLanguages, type Language } from '@/shared/config/i18n'
import { Label } from '@/shared/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'

const languageNames: Record<Language, string> = {
  'pt-BR': 'Português',
  en: 'English',
}

export function LanguageSelect() {
  const { t, i18n } = useTranslation()

  return (
    <div className="flex max-w-xs flex-col gap-2">
      <Label htmlFor="language">{t('settings.language')}</Label>
      <Select
        value={i18n.language}
        onValueChange={(value) => i18n.changeLanguage(value)}
      >
        <SelectTrigger
          id="language"
          className="bg-card w-full px-3 data-[size=default]:h-11"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          {supportedLanguages.map((language) => (
            <SelectItem key={language} value={language} className="py-2">
              {languageNames[language]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
