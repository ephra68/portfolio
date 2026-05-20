export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-8 text-sm text-slate-600 dark:border-slate-800/60 dark:text-slate-400">
      <div className="mx-auto max-w-6xl px-4">© {new Date().getFullYear()} Ephratech. Tous droits réservés.</div>
    </footer>
  )
}
