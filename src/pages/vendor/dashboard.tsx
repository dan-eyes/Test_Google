import { ChevronRight, Calendar } from "lucide-react"

export function VendorDashboard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Card 1: Azioni */}
      <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-sm">
        <h2 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Azioni</h2>
        <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mb-5">Scopri i nuovi eventi e gestisci il tuo negozio</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { count: "48", label: "Ordini da evadere" },
            { count: "23", label: "Ordini da spedire" },
            { count: "8", label: "Richieste di preventivo" },
            { count: "2", label: "Prodotti da revisionare" }
          ].map((action, i) => (
            <button key={i} className="flex items-center justify-between bg-zinc-50 hover:bg-zinc-100 dark:bg-[#323236] dark:hover:bg-[#3F3F44] border border-zinc-200 dark:border-zinc-600 rounded-md p-3 transition-colors text-left group">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-[12px] font-medium text-zinc-700 dark:text-zinc-300">
                  {action.count}
                </div>
                <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50">{action.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>

      {/* Card 2: Analisi Real-time */}
      <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-sm flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Analisi Real-time</h2>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-400">Visualizza i progressi del tuo negozio</p>
          </div>
          <button className="flex items-center px-3 py-1.5 text-[13px] font-medium bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-[#27272A] transition-colors shadow-sm">
            <Calendar className="w-4 h-4 mr-2 text-zinc-400" strokeWidth={1.5} />
            Jul 08, 2025 - Jul 15, 2025
          </button>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chart Placeholder */}
          <div className="lg:col-span-3 border border-zinc-200 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-[#323236] min-h-[250px] flex items-center justify-center">
            <span className="text-[13px] text-zinc-500">Grafico andamento...</span>
          </div>
          
          {/* Widgets Laterali */}
          <div className="flex flex-col gap-4">
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-[#323236] p-4 flex flex-col justify-center h-[120px]">
              <span className="text-[13px] text-zinc-500 dark:text-zinc-400 mb-1">Ordini</span>
              <span className="text-[24px] font-semibold text-zinc-900 dark:text-zinc-50 border-l-2 border-blue-500 pl-3">33</span>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-[#323236] p-4 flex flex-col justify-center h-[120px]">
              <span className="text-[13px] text-zinc-500 dark:text-zinc-400 mb-1">Clienti</span>
              <span className="text-[24px] font-semibold text-zinc-900 dark:text-zinc-50 border-l-2 border-blue-500 pl-3">465</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
