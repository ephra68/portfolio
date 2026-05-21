import React, { useState } from 'react';
import { 
  Terminal, Mail, ArrowUpRight, Database, 
  ShieldCheck, Code, Server, Smartphone, BookOpen, MapPin, 
  CheckCircle, ChevronRight, Menu, X, ExternalLink, Briefcase, Award, Users, Download, Send, FileText
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = (type: string) => {
    alert(`Lancement du téléchargement : ${type}. (Assurez-vous de placer les fichiers PDF dans public/assets/)`);
  };

  // Tes vrais projets basés sur ton expertise en IA, Data et Développement
  const projets = [
    {
      titre: "Deep Learning Network IDS",
      categorie: "Cybersécurité & IA",
      description: "Conception et développement d'un Système de Détection d'Intrusion intelligent (IDS) basé sur l'apprentissage profond (Deep Learning) pour identifier et bloquer les menaces réseau en temps réel.",
      stack: ["Python", "TensorFlow", "Keras", "PyTorch", "Sécurité Réseaux"],
      status: "Projet de Fin d'Études"
    },
    {
      titre: "IA Médicale: Consultation & Diagnostic",
      categorie: "Intelligence Artificielle",
      description: "Création de modèles et d'un chatbot intelligent orientés e-santé pour la détection précoce des maladies, la simulation de consultations et l'aide à la prescription d'ordonnances.",
      stack: ["Python", "Transformers", "NLP", "FastAPI", "Flask"],
      status: "R&D / IA"
    },
    {
      titre: "Détection des Fraudes Bancaires",
      categorie: "Data Science & Sécurité",
      description: "Mise en place d'un système d'analyse prédictive et de Machine Learning pour l'identification en temps réel des transactions suspectes et des fraudes par carte bancaire.",
      stack: ["Python", "Machine Learning", "Analyse de données", "SQL"],
      status: "Complété (ENASTIC)"
    },
    {
      titre: "Gestion de Budget & Garderie d'Enfants",
      categorie: "Full-Stack Development",
      description: "Application d'ingénierie logicielle combinant un module de gestion financière rigoureuse et une plateforme de suivi et d'organisation pour les garderies d'enfants.",
      stack: ["Node.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      status: "Production"
    }
  ];

  // Tes vraies expériences professionnelles et académiques
  const experiences = [
    {
      poste: "Formateur en Intelligence Artificielle",
      structure: "Projet Jeunesse Tchadienne",
      periode: "2024 - 2025",
      missions: [
        "Formation complète en Intelligence Artificielle au profit de 2000 jeunes tchadiens.",
        "Développement complet du curriculum pédagogique et des supports de cours.",
        "Animation d'ateliers pratiques axés sur le Machine Learning et l'intégration de l'IA."
      ]
    },
    {
      poste: "Stagiaire IT - Développeur Full-Stack",
      structure: "WenakLabs",
      periode: "2023 - 2024",
      missions: [
        "Développement d'applications web et mobiles innovantes répondant aux besoins locaux.",
        "Formateur et sensibilisateur contre les fake news et expert en fact-checking.",
        "Conception et intégration d'interfaces utilisateur (UI/UX) modernes et responsives."
      ]
    },
    {
      poste: "Projets Sécurité Réseaux & Infrastructure",
      structure: "ENASTIC",
      periode: "2025",
      missions: [
        "Réalisation d'audits de sécurité approfondis sur les systèmes d'information.",
        "Maintenance préventive et curative des infrastructures réseaux et du parc informatique.",
        "Configuration d'équipements Cisco et administration d'environnements Linux durcis."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans antialiased selection:bg-orange-500 selection:text-white">
      
      {/* HALOS LUMINEUX D'ARRIÈRE-PLAN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* HEADER & NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#0B0F19]/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2.5 font-mono font-bold text-xl tracking-wider text-white">
            <div className="p-2 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-lg shadow-md shadow-orange-600/20">
              <Terminal size={20} className="text-white" />
            </div>
            <span className="tracking-tighter">EPHRA<span className="text-orange-500">TECH</span></span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#projets" className="hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-0.5 after:bg-orange-500 after:absolute after:-bottom-1 after:left-0 after:transition-all">Projets</a>
            <a href="#experiences" className="hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-0.5 after:bg-orange-500 after:absolute after:-bottom-1 after:left-0 after:transition-all">Expériences</a>
            <a href="#documents" className="hover:text-white transition-colors text-orange-400 font-mono relative hover:after:w-full after:w-0 after:h-0.5 after:bg-orange-500 after:absolute after:-bottom-1 after:left-0 after:transition-all">CV / Docs</a>
            <a href="#competences" className="hover:text-white transition-colors relative hover:after:w-full after:w-0 after:h-0.5 after:bg-orange-500 after:absolute after:-bottom-1 after:left-0 after:transition-all">Compétences</a>
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-white font-semibold transition-all shadow-sm">Me contacter</a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-400 hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#0B0F19] px-6 py-6 space-y-4 flex flex-col">
            <a href="#projets" onClick={() => setIsMenuOpen(false)} className="text-slate-300 py-2">Projets</a>
            <a href="#experiences" onClick={() => setIsMenuOpen(false)} className="text-slate-300 py-2">Expériences</a>
            <a href="#documents" onClick={() => setIsMenuOpen(false)} className="text-orange-400 py-2">CV / Documents</a>
            <a href="#competences" onClick={() => setIsMenuOpen(false)} className="text-slate-300 py-2">Compétences</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-orange-600 text-center py-3 rounded-lg text-white font-medium">Me contacter</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 lg:pt-24 pb-24 flex flex-col lg:flex-row items-center gap-16 min-h-[85vh]">
        <div className="lg:w-7/12 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-xs font-mono text-orange-400 font-semibold tracking-wide">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Ingénieur IT • Assistant Sécurité • Data Analyst</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            MADJALO OUYA Ephraim<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400">
              Expert en Intelligence Artificielle & Cybersécurité
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Spécialiste de l'intégration de l'IA appliquée à la sécurité des réseaux et concepteur de solutions logicielles modulaires. Diplômé de l'ENASTIC, j'allie modélisation avancée (Deep Learning), ingénierie de données et administration système.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#projets" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all text-sm">
              <span>Voir mes projets</span>
              <ArrowUpRight size={16} />
            </a>
            <a href="#documents" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm">
              <FileText size={16} className="text-orange-500" />
              <span>Consulter mon CV</span>
            </a>
            
            {/* Boutons réseaux avec SVG natifs anti-cache */}
            <div className="flex items-center space-x-3">
              <a href="https://github.com/ephra68" target="_blank" rel="noreferrer" className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800/80 rounded-xl text-slate-400 hover:text-white transition-all shadow-md" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com/in/madjalo-ouya-ephraim-5750a033a" target="_blank" rel="noreferrer" className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800/80 rounded-xl text-slate-400 hover:text-white transition-all shadow-md" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* VISUEL TERMINAL DE DROITE */}
        <div className="w-full lg:w-5/12">
          <div className="relative p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl font-mono text-xs text-slate-400 shadow-2xl backdrop-blur-md">
            
            {/* Barre supérieure du terminal */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-[11px] text-slate-500">Ingineer</span>
            </div>

            {/* Zone de profil avec Image et Données Shell */}
            <div className="pt-6 flex flex-col sm:flex-row items-start gap-6 text-left">
              
              {/* Mini Avatar Tech */}
              <div className="w-24 h-24 rounded-xl border border-slate-700 overflow-hidden bg-slate-950 shrink-0 shadow-inner">
                <img 
                  src="assets/ephra.jpg" 
                  alt="Ephraim Avatar" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80";
                  }}
                />
              </div>

              {/* Contenu textuel Shell */}
              <div className="space-y-3 flex-1">
                <p><span className="text-purple-400">Chagoua/N'Djamena/Tchad</span></p>
                <p><span className="text-orange-400">ENGINEER=</span><span className="text-emerald-400">"MADJALO OUYA Ephraim"</span></p>
                <p><span className="text-orange-400">ALMA_MATER=</span><span className="text-emerald-400">"ENASTIC N'Djamena"</span></p>
                <p><span className="text-orange-400">CORE_RESEARCH=</span><span className="text-emerald-400">"Intelligent IDS with Deep Learning"</span></p>
                <p className="text-slate-600 pt-1"> Scanning multi-stack profile...</p>
                <p className="text-blue-400">*<span className="text-slate-300">"IA: PyTorch, TensorFlow, Keras, Transformers"</span></p>
                <p className="text-blue-400">*<span className="text-slate-300">"Code: Node.js, Python, React, Mobile, C/C++"</span></p>
                <p className="text-blue-400">*<span className="text-slate-300">"Data: KoboCollect, PowerBI, SQL, NoSQL"</span></p>
                <p className="text-emerald-400 font-bold pt-1">✓ Infrastructure Status: Fully Operational</p>
              </div>

            </div> {/* <--- C'est cette fermeture de div qui manquait pour fermer la Zone de profil flex */}

          </div>
        </div>
      </section>

      {/* PROJETS SECTION */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-orange-500 uppercase font-bold mb-2">// Travaux Innovants</h2>
            <p className="text-3xl font-bold text-white tracking-tight">Projets & Contributions R&D</p>
          </div>
          <p className="text-slate-400 max-w-sm mt-4 md:mt-0 text-sm leading-relaxed">
            Déploiement d'architectures d'IA, d'applications interconnectées et d'infrastructures de données sécurisées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projets.map((p, index) => (
            <div key={index} className="group bg-slate-900/30 border border-slate-800/60 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-md font-medium">
                    {p.categorie}
                  </span>
                  <span className="inline-flex items-center text-[10px] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                  {p.titre}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800/40">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES SECTION */}
      <section id="experiences" className="bg-[#090D16] border-t border-b border-slate-900 py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-xs font-mono tracking-widest text-orange-500 uppercase font-bold mb-2">// Parcours Professionnel</h2>
            <p className="text-3xl font-bold text-white tracking-tight">Expériences de Terrain & d'Ingénierie</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold tracking-wider">{exp.periode}</span>
                    <Briefcase size={16} className="text-slate-600" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{exp.poste}</h3>
                  <p className="text-sm text-slate-400 font-mono mb-4 text-emerald-400">{exp.structure}</p>
                  
                  <ul className="space-y-2.5 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    {exp.missions.map((m, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight size={12} className="text-orange-500 mt-0.5 mr-1.5 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION DOCUMENTS (CV & LM) */}
      <section id="documents" className="relative z-10 py-24 border-b border-slate-900 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">// Centre de Ressources</h2>
            <p className="text-3xl font-bold text-white tracking-tight">Curriculum & Motivation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* CV CARD */}
            <div className="bg-slate-900/50 border border-slate-800/60 p-8 rounded-3xl hover:bg-slate-900/80 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500">
                    <FileText size={32} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Mise à jour : Mai 2026</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Curriculum Vitae</h3>
                <p className="text-slate-400 text-sm mb-8">
                  Ingénieur IT, Data Analyst et Assistant Sécurité Réseaux. Conçu avec rigueur académique sous LaTeX.
                </p>
              </div>
              
              <div className="flex gap-3 mt-auto">
                {/* Lien public de téléchargement / visionnage */}
                <a 
                  href="/Madjalo_Ouya_Ephraim_cv.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 flex items-center justify-center space-x-2 bg-white hover:bg-orange-500 text-black hover:text-white py-3.5 rounded-xl font-bold text-xs transition-all shadow-md uppercase tracking-wider"
                >
                  <FileText size={14} /> 
                  <span>Voir le PDF</span>
                </a>
                
                {/* Ton accès rapide Overleaf */}
                <a 
                  href="https://fr.overleaf.com/project/68f16ad4d1486ac527ed6db8" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center p-3.5 bg-slate-950 border border-slate-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 transition-all" 
                  title="Éditer l'original sur Overleaf"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* LM CARD */}
            <div className="bg-slate-900/50 border border-slate-800/60 p-8 rounded-3xl hover:bg-slate-900/80 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500">
                    <BookOpen size={32} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Format : Éditable</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Lettre de Motivation</h3>
                <p className="text-slate-400 text-sm mb-8">
                  Lettre type ciblée pour les postes d'ingénierie avancée, développement de plateformes et recherche en Cybersécurité.
                </p>
              </div>
              
              <div className="flex gap-3 mt-auto">
                {/* Lien public de téléchargement / visionnage */}
                <a 
                  href="/LM_Madjalo.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 flex items-center justify-center space-x-2 bg-white hover:bg-orange-500 text-black hover:text-white py-3.5 rounded-xl font-bold text-xs transition-all shadow-md uppercase tracking-wider"
                >
                  <FileText size={14} /> 
                  <span>Voir la Lettre</span>
                </a>
                
                {/* Ton accès rapide Overleaf */}
                <a 
                  href="https://fr.overleaf.com/project/694ab225d69b895092a43fe5" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center p-3.5 bg-slate-950 border border-slate-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/30 text-slate-400 hover:text-emerald-400 transition-all" 
                  title="Modifier sur Overleaf"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPÉTENCES SECTION */}
      <section id="competences" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-orange-500 uppercase font-bold mb-2">// Bagage Technique</h2>
          <p className="text-3xl font-bold text-white tracking-tight">Spécialisations & Outils Métiers</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="p-6 bg-slate-900/20 border border-slate-800/40 rounded-2xl">
            <div className="p-3 bg-orange-500/10 rounded-xl w-fit text-orange-500 mb-5">
              <Code size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Développement Logiciel</h3>
            <ul className="text-xs font-mono space-y-2 text-slate-300">
              <li className="flex items-center"><CheckCircle size={12} className="text-orange-500 mr-2" /> Node.js / PHP / Java / JavaScript</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-orange-500 mr-2" /> React / Vue.js / Angular</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-orange-500 mr-2" /> C / C++ / Pascal / Ocaml</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-orange-500 mr-2" /> Applications Mobile Android Studio</li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="p-6 bg-slate-900/20 border border-slate-800/40 rounded-2xl">
            <div className="p-3 bg-amber-500/10 rounded-xl w-fit text-amber-500 mb-5">
              <Database size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Données & Intelligence Artificielle</h3>
            <ul className="text-xs font-mono space-y-2 text-slate-300">
              <li className="flex items-center"><CheckCircle size={12} className="text-amber-500 mr-2" /> Python (FastAPI, Flask, Django)</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-amber-500 mr-2" /> Deep Learning (TensorFlow, Keras, PyTorch)</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-amber-500 mr-2" /> KoboToolbox / KoboCollect / PowerBI</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-amber-500 mr-2" /> SQL / MySQL / MariaDB / NoSQL</li>
            </ul>
          </div>

          {/* Box 3 */}
          <div className="p-6 bg-slate-900/20 border border-slate-800/40 rounded-2xl">
            <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-500 mb-5">
              <Server size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Infrastructures & Design</h3>
            <ul className="text-xs font-mono space-y-2 text-slate-300">
              <li className="flex items-center"><CheckCircle size={12} className="text-blue-500 mr-2" /> Cisco Réseaux (Config & Maintenance)</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-blue-500 mr-2" /> Maîtrise avancée des Systèmes Linux</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-blue-500 mr-2" /> Cartographie (Qgis, ArQgis)</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-blue-500 mr-2" /> Figma / Photoshop / Illustrator</li>
            </ul>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl font-mono text-xs text-slate-300 flex items-center justify-center space-x-2">
            <Award size={14} className="text-orange-500" />
            <span>Certifié Sécurité des SI</span>
          </div>
          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl font-mono text-xs text-slate-300 flex items-center justify-center space-x-2">
            <Award size={14} className="text-orange-500" />
            <span>Certifié Intelligence Artificielle</span>
          </div>
          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl font-mono text-xs text-slate-300 flex items-center justify-center space-x-2">
            <Award size={14} className="text-orange-500" />
            <span>Certifié Cisco Networking</span>
          </div>
          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl font-mono text-xs text-slate-300 flex items-center justify-center space-x-2">
            <Award size={14} className="text-orange-500" />
            <span>E-commerce Alibaba</span>
          </div>
        </div>
      </section>

      {/* RECOMMANDATIONS ET EDUCATION */}
      <section className="bg-[#090D16] border-t border-slate-900 py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-orange-500 uppercase font-bold mb-2">// Éducation Académique</h2>
            <p className="text-3xl font-bold text-white tracking-tight mb-8">Cursus d'Enseignement Supérieur</p>
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-orange-500/40">
              <div className="text-xs font-mono text-orange-500 mb-1">2022 - 2025 • Diplômé</div>
              <h4 className="text-lg font-bold text-white">Licence en Informatique</h4>
              <p className="text-sm text-slate-400 font-medium">ENASTIC — N'Djamena, Tchad</p>
              <p className="text-xs text-slate-400 mt-2">Spécialisation poussée dans la sécurité des systèmes et réseaux informatiques.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono tracking-widest text-orange-500 uppercase font-bold mb-2">// Références Professionnelles</h2>
            <p className="text-3xl font-bold text-white tracking-tight mb-8">Garanties & Contacts</p>
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-[#0B0F19] border border-slate-800/80 rounded-xl">
                <p className="text-slate-200 font-bold">Dr Mouaz Mikail</p>
                <p className="text-slate-500">Expert en Intelligence Artificielle (Paris)</p>
                <p className="text-orange-500 mt-1">mouazmikail@gmail.com</p>
              </div>
              <div className="p-4 bg-[#0B0F19] border border-slate-800/80 rounded-xl">
                <p className="text-slate-200 font-bold">Tamya Mardoché</p>
                <p className="text-slate-500">Chargé MEAL — UNICEF</p>
                <p className="text-orange-500 mt-1">tamyaflis@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-orange-500 uppercase font-bold mb-2">// Tunnel de Communication</h2>
            <p className="text-3xl font-bold text-white tracking-tight mb-6">Lançons une collaboration</p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-8">
              Disponible pour rejoindre une infrastructure d'ingénierie, concevoir des modèles prédictifs complexes ou auditer la robustesse de vos systèmes réseaux.
            </p>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin size={18} className="text-orange-500" />
                <span>Chagoua, N'Djamena / Tchad</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail size={18} className="text-orange-500" />
                <span>emadjalouya@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Formulaire relié à Formspree */}
          <form className="space-y-4 bg-slate-900/40 p-6 sm:p-8 border border-slate-800/80 rounded-2xl backdrop-blur-sm" action="https://formspree.io/f/xnqozpvw" method="POST">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">Nom Complet</label>
                <input type="text" name="name" required className="w-full bg-[#0B0F19] border border-slate-800 focus:border-orange-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">Email</label>
                <input type="transparent" name="email" required className="w-full bg-[#0B0F19] border border-slate-800 focus:border-orange-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors" placeholder="votre@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-2">Message</label>
              <textarea rows={4} name="message" required className="w-full bg-[#0B0F19] border border-slate-800 focus:border-orange-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none" placeholder="Besoins de votre projet technique..."></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all text-sm font-mono tracking-wider uppercase flex items-center justify-center space-x-2">
              <span>Envoyer le Message</span>
              <Send size={14} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-[#0B0F19] py-8 text-center text-xs font-mono text-slate-500 relative z-10">
        <p>© 2026 EPHRATECH. Développé par Madjalo Ouya Ephraim. Tous droits réservés.</p>
      </footer>
    </div>
  );
}