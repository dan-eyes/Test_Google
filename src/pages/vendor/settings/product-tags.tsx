import { AlertCircle } from "lucide-react";

export function VendorSettingsProductTags() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#27272A] overflow-hidden shadow-sm p-12 flex flex-col items-center justify-center text-center">
        <div className="size-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-200 dark:border-zinc-700">
          <AlertCircle className="size-6 text-zinc-400" />
        </div>
        <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Nessun Tag Prodotto</h2>
        <p className="text-[13px] text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
          I tag prodotto ti aiutano a organizzare i prodotti. Non hai ancora creato alcun tag prodotto.
        </p>
        <button className="bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors text-[13px] font-medium px-4 py-2 rounded-md">
          Crea tag prodotto
        </button>
      </div>
    </div>
  );
}
