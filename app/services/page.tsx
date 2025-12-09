"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Heart, Target, LineChart, Award, Home, Baby, Clock, PiggyBank, Wallet, Gift, Users, Building, Landmark, TrendingUp, Calculator, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

// LIC Insurance Services
const insuranceServices = [
  {
    title: "Term Insurance Plans",
    description: "Pure protection plans with high coverage at affordable premiums",
    icon: Shield,
    color: "bg-blue-500",
    plans: ["LIC Tech Term", "LIC Digi Term", "LIC New Jeevan Amar"],
    features: ["High Sum Assured up to ₹2 Cr+", "Level or Increasing Cover option", "Online purchase available", "Tax benefits under 80C"]
  },
  {
    title: "Endowment Plans",
    description: "Savings + Protection with guaranteed returns and bonus",
    icon: Gift,
    color: "bg-indigo-500",
    plans: ["LIC Jeevan Anand", "LIC Jeevan Labh", "LIC Bima Jyoti", "LIC New Endowment"],
    features: ["Maturity benefit guaranteed", "Simple Reversionary Bonus", "Loan facility available", "Flexible premium payment"]
  },
  {
    title: "Whole Life Plans",
    description: "Lifelong protection with survival benefits",
    icon: Users,
    color: "bg-purple-500",
    plans: ["LIC Jeevan Umang", "LIC Jeevan Utsav"],
    features: ["Protection for entire lifetime", "Annual survival benefits", "Guaranteed additions", "Premium waiver benefit"]
  },
  {
    title: "Pension & Retirement",
    description: "Secure your retirement with guaranteed pension income",
    icon: PiggyBank,
    color: "bg-orange-500",
    plans: ["LIC New Jeevan Shanti", "LIC Jeevan Akshay VII", "LIC Saral Pension"],
    features: ["Immediate or deferred annuity", "Up to 10 annuity options", "Guaranteed pension rates", "Single premium option"]
  },
  {
    title: "Child Plans",
    description: "Secure your child's education and future goals",
    icon: Baby,
    color: "bg-pink-500",
    plans: ["LIC Amritbal", "LIC New Children Money Back", "LIC Jeevan Tarun"],
    features: ["Maturity at age 18-25", "Guaranteed additions", "Premium waiver on death", "Money back benefits"]
  },
  {
    title: "Health Insurance",
    description: "Protection against critical illness and health expenses",
    icon: Heart,
    color: "bg-red-500",
    plans: ["LIC Cancer Cover", "LIC Arogya Rakshak"],
    features: ["Cancer protection plan", "Lump sum or installment payout", "No medical exam for low cover", "Tax benefits under 80D"]
  },
  {
    title: "ULIP Plans",
    description: "Market-linked investment with insurance cover",
    icon: TrendingUp,
    color: "bg-green-500",
    plans: ["LIC Index Plus", "LIC Nivesh Plus", "LIC SIIP"],
    features: ["Invest in NIFTY 50 stocks", "Multiple fund options", "Partial withdrawal allowed", "Switch between funds"]
  },
  {
    title: "Money Back Plans",
    description: "Regular payouts at intervals during policy term",
    icon: Wallet,
    color: "bg-cyan-500",
    plans: ["LIC New Money Back 20/25", "LIC Jeevan Shiromani"],
    features: ["Periodic survival benefits", "20-25% every 5 years", "Bonus additions", "Loan facility available"]
  }
]

