import { useState } from "react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"
import { Plus, Download, Filter } from "lucide-react"

// --- MOCK DATA ---
const discounts = [
  { id: "disc_01", code: "SUMMER23", type: "Percentage", value: "20%", usage: 124, status: "active" },
  { id: "disc_02", code: "WELCOME10", type: "Percentage", value: "10%", usage: 450, status: "active" },
  { id: "disc_03", code: "FREESHIP", type: "Free Shipping", value: "-", usage: 89, status: "expired" },
  { id: "disc_04", code: "VIP25", type: "Percentage", value: "25%", usage: 12, status: "disabled" },
]

export function DashboardDiscounts() {
  const [activeTab, setActiveTab] = useState("all")

  const columns = [
    { 
      header: "Code", 
      accessorKey: "code",
      cell: (item: any) => (
        <div className="font-mono text-[12px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded w-fit text-zinc-700 dark:text-zinc-300">
          {item.code}
        </div>
      )
    },
    { header: "Type", accessorKey: "type", className: "text-zinc-500" },
    { header: "Value", accessorKey: "value", className: "text-zinc-500" },
    { header: "Redemptions", accessorKey: "usage", className: "text-zinc-500" },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: (item: any) => (
        <StatusBadge 
          status={item.status} 
          color={item.status === "active" ? "green" : item.status === "expired" ? "orange" : "zinc"} 
        />
      )
    },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Discounts</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage promotions and discount codes.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-medium rounded-md shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Create Discount
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable 
        data={discounts} 
        columns={columns}
        tabs={[
          { label: "All", value: "all", count: 12 },
          { label: "Active", value: "active", count: 2 },
          { label: "Scheduled", value: "scheduled", count: 1 },
          { label: "Expired", value: "expired", count: 9 },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search by code..."
      />
    </div>
  )
}
