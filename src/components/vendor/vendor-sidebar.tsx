import { Search, Settings, PanelLeft, ShoppingCart, Tag, Building2, Users, TicketPercent, CircleDollarSign, RefreshCcw, LayoutGrid, Plug, ChevronDown, UserPlus, Zap, ChevronRight, Plus, Globe, Check, LogOut, Monitor, ExternalLink, LifeBuoy, FileText, Sun, Moon, ChevronLeft, CornerUpLeft } from "lucide-react"
import { Link, useLocation } from "@tanstack/react-router"
import { cn } from "../../lib/utils"
import { useState, useEffect, useRef } from "react"

// Hook per gestire il click outside
function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// 1. ICONA DASHBOARD
const DiamondGridIcon = ({ className, strokeWidth }: any) => (
  <svg className={className} strokeWidth={strokeWidth} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l-4 4 4 4 4-4-4-4z" />
    <path d="M22 12l-4 4-4-4 4-4 4 4z" />
    <path d="M12 22l-4-4 4-4 4 4-4 4z" />
    <path d="M2 12l4 4 4-4-4-4z" />
  </svg>
);

// 2. LOGO IDA
const IdaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 422 319" className={cn("fill-current text-white", className)} xmlns="http://www.w3.org/2000/svg">
    <path d="M223.338 0H187.854V176.839H223.338V0Z" fill="currentColor" />
    <path d="M35.4848 142.035H0V318.874H35.4848V142.035Z" fill="currentColor" />
    <path d="M422.001 219.262H386.492V318.873H422.001V219.262Z" fill="currentColor" />
    <path d="M414.694 188.479C407.571 171.609 395.736 157.294 380.816 147.161C373.391 142.125 365.176 138.119 356.36 135.387C347.603 132.596 338.244 131.139 328.585 131.139C316.201 131.139 304.306 133.568 293.438 138.001C292.529 138.361 291.686 138.723 290.843 139.15C281.06 143.457 272.12 149.525 264.454 156.748C261.977 159.112 259.624 161.601 257.265 164.392C253.102 169.185 248.815 174.708 244.645 180.289C243.802 181.438 242.894 182.653 242.051 183.809C239.757 186.962 217.832 219.243 213.969 225.008C212.035 227.917 209.741 231.194 207.263 234.773C206.721 235.562 206.12 236.415 205.518 237.262C201.408 243.147 196.82 249.338 192.592 254.801C190.481 257.527 188.364 260.075 186.553 262.202C184.684 264.383 182.992 266.143 181.782 267.298C176.593 272.21 170.49 276.216 163.791 278.947C157.086 281.679 149.779 283.196 142.048 283.196C136.735 283.196 131.604 282.466 126.775 281.133C124.298 280.464 121.88 279.616 119.527 278.585C109.137 274.212 100.261 266.812 94.0401 257.526C90.9029 252.857 88.4257 247.761 86.7339 242.298C85.1055 236.835 84.1393 231.075 84.1393 225.008C84.1393 216.937 85.7728 209.353 88.6678 202.372C93.079 191.938 100.444 183.08 109.685 176.768C114.332 173.61 119.403 171.186 124.84 169.486C130.271 167.785 136.009 166.82 142.048 166.82C149.779 166.879 157.086 168.337 163.791 171.063C170.49 173.853 176.593 177.799 181.782 182.712C182.992 183.867 184.684 185.686 186.553 187.813C189.814 191.635 193.677 196.547 197.546 201.709C199.055 203.771 200.565 205.833 202.074 207.954C207.871 199.463 218.014 184.536 223.327 176.827C222.425 175.612 221.517 174.404 220.614 173.189C218.196 170.09 215.779 167.121 213.367 164.39C210.949 161.599 208.655 159.11 206.178 156.746C197.846 148.853 188.004 142.424 177.194 137.998C166.326 133.566 154.426 131.136 142.048 131.136C129.186 131.136 116.867 133.749 105.639 138.542C88.8509 145.641 74.6563 157.533 64.5717 172.519C59.5597 179.985 55.5788 188.292 52.8011 197.092C50.0833 205.953 48.6328 215.297 48.6328 225.009C48.6328 237.932 51.2274 250.31 55.9398 261.533C63.0629 278.462 74.8984 292.725 89.7537 302.857C97.2429 307.894 105.458 311.893 114.273 314.684C123.03 317.416 132.389 318.874 142.049 318.874C154.427 318.874 166.327 316.444 177.195 312.018C188.005 307.586 197.788 301.156 206.121 293.329L206.179 293.269C208.656 290.964 210.95 288.411 213.368 285.62C217.531 280.826 221.818 275.309 225.987 269.727C226.831 268.572 227.739 267.416 228.582 266.267C230.876 263.049 260.892 218.816 263.364 215.237C263.912 214.449 264.514 213.602 265.114 212.749C269.225 206.924 273.813 200.673 278.041 195.216C280.152 192.484 282.269 189.936 284.08 187.815C285.949 185.628 287.642 183.868 288.85 182.713C294.04 177.801 300.143 173.854 306.843 171.064C308.476 170.4 310.104 169.856 311.796 169.304C317.109 167.729 322.723 166.881 328.585 166.822C336.616 166.88 344.224 168.457 351.105 171.431C361.49 175.798 370.372 183.199 376.587 192.484C379.73 197.159 382.206 202.255 383.893 207.712C385.586 213.175 386.493 218.94 386.493 225.008C386.493 233.079 384.86 240.723 381.965 247.637C377.554 258.072 370.188 266.996 360.948 273.241C356.301 276.399 351.23 278.888 345.793 280.523C340.42 282.224 334.624 283.197 328.585 283.197C320.854 283.197 313.547 281.68 306.842 278.948C300.143 276.216 294.039 272.211 288.85 267.298C287.64 266.143 285.948 264.324 284.079 262.203C280.818 258.44 276.95 253.463 273.086 248.308C271.519 246.245 270.008 244.118 268.499 241.997C268.015 242.725 267.532 243.455 266.989 244.243C257.024 258.926 250.743 268.211 247.304 273.242C248.206 274.456 249.115 275.612 250.017 276.827C252.435 279.92 254.853 282.895 257.264 285.62C259.623 288.41 261.977 290.964 264.453 293.269C272.785 301.156 282.628 307.586 293.437 312.018C304.306 316.444 316.2 318.874 328.584 318.874C341.445 318.874 353.765 316.266 364.934 311.532C381.781 304.374 395.97 292.482 406.06 277.491C411.067 270.031 415.117 261.776 417.83 252.918C420.55 244.118 422.001 234.715 422.001 225.009C422.001 212.086 419.407 199.708 414.694 188.479Z" fill="currentColor" />
  </svg>
);

