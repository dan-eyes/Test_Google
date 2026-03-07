import { useState } from "react"
import { Button, Text, Heading, Container, clx } from "@medusajs/ui"
import { CheckMini } from "@medusajs/icons"
import { Price } from "@/components/ui/price"
import { Link } from "@tanstack/react-router"

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Standard",
      desc: "Per iniziare",
      priceAnnual: 0,
      priceQuarterly: 0,
      features: ["Funzionalità Complete", "Fee sul transato 15%", "1 Paese EU"],
      cta: "Inizia Gratis"
    },
    {
      name: "Plus",
      desc: "Micro Imprese",
      priceAnnual: 630,
      priceQuarterly: 210,
      features: ["Funzionalità Complete", "Fee sul transato 6%", "3 Paesi EU", "+ €129 aggiunta paese EU"],
      cta: "Scegli Plus"
    },
    {
      name: "Premium",
      desc: "Piccole Imprese",
      priceAnnual: 1365,
      priceQuarterly: 650,
      features: ["Funzionalità Complete", "Fee sul transato 4%", "Tutti EU + 3 Extra-EU", "+ €189 aggiunta Extra-EU"],
      cta: "Scegli Premium"
    },
    {
      name: "Ultra",
      desc: "Medie Imprese",
      priceAnnual: 3360,
      priceQuarterly: 1600,
      features: ["Funzionalità Complete", "Fee sul transato 2%", "Tutti i Paesi (Global)"],
      cta: "Scegli Ultra"
    },
    {
      name: "Enterprise",
      desc: "Grandi Imprese",
      priceAnnual: "Custom",
      priceQuarterly: "Custom",
      features: ["Soluzione personalizzata per le massime esigenze"],
      cta: "Contattaci"
    }
  ]

  return (
    <div className="content-container py-24 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex flex-col items-center text-center mb-16">
        <Heading level="h1" className="text-4xl md:text-5xl mb-6">
          Piani flessibili per ogni dimensione di business.
        </Heading>
        
        <div className="flex items-center gap-4 bg-ui-bg-subtle p-1 rounded-md border border-ui-border-base mb-4">
          <button 
            onClick={() => setIsAnnual(true)}
            className={clx(
              "px-6 py-2 text-sm font-medium rounded-sm transition-all duration-150 ease-out",
              isAnnual 
                ? "bg-ui-bg-base shadow-elevation-card-rest border border-ui-border-base text-ui-fg-base" 
                : "text-ui-fg-subtle hover:text-ui-fg-base"
            )}
          >
            Annuale (Risparmio 30%)
          </button>
          <button 
            onClick={() => setIsAnnual(false)}
            className={clx(
              "px-6 py-2 text-sm font-medium rounded-sm transition-all duration-150 ease-out",
              !isAnnual 
                ? "bg-ui-bg-base shadow-elevation-card-rest border border-ui-border-base text-ui-fg-base" 
                : "text-ui-fg-subtle hover:text-ui-fg-base"
            )}
          >
            Quarterly
          </button>
        </div>
        <Text size="small" className="text-ui-fg-muted">Tutti i prezzi sono IVA esclusa</Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {plans.map((plan) => (
          <Container key={plan.name} className="flex flex-col p-8 hover:bg-ui-bg-subtle transition-colors duration-150 ease-out h-full">
            <div className="mb-8">
              <Heading level="h3" className="mb-2">{plan.name}</Heading>
              <Text size="small" className="text-ui-fg-subtle">{plan.desc}</Text>
            </div>
            
            <div className="mb-8 flex-1">
              {typeof plan.priceAnnual === 'number' ? (
                <div className="flex items-baseline gap-1">
                  <Price amount={isAnnual ? plan.priceAnnual : (plan.priceQuarterly as number)} className="text-3xl font-bold text-ui-fg-base" />
                  <Text size="small" className="text-ui-fg-muted">/{isAnnual ? 'anno' : 'quarter'}</Text>
                </div>
              ) : (
                <Heading level="h2" className="text-3xl">Custom</Heading>
              )}
            </div>

            <div className="flex-1 mb-8">
              <ul className="flex flex-col gap-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckMini className="text-ui-fg-base shrink-0" />
                    <Text size="small" className="text-ui-fg-subtle">{feature}</Text>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              to="/onboarding"
              search={{ plan: plan.name.toLowerCase(), billing: isAnnual ? 'annual' : 'quarterly' }}
              className="w-full mt-auto"
            >
              <Button 
                variant={plan.name === 'Plus' ? 'primary' : 'secondary'} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Link>
          </Container>
        ))}
      </div>
    </div>
  )
}
