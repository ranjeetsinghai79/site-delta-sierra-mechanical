"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, Hammer } from "lucide-react"
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
    { label: "Portfolio", href: "#why-us" },
    { label: "Process", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-white)] shadow-[var(--shadow-nav)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-forest-600)] flex items-center justify-center group-hover:bg-[var(--color-forest-500)] transition-colors duration-200">
              <Hammer className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className={`font-display font-400 text-base leading-tight transition-colors duration-300 ${scrolled ? "text-[var(--color-forest-900)]" : "text-[var(--color-forest-900)]"}`}>
                Craftsman
              </div>
              <div className="font-body text-[var(--color-walnut-500)] text-[0.6rem] tracking-[0.18em] uppercase font-500">
                Home Remodeling
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`font-body font-500 text-sm transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? "text-[var(--color-warm-600)] hover:text-[var(--color-forest-600)]"
                    : "text-[var(--color-forest-800)] hover:text-[var(--color-forest-600)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-[var(--color-forest-700)] font-body text-sm font-600 hover:text-[var(--color-forest-500)] transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="bg-[var(--color-forest-600)] hover:bg-[var(--color-forest-500)] text-white font-body font-600 text-sm px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[var(--color-forest-800)] p-1 cursor-pointer"
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
            className="lg:hidden bg-white border-t border-[var(--color-warm-200)] overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body font-500 text-base text-[var(--color-warm-600)] hover:text-[var(--color-forest-600)] transition-colors py-1 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[var(--color-warm-200)] space-y-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 text-[var(--color-forest-700)] font-body font-600 cursor-pointer"
                >
                  <Phone className="w-4 h-4" /> {BUSINESS.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-[var(--color-forest-600)] text-white font-body font-600 px-6 py-3 rounded-lg cursor-pointer"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
