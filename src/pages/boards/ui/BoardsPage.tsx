import { useTranslation } from 'react-i18next'

export function BoardsPage() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight">{t('boards.title')}</h1>
      <p className="text-muted-foreground">{t('boards.description')}</p>
    </section>
  )
}
