import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Award, Users } from "lucide-react"

export const metadata = {
  title: "About Us - S58 Coffee",
  description: "Learn about our story, values, and the passionate team behind S58 Coffee",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-sans text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            A passion for coffee, a commitment to community
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image src="/images/interior.webp" alt="S58 Coffee interior" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-sans text-4xl font-bold">The Beginning</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2018, S58 Coffee began with a simple dream: to create a space where exceptional coffee meets
                genuine hospitality. Our founders, both coffee enthusiasts and community builders, saw an opportunity to
                bring artisan coffee culture to our neighborhood.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our first espresso shot to today, we've remained committed to sourcing the finest beans, perfecting
                our craft, and creating an atmosphere where everyone feels welcome. Every detail, from our brewing
                methods to our interior design, reflects our dedication to quality and warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Coffee,
                title: "Quality First",
                description: "We never compromise on the quality of our beans, ingredients, or service",
              },
              {
                icon: Heart,
                title: "Sustainability",
                description: "Ethically sourced, environmentally conscious practices in everything we do",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building connections and creating a welcoming space for all",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Continuous improvement and dedication to the craft of coffee",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate baristas and coffee experts dedicated to your experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & Head Barista",
                bio: "15 years of coffee expertise, SCAA certified, passionate about latte art",
              },
              {
                name: "Marcus Rodriguez",
                role: "Coffee Roaster",
                bio: "Master roaster with a keen palate, sources our beans from around the world",
              },
              {
                name: "Emily Thompson",
                role: "Pastry Chef",
                bio: "Classically trained baker bringing fresh, creative treats daily",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4" />
                  <h3 className="font-sans text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-sans text-4xl font-bold mb-4">Our Coffee Sourcing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner directly with sustainable farms across the globe to bring you exceptional beans
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-sans text-2xl font-semibold">Colombia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sweet, balanced beans from the high-altitude regions of Huila and Nariño
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-sans text-2xl font-semibold">Ethiopia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fruity, floral notes from the birthplace of coffee in Yirgacheffe
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-sans text-2xl font-semibold">Guatemala</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rich, chocolatey flavors from volcanic soil-grown beans in Antigua
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-sans text-2xl font-semibold">Brazil</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nutty, smooth profiles from sustainable farms in Minas Gerais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
