export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Parcours / Formations</h2>
      <div className="mt-6 space-y-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200/60 bg-white p-5 dark:border-slate-800/60 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold">Élément {i + 1}</h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">2023 - 2024</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Remplace ce bloc par ta formation/expérience réelle (description, stack, résultats).
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

