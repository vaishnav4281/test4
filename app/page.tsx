"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Star, CheckCircle2, Building, Heart, LineChart, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"

const services = [
  {
    title: "Life Insurance",
    description: "Comprehensive life insurance solutions to protect your family's future",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Health Insurance",
    description: "Protect yourself and your family with comprehensive health coverage",
    icon: Heart,
    color: "text-rose-600",
    bgColor: "bg-rose-50"
  },
  {
    title: "Investment Plans",
    description: "Secure your financial future with our investment solutions",
    icon: LineChart,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Property Services",
    description: "Complete assistance for all your property-related needs",
    icon: Building,
    color: "text-violet-600",
    bgColor: "bg-violet-50"
  }
]

const stats = [
  { label: "LIC Policies Sold", value: "1000+" },
  { label: "Years Experience", value: "20+" },
  { label: "Claims Settled", value: "₹100Cr+" },
  { label: "Happy Clients", value: "5000+" }
]

const popularPolicies = [
  {
    name: "LIC Jeevan Anand",
    description: "A participating non-linked plan that offers financial protection against death throughout the lifetime of the policyholder.",
    features: [
      "Death Benefit",
      "Maturity Benefit",
      "Bonus",
      "Loan Facility"
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "LIC Tech Term",
    description: "A pure term insurance plan that provides financial protection to your family at an affordable premium.",
    features: [
      "High Sum Assured",
      "Affordable Premium",
      "Flexible Term",
      "Tax Benefits"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "LIC Jeevan Labh",
    description: "A limited premium paying, non-linked, with-profits endowment plan that offers a combination of protection and savings.",
    features: [
      "Limited Premium Payment",
      "Guaranteed Additions",
      "Maturity Benefit",
      "Death Benefit"
    ],
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>

          {/* Animated Blobs */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] animate-float"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="space-y-8 lg:space-y-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-900/20">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-blue-100 tracking-wider uppercase">#1 LIC Advisor in Kozhikode</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                Protecting Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 animate-gradient-x">Family's Future</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl font-light border-l-2 border-blue-500/50 pl-6">
                Expert financial planning and insurance solutions tailored to your life goals. Secure peace of mind with Kerala's most trusted LIC advisor.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 h-16 rounded-2xl shadow-xl shadow-blue-600/20 transition-all hover:scale-105 hover:shadow-blue-600/40 text-lg border-t border-white/10">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-900 font-bold px-8 h-16 rounded-2xl backdrop-blur-md transition-all hover:scale-105 hover:border-white text-lg shadow-lg">
                  <Link href="https://wa.me/919447218188" target="_blank">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-10 border-t border-white/5 flex flex-wrap items-center gap-x-12 gap-y-6">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">20+</p>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">5k+</p>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Happy Families</p>
                </div>
                <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">₹100Cr</p>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Claims Settled</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:h-[700px] flex items-center justify-center perspective-1000">
              <div className="relative w-full max-w-[500px] aspect-[4/5] transform transition-transform duration-700 hover:rotate-y-2">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2.5rem] opacity-30 blur-2xl animate-pulse"></div>

                {/* Main Image Card */}
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Satheesan Koroth - LIC Agent"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                  {/* Floating Card Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/40">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">Satheesan Koroth</p>
                          <p className="text-blue-200 text-sm">Senior LIC Advisor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-12 blur-xl opacity-40 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-slate-900 to-blue-950 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{stat.value}</div>
                  <div className="text-blue-200/80 font-medium text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-100 to-transparent"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6 text-slate-900 tracking-tight">Comprehensive Insurance Solutions</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Tailored financial strategies designed to protect what matters most to you and secure your family's future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="h-full border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group bg-white overflow-hidden relative hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${service.bgColor.replace('bg-', 'bg-gradient-to-r from-transparent via-')}${service.color.replace('text-', 'to-')}`}></div>
                  <CardHeader className="pt-8">
                    <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pb-8">
                    <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-wide">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Policies Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-1/2"></div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">Featured Plans</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-8 text-slate-900 tracking-tight">Popular LIC Policies</h2>
              <p className="text-lg text-slate-600 mt-6 font-light leading-relaxed">
                Choose from our range of popular LIC policies designed to meet your specific financial goals and life stages.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 font-bold px-6 h-12 rounded-xl transition-all">
              <Link href="/policies">View All Policies</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {popularPolicies.map((policy, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <Image
                      src={policy.image}
                      alt={policy.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-wider shadow-lg">Recommended</span>
                      <h3 className="text-white font-bold text-2xl drop-shadow-md">{policy.name}</h3>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-slate-600 mb-8 leading-relaxed">{policy.description}</p>
                    <ul className="space-y-4 mb-8 flex-1">
                      {policy.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-700 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold h-14 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02]">
                      <Link href="/contact">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button asChild variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-200">
              <Link href="/policies">View All Policies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Ready to Secure Your <span className="text-blue-400">Future?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Get expert guidance from the best LIC agent in Kozhikode. Compare policies and make informed decisions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 h-16 rounded-full text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 hover:border-white font-bold px-10 h-16 rounded-full text-lg backdrop-blur-sm transition-all duration-300 shadow-lg">
                <Link href="tel:+919447218188">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-500" />
                k.satheeshclt@gmail.com
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-900"></div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-500" />
                +91 9447218188
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

