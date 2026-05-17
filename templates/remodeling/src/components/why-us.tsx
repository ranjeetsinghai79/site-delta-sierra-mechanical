"use client"

import { motion } from "framer-motion"
import { Pencil, ShieldCheck, CreditCard, Clock } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const pillars = [
  {
    icon: <Pencil className="w-7 h-7" />,
    title: "Design + Build",
    desc: "One team handles design and construction. No finger-pointing between contractors. Seamless from concept to completion.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Licensed & Bonded",
    desc: `${BUSINESS.license}. Fully insured on every project. Your home is protected from day one.`,
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: "Financing Available",
    desc: "Don't let budget hold back your dream home. Flexible financing options to fit your needs and timeline.",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "On Budget. On Time.",
    desc: "We quote honestly, work efficiently, and communicate throughout. No surprise invoices. No mystery delays.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-[var(--color-forest-900)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="text-[var(--color-walnut-300)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-white text-4xl md:text-5xl leading-tight mb-6">
              Built With Pride.<br />
              <span className="text-[var(--color-walnut-300)]">Built to Last.</span>
            </h2>
            <p className="font-body text-white/55 leading-relaxed mb-10 max-w-md">
              Since {BUSINESS.since}, we&apos;ve transformed hundreds of homes across Northern California. Every nail, every tile, every finish — done right the first time.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-5 mb-10">
              {[
                { value: "500+", label: "Projects Done" },
                { value: `${BUSINESS.google_rating}★`, label: "Google Rating" },
                { value: "15 Yrs", label: "Experience" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-[var(--color-walnut-300)]">{s.value}</div>
                  <div className="font-body text-xs text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-walnut-300)] hover:bg-[var(--color-walnut-500)] text-[var(--color-forest-900)] font-body font-700 px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
            >
              Start Your Project Today
            </a>
          </motion.div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[var(--color-forest-800)] hover:bg-[var(--color-forest-700)] border border-white/8 hover:border-[var(--color-walnut-300)]/30 rounded-xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-walnut-300)]/10 flex items-center justify-center text-[var(--color-walnut-300)] mb-4">
                  {p.icon}
                </div>
                <h3 className="font-display text-white text-base mb-2">{p.title}</h3>
                <p className="font-body text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
