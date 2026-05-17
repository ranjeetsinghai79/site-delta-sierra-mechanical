"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const links = [
    { label: "Programs", href: "#services" },
    { label: "About", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Enroll", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[var(--shadow-nav)]"
          : "bg-[var(--color-warm-50)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-10 h-10 bg-[var(--color-yellow-400)] rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden>
              <circle cx="12" cy="12" r="5" fill="var(--color-purple-700)" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="var(--color-purple-700)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="font-display font-800 text-base leading-none text-[var(--color-purple-800)]">
              Sunshine Sprouts
            </div>
            <div className="font-body text-[0.6rem] tracking-wider uppercase text-[var(--color-gray-400)] mt-0.5">
              Learning Center
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body font-600 text-sm text-[var(--color-gray-600)] hover:text-[var(--color-purple-600)] transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="font-body font-600 text-sm text-[var(--color-gray-600)] hover:text-[var(--color-purple-600)] transition-colors cursor-pointer"
          >
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[var(--color-purple-600)] hover:bg-[var(--color-purple-700)] text-white font-display font-700 px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            Schedule a Tour
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-[var(--color-purple-700)] cursor-pointer"
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
            className="md:hidden bg-white border-t border-[var(--color-purple-100)] overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-600 text-[var(--color-gray-600)] py-1 cursor-pointer hover:text-[var(--color-purple-600)] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[var(--color-purple-600)] text-white font-display font-700 px-5 py-3 rounded-full text-sm mt-2 cursor-pointer"
              >
                Schedule a Tour
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 border border-[var(--color-purple-200)] text-[var(--color-purple-700)] font-body font-600 px-5 py-3 rounded-full text-sm cursor-pointer"
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
