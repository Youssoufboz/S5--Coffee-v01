import Image from "next/image"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Gallery - S58 Coffee",
  description: "Explore our café, drinks, and the S58 Coffee experience through photos",
}

const galleryImages = [
  {
    src: "/images/hero-latte.png",
    alt: "Barista creating latte art",
    category: "Drinks",
  },
  {
    src: "/images/coffee-pastries-1.webp",
    alt: "Latte with tiramisu",
    category: "Drinks & Food",
  },
  {
    src: "/images/coffee-pastries-2.webp",
    alt: "Coffee and pastries display",
    category: "Drinks & Food",
  },
  {
    src: "/images/interior.webp",
    alt: "Cozy café interior",
    category: "Interior",
  },
  {
    src: "/barista-making-espresso-in-coffee-shop.jpg",
    alt: "Barista preparing espresso",
    category: "Behind the Scenes",
  },
  {
    src: "/cappuccino-with-heart-latte-art-on-wooden-table.jpg",
    alt: "Cappuccino with heart design",
    category: "Drinks",
  },
  {
    src: "/coffee-shop-counter-pastries.png",
    alt: "Display counter with fresh pastries",
    category: "Interior",
  },
  {
    src: "/pour-over-coffee-brewing-process.jpg",
    alt: "Pour over coffee being prepared",
    category: "Behind the Scenes",
  },
  {
    src: "/croissant-and-coffee-on-cafe-table.jpg",
    alt: "Fresh croissant with coffee",
    category: "Drinks & Food",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-sans text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Experience the ambiance, artistry, and passion behind S58 Coffee
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{image.category}</p>
                      <p className="text-white/80 text-xs mt-1">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sans text-3xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Join our community on Instagram for daily inspiration, behind-the-scenes moments, and exclusive updates.
          </p>
          <a
            href="https://instagram.com/s58coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary hover:text-primary/80 font-medium text-lg transition-colors"
          >
            @s58coffee
          </a>
        </div>
      </section>
    </div>
  )
}
