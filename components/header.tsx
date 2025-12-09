"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "LIC Policies", href: "/policies" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            S
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-lg font-bold leading-none transition-colors duration-300",
              scrolled ? "text-slate-900" : "text-white"
            )}>
              Satheesan Koroth
            </span>
            <span className={cn(
              "text-xs font-medium tracking-wider uppercase transition-colors duration-300",
              scrolled ? "text-blue-600" : "text-blue-200"
            )}>
              LIC Advisor
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <div className={cn(
            "flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300",
            scrolled ? "bg-slate-100/50 border border-slate-200/50" : "bg-white/10 border border-white/10 backdrop-blur-md"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  pathname === link.href
                    ? scrolled
                      ? "bg-white text-blue-600 shadow-sm"
                      : "bg-white text-blue-900 shadow-sm"
                    : scrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            size="lg"
            className={cn(
              "rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
              scrolled
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-white text-blue-900 hover:bg-blue-50"
            )}
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Get Consultation
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full transition-colors",
                  scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-0 p-0">
              <div className="flex flex-col h-full bg-white">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-900">Menu</span>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                          pathname === link.href
                            ? "bg-blue-50 text-blue-600"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg h-12 rounded-xl text-base">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Phone className="mr-2 h-5 w-5" />
                      Get Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
