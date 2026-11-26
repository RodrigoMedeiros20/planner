import { NavLink } from 'react-router'
import { navItems } from './navItems'

export function BottomNav() {
  return (
    <nav
      aria-label="Menu principal"
      className="border-border bg-surface/90 fixed inset-x-0 bottom-0 z-10 grid grid-cols-3 border-t px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-colors duration-300 md:hidden"
    >
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex min-h-12 flex-col items-center justify-center gap-1 text-[11px] transition-colors ${
              isActive ? 'text-accent font-semibold' : 'text-muted font-medium'
            }`
          }
        >
          <Icon className="size-[22px]" aria-hidden="true" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
