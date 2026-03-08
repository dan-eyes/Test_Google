import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Globe, BookOpen, CheckCircle, FileText, Cpu, Zap, Puzzle, Briefcase, Megaphone, Users, Book } from "lucide-react"

export function Navbar() {
  return (
    <header className="relative z-40 w-full bg-white dark:bg-zinc-950 transition-colors flex items-center justify-center px-0 py-3">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full px-4 sm:px-8">
        <div className="flex items-center justify-start">
          <Link to="/" className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity">
            <Logo className="h-5 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex gap-3 items-center justify-center text-[13px] font-medium text-zinc-900 dark:text-zinc-300">
            <div className="group">
              <button className="flex gap-1.5 h-7 items-center justify-center px-2 py-0 rounded-md bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">Seller</button>
              <div className="absolute top-full left-0 hidden w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-lg group-hover:flex animate-in fade-in slide-in-from-top-2 before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:bg-transparent">
                <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 py-6">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-1">
                            Esporta nel mondo con <span className="font-bold">Ida</span>
                          </span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">La piattaforma per l'export Made in Italy</span>
                        </div>
                      </Link>
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Introduzione alla vendita</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Scopri come iniziare a vendere</span>
                        </div>
                      </Link>
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Requisiti necessari</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Cosa serve per diventare seller</span>
                        </div>
                      </Link>
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Guida step-by-step</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Passaggi dettagliati per iniziare</span>
                        </div>
                      </Link>
                      <Link to="/docs" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Book className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Manuale del Seller</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">La documentazione completa</span>
                        </div>
                      </Link>
                    </div>
                    <div className="col-span-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 flex flex-col justify-end relative overflow-hidden group/card">
                       <img 
                        src="https://picsum.photos/seed/seller/400/300" 
                        alt="Seller Preview" 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/card:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                       />
                       <div className="relative z-10">
                         <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Inizia a vendere</h4>
                         <p className="text-[11px] text-zinc-600 dark:text-zinc-300 mt-1">Espandi il tuo business con Ida.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <button className="flex gap-1.5 h-7 items-center justify-center px-2 py-0 rounded-md bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">Prodotto</button>
              <div className="absolute top-full left-0 hidden w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-lg group-hover:flex animate-in fade-in slide-in-from-top-2 before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:bg-transparent">
                <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 py-6">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2">
                      <Link to="/store" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Tecnologia</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Infrastruttura scalabile</span>
                        </div>
                      </Link>
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Funzionalità</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Strumenti per il business</span>
                        </div>
                      </Link>
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Puzzle className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Integrazioni</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Connetti i tuoi strumenti</span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider px-2">Partner di Ida</span>
                      <div className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400 text-[13px] px-2">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>JetHR</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>RINA</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>Prometheux</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>Translated</span>
                      </div>
                    </div>
                    <div className="col-span-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 flex flex-col justify-end relative overflow-hidden group/card">
                       <img 
                        src="https://picsum.photos/seed/product/400/300" 
                        alt="Product Preview" 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/card:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                       />
                       <div className="relative z-10">
                         <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Tecnologia Avanzata</h4>
                         <p className="text-[11px] text-zinc-600 dark:text-zinc-300 mt-1">Scopri la potenza della nostra piattaforma.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="flex gap-1.5 h-7 items-center justify-center px-2 py-0 rounded-md bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">Prezzi</Link>

            <div className="group">
              <button className="flex gap-1.5 h-7 items-center justify-center px-2 py-0 rounded-md bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">Affiliate Programs</button>
              <div className="absolute top-full left-0 hidden w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-lg group-hover:flex animate-in fade-in slide-in-from-top-2 before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:bg-transparent">
                <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 py-6">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Professionisti</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Programma partner aziende</span>
                        </div>
                      </Link>
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Megaphone className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Ambassador</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Promuovi Ida e guadagna</span>
                        </div>
                      </Link>
                      <Link to="/" className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">Agenti</span>
                          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">Diventa agente certificato</span>
                        </div>
                      </Link>
                    </div>
                    <div className="col-span-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 flex flex-col justify-end relative overflow-hidden group/card">
                       <img 
                        src="https://picsum.photos/seed/affiliate/400/300" 
                        alt="Affiliate Preview" 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/card:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                       />
                       <div className="relative z-10">
                         <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Unisciti a noi</h4>
                         <p className="text-[11px] text-zinc-600 dark:text-zinc-300 mt-1">Diventa partner e cresci con Ida.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/" className="flex gap-1.5 h-7 items-center justify-center px-2 py-0 rounded-md bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">Lavora con noi</Link>
        </nav>

        <div className="flex gap-3 items-center justify-end">
          <Link to="/login">
             <button className="transition-colors relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none disabled:opacity-50 shadow-sm text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-[13px] font-medium gap-x-1.5 px-2 py-1 cursor-pointer h-7">Accedi</button>
          </Link>
          <Link to="/onboarding">
             <button className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 flex gap-1.5 h-7 items-center justify-center px-2 rounded-md shadow-sm transition-colors cursor-pointer text-[13px] font-medium text-white dark:text-zinc-900">Inizia Ora</button>
          </Link>
        </div>
      </div>
    </header>
  )
}
