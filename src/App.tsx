import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    setIsDark(next)
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 p-6 sm:p-10">
      <h1 className="animate-rise text-3xl font-bold tracking-tight">
        Planner
      </h1>

      <section className="animate-rise border-border bg-surface rounded-2xl border p-5">
        <p className="text-muted">Os tokens do design estão funcionando.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-late-soft text-late rounded-full px-3 py-1 text-xs font-semibold">
            Atrasada
          </span>
          <span className="bg-today-soft text-today rounded-full px-3 py-1 text-xs font-semibold">
            Vence hoje
          </span>
          <span className="bg-soon-soft text-soon rounded-full px-3 py-1 text-xs font-semibold">
            Perto de vencer
          </span>
          <span className="bg-ok-soft text-ok rounded-full px-3 py-1 text-xs font-semibold">
            Em dia
          </span>
        </div>
      </section>

      <button
        type="button"
        onClick={toggleTheme}
        className="bg-accent text-on-accent min-h-11 self-start rounded-xl px-5 text-sm font-semibold transition hover:brightness-105"
      >
        {isDark ? 'Modo claro' : 'Modo escuro'}
      </button>
    </main>
  )
}

export default App
