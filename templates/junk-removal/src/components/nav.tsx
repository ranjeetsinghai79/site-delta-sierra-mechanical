"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, Truck } from "lucide-react"
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
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[var(--shadow-nav)]"
          : "bg-white/0 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-10 h-10 bg-[var(--color-green-800)] rounded-lg flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <div
              className={`font-display font-800 text-lg leading-none tracking-wide ${
                scrolled ? "text-[var(--color-green-950)]" : "text-[var(--color-green-950)]"
              }`}
            >
              GREEN HAUL
            </div>
            <div className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-[var(--color-green-600)]">
              Junk Removal
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body font-600 text-sm text-[var(--color-green-900)] hover:text-[var(--color-orange-500)] transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wide"
          >
            <Phone className="w-4 h-4" />
            Get Free Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[var(--color-green-900)] cursor-pointer"
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
            className="md:hidden bg-white border-t border-[var(--color-gray-200)] overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-600 text-[var(--color-green-900)] py-1 cursor-pointer hover:text-[var(--color-orange-500)] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 bg-[var(--color-orange-500)] text-white font-display font-700 px-5 py-3 rounded-lg text-sm mt-2 cursor-pointer tracking-wide"
              >
                <Phone className="w-4 h-4" />
                Call Now — {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
