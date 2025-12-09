"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Heart, Target, LineChart, Award, Info, ChevronRight, Baby, Clock, PiggyBank, Gift, TrendingUp, Users, Wallet, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

// Comprehensive LIC Plans from licindia.in
const allPolicies = [
  // Term Insurance
  {
    title: "LIC Tech Term",
    category: "Term Insurance",
    description: "Online pure term plan with level or increasing sum assured",
    icon: Shield,
    color: "bg-blue-500",
    features: [
      "Choose between Level or Increasing Sum Assured",
      "Flexible premium options (Single, Regular, Limited)",
      "High Sum Assured rebate available",
      "Online purchase and management"
    ],
    details: {
      minAge: "18 years",
      maxAge: "65 years",
      minSumAssured: "₹50,00,000",
      policyTerm: "10 to 40 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: true
  },
  {
    title: "LIC Digi Term",
    category: "Term Insurance",
    description: "Digital term insurance with high sum assured at low premiums",
    icon: Shield,
    color: "bg-indigo-500",
    features: [
      "Flexibility to choose Level/Increasing Sum Assured",
      "Benefit of Attractive High Sum Assured Rebate",
      "100% online process",
      "Instant policy issuance"
    ],
    details: {
      minAge: "18 years",
      maxAge: "60 years",
      minSumAssured: "₹50,00,000",
      policyTerm: "10 to 40 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: true
  },

  // Endowment Plans
  {
    title: "LIC Jeevan Anand",
    category: "Endowment",
    description: "Most popular endowment plan with lifelong cover",
    icon: Gift,
    color: "bg-purple-500",
    features: [
      "Life cover throughout the policy term",
      "Maturity benefit at the end of the term",
      "Simple Reversionary Bonus additions",
      "Lifelong risk cover after maturity"
    ],
    details: {
      minAge: "18 years",
      maxAge: "50 years",
      minSumAssured: "₹1,00,000",
      policyTerm: "15 to 35 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: false
  },
  {
    title: "LIC Jeevan Labh",
    category: "Endowment",
    description: "Limited premium payment endowment with guaranteed additions",
    icon: Gift,
    color: "bg-violet-500",
    features: [
      "Limited premium payment term",
      "Guaranteed additions throughout term",
      "Loyalty additions at maturity",
      "Loan facility available"
    ],
    details: {
      minAge: "8 years",
      maxAge: "59 years",
      minSumAssured: "₹2,00,000",
      policyTerm: "16, 21, 25 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: false
  },
  {
    title: "LIC Bima Jyoti",
    category: "Endowment",
    description: "Non-linked savings plan with guaranteed additions",
    icon: Gift,
    color: "bg-fuchsia-500",
    features: [
      "Guaranteed additions every year",
      "Limited premium payment",
      "Loan facility available",
      "High liquidity"
    ],
    details: {
      minAge: "18 years",
      maxAge: "55 years",
      minSumAssured: "₹1,00,000",
      policyTerm: "15 to 20 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: false
  },
  {
    title: "LIC Bima Ratna",
    category: "Endowment",
    description: "Limited premium endowment with high sum assured rebate",
    icon: Award,
    color: "bg-amber-500",
    features: [
      "High Sum Assured rebate",
      "Limited premium payment",
      "Guaranteed additions",
      "Loyalty additions"
    ],
    details: {
      minAge: "18 years",
      maxAge: "55 years",
      minSumAssured: "₹2,00,000",
      policyTerm: "15 to 25 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: false
  },

  // Whole Life Plans
  {
    title: "LIC Jeevan Umang",
    category: "Whole Life",
    description: "Whole life plan with annual survival benefits",
    icon: Users,
    color: "bg-pink-500",
    features: [
      "8% of Sum Assured as annual survival benefit",
      "15/20/25/30 years premium payment",
      "Life cover till 100 years of age",
      "Premium waiver on disability"
    ],
    details: {
      minAge: "90 days",
      maxAge: "55 years",
      minSumAssured: "₹2,00,000",
      policyTerm: "Till 100 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: false
  },
  {
    title: "LIC Jeevan Utsav",
    category: "Whole Life",
    description: "Guaranteed annual payout with lifelong security",
    icon: Users,
    color: "bg-rose-500",
    features: [
      "10% of Sum Assured as guaranteed annual payout",
      "Payout starts 3-6 years after premium term",
      "Whole life insurance cover",
      "Limited premium payment (5-16 years)"
    ],
    details: {
      minAge: "90 days",
      maxAge: "50 years",
      minSumAssured: "₹2,00,000",
      policyTerm: "Till 100 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: true
  },

  // Child Plans
  {
    title: "LIC Amritbal",
    category: "Child Plan",
    description: "New child plan with guaranteed additions",
    icon: Baby,
    color: "bg-green-500",
    features: [
      "Attractive guaranteed additions",
      "Maturity at age 18-25 years",
      "Single or limited premium payment",
      "Premium waiver on parent's death"
    ],
    details: {
      minAge: "0 years (child)",
      maxAge: "13 years (child)",
      minSumAssured: "₹1,00,000",
      policyTerm: "Till age 18-25",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: true
  },
  {
    title: "LIC New Children Money Back",
    category: "Child Plan",
    description: "Money back plan for child's milestone needs",
    icon: Baby,
    color: "bg-emerald-500",
    features: [
      "Money back at ages 18, 20, 22",
      "Maturity at age 25",
      "Premium waiver benefit",
      "Bonus additions"
    ],
    details: {
      minAge: "0 years (child)",
      maxAge: "12 years (child)",
      minSumAssured: "₹1,00,000",
      policyTerm: "25 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: false
  },

  // Pension Plans
  {
    title: "LIC New Jeevan Shanti",
    category: "Pension",
    description: "Single premium deferred annuity with guaranteed rates",
    icon: PiggyBank,
    color: "bg-orange-500",
    features: [
      "Single Life or Joint Life option",
      "Guaranteed rates from policy start",
      "Deferment period of 1-12 years",
      "Choice of annuity options"
    ],
    details: {
      minAge: "30 years",
      maxAge: "79 years",
      minPremium: "₹1,50,000",
      policyTerm: "Lifelong",
      taxBenefits: "Section 80C"
    },
    buyOnline: true
  },
  {
    title: "LIC Jeevan Akshay VII",
    category: "Pension",
    description: "Immediate annuity with 10 options",
    icon: PiggyBank,
    color: "bg-amber-500",
    features: [
      "Pension starts immediately",
      "10 different annuity options",
      "Guaranteed annuity rates",
      "Option to return purchase price"
    ],
    details: {
      minAge: "30 years",
      maxAge: "85 years",
      minPremium: "₹1,00,000",
      policyTerm: "Lifelong",
      taxBenefits: "Section 80C"
    },
    buyOnline: true
  },
  {
    title: "LIC Saral Pension",
    category: "Pension",
    description: "Standard immediate annuity plan",
    icon: Clock,
    color: "bg-yellow-500",
    features: [
      "Two annuity options only",
      "Simple and transparent",
      "IRDAI mandated standard product",
      "Return of purchase price option"
    ],
    details: {
      minAge: "40 years",
      maxAge: "80 years",
      minPremium: "₹1,000/month",
      policyTerm: "Lifelong",
      taxBenefits: "Section 80C"
    },
    buyOnline: true
  },

  // ULIP Plans
  {
    title: "LIC Index Plus",
    category: "ULIP",
    description: "NIFTY 50 linked investment plan",
    icon: TrendingUp,
    color: "bg-cyan-500",
    features: [
      "Monthly premium from ₹2500",
      "Invest in NIFTY 50 stocks",
      "Guaranteed additions",
      "Partial withdrawal allowed"
    ],
    details: {
      minAge: "8 years",
      maxAge: "55 years",
      minPremium: "₹2,500/month",
      policyTerm: "10-25 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: true
  },
  {
    title: "LIC Nivesh Plus",
    category: "ULIP",
    description: "Single premium ULIP with fund options",
    icon: TrendingUp,
    color: "bg-teal-500",
    features: [
      "Single premium payment",
      "Multiple fund options",
      "Top-up facility available",
      "Partial withdrawal after 5 years"
    ],
    details: {
      minAge: "8 years",
      maxAge: "80 years",
      minPremium: "₹1,00,000",
      policyTerm: "10-25 years",
      taxBenefits: "Section 80C & 10(10D)"
    },
    buyOnline: false
  },

  // Health Insurance
  {
    title: "LIC Cancer Cover",
    category: "Health",
    description: "Protection against cancer diagnosis",
    icon: Heart,
    color: "bg-red-500",
    features: [
      "Early and Major Stage Cancer cover",
      "Lump sum or installment payout",
      "Premium waiver on diagnosis",
      "No medical exam up to ₹10 Lakhs"
    ],
    details: {
      minAge: "20 years",
      maxAge: "65 years",
      minSumAssured: "₹10,00,000",
      policyTerm: "10-30 years",
      taxBenefits: "Section 80D"
    },
    buyOnline: true
  },

  // Government Schemes
  {
    title: "PMJJBY",
    category: "Govt Scheme",
    description: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    icon: Award,
    color: "bg-slate-500",
    features: [
      "Premium only ₹436 per year",
      "Life cover of ₹2 Lakh",
      "No medical examination",
      "Auto-debit from bank account"
    ],
    details: {
      minAge: "18 years",
      maxAge: "50 years",
      sumAssured: "₹2,00,000",
      policyTerm: "1 year (renewable)",
      taxBenefits: "Section 80C"
    },
    buyOnline: false
  }
]

// Group policies by category
const categories = Array.from(new Set(allPolicies.map(p => p.category)))

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10 text-center">
          <Badge className="mb-6 px-4 py-1.5 text-sm bg-blue-500/20 text-blue-200 border-blue-500/30 font-bold tracking-wider uppercase">
            {allPolicies.length}+ Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            LIC <span className="text-blue-400">Policies</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Complete range of Life Insurance Corporation of India policies - from term insurance to pension plans.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-16 z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all font-medium">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPolicies.map((policy, index) => (
              <ScrollReveal key={index} delay={index * 30}>
                <Card className="h-full border-slate-100 shadow-md hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
                  {/* Header */}
                  <div className={`${policy.color} p-4 relative`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="flex items-center justify-between relative z-10">
                      <policy.icon className="w-8 h-8 text-white" />
                      {policy.buyOnline && (
                        <Badge className="bg-white/20 text-white text-[10px] border-white/30">Buy Online</Badge>
                      )}
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="secondary" className="text-[10px]">{policy.category}</Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {policy.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      {policy.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {policy.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start text-xs text-slate-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1.5 mt-0.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div className="bg-slate-50 rounded-lg p-3 group-hover:bg-blue-50 transition-colors">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-slate-400">Entry Age</p>
                          <p className="font-medium text-slate-700">{policy.details.minAge} - {policy.details.maxAge}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Min Amount</p>
                          <p className="font-medium text-slate-700">{policy.details.minSumAssured || policy.details.minPremium || policy.details.sumAssured}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Policy Term</p>
                          <p className="font-medium text-slate-700">{policy.details.policyTerm}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Tax Benefit</p>
                          <p className="font-medium text-slate-700">{policy.details.taxBenefits}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                      <Link href="/contact">
                        Get Quote <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Official Link */}
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="container text-center">
          <p className="text-slate-600 mb-4">All plans and features sourced from official LIC India website</p>
          <Button asChild variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            <Link href="https://licindia.in/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit LIC India Official Website
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Help Choosing the Right Plan?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get personalized policy recommendations from our expert LIC advisor with 20+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 h-14 rounded-full text-lg shadow-xl">
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-blue-700 font-bold px-8 h-14 rounded-full text-lg">
                <Link href="https://wa.me/919447218188" target="_blank">
                  WhatsApp Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}