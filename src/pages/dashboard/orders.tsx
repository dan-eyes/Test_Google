import { useState } from "react"
import { DataTable, StatusBadge } from "@/components/dashboard/data-table"
import { Plus, Download, Filter } from "lucide-react"

// --- MOCK DATA ---
const orders = [
  { id: "ord_01", display_id: "#1024", date: "Oct 24, 2023", customer: "Mario Rossi", status: "pending", payment: "captured", total: "€120.00", items: 3 },
  { id: "ord_02", display_id: "#1023", date: "Oct 24, 2023", customer: "Luca Verdi", status: "completed", payment: "captured", total: "€85.50", items: 1 },
  { id: "ord_03", display_id: "#1022", date: "Oct 23, 2023", customer: "Sofia Neri", status: "completed", payment: "captured", total: "€210.00", items: 5 },
  { id: "ord_04", display_id: "#1021", date: "Oct 23, 2023", customer: "Giulia Bianchi", status: "canceled", payment: "refunded", total: "€45.00", items: 2 },
  { id: "ord_05", display_id: "#1020", date: "Oct 22, 2023", customer: "Marco Gialli", status: "processing", payment: "awaiting", total: "€320.00", items: 4 },
  { id: "ord_06", display_id: "#1019", date: "Oct 22, 2023", customer: "Anna Blu", status: "completed", payment: "captured", total: "€65.00", items: 1 },
  { id: "ord_07", display_id: "#1018", date: "Oct 21, 2023", customer: "Paolo Viola", status: "requires_action", payment: "failed", total: "€150.00", items: 2 },
  { id: "ord_08", display_id: "#1017", date: "Oct 21, 2023", customer: "Elena Rosa", status: "completed", payment: "captured", total: "€90.00", items: 3 },
]

export function DashboardOrders() {
  const [activeTab, setActiveTab] = useState("all")

  const columns = [
    { header: "Order", accessorKey: "display_id", className: "font-medium text-zinc-900 dark:text-zinc-100" },
    { header: "Date Added", accessorKey: "date", className: "text-zinc-500" },
    { header: "Customer", accessorKey: "customer" },
    { 
      header: "Fulfillment", 
      accessorKey: "status",
      cell: (item: any) => (
        <StatusBadge 
          status={item.status.replace("_", " ")} 
          color={
            item.status === "completed" ? "green" : 
            item.status === "pending" ? "orange" : 
            item.status === "canceled" ? "rose" : "zinc"
          } 
        />
      )
    },
    { 
      header: "Payment", 
      accessorKey: "payment",
      cell: (item: any) => (
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${item.payment === "captured" ? "bg-emerald-500" : item.payment === "failed" ? "bg-rose-500" : "bg-amber-500"}`} />
          <span className="capitalize text-zinc-600 dark:text-zinc-400">{item.payment}</span>
        </div>
      )
    },
    { header: "Total", accessorKey: "total", className: "text-right font-medium" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 pb-6">
        <div>
          <h1 className="text-[24px] font-semibold text-zinc-900 dark:text-white tracking-tight">Orders</h1>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-1">Manage your orders and shipments.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md text-[13px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button className="px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-medium rounded-md shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" /> Create Order
          </button>
        </div>
      </div>

      {/* Table */}
      <DataTable 
        data={orders} 
        columns={columns}
        tabs={[
          { label: "All", value: "all", count: 1240 },
          { label: "Unfulfilled", value: "unfulfilled", count: 24 },
          { label: "Unpaid", value: "unpaid", count: 5 },
          { label: "Open", value: "open", count: 12 },
          { label: "Archived", value: "archived", count: 0 },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search by order ID, customer, email..."
      />
    </div>
  )
}
