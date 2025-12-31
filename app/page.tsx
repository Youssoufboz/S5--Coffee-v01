import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Users, Sparkles, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-accent/30">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-latte.png"
            alt="Artisan latte art with palm fronds"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-sans text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            مرحبا بك في
            <br />
            S58 Coffee
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            أفضل قهوة في الرياض | سلوى - مفتوح من 12 ظهرا الى 5 صباحا يوميا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" className="text-base">
              <Link href="/menu">
                عرض القائمة
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="/location">زيارتنا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Coffee,
                title: "قهوة عالية الجودة",
                description: "قهوة مختارة بعناية من أفضل المحاصيل",
              },
              {
                icon: Heart,
                title: "صنعت بحب",
                description: "كل فنجان صنع بشغف واهتمام",
              },
              {
                icon: Users,
                title: "مقهى مريح",
                description: "مكان مريح للاسترخاء والقاء",
              },
              {
                icon: Sparkles,
                title: "خدمة ممتازة",
                description: "خدمة سريعة واحترافية كل يوم",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-balance">قهوة بحرفية عالية</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                في S58 Coffee نؤمن أن القهوة الرائعة تبدأ بحبوب رائعة. فريق باريستا خبير يحول كل حبة قهوة إلى تجربة استثنائية، ويجمع بين التقنيات التقليدية والابتكار الحديث.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                من لاتيه التوقيع لدينا إلى مشروبات الإسبريسو المصنوعة يدويا، كل مشروب هو شهادة على التزامنا بالجودة والطعم.
              </p>
              <Button asChild size="lg">
                <Link href="/about">
                  قصتنا
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/coffee-pastries-1.webp"
                alt="Coffee and pastries presentation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-balance">زيارتنا اليوم</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            اختبر دفء مقهانا وثراء قهوتنا. نحن مفتوحون يوميا من 12 ظهرا الى 5 صباحا ومستعدون لخدمتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
            >
              <Link href="/location">
                موقعنا
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
            >
              <Link href="/menu">القائمة</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
