import { useState, useRef, useEffect } from "react"
import { Link, Outlet, useLocation } from "@tanstack/react-router"
import { 
  ShoppingCart, 
  Tag, 
  Users, 
  Gift, 
  DollarSign, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Home,
  Package,
  MoreHorizontal,
  User,
  Receipt,
  LogOut,
  Sun,
  Moon,
  Monitor
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

function SidebarItem({ 
  icon: Icon, 
  label, 
  href, 
  active, 
  subItems 
}: { 
  icon: any, 
  label: string, 
  href?: string, 
  active?: boolean,
  subItems?: { label: string, href: string, active?: boolean }[]
}) {
  const [isOpen, setIsOpen] = useState(active || false)

  const content = (
    <>
      <Icon strokeWidth={1.5} className={cn("w-4 h-4 transition-colors", active ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200")} />
      <span className="flex-1">{label}</span>
    </>
  )

  const className = cn(
    "flex items-center gap-2 px-2 py-1.5 text-[13px] rounded-md transition-colors cursor-pointer",
    active && !subItems
      ? "bg-white dark:bg-[#18181A] border border-gray-200 dark:border-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-50 font-medium" 
      : "text-zinc-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800/50"
  )

  return (
    <div className="flex flex-col">
      {href && !subItems ? (
        <Link to={href} className={className}>
          {content}
        </Link>
      ) : (
        <div className={className} onClick={() => setIsOpen(!isOpen)}>
          {content}
        </div>
      )}
      
      {subItems && isOpen && (
        <div className="ml-[18px] pl-4 border-l border-gray-200 dark:border-zinc-800 flex flex-col gap-1 mt-1">
          {subItems.map((sub, idx) => (
            <Link 
              key={idx} 
              to={sub.href}
              className={cn(
                "py-1 text-[13px] transition-colors block",
                sub.active 
                  ? "font-medium text-zinc-900 dark:text-zinc-50" 
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              )}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function VendorLayout() {
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
        setIsThemeMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = (path: string) => {
    if (path === "/vendor" && location.pathname === "/vendor") return true
    if (path !== "/vendor" && location.pathname.startsWith(path)) return true
    return false
  }

  const getBreadcrumbLabel = () => {
    if (location.pathname === "/vendor") return "Overview"
    const parts = location.pathname.split("/")
    const lastPart = parts[parts.length - 1]
    return lastPart.replace("-", " ")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] font-sans text-zinc-900 dark:text-zinc-100 flex">
      {/* SIDEBAR */}
      <aside className="w-[240px] bg-[#F9FAFB] dark:bg-[#09090B] border-r border-gray-200 dark:border-zinc-800 flex-shrink-0 flex flex-col h-screen sticky top-0 z-30">
        
        {/* Store Selector */}
        <div className="px-3 pt-3">
          <div className="flex items-center justify-between w-full p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors group">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-zinc-900 text-white dark:bg-white dark:text-black flex items-center justify-center text-[12px] font-bold">
                M
              </div>
              <span className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Mercurjs Store</span>
            </div>
            <ChevronDown strokeWidth={1.5} className="w-4 h-4 text-zinc-500" />
          </div>
        </div>

        {/* Search Bar (Sidebar) */}
        <div className="px-3">
          <div className="bg-white dark:bg-[#18181A] border border-gray-200 dark:border-zinc-800 rounded-md h-8 flex items-center px-2 gap-2 shadow-sm my-4 cursor-pointer hover:border-gray-300 dark:hover:border-zinc-700 transition-colors">
            <Search strokeWidth={1.5} className="w-4 h-4 text-zinc-500" />
            <span className="text-[13px] text-zinc-500">Search...</span>
            <div className="flex items-center gap-1 ml-auto">
              <kbd className="font-sans bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded px-1 text-[10px] text-zinc-500">⌘</kbd>
              <kbd className="font-sans bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded px-1 text-[10px] text-zinc-500">K</kbd>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-3 custom-scrollbar flex flex-col">
          <div className="flex flex-col gap-1 mb-6">
            <SidebarItem icon={Home} label="Overview" href="/vendor" active={isActive("/vendor")} />
            <SidebarItem 
              icon={ShoppingCart} 
              label="Orders" 
              active={isActive("/vendor/orders")}
              subItems={[
                { label: "Orders", href: "/vendor/orders", active: location.pathname === "/vendor/orders" },
                { label: "Drafts", href: "/vendor/orders/drafts", active: location.pathname === "/vendor/orders/drafts" }
              ]}
            />
            <SidebarItem 
              icon={Tag} 
              label="Products" 
              active={isActive("/vendor/products")}
              subItems={[
                { label: "Products", href: "/vendor/products", active: location.pathname === "/vendor/products" },
                { label: "Collections", href: "/vendor/products/collections", active: location.pathname === "/vendor/products/collections" },
                { label: "Categories", href: "/vendor/products/categories", active: location.pathname === "/vendor/products/categories" }
              ]}
            />
            <SidebarItem 
              icon={Users} 
              label="Customers" 
              active={isActive("/vendor/customers")}
              subItems={[
                { label: "Customers", href: "/vendor/customers", active: location.pathname === "/vendor/customers" },
                { label: "Customer Groups", href: "/vendor/customers/groups", active: location.pathname === "/vendor/customers/groups" }
              ]}
            />
            <SidebarItem icon={Package} label="Inventory" href="/vendor/inventory" active={isActive("/vendor/inventory")} />
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <SidebarItem icon={Gift} label="Discounts" href="/vendor/discounts" active={isActive("/vendor/discounts")} />
            <SidebarItem icon={Gift} label="Gift Cards" href="/vendor/gift-cards" active={isActive("/vendor/gift-cards")} />
            <SidebarItem icon={DollarSign} label="Pricing" href="/vendor/pricing" active={isActive("/vendor/pricing")} />
          </div>
        </div>

        {/* Bottom Section (Settings & User Profile) */}
        <div className="px-3 pb-3 mt-auto flex flex-col">
          <SidebarItem icon={Settings} label="Settings" href="/vendor/settings" active={isActive("/vendor/settings")} />
          
          <div className="mx-2 my-2 border-b border-dotted border-gray-300 dark:border-zinc-700" />
          
          {/* User Profile */}
          <div className="relative" ref={userMenuRef}>
            <button 
              onClick={() => {
                setIsUserMenuOpen(!isUserMenuOpen)
                setIsThemeMenuOpen(false)
              }}
              className="flex items-center justify-between w-full p-1.5 hover:bg-gray-100 dark:hover:bg-zinc-800/50 rounded-md cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
                  KW
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50">Kai Whitmore</span>
                  <span className="text-[12px] text-zinc-500 dark:text-zinc-400">kai@mercurjs.com</span>
                </div>
              </div>
              <MoreHorizontal strokeWidth={1.5} className="w-4 h-4 text-zinc-500" />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-1 bg-white dark:bg-[#18181A] border border-gray-200 dark:border-zinc-800 rounded-lg shadow-lg py-1 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <Link to="/vendor/settings/profile" className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                  <User strokeWidth={1.5} className="w-4 h-4 text-zinc-400" />
                  Profile
                </Link>
                <Link to="/vendor/settings" className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                  <Home strokeWidth={1.5} className="w-4 h-4 text-zinc-400" />
                  Store Settings
                </Link>
                <Link to="/vendor/settings/billing" className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                  <Receipt strokeWidth={1.5} className="w-4 h-4 text-zinc-400" />
                  Billing
                </Link>
                
                <div className="h-px bg-gray-200 dark:bg-zinc-800 my-1"></div>
                
                {/* Theme Toggle Submenu */}
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsThemeMenuOpen(!isThemeMenuOpen)
                    }}
                    className="w-full flex items-center justify-between px-3 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {theme === 'light' ? <Sun strokeWidth={1.5} className="w-4 h-4 text-zinc-400" /> : 
                       theme === 'dark' ? <Moon strokeWidth={1.5} className="w-4 h-4 text-zinc-400" /> : 
                       <Monitor strokeWidth={1.5} className="w-4 h-4 text-zinc-400" />}
                      Theme
                    </div>
                    <ChevronRight strokeWidth={1.5} className="w-3.5 h-3.5 text-zinc-400" />
                  </button>
                  
                  {isThemeMenuOpen && (
                    <div className="absolute left-full bottom-0 ml-1 w-32 bg-white dark:bg-[#18181A] border border-gray-200 dark:border-zinc-800 rounded-lg shadow-lg py-1 z-50">
                      <button 
                        onClick={() => setTheme('light')}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-1.5 text-[13px] transition-colors",
                          theme === 'light' ? "bg-gray-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium" : "text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        )}
                      >
                        <Sun strokeWidth={1.5} className="w-4 h-4" /> Light
                      </button>
                      <button 
                        onClick={() => setTheme('dark')}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-1.5 text-[13px] transition-colors",
                          theme === 'dark' ? "bg-gray-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium" : "text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        )}
                      >
                        <Moon strokeWidth={1.5} className="w-4 h-4" /> Dark
                      </button>
                      <button 
                        onClick={() => setTheme('system')}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-1.5 text-[13px] transition-colors",
                          theme === 'system' ? "bg-gray-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium" : "text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        )}
                      >
                        <Monitor strokeWidth={1.5} className="w-4 h-4" /> System
                      </button>
                    </div>
                  )}
                </div>

                <div className="h-px bg-gray-200 dark:bg-zinc-800 my-1"></div>
                
                <Link to="/login" className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors">
                  <LogOut strokeWidth={1.5} className="w-4 h-4" />
                  Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP HEADER (Exact Layout) */}
        <header className="h-14 bg-white dark:bg-[#09090B] border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-20">
          
          {/* Breadcrumbs */}
          <div className="flex items-center text-[13px]">
            <Link to="/vendor" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Stores</Link>
            <ChevronRight strokeWidth={1.5} className="w-3.5 h-3.5 mx-1.5 text-zinc-400" />
            <span className="font-medium text-zinc-900 dark:text-zinc-50 capitalize">
              {getBreadcrumbLabel()}
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
              <HelpCircle strokeWidth={1.5} className="w-[18px] h-[18px]" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors relative">
              <Bell strokeWidth={1.5} className="w-[18px] h-[18px]" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-white dark:ring-[#09090B]"></span>
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
