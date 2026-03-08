import { Link, useParams } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { docsData } from "@/lib/docs-data"
import { useState, useEffect } from "react"

export function DocsSidebar({ className }: { className?: string }) {
  const routeParams = useParams({ strict: false }) as any
  const category = routeParams?.category
  const slug = routeParams?.slug
  
  const [openSection, setOpenSection] = useState<string | null>(category || "panoramica")

  useEffect(() => {
    if (category) {
      setOpenSection(category)
    }
  }, [category])

  const handleToggle = (sectionSlug: string) => {
    setOpenSection(prev => prev === sectionSlug ? null : sectionSlug)
  }

  return (
    <aside className={cn("overflow-y-auto flex flex-col py-6", className)}>
      
      <nav className="flex flex-col gap-1 w-full">
        {docsData.map((section, idx) => {
          const isOpen = openSection === section.slug
          return (
            <div key={section.slug} className="mb-2">
              <button 
                onClick={() => handleToggle(section.slug)} 
                className="flex items-center justify-between w-full px-4 py-2 group cursor-pointer outline-none"
              >
                <span className="text-[13px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-left break-words leading-snug pr-2">{section.title}</span>
                <ChevronRight className={cn("w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 transition-transform duration-200 flex-shrink-0", isOpen && "rotate-90")} />
              </button>
              
              <div className={cn("overflow-hidden transition-all duration-200 ease-in-out", isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0")}>
                <ul className="flex flex-col w-full">
                  {section.items.map((item) => {
                    const isIndex = section.slug === 'panoramica' && item.slug === 'benvenuto';
                    const isActive = slug === item.slug && category === section.slug;
                    // Routing sicuro per prevenire crash
                    const path = isIndex ? "/docs" : `/docs/${section.slug}/${item.slug}`;

                    return (
                      <li key={item.slug} className="w-full">
                        <Link
                          to={path}
                          className={cn(
                            "block w-full px-4 py-1.5 text-[13px] transition-colors break-words leading-snug",
                            isActive
                              ? "bg-white dark:bg-[#111111] text-blue-600 dark:text-white font-medium shadow-sm border border-zinc-200/50 dark:border-zinc-800/80"
                              : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-white/[0.05] hover:text-zinc-900 dark:hover:text-white"
                          )}
                        >
                          {item.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {idx < docsData.length - 1 && (
                <div className="mt-4 mx-4 border-b border-dotted border-zinc-300 dark:border-zinc-800" />
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}