import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Check, Building2, User, CreditCard, FileText, ShieldCheck, MapPin, ChevronDown } from "lucide-react"
import { useSearch, useNavigate, Link } from "@tanstack/react-router"
import { Price } from "@/components/ui/price"
import { cn } from "@/lib/utils"

type Step = 
  | "EMAIL"
  | "EMAIL_CHECK"
  | "EMAIL_CONFIRMED"
  | "PHONE"
  | "PHONE_VERIFY"
  | "PASSWORD"
  | "NAME_DETAILS"
  | "BUSINESS_TYPE"
  | "BUSINESS_DETAILS"
  | "PLAN_SELECTION"
  | "START_DATE"
  | "SIGN_CONTRACT"
  | "PAYMENT"
  | "DASHBOARD"

interface OnboardingData {
  email: string
  phonePrefix: string
  phone: string
  password: string
  passwordConfirm: string
  firstName: string
  lastName: string
  role: string
  businessType: string
  businessName: string
  vatNumber: string
  incorporationDate: string
  otp: string
  plan: string
  billingCycle: "annual" | "quarterly"
  startDate: string
  discountCode: string
  inviteCode: string
  paymentMethod: "card" | "sepa"
  legalAccepted: boolean
}

const BUSINESS_TYPES = [
  "Impresa individuale",
  "Società a responsabilità limitata",
  "Semplice società a responsabilità limitata",
  "Società in accomandita semplice",
  "Società in nome collettivo",
  "Società per azioni",
  "Società semplice"
]

const PLANS = [
  { id: "standard", name: "Standard", priceAnnual: 0, priceQuarterly: 0, desc: "Per iniziare", features: ["Funzionalità Complete", "Fee sul transato 15%", "1 Paese EU"] },
  { id: "plus", name: "Plus", priceAnnual: 630, priceQuarterly: 210, desc: "Micro Imprese", features: ["Funzionalità Complete", "Fee sul transato 6%", "3 Paesi EU", "+ €129 aggiunta EU"] },
  { id: "premium", name: "Premium", priceAnnual: 1365, priceQuarterly: 650, desc: "Piccole Imprese", features: ["Funzionalità Complete", "Fee sul transato 4%", "Tutti EU + 3 Extra-EU", "+ €189 Extra-EU"] },
  { id: "ultra", name: "Ultra", priceAnnual: 3360, priceQuarterly: 1600, desc: "Medie Imprese", features: ["Funzionalità Complete", "Fee sul transato 2%", "Tutti i Paesi (Global)"] },
  { id: "enterprise", name: "Enterprise", priceAnnual: "Custom", priceQuarterly: "Custom", desc: "Grandi Imprese", features: ["Soluzione personalizzata"] }
]

const MONTHS = [
  { label: "Maggio 2026", spots: 34 }, { label: "Giugno 2026", spots: 28 }, { label: "Luglio 2026", spots: 45 },
  { label: "Agosto 2026", spots: 12 }, { label: "Settembre 2026", spots: 50 }, { label: "Ottobre 2026", spots: 18 },
  { label: "Novembre 2026", spots: 22 }, { label: "Dicembre 2026", spots: 5 }, { label: "Gennaio 2027", spots: 40 },
  { label: "Febbraio 2027", spots: 31 }, { label: "Marzo 2027", spots: 27 }, { label: "Aprile 2027", spots: 15 }
]

// Elementi di stile ricorrenti
const inputClass = "w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-[14px] text-zinc-50 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-zinc-500"
const labelClass = "block text-[13px] font-medium text-zinc-300 mb-1.5"

const ContinueButton = ({ onClick, disabled, children = "Continua", className }: { onClick: () => void; disabled?: boolean; children?: React.ReactNode; className?: string; }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "w-full h-[40px] mt-6 flex items-center justify-center bg-white hover:bg-zinc-200 text-zinc-900 disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed rounded-md text-[14px] font-medium transition-colors duration-200 shadow-sm",
      className
    )}
  >
    {children}
  </button>
)

