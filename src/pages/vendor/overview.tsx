export function VendorOverview() {
  return (
    <div className="p-8 max-w-[1200px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Overview
        </h1>
      </div>

      {/* Grid delle Statistiche */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 shadow-sm">
          <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">Total Sales</h3>
          <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">€ 24,500.00</div>
        </div>

        <div className="bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 shadow-sm">
          <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">Total Orders</h3>
          <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">142</div>
        </div>

        <div className="bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 shadow-sm">
          <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">Customers</h3>
          <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">89</div>
        </div>

      </div>

      {/* Tabella Finta */}
      <div className="bg-white dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-[15px] font-medium text-zinc-900 dark:text-zinc-50">Recent Orders</h2>
        </div>
        <div className="p-5 flex items-center justify-center text-[13px] text-zinc-500 h-32">
          Nessun ordine recente.
        </div>
      </div>
    </div>
  )
}
