import { Link, useParams } from "@tanstack/react-router"
import { ChevronRight, ChevronLeft, Search, Menu, Info, AlertTriangle, Link as LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { docsData } from "@/lib/docs-data"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { useEffect, useState } from "react"

export function DocsPage() {
  const { category, slug } = useParams({ strict: false }) as { category?: string; slug?: string }
  
  const currentSection = docsData.find(s => s.slug === category)
  const currentPage = currentSection?.items.find(i => i.slug === slug)

  const allPages = docsData.flatMap(section => 
    section.items.map(item => ({ ...item, sectionSlug: section.slug, sectionTitle: section.title }))
  )
  
  const currentIndex = allPages.findIndex(p => p.slug === slug && p.sectionSlug === category)
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [sidebarHidden, setSidebarHidden] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const [openSections, setOpenSections] = useState<string[]>([])

  useEffect(() => {
    const savedTheme = localStorage.getItem('ida-docs-theme') || 'light'
    setTheme(savedTheme as 'light' | 'dark')
  }, [])

  useEffect(() => {
    if (category && !openSections.includes(category)) {
      setOpenSections(prev => [...prev, category])
    }
  }, [category])

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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('ida-docs-theme', newTheme)
    setIsHamburgerOpen(false)
  }

  const toggleSection = (sectionSlug: string) => {
    setOpenSections(prev => 
      prev.includes(sectionSlug) ? prev.filter(s => s !== sectionSlug) : [...prev, sectionSlug]
    )
  }

  if (!currentSection || !currentPage) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Pagina non trovata</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-[14px]">La pagina che cerchi non esiste o è stata spostata.</p>
          <Link to="/docs" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-[14px]">Torna al Manuale del Seller</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("fixed inset-0 z-[100] font-sans flex transition-colors overflow-hidden", theme === 'dark' ? 'dark text-zinc-300 bg-[#0a0a0a]' : 'text-zinc-700 bg-[#f9fafb]')}>
        
      {/* STRUTTURA A COLONNE */}
      <div className="flex flex-1 overflow-hidden w-full relative h-screen">
        
        {/* SIDEBAR SINISTRA ACCORDION COMPLETA */}
        {!sidebarHidden && (
          <aside className="w-[280px] flex-shrink-0 hidden md:flex flex-col h-full overflow-y-auto py-6 bg-transparent">
            <nav className="flex flex-col gap-1 w-full">
              {docsData.map((section, idx) => {
                const isOpen = openSections.includes(section.slug)
                return (
                  <div key={section.slug} className="mb-2">
                    <button 
                      onClick={() => toggleSection(section.slug)} 
                      className="flex items-center justify-between w-full px-4 py-2 group cursor-pointer outline-none"
                    >
                      <span className="text-[13px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-left break-words leading-snug pr-2">{section.title}</span>
                      <ChevronRight className={cn("w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 transition-transform duration-200 flex-shrink-0", isOpen && "rotate-90")} />
                    </button>
                    
                    {/* Sottovoci a tendina */}
                    <div className={cn("overflow-hidden transition-all duration-200 ease-in-out", isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0")}>
                      <ul className="flex flex-col w-full">
                        {section.items.map((item) => {
                          const isActive = slug === item.slug && category === section.slug
                          return (
                            <li key={item.slug} className="w-full">
                              <Link
                                to={`/docs/${section.slug}/${item.slug}`}
                                className={cn(
                                  "block w-full px-4 py-1.5 text-[13px] transition-colors break-words leading-snug",
                                  isActive
                                    ? "bg-white dark:bg-[#111111] text-blue-600 dark:text-white font-medium shadow-sm border border-zinc-200/50 dark:border-zinc-800"
                                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 hover:dark:bg-white/[0.05] hover:text-zinc-900 dark:hover:text-white"
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
        )}

        {/* COLONNA CENTRALE E DASHBOARD CARD */}
        <main className="flex-1 h-full flex flex-col p-2 lg:p-3 lg:pl-0 min-w-0">
          
          <div className="flex-1 flex flex-col bg-white dark:bg-[#111111] rounded-[1rem] lg:rounded-[1.5rem] shadow-sm border border-zinc-200 dark:border-zinc-800/80 overflow-hidden relative">
            
            {/* HEADER DELLA SCHEDA */}
            <header className="h-14 flex-shrink-0 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between px-4 lg:px-6 z-20 bg-white dark:bg-[#111111]">
              <div className="flex items-center gap-6">
                <Link to="/docs" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <svg viewBox="0 0 422 319" className="h-5 w-auto fill-current text-zinc-900 dark:text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M223.338 0H187.854V176.839H223.338V0Z" fill="currentColor"/><path d="M35.4848 142.035H0V318.874H35.4848V142.035Z" fill="currentColor"/><path d="M422.001 219.262H386.492V318.873H422.001V219.262Z" fill="currentColor"/><path d="M414.694 188.479C407.571 171.609 395.736 157.294 380.816 147.161C373.391 142.125 365.176 138.119 356.36 135.387C347.603 132.596 338.244 131.139 328.585 131.139C316.201 131.139 304.306 133.568 293.438 138.001C292.529 138.361 291.686 138.723 290.843 139.15C281.06 143.457 272.12 149.525 264.454 156.748C261.977 159.112 259.624 161.601 257.265 164.392C253.102 169.185 248.815 174.708 244.645 180.289C243.802 181.438 242.894 182.653 242.051 183.809C239.757 186.962 217.832 219.243 213.969 225.008C212.035 227.917 209.741 231.194 207.263 234.773C206.721 235.562 206.12 236.415 205.518 237.262C201.408 243.147 196.82 249.338 192.592 254.801C190.481 257.527 188.364 260.075 186.553 262.202C184.684 264.383 182.992 266.143 181.782 267.298C176.593 272.21 170.49 276.216 163.791 278.947C157.086 281.679 149.779 283.196 142.048 283.196C136.735 283.196 131.604 282.466 126.775 281.133C124.298 280.464 121.88 279.616 119.527 278.585C109.137 274.212 100.261 266.812 94.0401 257.526C90.9029 252.857 88.4257 247.761 86.7339 242.298C85.1055 236.835 84.1393 231.075 84.1393 225.008C84.1393 216.937 85.7728 209.353 88.6678 202.372C93.079 191.938 100.444 183.08 109.685 176.768C114.332 173.61 119.403 171.186 124.84 169.486C130.271 167.785 136.009 166.82 142.048 166.82C149.779 166.879 157.086 168.337 163.791 171.063C170.49 173.853 176.593 177.799 181.782 182.712C182.992 183.867 184.684 185.686 186.553 187.813C189.814 191.635 193.677 196.547 197.546 201.709C199.055 203.771 200.565 205.833 202.074 207.954C207.871 199.463 218.014 184.536 223.327 176.827C222.425 175.612 221.517 174.404 220.614 173.189C218.196 170.09 215.779 167.121 213.367 164.39C210.949 161.599 208.655 159.11 206.178 156.746C197.846 148.853 188.004 142.424 177.194 137.998C166.326 133.566 154.426 131.136 142.048 131.136C129.186 131.136 116.867 133.749 105.639 138.542C88.8509 145.641 74.6563 157.533 64.5717 172.519C59.5597 179.985 55.5788 188.292 52.8011 197.092C50.0833 205.953 48.6328 215.297 48.6328 225.009C48.6328 237.932 51.2274 250.31 55.9398 261.533C63.0629 278.462 74.8984 292.725 89.7537 302.857C97.2429 307.894 105.458 311.893 114.273 314.684C123.03 317.416 132.389 318.874 142.049 318.874C154.427 318.874 166.327 316.444 177.195 312.018C188.005 307.586 197.788 301.156 206.121 293.329L206.179 293.269C208.656 290.964 210.95 288.411 213.368 285.62C217.531 280.826 221.818 275.309 225.987 269.727C226.831 268.572 227.739 267.416 228.582 266.267C230.876 263.049 260.892 218.816 263.364 215.237C263.912 214.449 264.514 213.602 265.114 212.749C269.225 206.924 273.813 200.673 278.041 195.216C280.152 192.484 282.269 189.936 284.08 187.815C285.949 185.628 287.642 183.868 288.85 182.713C294.04 177.801 300.143 173.854 306.843 171.064C308.476 170.4 310.104 169.856 311.796 169.304C317.109 167.729 322.723 166.881 328.585 166.822C336.616 166.88 344.224 168.457 351.105 171.431C361.49 175.798 370.372 183.199 376.587 192.484C379.73 197.159 382.206 202.255 383.893 207.712C385.586 213.175 386.493 218.94 386.493 225.008C386.493 233.079 384.86 240.723 381.965 247.637C377.554 258.072 370.188 266.996 360.948 273.241C356.301 276.399 351.23 278.888 345.793 280.523C340.42 282.224 334.624 283.197 328.585 283.197C320.854 283.197 313.547 281.68 306.842 278.948C300.143 276.216 294.039 272.211 288.85 267.298C287.64 266.143 285.948 264.324 284.079 262.203C280.818 258.44 276.95 253.463 273.086 248.308C271.519 246.245 270.008 244.118 268.499 241.997C268.015 242.725 267.532 243.455 266.989 244.243C257.024 258.926 250.743 268.211 247.304 273.242C248.206 274.456 249.115 275.612 250.017 276.827C252.435 279.92 254.853 282.895 257.264 285.62C259.623 288.41 261.977 290.964 264.453 293.269C272.785 301.156 282.628 307.586 293.437 312.018C304.306 316.444 316.2 318.874 328.584 318.874C341.445 318.874 353.765 316.266 364.934 311.532C381.781 304.374 395.97 292.482 406.06 277.491C411.067 270.031 415.117 261.776 417.83 252.918C420.55 244.118 422.001 234.715 422.001 225.009C422.001 212.086 419.407 199.708 414.694 188.479Z" fill="currentColor"/>
                  </svg>
                  <span className="font-semibold text-[15px] tracking-tight ml-1 text-zinc-900 dark:text-white">Ida Docs</span>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative group">
                  <button className="hidden sm:flex items-center gap-1 text-[13px] font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors px-3 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-white/[0.05]">
                    Aiuto <ChevronRight className="w-3 h-3 rotate-90 opacity-50 transition-transform group-hover:rotate-[270deg]" />
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800/80 rounded-xl shadow-xl py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <Link to="/assistenza" className="block w-full text-left px-4 py-2 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-[#1a1a1a] transition-colors">Contatta il supporto</Link>
                  </div>
                </div>

                <button className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-white/[0.05]">
                  <Search className="w-4 h-4" />
                </button>
                
                <div className="relative">
                  <button 
                    onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                    className="p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800/80 rounded-md"
                  >
                    <Menu className="w-4 h-4" />
                  </button>

                  {isHamburgerOpen && (
                    <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800/80 rounded-xl shadow-xl py-2 z-50">
                      <Link to="/" className="block w-full text-left px-4 py-2 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/[0.05] transition-colors">Torna all'App</Link>
                      <button onClick={() => {setSidebarHidden(!sidebarHidden); setIsHamburgerOpen(false)}} className="w-full flex justify-between items-center px-4 py-2 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/[0.05] transition-colors">
                        {sidebarHidden ? 'Mostra Menu' : 'Nascondi Menu'} <span className="text-zinc-400 dark:text-zinc-600 font-mono text-[10px]">{"⌘\\"}</span>
                      </button>
                      <div className="my-1 border-t border-zinc-100 dark:border-zinc-800/80"></div>
                      <div className="px-4 py-1.5 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Theme</div>
                      <button onClick={() => toggleTheme()} className="w-full text-left px-4 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${theme === 'light' ? 'bg-zinc-900' : 'bg-transparent border border-zinc-500'}`}></div> Light
                      </button>
                      <button onClick={() => toggleTheme()} className="w-full text-left px-4 py-1.5 text-[13px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-transparent border border-zinc-500'}`}></div> Dark
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
              
              {/* AREA CONTENUTO CENTRALE (Articolo Markdown) */}
              <div className="flex-1 overflow-y-auto px-6 py-10 md:px-12 lg:py-14 flex justify-center scroll-smooth">
                <div className="max-w-[760px] w-full">
                  
                  {/* Breadcrumbs interna articolo */}
                  <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-500 mb-8 font-medium">
                    <span>Manuale</span>
                    <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-zinc-400 dark:text-zinc-600" />
                    <span>{currentSection.title}</span>
                  </div>

                  {/* TITOLO PRINCIPALE */}
                  <h1 className="text-[32px] md:text-[36px] font-bold tracking-tight text-zinc-900 dark:text-white mb-10 leading-tight">
                    {currentPage.title}
                  </h1>

                  {/* ARTICOLO MARKDOWN */}
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
                        h2: ({node, ...props}) => {
                          const id = props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
                          return <h2 id={id} {...props} />
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
                              <div className="relative space-y-10 my-10 border-l border-zinc-200 dark:border-zinc-800 not-prose ml-4 pl-8">
                                {props.children}
                              </div>
                            )
                          }
                          if (props.className === "step-item") {
                            return (
                              <div className="relative">
                                {/* Il cerchio si centra matematicamente sul bordo (-left-[32px] annulla il pl-8) */}
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

                  {/* Bottoni Navigazione In Fondo */}
                  <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prevPage ? (
                      <Link 
                        to={prevPage.sectionSlug === 'panoramica' && prevPage.slug === 'benvenuto' ? '/docs' : `/docs/${prevPage.sectionSlug}/${prevPage.slug}`}
                        className="group flex flex-col p-4 bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left shadow-sm"
                      >
                        <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-500 mb-1 flex items-center gap-1 uppercase tracking-wider">
                          <ChevronLeft className="h-3 w-3" /> Precedente
                        </span>
                        <span className="text-[14px] font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {prevPage.title}
                        </span>
                      </Link>
                    ) : <div />}

                    {nextPage ? (
                      <Link 
                        to={nextPage.sectionSlug === 'panoramica' && nextPage.slug === 'benvenuto' ? '/docs' : `/docs/${nextPage.sectionSlug}/${nextPage.slug}`}
                        className="group flex flex-col p-4 bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-right items-end shadow-sm"
                      >
                        <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-500 mb-1 flex items-center gap-1 uppercase tracking-wider">
                          Successivo <ChevronRight className="h-3 w-3" />
                        </span>
                        <span className="text-[14px] font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {nextPage.title}
                        </span>
                      </Link>
                    ) : <div />}
                  </div>

                </div>
              </div>

              {/* SIDEBAR DESTRA (TOC) */}
              <aside className="hidden xl:block w-[240px] flex-shrink-0 overflow-y-auto py-12 pr-8 border-l border-zinc-100 dark:border-zinc-800/50">
                <h5 className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4 pl-4">In questa pagina</h5>
                <div className="border-l border-zinc-200 dark:border-zinc-800/80 ml-4">
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
                
                <div className="mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-800/80 ml-4">
                  <h5 className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Risorse</h5>
                  <ul className="space-y-3 text-[13px] text-zinc-500 dark:text-zinc-500 font-medium">
                    <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 transition-colors">Segnala un problema</a></li>
                    <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 transition-colors">Richiedi una modifica</a></li>
                  </ul>
                </div>
              </aside>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}