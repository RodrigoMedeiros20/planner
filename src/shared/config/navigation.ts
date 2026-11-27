import {
  House,
  LayoutGrid,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react'
import { routePaths } from './routes'

export type NavItem = {
  to: string
  label: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { to: routePaths.home, label: 'Início', icon: House },
  { to: routePaths.boards, label: 'Quadros', icon: LayoutGrid },
  { to: routePaths.settings, label: 'Configurações', icon: SlidersHorizontal },
]
