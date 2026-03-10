import React from "react"
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  Search, 
  Filter,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- TYPES ---
export interface Column<T> {
  header: string
  accessorKey?: keyof T
  cell?: (item: T) => React.ReactNode
  className?: string
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  tabs?: { label: string, value: string, count?: number }[]
  activeTab?: string
  onTabChange?: (value: string) => void
  onSearch?: (term: string) => void
  onFilter?: () => void
  actions?: React.ReactNode
  searchPlaceholder?: string
}

// --- COMPONENTS ---

export function StatusBadge({ status, color = "zinc" }: { status: string, color?: "zinc" | "green" | "blue" | "orange" | "rose" }) {
  const colors = {
    zinc: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
    green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    orange: "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
    rose: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
  }

  return (
    <span className={cn("px-2 py-1 rounded-md text-[11px] font-medium uppercase tracking-wide", colors[color])}>
      {status}
    </span>
  )
}

export function DataTable<T extends { id: string | number }>({ 
  data, 
  columns, 
  tabs, 
  activeTab, 
  onTabChange, 
  onSearch, 
  onFilter,
  actions,
  searchPlaceholder = "Search..."
}: DataTableProps<T>) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm overflow-hidden">
      
      {/* --- HEADER & TABS --- */}
      <div className="border-b border-zinc-200 dark:border-zinc-700">
        {/* Tabs Row */}
        {tabs && (
          <div className="flex items-center px-4 gap-6 overflow-x-auto custom-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => onTabChange?.(tab.value)}
                className={cn(
                  "py-3 text-[13px] font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-2",
                  activeTab === tab.value
                    ? "border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100"
                    : "border-transparent text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                )}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className={cn(
                    "px-1.5 py-0.5 rounded-md text-[10px]",
                    activeTab === tab.value 
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" 
                      : "bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400"
                  )}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Filters & Actions Row */}
        <div className="p-3 flex items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="flex items-center gap-2 flex-1">
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
              <input 
                type="text" 
                placeholder={searchPlaceholder}
                className="w-full h-8 pl-8 pr-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md text-[13px] placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
            <button 
              onClick={onFilter}
              className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-sm dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-white/5 transition-colors text-[13px] font-medium h-8 px-3 rounded-md flex items-center gap-2"
            >
              <Filter className="w-3.5 h-3.5" />
              Filter
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            {actions}
          </div>
        </div>
      </div>

      {/* --- TABLE CONTENT --- */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-zinc-50 dark:bg-zinc-900/50 sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-700">
            <tr>
              <th className="w-10 px-4 py-3">
                <input type="checkbox" className="rounded border-zinc-300 dark:border-zinc-700 text-blue-600 focus:ring-blue-500 bg-white dark:bg-zinc-900" />
              </th>
              {columns.map((col, i) => (
                <th key={i} className={cn("px-4 py-3 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider", col.className)}>
                  {col.header}
                </th>
              ))}
              <th className="w-10 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
            {data.length > 0 ? (
              data.map((item, i) => (
                <tr key={item.id} className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-zinc-300 dark:border-zinc-700 text-blue-600 focus:ring-blue-500 bg-white dark:bg-zinc-900" />
                  </td>
                  {columns.map((col, j) => (
                    <td key={j} className={cn("px-4 py-3 text-[13px] text-zinc-700 dark:text-zinc-300", col.className)}>
                      {col.cell ? col.cell(item) : (item[col.accessorKey as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 2} className="px-4 py-12 text-center text-[13px] text-zinc-500 dark:text-zinc-400">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --- PAGINATION --- */}
      <div className="border-t border-zinc-200 dark:border-zinc-700 p-3 flex items-center justify-between bg-zinc-50/30 dark:bg-zinc-900/20">
        <span className="text-[12px] text-zinc-500 dark:text-zinc-400">
          Viewing {data.length} results
        </span>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-400 disabled:opacity-50 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors" disabled>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
