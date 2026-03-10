import { MoreHorizontal, X, UploadCloud } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function VendorSettingsStore() {
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* SEZIONE STORE PROFILE */}
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#27272A] overflow-hidden shadow-sm">
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Profilo Negozio</h2>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">Gestisci il profilo pubblico del tuo negozio</p>
          </div>
          <button onClick={() => setIsStoreOpen(true)} className="p-1.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-[#323236] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md transition-colors">
            <MoreHorizontal className="size-5" />
          </button>
        </div>
        
        <div className="flex flex-col">
          {/* Row: Image */}
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Immagine</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">
              <div className="size-8 rounded-md bg-red-600 flex items-center justify-center text-white shadow-inner">
                {/* Placeholder Logo Brembo */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
            </div>
          </div>
          {/* Row: Name */}
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Nome</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">Brembo S.p.A.</div>
          </div>
          {/* Row: Email */}
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Email</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">brembo@export.com</div>
          </div>
          {/* Row: Phone */}
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Telefono</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">+39</div>
          </div>
          {/* Row: Description */}
          <div className="flex items-start p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Descrizione</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50 leading-relaxed">
              Brembo è un'azienda italiana leader mondiale nella progettazione, produzione e commercializzazione di sistemi frenanti a disco per veicoli, sia per auto che per moto e veicoli commerciali. È anche un fornitore di sistemi frenanti ad alte prestazioni e altri componenti per il settore racing. Brembo opera in 15 paesi su 3 continenti, con 23 stabilimenti e siti commerciali.
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE COMPANY */}
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#27272A] overflow-hidden shadow-sm">
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Azienda</h2>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">Gestisci i dettagli della tua azienda</p>
          </div>
          <button onClick={() => setIsCompanyOpen(true)} className="p-1.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-[#323236] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md transition-colors">
            <MoreHorizontal className="size-5" />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Indirizzo</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">Via Stezzano, 87</div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Codice Postale</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">24126</div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Città</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">Bergamo</div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Nazione</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">Italia</div>
          </div>
          <div className="flex items-center p-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="w-[250px] shrink-0 text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Partita IVA</div>
            <div className="flex-1 text-[13px] text-zinc-900 dark:text-zinc-50">IT00222620163</div>
          </div>
        </div>
      </div>

      {/* DRAWER: EDIT STORE */}
      {isStoreOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsStoreOpen(false)} />
          <div className="relative w-full max-w-md bg-white dark:bg-[#27272A] border-l border-zinc-200 dark:border-zinc-700 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
              <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Modifica Negozio</h2>
              <div className="flex items-center gap-3">
                <kbd className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">esc</kbd>
                <button onClick={() => setIsStoreOpen(false)} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"><X className="size-5" /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-2 block">Logo <span className="text-zinc-400 font-normal">(Opzionale)</span></label>
                <div className="border border-dashed border-zinc-300 dark:border-zinc-700 rounded-md p-8 flex flex-col items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-zinc-900 dark:text-zinc-50"><UploadCloud className="size-4"/> Carica immagini</div>
                  <p className="text-xs text-zinc-500">Trascina qui le immagini o clicca per caricarle.</p>
                </div>
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Nome</label>
                <input type="text" defaultValue="Brembo S.p.A." className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Email</label>
                <input type="email" defaultValue="brembo@export.com" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Numero di Telefono</label>
                <input type="text" defaultValue="+39" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Descrizione</label>
                <textarea rows={4} className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed" defaultValue="Brembo è un'azienda italiana leader mondiale nella progettazione, produzione e commercializzazione di sistemi frenanti a disco per veicoli, sia per auto che per moto e veicoli commerciali. È anche un fornitore di sistemi frenanti ad alte prestazioni e altri componenti per il settore racing. Brembo opera in 15 paesi su 3 continenti, con 23 stabilimenti e siti commerciali." />
              </div>
            </div>
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-700 flex justify-end gap-3 bg-zinc-50 dark:bg-[#323236]">
              <button onClick={() => setIsStoreOpen(false)} className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-sm dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-white/5 transition-colors text-[13px] font-medium px-3 py-1.5 rounded-md">Annulla</button>
              <button className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-[13px] font-medium px-4 py-2 rounded-md">Salva</button>
            </div>
          </div>
        </div>
      )}

      {/* DRAWER: EDIT COMPANY */}
      {isCompanyOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCompanyOpen(false)} />
          <div className="relative w-full max-w-md bg-white dark:bg-[#27272A] border-l border-zinc-200 dark:border-zinc-700 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
              <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50">Modifica Azienda</h2>
              <div className="flex items-center gap-3">
                <kbd className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">esc</kbd>
                <button onClick={() => setIsCompanyOpen(false)} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"><X className="size-5" /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Indirizzo</label>
                <input type="text" defaultValue="Via Stezzano, 87" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Codice Postale</label>
                <input type="text" defaultValue="24126" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Città</label>
                <input type="text" defaultValue="Bergamo" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Nazione</label>
                <input type="text" defaultValue="Italia" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1.5 block">Partita IVA</label>
                <input type="text" defaultValue="IT00222620163" className="w-full bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-700 flex justify-end gap-3 bg-zinc-50 dark:bg-[#323236]">
              <button onClick={() => setIsCompanyOpen(false)} className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-sm dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-white/5 transition-colors text-[13px] font-medium px-3 py-1.5 rounded-md">Annulla</button>
              <button className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-[13px] font-medium px-4 py-2 rounded-md">Salva</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
