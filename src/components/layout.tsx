import { Outlet, useLocation, useParams, Link } from "@tanstack/react-router"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { DocsSidebar } from "./docs/sidebar"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"
import { docsData } from "@/lib/docs-data"
import { Menu, ChevronRight, Search } from "lucide-react"

export function Layout() {
  const { setTheme } = useTheme()
  
  useEffect(() => {
    // Forza il tema light sulle pagine del sito principale
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

// IL LAYOUT DEL MANUALE (Isolato dal resto dell'app)
export function DocsLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  // Gestione sicura dei parametri per evitare crash del Router
  const routeParams = useParams({ strict: false }) as any
  const category = routeParams?.category
  const slug = routeParams?.slug

  const currentSection = docsData.find(s => s.slug === category)
  const currentPage = currentSection?.items.find(i => i.slug === slug)

  // Tema isolato solo per i Docs
  const [docsTheme, setDocsTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('ida-docs-theme') || 'light'
    setDocsTheme(savedTheme as 'light' | 'dark')
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const toggleDocsTheme = () => {
    const newTheme = docsTheme === 'light' ? 'dark' : 'light'
    setDocsTheme(newTheme)
    localStorage.setItem('ida-docs-theme', newTheme)
    setIsMobileMenuOpen(false)
  }

  return (
    // Il wrapper fixed copre il resto del sito e applica lo sfondo grigio/nero della dashboard
    <div className={cn(
      "fixed inset-0 z-[100] flex overflow-hidden font-sans transition-colors duration-300",
      docsTheme === 'dark' ? "dark bg-[#0a0a0a] text-zinc-300" : "bg-[#f9fafb] text-zinc-700"
    )}>
      
      {/* Desktop Sidebar (Poggia sullo sfondo esterno) */}
      <div className="hidden md:flex w-[280px] flex-shrink-0 h-full">
        <DocsSidebar className="w-full h-full border-none bg-transparent" />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-[#0a0a0a] transform transition-transform duration-300 ease-in-out md:hidden shadow-xl",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <DocsSidebar className="w-full h-full border-r border-zinc-200 dark:border-zinc-800" />
      </div>

      {/* Main Content Area (Lo spazio per la Card) */}
      <main className="flex-1 flex flex-col h-full min-w-0 p-2 lg:py-3 lg:pr-3 pl-0 md:pl-2 transition-all duration-300 relative">
        
        {/* LA SCHEDA CENTRALE STILE BLOOM */}
        <div className="flex-1 flex flex-col bg-white dark:bg-[#111111] rounded-[1rem] lg:rounded-[1.5rem] shadow-sm border border-zinc-200 dark:border-zinc-800/80 overflow-hidden relative">
          
          {/* HEADER DELLA SCHEDA */}
          <header className="h-14 flex-shrink-0 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between px-4 lg:px-6 z-20 bg-white dark:bg-[#111111]">
            <div className="flex items-center gap-4">
              <button className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Breadcrumbs Dinamici in alto */}
              {currentPage ? (
                <div className="hidden sm:flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500 font-medium">
                  <Link to="/docs" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Manuale</Link>
                  <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-zinc-400 dark:text-zinc-600" />
                  <span className="cursor-default text-zinc-800 dark:text-zinc-300">{currentSection?.title}</span>
                </div>
              ) : (
                <div className="hidden sm:flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500 font-medium">
                  <Link to="/docs" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Manuale del Seller</Link>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Help Dropdown */}
              <div className="relative group">
                <button className="hidden sm:flex items-center gap-1 text-[13px] font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-white/5">
                  Aiuto <ChevronRight className="w-3 h-3 rotate-90 opacity-50 transition-transform group-hover:rotate-[270deg]" />
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800/80 rounded-xl shadow-xl py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link to="/assistenza" className="block w-full text-left px-4 py-2 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">Contatta il supporto</Link>
                </div>
              </div>

              <button className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-white/5">
                <Search className="w-4 h-4" />
              </button>
              
              {/* Menu Hamburger e Tema */}
              <div className="relative group hidden sm:block">
                <button className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800/80 rounded-md">
                  <Menu className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full mt-1 w-52 bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800/80 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link to="/" className="block w-full text-left px-4 py-2 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">Torna all'App</Link>
                  <div className="my-1 border-t border-zinc-100 dark:border-zinc-800/80"></div>
                  <div className="px-4 py-1.5 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Theme</div>
                  <button onClick={toggleDocsTheme} className="w-full text-left px-4 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${docsTheme === 'light' ? 'bg-zinc-900' : 'bg-transparent border border-zinc-500'}`}></div> Light
                  </button>
                  <button onClick={toggleDocsTheme} className="w-full text-left px-4 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${docsTheme === 'dark' ? 'bg-white' : 'bg-transparent border border-zinc-500'}`}></div> Dark
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* L'OUTLET DOVE RENDERIZZANO I COMPONENTI FIGLI */}
          <div className="flex flex-1 overflow-hidden relative">
            <Outlet />
          </div>

        </div>
      </main>
    </div>
  )
}