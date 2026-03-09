import { Search, Settings, PanelLeft, ShoppingCart, Tag, Building2, Users, TicketPercent, CircleDollarSign, RefreshCcw, Box, Puzzle, ChevronDown, UserPlus, Zap, ChevronRight, Plus, Globe, Check } from "lucide-react"
import { Link, useLocation } from "@tanstack/react-router"
import { cn } from "../../lib/utils"
import { useState } from "react"

// 1. ICONA DASHBOARD (ROMBI)
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

// 3. ICONA INBOX (16x16)
const InboxIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={cn("w-4 h-4", className)} aria-hidden="true">
    <path d="M20.25 12.75h-4.559a3.65 3.65 0 0 1-3.591 3h-.2a3.65 3.65 0 0 1-3.591-3H3.75V16A2.25 2.25 0 0 0 6 18.25h12A2.25 2.25 0 0 0 20.25 16zm-12.365-7a2.25 2.25 0 0 0-2.028 1.273L3.973 10.94q-.072.15-.12.31H9a.75.75 0 0 1 .75.75v.1a2.15 2.15 0 0 0 2.15 2.15h.2a2.15 2.15 0 0 0 2.15-2.15V12a.75.75 0 0 1 .75-.75h5.143a2 2 0 0 0-.115-.299l-1.886-3.926a2.25 2.25 0 0 0-2.029-1.275zM21.75 16A3.75 3.75 0 0 1 18 19.75H6A3.75 3.75 0 0 1 2.25 16v-4.085c0-.563.127-1.12.371-1.627l1.886-3.915A3.75 3.75 0 0 1 7.885 4.25h8.228a3.75 3.75 0 0 1 3.38 2.126l1.887 3.926c.243.507.37 1.062.37 1.624z" />
  </svg>
);

const menuItems = [
  { title: "Dashboard", icon: DiamondGridIcon, path: "/vendor" },
  { title: "Orders", icon: ShoppingCart, path: "/vendor/orders" },
  { 
    title: "Products", 
    icon: Tag, 
    path: "/vendor/products",
    submenu: [
      { title: "Collections", path: "/vendor/products/collections" },
      { title: "Categories", path: "/vendor/products/categories" },
      { title: "Imports", path: "/vendor/products/imports" },
    ]
  },
  { title: "Inventory", icon: Building2, path: "/vendor/inventory" },
  { title: "Customers", icon: Users, path: "/vendor/customers" },
  { title: "Promotions", icon: TicketPercent, path: "/vendor/promotions" },
  { title: "Price lists", icon: CircleDollarSign, path: "/vendor/price-lists" },
  { title: "Requests", icon: RefreshCcw, path: "/vendor/requests" },
]

