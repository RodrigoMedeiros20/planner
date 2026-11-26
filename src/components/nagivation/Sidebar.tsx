import { NavLink } from 'react-router'
import { Check, Moon, Sun } from 'lucide-react'
import type { Theme } from '../../hooks/useTheme'
import { navItems } from './navItems'

type SidebarProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  const isDark = theme === 'dark'

  return (
    <aside className="border-border bg-surface sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-7 border-r px-4 py-7 transition-colors duration-300 md:flex">
      <div className="flex items-center gap-2.5 px-2.5">
        <span className="bg-accent text-on-accent flex size-9 items-center justify-center rounded-[10px]">
          <Check className="size-[18px]" strokeWidth={2.6} aria-hidden="true" />
        </span>
        <span className="text-lg font-bold tracking-tight">Planner</span>
      </div>

      <nav aria-label="Menu principal" className="flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? 'bg-accent-soft text-accent font-semibold'
                  : 'text-muted hover:bg-surface-muted hover:text-foreground font-medium'
              }`
            }
          >
            <Icon className="size-[18px]" aria-hidden="true" />
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={onToggleTheme}
        className="border-border text-foreground hover:bg-surface-muted mt-auto flex min-h-11 items-center gap-3 rounded-[10px] border px-3 text-sm transition-colors"
      >
        {isDark ? (
          <Sun className="size-[18px]" aria-hidden="true" />
        ) : (
          <Moon className="size-[18px]" aria-hidden="true" />
        )}
        {isDark ? 'Modo claro' : 'Modo escuro'}
      </button>
    </aside>
  )
}
