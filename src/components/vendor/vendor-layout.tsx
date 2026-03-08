import { Outlet } from "@tanstack/react-router"
import { VendorSidebar } from "./vendor-sidebar"
import { VendorHeader } from "./vendor-header"

export function VendorLayout() {
  return (
    // Copre tutto lo schermo. Usa i colori di background base di Medusa.
    <div className="fixed inset-0 z-[100] flex h-screen w-full overflow-hidden bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-50 font-sans">
      
      {/* Sidebar a sinistra */}
      <VendorSidebar />

      {/* Colonna di Destra (Header in alto + Contenuto scorrevole sotto) */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <VendorHeader />
        
        {/* L'Outlet in cui TanStack Router inietterà le pagine (/vendor, /vendor/orders, etc) */}
        <main className="flex-1 overflow-y-auto bg-white dark:bg-[#09090B]">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
