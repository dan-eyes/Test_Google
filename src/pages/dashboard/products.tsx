import { useState } from "react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"
import { Plus, Download, Filter, MoreHorizontal } from "lucide-react"

// --- MOCK DATA ---
const products = [
  { id: "prod_01", name: "T-Shirt Basic White", collection: "Essentials", status: "published", inventory: 124, price: "€24.00", variants: 4 },
  { id: "prod_02", name: "Hoodie Black", collection: "Winter 23", status: "published", inventory: 56, price: "€65.00", variants: 3 },
  { id: "prod_03", name: "Denim Jeans", collection: "Denim", status: "draft", inventory: 0, price: "€89.00", variants: 5 },
  { id: "prod_04", name: "Sneakers Low", collection: "Footwear", status: "published", inventory: 12, price: "€120.00", variants: 8 },
  { id: "prod_05", name: "Cap Logo", collection: "Accessories", status: "published", inventory: 200, price: "€15.00", variants: 2 },
  { id: "prod_06", name: "Socks Pack", collection: "Accessories", status: "published", inventory: 50, price: "€12.00", variants: 1 },
]

export function DashboardProducts() {
  const [activeTab, setActiveTab] = useState("all")

  const columns = [
    { 
      header: "Name", 
      accessorKey: "name",
      cell: (item: any) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-bold uppercase border border-zinc-200 dark:border-zinc-700">
            {item.name.substring(0, 2)}
          </div>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.name}</span>
        </div>
      )
    },
    { header: "Collection", accessorKey: "collection", className: "text-zinc-500" },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: (item: any) => (
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${item.status === "published" ? "bg-emerald-500" : "bg-zinc-400"}`} />
          <span className="capitalize text-zinc-600 dark:text-zinc-400">{item.status}</span>
        </div>
      )
    },
    { header: "Inventory", accessorKey: "inventory", className: "text-zinc-500" },
    { header: "Variants", accessorKey: "variants", className: "text-zinc-500" },
    { header: "Price", accessorKey: "price", className: "text-right font-medium" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Products</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage your product catalog.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="px-3 py-1.5 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
            Import
          </button>
          <button className="px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-medium rounded-md shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Add Product
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable 
        data={products} 
        columns={columns}
        tabs={[
          { label: "All", value: "all", count: 45 },
          { label: "Published", value: "published", count: 38 },
          { label: "Drafts", value: "drafts", count: 7 },
          { label: "Collections", value: "collections", count: 12 },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search by title, SKU, handle..."
      />
    </div>
  )
}
