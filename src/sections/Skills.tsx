const skills = ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Performance', 'Architecture']

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Compétences</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}

