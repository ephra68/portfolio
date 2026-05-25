import { useMemo, useState } from 'react'
import {
  ArrowRight,
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
  Terminal,
  UserRound,
  X,
} from 'lucide-react'

type View = 'projets' | 'competences' | 'profil' | 'documents'
type ProjectStatus = 'Réalisé' | 'En cours' | 'Terminé'

type Project = {
  title: string
  category: string
  status: ProjectStatus
  description: string
  stack: string[]
}

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`
const profileImage = assetPath('assets/ephra.jpg')
const cvFile = assetPath('Madjalo_Ouya_Ephraim_cv.pdf')
const motivationLetter = assetPath('LM_Madjalo.pdf')
const contactEmail = 'emadjalouya@gmail.com'
const formspreeEndpoint = 'https://formspree.io/f/xnqozpvw'

const projects: Project[] = [
  {
    title: 'Deep Learning Network IDS',
    category: 'Cybersécurité & IA',
    status: 'Terminé',
    description:
      "Système intelligent de détection d'intrusion réseau basé sur le deep learning pour identifier les comportements suspects.",
    stack: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Réseaux'],
  },
  {
    title: 'IA médicale: consultation & diagnostic',
    category: 'Intelligence Artificielle',
    status: 'En cours',
    description:
      "Prototype e-santé pour la détection précoce, la simulation de consultation et l'assistance à la prescription.",
    stack: ['Python', 'Transformers', 'NLP', 'FastAPI', 'Flask'],
  },
  {
    title: 'Détection des fraudes bancaires',
    category: 'Data Science & Sécurité',
    status: 'Terminé',
    description:
      'Analyse prédictive et machine learning pour repérer les transactions suspectes et renforcer la surveillance antifraude.',
    stack: ['Python', 'Machine Learning', 'SQL', 'Data Analysis'],
  },
  {
    title: "Gestion de budget & garderie d'enfants",
    category: 'Full-stack Development',
    status: 'Réalisé',
    description:
      'Application web de gestion financière, suivi opérationnel et organisation quotidienne pour les structures de garderie.',
    stack: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
  },
]

const skills = [
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
    points: ['Formation IA pour 2000 jeunes tchadiens', 'Création du curriculum pédagogique', 'Ateliers pratiques ML et IA'],
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

const viewButtons = [
  { id: 'projets', label: 'Projets', description: 'Voir les réalisations', icon: Briefcase },
  { id: 'competences', label: 'Compétences', description: 'Explorer mes outils', icon: Sparkles },
  { id: 'profil', label: 'Qui suis-je', description: 'Comprendre mon parcours', icon: UserRound },
  { id: 'documents', label: 'CV & docs', description: 'Consulter mes fichiers', icon: FileText },
] satisfies Array<{ id: View; label: string; description: string; icon: typeof Briefcase }>

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
  const [activeView, setActiveView] = useState<View>('projets')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const activeMeta = useMemo(() => viewButtons.find((item) => item.id === activeView)!, [activeView])

  const selectView = (view: View) => {
    setActiveView(view)
    setIsMenuOpen(false)
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060910] text-slate-100 antialiased selection:bg-orange-400 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.24),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(45,212,191,0.13),transparent_30%),linear-gradient(180deg,#0a0f1a_0%,#060910_58%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060910]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-3" aria-label="Accueil">
            <span className="grid size-11 place-items-center rounded-xl bg-orange-400 text-slate-950 shadow-lg shadow-orange-400/20">
              <Terminal size={22} />
            </span>
            <span className="font-mono text-lg font-black tracking-tight">
              EPHRA<span className="text-orange-300">TECH</span>
            </span>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {viewButtons.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => selectView(id)}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  activeView === id ? 'bg-white text-slate-950' : 'text-slate-300 hover:bg-white/8 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
            <a href="#contact" className="ml-2 inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange-400 px-5 text-sm font-black text-slate-950 transition hover:bg-orange-300">
              <Mail size={16} />
              Me contacter
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-xl border border-white/10 text-slate-100 md:hidden"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-white/10 bg-[#060910] px-5 py-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {viewButtons.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectView(id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-bold ${activeView === id ? 'bg-white text-slate-950' : 'text-slate-200'}`}
                >
                  {label}
                </button>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="rounded-xl bg-orange-400 px-4 py-3 text-center text-sm font-black text-slate-950">
                Me contacter
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
              <span className="size-2 rounded-full bg-emerald-300" />
              Ingénieur IT, IA & cybersécurité
            </div>

            <div className="space-y-5">
              <p className="max-w-3xl text-2xl font-black leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
                Je conçois des solutions numériques modernes, sécurisées et intelligentes, de l'idée jusqu'au déploiement.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {viewButtons.map(({ id, label, description, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectView(id)}
                  className={`group min-h-32 rounded-2xl border p-5 text-left transition duration-300 hover:-translate-y-1 ${
                    activeView === id
                      ? 'border-orange-300/60 bg-orange-300 text-slate-950 shadow-2xl shadow-orange-400/20'
                      : 'border-white/10 bg-white/[0.055] text-white hover:border-orange-300/45 hover:bg-white/[0.085]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <Icon size={24} />
                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                  </div>
                  <p className="mt-5 text-lg font-black">{label}</p>
                  <p className={`mt-1 text-sm ${activeView === id ? 'text-slate-800' : 'text-slate-400'}`}>{description}</p>
                </button>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-orange-300/55 via-white/10 to-emerald-300/45 blur-sm" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#0d1420]/92 p-4 shadow-2xl shadow-black/45 backdrop-blur-xl">
              <div className="absolute right-5 top-5 z-10 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">
                OPEN TO WORK
              </div>
              <img src={profileImage} alt="Portrait de Madjalo Ouya Ephraim" className="aspect-[4/5] w-full rounded-[24px] border border-white/10 object-cover object-center" />
              <div className="p-2 pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-300">Profil premium</p>
                <h2 className="mt-2 text-3xl font-black text-white">MADJALO OUYA Ephraim</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Assistant sécurité réseaux, data analyst et développeur full-stack formé à l'ENASTIC.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    ['04+', 'Projets'],
                    ['2000+', 'Formés'],
                    ['IA', 'Data/Sec'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3">
                      <p className="text-xl font-black text-white">{value}</p>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="https://github.com/ephra68" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-xl border border-white/10 bg-slate-950 text-slate-300 transition hover:text-orange-300" aria-label="GitHub">
                    <GithubMark />
                  </a>
                  <a href="https://linkedin.com/in/madjalo-ouya-ephraim-5750a033a" target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-xl border border-white/10 bg-slate-950 text-slate-300 transition hover:text-orange-300" aria-label="LinkedIn">
                    <LinkedinMark />
                  </a>
                  <a href={cvFile} target="_blank" rel="noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950 px-4 text-sm font-bold text-slate-100 transition hover:text-orange-300">
                    <Download size={16} />
                    CV
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="details" className="border-y border-white/10 bg-white/[0.025] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-orange-300">// {activeMeta.label}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {activeMeta.description}
                </h2>
              </div>
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-400 px-5 text-sm font-black text-slate-950 transition hover:bg-orange-300">
                Me contacter
                <Mail size={16} />
              </a>
            </div>

            {activeView === 'projets' && <ProjectsPage />}
            {activeView === 'competences' && <SkillsPage />}
            {activeView === 'profil' && <ProfilePage />}
            {activeView === 'documents' && <DocumentsPage />}
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="border-t border-white/10 bg-[#060910] px-5 py-8 text-center text-xs text-slate-500">
        © 2026 EPHRATECH. Développé par Madjalo Ouya Ephraim.
      </footer>
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.title} className="group rounded-2xl border border-white/10 bg-[#0c1320] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/45">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-lg bg-white/6 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-300">{project.category}</span>
            <span className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">{project.status}</span>
          </div>
          <h3 className="mt-5 text-xl font-black text-white transition group-hover:text-orange-300">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

function SkillsPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {skills.map(({ title, icon: Icon, items }) => (
        <article key={title} className="rounded-2xl border border-white/10 bg-[#0c1320] p-6">
          <div className="grid size-12 place-items-center rounded-xl bg-orange-300 text-slate-950">
            <Icon size={24} />
          </div>
          <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
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
      <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 lg:col-span-3">
        <h3 className="text-xl font-black text-white">Certifications & domaines forts</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {['Sécurité des SI', 'Intelligence Artificielle', 'Cisco Networking', 'E-commerce Alibaba'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c1320] px-4 py-4 text-sm font-bold text-slate-200">
              <Award size={17} className="text-orange-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProfilePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <article className="rounded-2xl border border-white/10 bg-[#0c1320] p-6">
        <UserRound size={28} className="text-orange-300" />
        <h3 className="mt-5 text-2xl font-black text-white">Un constructeur de solutions utiles et robustes.</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Mon approche combine rigueur d'ingénierie, compréhension métier et sens du terrain. Je transforme les besoins en
          interfaces, modèles et infrastructures exploitables.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-slate-300">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-4">
            <MapPin size={18} className="text-orange-300" />
            Chagoua, N'Djamena, Tchad
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-4">
            <ShieldCheck size={18} className="text-orange-300" />
            IA, cybersécurité, data et développement full-stack
          </div>
        </div>
      </article>

      <div className="grid gap-5">
        {experiences.map((experience) => (
          <article key={experience.role} className="rounded-2xl border border-white/10 bg-[#0c1320] p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs font-black text-orange-300">{experience.period}</span>
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
  )
}

function DocumentsPage() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-white/10 bg-[#0c1320] p-6">
        <FileText size={30} className="text-orange-300" />
        <h3 className="mt-5 text-2xl font-black text-white">Curriculum Vitae</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">CV orienté ingénierie IT, data, IA et sécurité réseaux.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={cvFile} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-orange-300">
            Voir le PDF <ExternalLink size={16} />
          </a>
          <a href={cvFile} download className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-black text-slate-100 transition hover:text-orange-300">
            Télécharger <Download size={16} />
          </a>
        </div>
      </article>

      <article className="rounded-2xl border border-white/10 bg-[#0c1320] p-6">
        <BookOpen size={30} className="text-orange-300" />
        <h3 className="mt-5 text-2xl font-black text-white">Lettre & ressources</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">Accès aux documents complémentaires et aux originaux de travail.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={motivationLetter} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-orange-300">
            Voir la lettre <ExternalLink size={16} />
          </a>
          <a href="https://fr.overleaf.com/project/68f16ad4d1486ac527ed6db8" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-black text-slate-100 transition hover:text-orange-300">
            Overleaf <ExternalLink size={16} />
          </a>
        </div>
      </article>
    </div>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-orange-300">// Contact</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Discutons de votre projet.</h2>
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
              <a href={`mailto:${contactEmail}`} className="transition hover:text-orange-300">
                {contactEmail}
              </a>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-[#0c1320] p-6" action={formspreeEndpoint} method="POST">
          <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-400">
              Nom complet
              <input type="text" name="name" required className="min-h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm normal-case tracking-normal text-white outline-none transition focus:border-orange-300" placeholder="Votre nom" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-400">
              Email
              <input type="email" name="email" required className="min-h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm normal-case tracking-normal text-white outline-none transition focus:border-orange-300" placeholder="votre@email.com" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-xs font-black uppercase tracking-wide text-slate-400">
            Message
            <textarea rows={5} name="message" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition focus:border-orange-300" placeholder="Décrivez votre besoin technique..." />
          </label>
          <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-orange-300">
            Envoyer le message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}
