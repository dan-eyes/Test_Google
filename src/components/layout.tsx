import { Outlet, useLocation } from "@tanstack/react-router"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { DocsSidebar } from "./docs/sidebar"
import { MobileHeader } from "./docs/mobile-header"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

export function Layout() {
  const { setTheme } = useTheme()
  
  useEffect(() => {
    // Force light theme on main site pages
    setTheme("light")
  }, [setTheme])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export function DocsLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed inset-y-0 left-0 z-40">
        <DocsSidebar />
      </div>

      {/* Mobile Header */}
      <MobileHeader onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-zinc-900 transform transition-transform duration-300 ease-in-out md:hidden shadow-xl",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <DocsSidebar className="w-full h-full border-none" />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 md:pl-[221px] pt-16 md:pt-0 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  )
}
