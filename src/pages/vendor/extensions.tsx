export function VendorExtensions() {
  const secondaryButtonClass = "bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:bg-transparent dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-[#323236] text-[13px] font-medium px-3 py-1.5 rounded-md transition-colors shadow-sm"

  return (
    <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm w-full h-[calc(100vh-32px)] flex flex-col overflow-hidden animate-in fade-in duration-300">
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-white dark:bg-[#27272A]">
          <h1 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Extensions</h1>
          <button className={secondaryButtonClass}>
            Manage Extensions
          </button>
        </div>
        <div className="flex-1 p-6 bg-white dark:bg-[#27272A]">
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400">Contenuto della pagina in costruzione...</p>
        </div>
      </div>
  )
}
