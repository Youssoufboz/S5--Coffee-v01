import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Menu - S58 Coffee",
  description: "Explore our selection of artisan coffee, beverages, and fresh pastries",
}

const menuCategories = [
  {
    title: "DRINKS | المشروبات",
    description: "Hot & Cold Beverages | المشروبات الساخنة والباردة",
    items: [
      { name: "Espresso | اسبريسو", price: "15 SR", description: "Pure espresso shot" },
      { name: "Cortado | كورتادو", price: "15 SR", description: "Espresso with warm milk" },
      { name: "Americano | امريكانو", price: "15 SR", description: "Espresso with hot water" },
      { name: "Flat White | فلات وايت", price: "16 SR", description: "Rich espresso with microfoam", popular: true },
      { name: "Cappuccino | كابتشينو", price: "17 SR", description: "Espresso, steamed milk, and foam" },
      { name: "Latte | لاتيه", price: "17 SR", description: "Espresso with steamed milk", popular: true },
      { name: "Cloud Latte | سحاب لاتيه", price: "19 SR", description: "Light and fluffy latte" },
      { name: "Americano | امريكانو", price: "19 SR", description: "Double espresso with hot water" },
      { name: "Pistachio Latte | بستاشيو لاتيه", price: "19 SR", description: "Creamy pistachio flavored latte", popular: true },
      { name: "Black Coffee | بلاك كوفي", price: "20 SR", description: "Premium black coffee" },
      { name: "Mocha | قهوة مقهرة", price: "20 SR", description: "Espresso, chocolate, and milk" },
      { name: "Tea | كوب شاي", price: "5 SR", description: "Hot tea selection" },
      { name: "Herbs Tea | أرغل شاي", price: "15 SR", description: "Herbal tea blend" },
      { name: "Saudi Coffee | دالة قهوة سعودية", price: "20 SR", description: "Traditional Saudi style coffee" },
      { name: "Saudi Coffee Cup | كوب قهوة سعودية", price: "5 SR", description: "Single cup Saudi coffee" },
    ],
  },
  {
    title: "SMOOTHIES | الموشيو",
    description: "Fresh blended drinks | مشروبات الموشيو الطازجة",
    items: [
      { name: "Red/Blue Mojito | موهيتو أحمر / أزرق", price: "20 SR", description: "Refreshing fruit mojito", popular: true },
      { name: "Mixed Mojito | موهيتو سين", price: "22 SR", description: "Mixed berry mojito" },
      { name: "Saffron Cake | كيكة الزعفران", price: "20 SR", description: "Saffron flavored smoothie" },
      { name: "Cheese Cake | تشيز كيك", price: "20 SR", description: "Cheesecake flavor smoothie" },
      { name: "Water | ماء", price: "1 SR", description: "Bottled water" },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-sans text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Carefully curated selections of premium coffee and artisan pastries
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-8">
                  <h2 className="font-sans text-3xl font-bold mb-2">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          {item.popular && (
                            <Badge variant="secondary" className="ml-2">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-2xl font-sans font-bold text-primary">
                          {item.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            S58 Coffee | قهوة S58 | Open 12 PM - 5 AM | من 12 م الى 5 ص
          </p>
        </div>
      </section>
    </div>
  )
}
