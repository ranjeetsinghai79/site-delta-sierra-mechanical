"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, Scale } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Practice Areas", href: "#services" },
    { label: "About", href: "#why-us" },
    { label: "Results", href: "#reviews" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-charcoal-950)] shadow-[var(--shadow-nav)]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/30 flex items-center justify-center group-hover:bg-[var(--color-gold-500)]/25 transition-colors duration-200">
              <Scale className="w-5 h-5 text-[var(--color-gold-500)]" />
            </div>
            <div>
              <div className="font-display font-700 text-[var(--color-white)] text-base leading-tight">{BUSINESS.name}</div>
              <div className="font-body text-[var(--color-gold-400)] text-[0.6rem] tracking-[0.2em] uppercase">Attorneys at Law</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-sm text-white/65 hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-[var(--color-gold-400)] font-body text-sm font-600 hover:text-[var(--color-gold-300)] transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-[var(--color-charcoal-950)] font-display font-700 text-sm px-6 py-2.5 rounded transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/70 hover:text-white transition-colors p-1 cursor-pointer"
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
            className="lg:hidden bg-[var(--color-charcoal-900)] border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-base text-white/70 hover:text-[var(--color-gold-400)] transition-colors duration-200 py-1 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 text-[var(--color-gold-400)] font-body font-600 cursor-pointer"
                >
                  <Phone className="w-4 h-4" /> {BUSINESS.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-[var(--color-gold-500)] text-[var(--color-charcoal-950)] font-display font-700 px-6 py-3 rounded cursor-pointer"
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