// 3. ICONA INBOX
const InboxIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={cn("w-4 h-4", className)} aria-hidden="true">
    <path d="M20.25 12.75h-4.559a3.65 3.65 0 0 1-3.591 3h-.2a3.65 3.65 0 0 1-3.591-3H3.75V16A2.25 2.25 0 0 0 6 18.25h12A2.25 2.25 0 0 0 20.25 16zm-12.365-7a2.25 2.25 0 0 0-2.028 1.273L3.973 10.94q-.072.15-.12.31H9a.75.75 0 0 1 .75.75v.1a2.15 2.15 0 0 0 2.15 2.15h.2a2.15 2.15 0 0 0 2.15-2.15V12a.75.75 0 0 1 .75-.75h5.143a2 2 0 0 0-.115-.299l-1.886-3.926a2.25 2.25 0 0 0-2.029-1.275zM21.75 16A3.75 3.75 0 0 1 18 19.75H6A3.75 3.75 0 0 1 2.25 16v-4.085c0-.563.127-1.12.371-1.627l1.886-3.915A3.75 3.75 0 0 1 7.885 4.25h8.228a3.75 3.75 0 0 1 3.38 2.126l1.887 3.926c.243.507.37 1.062.37 1.624z" />
  </svg>
);

const menuItems = [
  { title: "Dashboard", icon: DiamondGridIcon, path: "/vendor" },
  { title: "Ordini", icon: ShoppingCart, path: "/vendor/orders" },
  { 
    title: "Prodotti", 
    icon: Tag, 
    path: "/vendor/products",
    submenu: [
      { title: "Collezioni", path: "/vendor/products/collections" },
      { title: "Categorie", path: "/vendor/products/categories" },
      { title: "Importazioni", path: "/vendor/products/imports" },
    ]
  },
  { title: "Inventario", icon: Building2, path: "/vendor/inventory" },
  { title: "Clienti", icon: Users, path: "/vendor/customers" },
  { title: "Promozioni", icon: TicketPercent, path: "/vendor/promotions" },
  { title: "Listini", icon: CircleDollarSign, path: "/vendor/price-lists" },
  { title: "Richieste", icon: RefreshCcw, path: "/vendor/requests" },
]

