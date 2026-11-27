import type { RouteObject } from 'react-router'
import { BoardsPage } from '@/pages/boards'
import { HomePage } from '@/pages/home'
import { SettingsPage } from '@/pages/settings'
import { routePaths } from '@/shared/config/routes'
import { AppLayout } from '../layouts/AppLayout'

export const routes: RouteObject[] = [
  {
    path: routePaths.home,
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routePaths.boards, element: <BoardsPage /> },
      { path: routePaths.settings, element: <SettingsPage /> },
    ],
  },
]
