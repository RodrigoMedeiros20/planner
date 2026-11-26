import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('toggles dark mode on the html element', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /modo escuro/i }))

    expect(document.documentElement).toHaveClass('dark')
    expect(
      screen.getByRole('button', { name: /modo claro/i }),
    ).toBeInTheDocument()
  })
})
