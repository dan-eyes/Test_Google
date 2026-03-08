import { useState } from "react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"
import { Plus, Download, Filter } from "lucide-react"

// --- MOCK DATA ---
const pricing = [
  { id: "pl_01", name: "Default EUR", currency: "EUR", type: "Sale", status: "active", products: 45 },
  { id: "pl_02", name: "USD Market", currency: "USD", type: "Override", status: "active", products: 12 },
  { id: "pl_03", name: "Black Friday", currency: "EUR", type: "Sale", status: "scheduled", products: 45 },
]

export function DashboardPricing() {
  const [activeTab, setActiveTab] = useState("all")

  const columns = [
    { 
      header: "Name", 
      accessorKey: "name",
      cell: (item: any) => (
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.name}</span>
      )
    },
    { header: "Currency", accessorKey: "currency", className: "text-zinc-500" },
    { header: "Type", accessorKey: "type", className: "text-zinc-500" },
    { header: "Products", accessorKey: "products", className: "text-zinc-500" },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: (item: any) => (
        <StatusBadge 
          status={item.status} 
          color={item.status === "active" ? "green" : "orange"} 
        />
      )
    },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Pricing</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage price lists and overrides.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-medium rounded-md shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Create Price List
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable 
        data={pricing} 
        columns={columns}
        tabs={[
          { label: "All", value: "all", count: 3 },
          { label: "Active", value: "active", count: 2 },
          { label: "Drafts", value: "drafts", count: 0 },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search by name or description..."
      />
    </div>
  )
}
