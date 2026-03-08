import { Link } from "@tanstack/react-router"
import { Rocket, Package, ShieldCheck, Truck, CreditCard, Puzzle, LayoutDashboard, Briefcase } from "lucide-react"

export function Docs() {
  const quickLinks = [
    { title: "Panoramica", desc: "Come usare il manuale, ruoli e permessi", icon: LayoutDashboard, path: "/docs" },
    { title: "Inizia a vendere", desc: "Registrazione, onboarding e configurazione", icon: Rocket, path: "/docs/seller/overview" },
    { title: "Catalogo & Prodotti", desc: "Struttura, dati AI e regole di approvazione", icon: Package, path: "/docs/catalogo/struttura-catalogo" },
    { title: "Vendita B2B", desc: "Listini, MOQ e negoziazione RFQ", icon: Briefcase, path: "/docs/vendita-b2b/listini-moq" },
    { title: "Ordini & Spedizioni", desc: "Flusso ordini, logistica e tracking", icon: Truck, path: "/docs/ordini-logistica/gestione-ordini" }
  ]

  return (
    <div className="flex-1 overflow-y-auto px-6 py-12 flex justify-center scroll-smooth">
      <div className="max-w-[1000px] w-full">
        <h1 className="text-[32px] md:text-[36px] font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Manuale Ufficiale
        </h1>
        <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12 max-w-2xl">
          Esplora la documentazione per imparare a configurare il tuo negozio, gestire gli ordini internazionali e scalare il tuo business B2B.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link, i) => (
            <Link 
              key={i}
              to={link.path}
              className="group p-5 bg-zinc-50 dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700/80 rounded-xl hover:shadow-md dark:hover:border-zinc-700 transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-white dark:bg-[#222] border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-zinc-600 dark:text-zinc-400">
                <link.icon className="h-5 w-5" />
              </div>
              <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-white mb-1.5">{link.title}</h3>
              <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed m-0">
                {link.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}