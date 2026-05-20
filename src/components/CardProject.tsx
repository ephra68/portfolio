export type Project = {
  title: string
  description: string
  href?: string
}

export default function CardProject({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-800/60 dark:bg-slate-900">
      <h3 className="text-base font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>
      {project.href ? (
        <a className="mt-4 inline-block text-sm font-medium underline" href={project.href}>
          Voir le projet
        </a>
      ) : null}
    </article>
  )
}