export function OnboardingFlow() {
  const search = useSearch({ strict: false }) as any
  const navigate = useNavigate()
  const [step, setStep] = useState<Step>("EMAIL")
  const [data, setData] = useState<OnboardingData>({
    email: "", phonePrefix: "+39", phone: "", password: "", passwordConfirm: "", firstName: "", lastName: "", role: "",
    businessType: "", businessName: "", vatNumber: "", incorporationDate: "", otp: "", plan: "",
    billingCycle: "annual", startDate: "", discountCode: "", inviteCode: "", paymentMethod: "card", legalAccepted: false
  })

  useEffect(() => {
    if (search.plan) {
      setData(prev => ({ ...prev, plan: search.plan, billingCycle: search.billing === 'quarterly' ? 'quarterly' : 'annual' }))
    }
  }, [search])

  const updateData = (key: keyof OnboardingData, value: string | boolean) => setData(prev => ({ ...prev, [key]: value }))

  useEffect(() => {
    if (step === "EMAIL_CHECK") { const timer = setTimeout(() => setStep("EMAIL_CONFIRMED"), 2000); return () => clearTimeout(timer); }
  }, [step])

  useEffect(() => {
    if (step === "EMAIL_CONFIRMED") { const timer = setTimeout(() => setStep("PHONE"), 1500); return () => clearTimeout(timer); }
  }, [step])

  const prevStep = () => {
    switch (step) {
      case "EMAIL": return navigate({ to: "/login" })
      case "EMAIL_CHECK": return setStep("EMAIL")
      case "EMAIL_CONFIRMED": return setStep("EMAIL_CHECK")
      case "PHONE": return setStep("EMAIL") 
      case "PHONE_VERIFY": return setStep("PHONE")
      case "PASSWORD": return setStep("PHONE_VERIFY")
      case "NAME_DETAILS": return setStep("PASSWORD")
      case "BUSINESS_TYPE": return setStep("NAME_DETAILS")
      case "BUSINESS_DETAILS": return setStep("BUSINESS_TYPE")
      case "PLAN_SELECTION": return setStep("BUSINESS_DETAILS")
      case "START_DATE": return setStep("PLAN_SELECTION")
      case "SIGN_CONTRACT": return setStep("START_DATE")
      case "PAYMENT": return setStep("SIGN_CONTRACT")
      default: return navigate({ to: "/login" })
    }
  }

  const renderStep = () => {
    switch (step) {
      case "EMAIL":
        return (
          <div className="flex flex-col h-full w-full max-w-[360px] mx-auto justify-center pt-8 pb-12">
            {/* Logo Ida in Square Button non cliccabile per mantenere coerenza visiva */}
            <div className="flex justify-center mb-8">
              <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shadow-sm">
                <svg viewBox="0 0 422 319" className="h-6 w-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M223.338 0H187.854V176.839H223.338V0Z" fill="currentColor"/><path d="M35.4848 142.035H0V318.874H35.4848V142.035Z" fill="currentColor"/><path d="M422.001 219.262H386.492V318.873H422.001V219.262Z" fill="currentColor"/><path d="M414.694 188.479C407.571 171.609 395.736 157.294 380.816 147.161C373.391 142.125 365.176 138.119 356.36 135.387C347.603 132.596 338.244 131.139 328.585 131.139C316.201 131.139 304.306 133.568 293.438 138.001C292.529 138.361 291.686 138.723 290.843 139.15C281.06 143.457 272.12 149.525 264.454 156.748C261.977 159.112 259.624 161.601 257.265 164.392C253.102 169.185 248.815 174.708 244.645 180.289C243.802 181.438 242.894 182.653 242.051 183.809C239.757 186.962 217.832 219.243 213.969 225.008C212.035 227.917 209.741 231.194 207.263 234.773C206.721 235.562 206.12 236.415 205.518 237.262C201.408 243.147 196.82 249.338 192.592 254.801C190.481 257.527 188.364 260.075 186.553 262.202C184.684 264.383 182.992 266.143 181.782 267.298C176.593 272.21 170.49 276.216 163.791 278.947C157.086 281.679 149.779 283.196 142.048 283.196C136.735 283.196 131.604 282.466 126.775 281.133C124.298 280.464 121.88 279.616 119.527 278.585C109.137 274.212 100.261 266.812 94.0401 257.526C90.9029 252.857 88.4257 247.761 86.7339 242.298C85.1055 236.835 84.1393 231.075 84.1393 225.008C84.1393 216.937 85.7728 209.353 88.6678 202.372C93.079 191.938 100.444 183.08 109.685 176.768C114.332 173.61 119.403 171.186 124.84 169.486C130.271 167.785 136.009 166.82 142.048 166.82C149.779 166.879 157.086 168.337 163.791 171.063C170.49 173.853 176.593 177.799 181.782 182.712C182.992 183.867 184.684 185.686 186.553 187.813C189.814 191.635 193.677 196.547 197.546 201.709C199.055 203.771 200.565 205.833 202.074 207.954C207.871 199.463 218.014 184.536 223.327 176.827C222.425 175.612 221.517 174.404 220.614 173.189C218.196 170.09 215.779 167.121 213.367 164.39C210.949 161.599 208.655 159.11 206.178 156.746C197.846 148.853 188.004 142.424 177.194 137.998C166.326 133.566 154.426 131.136 142.048 131.136C129.186 131.136 116.867 133.749 105.639 138.542C88.8509 145.641 74.6563 157.533 64.5717 172.519C59.5597 179.985 55.5788 188.292 52.8011 197.092C50.0833 205.953 48.6328 215.297 48.6328 225.009C48.6328 237.932 51.2274 250.31 55.9398 261.533C63.0629 278.462 74.8984 292.725 89.7537 302.857C97.2429 307.894 105.458 311.893 114.273 314.684C123.03 317.416 132.389 318.874 142.049 318.874C154.427 318.874 166.327 316.444 177.195 312.018C188.005 307.586 197.788 301.156 206.121 293.329L206.179 293.269C208.656 290.964 210.95 288.411 213.368 285.62C217.531 280.826 221.818 275.309 225.987 269.727C226.831 268.572 227.739 267.416 228.582 266.267C230.876 263.049 260.892 218.816 263.364 215.237C263.912 214.449 264.514 213.602 265.114 212.749C269.225 206.924 273.813 200.673 278.041 195.216C280.152 192.484 282.269 189.936 284.08 187.815C285.949 185.628 287.642 183.868 288.85 182.713C294.04 177.801 300.143 173.854 306.843 171.064C308.476 170.4 310.104 169.856 311.796 169.304C317.109 167.729 322.723 166.881 328.585 166.822C336.616 166.88 344.224 168.457 351.105 171.431C361.49 175.798 370.372 183.199 376.587 192.484C379.73 197.159 382.206 202.255 383.893 207.712C385.586 213.175 386.493 218.94 386.493 225.008C386.493 233.079 384.86 240.723 381.965 247.637C377.554 258.072 370.188 266.996 360.948 273.241C356.301 276.399 351.23 278.888 345.793 280.523C340.42 282.224 334.624 283.197 328.585 283.197C320.854 283.197 313.547 281.68 306.842 278.948C300.143 276.216 294.039 272.211 288.85 267.298C287.64 266.143 285.948 264.324 284.079 262.203C280.818 258.44 276.95 253.463 273.086 248.308C271.519 246.245 270.008 244.118 268.499 241.997C268.015 242.725 267.532 243.455 266.989 244.243C257.024 258.926 250.743 268.211 247.304 273.242C248.206 274.456 249.115 275.612 250.017 276.827C252.435 279.92 254.853 282.895 257.264 285.62C259.623 288.41 261.977 290.964 264.453 293.269C272.785 301.156 282.628 307.586 293.437 312.018C304.306 316.444 316.2 318.874 328.584 318.874C341.445 318.874 353.765 316.266 364.934 311.532C381.781 304.374 395.97 292.482 406.06 277.491C411.067 270.031 415.117 261.776 417.83 252.918C420.55 244.118 422.001 234.715 422.001 225.009C422.001 212.086 419.407 199.708 414.694 188.479Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            
            <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 text-center tracking-tight">Crea un account</h2>
            <p className="text-zinc-400 text-[14px] mb-8 text-center">Inizia ora inserendo la tua email.</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input 
                  type="email" 
                  id="email"
                  className={inputClass}
                  placeholder="hello@ida-italia.com"
                  value={data.email}
                  onChange={(e) => updateData("email", e.target.value)}
                  autoFocus
                />
              </div>

              <ContinueButton onClick={() => setStep("EMAIL_CHECK")} disabled={!data.email}>
                Continua con Email
              </ContinueButton>

              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 border-t border-white/10"></div>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium">oppure</span>
                <div className="flex-1 border-t border-white/10"></div>
              </div>

              <div className="space-y-2.5">
                <button 
                  className="w-full flex items-center justify-center gap-2.5 h-[40px] rounded-md border border-white/10 bg-white/5 hover:bg-white/10 shadow-sm text-zinc-200 text-[14px] font-medium transition-colors"
                  onClick={() => window.location.href = "https://sso.revolut.com/signup"}
                >
                  <img src="https://assets.revolut.com/assets/icons/LogoGoogle.svg" alt="Google" className="w-[18px] h-[18px]" />
                  Continua con Google
                </button>

                <button 
                  className="w-full flex items-center justify-center gap-2.5 h-[40px] rounded-md border border-white/10 bg-white/5 hover:bg-white/10 shadow-sm text-zinc-200 text-[14px] font-medium transition-colors"
                >
                  <img src="https://assets.revolut.com/assets/icons/LogoIOs.svg" alt="Apple" className="w-[18px] h-[18px] invert opacity-90" />
                  Continua con Apple
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 text-center mt-6 pt-4 leading-relaxed">
                Procedendo, accetti i <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Termini di servizio</a>. 
                Dichiari di aver letto la nostra <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Privacy Policy</a>.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-[14px] text-zinc-400">
                  Hai già un account?{" "}
                  <Link to="/login" className="text-zinc-50 hover:text-blue-400 font-medium transition-colors">
                    Accedi
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )

      case "EMAIL_CHECK":
      case "EMAIL_CONFIRMED": {
        const isConfirmed = step === "EMAIL_CONFIRMED"
        return (
          <div className="flex flex-col h-full w-full items-center text-center justify-center max-w-[360px] mx-auto">
            <div className="flex items-center justify-center h-20 mb-2 relative w-full">
              <AnimatePresence mode="wait">
                {!isConfirmed ? (
                  /* LOGO IDA ANIMATO NEL BOTTONE QUADRATO */
                  <motion.div 
                    key="logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: [1, 1.05, 1], transition: { opacity: { duration: 0.3 }, scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shadow-sm absolute"
                  >
                    <svg viewBox="0 0 422 319" className="h-6 w-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M223.338 0H187.854V176.839H223.338V0Z" fill="currentColor"/><path d="M35.4848 142.035H0V318.874H35.4848V142.035Z" fill="currentColor"/><path d="M422.001 219.262H386.492V318.873H422.001V219.262Z" fill="currentColor"/><path d="M414.694 188.479C407.571 171.609 395.736 157.294 380.816 147.161C373.391 142.125 365.176 138.119 356.36 135.387C347.603 132.596 338.244 131.139 328.585 131.139C316.201 131.139 304.306 133.568 293.438 138.001C292.529 138.361 291.686 138.723 290.843 139.15C281.06 143.457 272.12 149.525 264.454 156.748C261.977 159.112 259.624 161.601 257.265 164.392C253.102 169.185 248.815 174.708 244.645 180.289C243.802 181.438 242.894 182.653 242.051 183.809C239.757 186.962 217.832 219.243 213.969 225.008C212.035 227.917 209.741 231.194 207.263 234.773C206.721 235.562 206.12 236.415 205.518 237.262C201.408 243.147 196.82 249.338 192.592 254.801C190.481 257.527 188.364 260.075 186.553 262.202C184.684 264.383 182.992 266.143 181.782 267.298C176.593 272.21 170.49 276.216 163.791 278.947C157.086 281.679 149.779 283.196 142.048 283.196C136.735 283.196 131.604 282.466 126.775 281.133C124.298 280.464 121.88 279.616 119.527 278.585C109.137 274.212 100.261 266.812 94.0401 257.526C90.9029 252.857 88.4257 247.761 86.7339 242.298C85.1055 236.835 84.1393 231.075 84.1393 225.008C84.1393 216.937 85.7728 209.353 88.6678 202.372C93.079 191.938 100.444 183.08 109.685 176.768C114.332 173.61 119.403 171.186 124.84 169.486C130.271 167.785 136.009 166.82 142.048 166.82C149.779 166.879 157.086 168.337 163.791 171.063C170.49 173.853 176.593 177.799 181.782 182.712C182.992 183.867 184.684 185.686 186.553 187.813C189.814 191.635 193.677 196.547 197.546 201.709C199.055 203.771 200.565 205.833 202.074 207.954C207.871 199.463 218.014 184.536 223.327 176.827C222.425 175.612 221.517 174.404 220.614 173.189C218.196 170.09 215.779 167.121 213.367 164.39C210.949 161.599 208.655 159.11 206.178 156.746C197.846 148.853 188.004 142.424 177.194 137.998C166.326 133.566 154.426 131.136 142.048 131.136C129.186 131.136 116.867 133.749 105.639 138.542C88.8509 145.641 74.6563 157.533 64.5717 172.519C59.5597 179.985 55.5788 188.292 52.8011 197.092C50.0833 205.953 48.6328 215.297 48.6328 225.009C48.6328 237.932 51.2274 250.31 55.9398 261.533C63.0629 278.462 74.8984 292.725 89.7537 302.857C97.2429 307.894 105.458 311.893 114.273 314.684C123.03 317.416 132.389 318.874 142.049 318.874C154.427 318.874 166.327 316.444 177.195 312.018C188.005 307.586 197.788 301.156 206.121 293.329L206.179 293.269C208.656 290.964 210.95 288.411 213.368 285.62C217.531 280.826 221.818 275.309 225.987 269.727C226.831 268.572 227.739 267.416 228.582 266.267C230.876 263.049 260.892 218.816 263.364 215.237C263.912 214.449 264.514 213.602 265.114 212.749C269.225 206.924 273.813 200.673 278.041 195.216C280.152 192.484 282.269 189.936 284.08 187.815C285.949 185.628 287.642 183.868 288.85 182.713C294.04 177.801 300.143 173.854 306.843 171.064C308.476 170.4 310.104 169.856 311.796 169.304C317.109 167.729 322.723 166.881 328.585 166.822C336.616 166.88 344.224 168.457 351.105 171.431C361.49 175.798 370.372 183.199 376.587 192.484C379.73 197.159 382.206 202.255 383.893 207.712C385.586 213.175 386.493 218.94 386.493 225.008C386.493 233.079 384.86 240.723 381.965 247.637C377.554 258.072 370.188 266.996 360.948 273.241C356.301 276.399 351.23 278.888 345.793 280.523C340.42 282.224 334.624 283.197 328.585 283.197C320.854 283.197 313.547 281.68 306.842 278.948C300.143 276.216 294.039 272.211 288.85 267.298C287.64 266.143 285.948 264.324 284.079 262.203C280.818 258.44 276.95 253.463 273.086 248.308C271.519 246.245 270.008 244.118 268.499 241.997C268.015 242.725 267.532 243.455 266.989 244.243C257.024 258.926 250.743 268.211 247.304 273.242C248.206 274.456 249.115 275.612 250.017 276.827C252.435 279.92 254.853 282.895 257.264 285.62C259.623 288.41 261.977 290.964 264.453 293.269C272.785 301.156 282.628 307.586 293.437 312.018C304.306 316.444 316.2 318.874 328.584 318.874C341.445 318.874 353.765 316.266 364.934 311.532C381.781 304.374 395.97 292.482 406.06 277.491C411.067 270.031 415.117 261.776 417.83 252.918C420.55 244.118 422.001 234.715 422.001 225.009C422.001 212.086 419.407 199.708 414.694 188.479Z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                    className="h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 absolute"
                  >
                    <Check className="w-7 h-7 text-white stroke-[3]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.h2 layout="position" className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">
              {isConfirmed ? "Email confermata" : "Controlla la tua email"}
            </motion.h2>
            <motion.p layout="position" className="text-zinc-400 text-[14px]">
              {isConfirmed ? (
                "Reindirizzamento in corso..."
              ) : (
                <>Abbiamo inviato un link di conferma a<br/><span className="text-zinc-200 font-medium">{data.email}</span></>
              )}
            </motion.p>
          </div>
        )
      }

      case "PHONE":
        return (
          <div className="flex flex-col h-full w-full max-w-[360px] mx-auto justify-center pt-8 pb-12">
            <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Numero di telefono</h2>
            <p className="text-zinc-400 text-[14px] mb-8">Ti invieremo un codice per verificare il tuo numero.</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className={labelClass}>Numero di telefono</label>
                <div className="flex gap-2">
                  {/* SELETTORE PREFISSO INTERNAZIONALE ALLARGATO E CORRETTO */}
                  <div className="relative flex items-center justify-center bg-white/5 border border-white/10 rounded-md text-[14px] text-zinc-300 min-w-[110px] w-[110px] focus-within:ring-1 focus-within:ring-blue-500/50 focus-within:border-blue-500/50 transition-all shadow-sm">
                    <select
                      value={data.phonePrefix}
                      onChange={(e) => updateData("phonePrefix", e.target.value)}
                      className="bg-transparent border-none text-zinc-50 outline-none w-full appearance-none cursor-pointer pl-3 pr-8 py-2"
                    >
                      <option value="+39" className="bg-zinc-900">🇮🇹 +39</option>
                      <option value="+1" className="bg-zinc-900">🇺🇸 +1</option>
                      <option value="+44" className="bg-zinc-900">🇬🇧 +44</option>
                      <option value="+33" className="bg-zinc-900">🇫🇷 +33</option>
                      <option value="+34" className="bg-zinc-900">🇪🇸 +34</option>
                      <option value="+49" className="bg-zinc-900">🇩🇪 +49</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>
                  <input 
                    type="tel" 
                    id="phone"
                    className={inputClass}
                    placeholder="340 123 4567"
                    value={data.phone}
                    onChange={(e) => updateData("phone", e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              <ContinueButton onClick={() => setStep("PHONE_VERIFY")} disabled={!data.phone} />
            </div>
          </div>
        )

      case "PHONE_VERIFY":
        return (
          <div className="flex flex-col h-full w-full max-w-[360px] mx-auto justify-center pt-8 pb-12">
            <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Codice di verifica</h2>
            <p className="text-zinc-400 text-[14px] mb-8">Inserisci il codice a 6 cifre inviato a {data.phonePrefix} {data.phone}</p>
            
            <div className="relative mb-6">
              <div className="flex gap-2 justify-between">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-12 h-14 rounded-md border bg-white/5 flex items-center justify-center text-xl font-medium transition-all ${data.otp.length === i ? "border-blue-500/50 ring-1 ring-blue-500/50" : "border-white/10 text-zinc-50"}`}>
                    {data.otp[i] || ""}
                  </div>
                ))}
              </div>
              
              <input 
                type="text" 
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                maxLength={6}
                value={data.otp}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '')
                  updateData("otp", val)
                  if (val.length === 6) setTimeout(() => setStep("PASSWORD"), 300)
                }}
                autoFocus
              />
            </div>

            <div className="text-center mt-2">
              <button className="text-blue-400 hover:text-blue-300 text-[13px] font-medium transition-colors">Invia di nuovo il codice</button>
            </div>
          </div>
        )

      case "PASSWORD":
        return (
          <div className="flex flex-col h-full w-full max-w-[360px] mx-auto justify-center pt-8 pb-12">
            <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Crea una password</h2>
            <p className="text-zinc-400 text-[14px] mb-8">Scegli una password sicura per il tuo account.</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className={labelClass}>Password</label>
                <input 
                  type="password" 
                  id="password"
                  className={inputClass}
                  placeholder="••••••••"
                  value={data.password}
                  onChange={(e) => updateData("password", e.target.value)}
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="passwordConfirm" className={labelClass}>Conferma Password</label>
                <input 
                  type="password" 
                  id="passwordConfirm"
                  className={inputClass}
                  placeholder="••••••••"
                  value={data.passwordConfirm}
                  onChange={(e) => updateData("passwordConfirm", e.target.value)}
                />
              </div>
              <ContinueButton 
                onClick={() => {
                  if (data.password === data.passwordConfirm && data.password.length > 0) setStep("NAME_DETAILS")
                  else alert("Le password non corrispondono")
                }}
                disabled={!data.password || !data.passwordConfirm}
              />
            </div>
          </div>
        )

      case "NAME_DETAILS":
        return (
          <div className="flex flex-col h-full w-full max-w-[360px] mx-auto justify-center pt-8 pb-12">
            <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">I tuoi dati</h2>
            <p className="text-zinc-400 text-[14px] mb-8">Inserisci i tuoi dati anagrafici e il tuo ruolo.</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className={labelClass}>Nome</label>
                <input type="text" id="firstName" className={inputClass} placeholder="Mario" value={data.firstName} onChange={(e) => updateData("firstName", e.target.value)} autoFocus />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>Cognome</label>
                <input type="text" id="lastName" className={inputClass} placeholder="Rossi" value={data.lastName} onChange={(e) => updateData("lastName", e.target.value)} />
              </div>
              <div>
                <label htmlFor="role" className={labelClass}>Ruolo aziendale</label>
                <input type="text" id="role" className={inputClass} placeholder="CEO, Founder, etc." value={data.role} onChange={(e) => updateData("role", e.target.value)} />
              </div>
              <ContinueButton onClick={() => setStep("BUSINESS_TYPE")} disabled={!data.firstName || !data.lastName || !data.role} />
            </div>
          </div>
        )

      case "BUSINESS_TYPE":
        return (
          <div className="flex flex-col h-full w-full max-w-[360px] mx-auto justify-center pt-8 pb-12">
            <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Tipo di azienda</h2>
            <p className="text-zinc-400 text-[14px] mb-8">Seleziona la struttura legale della tua azienda.</p>
            
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Struttura legale</label>
                <div className="relative">
                  <select
                    value={data.businessType}
                    onChange={(e) => updateData("businessType", e.target.value)}
                    className={cn(inputClass, "appearance-none cursor-pointer")}
                  >
                    <option value="" disabled hidden>Seleziona un'opzione...</option>
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-zinc-900 text-zinc-50">{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                </div>
              </div>
              <ContinueButton onClick={() => setStep("BUSINESS_DETAILS")} disabled={!data.businessType} />
            </div>
          </div>
        )

      case "BUSINESS_DETAILS":
        return (
          <div className="flex flex-col h-full w-full max-w-[360px] mx-auto justify-center pt-8 pb-12">
            <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Dettagli azienda</h2>
            <p className="text-zinc-400 text-[14px] mb-8">Parlaci della tua attività.</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="bizName" className={labelClass}>Ragione Sociale</label>
                <input type="text" id="bizName" className={inputClass} placeholder="Nome dell'azienda s.r.l." value={data.businessName} onChange={(e) => updateData("businessName", e.target.value)} autoFocus />
              </div>
              <div>
                <label htmlFor="vatNumber" className={labelClass}>Partita IVA / Codice Fiscale</label>
                <input type="text" id="vatNumber" className={inputClass} placeholder="IT0123456789" value={data.vatNumber} onChange={(e) => updateData("vatNumber", e.target.value)} />
              </div>
              <div>
                <label htmlFor="date" className={labelClass}>Data di costituzione</label>
                <input type="date" id="date" className={cn(inputClass, "cursor-pointer [&::-webkit-calendar-picker-indicator]:invert")} value={data.incorporationDate} onChange={(e) => updateData("incorporationDate", e.target.value)} />
              </div>
              <ContinueButton onClick={() => data.plan ? setStep("START_DATE") : setStep("PLAN_SELECTION")} disabled={!data.businessName || !data.vatNumber} />
            </div>
          </div>
        )

      case "PLAN_SELECTION":
        return (
          <div className="flex flex-col h-full w-full pt-8">
            <div className="flex flex-col items-center text-center mb-10 mt-6">
              <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Seleziona un piano</h2>
              <p className="text-zinc-400 text-[14px] mb-6">Scegli il piano adatto alle tue esigenze.</p>
              
              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-md border border-white/10">
                <button 
                  onClick={() => updateData("billingCycle", "annual")}
                  className={`px-6 py-1.5 text-[13px] font-medium rounded-sm transition-colors ${data.billingCycle === 'annual' ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  Annuale (Risparmia 30%)
                </button>
                <button 
                  onClick={() => updateData("billingCycle", "quarterly")}
                  className={`px-6 py-1.5 text-[13px] font-medium rounded-sm transition-colors ${data.billingCycle === 'quarterly' ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
                >
                  Trimestrale
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {PLANS.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`flex flex-col p-6 rounded-xl border transition-all duration-200 ${data.plan === plan.id ? 'bg-blue-500/10 border-blue-500/50' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                >
                  <div className="mb-6">
                    <h3 className="text-[16px] font-semibold text-zinc-50 mb-1">{plan.name}</h3>
                    <p className="text-[13px] text-zinc-400">{plan.desc}</p>
                  </div>
                  
                  <div className="mb-6">
                    {typeof plan.priceAnnual === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <Price amount={data.billingCycle === 'annual' ? plan.priceAnnual : (plan.priceQuarterly as number)} className="text-[24px] font-bold text-zinc-50" />
                        <span className="text-[13px] text-zinc-400">/{data.billingCycle === 'annual' ? 'anno' : 'trim.'}</span>
                      </div>
                    ) : (
                      <div className="text-[24px] font-bold text-zinc-50">Custom</div>
                    )}
                  </div>

                  <div className="flex-1 mb-8">
                    <ul className="flex flex-col gap-3 text-[13px] text-zinc-300">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className={`w-full py-2.5 text-[13px] rounded-md font-medium transition-colors mt-auto ${data.plan === plan.id ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    onClick={() => { updateData("plan", plan.id); setTimeout(() => setStep("START_DATE"), 300); }}
                  >
                    {data.plan === plan.id ? 'Selezionato' : 'Scegli ' + plan.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )

      case "START_DATE":
        return (
          <div className="flex flex-col h-full w-full pt-8">
            <div className="flex flex-col items-center text-center mb-10 mt-6">
              <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Quando vuoi iniziare?</h2>
              <p className="text-zinc-400 text-[14px]">Seleziona il mese in cui vuoi attivare il tuo abbonamento.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto w-full">
              {MONTHS.map((m) => (
                <button
                  key={m.label}
                  onClick={() => { updateData("startDate", m.label); setTimeout(() => setStep("SIGN_CONTRACT"), 300); }}
                  className={`p-4 rounded-xl border text-left transition-colors flex flex-col justify-between h-24 ${data.startDate === m.label ? 'bg-blue-500/10 border-blue-500/50' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                >
                  <span className="text-zinc-50 font-medium text-[14px]">{m.label}</span>
                  <span className="text-[12px] text-zinc-400">{m.spots} posti rimasti</span>
                </button>
              ))}
            </div>
          </div>
        )

      case "SIGN_CONTRACT":
        const selectedPlanForContract = PLANS.find(p => p.id === data.plan)
        return (
          <div className="flex flex-col h-full w-full pt-8">
            <div className="mb-10 text-center mt-6">
              <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Firma il contratto</h2>
              <p className="text-zinc-400 text-[14px]">Per procedere, firma digitalmente il contratto di servizio.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto w-full">
              {/* Summary Area */}
              <div className="w-full md:w-80 bg-white/5 border border-white/10 rounded-xl p-6 h-fit shrink-0">
                <h3 className="text-[16px] font-medium text-zinc-50 mb-4">Riepilogo</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-zinc-400 text-[14px]">Plan</span>
                    <span className="text-zinc-50 font-medium text-[14px]">{selectedPlanForContract?.name}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-zinc-400 text-[14px]">Prezzo</span>
                    <Price amount={(data.billingCycle === 'annual' ? selectedPlanForContract?.priceAnnual : selectedPlanForContract?.priceQuarterly) as any} className="text-zinc-50 font-medium text-[14px]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 text-[14px]">Inizio</span>
                    <span className="text-zinc-50 font-medium text-[14px]">{data.startDate}</span>
                  </div>
                </div>
              </div>

              {/* DocuSign Area */}
              <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <FileText className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-[18px] font-medium text-zinc-50 mb-2">Contratto di servizio</h3>
                <p className="text-zinc-400 mb-8 max-w-sm text-[14px] leading-relaxed">
                  Firma in modo sicuro e veloce con DocuSign. Riceverai anche una copia via email.
                </p>
                <button 
                  className="bg-[#FFCE00] hover:bg-[#FFCE00]/90 text-black font-medium py-3 px-8 rounded-md text-[14px] transition-colors"
                  onClick={() => { alert("Redirecting to DocuSign..."); setTimeout(() => setStep("PAYMENT"), 1000) }}
                >
                  Firma con DocuSign
                </button>
              </div>
            </div>
          </div>
        )

      case "PAYMENT":
        const planForPayment = PLANS.find(p => p.id === data.plan)
        return (
          <div className="flex flex-col h-full w-full pt-8">
            <div className="mb-10 text-center mt-6">
              <h2 className="text-[24px] font-semibold text-zinc-50 mb-1.5 tracking-tight">Pagamento</h2>
              <p className="text-zinc-400 text-[14px]">Inserisci i dettagli di pagamento per completare l'attivazione.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto w-full">
              {/* Order Summary */}
              <div className="w-full md:w-80 bg-white/5 border border-white/10 rounded-xl p-6 h-fit shrink-0">
                <h3 className="text-[16px] font-medium text-zinc-50 mb-4">Riepilogo ordine</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-zinc-400 text-[14px]">Plan</span>
                    <span className="text-zinc-50 font-medium text-[14px]">{planForPayment?.name}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-zinc-400 text-[14px]">Fatturazione</span>
                    <span className="text-zinc-50 font-medium text-[14px] capitalize">{data.billingCycle}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-zinc-400 text-[14px]">Inizio</span>
                    <span className="text-zinc-50 font-medium text-[14px]">{data.startDate}</span>
                  </div>
                  
                  <div className="pt-2 space-y-3">
                    <div className="space-y-1.5">
                      <label className="text-[12px] text-zinc-400">Codice sconto</label>
                      <div className="relative">
                        <input type="text" className={inputClass} value={data.discountCode} onChange={(e) => updateData("discountCode", e.target.value)} />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[12px] text-blue-400 font-medium hover:text-blue-300">Applica</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-zinc-500 text-[12px] mt-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Pagamento sicuro via Stripe</span>
                </div>
              </div>

              {/* Payment Form */}
              <div className="flex-1 space-y-6">
                <div className="flex gap-3">
                  <button 
                    className={`flex-1 py-3 rounded-md border flex flex-col items-center gap-2 transition-colors ${data.paymentMethod === 'card' ? 'bg-blue-500/10 border-blue-500/50 text-blue-400' : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/20'}`}
                    onClick={() => updateData('paymentMethod', 'card')}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="font-medium text-[13px]">Carta di credito</span>
                  </button>
                  <button 
                    className={`flex-1 py-3 rounded-md border flex flex-col items-center gap-2 transition-colors ${data.paymentMethod === 'sepa' ? 'bg-blue-500/10 border-blue-500/50 text-blue-400' : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/20'}`}
                    onClick={() => updateData('paymentMethod', 'sepa')}
                  >
                    <Building2 className="w-5 h-5" />
                    <span className="font-medium text-[13px]">Addebito SEPA</span>
                  </button>
                </div>

                {data.paymentMethod === 'card' ? (
                  <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
                    <div>
                      <label htmlFor="cardNumber" className={labelClass}>Numero carta</label>
                      <input type="text" id="cardNumber" className={inputClass} placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label htmlFor="expiry" className={labelClass}>Scadenza</label>
                        <input type="text" id="expiry" className={inputClass} placeholder="MM/AA" />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="cvc" className={labelClass}>CVC</label>
                        <input type="text" id="cvc" className={inputClass} placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cardName" className={labelClass}>Intestatario carta</label>
                      <input type="text" id="cardName" className={inputClass} placeholder="Nome sulla carta" />
                    </div>
                    
                    {/* BOTTONE PAGA CORRETTO (SENZA IMPORTO) E ALLINEATO */}
                    <div className="pt-2">
                      <ContinueButton onClick={() => setStep("DASHBOARD")}>
                        Conferma pagamento
                      </ContinueButton>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center space-y-6">
                    <div>
                      <Building2 className="w-10 h-10 text-zinc-400 mx-auto mb-4" />
                      <p className="text-[14px] text-zinc-300">Riceverai un'email con le istruzioni per impostare l'Addebito diretto SEPA in modo sicuro.</p>
                    </div>
                    
                    <div className="pt-2">
                      <ContinueButton onClick={() => setStep("DASHBOARD")}>
                        Conferma SEPA
                      </ContinueButton>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case "DASHBOARD":
        return (
          <div className="flex flex-col h-full w-full pt-12">
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto w-full">
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-[24px] font-semibold text-zinc-50 mb-2 uppercase tracking-wide">Account Creato</h2>
                  <p className="text-zinc-400 text-[14px]">Il tuo setup iniziale è completo. Benvenuto a bordo.</p>
                  <div className="h-1 w-24 bg-white/10 mt-6 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-blue-500 rounded-full" />
                  </div>
                </div>

                <div className="relative h-64 w-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-12 shadow-2xl border border-white/10 flex items-center justify-center">
                    <svg viewBox="0 0 422 319" className="w-24 h-auto fill-current text-white/50" xmlns="http://www.w3.org/2000/svg"><path d="M223.338 0H187.854V176.839H223.338V0Z" fill="currentColor"/><path d="M35.4848 142.035H0V318.874H35.4848V142.035Z" fill="currentColor"/><path d="M422.001 219.262H386.492V318.873H422.001V219.262Z" fill="currentColor"/><path d="M414.694 188.479C407.571 171.609 395.736 157.294 380.816 147.161C373.391 142.125 365.176 138.119 356.36 135.387C347.603 132.596 338.244 131.139 328.585 131.139C316.201 131.139 304.306 133.568 293.438 138.001C292.529 138.361 291.686 138.723 290.843 139.15C281.06 143.457 272.12 149.525 264.454 156.748C261.977 159.112 259.624 161.601 257.265 164.392C253.102 169.185 248.815 174.708 244.645 180.289C243.802 181.438 242.894 182.653 242.051 183.809C239.757 186.962 217.832 219.243 213.969 225.008C212.035 227.917 209.741 231.194 207.263 234.773C206.721 235.562 206.12 236.415 205.518 237.262C201.408 243.147 196.82 249.338 192.592 254.801C190.481 257.527 188.364 260.075 186.553 262.202C184.684 264.383 182.992 266.143 181.782 267.298C176.593 272.21 170.49 276.216 163.791 278.947C157.086 281.679 149.779 283.196 142.048 283.196C136.735 283.196 131.604 282.466 126.775 281.133C124.298 280.464 121.88 279.616 119.527 278.585C109.137 274.212 100.261 266.812 94.0401 257.526C90.9029 252.857 88.4257 247.761 86.7339 242.298C85.1055 236.835 84.1393 231.075 84.1393 225.008C84.1393 216.937 85.7728 209.353 88.6678 202.372C93.079 191.938 100.444 183.08 109.685 176.768C114.332 173.61 119.403 171.186 124.84 169.486C130.271 167.785 136.009 166.82 142.048 166.82C149.779 166.879 157.086 168.337 163.791 171.063C170.49 173.853 176.593 177.799 181.782 182.712C182.992 183.867 184.684 185.686 186.553 187.813C189.814 191.635 193.677 196.547 197.546 201.709C199.055 203.771 200.565 205.833 202.074 207.954C207.871 199.463 218.014 184.536 223.327 176.827C222.425 175.612 221.517 174.404 220.614 173.189C218.196 170.09 215.779 167.121 213.367 164.39C210.949 161.599 208.655 159.11 206.178 156.746C197.846 148.853 188.004 142.424 177.194 137.998C166.326 133.566 154.426 131.136 142.048 131.136C129.186 131.136 116.867 133.749 105.639 138.542C88.8509 145.641 74.6563 157.533 64.5717 172.519C59.5597 179.985 55.5788 188.292 52.8011 197.092C50.0833 205.953 48.6328 215.297 48.6328 225.009C48.6328 237.932 51.2274 250.31 55.9398 261.533C63.0629 278.462 74.8984 292.725 89.7537 302.857C97.2429 307.894 105.458 311.893 114.273 314.684C123.03 317.416 132.389 318.874 142.049 318.874C154.427 318.874 166.327 316.444 177.195 312.018C188.005 307.586 197.788 301.156 206.121 293.329L206.179 293.269C208.656 290.964 210.95 288.411 213.368 285.62C217.531 280.826 221.818 275.309 225.987 269.727C226.831 268.572 227.739 267.416 228.582 266.267C230.876 263.049 260.892 218.816 263.364 215.237C263.912 214.449 264.514 213.602 265.114 212.749C269.225 206.924 273.813 200.673 278.041 195.216C280.152 192.484 282.269 189.936 284.08 187.815C285.949 185.628 287.642 183.868 288.85 182.713C294.04 177.801 300.143 173.854 306.843 171.064C308.476 170.4 310.104 169.856 311.796 169.304C317.109 167.729 322.723 166.881 328.585 166.822C336.616 166.88 344.224 168.457 351.105 171.431C361.49 175.798 370.372 183.199 376.587 192.484C379.73 197.159 382.206 202.255 383.893 207.712C385.586 213.175 386.493 218.94 386.493 225.008C386.493 233.079 384.86 240.723 381.965 247.637C377.554 258.072 370.188 266.996 360.948 273.241C356.301 276.399 351.23 278.888 345.793 280.523C340.42 282.224 334.624 283.197 328.585 283.197C320.854 283.197 313.547 281.68 306.842 278.948C300.143 276.216 294.039 272.211 288.85 267.298C287.64 266.143 285.948 264.324 284.079 262.203C280.818 258.44 276.95 253.463 273.086 248.308C271.519 246.245 270.008 244.118 268.499 241.997C268.015 242.725 267.532 243.455 266.989 244.243C257.024 258.926 250.743 268.211 247.304 273.242C248.206 274.456 249.115 275.612 250.017 276.827C252.435 279.92 254.853 282.895 257.264 285.62C259.623 288.41 261.977 290.964 264.453 293.269C272.785 301.156 282.628 307.586 293.437 312.018C304.306 316.444 316.2 318.874 328.584 318.874C341.445 318.874 353.765 316.266 364.934 311.532C381.781 304.374 395.97 292.482 406.06 277.491C411.067 270.031 415.117 261.776 417.83 252.918C420.55 244.118 422.001 234.715 422.001 225.009C422.001 212.086 419.407 199.708 414.694 188.479Z" fill="currentColor"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="space-y-3">
                  {[
                    { icon: MapPin, title: "Indirizzo aziendale", status: "Azione richiesta", color: "text-orange-400" },
                    { icon: Building2, title: "Natura dell'azienda", status: "Azione richiesta", color: "text-orange-400" },
                    { icon: FileText, title: "Dettagli aziendali", status: "Completato", color: "text-green-400" },
                    { icon: User, title: "Struttura societaria", status: "Azione richiesta", color: "text-orange-400" },
                    { icon: ShieldCheck, title: "Identità personale", status: "Azione richiesta", color: "text-orange-400" },
                    { icon: CreditCard, title: "Piano e carta", status: "Completato", color: "text-green-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl cursor-pointer group border border-white/10">
                      <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <item.icon className="w-4 h-4 text-zinc-300 group-hover:text-zinc-50 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-zinc-50 font-medium text-[14px]">{item.title}</h3>
                        <p className={`text-[12px] mt-0.5 ${item.color}`}>{item.status}</p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-zinc-500 -rotate-90 group-hover:text-zinc-300 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  const isWideStep = ["PLAN_SELECTION", "START_DATE", "SIGN_CONTRACT", "PAYMENT", "DASHBOARD"].includes(step)

  return (
    <div className="dark">
      {/* SFONDO FISSATO */}
      <div className="fixed inset-0 w-full h-[100dvh] z-0 pointer-events-none bg-black">
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

      {/* CONTENITORE SCROLLABILE */}
      <div className="relative z-10 h-[100dvh] w-full overflow-y-auto overflow-x-hidden text-zinc-50 font-sans selection:bg-blue-500/30 m-0 p-0 flex flex-col">
        
        {/* Pulsante Indietro FISSO IN ALTO A SINISTRA */}
        <div className="absolute top-6 left-6 z-50">
          {step !== "DASHBOARD" && (
            <button onClick={prevStep} className="hover:opacity-70 transition-opacity group flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
            </button>
          )}
        </div>
  
        {/* Area Contenuto Principale */}
        <div className={`w-full mx-auto px-6 pb-12 flex-1 flex flex-col transition-[max-width] duration-500 ease-in-out ${isWideStep ? 'max-w-6xl' : 'max-w-[480px]'}`}>
          <div className="flex-1 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={(step === "EMAIL_CHECK" || step === "EMAIL_CONFIRMED") ? "EMAIL_VERIFICATION" : step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col pt-12" /* Aggiunto pt-12 per non sovrapporsi alla freccia absolute */
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}