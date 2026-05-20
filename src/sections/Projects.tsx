import CardProject, { type Project } from '../components/CardProject'

const projects: Project[] = [
  {
    title: 'Portfolio v1',
    description: 'Base React + Tailwind + sections et composants réutilisables.',
  },
  {
    title: 'Dashboard',
    description: 'UI claire, responsive et optimisée pour l’expérience utilisateur.',
  },
  {
    title: 'Landing',
    description: 'Design moderne et contenu facilement remplaçable.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Projets</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <CardProject key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

