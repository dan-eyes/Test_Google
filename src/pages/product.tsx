import { useState } from "react"
import { useParams } from "@tanstack/react-router"
import { Button, Text, Heading, clx } from "@medusajs/ui"
import { Price } from "@/components/ui/price"
import { ChevronLeft, ChevronRight } from "@medusajs/icons"

export function Product() {
  const { handle } = useParams({ strict: false })
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    `https://picsum.photos/seed/${handle}1/800/1000`,
    `https://picsum.photos/seed/${handle}2/800/1000`,
    `https://picsum.photos/seed/${handle}3/800/1000`
  ]

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="content-container py-16 md:py-24 animate-in fade-in slide-in-from-bottom-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="relative aspect-[4/5] bg-ui-bg-subtle overflow-hidden group">
          <img 
            src={images[currentImage]} 
            alt="Product" 
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ui-bg-base/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-ui-bg-base shadow-elevation-card-rest"
          >
            <ChevronLeft className="text-ui-fg-base" />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ui-bg-base/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-ui-bg-base shadow-elevation-card-rest"
          >
            <ChevronRight className="text-ui-fg-base" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={clx(
                  "w-2 h-2 rounded-full transition-colors",
                  idx === currentImage ? "bg-ui-fg-base" : "bg-ui-bg-component"
                )}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <div>
            <Heading level="h1" className="mb-2 capitalize">
              {handle?.replace(/-/g, ' ') || 'Prodotto Artigianale'}
            </Heading>
            <Price amount={149} className="text-xl text-ui-fg-subtle" />
          </div>

          <div className="prose prose-sm text-ui-fg-subtle">
            <Text>
              Realizzato a mano in Italia con materiali di altissima qualità. 
              Questo prodotto rappresenta l'eccellenza del Made in Italy, 
              combinando tradizione artigianale e design contemporaneo.
            </Text>
          </div>

          <div className="flex flex-col gap-4">
            <Text weight="plus" className="text-ui-fg-base">Variante</Text>
            <div className="flex gap-2">
              {['S', 'M', 'L'].map(size => (
                <button key={size} className="w-12 h-12 border border-ui-border-base flex items-center justify-center text-sm hover:border-ui-fg-base transition-colors text-ui-fg-subtle hover:text-ui-fg-base">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-ui-border-base">
            <Button variant="primary" size="large" className="w-full">
              Aggiungi al carrello
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
