import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">S58 Coffee</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Crafting exceptional coffee experiences since 2018. Every cup tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8am - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">Subscribe for exclusive offers and updates</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="secondary" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">© 2025 S58 Coffee. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
