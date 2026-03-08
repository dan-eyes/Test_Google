import { ArrowUpRight, ArrowDownRight, MoreHorizontal, Calendar } from "lucide-react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"

function StatWidget({ title, value, trend, isPositive }: { title: string, value: string, trend: string, isPositive: boolean }) {
  return (
    <div className="bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">{title}</h3>
        <MoreHorizontal strokeWidth={1.5} className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-zinc-600" />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-[24px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">{value}</span>
        <span className={`flex items-center text-[12px] font-medium ${isPositive ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>
          {isPositive ? <ArrowUpRight strokeWidth={1.5} className="w-3 h-3 mr-0.5" /> : <ArrowDownRight strokeWidth={1.5} className="w-3 h-3 mr-0.5" />}
          {trend}
        </span>
      </div>
    </div>
  )
}

const recentOrders = [
  { id: "1", order: "#10054", date: "Today at 14:32", customer: "Alice Smith", status: "pending", total: "€124.50" },
  { id: "2", order: "#10053", date: "Today at 11:15", customer: "Bob Jones", status: "completed", total: "€89.00" },
  { id: "3", order: "#10052", date: "Yesterday", customer: "Charlie Brown", status: "completed", total: "€210.00" },
  { id: "4", order: "#10051", date: "Yesterday", customer: "Diana Prince", status: "canceled", total: "€45.00" },
  { id: "5", order: "#10050", date: "Oct 24, 2023", customer: "Evan Wright", status: "completed", total: "€350.00" },
]

export function VendorOverview() {
  const columns = [
    { header: "Order", accessorKey: "order", className: "font-medium text-zinc-900 dark:text-zinc-100" },
    { header: "Date", accessorKey: "date", className: "text-zinc-500" },
    { header: "Customer", accessorKey: "customer" },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: (item: any) => (
        <StatusBadge 
          status={item.status} 
          color={
            item.status === "completed" ? "green" : 
            item.status === "pending" ? "orange" : 
            item.status === "canceled" ? "rose" : "zinc"
          } 
        />
      )
    },
    { header: "Total", accessorKey: "total", className: "text-right font-medium" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Overview</h1>
        <button className="px-3 py-1.5 bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2">
          <Calendar strokeWidth={1.5} className="w-[18px] h-[18px] text-zinc-400" />
          Last 30 days
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatWidget title="Total Sales" value="€24,500.00" trend="12.5%" isPositive={true} />
        <StatWidget title="Total Orders" value="1,240" trend="4.3%" isPositive={true} />
        <StatWidget title="Average Order Value" value="€84.20" trend="2.1%" isPositive={false} />
        <StatWidget title="Returns" value="12" trend="1.5%" isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[14px] font-semibold text-zinc-900 dark:text-white">Sales</h3>
            <MoreHorizontal strokeWidth={1.5} className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-zinc-600" />
          </div>
          <div className="flex-1 w-full bg-zinc-50/50 dark:bg-zinc-900/30 rounded border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-zinc-400">
            <span className="text-[13px] font-medium">Sales Chart</span>
            <span className="text-[11px] text-zinc-500 mt-1">No data available for the selected period</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-[14px] font-semibold text-zinc-900 dark:text-white mb-4">Top Items</h3>
          <div className="space-y-4">
            {[
              { name: "T-Shirt Basic White", sales: 124, revenue: "€2,976.00" },
              { name: "Hoodie Black", sales: 86, revenue: "€5,590.00" },
              { name: "Denim Jeans", sales: 45, revenue: "€4,005.00" },
              { name: "Sneakers Low", sales: 32, revenue: "€3,840.00" },
              { name: "Cap Logo", sales: 28, revenue: "€420.00" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100">{item.name}</p>
                    <p className="text-[12px] text-zinc-500 dark:text-zinc-400">{item.sales} sales</p>
                  </div>
                </div>
                <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-100">{item.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm overflow-hidden">
        <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
          <h3 className="text-[14px] font-semibold text-zinc-900 dark:text-white">Recent Orders</h3>
          <button className="text-[13px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">View All</button>
        </div>
        <DataTable data={recentOrders} columns={columns} />
      </div>

    </div>
  )
}
