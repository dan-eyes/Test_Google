import { ArrowUpRight, ArrowDownRight, Package, ShoppingCart, DollarSign } from "lucide-react"
import { Link } from "@tanstack/react-router"

export function VendorOverview() {
  return (
    <div className="p-4 md:p-8 max-w-[1200px] mx-auto w-full flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Panoramica</h1>
      </div>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Vendite Totali</h3>
            <DollarSign className="w-4 h-4 text-zinc-400" strokeWidth={1.5} />
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-[24px] font-semibold text-zinc-900 dark:text-zinc-50">€ 24,500.00</div>
            <span className="flex items-center text-[12px] font-medium text-emerald-600 dark:text-emerald-400">
              <ArrowUpRight className="w-3 h-3 mr-0.5" strokeWidth={2} />
              12.5%
            </span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Ordini</h3>
            <ShoppingCart className="w-4 h-4 text-zinc-400" strokeWidth={1.5} />
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-[24px] font-semibold text-zinc-900 dark:text-zinc-50">145</div>
            <span className="flex items-center text-[12px] font-medium text-emerald-600 dark:text-emerald-400">
              <ArrowUpRight className="w-3 h-3 mr-0.5" strokeWidth={2} />
              8.2%
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg p-5 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400">Prodotti Venduti</h3>
            <Package className="w-4 h-4 text-zinc-400" strokeWidth={1.5} />
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-[24px] font-semibold text-zinc-900 dark:text-zinc-50">1,204</div>
            <span className="flex items-center text-[12px] font-medium text-red-600 dark:text-red-400">
              <ArrowDownRight className="w-3 h-3 mr-0.5" strokeWidth={2} />
              2.4%
            </span>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white dark:bg-[#27272A] border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm flex flex-col overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between bg-white dark:bg-[#27272A]">
          <h2 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Ultimi Ordini</h2>
          <Link to="/vendor/orders" className="text-[13px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            Vedi tutti
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-transparent">
                <th className="px-6 py-3 text-[12px] font-medium text-zinc-500 whitespace-nowrap">Ordine</th>
                <th className="px-6 py-3 text-[12px] font-medium text-zinc-500 whitespace-nowrap">Data</th>
                <th className="px-6 py-3 text-[12px] font-medium text-zinc-500 whitespace-nowrap">Cliente</th>
                <th className="px-6 py-3 text-[12px] font-medium text-zinc-500 whitespace-nowrap">Stato</th>
                <th className="px-6 py-3 text-[12px] font-medium text-zinc-500 whitespace-nowrap text-right">Totale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {[
                { id: "#1001", date: "10 Mar 2026", customer: "Acme Corp", status: "Completato", total: "€ 1,250.00" },
                { id: "#1002", date: "09 Mar 2026", customer: "Globex Inc", status: "In elaborazione", total: "€ 850.00" },
                { id: "#1003", date: "08 Mar 2026", customer: "Soylent Corp", status: "Spedito", total: "€ 3,400.00" },
                { id: "#1004", date: "07 Mar 2026", customer: "Initech", status: "Annullato", total: "€ 120.00" },
                { id: "#1005", date: "06 Mar 2026", customer: "Umbrella Corp", status: "Completato", total: "€ 5,600.00" },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                  <td className="px-6 py-3 text-[13px] text-zinc-900 dark:text-zinc-50 font-medium">{order.id}</td>
                  <td className="px-6 py-3 text-[13px] text-zinc-500 dark:text-zinc-400">{order.date}</td>
                  <td className="px-6 py-3 text-[13px] text-zinc-900 dark:text-zinc-50">{order.customer}</td>
                  <td className="px-6 py-3 text-[13px]">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                      order.status === 'Completato' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' :
                      order.status === 'In elaborazione' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' :
                      order.status === 'Spedito' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                      'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-[13px] text-zinc-900 dark:text-zinc-50 font-medium text-right">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
