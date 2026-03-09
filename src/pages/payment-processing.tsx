import { useEffect, useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "../lib/utils"

// 1. COMPONENTE LOGO IDA (Esteso per evitare limiti di token)
const IdaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 422 319" className={cn("fill-current text-white", className)} xmlns="http://www.w3.org/2000/svg">
    <path d="M223.338 0H187.854V176.839H223.338V0Z" fill="currentColor" />
    <path d="M35.4848 142.035H0V318.874H35.4848V142.035Z" fill="currentColor" />
    <path d="M422.001 219.262H386.492V318.873H422.001V219.262Z" fill="currentColor" />
    <path d="M414.694 188.479C407.571 171.609 395.736 157.294 380.816 147.161C373.391 142.125 365.176 138.119 356.36 135.387C347.603 132.596 338.244 131.139 328.585 131.139C316.201 131.139 304.306 133.568 293.438 138.001C292.529 138.361 291.686 138.723 290.843 139.15C281.06 143.457 272.12 149.525 264.454 156.748C261.977 159.112 259.624 161.601 257.265 164.392C253.102 169.185 248.815 174.708 244.645 180.289C243.802 181.438 242.894 182.653 242.051 183.809C239.757 186.962 217.832 219.243 213.969 225.008C212.035 227.917 209.741 231.194 207.263 234.773C206.721 235.562 206.12 236.415 205.518 237.262C201.408 243.147 196.82 249.338 192.592 254.801C190.481 257.527 188.364 260.075 186.553 262.202C184.684 264.383 182.992 266.143 181.782 267.298C176.593 272.21 170.49 276.216 163.791 278.947C157.086 281.679 149.779 283.196 142.048 283.196C136.735 283.196 131.604 282.466 126.775 281.133C124.298 280.464 121.88 279.616 119.527 278.585C109.137 274.212 100.261 266.812 94.0401 257.526C90.9029 252.857 88.4257 247.761 86.7339 242.298C85.1055 236.835 84.1393 231.075 84.1393 225.008C84.1393 216.937 85.7728 209.353 88.6678 202.372C93.079 191.938 100.444 183.08 109.685 176.768C114.332 173.61 119.403 171.186 124.84 169.486C130.271 167.785 136.009 166.82 142.048 166.82C149.779 166.879 157.086 168.337 163.791 171.063C170.49 173.853 176.593 177.799 181.782 182.712C182.992 183.867 184.684 185.686 186.553 187.813C189.814 191.635 193.677 196.547 197.546 201.709C199.055 203.771 200.565 205.833 202.074 207.954C207.871 199.463 218.014 184.536 223.327 176.827C222.425 175.612 221.517 174.404 220.614 173.189C218.196 170.09 215.779 167.121 213.367 164.39C210.949 161.599 208.655 159.11 206.178 156.746C197.846 148.853 188.004 142.424 177.194 137.998C166.326 133.566 154.426 131.136 142.048 131.136C129.186 131.136 116.867 133.749 105.639 138.542C88.8509 145.641 74.6563 157.533 64.5717 172.519C59.5597 179.985 55.5788 188.292 52.8011 197.092C50.0833 205.953 48.6328 215.297 48.6328 225.009C48.6328 237.932 51.2274 250.31 55.9398 261.533C63.0629 278.462 74.8984 292.725 89.7537 302.857C97.2429 307.894 105.458 311.893 114.273 314.684C123.03 317.416 132.389 318.874 142.049 318.874C154.427 318.874 166.327 316.444 177.195 312.018C188.005 307.586 197.788 301.156 206.121 293.329L206.179 293.269C208.656 290.964 210.95 288.411 213.368 285.62C217.531 280.826 221.818 275.309 225.987 269.727C226.831 268.572 227.739 267.416 228.582 266.267C230.876 263.049 260.892 218.816 263.364 215.237C263.912 214.449 264.514 213.602 265.114 212.749C269.225 206.924 273.813 200.673 278.041 195.216C280.152 192.484 282.269 189.936 284.08 187.815C285.949 185.628 287.642 183.868 288.85 182.713C294.04 177.801 300.143 173.854 306.843 171.064C308.476 170.4 310.104 169.856 311.796 169.304C317.109 167.729 322.723 166.881 328.585 166.822C336.616 166.88 344.224 168.457 351.105 171.431C361.49 175.798 370.372 183.199 376.587 192.484C379.73 197.159 382.206 202.255 383.893 207.712C385.586 213.175 386.493 218.94 386.493 225.008C386.493 233.079 384.86 240.723 381.965 247.637C377.554 258.072 370.188 266.996 360.948 273.241C356.301 276.399 351.23 278.888 345.793 280.523C340.42 282.224 334.624 283.197 328.585 283.197C320.854 283.197 313.547 281.68 306.842 278.948C300.143 276.216 294.039 272.211 288.85 267.298C287.64 266.143 285.948 264.324 284.079 262.203C280.818 258.44 276.95 253.463 273.086 248.308C271.519 246.245 270.008 244.118 268.499 241.997C268.015 242.725 267.532 243.455 266.989 244.243C257.024 258.926 250.743 268.211 247.304 273.242C248.206 274.456 249.115 275.612 250.017 276.827C252.435 279.92 254.853 282.895 257.264 285.62C259.623 288.41 261.977 290.964 264.453 293.269C272.785 301.156 282.628 307.586 293.437 312.018C304.306 316.444 316.2 318.874 328.584 318.874C341.445 318.874 353.765 316.266 364.934 311.532C381.781 304.374 395.97 292.482 406.06 277.491C411.067 270.031 415.117 261.776 417.83 252.918C420.55 244.118 422.001 234.715 422.001 225.009C422.001 212.086 419.407 199.708 414.694 188.479Z" fill="currentColor" />
  </svg>
);

