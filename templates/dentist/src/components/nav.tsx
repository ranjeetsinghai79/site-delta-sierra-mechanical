"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, CalendarDays } from "lucide-react"
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
    { label: "About", href: "#why-us" },
    { label: "Patient Info", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-[var(--shadow-nav)]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-[var(--color-teal-600)] rounded-full flex items-center justify-center">
            {/* Tooth SVG icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C9.5 3 7 4.5 6 7c-1 2.5-.5 5 0 7 .5 2 1 4 3 5s2-2 3-4c.5-1 1-2 2-2s1.5 1 2 2c1 2 1 6 3 4s2.5-3 3-5c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4z" />
            </svg>
          </div>
          <div>
            <div className="font-display font-800 text-base leading-tight text-[var(--color-navy-900)]">
              {BUSINESS.name}
            </div>
            <div className="font-body text-[0.6rem] tracking-widest text-[var(--color-teal-600)] uppercase font-600">
              {BUSINESS.address}
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm font-600 text-[var(--color-stone-600)] hover:text-[var(--color-teal-700)] transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-[var(--color-teal-700)] font-body font-600 text-sm hover:text-[var(--color-teal-600)] transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[var(--color-teal-600)] hover:bg-[var(--color-teal-700)] text-white font-display font-700 px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            <CalendarDays className="w-4 h-4" />
            Book Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg cursor-pointer text-[var(--color-navy-900)]"
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
            className="md:hidden bg-white border-t border-[var(--color-stone-200)] overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-600 text-[var(--color-stone-600)] hover:text-[var(--color-teal-700)] py-1 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[var(--color-teal-600)] text-white font-display font-700 px-5 py-3 rounded-full text-sm mt-2 cursor-pointer"
              >
                <CalendarDays className="w-4 h-4" />
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
