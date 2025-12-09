import { Metadata } from "next"
import { Shield, Home, TrendingUp, Heart, Baby, Users, Building, Landmark, Award, FileText, Calculator, Phone, Wallet, PiggyBank, Target, Clock, Gift, Star, CheckCircle, ArrowRight, ExternalLink, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gallery | Latest LIC Plans & Housing Loans | Satheesan Koroth",
  description: "Explore 60+ latest LIC insurance plans and housing loan products from official websites. Updated with New Tech Term, Jeevan Utsav, Amritbal, Green Deposits, and more from licindia.in and lichousing.com.",
  keywords: ["LIC plans 2024", "latest insurance gallery", "LIC housing loans", "new tech term", "jeevan utsav", "amritbal", "green deposits", "sanchay deposit"],
}

// Latest LIC Insurance Plans (Updated from https://licindia.in/)
const licInsurancePlans = [
  { title: "LIC New Tech Term", category: "Term Plan", description: "Choose between Level/Increasing Sum Assured with flexible premium options and policy terms", icon: Shield, color: "bg-blue-500" },
  { title: "LIC Jeevan Utsav", category: "Whole Life", description: "Guaranteed annual payout of 10% Sum Assured starting 3-6 years post premium payment", icon: Star, color: "bg-yellow-500" },
  { title: "LIC Amritbal", category: "Child Plan", description: "Attractive guaranteed additions with maturity age options between 18-25 years", icon: Baby, color: "bg-green-500" },
  { title: "LIC Digi Term", category: "Term Plan", description: "Level/Increasing Sum Assured with attractive high sum assured rebate benefits", icon: Shield, color: "bg-teal-500" },
  { title: "LIC Cancer Cover", category: "Health", description: "Non-linked health insurance for Early or Major Stage Cancer diagnosis protection", icon: Heart, color: "bg-red-500" },
  { title: "LIC Index Plus", category: "ULIP", description: "Monthly premiums from ₹2500/- with up to 100% in NIFTY 50 stocks plus guaranteed additions", icon: TrendingUp, color: "bg-cyan-500" },
  { title: "LIC New Jeevan Shanti", category: "Pension", description: "Single premium deferred annuity with Single Life and Joint Life options", icon: Clock, color: "bg-orange-500" },
  { title: "LIC Jeevan Akshay VII", category: "Pension", description: "Immediate annuity plan with 10 options and guaranteed lifetime payments", icon: Wallet, color: "bg-amber-500" },
  { title: "LIC Jeevan Anand", category: "Endowment", description: "Participating plan offering financial protection throughout lifetime with bonuses", icon: Shield, color: "bg-indigo-500" },
  { title: "LIC Jeevan Labh", category: "Endowment", description: "Limited premium with guaranteed additions combining protection and savings", icon: Gift, color: "bg-purple-500" },
]

// Latest LIC Housing Finance Products (Updated from https://www.lichousing.com/)
const licHousingLoans = [
  { title: "Home Loan", category: "Housing Loan", description: "Build your dream home with attractive interest rates and easy eligibility", icon: Home, color: "bg-blue-500" },
  { title: "Plot Loan", category: "Housing Loan", description: "Finance land purchase for your future home construction plans", icon: Building, color: "bg-indigo-500" },
  { title: "Griha Suvidha Home Loan", category: "Housing Loan", description: "Flexible repayment options designed for your convenience", icon: Home, color: "bg-purple-500" },
  { title: "NRI Home Loan", category: "Housing Loan", description: "Special home loan scheme exclusively designed for Non-Resident Indians", icon: Landmark, color: "bg-pink-500" },
  { title: "Home Loan for Pensioners", category: "Housing Loan", description: "Tailored home finance solutions for retired individuals", icon: Users, color: "bg-orange-500" },
  { title: "Loans Against Property", category: "Non-Housing", description: "Unlock funds secured against your existing residential or commercial property", icon: Building, color: "bg-amber-500" },
  { title: "Loans to Professionals", category: "Non-Housing", description: "Specialized loan products for doctors, CAs, and working professionals", icon: Award, color: "bg-yellow-500" },
  { title: "Loans Against Property for Companies", category: "Non-Housing", description: "Corporate loan solutions secured against company-owned properties", icon: Landmark, color: "bg-rose-500" },
  { title: "Loan Against Rental Securitization", category: "Non-Housing", description: "Leverage rental income streams for business expansion capital", icon: TrendingUp, color: "bg-violet-500" },
  { title: "Home Improvement Loan", category: "Housing Needs", description: "Renovate and modernize your existing home with easy financing", icon: Home, color: "bg-green-500" },
  { title: "Home Extension Loan", category: "Housing Needs", description: "Expand your living space with additional construction funding", icon: Building, color: "bg-teal-500" },
  { title: "Top-up Loan", category: "Housing Needs", description: "Access additional funds on your existing home loan at competitive rates", icon: TrendingUp, color: "bg-cyan-500" },
  { title: "Home Loan Balance Transfer", category: "Refinance", description: "Switch your existing loan to LIC HFL for better interest rates and benefits", icon: Wallet, color: "bg-blue-600" },
  { title: "Advantage Plus", category: "Special Offer", description: "Premium home loan package with exclusive benefits and preferential rates", icon: Star, color: "bg-indigo-600" },
  { title: "Sanchay Public Deposit", category: "Deposit", description: "Safe and secure deposit scheme with attractive returns anytime, anywhere", icon: PiggyBank, color: "bg-purple-600" },
  { title: "Corporate Deposits", category: "Deposit", description: "High-yield deposit options designed for corporate investors", icon: Landmark, color: "bg-pink-600" },
  { title: "Green Deposits", category: "Deposit", description: "Eco-friendly investment supporting sustainable and green initiatives", icon: Target, color: "bg-green-600" },
  { title: "Builder Developers Scheme", category: "Corporate", description: "Comprehensive financing solutions for builders and real estate developers", icon: Building, color: "bg-slate-600" },
  { title: "Line of Credit Scheme", category: "Corporate", description: "Flexible credit facility TO and THROUGH scheme for business growth", icon: Wallet, color: "bg-zinc-600" },
]

