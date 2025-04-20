"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, User, MapPin } from "lucide-react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { useState } from "react"
import Head from "next/head"

// Define the Testimonial type
type Testimonial = {
  id: string
  name: string
  role: string
  location: string
  content: string
  rating: number
  image_url: string | null
  category: string
  date: string
  created_at: string
  updated_at: string
}

const categories = [
  { id: "all", label: "All Testimonials" },
  { id: "premium", label: "Premium Payment" },
  { id: "comparison", label: "Policy Comparison" },
  { id: "claim", label: "Claim Settlement" },
  { id: "renewal", label: "Policy Renewal" },
  { id: "calculator", label: "Premium Calculator" },
  { id: "family", label: "Family Planning" },
  { id: "retirement", label: "Retirement Planning" },
  { id: "tax", label: "Tax Planning" },
  { id: "business", label: "Business Protection" },
  { id: "health", label: "Health Insurance" },
  { id: "education", label: "Education Planning" },
  { id: "loan", label: "Loan Protection" },
  { id: "investment", label: "Investment Planning" },
  { id: "group", label: "Group Insurance" },
  { id: "pension", label: "Pension Planning" },
  { id: "homeloan", label: "Home Loans" }
]

// Sample testimonials for static data
const sampleTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Business Owner",
    location: "Kozhikode",
    rating: 5,
    content: "The financial advisor helped me choose the right insurance policy for my business. As the best LIC agent in Kozhikode, he provided excellent guidance.",
    image_url: null,
    category: "business",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Teacher",
    location: "Calicut",
    rating: 5,
    content: "I was confused about retirement planning, but the advisor made it simple to understand. The best LIC agent in Kerala provided great service!",
    image_url: null,
    category: "retirement",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "Robert Johnson",
    role: "Engineer",
    location: "Kozhikode",
    rating: 4,
    content: "The premium calculator helped me find the right policy within my budget. Very useful tool from the best LIC policy agent in Kozhikode!",
    image_url: null,
    category: "calculator",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "Doctor",
    location: "Calicut",
    rating: 5,
    content: "The health insurance policy recommended was perfect for my family. The advisor was very knowledgeable about LIC policies in Kozhikode.",
    image_url: null,
    category: "health",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "5",
    name: "Amit Kumar",
    role: "Software Developer",
    location: "Kozhikode",
    rating: 5,
    content: "I was able to compare different policies easily and choose the best one for my needs. Excellent service from the best LIC agent in Calicut!",
    image_url: null,
    category: "comparison",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "6",
    name: "Sneha Reddy",
    role: "Entrepreneur",
    location: "Kerala",
    rating: 4,
    content: "The tax planning advice was invaluable. I saved a lot on my insurance premiums. Thank you to the best LIC agent in Kerala!",
    image_url: null,
    category: "tax",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "7",
    name: "Rajesh Verma",
    role: "Business Analyst",
    location: "Kozhikode",
    rating: 5,
    content: "The advisor helped me understand the benefits of different policies. I made an informed decision with the best LIC policy agent in Kozhikode.",
    image_url: null,
    category: "business",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "8",
    name: "Anjali Sharma",
    role: "Marketing Manager",
    location: "Calicut",
    rating: 5,
    content: "I was impressed by the advisor's knowledge and professionalism. The policy I chose is perfect for my needs. Best LIC agent in Calicut!",
    image_url: null,
    category: "investment",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "9",
    name: "Vikram Singh",
    role: "Architect",
    location: "Kozhikode",
    rating: 4,
    content: "The advisor explained complex insurance terms in simple language. I appreciate the patience and clarity from the best LIC agent in Kozhikode.",
    image_url: null,
    category: "family",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "10",
    name: "Meera Kapoor",
    role: "HR Manager",
    location: "Kerala",
    rating: 5,
    content: "I got a great group insurance policy for my company. The advisor understood our requirements perfectly. Best LIC agent in Kerala!",
    image_url: null,
    category: "group",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "11",
    name: "Arun Menon",
    role: "Financial Analyst",
    location: "Kozhikode",
    rating: 5,
    content: "The investment planning advice was excellent. I'm confident about my financial future now with the best LIC policy agent in Kozhikode.",
    image_url: null,
    category: "investment",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "12",
    name: "Divya Nair",
    role: "Content Writer",
    location: "Calicut",
    rating: 4,
    content: "I appreciated the advisor's approach to understanding my needs before recommending policies. Best LIC agent in Calicut!",
    image_url: null,
    category: "family",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "13",
    name: "Karthik Iyer",
    role: "IT Consultant",
    location: "Kozhikode",
    rating: 5,
    content: "The advisor helped me choose a policy that fits my budget and provides good coverage. Very satisfied with the best LIC agent in Kozhikode!",
    image_url: null,
    category: "health",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "14",
    name: "Lakshmi Devi",
    role: "School Principal",
    location: "Kerala",
    rating: 5,
    content: "I got a great education planning policy for my children. The advisor was very helpful and patient. Best LIC agent in Kerala!",
    image_url: null,
    category: "education",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "15",
    name: "Mohammed Khan",
    role: "Restaurant Owner",
    location: "Kozhikode",
    rating: 4,
    content: "The advisor helped me understand the benefits of different policies. I made an informed decision with the best LIC policy agent in Kozhikode.",
    image_url: null,
    category: "business",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "16",
    name: "Neha Gupta",
    role: "Fashion Designer",
    location: "Calicut",
    rating: 5,
    content: "I was impressed by the advisor's knowledge and professionalism. The policy I chose is perfect for my needs. Best LIC agent in Calicut!",
    image_url: null,
    category: "investment",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "17",
    name: "Prakash Malhotra",
    role: "Retired Government Officer",
    location: "Kozhikode",
    rating: 5,
    content: "The pension planning advice was excellent. I'm confident about my retirement now with the best LIC agent in Kozhikode.",
    image_url: null,
    category: "pension",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "18",
    name: "Rahul Desai",
    role: "Sales Manager",
    location: "Kerala",
    rating: 4,
    content: "I got a great loan protection policy. The advisor understood my requirements perfectly. Best LIC agent in Kerala!",
    image_url: null,
    category: "loan",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "19",
    name: "Sanya Mehta",
    role: "Journalist",
    location: "Kozhikode",
    rating: 5,
    content: "The advisor helped me choose a policy that fits my budget and provides good coverage. Very satisfied with the best LIC agent in Kozhikode!",
    image_url: null,
    category: "health",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "20",
    name: "Tanvi Joshi",
    role: "Lawyer",
    location: "Calicut",
    rating: 5,
    content: "I appreciated the advisor's approach to understanding my needs before recommending policies. Best LIC agent in Calicut!",
    image_url: null,
    category: "family",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "21",
    name: "Umesh Yadav",
    role: "Sports Coach",
    location: "Kozhikode",
    rating: 4,
    content: "The advisor explained complex insurance terms in simple language. I appreciate the patience and clarity from the best LIC agent in Kozhikode.",
    image_url: null,
    category: "health",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "22",
    name: "Vandana Sharma",
    role: "Nurse",
    location: "Kerala",
    rating: 5,
    content: "I got a great health insurance policy for my family. The advisor was very helpful and patient. Best LIC agent in Kerala!",
    image_url: null,
    category: "health",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "23",
    name: "Yash Rajput",
    role: "Student",
    location: "Kozhikode",
    rating: 4,
    content: "The education planning advice was excellent. I'm confident about my future now with the best LIC policy agent in Kozhikode.",
    image_url: null,
    category: "education",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "24",
    name: "Zara Khan",
    role: "Artist",
    location: "Calicut",
    rating: 5,
    content: "I was impressed by the advisor's knowledge and professionalism. The policy I chose is perfect for my needs. Best LIC agent in Calicut!",
    image_url: null,
    category: "investment",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "25",
    name: "Aditya Singh",
    role: "Bank Manager",
    location: "Kozhikode",
    rating: 5,
    content: "The advisor helped me choose a policy that fits my budget and provides good coverage. Very satisfied with the best LIC agent in Kozhikode!",
    image_url: null,
    category: "investment",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "26",
    name: "Bhavya Patel",
    role: "Dentist",
    location: "Kerala",
    rating: 4,
    content: "I appreciated the advisor's approach to understanding my needs before recommending policies. Best LIC agent in Kerala!",
    image_url: null,
    category: "health",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "27",
    name: "Chirag Mehta",
    role: "Real Estate Agent",
    location: "Kozhikode",
    rating: 5,
    content: "The advisor explained complex insurance terms in simple language. I appreciate the patience and clarity from the best LIC agent in Kozhikode.",
    image_url: null,
    category: "business",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "28",
    name: "Deepika Reddy",
    role: "Fitness Trainer",
    location: "Calicut",
    rating: 5,
    content: "I got a great health insurance policy for my family. The advisor was very helpful and patient. Best LIC agent in Calicut!",
    image_url: null,
    category: "health",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "29",
    name: "Esha Verma",
    role: "Interior Designer",
    location: "Kozhikode",
    rating: 4,
    content: "The investment planning advice was excellent. I'm confident about my financial future now with the best LIC policy agent in Kozhikode.",
    image_url: null,
    category: "investment",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "30",
    name: "Firoz Khan",
    role: "Tourism Guide",
    location: "Kerala",
    rating: 5,
    content: "I was impressed by the advisor's knowledge and professionalism. The policy I chose is perfect for my needs. Best LIC agent in Kerala!",
    image_url: null,
    category: "travel",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "31",
    name: "Geeta Menon",
    role: "Homeowner",
    location: "Kozhikode",
    rating: 5,
    content: "I got the best home loan rates through this LIC HFL agent in Kozhikode. The process was smooth and hassle-free. Highly recommended!",
    image_url: null,
    category: "homeloan",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "32",
    name: "Hari Nair",
    role: "Property Developer",
    location: "Calicut",
    rating: 5,
    content: "As a property developer, I needed a reliable home loan agent in Kozhikode. This advisor helped me secure the best LIC HFL home loan rates.",
    image_url: null,
    category: "homeloan",
    date: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [testimonials] = useState<Testimonial[]>(sampleTestimonials)

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)

  // Calculate average rating for SEO
  const averageRating = testimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0) / testimonials.length

  // Generate meta description
  const metaDescription = `Read ${testimonials.length} authentic client testimonials about our LIC insurance services in Kozhikode, Kerala. Best LIC agent in Kozhikode/Calicut with ${averageRating.toFixed(1)}/5 star rating. Expert in LIC policies and LIC HFL home loans.`

  return (
    <>
      <Head>
        <title>Best LIC Agent in Kozhikode | LIC Policy & Home Loan Expert | Satheesan Koroth</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="best lic agent kerala, best lic agent calicut, best lic agent kozhikode, lic policy kozhikode, lic hfl homeloan kozhikode, home loan agent kozhikode, lic agent kozhikode, lic policy agent kozhikode, lic insurance kozhikode, lic calicut" />
        <meta property="og:title" content="Best LIC Agent in Kozhikode | LIC Policy & Home Loan Expert" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/testimonials" />
        <meta property="og:image" content="https://yourdomain.com/advisor-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best LIC Agent in Kozhikode | LIC Policy & Home Loan Expert" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://yourdomain.com/advisor-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com/testimonials" />
      </Head>

      <div>
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Best LIC Agent in Kozhikode - Client Testimonials</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read what our clients have to say about their experience with the best LIC agent in Kozhikode/Calicut.
                We have helped {testimonials.length} clients across Kerala with their insurance and home loan needs.
              </p>
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-lg font-medium">{averageRating.toFixed(1)} out of 5</span>
                <span className="ml-2 text-gray-500">({testimonials.length} reviews)</span>
              </div>
              <div className="mt-4 flex items-center justify-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Serving Kozhikode, Calicut, and all of Kerala</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.id} delay={index * 100}>
                  <Card className="h-full border-t-4 border-t-blue-500">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                          <User className="w-8 h-8 text-gray-400" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                          <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">{testimonial.content}</p>
                      <div className="text-sm text-gray-500">
                        <p>Date: {new Date(testimonial.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Satheesan Koroth - Best LIC Agent in Kozhikode",
              "image": "https://yourdomain.com/advisor-image.jpg",
              "description": "Best LIC Agent in Kozhikode/Calicut offering premium calculation, policy comparison, and personalized insurance solutions. Expert in LIC policies and LIC HFL home loans.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kozhikode",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "11.2587",
                  "longitude": "75.7797"
                },
                "geoRadius": "50000"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": averageRating.toFixed(1),
                "reviewCount": testimonials.length,
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": testimonials.map(testimonial => ({
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": testimonial.rating,
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "author": {
                  "@type": "Person",
                  "name": testimonial.name
                },
                "datePublished": testimonial.created_at,
                "reviewBody": testimonial.content
              }))
            })
          }}
        />

        {/* FAQ Schema for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is the best LIC agent in Kozhikode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Satheesan Koroth is recognized as the best LIC agent in Kozhikode/Calicut, offering expert guidance on all types of LIC policies and LIC HFL home loans. With years of experience and a high client satisfaction rate, we provide personalized insurance solutions tailored to your needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of LIC policies do you offer in Kozhikode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a wide range of LIC insurance policies in Kozhikode including term insurance, whole life insurance, endowment plans, money-back policies, ULIPs, and pension plans. Our expert advisors help you choose the right policy based on your financial goals and requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I apply for a LIC HFL home loan in Kozhikode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Applying for a LIC HFL home loan in Kozhikode is simple with our guidance. We help you understand the eligibility criteria, documentation requirements, and interest rates. Our team assists you throughout the application process to ensure a smooth experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the claim settlement process for LIC policies in Kozhikode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our claim settlement process for LIC policies in Kozhikode is simple and hassle-free. We guide you through the documentation requirements and assist you at every step. We have a high claim settlement ratio and ensure quick processing of your claims."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I find a reliable home loan agent in Kozhikode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the best home loan agent in Kozhikode, we provide transparent information about LIC HFL home loans, competitive interest rates, and personalized guidance. Our team has extensive experience in helping clients secure the best home loan deals in Kozhikode and surrounding areas."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </>
  )
}
