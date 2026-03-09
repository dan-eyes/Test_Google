import { Outlet } from "@tanstack/react-router"
import { VendorSidebar } from "../vendor/vendor-sidebar"
import { useState } from "react"

export function VendorLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div id="vendor-dashboard-root" className="fixed inset-0 z-[100] flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-[#18181B] text-zinc-900 dark:text-zinc-50 font-sans">
      <VendorSidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <div className="flex-1 flex flex-col min-w-0 relative bg-zinc-50 dark:bg-[#18181B]">
        <main className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
