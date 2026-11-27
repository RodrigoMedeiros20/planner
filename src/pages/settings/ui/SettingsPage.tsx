import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '@/features/change-language'

export function SettingsPage() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-8">
      <div className="flex-flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {t('settings.title')}
        </h1>
        <p className="text-muted">{t('settings.description')}</p>
      </div>
      <LanguageSelect />
    </section>
  )
}
