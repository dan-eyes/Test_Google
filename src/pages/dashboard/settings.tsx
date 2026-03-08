export function DashboardSettings() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Settings</h1>
        <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage your store settings.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['General', 'Regions', 'Currencies', 'Taxes', 'Shipping', 'Team', 'API Keys', 'Sales Channels'].map((setting) => (
          <div key={setting} className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer group">
            <h3 className="text-[14px] font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{setting}</h3>
            <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1">Manage {setting.toLowerCase()} for your store.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
