import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { useAnimateOnLanguageChange } from '@/features/change-language'
import { useTheme } from '@/features/toggle-theme'
import { BottomNav } from '@/widgets/bottom-nav'
import { Sidebar } from '@/widgets/sidebar'

export function AppLayout() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)

  useAnimateOnLanguageChange(contentRef)

  return (
    <div className="flex min-h-screen">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />

      <main className="min-w-0 flex-1 px-5 pt-8 pb-28 sm:px-8 md:px-12 md:pt-10 md:pb-14">
        <div
          key={location.pathname}
          ref={contentRef}
          className="animate-rise mx-auto max-w-5xl"
        >
          <Outlet />
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
