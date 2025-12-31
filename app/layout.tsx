import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "S58 Coffee - أفضل قهوة في الرياض",
  description:
    "S58 Coffee في سلوى، الرياض. قهوة عالية الجودة مفتوح من 12 ظهرا الى 5 صباحا. Premium artisan coffee 12 PM - 5 AM daily.",
  keywords: ["coffee shop", "S58 Coffee", "قهوة", "Riyadh", "Salwa", "سلوى", "specialty coffee", "Snapchat"],
  openGraph: {
    title: "S58 Coffee - Artisan Coffee Shop & Café",
    description: "Experience exceptional coffee and pastries in a warm, inviting atmosphere.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/images/logo.png",
      },
    ],
  },
}

export const viewport = {
  themeColor: "#6B4423",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-mono antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
