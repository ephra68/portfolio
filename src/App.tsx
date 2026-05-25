import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  Code,
  Database,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  UserRound,
  X,
} from 'lucide-react'

type ProjectStatus = 'realises' | 'en-cours' | 'termines'

type Project = {
  title: string
  category: string
  status: ProjectStatus
  statusLabel: string
  description: string
  stack: string[]
}

const projects: Project[] = [
  {
    title: 'Deep Learning Network IDS',
    category: 'Cybersécurité & IA',
    status: 'termines',
    statusLabel: 'Terminé',
    description:
      "Conception d'un système intelligent de détection d'intrusion réseau basé sur le deep learning pour identifier les comportements suspects.",
    stack: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Réseaux'],
  },
  {
    title: 'IA médicale: consultation & diagnostic',
    category: 'Intelligence Artificielle',
    status: 'en-cours',
    statusLabel: 'En cours',
    description:
      "Prototype e-santé orienté détection précoce, simulation de consultation et assistance à la prescription avec modèles NLP.",
    stack: ['Python', 'Transformers', 'NLP', 'FastAPI', 'Flask'],
  },
  {
    title: 'Détection des fraudes bancaires',
    category: 'Data Science & Sécurité',
    status: 'termines',
    statusLabel: 'Terminé',
    description:
      "Analyse prédictive et machine learning pour repérer les transactions suspectes et renforcer la surveillance antifraude.",
    stack: ['Python', 'Machine Learning', 'SQL', 'Data Analysis'],
  },
  {
    title: "Gestion de budget & garderie d'enfants",
    category: 'Full-stack Development',
    status: 'realises',
    statusLabel: 'Réalisé',
    description:
      "Application web combinant gestion financière, suivi opérationnel et organisation quotidienne pour les structures de garderie.",
    stack: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
  },
]

const skillGroups = [
  {
    title: 'Développement logiciel',
    icon: Code,
    items: ['React / Vue / Angular', 'Node.js / PHP / JavaScript', 'Java / C / C++ / Python', 'Applications mobiles Android'],
  },
  {
    title: 'Données & IA',
    icon: Database,
    items: ['TensorFlow / Keras / PyTorch', 'NLP / Transformers', 'FastAPI / Flask / Django', 'Power BI / KoboCollect / SQL'],
  },
  {
    title: 'Réseaux & cybersécurité',
    icon: Server,
    items: ['Configuration Cisco', 'Administration Linux', 'Audit sécurité SI', 'IDS / sécurité réseau'],
  },
]

const experiences = [
  {
    role: 'Formateur en Intelligence Artificielle',
    place: 'Projet Jeunesse Tchadienne',
    period: '2024 - 2025',
    points: ['Formation IA pour 2000 jeunes tchadiens', 'Création du curriculum et des supports', 'Ateliers pratiques ML et intégration IA'],
  },
  {
    role: 'Stagiaire IT - Développeur Full-stack',
    place: 'WenakLabs',
    period: '2023 - 2024',
    points: ['Applications web et mobiles', 'Fact-checking et sensibilisation', 'Interfaces modernes et responsives'],
  },
  {
    role: 'Projets sécurité réseaux',
    place: 'ENASTIC',
    period: '2025',
    points: ['Audits de sécurité', 'Maintenance réseau et parc informatique', 'Configuration Cisco et Linux'],
  },
]

const filters = [
  { id: 'realises', label: 'Projets réalisés' },
  { id: 'en-cours', label: 'En cours' },
  { id: 'termines', label: 'Terminés' },
] satisfies Array<{ id: ProjectStatus; label: string }>

