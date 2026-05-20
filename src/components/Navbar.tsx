import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { toggleTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold tracking-wide">Ephratech</div>
        <div className="flex items-center gap-3">
          <a className="text-sm hover:underline" href="#contact">
            Contact
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md border border-slate-200 px-3 py-1 text-sm dark:border-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  )
}

