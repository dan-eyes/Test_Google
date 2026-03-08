import { HelpCircle, Bell, ChevronRight } from "lucide-react"
import { useLocation } from "@tanstack/react-router"

/**
 * VENDOR HEADER - Clone Pixel-Perfect di MedusaJS Admin Panel
 * 
 * Struttura:
 * - Altezza fissa: h-14
 * - Sticky top-0 per rimanere visibile durante lo scroll
 * - Breadcrumbs a sinistra (dinamici da TanStack Router)
 * - Actions a destra (Help + Notifiche con pallino blu)
 * 
 * COLORI ESATTI:
 * - Background: dark:bg-[#09090B]
 * - Border bottom: dark:border-zinc-800
 * - Icone: 18px con strokeWidth 1.5
 * - Bottoni: w-8 h-8 rounded-md hover:bg-zinc-100
 * 
 * NOTIFICHE:
 * - Pallino blu esatto: w-1.5 h-1.5 bg-blue-500
 * - Ring bianco/nero: ring-2 ring-white dark:ring-[#09090B]
 */

export function VendorHeader() {
  const location = useLocation()
  
  // Estrae l'ultima parte dell'URL per il Breadcrumb dinamico
  // Esempi: /vendor → "overview", /vendor/orders → "orders"
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const currentPage = pathSegments[pathSegments.length - 1] || "overview"

  return (
    <header className="h-14 bg-white dark:bg-[#09090B] border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-20 flex-shrink-0">
      
      {/* ========================================
          BREADCRUMBS (Lato Sinistro)
         ======================================== */}
      <div className="flex items-center text-[13px] text-zinc-500 dark:text-zinc-400">
        {/* Prima voce: "Stores" (grigia, hover) */}
        <span className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer transition-colors">
          Stores
        </span>
        
        {/* Chevron separatore (piccolissimo 3.5px) */}
        <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-zinc-400" strokeWidth={1.5} />
        
        {/* Pagina corrente (nera, font-medium, capitalizzata) */}
        <span className="font-medium text-zinc-900 dark:text-zinc-50 capitalize">
          {currentPage.replace('-', ' ')}
        </span>
      </div>

      {/* ========================================
          ACTIONS (Lato Destro)
         ======================================== */}
      <div className="flex items-center gap-2">
        
        {/* Bottone Help (punto interrogativo) */}
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors">
          <HelpCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
        </button>
        
        {/* Bottone Notifiche (campanella + pallino blu) */}
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors relative">
          <Bell className="w-[18px] h-[18px]" strokeWidth={1.5} />
          
          {/* PALLINO BLU ESATTO con ring bianco/nero */}
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-white dark:ring-[#09090B]"></span>
        </button>
      </div>
    </header>
  )
}
