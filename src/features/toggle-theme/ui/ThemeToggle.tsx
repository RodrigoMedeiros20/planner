import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'
import type { Theme } from '../model/useTheme'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useTranslation()
  const isDark = theme === 'dark'

  return (
    <Button
      type="button"
      variant="outline"
      onClick={onToggle}
      className="h-11 w-full justify-start gap-3 rounded-[10px] bg-transparent px-3 font-normal dark:bg-transparent"
    >
      {isDark ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
      {isDark ? t('theme.light') : t('theme.dark')}
    </Button>
  )
}
