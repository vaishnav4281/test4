"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container text-center">
          <Badge className="mb-4 px-3 py-1 text-sm bg-primary/20 text-primary border-primary/20">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Ready to secure your future? Contact us today for expert financial advice and personalized solutions.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose the most convenient way to reach us. We're here to help you with all your insurance and loan
                needs.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                        <p className="text-muted-foreground mb-2">Available 24/7 for your queries</p>
                        <Link href="tel:+919447218188" className="text-primary hover:underline font-medium">
                          +91 9447218188
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                        <p className="text-muted-foreground mb-2">We'll respond within 24 hours</p>
                        <Link href="mailto:satheeshk8188@gmail.com" className="text-primary hover:underline font-medium">
                          satheeshk8188@gmail.com
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                        <p className="text-muted-foreground mb-2">Our office location</p>
                        <p className="text-primary font-medium">
                          Kozhikode, Kerala, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground mb-2">When we're available</p>
                        <p className="text-primary font-medium">
                          Monday - Saturday: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* WhatsApp Connection */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Connect on WhatsApp</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get instant answers to your queries. Chat with us directly on WhatsApp for quick assistance.
              </p>

              <Card className="bg-[#25D366]/5 border-[#25D366]/20 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#25D366]/30 animate-pulse">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Chat with Satheesan Koroth</h3>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Click the button below to start a WhatsApp conversation. We are available to help you with policy details, premium payments, and claims.
                  </p>
                  <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 h-14 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                    <Link href="https://wa.me/919447218188" target="_blank">
                      <Phone className="mr-2 h-5 w-5" />
                      Open WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Visit our office to discuss your financial needs in person. We're located in the heart of Kozhikode.
          </p>

          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.2747559850997!2d75.7797!3d11.2587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x4f7dcc9f8c6b3b3e!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

