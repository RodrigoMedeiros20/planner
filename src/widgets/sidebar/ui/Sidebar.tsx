import { NavLink } from 'react-router'
import { Check } from 'lucide-react'
import { ThemeToggle, type Theme } from '@/features/toggle-theme'
import { navItems } from '@/shared/config/navigation'
import { useTranslation } from 'react-i18next'

type SidebarProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  const { t } = useTranslation()

  return (
    <aside className="border-border bg-card sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-7 border-r px-4 py-7 transition-colors duration-300 md:flex">
      <div className="flex items-center gap-2.5 px-2.5">
        <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-[10px]">
          <Check className="size-[18px]" strokeWidth={2.6} aria-hidden="true" />
        </span>
        <span className="text-lg font-bold tracking-tight">Planner</span>
      </div>

      <nav aria-label={t('nav.label')} className="flex flex-col gap-1">
        {navItems.map(({ to, labelKey, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? 'bg-accent text-accent-foreground font-semibold'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground font-medium'
              }`
            }
          >
            <Icon className="size-[18px]" aria-hidden="true" />
            {t(`nav.${labelKey}`)}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </aside>
  )
}
