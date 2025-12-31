"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We'll be in touch soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-sans text-5xl md:text-6xl font-bold mb-4">Visit Us</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Find us, call us, or drop by for your daily coffee fix
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background">
        <div className="w-full h-[400px] bg-muted relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9523053265357!2d46.67252932346932!3d24.768516877376563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e46fd800c91f23b%3A0x89c80e8524dd71db!2sS58%20Coffee!5e0!3m2!1sar!2ssa!4v1704063600000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="S58 Coffee Location"
          />
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-sans text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you have a question, want to make a reservation, or just want to say hello, we'd love to hear
                  from you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-sans text-lg font-semibold mb-2">Address | العنوان</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          شارع الكورنيش
                          <br />
                          سلوى، الرياض
                          <br />
                          المملكة العربية السعودية 36620
                        </p>
                        <a 
                          href="https://maps.app.goo.gl/s58coffee"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm mt-2 inline-block"
                        >
                          Open in Maps
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-sans text-lg font-semibold mb-2">Phone</h3>
                        <a
                          href="tel:+61412345678"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          +61 412 345 678
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-sans text-lg font-semibold mb-2">Snapchat</h3>
                        <a
                          href="https://snapchat.com/t/nYyC3xxE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline break-all"
                        >
                          @s58coffee
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-sans text-lg font-semibold mb-3">Working Hours | أوقات العمل</h3>
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Every Day</span>
                            <span className="font-medium">12:00 PM - 5:00 AM</span>
                          </div>
                          <p className="text-xs mt-4">من 12 م الى 5 ص</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-sans text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+61 412 345 678"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
