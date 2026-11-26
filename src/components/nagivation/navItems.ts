import {
  House,
  LayoutGrid,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  to: string
  label: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Início', icon: House },
  { to: '/boards', label: 'Quadros', icon: LayoutGrid },
  { to: '/settings', label: 'Configurações', icon: SlidersHorizontal },
]
