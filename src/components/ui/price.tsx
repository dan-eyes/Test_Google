import * as React from "react"
import { clx } from "@medusajs/ui"

interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number
  currencyCode?: string
  className?: string
}

export function Price({ amount, currencyCode = "EUR", className, ...props }: PriceProps) {
  const formattedPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
  }).format(amount)

  return (
    <div className={clx("text-ui-fg-base font-medium", className)} {...props}>
      {formattedPrice}
    </div>
  )
}
