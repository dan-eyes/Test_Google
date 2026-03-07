import { Link, useParams } from "@tanstack/react-router"
import { Search } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { docsData } from "@/lib/docs-data"

export function DocsSidebar({ className }: { className?: string }) {
  const params = useParams({ strict: false }) as { category?: string; slug?: string }
  const { category, slug } = params

  return (
    <aside className={cn("w-[221px] bg-zinc-50 dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 h-screen overflow-y-auto flex flex-col transition-colors duration-300", className)}>
      <div className="p-4 sticky top-0 bg-zinc-50 dark:bg-zinc-950 z-10 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity">
            <Logo className="h-4" />
          </Link>
          <ThemeToggle />
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400 z-10" />
          <Input 
            type="text" 
            placeholder="Cerca..." 
            className="pl-8 h-8 text-[12px] bg-white dark:bg-zinc-900 dark:border-zinc-800 rounded-md"
          />
        </div>
      </div>

      <nav className="flex-1 px-3 pb-10 space-y-6 mt-4">
        {docsData.map((section, i) => (
          <div key={i}>
            <h4 className="px-2 mb-2 text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.1em] flex items-center gap-2">
              <section.icon className="h-3 w-3" />
              {section.title}
            </h4>
            <div className="flex flex-col space-y-0.5">
              {section.items.map((item, j) => {
                const isActive = (category === section.slug && item.slug === slug) || 
                                (!category && !slug && section.slug === 'panoramica' && item.slug === 'benvenuto')
                const href = section.slug === 'panoramica' && item.slug === 'benvenuto' 
                  ? '/docs' 
                  : `/docs/${section.slug}/${item.slug}`
                
                return (
                  <Link 
                    key={j} 
                    to={href}
                    className={cn(
                      "px-2 py-1.5 text-[12px] rounded-md transition-all block relative group",
                      isActive
                        ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-medium border border-zinc-200/50 dark:border-zinc-800/50" 
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-zinc-900 dark:bg-zinc-50 rounded-r-full" />
                    )}
                    <span className={cn("block truncate", isActive && "ml-1.5")}>{item.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
