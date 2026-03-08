import { useState } from "react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"
import { Plus, Download, Filter } from "lucide-react"

// --- MOCK DATA ---
const customers = [
  { id: "cust_01", name: "Mario Rossi", email: "mario.rossi@example.com", orders: 12, spent: "€1,240.00", date: "Oct 24, 2023" },
  { id: "cust_02", name: "Luca Verdi", email: "luca.verdi@example.com", orders: 3, spent: "€250.00", date: "Oct 20, 2023" },
  { id: "cust_03", name: "Sofia Neri", email: "sofia.neri@example.com", orders: 8, spent: "€890.00", date: "Sep 15, 2023" },
  { id: "cust_04", name: "Giulia Bianchi", email: "giulia.bianchi@example.com", orders: 1, spent: "€45.00", date: "Aug 12, 2023" },
  { id: "cust_05", name: "Marco Gialli", email: "marco.gialli@example.com", orders: 5, spent: "€520.00", date: "Jul 30, 2023" },
]

export function DashboardCustomers() {
  const [activeTab, setActiveTab] = useState("all")

  const columns = [
    { 
      header: "Name", 
      accessorKey: "name",
      cell: (item: any) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-500 font-bold uppercase border border-zinc-200 dark:border-zinc-700">
            {item.name.split(" ").map((n: string) => n[0]).join("")}
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.name}</p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.email}</p>
          </div>
        </div>
      )
    },
    { header: "First seen", accessorKey: "date", className: "text-zinc-500" },
    { header: "Orders", accessorKey: "orders", className: "text-zinc-500" },
    { header: "Total Spent", accessorKey: "spent", className: "text-right font-medium" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Customers</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage your customer base.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-medium rounded-md shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Add Customer
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable 
        data={customers} 
        columns={columns}
        tabs={[
          { label: "All", value: "all", count: 845 },
          { label: "Returning", value: "returning", count: 120 },
          { label: "New", value: "new", count: 45 },
          { label: "Groups", value: "groups", count: 3 },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search by name, email, phone..."
      />
    </div>
  )
}
