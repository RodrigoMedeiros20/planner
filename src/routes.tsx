import type { RouteObject } from 'react-router'
import { AppLayout } from './layouts/AppLayout'
import { BoardsPage } from './pages/BoardsPage'
import { HomePage } from './pages/HomePage'
import { SettingsPage } from './pages/SettingsPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'boards', element: <BoardsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]
