"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navigation = ({ forceSolid = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(forceSolid)

  useEffect(() => {
    if (forceSolid) {
      setScrolled(true)
      return
    }
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [forceSolid])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-ivory/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-6",
      )}
      style={{ backgroundColor: scrolled ? "#FDFDFB" : "transparent" }}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex-1 flex justify-center md:justify-start">
          <Link href="/" className="flex items-center fade-in-up mx-auto md:mx-0">
            <span
              className={cn(
                "font-playfair font-bold transition-all duration-500",
                scrolled ? "text-emerald" : "text-ivory",
                "text-3xl md:text-2xl lg:text-3xl"
              )}
              style={{ color: scrolled ? "#2E8B57" : "#FDFDFB" }}
            >
              Vision<span style={{ color: "#D4AF37" }}>Nest</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-all duration-300 hover:text-gold link-hover",
                scrolled ? "text-emerald" : "text-ivory",
              )}
              style={{
                color: scrolled ? "#2E8B57" : "#FDFDFB",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {link.name}
            </Link>
          ))}
          <button
            className={cn(
              "btn-primary transition-all duration-300",
              scrolled ? "" : "bg-white/10 backdrop-blur-sm hover:bg-white/20",
            )}
            style={{
              backgroundColor: scrolled ? "#2E8B57" : "rgba(255, 255, 255, 0.1)",
              color: scrolled ? "#FDFDFB" : "#FDFDFB",
            }}
          >
            <Link href="/contact">Get In Touch</Link>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden transition-colors duration-300")}
          style={{ color: scrolled ? "#2E8B57" : "#FDFDFB" }}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-lg animate-fadeIn"
          style={{ backgroundColor: "#FDFDFB" }}
        >
          <div className="container-custom py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium py-2 px-4 hover:bg-emerald-50 rounded-md transition-colors duration-300"
                style={{ color: "#2E8B57" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-primary mt-2 w-full flex justify-center" onClick={() => setIsOpen(false)}>
              <Link href="/contact">Get In Touch</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
