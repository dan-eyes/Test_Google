export function VendorSettings() {
  const surfaceButtonClass = "flex items-center justify-center px-3 py-1.5 text-[13px] font-medium bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-[#27272A] transition-colors shadow-sm"

  return (
    <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm w-full h-[calc(100vh-56px-32px)] flex flex-col overflow-hidden animate-in fade-in duration-300">
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-white dark:bg-[#27272A]">
          <h1 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Settings</h1>
          <button className={surfaceButtonClass}>
            Save Changes
          </button>
        </div>
        <div className="flex-1 p-6 bg-zinc-50/50 dark:bg-transparent">
          <p className="text-[13px] text-zinc-500">Contenuto della pagina in costruzione...</p>
        </div>
      </div>
  )
}
