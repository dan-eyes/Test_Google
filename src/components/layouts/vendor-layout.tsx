import { Outlet } from "@tanstack/react-router"
import { VendorSidebar } from "../vendor/vendor-sidebar"
import { VendorHeader } from "../vendor/vendor-header"
import { useState } from "react"

export function VendorLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="fixed inset-0 z-[100] flex h-screen w-full overflow-hidden bg-white dark:bg-[#18181B] text-zinc-900 dark:text-zinc-50 font-sans">
      <VendorSidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <div className="flex-1 flex flex-col min-w-0 relative bg-white dark:bg-[#18181B]">
        <VendorHeader />
        <main className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
