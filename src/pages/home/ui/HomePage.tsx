import { useTranslation } from 'react-i18next'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight">{t('home.title')}</h1>
      <p className="text-muted">{t('home.description')}</p>
    </section>
  )
}
