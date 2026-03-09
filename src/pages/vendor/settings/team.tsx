import { Search, Filter, ListFilter, MoreHorizontal } from "lucide-react";

export function VendorSettingsTeam() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#27272A] overflow-hidden shadow-sm">
        {/* Header & Actions */}
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Utenti</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Cerca" 
                className="h-8 w-48 bg-zinc-100 dark:bg-[#27272A] border border-transparent dark:border-white/5 rounded-md pl-9 pr-3 text-[13px] text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-[#323236] text-[13px] font-medium px-2 py-1.5 rounded-md transition-colors shadow-sm flex items-center justify-center">
              <Filter className="size-4" strokeWidth={1.5} />
            </button>
            <button className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-[#323236] text-[13px] font-medium px-2 py-1.5 rounded-md transition-colors shadow-sm flex items-center justify-center">
              <ListFilter className="size-4" strokeWidth={1.5} />
            </button>
            <button className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 text-[13px] font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors ml-1">
              Invita
            </button>
          </div>
        </div>
        
        {/* Table */}
        <div className="w-full overflow-x-auto border-t border-zinc-200 dark:border-zinc-700">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700 text-[13px] text-zinc-500 dark:text-zinc-400">
                <th className="font-medium p-4 py-3">Email</th>
                <th className="font-medium p-4 py-3">Nome</th>
                <th className="font-medium p-4 py-3 w-16"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-200 dark:border-zinc-700 text-[13px] text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                <td className="p-4 py-3">seller@mercurjs.com</td>
                <td className="p-4 py-3 font-medium text-zinc-900 dark:text-zinc-50">Lucrezia Ferrari</td>
                <td className="p-4 py-3 text-right">
                  <button className="p-1.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-[#323236] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md transition-colors">
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
              {/* Altri eventuali record andrebbero qui */}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="flex items-center justify-between p-4 text-[12px] text-zinc-500 dark:text-zinc-400">
          <span>1 — 1 di 1 risultati</span>
          <div className="flex items-center gap-4">
            <span>1 di 1 pagine</span>
            <div className="flex items-center gap-2">
              <button className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors disabled:opacity-50" disabled>Prec</button>
              <button className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors disabled:opacity-50" disabled>Succ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
