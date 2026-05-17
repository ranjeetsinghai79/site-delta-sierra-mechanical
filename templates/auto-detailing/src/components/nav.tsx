"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-carbon-950)] border-b border-[var(--color-cyan-500)]/15 shadow-[var(--shadow-nav)]">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-10 h-10 border border-[var(--color-cyan-500)]/40 rounded-lg flex items-center justify-center shrink-0 group-hover:border-[var(--color-cyan-400)] transition-colors duration-300">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="var(--color-cyan-500)" opacity="0.8"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--color-cyan-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="font-display font-700 text-lg leading-none text-white tracking-[0.12em] uppercase">
              APEX
            </div>
            <div className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-[var(--color-cyan-500)] mt-0.5">
              Auto Detailing
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm font-500 text-[var(--color-silver-400)] hover:text-[var(--color-cyan-400)] transition-colors duration-200 cursor-pointer tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="font-body text-sm text-[var(--color-silver-400)] hover:text-white transition-colors cursor-pointer"
          >
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[var(--color-cyan-500)] hover:bg-[var(--color-cyan-400)] text-[var(--color-carbon-950)] font-display font-700 px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wider uppercase"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[var(--color-cyan-400)] cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[var(--color-carbon-900)] border-t border-[var(--color-cyan-500)]/20 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-500 text-[var(--color-silver-400)] py-1 cursor-pointer hover:text-[var(--color-cyan-400)] transition-colors tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[var(--color-cyan-500)] text-[var(--color-carbon-950)] font-display font-700 px-5 py-3 rounded-lg text-sm mt-2 cursor-pointer tracking-wider uppercase"
              >
                Book Appointment
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 border border-[var(--color-cyan-500)]/30 text-[var(--color-cyan-400)] font-body font-600 px-5 py-3 rounded-lg text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