const navLinks = [
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#profil', label: 'Qui suis-je' },
  { href: '#documents', label: 'CV & docs' },
]

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`
const profileImage = assetPath('assets/ephra.jpg')
const cvFile = assetPath('Madjalo_Ouya_Ephraim_cv.pdf')
const motivationLetter = assetPath('LM_Madjalo.pdf')
const contactEmail = 'emadjalouya@gmail.com'
const formspreeEndpoint = 'https://formspree.io/f/xnqozpvw'

function contactButton(label = 'Me contacter') {
  return (
    <a
      href="#contact"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-orange-400/30 bg-orange-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-orange-500/15 transition hover:-translate-y-0.5 hover:bg-orange-400"
    >
      <Mail size={16} />
      {label}
    </a>
  )
}

function GithubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | 'all'>('all')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.status === activeFilter)
  }, [activeFilter])

  const selectProjectFilter = (filter: ProjectStatus | 'all') => {
    setActiveFilter(filter)
    document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b12] text-slate-100 antialiased selection:bg-orange-400 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.18),transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.35),rgba(7,11,18,0.92)_46%,#070b12)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f16]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Retour à l'accueil">
            <span className="grid size-11 place-items-center rounded-lg bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/20">
              <Terminal size={22} />
            </span>
            <span className="font-mono text-lg font-black tracking-tight">
              EPHRA<span className="text-orange-400">TECH</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-orange-300">
                {link.label}
              </a>
            ))}
            {contactButton()}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-white/10 bg-[#0b0f16] px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="rounded-lg bg-orange-500 px-3 py-3 text-center font-bold text-slate-950">
                Me contacter
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="accueil">
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-18">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-300" />
              Disponible pour projets IA, data et sécurité
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                MADJALO OUYA Ephraim
                <span className="block bg-gradient-to-r from-orange-200 via-orange-400 to-emerald-300 bg-clip-text text-transparent">
                  Ingénieur IT, IA & cybersécurité.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Je conçois des solutions logicielles, des systèmes intelligents et des architectures data orientées performance,
                sécurité et impact terrain.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => selectProjectFilter('realises')}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-orange-300"
              >
                Réalisés <ArrowUpRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => selectProjectFilter('en-cours')}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-orange-300/50"
              >
                En cours <Target size={16} />
              </button>
              <button
                type="button"
                onClick={() => selectProjectFilter('termines')}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-orange-300/50"
              >
                Terminés <CheckCircle size={16} />
              </button>
              <a href="#competences" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-orange-300/50">
                Compétences <Sparkles size={16} />
              </a>
              <a href="#profil" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-orange-300/50">
                Qui suis-je <UserRound size={16} />
              </a>
              <a href="#documents" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-orange-300/50">
                CV & autres <FileText size={16} />
              </a>
            </div>

            <div className="grid max-w-2xl grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045]">
              {[
                ['04+', 'Projets forts'],
                ['2000+', 'Jeunes formés'],
                ['IA', 'Data & sécurité'],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-white/10 px-4 py-4 last:border-r-0">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-orange-300/50 via-white/10 to-emerald-300/40 opacity-70 blur-sm" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#0d1420]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="absolute right-5 top-5 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">
                OPEN TO WORK
              </div>
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950">
                <img
                  src={profileImage}
                  alt="Portrait de Madjalo Ouya Ephraim"
                  className="aspect-[4/5] h-full w-full object-cover object-center"
                />
              </div>
              <div className="space-y-4 p-2 pt-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-300">Profil premium</p>
                  <h2 className="mt-2 text-3xl font-black text-white">Ephraim Madjalo</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Assistant sécurité réseaux, data analyst et développeur full-stack formé à l'ENASTIC.
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3">
                    <MapPin size={17} className="text-orange-300" />
                    Chagoua, N'Djamena, Tchad
                  </div>
                  <div className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3">
                    <ShieldCheck size={17} className="text-orange-300" />
                    IDS intelligent, IA, réseaux, data
                  </div>
                  <div className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                    <Mail size={17} className="text-orange-300" />
                    {contactEmail}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/ephra68" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-lg border border-white/10 bg-slate-950 text-slate-300 transition hover:text-orange-300" aria-label="GitHub">
                    <GithubMark />
                  </a>
                  <a href="https://linkedin.com/in/madjalo-ouya-ephraim-5750a033a" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-lg border border-white/10 bg-slate-950 text-slate-300 transition hover:text-orange-300" aria-label="LinkedIn">
                    <LinkedinMark />
                  </a>
                  <a href={cvFile} target="_blank" rel="noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-950 px-4 text-sm font-bold text-slate-100 transition hover:text-orange-300">
                    <Download size={16} />
                    CV
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="projets" className="border-y border-white/10 bg-white/[0.025] py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-orange-300">// Projets</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Travaux réalisés, en cours et terminés</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => setActiveFilter('all')} className={`rounded-lg px-4 py-2 text-sm font-bold transition ${activeFilter === 'all' ? 'bg-orange-400 text-slate-950' : 'border border-white/10 text-slate-300 hover:text-white'}`}>
                  Tous
                </button>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-bold transition ${activeFilter === filter.id ? 'bg-orange-400 text-slate-950' : 'border border-white/10 text-slate-300 hover:text-white'}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {visibleProjects.map((project) => (
                <article key={project.title} className="group rounded-lg border border-white/10 bg-[#0f1724] p-6 transition hover:-translate-y-1 hover:border-orange-300/40">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-300">{project.category}</span>
                    <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-300">{project.statusLabel}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-white transition group-hover:text-orange-300">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">{contactButton('Me contacter pour un projet')}</div>
          </div>
        </section>

        <section id="competences" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-orange-300">// Compétences</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Un profil hybride: code, IA, data et sécurité.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <Icon size={24} className="text-orange-300" />
                <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Sécurité des SI', 'Intelligence Artificielle', 'Cisco Networking', 'E-commerce Alibaba'].map((certification) => (
              <div key={certification} className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0f1724] px-4 py-4 text-sm font-bold text-slate-200">
                <Award size={17} className="text-orange-300" />
                {certification}
              </div>
            ))}
          </div>
          <div className="mt-10">{contactButton()}</div>
        </section>

        <section id="profil" className="border-y border-white/10 bg-[#0f1724] py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-orange-300">// Qui suis-je</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Un constructeur de solutions utiles et robustes.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Mon approche combine rigueur d'ingénierie, compréhension métier et sens du terrain. Je transforme les besoins
                en interfaces, modèles et infrastructures exploitables.
              </p>
              <div className="mt-8">{contactButton('Discuter avec moi')}</div>
            </div>
            <div className="grid gap-5">
              {experiences.map((experience) => (
                <article key={experience.role} className="rounded-lg border border-white/10 bg-[#0b0f16] p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs font-bold text-orange-300">{experience.period}</span>
                    <Briefcase size={17} className="text-slate-500" />
                  </div>
                  <h3 className="mt-3 text-lg font-black text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm font-bold text-emerald-300">{experience.place}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="documents" className="mx-auto max-w-6xl px-5 py-20">
          <div className="text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-orange-300">// CV & documents</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Documents professionnels</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <FileText size={28} className="text-orange-300" />
              <h3 className="mt-5 text-xl font-black text-white">Curriculum Vitae</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">CV orienté ingénierie IT, data, IA et sécurité réseaux.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={cvFile} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-300">
                  Voir le PDF <ExternalLink size={16} />
                </a>
                <a href={cvFile} download className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-bold text-slate-100 transition hover:text-orange-300">
                  Télécharger <Download size={16} />
                </a>
              </div>
            </article>
            <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <BookOpen size={28} className="text-orange-300" />
              <h3 className="mt-5 text-xl font-black text-white">Lettre & ressources</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Accès rapide aux documents complémentaires et originaux de travail.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={motivationLetter} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-300">
                  Voir la lettre <ExternalLink size={16} />
                </a>
                <a href="https://fr.overleaf.com/project/68f16ad4d1486ac527ed6db8" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-bold text-slate-100 transition hover:text-orange-300">
                  Overleaf <ExternalLink size={16} />
                </a>
              </div>
            </article>
          </div>
          <div className="mt-10 flex justify-center">{contactButton('Me contacter après lecture')}</div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-[#0f1724] py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-orange-300">// Contact</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Lançons une collaboration sérieuse.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Disponible pour des missions en développement, data, intelligence artificielle, sécurité réseaux et audit technique.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-orange-300" />
                  Chagoua, N'Djamena / Tchad
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-300" />
                  <a href={`mailto:${contactEmail}?subject=${encodeURIComponent('Contact depuis votre portfolio')}`} className="transition hover:text-orange-300">
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>

            <form className="rounded-lg border border-white/10 bg-[#0b0f16] p-6" action={formspreeEndpoint} method="POST">
              <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                  Nom complet
                  <input type="text" name="name" required className="min-h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm normal-case tracking-normal text-white outline-none transition focus:border-orange-300" placeholder="Votre nom" />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                  Email
                  <input type="email" name="email" required className="min-h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm normal-case tracking-normal text-white outline-none transition focus:border-orange-300" placeholder="votre@email.com" />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                Message
                <textarea rows={5} name="message" required className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition focus:border-orange-300" placeholder="Décrivez votre besoin technique..." />
              </label>
              <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-orange-400">
                Envoyer le message <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0f16] px-5 py-8 text-center text-xs text-slate-500">
        © 2026 EPHRATECH. Développé par Madjalo Ouya Ephraim.
      </footer>
    </div>
  )
}
