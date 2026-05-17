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
    { label: "Services", href: "#services" },
    { label: "Storm Damage", href: "#services" },
    { label: "Insurance Claims", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-[var(--shadow-nav)]"
          : "bg-[var(--color-slate-900)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            scrolled ? "bg-[var(--color-red-600)]" : "bg-[var(--color-red-600)]"
          }`}>
            {/* Roof / house SVG icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
            </svg>
          </div>
          <div>
            <div className={`font-display font-800 text-base leading-tight transition-colors duration-300 ${
              scrolled ? "text-[var(--color-slate-900)]" : "text-white"
            }`}>
              Peak Shield
            </div>
            <div className={`font-body text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
              scrolled ? "text-[var(--color-gray-600)]" : "text-white/60"
            }`}>
              Roofing
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-body text-sm font-600 transition-colors duration-200 cursor-pointer ${
                scrolled
                  ? "text-[var(--color-gray-600)] hover:text-[var(--color-slate-900)]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className={`font-body text-xs font-600 transition-colors ${scrolled ? "text-[var(--color-gray-600)]" : "text-white/60"}`}>
            Storm Damage?
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-white font-display font-700 px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            Free Inspection
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg cursor-pointer transition-colors ${
            scrolled ? "text-[var(--color-slate-900)]" : "text-white"
          }`}
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
                  className="font-body font-600 text-[var(--color-gray-600)] hover:text-[var(--color-slate-900)] py-1 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 bg-[var(--color-red-600)] text-white font-display font-700 px-5 py-3 rounded-lg text-sm mt-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Free Inspection — {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
