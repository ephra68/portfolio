export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Développeur • React • Web</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Ephratech — Portfolio
          </h1>
          <p className="mt-4 max-w-prose text-slate-600 dark:text-slate-400">
            Je conçois des interfaces modernes et performantes. Dark/Light, composants réutilisables, sections prêtes à l’emploi.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
              href="#projects"
            >
              Voir les projets
            </a>
            <a
              className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900"
              href="#contact"
            >
              Me contacter
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:to-slate-900">
          <h2 className="text-lg font-semibold">Résumé</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>• Architecture claire (components/sections/context)</li>
            <li>• Tailwind prêt (index.css + dark mode)</li>
            <li>• Base réutilisable pour ton portfolio</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

