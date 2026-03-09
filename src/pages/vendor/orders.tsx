import { AlertCircle, Search, Filter, ArrowDownUp, MoreHorizontal } from "lucide-react"

export function VendorOrders() {
  const surfaceButtonClass = "flex items-center justify-center px-3 py-1.5 text-[13px] font-medium bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-[#27272A] transition-colors shadow-sm"
  const iconButtonClass = "flex items-center justify-center w-8 h-8 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-[#27272A] hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors shadow-sm"

  return (
    <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm w-full h-[calc(100vh-32px)] flex flex-col overflow-hidden animate-in fade-in duration-300">
        
        <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-white dark:bg-[#18181B]">
          <h1 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Orders
          </h1>
          <div className="flex items-center gap-2">
            <button className={surfaceButtonClass}>Export</button>
            <button className={surfaceButtonClass}>Import</button>
            <button className={surfaceButtonClass}>Create</button>
          </div>
        </div>

        <div className="px-5 py-3 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-zinc-50/50 dark:bg-transparent">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-zinc-400" strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-9 pr-3 py-1.5 w-64 text-[13px] bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-shadow shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className={iconButtonClass}><Filter className="w-[15px] h-[15px]" strokeWidth={1.5} /></button>
            <button className={iconButtonClass}><ArrowDownUp className="w-[15px] h-[15px]" strokeWidth={1.5} /></button>
            <button className={iconButtonClass}><MoreHorizontal className="w-[15px] h-[15px]" strokeWidth={1.5} /></button>
          </div>
        </div>

        <div className="flex-1 p-5 flex flex-col items-center justify-center bg-white dark:bg-[#18181B]">
          <div className="flex flex-col items-center justify-center text-center max-w-sm mx-auto">
            <AlertCircle className="w-[18px] h-[18px] text-zinc-400 mb-3" strokeWidth={1.5} />
            <h3 className="text-[14px] font-medium text-zinc-900 dark:text-zinc-50">
              No records
            </h3>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">
              Your orders will show up here.
            </p>
          </div>
        </div>
      </div>
  )
}
