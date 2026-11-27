import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'
import { routes } from './routes'

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(<RouterProvider router={router} />)
}

describe('app layout', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
    localStorage.clear()
  })

  it('shows the home page by default', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { name: 'Início' })).toBeInTheDocument()
  })

  it('navigates to the boards page from the menu', async () => {
    const user = userEvent.setup()
    renderAt('/')

    await user.click(screen.getAllByRole('link', { name: 'Quadros' })[0])

    expect(screen.getByRole('heading', { name: 'Quadros' })).toBeInTheDocument()
  })

  it('toggles the theme and remembers the choice', async () => {
    const user = userEvent.setup()
    renderAt('/')

    await user.click(screen.getByRole('button', { name: /modo escuro/i }))

    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem('planner:theme')).toBe('dark')
  })
})
