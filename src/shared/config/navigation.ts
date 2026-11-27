import {
  House,
  LayoutGrid,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react'
import { routePaths } from './routes'

export type NavItem = {
  to: string
  labelKey: 'home' | 'boards' | 'settings'
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { to: routePaths.home, labelKey: 'home', icon: House },
  { to: routePaths.boards, labelKey: 'boards', icon: LayoutGrid },
  { to: routePaths.settings, labelKey: 'settings', icon: SlidersHorizontal },
]
