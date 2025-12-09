"use client"

import { Facebook, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const facebookPages = [
    {
        name: "LIC India Forever",
        url: "https://www.facebook.com/LICIndiaForever",
        embedUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLICIndiaForever&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
        description: "Official updates and insights from LIC India"
    },
    {
        name: "LIC Housing Loans",
        url: "https://www.facebook.com/lichousingloans",
        embedUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flichousingloans&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
        description: "Latest on LIC Housing Finance"
    },
    {
        name: "Satheesan Koroth",
        url: "https://www.facebook.com/satheesh.koroth.5",
        embedUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsatheesh.koroth.5&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
        description: "Personal updates from Satheesan Koroth"
    }
]

export default function FacebookFeed() {
    return (
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 -translate-x-1/2"></div>
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
                        100+ Posts
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6 text-slate-900 tracking-tight">
                        Latest Updates
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Browse through 100+ posts featuring photos, videos, and updates from our official Facebook pages.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facebookPages.map((page, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2">
                            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-blue-600 to-blue-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                        <Facebook className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">{page.name}</h3>
                                        <p className="text-blue-100 text-sm">{page.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[400px] relative bg-slate-50">
                                <iframe
                                    src={page.embedUrl}
                                    width="100%"
                                    height="400"
                                    style={{ border: "none", overflow: "hidden" }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            <div className="p-4 border-t border-slate-100 bg-white">
                                <Button asChild variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold rounded-xl h-12 transition-all">
                                    <Link href={page.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Visit Page
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 mb-6">Follow us on Facebook for exclusive updates and offers</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {facebookPages.map((page, index) => (
                            <Button key={index} asChild variant="outline" className="border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 font-semibold rounded-full px-6 transition-all">
                                <Link href={page.url} target="_blank" rel="noopener noreferrer">
                                    <Facebook className="mr-2 h-4 w-4" />
                                    {page.name}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