// Success Stories & Services (Enhanced)
const successStories = [
  { title: "98%+ Claim Settlement Ratio", category: "Trust", description: "LIC maintains India's highest claim settlement record with transparent processes", icon: CheckCircle, color: "bg-blue-500" },
  { title: "20+ Years of Excellence", category: "Experience", description: "Satheesan Koroth - Award-winning LIC Advisor serving Kozhikode region", icon: Award, color: "bg-amber-500" },
  { title: "5000+ Satisfied Families", category: "Success", description: "Thousands of families financially secured through our personalized service", icon: Users, color: "bg-pink-500" },
  { title: "₹100Cr+ Claims Processed", category: "Achievement", description: "Successfully processed over 100 Crore in claim settlements for clients", icon: Target, color: "bg-purple-500" },
  { title: "Free Expert Consultation", category: "Service", description: "Complimentary policy review and financial planning consultation available", icon: Phone, color: "bg-green-500" },
  { title: "Tax Benefits Under 80C", category: "Tax Saving", description: "Save up to ₹1.5 lakh annually under Section 80C with LIC premium payments", icon: Calculator, color: "bg-emerald-500" },
  { title: "Digital Policy Management", category: "Technology", description: "Manage policies, pay premiums, and track claims through LIC mobile apps", icon: Phone, color: "bg-teal-500" },
  { title: "EMI Calculator Tools", category: "Tool", description: "Instant home loan EMI and premium calculation for informed decisions", icon: Calculator, color: "bg-cyan-500" },
  { title: "24/7 WhatsApp Support", category: "Service", description: "Round-the-clock assistance on WhatsApp for all your policy queries", icon: Phone, color: "bg-green-600" },
  { title: "Doorstep Documentation", category: "Service", description: "Convenient home visit service for policy documentation and claim assistance", icon: Home, color: "bg-orange-500" },
]

// Latest News & Updates
const newsUpdates = [
  { title: "New Tech Term Launched", category: "New Plan", description: "LIC's latest online term insurance with flexible sum assured options", icon: Shield, color: "bg-indigo-500" },
  { title: "Jeevan Utsav Now Available", category: "New Plan", description: "Whole life plan with guaranteed 10% annual payout feature introduced", icon: Gift, color: "bg-purple-500" },
  { title: "Amritbal Child Plan Update", category: "New Plan", description: "Enhanced guaranteed additions for children's financial security", icon: Baby, color: "bg-green-600" },
  { title: "Index Plus ULIP Launch", category: "Investment", description: "NIFTY 50-linked ULIP starting at just ₹2500 monthly premium", icon: TrendingUp, color: "bg-blue-500" },
  { title: "Sanchay Digital Deposits", category: "Update", description: "Online public deposits now available anytime, anywhere with instant processing", icon: PiggyBank, color: "bg-violet-500" },
  { title: "Green Deposit Initiative", category: "CSR", description: "LIC Housing launches eco-friendly deposit scheme supporting sustainability", icon: Target, color: "bg-green-500" },
  { title: "Enhanced Digital Services", category: "Technology", description: "Improved customer portal with new features for seamless policy management", icon: Phone, color: "bg-pink-500" },
  { title: "Bonus Rates Declared", category: "News", description: "LIC announces competitive bonus rates for participating policies", icon: Star, color: "bg-yellow-500" },
  { title: "NRI Loan Expansion", category: "Update", description: "Enhanced NRI home loan offerings with simplified documentation", icon: Landmark, color: "bg-orange-500" },
  { title: "Advantage Plus Benefits", category: "Offer", description: "Premium home loan scheme with exclusive interest rate benefits launched", icon: Star, color: "bg-indigo-600" },
]

