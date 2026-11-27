import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../model/useTheme'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="border-border text-foreground hover:bg-surface-muted flex min-h-11 w-full items-center gap-3 rounded-[10px] border px-3 text-sm transition-colors"
    >
      {isDark ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
      {isDark ? 'Modo claro' : 'Modo escuro'}
    </button>
  )
}
