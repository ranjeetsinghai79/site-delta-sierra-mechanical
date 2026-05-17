"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Camera, Apple, GraduationCap } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const PILLARS = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "State Licensed & Inspected",
    desc: "Fully licensed California facility with regular state inspections. Background-checked, fingerprinted staff on every shift.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Background-Checked Staff",
    desc: "Every teacher and aide is fingerprint-cleared, CPR certified, and trained in child development best practices.",
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "Daily Updates & Photos",
    desc: "Stay connected at work. We send photos and activity updates throughout the day via our parent app. Peace of mind, always.",
  },
  {
    icon: <Apple className="w-7 h-7" />,
    title: "Nutritious Organic Snacks",
    desc: "We provide fresh, organic snacks during the day. No processed foods. Allergen-aware menu updated seasonally.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-[var(--color-purple-700)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="text-[var(--color-yellow-400)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Why Families Choose Us
            </span>
            <h2 className="font-display font-900 text-white text-4xl md:text-5xl leading-tight mb-6">
              A Place Your Child<br />
              <span className="text-[var(--color-yellow-400)]">Loves to Be</span>
            </h2>
            <p className="font-body text-white/70 leading-relaxed mb-8 max-w-md">
              Since {BUSINESS.since}, we&apos;ve been the childcare home that families trust for safety, curriculum, and genuine love. We don&apos;t just babysit — we nurture.
            </p>

            {/* Stars & rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--color-yellow-400)] fill-[var(--color-yellow-400)]" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <span className="font-display font-800 text-white text-xl">{BUSINESS.google_rating}</span>
              <span className="font-body text-white/50 text-sm">· {BUSINESS.review_count} Google reviews</span>
            </div>

            {/* Big stat */}
            <div className="grid grid-cols-3 gap-5 mb-8">
              {[
                { value: `${BUSINESS.since}`, label: "Est." },
                { value: "200+", label: "Families Enrolled" },
                { value: "4:1", label: "Teacher Ratio" },
              ].map((s) => (
                <div key={s.label} className="text-center bg-white/10 rounded-2xl py-5">
                  <div className="font-display font-900 text-2xl text-[var(--color-yellow-400)]">{s.value}</div>
                  <div className="font-body text-white/60 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-yellow-400)] hover:bg-[var(--color-yellow-500)] text-[var(--color-gray-900)] font-display font-800 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              Schedule Your Tour
            </a>
          </motion.div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[var(--color-yellow-400)]/40 rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[var(--color-yellow-400)]/20 rounded-2xl flex items-center justify-center text-[var(--color-yellow-300)] mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-800 text-white text-base mb-2">{pillar.title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
