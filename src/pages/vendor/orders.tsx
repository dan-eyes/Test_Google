import { AlertCircle, Search, Filter, ArrowDownUp, MoreHorizontal } from "lucide-react"

export function VendorOrders() {
  const secondaryButtonClass = "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-[#323236] text-[13px] font-medium px-3 py-1.5 rounded-md transition-colors shadow-sm"
  const ghostButtonClass = "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-[#323236] text-[13px] font-medium px-2 py-1.5 rounded-md transition-colors shadow-sm flex items-center justify-center"
  const primaryButtonClass = "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 text-[13px] font-medium px-4 py-2 rounded-md shadow-sm transition-colors"

  return (
    <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm w-full h-[calc(100vh-32px)] flex flex-col overflow-hidden animate-in fade-in duration-300">
        
        <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-white dark:bg-[#27272A]">
          <h1 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Orders
          </h1>
          <div className="flex items-center gap-2">
            <button className={secondaryButtonClass}>Export</button>
            <button className={secondaryButtonClass}>Import</button>
            <button className={primaryButtonClass}>Create</button>
          </div>
        </div>

        <div className="px-5 py-3 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-zinc-50/50 dark:bg-transparent">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-zinc-400" strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-9 pr-3 py-1.5 w-64 text-[13px] bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-shadow shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className={ghostButtonClass}><Filter className="w-[15px] h-[15px]" strokeWidth={1.5} /></button>
            <button className={ghostButtonClass}><ArrowDownUp className="w-[15px] h-[15px]" strokeWidth={1.5} /></button>
            <button className={ghostButtonClass}><MoreHorizontal className="w-[15px] h-[15px]" strokeWidth={1.5} /></button>
          </div>
        </div>

        <div className="flex-1 p-5 flex flex-col items-center justify-center bg-white dark:bg-[#27272A]">
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
