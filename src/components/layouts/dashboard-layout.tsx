import { useState } from "react"
import { Link, Outlet, useLocation } from "@tanstack/react-router"
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Tag, 
  Gift, 
  DollarSign, 
  Settings, 
  Search, 
  Bell, 
  HelpCircle, 
  ChevronRight, 
  Package,
  CreditCard,
  LogOut,
  Store,
  ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- SIDEBAR ITEM COMPONENT ---
function SidebarItem({ icon: Icon, label, href, active }: { icon: any, label: string, href: string, active?: boolean }) {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-[13px] font-medium transition-all duration-200 mb-1 group",
        active 
          ? "bg-zinc-100 text-zinc-900 dark:bg-[#27272A] dark:text-zinc-50" 
          : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-50"
      )}
    >
      <Icon className={cn("w-4 h-4 transition-colors", active ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300")} />
      {label}
    </Link>
  )
}

// --- DASHBOARD LAYOUT ---
export function DashboardLayout() {
  const location = useLocation()
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Helper to determine active route
  const isActive = (path: string) => {
    if (path === "/dashboard" && location.pathname === "/dashboard") return true
    if (path !== "/dashboard" && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#18181B] font-sans text-zinc-900 dark:text-zinc-100 flex">
      
      {/* --- SIDEBAR (Fixed Left) --- */}
      <aside className="w-[240px] bg-white dark:bg-[#18181B] border-r border-zinc-200 dark:border-zinc-700 flex-shrink-0 flex flex-col h-screen sticky top-0 z-30">
        
        {/* Store Selector / Logo Area */}
        <div className="h-14 flex items-center px-4 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center gap-2 w-full p-1.5 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700/50 cursor-pointer transition-colors group">
            <div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded-[4px] flex items-center justify-center text-white dark:text-zinc-900 text-[10px] font-bold shadow-sm">
              M
            </div>
            <span className="text-[13px] font-medium text-zinc-900 dark:text-white truncate flex-1">Medusa Store</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
          <div className="mb-6">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" href="/dashboard" active={isActive("/dashboard")} />
            <SidebarItem icon={ShoppingBag} label="Orders" href="/dashboard/orders" active={isActive("/dashboard/orders")} />
            <SidebarItem icon={Tag} label="Products" href="/dashboard/products" active={isActive("/dashboard/products")} />
            <SidebarItem icon={Users} label="Customers" href="/dashboard/customers" active={isActive("/dashboard/customers")} />
            <SidebarItem icon={Package} label="Inventory" href="/dashboard/inventory" active={isActive("/dashboard/inventory")} />
          </div>

          <div className="mb-6">
            <h4 className="px-3 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Promotion</h4>
            <SidebarItem icon={Gift} label="Discounts" href="/dashboard/discounts" active={isActive("/dashboard/discounts")} />
            <SidebarItem icon={CreditCard} label="Gift Cards" href="/dashboard/gift-cards" active={isActive("/dashboard/gift-cards")} />
            <SidebarItem icon={DollarSign} label="Pricing" href="/dashboard/pricing" active={isActive("/dashboard/pricing")} />
          </div>
          
          <div className="mb-6">
            <h4 className="px-3 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Sales Channels</h4>
            <SidebarItem icon={Store} label="Online Store" href="/store" active={false} />
          </div>
        </div>

        {/* Bottom Settings & User */}
        <div className="p-3 border-t border-zinc-200 dark:border-zinc-700 space-y-1">
          <SidebarItem icon={Settings} label="Settings" href="/dashboard/settings" active={isActive("/dashboard/settings")} />
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-[13px] font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-50 transition-colors">
            <LogOut className="w-4 h-4 text-zinc-400" />
            Sign out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* --- TOP HEADER --- */}
        <header className="h-14 bg-white dark:bg-[#18181B] border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between px-6 sticky top-0 z-20">
          
          {/* Left: Breadcrumbs / Page Title Context */}
          <div className="flex items-center text-[13px] text-zinc-500 dark:text-zinc-400">
            <span className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer transition-colors">Dashboard</span>
            {location.pathname !== "/dashboard" && (
              <>
                <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-zinc-400" />
                <span className="font-medium text-zinc-900 dark:text-zinc-50 capitalize">
                  {location.pathname.split("/").pop()?.replace("-", " ")}
                </span>
              </>
            )}
          </div>

          {/* Center: Search Bar (Medusa Style) */}
          <div className="flex-1 max-w-md mx-8 relative">
            <div className={cn(
              "flex items-center gap-2 px-3 h-8 rounded-md border bg-zinc-50 dark:bg-zinc-900 transition-all duration-200",
              isSearchFocused 
                ? "border-blue-500 ring-1 ring-blue-500/20 bg-white dark:bg-black shadow-sm" 
                : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-700"
            )}>
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="flex-1 bg-transparent border-none outline-none text-[13px] placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100 h-full w-full"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <div className="text-[10px] font-medium text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 bg-white dark:bg-zinc-800">⌘K</div>
            </div>
          </div>

          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700/50 text-zinc-500 dark:text-zinc-400 transition-colors relative border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full border border-white dark:border-zinc-900"></span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700/50 text-zinc-500 dark:text-zinc-400 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
              <HelpCircle className="w-4 h-4" />
            </button>
            <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-700 mx-1"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-white dark:border-zinc-700 shadow-sm cursor-pointer hover:ring-2 hover:ring-zinc-100 dark:hover:ring-zinc-700 transition-all flex items-center justify-center text-white text-[10px] font-bold">
              JD
            </div>
          </div>
        </header>

        {/* --- PAGE CONTENT (Outlet) --- */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  )
}
