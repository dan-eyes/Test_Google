import { Link, useLocation } from "@tanstack/react-router"
import { Search, Home, ShoppingCart, Tag, Users, Settings, ChevronDown, MoreHorizontal, PackageOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

// Struttura del menu del Vendor Panel
const menuItems = [
  { title: "Overview", icon: Home, path: "/vendor" },
  { title: "Orders", icon: ShoppingCart, path: "/vendor/orders" },
  { 
    title: "Products", 
    icon: Tag, 
    path: "/vendor/products",
    submenu: [
      { title: "Products", path: "/vendor/products" },
      { title: "Collections", path: "/vendor/collections" },
      { title: "Categories", path: "/vendor/categories" },
    ]
  },
  { title: "Customers", icon: Users, path: "/vendor/customers" },
  { title: "Inventory", icon: PackageOpen, path: "/vendor/inventory" },
]

export function VendorSidebar() {
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState<string>("Products")

  const isActive = (path: string) => {
    if (path === "/vendor") return location.pathname === "/vendor"
    return location.pathname.startsWith(path)
  }

  return (
    <aside className="w-[240px] flex-shrink-0 flex flex-col h-full bg-[#F9FAFB] dark:bg-[#09090B] border-r border-zinc-200 dark:border-zinc-800">
      
      {/* 1. STORE SELECTOR (Top) */}
      <div className="px-4 pt-5 pb-2">
        <button className="flex items-center justify-between w-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 p-1.5 -ml-1.5 rounded-md transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 flex items-center justify-center text-[12px] font-bold">
              M
            </div>
            <span className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">
              Mercurjs Store
            </span>
          </div>
          <ChevronDown className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
        </button>
      </div>

      {/* 2. SEARCH BAR (Fake Input) */}
      <div className="px-4 mb-4">
        <button className="w-full bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm rounded-md h-8 flex items-center px-2 gap-2 transition-colors cursor-text group">
          <Search className="w-4 h-4 text-zinc-400 group-hover:text-zinc-500" strokeWidth={1.5} />
          <span className="text-[13px] text-zinc-500">Search...</span>
          <div className="ml-auto flex items-center gap-1">
            <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">⌘</kbd>
            <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">K</kbd>
          </div>
        </button>
      </div>

      {/* 3. MAIN NAVIGATION */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-1">
        {menuItems.map((item) => {
          const active = isActive(item.path)
          const isAccordionOpen = openMenu === item.title

          return (
            <div key={item.title}>
              {/* Voce Principale */}
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault() // Prevents routing if it's just an accordion trigger
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
                  <item.icon className={cn("w-[18px] h-[18px]", active ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500")} strokeWidth={1.5} />
                  <span>{item.title}</span>
                </div>
              </Link>

              {/* Sottomenu (Linea laterale e niente icone) */}
              {item.submenu && (
                <div className={cn("overflow-hidden transition-all", isAccordionOpen ? "max-h-[500px] mt-1" : "max-h-0")}>
                  <ul className="ml-[18px] pl-4 border-l border-zinc-200 dark:border-zinc-800 flex flex-col gap-0.5">
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

      {/* 4. BOTTOM SECTION (Settings, Linea Tratteggiata, User Profile) */}
      <div className="mt-auto px-3 pb-4 pt-2">
        {/* Voce Settings */}
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
          <span>Settings</span>
        </Link>

        {/* Separatore Esatto Dotted */}
        <div className="mx-2 mb-2 border-b border-dotted border-zinc-300 dark:border-zinc-700" />

        {/* User Profile Button */}
        <button className="flex items-center justify-between w-full px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-md transition-colors text-left group">
          <div className="flex items-center gap-2.5">
            {/* Avatar */}
            <div className="w-7 h-7 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 text-xs font-medium border border-zinc-300 dark:border-zinc-700">
              KW
            </div>
            {/* Dati Utente */}
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50 leading-tight">
                Kai Whitmore
              </span>
              <span className="text-[12px] text-zinc-500 dark:text-zinc-400 leading-tight">
                kai@mercurjs.com
              </span>
            </div>
          </div>
          {/* I Tre Puntini a destra */}
          <MoreHorizontal className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
        </button>
      </div>

    </aside>
  )
}
