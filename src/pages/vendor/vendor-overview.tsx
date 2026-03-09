export function VendorOverview() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[14px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Overview</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-sm">
          <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">Total Sales</h3>
          <div className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-50">€ 24,500.00</div>
        </div>
      </div>
    </div>
  )
}
