import { Link, useParams } from "@tanstack/react-router"
import { Info, AlertTriangle, Link as LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { docsData } from "@/lib/docs-data"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { useEffect, useState } from "react"

export function DocsPage() {
  const routeParams = useParams({ strict: false }) as any
  const category = routeParams?.category
  const slug = routeParams?.slug
  
  const currentSection = docsData.find(s => s.slug === category)
  const currentPage = currentSection?.items.find(i => i.slug === slug)

  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    if (currentPage?.content) {
      const lines = currentPage.content.split('\n')
      const extractedHeadings = lines
        .filter(line => line.startsWith('#'))
        .map(line => {
          const level = line.match(/^#+/)?.[0].length || 0
          const text = line.replace(/^#+\s*/, '')
          const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
          return { id, text, level }
        })
        .filter(h => h.level > 1)
      setHeadings(extractedHeadings)
    }
  }, [currentPage])

  if (!currentSection || !currentPage) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white dark:bg-[#111111] text-zinc-900 dark:text-zinc-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Pagina non trovata</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-[14px]">La pagina che cerchi non esiste o è stata spostata.</p>
          <Link to="/docs" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-[14px]">Torna al Manuale</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* AREA CONTENUTO CENTRALE */}
      <div className="flex-1 overflow-y-auto px-6 py-10 md:px-12 lg:py-14 flex justify-center scroll-smooth">
        <div className="max-w-[760px] w-full">
          
          <h1 className="text-[32px] md:text-[36px] font-bold tracking-tight text-zinc-900 dark:text-white mb-10 leading-tight">
            {currentPage.title}
          </h1>

          <article className="prose prose-zinc dark:prose-invert max-w-none 
            prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-900 dark:prose-headings:text-white
            prose-h2:text-[20px] prose-h2:mt-12 prose-h2:mb-5 prose-h2:pb-2 prose-h2:border-b prose-h2:border-zinc-100 dark:prose-h2:border-zinc-800/80
            prose-p:text-[15px] prose-p:leading-7 prose-p:text-zinc-600 dark:prose-p:text-zinc-400
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline 
            prose-strong:text-zinc-900 dark:prose-strong:text-white prose-strong:font-semibold">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({node, ...props}) => null, 
                h2: ({node, children, ...props}) => {
                  const text = typeof children === 'string' ? children : '';
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                blockquote: ({node, ...props}) => {
                  let type = "info"
                  let title = "Info"
                  let icon = <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  let bgColor = "bg-blue-50 dark:bg-blue-500/10"
                  let borderColor = "border-blue-200 dark:border-blue-500/20"
                  let textColor = "text-blue-900 dark:text-blue-200"

                  const firstChild = node?.children?.[1] 
                  let firstText = ""
                  if (firstChild && firstChild.type === 'element' && firstChild.tagName === 'p') {
                     const textNode = firstChild.children?.[0]
                     if (textNode && textNode.type === 'text' && 'value' in textNode) firstText = (textNode as any).value
                  }

                  if (firstText.includes("Attenzione") || firstText.includes("Warning")) {
                    type = "warning"
                    title = "Attenzione"
                    icon = <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    bgColor = "bg-amber-50 dark:bg-amber-500/10"
                    borderColor = "border-amber-200 dark:border-amber-500/20"
                    textColor = "text-amber-900 dark:text-amber-200"
                  } else if (firstText.includes("Success")) {
                    type = "success"
                    title = "Vantaggi"
                    icon = <LinkIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    bgColor = "bg-emerald-50 dark:bg-emerald-500/10"
                    borderColor = "border-emerald-200 dark:border-emerald-500/20"
                    textColor = "text-emerald-900 dark:text-emerald-200"
                  }

                  return (
                    <div className={cn("flex gap-4 p-5 my-8 rounded-xl border not-prose", bgColor, borderColor)}>
                      <div className="flex-shrink-0 mt-0.5">{icon}</div>
                      <div className={cn("flex-1 text-[14px] leading-relaxed", textColor)}>
                        <div className="font-semibold mb-1 text-[15px]">{title}</div>
                        <div className="[&>p]:m-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:mt-2 opacity-90">{props.children}</div>
                      </div>
                    </div>
                  )
                },
                div: ({node, ...props}) => {
                  if (props.className === "steps-list") {
                    return (
                      <div className="relative space-y-10 my-10 border-l border-zinc-200 dark:border-zinc-700 not-prose ml-4 pl-8">
                        {props.children}
                      </div>
                    )
                  }
                  if (props.className === "step-item") {
                    return (
                      <div className="relative">
                        <div className="absolute top-[-2px] -left-[32px] -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-[#111111] border-[2px] border-zinc-200 dark:border-zinc-700 text-[12px] font-bold text-zinc-900 dark:text-white shadow-sm z-10">
                          {props['data-step']}
                        </div>
                        <div className="pt-0.5">{props.children}</div>
                      </div>
                    )
                  }
                  return <div {...props} />
                }
              }}
            >
              {currentPage.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>

      {/* SIDEBAR DESTRA (TOC) */}
      <aside className="hidden xl:block w-[240px] flex-shrink-0 overflow-y-auto py-12 pr-8 border-l border-zinc-100 dark:border-zinc-700/50">
        <h5 className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4 pl-4">In questa pagina</h5>
        <div className="border-l border-zinc-200 dark:border-zinc-700/80 ml-4">
          <ul className="space-y-2.5 text-[13px] -ml-[1px]">
            {headings.map((heading, i) => (
              <li key={i}>
                <a 
                  href={`#${heading.id}`} 
                  className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors block leading-snug border-l border-transparent hover:border-zinc-400 dark:hover:border-zinc-600"
                  style={{ paddingLeft: `${(heading.level - 2) * 12 + 12}px` }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-700/80 ml-4">
          <h5 className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Risorse</h5>
          <ul className="space-y-3 text-[13px] text-zinc-500 dark:text-zinc-500 font-medium">
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 transition-colors">Segnala un problema</a></li>
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 transition-colors">Richiedi una modifica</a></li>
          </ul>
        </div>
      </aside>
    </>
  )
}