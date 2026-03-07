import { Link } from "@tanstack/react-router"
import { Search, Menu, Rocket, Package, ShieldCheck, Truck, CreditCard, Puzzle, ChevronRight, LayoutDashboard, Briefcase } from "lucide-react"
import { docsData } from "@/lib/docs-data"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Docs() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [sidebarHidden, setSidebarHidden] = useState(false)

  // Stati per la sidebar a sinistra
  const [openSections, setOpenSections] = useState<string[]>([])

  useEffect(() => {
    const savedTheme = localStorage.getItem('ida-docs-theme') || 'light'
    setTheme(savedTheme as 'light' | 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('ida-docs-theme', newTheme)
    setIsHamburgerOpen(false)
  }

  const toggleSection = (sectionSlug: string) => {
    setOpenSections(prev => 
      prev.includes(sectionSlug) ? [] : [sectionSlug]
    )
  }

  const quickLinks = [
    { title: "Panoramica", desc: "Come usare il manuale, ruoli e permessi", icon: LayoutDashboard, slug: "panoramica/benvenuto" },
    { title: "Inizia a vendere", desc: "Registrazione, onboarding e configurazione", icon: Rocket, slug: "seller/overview" },
    { title: "Catalogo & Prodotti", desc: "Struttura, dati AI e regole di approvazione", icon: Package, slug: "catalogo/struttura-catalogo" },
    { title: "Vendita B2B", desc: "Listini, MOQ e negoziazione RFQ", icon: Briefcase, slug: "vendita-b2b/listini-moq" },
    { title: "Ordini & Spedizioni", desc: "Flusso ordini, logistica e tracking", icon: Truck, slug: "ordini-logistica/gestione-ordini" }
  ]

  return (
    // Wrapper Fixed Inset-0 posiziona il Manuale SOPRA l'app principale, nascondendo la tua vecchia sidebar
    <div className={cn("fixed inset-0 z-[100] font-sans transition-colors overflow-hidden", theme === 'dark' ? 'dark bg-[#0a0a0a]' : 'bg-[#f9fafb]')}>
      
      <div className={cn("grid h-screen w-full overflow-hidden", sidebarHidden ? "grid-cols-1" : "grid-cols-1 lg:mx-auto lg:grid-cols-[221px_1fr]")}>
        {/* SIDEBAR SINISTRA ACCORDION COMPLETA (Fissa sullo sfondo della pagina) */}
        {!sidebarHidden && (
          <aside className="hidden lg:flex flex-col relative h-auto w-full overflow-y-auto py-3 bg-transparent">
            <nav className="px-3 space-y-3">
            {docsData.map((section, idx) => {
              const isOpen = openSections.includes(section.slug)
              return (
                <div key={section.slug} className="mb-2">
                  <button 
                    onClick={() => toggleSection(section.slug)} 
                    className="flex items-center justify-between w-full px-3 py-1.5 group cursor-pointer outline-none"
                  >
                    <span className="text-[13px] font-semibold text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{section.title}</span>
                    <ChevronRight className={cn("w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 transition-transform duration-200", isOpen && "rotate-90")} />
                  </button>
                  
                  {/* Sottovoci a tendina */}
                  <div className={cn("overflow-hidden transition-all duration-200 ease-in-out", isOpen ? "max-h-[1000px] mt-1 opacity-100" : "max-h-0 opacity-0")}>
                    <ul className="space-y-0.5">
                      {section.items.map((item) => (
                        <li key={item.slug}>
                          <span className="block">
                            <Link
                              to={`/docs/${section.slug}/${item.slug}`}
                              className="py-1.5 px-3 block w-full rounded-md text-[13px] transition-colors flex justify-between items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
                            >
                              {item.title}
                            </Link>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dotted Line Bloom Style */}
                  {idx < docsData.length - 1 && (
                    <div className="mt-4 mx-2 border-b border-dotted border-zinc-300 dark:border-zinc-800" />
                  )}
                </div>
              )
            })}
          </nav>
        </aside>
      )}

      {/* CONTENITORE CENTRALE ("DASHBOARD CARD") */}
      <div className="relative max-w-full h-full flex-1 flex flex-col gap-2 lg:py-1 lg:mr-1 scroll-m-1 min-h-0">
        
        {/* LA SCHEDA VERA E PROPRIA */}
        <div id="main" className="bg-white dark:bg-[#111111] flex flex-col items-center h-full w-full overflow-y-scroll overflow-x-hidden md:rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800/80 relative min-h-0">
          
          {/* HEADER DELLA SCHEDA */}
          <header className="h-14 sticky top-0 flex-shrink-0 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between px-4 lg:px-6 z-20 bg-white dark:bg-[#111111]">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <svg viewBox="0 0 422 319" className="h-5 w-auto fill-current text-zinc-900 dark:text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M223.338 0H187.854V176.839H223.338V0Z" fill="currentColor"/><path d="M35.4848 142.035H0V318.874H35.4848V142.035Z" fill="currentColor"/><path d="M422.001 219.262H386.492V318.873H422.001V219.262Z" fill="currentColor"/><path d="M414.694 188.479C407.571 171.609 395.736 157.294 380.816 147.161C373.391 142.125 365.176 138.119 356.36 135.387C347.603 132.596 338.244 131.139 328.585 131.139C316.201 131.139 304.306 133.568 293.438 138.001C292.529 138.361 291.686 138.723 290.843 139.15C281.06 143.457 272.12 149.525 264.454 156.748C261.977 159.112 259.624 161.601 257.265 164.392C253.102 169.185 248.815 174.708 244.645 180.289C243.802 181.438 242.894 182.653 242.051 183.809C239.757 186.962 217.832 219.243 213.969 225.008C212.035 227.917 209.741 231.194 207.263 234.773C206.721 235.562 206.12 236.415 205.518 237.262C201.408 243.147 196.82 249.338 192.592 254.801C190.481 257.527 188.364 260.075 186.553 262.202C184.684 264.383 182.992 266.143 181.782 267.298C176.593 272.21 170.49 276.216 163.791 278.947C157.086 281.679 149.779 283.196 142.048 283.196C136.735 283.196 131.604 282.466 126.775 281.133C124.298 280.464 121.88 279.616 119.527 278.585C109.137 274.212 100.261 266.812 94.0401 257.526C90.9029 252.857 88.4257 247.761 86.7339 242.298C85.1055 236.835 84.1393 231.075 84.1393 225.008C84.1393 216.937 85.7728 209.353 88.6678 202.372C93.079 191.938 100.444 183.08 109.685 176.768C114.332 173.61 119.403 171.186 124.84 169.486C130.271 167.785 136.009 166.82 142.048 166.82C149.779 166.879 157.086 168.337 163.791 171.063C170.49 173.853 176.593 177.799 181.782 182.712C182.992 183.867 184.684 185.686 186.553 187.813C189.814 191.635 193.677 196.547 197.546 201.709C199.055 203.771 200.565 205.833 202.074 207.954C207.871 199.463 218.014 184.536 223.327 176.827C222.425 175.612 221.517 174.404 220.614 173.189C218.196 170.09 215.779 167.121 213.367 164.39C210.949 161.599 208.655 159.11 206.178 156.746C197.846 148.853 188.004 142.424 177.194 137.998C166.326 133.566 154.426 131.136 142.048 131.136C129.186 131.136 116.867 133.749 105.639 138.542C88.8509 145.641 74.6563 157.533 64.5717 172.519C59.5597 179.985 55.5788 188.292 52.8011 197.092C50.0833 205.953 48.6328 215.297 48.6328 225.009C48.6328 237.932 51.2274 250.31 55.9398 261.533C63.0629 278.462 74.8984 292.725 89.7537 302.857C97.2429 307.894 105.458 311.893 114.273 314.684C123.03 317.416 132.389 318.874 142.049 318.874C154.427 318.874 166.327 316.444 177.195 312.018C188.005 307.586 197.788 301.156 206.121 293.329L206.179 293.269C208.656 290.964 210.95 288.411 213.368 285.62C217.531 280.826 221.818 275.309 225.987 269.727C226.831 268.572 227.739 267.416 228.582 266.267C230.876 263.049 260.892 218.816 263.364 215.237C263.912 214.449 264.514 213.602 265.114 212.749C269.225 206.924 273.813 200.673 278.041 195.216C280.152 192.484 282.269 189.936 284.08 187.815C285.949 185.628 287.642 183.868 288.85 182.713C294.04 177.801 300.143 173.854 306.843 171.064C308.476 170.4 310.104 169.856 311.796 169.304C317.109 167.729 322.723 166.881 328.585 166.822C336.616 166.88 344.224 168.457 351.105 171.431C361.49 175.798 370.372 183.199 376.587 192.484C379.73 197.159 382.206 202.255 383.893 207.712C385.586 213.175 386.493 218.94 386.493 225.008C386.493 233.079 384.86 240.723 381.965 247.637C377.554 258.072 370.188 266.996 360.948 273.241C356.301 276.399 351.23 278.888 345.793 280.523C340.42 282.224 334.624 283.197 328.585 283.197C320.854 283.197 313.547 281.68 306.842 278.948C300.143 276.216 294.039 272.211 288.85 267.298C287.64 266.143 285.948 264.324 284.079 262.203C280.818 258.44 276.95 253.463 273.086 248.308C271.519 246.245 270.008 244.118 268.499 241.997C268.015 242.725 267.532 243.455 266.989 244.243C257.024 258.926 250.743 268.211 247.304 273.242C248.206 274.456 249.115 275.612 250.017 276.827C252.435 279.92 254.853 282.895 257.264 285.62C259.623 288.41 261.977 290.964 264.453 293.269C272.785 301.156 282.628 307.586 293.437 312.018C304.306 316.444 316.2 318.874 328.584 318.874C341.445 318.874 353.765 316.266 364.934 311.532C381.781 304.374 395.97 292.482 406.06 277.491C411.067 270.031 415.117 261.776 417.83 252.918C420.55 244.118 422.001 234.715 422.001 225.009C422.001 212.086 419.407 199.708 414.694 188.479Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>

            <div className="flex items-center gap-2">
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
              
              <div className="relative">
                <button 
                  onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                  className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800/80 rounded-md"
                >
                  <Menu className="w-4 h-4" />
                </button>

                {isHamburgerOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800/80 rounded-xl shadow-xl py-2 z-50">
                    <Link to="/" className="block w-full text-left px-4 py-2 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">Torna all'App</Link>
                    <button onClick={() => {setSidebarHidden(!sidebarHidden); setIsHamburgerOpen(false)}} className="w-full flex justify-between items-center px-4 py-2 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                      {sidebarHidden ? 'Mostra Menu' : 'Nascondi Menu'} <span className="text-zinc-400 dark:text-zinc-600 font-mono text-[10px]">{"⌘\\"}</span>
                    </button>
                    <div className="my-1 border-t border-zinc-100 dark:border-zinc-800/80"></div>
                    <div className="px-4 py-1.5 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Theme</div>
                    <button onClick={() => toggleTheme()} className="w-full text-left px-4 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${theme === 'light' ? 'bg-zinc-900' : 'bg-transparent border border-zinc-500'}`}></div> Light
                    </button>
                    <button onClick={() => toggleTheme()} className="w-full text-left px-4 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-transparent border border-zinc-500'}`}></div> Dark
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* AREA CENTRALE SCORREVOLE (Contenuto Card) */}
          <div className="flex-1 flex justify-center">
            <main className="w-full max-w-[1000px] px-6 py-12 lg:px-12 lg:py-14">
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
                    to={`/docs/${link.slug}`}
                    className="group p-5 bg-zinc-50 dark:bg-[#1A1A1A] border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:shadow-md dark:hover:border-zinc-700 transition-all"
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
            </main>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  )
}