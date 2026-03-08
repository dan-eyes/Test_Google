import { Play, X, UploadCloud, Building2 } from "lucide-react"
import { useLocation, Link } from "@tanstack/react-router"
import { useState } from "react"

export function VendorHeader() {
  const location = useLocation()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const isHome = pathSegments.length === 1 && pathSegments[0] === "vendor"
  const currentPage = isHome ? "Overview" : pathSegments[pathSegments.length - 1]

  // Dati simulati dell'azienda
  const companyName = "Acme Corp"
  const companyInitials = "AC"

  return (
    <>
      <header className="h-14 bg-white dark:bg-[#18181B] border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between px-6 sticky top-0 z-20 flex-shrink-0">
        {/* LATO SINISTRO: Breadcrumbs */}
        <div className="flex items-center text-[13px] text-zinc-500 dark:text-zinc-400">
          <Link to="/vendor" className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer transition-colors">
            Stores
          </Link>
          
          <Play className="w-2 h-2 mx-2.5 text-zinc-400 fill-zinc-400 opacity-60" />
          
          <span className="font-medium text-zinc-900 dark:text-zinc-50 capitalize">
            {currentPage.replace('-', ' ')}
          </span>
        </div>

        {/* LATO DESTRO: Actions */}
        <div className="flex items-center gap-3">
          
          {/* Pulsante Azienda (Sostituisce l'Help) */}
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-2 px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-700/50 rounded-md transition-colors group"
          >
            <div className="w-5 h-5 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center border border-zinc-300 dark:border-zinc-600 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 transition-colors">
              <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300">{companyInitials}</span>
            </div>
            <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50">
              {companyName}
            </span>
          </button>
        </div>
      </header>

      {/* MODALE STORE SETTINGS */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
          
          {/* Contenitore Modale */}
          <div className="bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl w-full max-w-[560px] max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Header Modale */}
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
              <div>
                <h2 className="text-[16px] font-semibold text-zinc-900 dark:text-zinc-50">Store Details</h2>
                <p className="text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">Manage your company public profile and logo.</p>
              </div>
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Body Modale (Scrollable) */}
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
              
              {/* Upload Logo */}
              <div>
                <label className="block text-[13px] font-medium text-zinc-900 dark:text-zinc-50 mb-2">Company Logo</label>
                <div className="w-full border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors cursor-pointer bg-zinc-50/50 dark:bg-[#27272A]/30">
                  <div className="w-10 h-10 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <UploadCloud className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
                  </div>
                  <p className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50">Click to upload or drag and drop</p>
                  <p className="text-[12px] text-zinc-500 mt-1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[13px] font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">Store Name</label>
                  <input 
                    type="text" 
                    defaultValue="Acme Corp"
                    className="w-full bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[13px] font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">Contact Email</label>
                  <input 
                    type="email" 
                    defaultValue="hello@acmecorp.com"
                    className="w-full bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[13px] font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">VAT Number / Tax ID</label>
                  <input 
                    type="text" 
                    placeholder="IT01234567890"
                    className="w-full bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[13px] font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">Business Address</label>
                  <div className="flex relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                      <Building2 className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search for an address..."
                      className="w-full bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-700 rounded-md pl-9 pr-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modale */}
            <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#18181B] flex items-center justify-end gap-2">
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="px-3 py-1.5 text-[13px] font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="px-3 py-1.5 text-[13px] font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-md transition-colors shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
