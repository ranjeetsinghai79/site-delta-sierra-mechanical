"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, Sparkles } from "lucide-react"
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
    { label: "Treatments", href: "#services" },
    { label: "About", href: "#why-us" },
    { label: "Gallery", href: "#reviews" },
    { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[var(--color-ivory)]/97 backdrop-blur-md shadow-[var(--shadow-nav)]"
          : "bg-[var(--color-ivory)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo — elegant script-style */}
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center">
            {/* Lotus/leaf SVG in rose gold */}
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <path d="M16 28C16 28 6 22 6 13C6 9 9 6 12 6C14 6 15.5 7 16 8C16.5 7 18 6 20 6C23 6 26 9 26 13C26 22 16 28 16 28Z" fill="var(--color-rose-gold-500)" opacity="0.9"/>
              <path d="M16 28C16 28 16 16 16 8" stroke="var(--color-rose-gold-700)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16 14C14 11 10 10 8 11" stroke="var(--color-rose-gold-300)" strokeWidth="1" strokeLinecap="round"/>
              <path d="M16 14C18 11 22 10 24 11" stroke="var(--color-rose-gold-300)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="font-display font-600 text-[var(--color-brand-900)] text-lg leading-none tracking-wide">
              {BUSINESS.name}
            </div>
            <div className="font-body text-[0.6rem] tracking-[0.25em] text-[var(--color-rose-gold-700)] uppercase">
              Medical Aesthetics
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm text-[var(--color-stone-600)] hover:text-[var(--color-brand-900)] transition-colors duration-200 cursor-pointer tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-[var(--color-stone-600)] font-body text-sm hover:text-[var(--color-brand-900)] transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[var(--color-rose-gold-500)] hover:bg-[var(--color-rose-gold-700)] text-white font-body font-700 px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Book Consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg cursor-pointer text-[var(--color-brand-900)]"
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
            className="md:hidden bg-[var(--color-ivory)] border-t border-[var(--color-blush-200)] overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[var(--color-stone-600)] hover:text-[var(--color-brand-900)] py-1 cursor-pointer tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[var(--color-rose-gold-500)] text-white font-body font-700 px-5 py-3 rounded-full text-sm mt-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
