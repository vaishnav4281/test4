import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.satheesankoroth.in'),
  title: {
    default: "Best LIC Agent in Kozhikode | Satheesan Koroth | Free Consultation",
    template: "%s | Satheesan Koroth - LIC Agent"
  },
  description: "Secure your family's future with Satheesan Koroth, the top-rated LIC agent in Kozhikode. Get expert advice, premium calculations, and personalized insurance plans. Call now for a free consultation!",
  keywords: [
    "best lic agent in kozhikode",
    "lic agent in kozhikode",
    "lic policy premium calculator",
    "lic agent near me",
    "lic policy comparison",
    "lic premium payment",
    "lic policy benefits",
    "lic premium rates",
    "lic policy maturity",
    "lic agent contact number",
    "lic policy details",
    "lic premium discount",
    "lic policy types",
    "lic agent office",
    "lic policy surrender value",
    "lic premium due date",
    "lic policy status",
    "lic agent services",
    "lic policy documents",
    "top lic agent in kozhikode",
    "best insurance advisor in kozhikode",
    "lic agent in calicut",
    "lic agent in kerala",
    "life insurance corporation of india",
    "lic plans for family",
    "retirement planning kozhikode",
    "tax saving lic policies",
    "child education plans lic",
    "pension plans lic",
    "health insurance lic",
    "lic housing finance kozhikode",
    "home loan agent kozhikode",
    "lic new tech term",
    "lic jeevan utsav",
    "lic amritbal"
  ],
  authors: [{ name: "Satheesan Koroth", url: "https://www.satheesankoroth.in" }],
  creator: "Satheesan Koroth",
  publisher: "Satheesan Koroth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Insurance & Financial Services",
  classification: "Financial Services, Life Insurance, Home Loans",
  openGraph: {
    title: "Secure Your Future | Best LIC Agent in Kozhikode - Satheesan Koroth",
    description: "Expert LIC agent in Kozhikode offering personalized insurance solutions. Get a free consultation and secure your family's financial future today.",
    url: "https://www.satheesankoroth.in",
    siteName: "Satheesan Koroth - LIC Agent",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.satheesankoroth.in/sathesan-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Satheesan Koroth - Best LIC Agent in Kozhikode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best LIC Agent in Kozhikode | Satheesan Koroth",
    description: "Expert LIC agent in Kozhikode offering policy premium calculation, comparison, and personalized insurance solutions.",
    images: ["https://www.satheesankoroth.in/sathesan-profile.jpg"],
    creator: "@satheesankoroth",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://www.satheesankoroth.in",
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Kozhikode',
    'geo.position': '11.2588;75.7804',
    'ICBM': '11.2588, 75.7804',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Satheesan Koroth - Insurance Advisor",
    "description": "Expert insurance advisor offering LIC policies, financial planning, and investment advice in Kerala and Calicut.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calicut",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.2588",
      "longitude": "75.7804"
    },
    "url": "https://www.satheesankoroth.in",
    "telephone": "+91-9447218188",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "image": "https://www.satheesankoroth.in/logo.jpg",
    "sameAs": [
      "https://www.facebook.com/satheesh.koroth.5",
      "https://www.linkedin.com/in/yourprofile"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}
