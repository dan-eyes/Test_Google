import { Link } from "@tanstack/react-router"
import { useState } from "react"

// Custom X (Twitter) icon since not available in @medusajs/icons
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// Custom Instagram icon since not available in @medusajs/icons
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

// Custom LinkedIn icon to match X and Instagram styling
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const IDA_LOGO_URL = "https://cdn.mignite.app/ws/works_01KG5ZE85V07YVXJHWP9Q4BPT5/1769727227272-Ida_logo_blu-5--01KG5ZCXC81STNJ42JE8D0APK5-01KG5ZGJCK45RZK20HT33YYPP2.svg"

type FooterLinkItem = {
  label: string
  href: string
  external?: boolean
}

type FooterColumn = {
  title: string
  links: FooterLinkItem[]
  hideTitle?: boolean
}

// Footer columns structure as requested
const footerColumns: FooterColumn[] = [
  {
    title: "Azienda",
    links: [
      { label: "About us", href: "/chi-siamo" },
      { label: "Valori", href: "/valori" },
      { label: "Founder", href: "/founders" },
    ],
  },
  {
    title: "Seller",
    links: [
      { label: "Esporta nel mondo", href: "/seller" },
      { label: "Introduzione alla vendita", href: "/seller/inizia-vendere" },
      { label: "Requisiti necessari", href: "/seller/diventare-partner" },
      { label: "Guida step-by-step", href: "/seller/passaggi-account" },
      { label: "Manuale del Seller", href: "/docs" },
    ],
  },
  {
    title: "Prodotto",
    links: [
      { label: "Tecnologia", href: "/tecnologia" },
      { label: "Funzionalità", href: "/features" },
      { label: "Integrazioni", href: "/integrazioni" },
    ],
  },
  {
    title: "Affiliate Programs",
    links: [
      { label: "Professionisti e Imprese", href: "/affiliazione/piva-aziende" },
      { label: "Ambassador", href: "/affiliazione/privato" },
      { label: "Agenti di Vendita", href: "/affiliazione/agente-vendita" },
    ],
  },
  {
    title: "Altro",
    links: [
      { label: "Investitori", href: "/investitori" },
      { label: "Partnership", href: "/partnership" },
      { label: "Prezzi", href: "/pricing" },
      { label: "Stiamo assumendo", href: "/lavora-con-noi" },
    ],
  },
  {
    title: "Contatti",
    hideTitle: true,
    links: [
      { label: "Contatti", href: "/contatti" },
      { label: "Supporto", href: "/assistenza" },
      { label: "Ufficio Stampa", href: "/press" },
    ],
  },
]

export const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    if (!validateEmail(email)) {
      setSubscribeStatus("error")
      setErrorMessage("Inserisci un indirizzo email valido")
      return
    }

    setSubscribeStatus("loading")
    setErrorMessage("")
    
    // Simulating newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubscribeStatus("success")
    setEmail("")
    
    // Reset after 3 seconds
    setTimeout(() => setSubscribeStatus("idle"), 3000)
  }

  return (
    <footer className="bg-ui-bg-subtle dark:bg-black">
      {/* Main Footer Content */}
      <div className="py-8 border-y border-neutral-200 dark:border-neutral-800">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Logo Column - Left */}
            <div className="shrink-0">
              <Link to="/" className="inline-block">
                <img 
                  src={IDA_LOGO_URL} 
                  alt="Ida Italia" 
                  className="h-5 w-auto dark:invert"
                />
              </Link>
            </div>

            {/* Links Grid - Right */}
            <div className="flex-1 flex justify-center">
              <div className="grid grid-cols-3 gap-x-16 gap-y-8">
                {footerColumns.map((column) => (
                  <div key={column.title} className="min-w-0">
                    {!column.hideTitle && (
                      <h4 className="text-ui-fg-base font-medium text-[13px] mb-3 whitespace-nowrap">
                        {column.title}
                      </h4>
                    )}
                    <ul className={`space-y-2 ${column.hideTitle ? 'mt-[calc(13px*1.25+0.75rem)]' : ''}`}>
                      {column.links.map((link) => (
                        <li key={link.href}>
                          {link.external ? (
                            <a
                              href={link.href}
                              className="text-ui-fg-subtle text-[11px] hover:text-ui-fg-base transition-colors leading-snug block"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              to={link.href}
                              className="text-ui-fg-subtle text-[11px] hover:text-ui-fg-base transition-colors leading-snug block"
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section - Right */}
            <div className="w-full lg:w-[260px] xl:w-[280px] shrink-0 lg:ml-6 xl:ml-10">
                <h4 className="text-ui-fg-base font-medium text-xs mb-3">
                  Newsletter
                </h4>
                <form onSubmit={handleSubscribe} className="bg-transparent border border-neutral-200 dark:border-neutral-800 h-[32px] rounded-md flex items-center text-sm mb-3">
                  <input
                    type="email"
                    placeholder="Inserisci la tua email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (subscribeStatus === "error") {
                        setSubscribeStatus("idle")
                        setErrorMessage("error")
                      }
                    }}
                    aria-label="Indirizzo email per la newsletter"
                    className="min-w-0 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 flex-grow h-[32px] px-3 py-2 text-xs bg-transparent outline-none text-neutral-900 dark:text-neutral-100"
                    disabled={subscribeStatus === "loading"}
                  />
                  <button
                    type="submit"
                    disabled={subscribeStatus === "loading" || !email}
                    aria-label="Iscriviti alla newsletter"
                    className="whitespace-nowrap text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all px-3 py-1.5 text-xs font-medium rounded-r-md h-full disabled:opacity-50 disabled:cursor-not-allowed border-l border-neutral-200 dark:border-neutral-800"
                  >
                    {subscribeStatus === "loading" ? "..." : "Iscriviti"}
                  </button>
                </form>
                {subscribeStatus === "success" && (
                  <p className="text-ui-fg-interactive text-small mb-3">
                    Iscrizione completata!
                  </p>
                )}
                {subscribeStatus === "error" && (
                  <p className="text-ui-fg-error text-small mb-3">
                    {errorMessage || "Errore. Riprova."}
                  </p>
                )}
                <p className="text-ui-fg-subtle text-xs mb-6">
                  Rimani aggiornato su Ida Export Marketplace.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com/company/107889313/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.instagram.com/ida_italia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-[15px] h-[15px]" />
                  </a>
                  <a 
                    href="https://x.com/ida_italia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-[15px] h-[15px]" />
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section - 10px font */}
      <div>
        <div className="content-container py-6">
          {/* Desktop: side by side, Mobile: stacked */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Company Info - Left */}
            <p 
              className="text-ui-fg-subtle leading-relaxed max-w-[450px]"
              style={{ fontSize: '10px' }}
            >
              Italian Development Area S.r.l. | Viale Papiniano 8, 20144, Milano | C.F. e n. iscr. Registro Imprese Milano Monza Brianza Lodi 13555240962 | REA MI 2730552 | Capitale sociale 10.000,00 interamente versato | Startup innovativa
            </p>
            {/* Legal Links - Right */}
            <div 
              className="flex items-center gap-2 text-ui-fg-subtle shrink-0"
              style={{ fontSize: '10px' }}
            >
              <Link 
                to="/privacy-policy"
                className="hover:text-ui-fg-base transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link 
                to="/cookie-policy"
                className="hover:text-ui-fg-base transition-colors"
              >
                Cookie Policy
              </Link>
              <span>|</span>
              <Link 
                to="/termini-e-condizioni"
                className="hover:text-ui-fg-base transition-colors"
              >
                Termini e Condizioni
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
