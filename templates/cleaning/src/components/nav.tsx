"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, Sparkles } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#why-us" },
    { label: "About", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[var(--shadow-nav)] border-b border-[var(--color-sky-300)]/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-[var(--color-sky-500)] flex items-center justify-center group-hover:bg-[var(--color-sky-400)] transition-colors duration-200 shadow-[0_2px_10px_rgba(14,165,233,0.35)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-800 text-[var(--color-blue-900)] text-base leading-tight">
                Sparkle Clean
              </div>
              <div className="font-body text-[var(--color-sky-500)] text-[0.6rem] tracking-[0.18em] uppercase font-600">
                Professional Cleaning
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body font-600 text-sm text-[var(--color-gray-600)] hover:text-[var(--color-sky-500)] transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-[var(--color-blue-700)] font-body text-sm font-600 hover:text-[var(--color-sky-500)] transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="bg-[var(--color-sky-500)] hover:bg-[var(--color-sky-400)] text-white font-display font-700 text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
            >
              Book a Clean
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[var(--color-blue-800)] p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-[var(--color-clean-100)] overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body font-600 text-base text-[var(--color-gray-600)] hover:text-[var(--color-sky-500)] transition-colors py-1 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[var(--color-clean-100)] space-y-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 text-[var(--color-blue-700)] font-body font-600 cursor-pointer"
                >
                  <Phone className="w-4 h-4" /> {BUSINESS.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-[var(--color-sky-500)] text-white font-display font-700 px-6 py-3 rounded-full cursor-pointer"
                >
                  Book a Clean
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