export function VendorSidebar({ isCollapsed, toggleSidebar }: { isCollapsed: boolean, toggleSidebar: () => void }) {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path || (path !== "/vendor" && location.pathname.startsWith(path))
  const [openMenu, setOpenMenu] = useState<string>(location.pathname.includes("/vendor/products") ? "Products" : "")
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false) // Stato per il dropdown Workspace

  return (
    <aside className={cn(
      "flex-shrink-0 flex flex-col h-full bg-white dark:bg-[#18181B] border-r border-zinc-200 dark:border-zinc-700 transition-all duration-300 relative",
      isCollapsed ? "w-[68px]" : "w-[240px]"
    )}>
      
      {/* 1. STORE SELECTOR & TOGGLE */}
      {/* Aggiunto pl-2 per allineare il logo Ida e PanelLeft con le voci sottostanti */}
      <div className="px-3 pl-2 pt-4 pb-2 flex-shrink-0 relative">
        <div className={cn("flex items-center", isCollapsed ? "justify-center" : "justify-between px-1")}>
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
              {/* Pulsante indipendente per il Logo */}
              <button className="flex items-center gap-2 hover:bg-zinc-100 dark:hover:bg-[#27272A] rounded-md transition-colors p-1">
                <div className="w-7 h-7 flex items-center justify-center bg-zinc-900 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-md shadow-sm">
                   <IdaLogo className="h-3" />
                </div>
              </button>
              
              {/* Pulsante indipendente per chiudere la sidebar */}
              <button 
                onClick={(e) => { e.preventDefault(); toggleSidebar(); }}
                className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-zinc-100 dark:hover:bg-[#27272A] text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                <PanelLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </>
          )}
        </div>
        <div className="absolute bottom-0 left-5 right-5 border-b border-dotted border-zinc-300 dark:border-zinc-700" />
      </div>

      {/* 2. WORKSPACE SWITCHER */}
      {/* Aggiunto mt-4 per distanziare dal bordo tratteggiato */}
      <div className={cn("px-3 mt-4 mb-2 relative", isCollapsed && "px-0")}>
        <button 
           onClick={() => !isCollapsed && setIsWorkspaceOpen(!isWorkspaceOpen)}
           className={cn(
             "flex items-center justify-between w-full rounded-md text-zinc-900 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-700 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group",
             isCollapsed ? "justify-center h-8 w-8 mx-auto" : "px-2 py-1.5",
             isWorkspaceOpen && "bg-zinc-100 dark:bg-[#27272A] border-zinc-200/60 dark:border-zinc-700"
           )}
         >
           <div className={cn("flex items-center gap-2.5", isCollapsed && "gap-0")}>
              {/* Logo Acme Corp (24x24 container, 22x22 img) */}
              <div className="w-5 h-5 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center border border-zinc-300 dark:border-zinc-600 transition-colors flex-shrink-0">
                <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300">AC</span>
              </div>
              <span className={cn(
                "text-[13px] font-medium text-zinc-900 dark:text-zinc-50 truncate",
                isCollapsed && "hidden"
              )}>
                Acme Corp
              </span>
           </div>
           
           {!isCollapsed && (
             <ChevronDown className={cn("w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-transform shrink-0", isWorkspaceOpen && "rotate-180")} strokeWidth={1.5} />
           )}
        </button>

        {/* MENU A TENDINA WORKSPACE (Visibile solo se aperto) */}
        {/* Usiamo w-[calc(100%-16px)] e mx-2 per adattarlo alla larghezza della sidebar */}
        {isWorkspaceOpen && !isCollapsed && (
          <div className="absolute top-full left-0 right-0 mt-1 z-[100] w-[calc(100%-24px)] mx-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-xl p-2 animate-in fade-in zoom-in-95 duration-100 flex flex-col gap-1">

            {/* 1. Header Account */}
            <div className="flex items-center gap-3 p-1 mb-1">
              <div className="size-10 rounded-lg bg-[#b54a22] flex items-center justify-center text-white font-medium text-[16px] flex-shrink-0 shadow-inner">
                AC
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[14px] font-medium text-zinc-900 dark:text-zinc-50 truncate">Acme Corp</span>
                <span className="text-[12px] text-zinc-500 dark:text-zinc-400 truncate">Free Plan • 2 members</span>
              </div>
            </div>

            {/* 2. Azioni Primarie */}
            <div className="flex gap-1.5 px-1">
              <button className="flex-1 flex items-center justify-start gap-2 px-2.5 py-1.5 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-[12px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                <Settings className="size-3.5" /> Settings
              </button>
              <button className="flex-1 flex items-center justify-start gap-2 px-2.5 py-1.5 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-[12px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors">
                <UserPlus className="size-3.5" /> Invite members
              </button>
            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800/80 my-1 -mx-2" />

            {/* 3. Call to Action (Upgrade) */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50 dark:bg-[#27272A]/50">
              <span className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-900 dark:text-zinc-100">
                <Zap className="size-4" fill="currentColor" /> Turn Pro
              </span>
              <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-3 py-1.5 rounded-md text-[12px] font-medium transition-colors shadow-sm">
                Upgrade
              </button>
            </div>

            {/* 4. Sezione Crediti */}
            <div className="flex flex-col gap-2.5 p-3 rounded-lg bg-zinc-50 dark:bg-[#27272A]/50 mt-1">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">Credits</span>
                <span className="text-[12px] text-zinc-500 dark:text-zinc-400 flex items-center gap-0.5 hover:text-zinc-300 cursor-pointer transition-colors">
                  5 left <ChevronRight className="size-3" />
                </span>
              </div>
              <div className="h-2.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#2563EB] rounded-full w-[80%]" />
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="size-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Daily credits reset at midnight UTC</span>
              </div>
            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800/80 my-1 -mx-2" />

            {/* 5. Lista Workspaces */}
            <div className="flex flex-col">
              <span className="px-2 py-1 text-[11px] text-zinc-500 dark:text-zinc-400">All workspaces</span>
              <button className="flex items-center gap-2.5 w-full px-2 py-1.5 rounded-md bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors text-left mt-0.5 group">
                <div className="size-6 rounded-md bg-[#b54a22] flex items-center justify-center text-white font-medium text-[11px] shadow-inner shrink-0">
                  AC
                </div>
                <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 truncate flex-1">Acme Corp</span>
                <span className="text-[9px] font-semibold bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                  Free
                </span>
                <Check className="size-4 text-zinc-900 dark:text-zinc-100 shrink-0" />
              </button>
            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800/80 my-1 -mx-2" />

            {/* 6. Azioni Finali */}
            <div className="flex flex-col gap-0.5 pb-0.5">
              <button className="flex items-center gap-3 px-2 py-1.5 w-full rounded-md hover:bg-zinc-100 dark:hover:bg-[#27272A] transition-colors text-left group">
                <div className="size-7 rounded-md bg-zinc-100 dark:bg-[#27272A] border border-transparent dark:border-white/5 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-zinc-700 transition-colors shadow-sm">
                  <Plus className="size-4 text-zinc-700 dark:text-zinc-300" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200">Create new workspace</span>
              </button>
              <button className="flex items-center gap-3 px-2 py-1.5 w-full rounded-md hover:bg-zinc-100 dark:hover:bg-[#27272A] transition-colors text-left group">
                <div className="size-7 rounded-md bg-zinc-100 dark:bg-[#27272A] border border-transparent dark:border-white/5 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-zinc-700 transition-colors shadow-sm">
                  <Globe className="size-4 text-zinc-700 dark:text-zinc-300" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200">Find workspaces</span>
              </button>
            </div>

          </div>
        )}
      </div>

      {/* 3. MAIN NAVIGATION */}
      <nav className="flex-1 overflow-y-auto px-3 py-1 flex flex-col gap-0.5 custom-scrollbar">

        {/* Renderizza il menu */}
        {menuItems.map((item) => {
          const active = isActive(item.path)
          const isAccordionOpen = openMenu === item.title

          return (
            <div key={item.title}>
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
                  "flex items-center transition-all rounded-md group",
                  isCollapsed ? "justify-center w-8 h-8 mx-auto p-0 mb-1" : "justify-between w-full px-2 py-1.5 text-[13px]",
                  active 
                    ? "bg-white dark:bg-[#27272A] border border-zinc-200/60 dark:border-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-50 font-medium" 
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent"
                )}
              >
                <div className={cn("flex items-center", !isCollapsed && "gap-2.5")}>
                  <item.icon className={cn("w-4 h-4", active ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500")} strokeWidth={1.5} />
                  <span className={cn(isCollapsed && "hidden")}>{item.title}</span>
                </div>
              </Link>

              {/* PULSANTE SEARCH INSERITO SUBITO DOPO DASHBOARD */}
              {item.title === "Dashboard" && (
                <button className={cn(
                  "flex items-center py-1.5 text-[13px] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors rounded-md group w-full mb-1 border border-transparent hover:border-zinc-200/60 dark:hover:border-zinc-700",
                  isCollapsed ? "justify-center w-8 h-8 mx-auto px-0" : "px-2"
                )}>
                  <Search className={cn("w-4 h-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors", !isCollapsed && "mr-2.5")} strokeWidth={1.5} />
                  <span className={cn(isCollapsed && "hidden")}>Search</span>
                  <div className={cn("ml-auto flex items-center gap-1", isCollapsed && "hidden")}>
                    <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">⌘</kbd>
                    <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5 text-[10px] font-sans text-zinc-500 font-medium">K</kbd>
                  </div>
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
        
        <div className="mx-4 my-2 border-b border-dotted border-zinc-300 dark:border-zinc-700" />
        
        <Link to="/vendor/connect" onClick={() => setOpenMenu("")} className={cn("flex items-center transition-all rounded-md group text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent", isCollapsed ? "justify-center w-8 h-8 mx-auto p-0 mb-1" : "w-full px-2 py-1.5 text-[13px]")}>
          <div className={cn("flex items-center", !isCollapsed && "gap-2.5")}>
            <Box className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
            <span className={cn(isCollapsed && "hidden")}>Mercur Connect</span>
          </div>
        </Link>
        
        <Link to="/vendor/extensions" onClick={() => setOpenMenu("")} className={cn("flex items-center transition-all rounded-md group text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent", isCollapsed ? "justify-center w-8 h-8 mx-auto p-0" : "justify-between w-full px-2 py-1.5 text-[13px]")}>
          <div className={cn("flex items-center", !isCollapsed && "gap-2.5")}>
            <Puzzle className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
            <span className={cn(isCollapsed && "hidden")}>Extensions</span>
          </div>
        </Link>
      </nav>

      {/* 4. BOTTOM SECTION: Avatar e Inbox */}
      <div className={cn("mt-auto px-3 pb-3 pt-2 flex", isCollapsed ? "flex-col items-center gap-3" : "flex-col gap-1")}>
        
        <Link to="/vendor/settings" className={cn("flex items-center transition-all rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#27272A] border border-transparent", isCollapsed ? "justify-center w-8 h-8 p-0" : "w-full px-2 py-1.5 text-[13px] gap-2.5")}>
          <Settings className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
          <span className={cn(isCollapsed && "hidden")}>Settings</span>
        </Link>

        <div className={cn("border-b border-dotted border-zinc-300 dark:border-zinc-700", isCollapsed ? "w-full my-1" : "mx-2 my-1")} />

        {/* Wrapper flessibile per Avatar e Inbox */}
        <div className={cn("flex w-full", isCollapsed ? "flex-col items-center gap-3" : "items-center justify-between px-1")}>
          
          {/* Bottone Avatar Singolo */}
          <button className="flex items-center justify-center rounded-full hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-700 transition-all outline-none">
            <span className="flex shrink-0 items-center justify-center overflow-hidden shadow-borders-base bg-ui-bg-base rounded-full h-7 w-7">
              <img 
                src="https://i.pravatar.cc/150?u=kai" 
                alt="Avatar" 
                className="aspect-square object-cover object-center rounded-full txt-compact-small-plus size-6"
              />
            </span>
          </button>

          {/* Bottone Inbox (sempre visibile, ridotto a 16x16) */}
          <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-zinc-100 dark:hover:bg-[#27272A] text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors relative">
            <InboxIcon />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-white dark:ring-[#18181B]"></span>
          </button>

        </div>
      </div>
    </aside>
  )
}