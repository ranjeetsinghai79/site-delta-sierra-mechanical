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
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Service Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-nav)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-[var(--color-navy-700)] rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
          </div>
          <div>
            <div className={`font-display font-bold text-base leading-none ${scrolled ? "text-[var(--color-navy-900)]" : "text-white"}`}>
              {BUSINESS.name.split(" ")[0]}
            </div>
            <div className={`font-body text-[0.6rem] tracking-widest uppercase ${scrolled ? "text-[var(--color-slate-600)]" : "text-white/70"}`}>
              {BUSINESS.name.split(" ").slice(1).join(" ")}
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
                scrolled ? "text-[var(--color-slate-700)] hover:text-[var(--color-navy-700)]" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg cursor-pointer ${scrolled ? "text-[var(--color-navy-900)]" : "text-white"}`}
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
            className="md:hidden bg-white border-t border-[var(--color-slate-200)] overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-600 text-[var(--color-slate-700)] py-1 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 bg-[var(--color-orange-500)] text-white font-display font-700 px-5 py-3 rounded-full text-sm mt-2 cursor-pointer"
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
