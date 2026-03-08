import { useState } from "react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"
import { Plus, Download, Filter } from "lucide-react"

// --- MOCK DATA ---
const inventory = [
  { id: "inv_01", item: "T-Shirt Basic White - S", sku: "TSH-WHT-S", stock: 45, reserved: 2, incoming: 0 },
  { id: "inv_02", item: "T-Shirt Basic White - M", sku: "TSH-WHT-M", stock: 32, reserved: 5, incoming: 50 },
  { id: "inv_03", item: "T-Shirt Basic White - L", sku: "TSH-WHT-L", stock: 12, reserved: 0, incoming: 0 },
  { id: "inv_04", item: "Hoodie Black - M", sku: "HOD-BLK-M", stock: 8, reserved: 1, incoming: 20 },
  { id: "inv_05", item: "Denim Jeans - 32", sku: "DNM-32", stock: 0, reserved: 0, incoming: 100 },
]

export function DashboardInventory() {
  const [activeTab, setActiveTab] = useState("all")

  const columns = [
    { 
      header: "Item", 
      accessorKey: "item",
      cell: (item: any) => (
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.item}</p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{item.sku}</p>
        </div>
      )
    },
    { header: "In Stock", accessorKey: "stock", className: "text-zinc-500" },
    { header: "Reserved", accessorKey: "reserved", className: "text-zinc-500" },
    { header: "Incoming", accessorKey: "incoming", className: "text-zinc-500" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Inventory</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage stock levels and locations.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="px-3 py-1.5 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
            Import
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable 
        data={inventory} 
        columns={columns}
        tabs={[
          { label: "All", value: "all", count: 156 },
          { label: "Low Stock", value: "low_stock", count: 12 },
          { label: "Out of Stock", value: "out_of_stock", count: 4 },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search by SKU, variant, product..."
      />
    </div>
  )
}
