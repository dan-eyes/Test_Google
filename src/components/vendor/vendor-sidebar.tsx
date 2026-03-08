import { Link, useLocation } from "@tanstack/react-router"
import { 
  Search, 
  Home, 
  ShoppingCart, 
  Tag, 
  Users, 
  Settings, 
  MoreHorizontal, 
  PackageOpen,
  Store,
  UsersRound,
  ArrowLeftRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"

/**
 * IDA ITALIA - VENDOR SIDEBAR
 * Clone Pixel-Perfect di MedusaJS Admin Panel
 * Brandizzato per IDA Italia (Italian Development Area)
 * 
 * PERSONALIZZAZIONI IDA:
 * - Logo: "IDA" su sfondo verde/blu (brand IDA)
 * - Nome: "IDA Italia" invece di "Mercur Vendor"
 * - Tutto il resto invariato dal design MedusaJS
 */

// Struttura del menu del Vendor Panel
const menuItems = [
  { title: "Panoramica", icon: Home, path: "/vendor" },
  { title: "Ordini", icon: ShoppingCart, path: "/vendor/orders" },
  { 
    title: "Prodotti", 
    icon: Tag, 
    path: "/vendor/products",
    submenu: [
      { title: "Prodotti", path: "/vendor/products" },
      { title: "Collezioni", path: "/vendor/collections" },
      { title: "Categorie", path: "/vendor/categories" },
    ]
  },
  { title: "Clienti", icon: Users, path: "/vendor/customers" },
  { title: "Inventario", icon: PackageOpen, path: "/vendor/inventory" },
]

export function VendorSidebar() {
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState<string>("Prodotti")
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Chiude il dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStoreDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Determina se un path è attivo
  const isActive = (path: string) => {
    if (path === "/vendor") return location.pathname === "/vendor"
    return location.pathname.startsWith(path)
  }

  return (
    <aside className="w-[240px] flex-shrink-0 flex flex-col h-full bg-[#F9FAFB] dark:bg-[#09090B] border-r border-zinc-200 dark:border-zinc-800">
      
      {/* ========================================
          1. STORE SELECTOR + DROPDOWN (IDA ITALIA)
         ======================================== */}
      <div className="px-4 pt-5 pb-2 relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}
          className="flex items-center justify-between w-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 p-1.5 -ml-1.5 rounded-md transition-colors"
        >
          <div className="flex items-center gap-2.5">
            {/* Logo IDA Italia - Verde/Blu gradiente */}
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-600 to-blue-600 text-white flex items-center justify-center text-[11px] font-bold ring-1 ring-black/5 dark:ring-white/10 shadow-sm">
              IDA
            </div>
            {/* Nome Store IDA */}
            <span className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">
              IDA Italia
            </span>
          </div>
          {/* Tre Puntini */}
          <MoreHorizontal className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
        </button>

        {/* Dropdown Menu */}
        {isStoreDropdownOpen && (
          <div className="absolute left-4 right-4 top-[60px] z-50 bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg overflow-hidden">
            {/* Impostazioni Negozio */}
            <button className="flex items-center gap-3 w-full px-3 py-2.5 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <Store className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
              <span className="text-[13px] text-zinc-900 dark:text-zinc-50">Impostazioni Negozio</span>
            </button>
            
            {/* Gestione Team */}
            <button className="flex items-center gap-3 w-full px-3 py-2.5 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <UsersRound className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
              <span className="text-[13px] text-zinc-900 dark:text-zinc-50">Gestione Team</span>
            </button>

            {/* Separatore */}
            <div className="my-1 border-t border-zinc-200 dark:border-zinc-800" />

            {/* Cambia Negozio */}
            <button className="flex items-center gap-3 w-full px-3 py-2.5 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <ArrowLeftRight className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[13px] text-zinc-900 dark:text-zinc-50">Cambia Negozio</span>
                <span className="text-[11px] text-zinc-500">Attuale: IDA Italia</span>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* ========================================
          2. SEPARATORE DOTTED
         ======================================== */}
      <div className="mx-4 my-2 border-b border-dotted border-zinc-300 dark:border-zinc-700" />

      {/* ========================================
          3. SEARCH BAR (Voce di Menu Piatta)
         ======================================== */}
      <div className="px-3">
        <button className="flex items-center justify-between w-full px-2.5 py-1.5 text-[13px] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-md transition-colors group">
          <div className="flex items-center gap-2.5">
            <Search className="w-[18px] h-[18px] text-zinc-500" strokeWidth={1.5} />
            <span>Cerca</span>
          </div>
          {/* Keyboard Shortcuts */}
          <div className="flex items-center gap-0.5">
            <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">⌘</kbd>
            <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">K</kbd>
          </div>
        </button>
      </div>

      {/* ========================================
          4. MAIN NAVIGATION (Menu in Italiano)
         ======================================== */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-1">
        {menuItems.map((item) => {
          const active = isActive(item.path)
          const isAccordionOpen = openMenu === item.title

          return (
            <div key={item.title}>
              {/* Voce Principale del Menu */}
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault()
                    setOpenMenu(isAccordionOpen ? "" : item.title)
                  }
                }}
                className={cn(
                  "flex items-center justify-between w-full px-2.5 py-1.5 text-[13px] transition-all rounded-md group",
                  active 
                    ? "bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-50 font-medium" 
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 border border-transparent"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <item.icon 
                    className={cn("w-[18px] h-[18px]", active ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500")} 
                    strokeWidth={1.5} 
                  />
                  <span>{item.title}</span>
                </div>
              </Link>

              {/* Sottomenu */}
              {item.submenu && (
                <div className={cn(
                  "overflow-hidden transition-all",
                  isAccordionOpen ? "max-h-[500px] mt-1" : "max-h-0"
                )}>
                  <ul className="ml-[18px] pl-4 border-l border-zinc-200 dark:border-zinc-700 flex flex-col gap-0.5">
                    {item.submenu.map((subItem) => {
                      const subActive = location.pathname === subItem.path
                      return (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "block w-full px-2 py-1.5 text-[13px] rounded-md transition-colors",
                              subActive
                                ? "text-zinc-900 dark:text-zinc-50 font-medium"
                                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* ========================================
          5. BOTTOM SECTION
         ======================================== */}
      <div className="mt-auto px-3 pb-4 pt-2">
        
        {/* Impostazioni */}
        <Link
          to="/vendor/settings"
          className={cn(
            "flex items-center gap-2.5 w-full px-2.5 py-1.5 text-[13px] transition-all rounded-md mb-2",
            isActive("/vendor/settings")
              ? "bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-50 font-medium"
              : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 border border-transparent"
          )}
        >
          <Settings className="w-[18px] h-[18px] text-zinc-500" strokeWidth={1.5} />
          <span>Impostazioni</span>
        </Link>

        {/* Separatore DOTTED */}
        <div className="mx-2 mb-2 border-b border-dotted border-zinc-300 dark:border-zinc-700" />

        {/* User Profile */}
        <button className="flex items-center justify-between w-full px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-md transition-colors text-left group">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 text-xs font-medium border border-zinc-300 dark:border-zinc-700">
              DE
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50 leading-tight">
                Daniel Eyes
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                daniel@idaitalia.com
              </span>
            </div>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
        </button>
      </div>

    </aside>
  )
}
