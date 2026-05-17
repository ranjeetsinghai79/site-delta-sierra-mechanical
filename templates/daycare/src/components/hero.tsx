"use client"

import { motion } from "framer-motion"
import { Star, ShieldCheck, Camera, Clock } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const AGE_GROUPS = [
  { label: "Infants", age: "6wk–18mo", color: "var(--color-purple-100)", text: "var(--color-purple-700)" },
  { label: "Toddlers", age: "18mo–3yr", color: "var(--color-warm-100)", text: "var(--color-yellow-500)" },
  { label: "Pre-K", age: "3–5 yrs", color: "var(--color-peach-100)", text: "var(--color-purple-600)" },
  { label: "After-School", age: "K–6th", color: "var(--color-purple-100)", text: "var(--color-purple-700)" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-warm-50)]">
      {/* Colorful blurred orbs */}
      <div className="absolute top-16 right-16 w-72 h-72 bg-[var(--color-purple-400)]/20 rounded-full blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 left-8 w-80 h-80 bg-[var(--color-yellow-400)]/20 rounded-full blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[var(--color-peach-100)]/60 rounded-full blur-[80px] pointer-events-none" aria-hidden />

      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-8 h-8 bg-[var(--color-yellow-400)] rounded-full opacity-60" aria-hidden />
      <div className="absolute top-40 right-16 w-4 h-4 bg-[var(--color-purple-400)] rounded-full opacity-50" aria-hidden />
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-[var(--color-purple-300)] rounded-full opacity-40" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[var(--color-purple-100)] border border-[var(--color-purple-400)]/40 text-[var(--color-purple-700)] text-xs font-body font-700 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[var(--color-yellow-500)] rounded-full" />
              Enrollment Open — Fall 2025
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-900 text-[var(--color-gray-900)] leading-[1.1] text-[2.8rem] sm:text-[3.6rem] md:text-[4.4rem] mb-6"
            >
              Where Little Minds<br />
              <span className="text-[var(--color-yellow-500)] relative inline-block">
                Grow Big Dreams
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden>
                  <path d="M4 8 Q75 2 150 6 Q225 10 296 4" stroke="var(--color-purple-400)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="font-body text-[var(--color-gray-600)] text-lg leading-relaxed mb-8 max-w-lg"
            >
              State-licensed childcare where every child is seen, celebrated, and given the foundation they need to thrive. Daily photos keep you connected all day long.
            </motion.p>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "State Licensed" },
                { icon: <Clock className="w-3.5 h-3.5" />, label: "Ages 6wks–12yrs" },
                { icon: <Camera className="w-3.5 h-3.5" />, label: "Daily Photo Updates" },
              ].map((chip) => (
                <span key={chip.label} className="inline-flex items-center gap-1.5 bg-[var(--color-purple-100)] text-[var(--color-purple-700)] text-xs font-body font-700 px-3.5 py-2 rounded-full">
                  {chip.icon}
                  {chip.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-purple-600)] hover:bg-[var(--color-purple-700)] text-white font-display font-800 px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
              >
                Schedule a Tour
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-purple-300)] hover:border-[var(--color-purple-400)] text-[var(--color-purple-700)] font-display font-700 px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-[var(--color-purple-100)] cursor-pointer"
              >
                View Programs
              </a>
            </motion.div>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[var(--color-yellow-500)] fill-[var(--color-yellow-500)]" />
                ))}
              </div>
              <span className="font-display font-800 text-[var(--color-gray-900)]">{BUSINESS.google_rating}</span>
              <span className="font-body text-[var(--color-gray-400)] text-sm">({BUSINESS.review_count} Google reviews)</span>
            </motion.div>
          </div>

          {/* Right — enrollment card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-3xl shadow-[var(--shadow-card)] border border-[var(--color-purple-100)] p-8">
              {/* Enrollment open badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="font-display font-800 text-[var(--color-gray-900)] text-xl">We&apos;re Accepting</div>
                <div className="bg-[var(--color-yellow-400)] text-[var(--color-gray-900)] font-display font-800 text-xs px-3 py-1.5 rounded-full">
                  Enrolling Now
                </div>
              </div>

              {/* Age group pills */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {AGE_GROUPS.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-2xl p-4"
                    style={{ background: group.color }}
                  >
                    <div className="font-display font-800 text-sm" style={{ color: group.text }}>{group.label}</div>
                    <div className="font-body text-xs mt-0.5" style={{ color: group.text, opacity: 0.7 }}>{group.age}</div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[var(--color-purple-100)] pt-5 mb-5">
                <div className="flex items-center gap-2 text-[var(--color-gray-600)] text-sm font-body mb-3">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-purple-500)]" />
                  State Licensed & Inspected
                </div>
                <div className="flex items-center gap-2 text-[var(--color-gray-600)] text-sm font-body mb-3">
                  <Camera className="w-4 h-4 text-[var(--color-purple-500)]" />
                  Daily parent photo updates
                </div>
                <div className="flex items-center gap-2 text-[var(--color-gray-600)] text-sm font-body">
                  <Star className="w-4 h-4 text-[var(--color-yellow-500)]" />
                  {BUSINESS.google_rating} stars · {BUSINESS.review_count} reviews
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center bg-[var(--color-purple-600)] hover:bg-[var(--color-purple-700)] text-white font-display font-800 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-[var(--shadow-cta)]"
              >
                Schedule Your Tour Today
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-[var(--color-purple-200)]/40 flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-[var(--color-purple-700)] text-xs font-body font-600 border border-[var(--color-purple-200)] bg-[var(--color-purple-100)]/60 px-4 py-2 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
