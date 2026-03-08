import { useState } from "react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"
import { Plus, Download, Filter } from "lucide-react"

// --- MOCK DATA ---
const giftCards = [
  { id: "gc_01", code: "****-****-****-A1B2", value: "€50.00", balance: "€50.00", created: "Oct 24, 2023", status: "active" },
  { id: "gc_02", code: "****-****-****-C3D4", value: "€100.00", balance: "€25.00", created: "Sep 12, 2023", status: "active" },
  { id: "gc_03", code: "****-****-****-E5F6", value: "€25.00", balance: "€0.00", created: "Aug 05, 2023", status: "redeemed" },
]

export function DashboardGiftCards() {
  const [activeTab, setActiveTab] = useState("all")

  const columns = [
    { 
      header: "Code", 
      accessorKey: "code",
      cell: (item: any) => (
        <div className="font-mono text-[12px] text-zinc-500">
          {item.code}
        </div>
      )
    },
    { header: "Original Value", accessorKey: "value", className: "text-zinc-500" },
    { header: "Balance", accessorKey: "balance", className: "font-medium text-zinc-900 dark:text-zinc-100" },
    { header: "Created", accessorKey: "created", className: "text-zinc-500" },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: (item: any) => (
        <StatusBadge 
          status={item.status} 
          color={item.status === "active" ? "green" : "zinc"} 
        />
      )
    },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Gift Cards</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage gift cards and balances.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-medium rounded-md shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Issue Gift Card
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable 
        data={giftCards} 
        columns={columns}
        tabs={[
          { label: "All", value: "all", count: 3 },
          { label: "Active", value: "active", count: 2 },
          { label: "Redeemed", value: "redeemed", count: 1 },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search by code or recipient..."
      />
    </div>
  )
}
