import { Building2, MoreHorizontal, ChevronRight, ShoppingBag } from "lucide-react";

export function VendorSettingsLocations() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#27272A] overflow-hidden shadow-sm">
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Sedi</h2>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">Gestisci le tue sedi di evasione</p>
          </div>
          <button className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-[13px] font-medium px-4 py-2 rounded-md">
            Aggiungi sede
          </button>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-6 border-t border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                <Building2 className="size-5" />
              </div>
              <div>
                <div className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50">Magazzino Principale</div>
                <div className="text-[13px] text-zinc-500 dark:text-zinc-400">Via Stezzano, 87, 24126 Bergamo, Italia</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[12px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-[#323236] border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md">
                <ShoppingBag className="size-3.5" />
                <span>Predefinito</span>
              </div>
              <button className="p-1.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-[#323236] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                <MoreHorizontal className="size-4" />
              </button>
              <ChevronRight className="size-4 text-zinc-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
