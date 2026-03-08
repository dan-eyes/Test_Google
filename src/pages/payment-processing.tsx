import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"
import { motion } from "framer-motion"

export function PaymentProcessing() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate({ to: "/dashboard" })
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="dark min-h-screen w-full font-sans text-zinc-50 selection:bg-blue-500/30">
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

      {/* CONTENUTO */}
      <div className="relative z-10 flex flex-col h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center text-center justify-center max-w-[360px] mx-auto px-6">
          
          {/* Loader Elegante */}
          <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-t-2 border-l-2 border-blue-400/60"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-b-2 border-l-2 border-blue-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Icona centrale statica o pulsante */}
            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[24px] font-semibold text-zinc-50 mb-2 tracking-tight"
          >
            Elaborazione Pagamento
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-[14px] leading-relaxed"
          >
            Stiamo elaborando il tuo pagamento...<br/>
            Non chiudere questa pagina.
          </motion.p>

        </div>
      </div>
    </div>
  )
}