// LIC Housing Finance Services
const housingServices = [
  {
    title: "Home Loan",
    description: "Finance your dream home with attractive interest rates",
    icon: Home,
    color: "bg-blue-600",
    features: ["Up to 90% of property value", "Tenure up to 30 years", "Attractive interest rates", "Quick processing"],
    link: "https://www.lichousing.com/housing-loan/home-loan/"
  },
  {
    title: "Plot Loan",
    description: "Buy land for your future home construction",
    icon: Building,
    color: "bg-indigo-600",
    features: ["Finance for residential plots", "Construction loan linkage", "Flexible repayment", "Quick approvals"],
    link: "https://www.lichousing.com/housing-loan/plot-loan/"
  },
  {
    title: "Griha Suvidha Home Loan",
    description: "Home loan with flexible repayment options",
    icon: Home,
    color: "bg-purple-600",
    features: ["Step-up EMI option", "For salaried individuals", "Lower initial EMIs", "Easy documentation"],
    link: "https://www.lichousing.com/housing-loan/griha-suvidha-home-loan/"
  },
  {
    title: "NRI Home Loan",
    description: "Special home loan scheme for NRIs",
    icon: Landmark,
    color: "bg-pink-600",
    features: ["For NRIs and PIOs", "Power of Attorney option", "Remote processing", "Competitive rates"],
    link: "https://www.lichousing.com/housing-loan/home-loan-nri/"
  },
  {
    title: "Home Loan for Pensioners",
    description: "Home finance options for retired individuals",
    icon: Clock,
    color: "bg-orange-600",
    features: ["For pension recipients", "Age relaxation available", "Flexible tenure", "Easy eligibility"],
    link: "https://www.lichousing.com/housing-loan/home-loan-for-pensioners/"
  },
  {
    title: "Loan Against Property",
    description: "Get funds against your existing property",
    icon: Building,
    color: "bg-amber-600",
    features: ["For business/personal needs", "Up to 60% of property value", "Lower interest rates", "Longer tenure"],
    link: "https://www.lichousing.com/housing-loan/loans-against-property/"
  }
]

// Additional Services
const additionalServices = [
  {
    title: "Premium Calculator",
    description: "Calculate premium for any LIC policy instantly",
    icon: Calculator,
    color: "bg-teal-500"
  },
  {
    title: "Policy Revival",
    description: "Revive your lapsed LIC policies with ease",
    icon: Target,
    color: "bg-emerald-500"
  },
  {
    title: "Claim Assistance",
    description: "Complete support for maturity and death claims",
    icon: Award,
    color: "bg-rose-500"
  },
  {
    title: "Free Consultation",
    description: "Get expert advice on choosing the right policy",
    icon: Phone,
    color: "bg-violet-500"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-blue-500/20 text-blue-200 border-blue-500/30 font-bold tracking-wider uppercase">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Complete range of LIC insurance plans and housing finance solutions from official LIC India and LIC Housing Finance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-slate-900">{insuranceServices.length} Insurance Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-green-600" />
              <span className="font-bold text-slate-900">{housingServices.length} Housing Loans</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="font-bold text-slate-900">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">LIC Insurance Plans</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Life Insurance Solutions</h2>
            <p className="text-lg text-slate-600">
              Explore comprehensive insurance plans from Life Insurance Corporation of India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <Card className="h-full border-slate-100 shadow-md hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
                  <div className={`${service.color} p-4 relative`}>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <service.icon className="w-8 h-8 text-white relative z-10" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Popular Plans:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.plans.slice(0, 3).map((plan, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px]">{plan}</Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1.5 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                      <Link href="/policies">
                        View Plans <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Housing Finance Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">LIC Housing Finance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Housing Loan Solutions</h2>
            <p className="text-lg text-slate-600">
              Finance your dream home with LIC Housing Finance Limited
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {housingServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <Card className="h-full border-slate-100 shadow-md hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Link href={service.link} target="_blank" rel="noopener noreferrer">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-slate-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-slate-600">Free support services for all LIC policyholders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center group">
                <div className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Expert Guidance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get personalized advice from Satheesan Koroth - Senior LIC Advisor with 20+ years of experience in Kozhikode
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 h-14 rounded-full text-lg shadow-xl">
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-blue-700 font-bold px-8 h-14 rounded-full text-lg">
                <Link href="/policies">
                  View All Policies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