export function VendorSidebar({ isCollapsed, toggleSidebar }: { isCollapsed: boolean, toggleSidebar: () => void }) {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path || (path !== "/vendor" && location.pathname.startsWith(path))
  const [openMenu, setOpenMenu] = useState<string>(location.pathname.includes("/vendor/products") ? "Products" : "")
  
  // Stati per i Dropdown
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  
  // Stato per gestire la vista "drill-down" all'interno del menu utente
  const [userMenuView, setUserMenuView] = useState<'main' | 'appearance'>('main')
  
  // Stato del tema
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark')

  // Refs per chiudere cliccando fuori
  const workspaceRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const isSettings = location.pathname.startsWith("/vendor/settings");

  useClickOutside(workspaceRef, () => setIsWorkspaceOpen(false))
  useClickOutside(userMenuRef, () => {
    setIsUserMenuOpen(false);
    setTimeout(() => setUserMenuView('main'), 200);
  })

  // Effetto tema
  useEffect(() => {
    const root = document.getElementById('vendor-dashboard-root');
    if (!root) return;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Sfondo scuro in dark mode per i Menu e Tooltips
  const tooltipClasses = "absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-[12px] font-medium rounded shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[9999] pointer-events-none";

  return (
    <aside className={cn(
      "flex-shrink-0 flex flex-col h-full bg-white dark:bg-[#18181B] border-r border-zinc-200 dark:border-zinc-700 transition-all duration-300 relative z-[200]",
      isCollapsed ? "w-[68px] overflow-visible" : "w-[240px]"
    )}>
      
      {/* 1. STORE SELECTOR & TOGGLE */}
      {!isSettings && (
        <div className={cn("pt-4 pb-2 flex-shrink-0 relative", isCollapsed ? "px-0" : "px-3")}>
          <div className={cn("flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
            {isCollapsed ? (
              <button 
                onClick={(e) => { e.preventDefault(); toggleSidebar(); }}
                className="relative flex items-center justify-center w-8 h-8 rounded-md hover:bg-zinc-100 dark:hover:bg-[#27272A] transition-colors group"
              >
                <div className="w-7 h-7 flex items-center justify-center bg-zinc-900 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-md shadow-sm transition-opacity duration-200 group-hover:opacity-0 absolute">
                  <IdaLogo className="h-3" />
                </div>
                <PanelLeft className="w-4 h-4 text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 absolute" strokeWidth={1.5} />
              </button>
            ) : (
              <>
                <button className="flex items-center gap-2 hover:bg-zinc-100 dark:hover:bg-[#27272A] rounded-md transition-colors p-1 ml-1">
                  <div className="w-7 h-7 flex items-center justify-center bg-zinc-900 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-md shadow-sm">
                     <IdaLogo className="h-3" />
                  </div>
                </button>
                <button 
                  onClick={(e) => { e.preventDefault(); toggleSidebar(); }}
                  className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-zinc-100 dark:hover:bg-[#27272A] text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors mr-1"
                >
                  <PanelLeft className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 mx-4 border-b border-dotted border-zinc-300 dark:border-zinc-700" />
        </div>
      )}

      {/* 2. MAIN NAVIGATION E WORKSPACE SWITCHER */}
      <div className={cn("flex-1 px-3 py-1 flex flex-col gap-0.5 custom-scrollbar", isCollapsed ? "overflow-visible" : "overflow-y-auto relative")}>
        
        {/* WORKSPACE SWITCHER DROPDOWN */}
        {!isSettings && (
          <>
            <div className={cn("mt-1.5 relative w-full", isCollapsed && "flex justify-center")} ref={workspaceRef}>
              <button 
                onClick={(e) => { e.preventDefault(); setIsWorkspaceOpen(!isWorkspaceOpen); }}
                className={cn(
                  "flex items-center justify-between w-full h-8 rounded-md text-zinc-900 dark:text-zinc-50 bg-zinc-50 dark:bg-[#27272A]/50 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-700 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500",
                  isCollapsed ? "justify-center w-8 mx-auto" : "px-2",
                  isWorkspaceOpen && "bg-zinc-100 dark:bg-[#27272A] border-zinc-200/60 dark:border-zinc-700"
                )}
              >
                <div className={cn("flex items-center gap-2.5", isCollapsed && "gap-0")}>
                  <div className="size-5 rounded-md bg-red-600 flex items-center justify-center text-white shadow-inner shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-3"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                  </div>
                  <span className={cn("text-[13px] font-medium text-zinc-900 dark:text-zinc-50 truncate", isCollapsed && "hidden")}>
                    Brembo S.p.A.
                  </span>
                </div>
                {!isCollapsed && (
                  <ChevronDown className={cn("w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-transform shrink-0", isWorkspaceOpen && "rotate-180")} strokeWidth={1.5} />
                )}
              </button>

              {/* MENU A TENDINA WORKSPACE - POSITION FIXED A SIDEBAR CHIUSA */}
              {isWorkspaceOpen && (
                <div className="absolute left-0 top-[calc(100%+8px)] z-[9999] w-[216px] rounded-md bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 shadow-lg p-2 animate-in fade-in zoom-in-95 duration-100 flex flex-col gap-1">
                  <div className="flex items-center gap-3 p-1 mb-1">
                    <div className="size-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-medium text-[16px] flex-shrink-0 shadow-inner">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50 truncate">Brembo S.p.A.</span>
                      <span className="text-[12px] text-zinc-500 dark:text-zinc-400 truncate">Free Plan • 2 members</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 px-0.5">
                    <Link to="/vendor/settings" onClick={() => setIsWorkspaceOpen(false)} className="flex-1 flex items-center justify-center gap-1.5 px-1.5 py-1.5 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-[12px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors whitespace-nowrap">
                      <Settings className="size-3.5 shrink-0" strokeWidth={1.5} /> Impostazioni
                    </Link>
                    <button className="flex-1 flex items-center justify-center gap-1.5 px-1.5 py-1.5 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-[12px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors whitespace-nowrap">
                      <UserPlus className="size-3.5 shrink-0" strokeWidth={1.5} /> Invita
                    </button>
                  </div>
                  <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-1 -mx-2" />
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50 dark:bg-[#323236]">
                    <span className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-900 dark:text-zinc-100">
                      <Zap className="size-4" fill="currentColor" strokeWidth={1.5} /> Passa a Pro
                    </span>
                    <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors shadow-sm">
                      Upgrade
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mx-1 my-2 border-b border-dotted border-zinc-300 dark:border-zinc-700" />
          </>
        )}

        {isSettings ? (
          /* NAVIGAZIONE IMPOSTAZIONI */
          <div className="flex flex-col h-full">
            {/* Nuovo Header "Torna alla Dashboard" */}
            <div className="pt-4 pb-2 px-3 flex-shrink-0">
              <Link to="/vendor" className="flex items-center gap-2.5 px-2 py-1.5 text-[13px] font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors group">
                <CornerUpLeft className="w-4 h-4 text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors" strokeWidth={2} />
                Impostazioni
              </Link>
            </div>
            
            {/* Voci di Menu Impostazioni */}
            <div className="flex-1 px-3 py-1 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
              <div>
                <div className="flex items-center justify-between px-2 mb-1 mt-2">
                  <span className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400">Generale</span>
                  <span className="text-[12px] text-zinc-400">—</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  {[
                    { title: "Store", path: "/vendor/settings" },
                    { title: "Team", path: "/vendor/settings/team" },
                    { title: "Tipi di prodotto", path: "/vendor/settings/product-types" },
                    { title: "Tag prodotto", path: "/vendor/settings/product-tags" },
                    { title: "Sedi e spedizioni", path: "/vendor/settings/locations" }
                  ].map(item => (
                    <Link key={item.title} to={item.path} className={cn("px-2 py-1.5 text-[13px] rounded-md transition-colors", location.pathname === item.path ? "bg-zinc-100 dark:bg-[#27272A] text-zinc-900 dark:text-zinc-50 font-medium" : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-[#323236]")}>{item.title}</Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between px-2 mb-1">
                  <span className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400">Il Mio Account</span>
                  <span className="text-[12px] text-zinc-400">—</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <Link to="/vendor/settings/profile" className={cn("px-2 py-1.5 text-[13px] rounded-md transition-colors", location.pathname === "/vendor/settings/profile" ? "bg-zinc-100 dark:bg-[#27272A] text-zinc-900 dark:text-zinc-50 font-medium" : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-[#323236]")}>Profilo</Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* NAVIGAZIONE PRINCIPALE */
          <>
            {menuItems.map((item) => {
              const active = isActive(item.path)
              const isAccordionOpen = openMenu === item.title

              return (
                <div key={item.title} className="flex flex-col gap-0.5">
                  <Link
                    to={item.path}
                    onClick={() => {
                      if (item.submenu) {
                        setOpenMenu(isAccordionOpen ? "" : item.title)
                      } else {
                        setOpenMenu("")
                      }
                    }}
                    className={cn(
                      "flex items-center transition-all rounded-md group h-8 relative",
                      isCollapsed ? "justify-center w-8 mx-auto p-0 mb-1" : "justify-between w-full px-2 text-[13px]",
                      active 
                        ? "bg-white dark:bg-[#27272A] border border-zinc-200/60 dark:border-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-50 font-medium" 
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent"
                    )}
                  >
                    <div className={cn("flex items-center", !isCollapsed && "gap-2.5")}>
                      <item.icon className={cn("w-4 h-4", active ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500")} strokeWidth={1.5} />
                      <span className={cn(isCollapsed && "hidden")}>{item.title}</span>
                    </div>
                    {isCollapsed && (
                      <span className={tooltipClasses}>{item.title}</span>
                    )}
                  </Link>

                  {/* Cerca */}
                  {item.title === "Dashboard" && (
                    <button className={cn(
                      "flex items-center h-8 text-[13px] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors rounded-md group w-full border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-700 relative",
                      isCollapsed ? "justify-center w-8 mx-auto px-0" : "px-2"
                    )}>
                      <Search className={cn("w-4 h-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors", !isCollapsed && "mr-2.5")} strokeWidth={1.5} />
                      <span className={cn(isCollapsed && "hidden")}>Cerca</span>
                      <div className={cn("ml-auto flex items-center gap-1", isCollapsed && "hidden")}>
                        <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">⌘</kbd>
                        <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">K</kbd>
                      </div>
                      {isCollapsed && (
                        <span className={tooltipClasses}>Cerca</span>
                      )}
                    </button>
                  )}

                  {/* Submenu */}
                  {item.submenu && !isCollapsed && (
                    <div className={cn("overflow-hidden transition-all", isAccordionOpen ? "max-h-[500px]" : "max-h-0")}>
                      <ul className="flex flex-col gap-0.5 pt-0.5 pb-1">
                        {item.submenu.map((subItem) => {
                          const subActive = location.pathname === subItem.path
                          return (
                            <li key={subItem.title}>
                              <Link
                                to={subItem.path}
                                className={cn(
                                  "block w-full pl-[34px] pr-2 py-1.5 text-[13px] rounded-md transition-colors",
                                  subActive ? "text-zinc-900 dark:text-zinc-50 font-medium bg-zinc-100/50 dark:bg-[#27272A]/50" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-[#27272A]"
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
            
            <div className="mx-1 my-2 border-b border-dotted border-zinc-300 dark:border-zinc-700" />
            
            <Link to="/vendor/apps" onClick={() => setOpenMenu("")} className={cn("flex items-center transition-all rounded-md group text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent relative", isCollapsed ? "justify-center w-8 h-8 mx-auto p-0 mb-1" : "w-full px-2 py-1.5 text-[13px]")}>
              <div className={cn("flex items-center", !isCollapsed && "gap-2.5")}>
                <LayoutGrid className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
                <span className={cn(isCollapsed && "hidden")}>Ida App & Servizi</span>
              </div>
              {isCollapsed && (
                <span className={tooltipClasses}>Ida App & Servizi</span>
              )}
            </Link>
            
            <div className="mx-1 my-2 border-b border-dotted border-zinc-300 dark:border-zinc-700" />

            <Link to="/vendor/integrations" onClick={() => setOpenMenu("")} className={cn("flex items-center transition-all rounded-md group text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent relative", isCollapsed ? "justify-center w-8 h-8 mx-auto p-0" : "w-full px-2 py-1.5 text-[13px]")}>
              <div className={cn("flex items-center", !isCollapsed && "gap-2.5")}>
                <Plug className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
                <span className={cn(isCollapsed && "hidden")}>Integrazioni</span>
              </div>
              {isCollapsed && (
                <span className={tooltipClasses}>Integrazioni</span>
              )}
            </Link>
          </>
        )}
      </div>

      {/* 4. BOTTOM SECTION: Avatar e Impostazioni */}
      <div className={cn("mt-auto px-3 pb-3 pt-2 flex", isCollapsed ? "flex-col items-center gap-3" : "flex-col gap-1")}>
        
        <Link to="/vendor/settings" className={cn("flex items-center transition-all rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent group relative", isCollapsed ? "justify-center w-8 h-8 p-0" : "w-full px-2 py-1.5 text-[13px] gap-2.5")}>
          <Settings className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
          <span className={cn(isCollapsed && "hidden")}>Impostazioni</span>
          {isCollapsed && (
            <span className={tooltipClasses}>Impostazioni</span>
          )}
        </Link>

        <div className={cn("border-b border-dotted border-zinc-300 dark:border-zinc-700", isCollapsed ? "w-full my-1" : "mx-1 my-1")} />

        {/* Wrapper flessibile per Avatar e Inbox */}
        <div className={cn("flex w-full relative", isCollapsed ? "flex-col items-center gap-3" : "items-center justify-between px-1")} ref={userMenuRef}>
          
          <div className={cn("flex items-center", isCollapsed ? "justify-center" : "w-full justify-start")}>
            <button 
              onClick={(e) => { e.preventDefault(); setIsUserMenuOpen(!isUserMenuOpen); }}
              className="flex items-center justify-center rounded-full hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-700 transition-all outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className="flex shrink-0 items-center justify-center overflow-hidden shadow-borders-base bg-zinc-200 dark:bg-zinc-800 rounded-full h-7 w-7">
                <img alt="Avatar" className="aspect-square object-cover object-center rounded-full size-6" src="https://i.pravatar.cc/150?u=kai" />
              </span>
            </button>
          </div>

          {/* MENU A TENDINA UTENTE - POSITION FIXED A SIDEBAR CHIUSA */}
          {isUserMenuOpen && (
             <div className="absolute left-0 bottom-[calc(100%+8px)] z-[9999] w-[216px] rounded-md bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 shadow-lg p-1.5 animate-in fade-in zoom-in-95 duration-100 flex flex-col overflow-hidden">
               
               {/* Vista Principale del Menu */}
               {userMenuView === 'main' ? (
                 <>
                   <a className="flex items-center gap-2.5 px-2 py-2 pb-3 hover:bg-zinc-100 dark:hover:bg-[#323236] rounded-lg transition-colors cursor-pointer group" href="/profile">
                     <span className="relative flex overflow-hidden rounded-full items-center text-xs size-8 shrink-0 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors">
                       <img className="h-full w-full aspect-auto object-cover" src="https://i.pravatar.cc/150?u=kai" />
                     </span>
                     <div className="min-w-0 flex-1">
                       <p className="truncate text-[13px] font-medium text-zinc-900 dark:text-zinc-50">admin@acmecorp.com</p>
                     </div>
                   </a>
                   
                   <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-1 -mx-1.5" />
                   
                   <div className="flex flex-col gap-0.5">
                     <Link to="/vendor/settings/profile" onClick={() => setIsUserMenuOpen(false)} className="relative flex cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-[#323236]">
                       <UserPlus className="size-4 shrink-0" strokeWidth={1.5} />
                       <span>Profilo</span>
                     </Link>
                     <button 
                       onClick={() => setUserMenuView('appearance')}
                       className="relative flex w-full cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-[#323236]"
                     >
                       <Monitor className="size-4 shrink-0" strokeWidth={1.5} />
                       <span>Aspetto</span>
                       <ChevronRight className="size-4 shrink-0 ml-auto opacity-50" strokeWidth={1.5} />
                     </button>
                     <div className="relative flex cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-[#323236]">
                       <LifeBuoy className="size-4 shrink-0" strokeWidth={1.5} />
                       <span>Supporto</span>
                       <ExternalLink className="size-3.5 shrink-0 ml-auto opacity-50" strokeWidth={1.5} />
                     </div>
                     <div className="relative flex cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-[#323236]">
                       <FileText className="size-4 shrink-0" strokeWidth={1.5} />
                       <span>Documentazione</span>
                       <ExternalLink className="size-3.5 shrink-0 ml-auto opacity-50" strokeWidth={1.5} />
                     </div>
                   </div>
                   
                   <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-1 -mx-1.5" />
                   
                   <div className="relative flex cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-red-50 dark:hover:bg-red-900/20">
                     <LogOut className="size-4 shrink-0" strokeWidth={1.5} />
                     <span>Esci</span>
                   </div>
                 </>
               ) : (
                 /* Vista "Appearance" Drill-down */
                 <div className="flex flex-col animate-in slide-in-from-right-4 duration-200">
                   <div className="flex items-center gap-2 px-1 py-1 mb-1">
                     <button 
                       onClick={() => setUserMenuView('main')}
                       className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-[#323236] text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                     >
                       <ChevronLeft className="size-4" strokeWidth={1.5} />
                     </button>
                     <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50">Aspetto</span>
                   </div>
                   
                   <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-1 -mx-1.5" />
                   
                   <div className="flex flex-col gap-0.5 mt-1 pb-1">
                     <button 
                       onClick={() => setTheme('light')}
                       className="relative flex w-full cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-[#323236]"
                     >
                       <Sun className="size-4 shrink-0" strokeWidth={1.5} />
                       <span>Chiaro</span>
                       {theme === 'light' && <Check className="size-4 shrink-0 ml-auto" strokeWidth={2} />}
                     </button>
                     <button 
                       onClick={() => setTheme('dark')}
                       className="relative flex w-full cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-[#323236]"
                     >
                       <Moon className="size-4 shrink-0" strokeWidth={1.5} />
                       <span>Scuro</span>
                       {theme === 'dark' && <Check className="size-4 shrink-0 ml-auto" strokeWidth={2} />}
                     </button>
                     <button 
                       onClick={() => setTheme('system')}
                       className="relative flex w-full cursor-pointer select-none items-center rounded-md text-[13px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 outline-none transition-colors gap-2.5 px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-[#323236]"
                     >
                       <Monitor className="size-4 shrink-0" strokeWidth={1.5} />
                       <span>Sistema</span>
                       {theme === 'system' && <Check className="size-4 shrink-0 ml-auto" strokeWidth={2} />}
                     </button>
                   </div>
                 </div>
               )}
             </div>
          )}

          {/* Bottone Inbox */}
          <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-zinc-100 dark:hover:bg-[#27272A] text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group">
            <InboxIcon />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-white dark:ring-[#18181B]"></span>
            {isCollapsed && (
              <span className={tooltipClasses}>Inbox</span>
            )}
          </button>

        </div>
      </div>
    </aside>
  )
}