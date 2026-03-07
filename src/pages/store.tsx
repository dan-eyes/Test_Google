import { Link } from "@tanstack/react-router"
import { Button, Text, Heading, clx } from "@medusajs/ui"
import { Price } from "@/components/ui/price"

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  handle: `prodotto-${i}`,
  title: `Prodotto Artigianale ${i + 1}`,
  price: 120 + i * 10,
  image: `https://picsum.photos/seed/ida${i}/400/500`
}))

export function Store() {
  return (
    <div className="content-container py-16 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex justify-between items-center mb-12">
        <Heading level="h1">Catalogo Prodotti</Heading>
        <Text size="small" className="text-ui-fg-muted">{products.length} prodotti</Text>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.handle}`} className="group flex flex-col gap-4">
            <div className="aspect-[29/34] overflow-hidden bg-ui-bg-subtle relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Text weight="plus" className="text-ui-fg-base group-hover:underline underline-offset-4">{product.title}</Text>
              <Price amount={product.price} className="text-sm text-ui-fg-subtle" />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="secondary" size="large">Carica Altri</Button>
      </div>
    </div>
  )
}
