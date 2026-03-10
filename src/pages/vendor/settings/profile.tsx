import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";

export function VendorSettingsProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#27272A] overflow-hidden shadow-sm">
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Profilo</h2>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">Gestisci i dettagli del tuo profilo personale</p>
          </div>
          <button onClick={() => setIsOpen(true)} className="p-1.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-[#323236] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md transition-colors">
            <MoreHorizontal className="size-5" />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Foto</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">
              <img src="https://i.pravatar.cc/150?u=kai" alt="Profile" className="size-10 rounded-md object-cover border border-zinc-200 dark:border-zinc-700" />
            </div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Nome</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">Lucrezia Ferrari</div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Email</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">seller@mercurjs.com</div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Telefono</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">+39</div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Bio</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">Export Manager</div>
          </div>
        </div>
      </div>

      {/* DRAWER: EDIT PROFILE */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-md bg-white dark:bg-[#27272A] border-l border-zinc-200 dark:border-zinc-700 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
              <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Modifica Profilo</h2>
              <div className="flex items-center gap-3">
                <kbd className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">esc</kbd>
                <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"><X className="size-5" /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-2 block">Immagine del profilo</label>
                <div className="border border-dashed border-zinc-300 dark:border-zinc-700 rounded-md p-6 flex flex-col items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer bg-zinc-50/50 dark:bg-zinc-800/20">
                  <img src="https://i.pravatar.cc/150?u=kai" alt="Profile" className="size-16 rounded-md object-cover border border-zinc-200 dark:border-zinc-700 shadow-sm mb-2" />
                </div>
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Nome</label>
                <input type="text" defaultValue="Lucrezia Ferrari" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Telefono</label>
                <input type="text" defaultValue="+39" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Bio</label>
                <input type="text" defaultValue="Export Manager" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-700 flex justify-end gap-3 bg-zinc-50 dark:bg-[#323236]">
              <button onClick={() => setIsOpen(false)} className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-sm dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-white/5 transition-colors text-[13px] font-medium px-3 py-1.5 rounded-md">Annulla</button>
              <button className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-[13px] font-medium px-4 py-2 rounded-md">Salva</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