// Financial Planning Tips
const financialTips = [
  { title: "Start Early for Lower Premiums", category: "Tip", description: "Begin life insurance in your 20s to lock in affordable premium rates", icon: Clock, color: "bg-blue-500" },
  { title: "Diversify with Term + ULIP", category: "Tip", description: "Combine term insurance protection with ULIP for balanced financial planning", icon: TrendingUp, color: "bg-indigo-500" },
  { title: "Secure Child's Education Early", category: "Tip", description: "Start child plans like Amritbal to build guaranteed education corpus", icon: Baby, color: "bg-purple-500" },
  { title: "Plan Retirement with Pension", category: "Tip", description: "Invest in Jeevan Shanti or Jeevan Akshay for guaranteed retirement income", icon: PiggyBank, color: "bg-pink-500" },
  { title: "Build Emergency Fund First", category: "Tip", description: "Maintain 6-months expenses before investing in long-term policies", icon: Shield, color: "bg-orange-500" },
  { title: "Annual Policy Review", category: "Tip", description: "Review coverage yearly as family responsibilities and income change", icon: FileText, color: "bg-amber-500" },
  { title: "Update Nominations", category: "Tip", description: "Regularly update nominee details to ensure smooth claim settlement", icon: Users, color: "bg-green-500" },
  { title: "Prioritize Health Coverage", category: "Tip", description: "Get Cancer Cover or health insurance before life insurance policies", icon: Heart, color: "bg-red-500" },
  { title: "Enable Auto-Pay Premium", category: "Tip", description: "Set autopay to prevent policy lapse due to missed premium payments", icon: CheckCircle, color: "bg-teal-500" },
  { title: "Read All Policy Terms", category: "Tip", description: "Understand exclusions, riders, and benefit conditions before purchasing", icon: FileText, color: "bg-cyan-500" },
]

// Combine all posts
const allPosts = [
  ...licInsurancePlans.map(p => ({ ...p, source: "LIC India" })),
  ...licHousingLoans.map(p => ({ ...p, source: "LIC Housing" })),
  ...successStories.map(p => ({ ...p, source: "Success Stories" })),
  ...newsUpdates.map(p => ({ ...p, source: "News & Updates" })),
  ...financialTips.map(p => ({ ...p, source: "Financial Tips" })),
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10 text-center">
          <Badge className="mb-6 px-4 py-1.5 text-sm bg-blue-500/20 text-blue-200 border-blue-500/30 font-bold tracking-wider uppercase">
            {allPosts.length}+ Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Knowledge <span className="text-blue-400">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Explore {allPosts.length}+ latest resources directly updated from official LIC India and LIC Housing Finance websites - featuring newest insurance plans, housing loans, deposits, and expert financial guidance.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">{licInsurancePlans.length} Insurance Plans</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
              <Home className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-green-700">{licHousingLoans.length} Housing Loans</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-purple-700">{successStories.length} Success Stories</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-bold text-orange-700">{newsUpdates.length} News Updates</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
              <Target className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-bold text-teal-700">{financialTips.length} Financial Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allPosts.map((post, index) => {
              // Create WhatsApp message with tile name
              const whatsappMessage = `Hi, I'm interested in learning more about *${post.title}* (${post.category}). Could you please provide more details?`
              const whatsappUrl = `https://wa.me/919447218188?text=${encodeURIComponent(whatsappMessage)}`

              return (
                <Link
                  key={index}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer block"
                >
                  {/* Card Header with Icon */}
                  <div className={`${post.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <post.icon className="w-10 h-10 text-white relative z-10" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">{post.category}</Badge>
                    <h3 className="font-bold text-slate-900 text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">{post.source}</span>
                      <div className="flex items-center gap-1 text-blue-500 group-hover:text-blue-600 transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Chat</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Official Sources */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Official Sources</h2>
            <p className="text-slate-600">All information sourced from official LIC websites</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 font-bold rounded-xl h-12 px-6">
              <Link href="https://licindia.in/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                LIC India Official
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 font-bold rounded-xl h-12 px-6">
              <Link href="https://www.lichousing.com/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                LIC Housing Finance
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-bold rounded-xl h-12 px-6">
              <Link href="https://www.facebook.com/LICIndiaForever" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook Page
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing the Right Policy?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Get personalized recommendations from our expert LIC advisor with 20+ years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 h-14 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all">
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-blue-700 font-bold px-8 h-14 rounded-full text-lg transition-all">
              <Link href="/policies">
                View All Policies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