export function PaymentProcessing() {
  const navigate = useNavigate()
  const [isConfirmed, setIsConfirmed] = useState(false)

  // Effetto a due fasi: prima conferma visiva, poi reindirizza
  useEffect(() => {
    // Fase 1: Dopo 2.5 secondi, simula la conferma del pagamento
    const confirmTimer = setTimeout(() => {
      setIsConfirmed(true)
    }, 2500)

    // Fase 2: Dopo altri 1.5 secondi dalla conferma, fai il redirect alla Dashboard
    const redirectTimer = setTimeout(() => {
      navigate({ to: "/vendor" })
    }, 4000)

    return () => {
      clearTimeout(confirmTimer)
      clearTimeout(redirectTimer)
    }
  }, [navigate])

  return (
    <div className="dark min-h-screen w-full font-sans text-zinc-50 selection:bg-blue-500/30 overflow-hidden">
      {/* SFONDO FISSATO */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-black z-0" />
        <div 
          className="absolute inset-0 w-full h-full opacity-25 mix-blend-overlay grayscale"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* CONTENUTO CENTRALE */}
      <div className="relative z-10 flex flex-col h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center text-center justify-center max-w-[360px] mx-auto px-6">
          
          <div className="flex items-center justify-center h-20 mb-2 relative w-full">
            <AnimatePresence mode="wait">
              {!isConfirmed ? (
                /* STATO INIZIALE: SOLO LOGO IDA CHE PULSA NEL CONTENITORE QUADRATO */
                /* (Rimossi i cerchi rotanti) */
                <motion.div 
                  key="logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  // Animazione di pulsazione (scale) identica all'onboarding
                  animate={{ 
                    opacity: 1, 
                    scale: [1, 1.05, 1], 
                    transition: { 
                      opacity: { duration: 0.3 }, 
                      scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } 
                    } 
                  }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  // Styling identico all'onboarding
                  className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shadow-sm absolute"
                >
                  {/* Logo centrale fisso */}
                  <IdaLogo className="h-6 w-auto text-white" />
                </motion.div>
              ) : (
                /* STATO FINALE: Check blu di successo (Identico all'onboarding) */
                <motion.div
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                  // Styling identico all'onboarding
                  className="h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 absolute"
                >
                  <Check className="w-7 h-7 text-white stroke-[3]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Testi con layout="position" per transizioni fluide */}
          <motion.h2 
            layout="position"
            className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight"
          >
            {isConfirmed ? "Pagamento riuscito" : "Elaborazione Pagamento"}
          </motion.h2>
          
          <motion.p 
            layout="position"
            className="text-zinc-400 text-[14px] leading-relaxed"
          >
            {isConfirmed ? (
              <>Reindirizzamento alla dashboard...</>
            ) : (
              <>Stiamo elaborando il tuo pagamento...<br/>Non chiudere questa pagina.</>
            )}
          </motion.p>

        </div>
      </div>
    </div>
  )
}