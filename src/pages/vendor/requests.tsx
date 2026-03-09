export function VendorRequests() {
  const primaryButtonClass = "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 text-[13px] font-medium px-4 py-2 rounded-md shadow-sm transition-colors"

  return (
    <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm w-full h-[calc(100vh-32px)] flex flex-col overflow-hidden animate-in fade-in duration-300">
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-white dark:bg-[#27272A]">
          <h1 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Requests</h1>
          <button className={primaryButtonClass}>
            New Request
          </button>
        </div>
        <div className="flex-1 p-6 bg-white dark:bg-[#27272A]">
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400">Contenuto della pagina in costruzione...</p>
        </div>
      </div>
  )
}
