import { 
  ArrowUpRight, 
  MoreHorizontal, 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Package,
  ArrowRight,
  TrendingUp,
  CreditCard,
  Clock
} from "lucide-react"

// --- WIDGET COMPONENTS ---

function StatCard({ title, value, trend, trendLabel, icon: Icon }: { title: string, value: string, trend?: string, trendLabel?: string, icon?: any }) {
  return (
    <div className="bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          {Icon && <div className="p-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-md text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors"><Icon className="w-3.5 h-3.5" /></div>}
          <h3 className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5">{title}</h3>
        </div>
        <MoreHorizontal className="w-4 h-4 text-zinc-300 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400 cursor-pointer transition-colors" />
      </div>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-[24px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">{value}</span>
      </div>
      {trend && (
        <div className="flex items-center gap-1.5 text-[12px]">
          <span className={`font-medium flex items-center ${trend.startsWith('+') ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>
            {trend} <ArrowUpRight className={`w-3 h-3 ml-0.5 ${trend.startsWith('-') ? 'rotate-180' : ''}`} />
          </span>
          <span className="text-zinc-400 dark:text-zinc-500">{trendLabel}</span>
        </div>
      )}
    </div>
  )
}

function ActivityItem({ title, desc, time, amount, status }: { title: string, desc: string, time: string, amount?: string, status?: 'completed' | 'pending' | 'failed' }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-zinc-100 dark:border-zinc-800/50 last:border-0 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 px-2 -mx-2 rounded-md transition-colors cursor-pointer group">
      <div className="flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 group-hover:border-zinc-200 dark:group-hover:border-zinc-600 transition-all">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</p>
          <p className="text-[12px] text-zinc-500 dark:text-zinc-400">{desc}</p>
        </div>
      </div>
      <div className="text-right flex flex-col items-end gap-0.5">
        {amount && <p className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">{amount}</p>}
        <p className="text-[11px] text-zinc-400 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {time}
        </p>
      </div>
    </div>
  )
}

// --- OVERVIEW PAGE ---

export function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Section */}
      <div className="flex justify-between items-end border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Overview</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Welcome back, here's what's happening with your store today.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2">
            <CreditCard className="w-3.5 h-3.5 text-zinc-400" /> Manage Cards
          </button>
          <button className="px-3 py-1.5 bg-zinc-900 dark:bg-white border border-transparent rounded-md text-[13px] font-medium text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" /> View Analytics
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Revenue" value="€24,500.00" trend="+12.5%" trendLabel="vs last 7 days" icon={DollarSign} />
        <StatCard title="Orders" value="1,240" trend="+4.3%" trendLabel="vs last 7 days" icon={ShoppingBag} />
        <StatCard title="Customers" value="845" trend="+8.1%" trendLabel="vs last 7 days" icon={Users} />
        <StatCard title="Avg. Order Value" value="€84.20" trend="-2.4%" trendLabel="vs last 7 days" icon={Package} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm min-h-[420px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-[14px] font-semibold text-zinc-900 dark:text-white">Revenue Analytics</h3>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-0.5">Monthly revenue performance</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[12px] rounded-md px-2 py-1 text-zinc-600 dark:text-zinc-300 outline-none focus:ring-1 focus:ring-blue-500">
                <option>Last 12 months</option>
                <option>Last 30 days</option>
                <option>Last 7 days</option>
              </select>
              <MoreHorizontal className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-zinc-600" />
            </div>
          </div>
          
          {/* Placeholder Chart */}
          <div className="flex-1 w-full bg-zinc-50/50 dark:bg-zinc-900/30 rounded border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-zinc-400 gap-3 group cursor-crosshair hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
            <TrendingUp className="w-8 h-8 text-zinc-300 dark:text-zinc-700 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-[13px] font-medium">Chart Visualization Placeholder</span>
            <span className="text-[11px] text-zinc-400">Data will appear here once you start selling</span>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[14px] font-semibold text-zinc-900 dark:text-white">Recent Activity</h3>
            <button className="text-[12px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">View All</button>
          </div>
          
          <div className="flex-1 overflow-y-auto -mr-2 pr-2 custom-scrollbar space-y-1">
            <ActivityItem 
              title="Order #1024" 
              desc="Mario Rossi placed an order" 
              time="2 min ago" 
              amount="€120.00" 
            />
            <ActivityItem 
              title="New Customer" 
              desc="Giulia Bianchi joined" 
              time="15 min ago" 
            />
            <ActivityItem 
              title="Restock Alert" 
              desc="T-shirt Basic White low stock" 
              time="1 hour ago" 
              amount="5 left" 
            />
            <ActivityItem 
              title="Order #1023" 
              desc="Luca Verdi placed an order" 
              time="2 hours ago" 
              amount="€85.50" 
            />
            <ActivityItem 
              title="Refund #1019" 
              desc="Refund processed for Order #1019" 
              time="4 hours ago" 
              amount="-€45.00" 
            />
             <ActivityItem 
              title="Order #1022" 
              desc="Sofia Neri placed an order" 
              time="5 hours ago" 
              amount="€210.00" 
            />
          </div>
          
          <button className="w-full mt-6 py-2 text-[13px] font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
            See all orders <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  )
}
