export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/60 bg-white p-6 dark:border-slate-800/60 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Formulaire (placeholder). Tu peux brancher une API plus tard (EmailJS, backend, etc.).
          </p>
          <form className="mt-4 space-y-3">
            <input
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Ton nom"
              name="name"
            />
            <input
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Ton email"
              name="email"
            />
            <textarea
              className="min-h-28 w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Ton message"
              name="message"
            />
            <button
              type="button"
              className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Envoyer
            </button>
          </form>
        </div>
        <div className="rounded-2xl border border-slate-200/60 bg-white p-6 dark:border-slate-800/60 dark:bg-slate-900">
          <h3 className="text-base font-semibold">Infos</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• Email: exemple@email.com</li>
            <li>• Ville: Exemple</li>
            <li>• Disponibilité: Ouvert aux opportunités</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

