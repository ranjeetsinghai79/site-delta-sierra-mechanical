"use client"

import { motion } from "framer-motion"
import { Phone, ArrowRight, Star, CheckCircle } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const projectStats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15 Yrs", label: "In Business" },
  { value: "4.8★", label: "Google Rating" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[var(--color-warm-50)] pt-20 overflow-hidden">
      {/* Organic background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 120% 80% at 80% 20%, rgba(196,164,106,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(31,78,44,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[var(--color-forest-600)]/10 border border-[var(--color-forest-600)]/20 rounded-full px-4 py-2 mb-8"
            >
              <Star className="w-3.5 h-3.5 text-[var(--color-forest-600)] fill-[var(--color-forest-600)]" />
              <span className="font-body font-600 text-[var(--color-forest-700)] text-xs tracking-wide">
                {BUSINESS.google_rating} Stars · {BUSINESS.review_count} Reviews
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6 text-[var(--color-forest-900)]"
            >
              Spaces That{" "}
              <em className="not-italic text-[var(--color-forest-600)]">Tell</em>
              <br />
              Your Story.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
              className="font-body text-[var(--color-warm-600)] text-lg leading-relaxed mb-10 max-w-md"
            >
              From kitchen transformations to full home renovations — Craftsman delivers quality craftsmanship on time and on budget. Licensed, insured, and locally trusted since {BUSINESS.since}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-forest-600)] hover:bg-[var(--color-forest-500)] text-white font-body font-600 px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-warm-400)] hover:border-[var(--color-forest-600)] text-[var(--color-forest-800)] hover:text-[var(--color-forest-600)] font-body font-600 px-8 py-4 rounded-xl text-base transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 bg-white border border-[var(--color-warm-200)] rounded-full px-3 py-1.5 text-xs font-body font-500 text-[var(--color-warm-600)]"
                >
                  <CheckCircle className="w-3 h-3 text-[var(--color-forest-500)]" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Before/After + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.25 }}
            className="flex flex-col gap-5"
          >
            {/* Before/After visual card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-warm-200)] shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-2">
                <div className="relative p-6 bg-[var(--color-warm-100)] flex flex-col items-center justify-center min-h-[180px]">
                  <div className="absolute top-3 left-3 bg-[var(--color-warm-400)] text-white text-xs font-body font-600 px-2.5 py-1 rounded-full">
                    BEFORE
                  </div>
                  <div className="w-full h-28 bg-[var(--color-warm-200)] rounded-lg flex items-center justify-center">
                    <span className="font-body text-[var(--color-warm-400)] text-xs">Old Kitchen</span>
                  </div>
                </div>
                <div className="relative p-6 bg-[var(--color-forest-900)] flex flex-col items-center justify-center min-h-[180px]">
                  <div className="absolute top-3 right-3 bg-[var(--color-forest-500)] text-white text-xs font-body font-600 px-2.5 py-1 rounded-full">
                    AFTER
                  </div>
                  <div className="w-full h-28 bg-[var(--color-forest-800)] rounded-lg flex items-center justify-center border border-[var(--color-walnut-300)]/20">
                    <span className="font-body text-[var(--color-forest-400)] text-xs">Dream Kitchen</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-[var(--color-warm-200)] bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-body font-500 text-[var(--color-warm-600)] text-sm">Kitchen Remodel · Tracy, CA</span>
                  <span className="font-body font-700 text-[var(--color-forest-600)] text-xs bg-[var(--color-forest-600)]/8 px-3 py-1 rounded-full">
                    3 Weeks
                  </span>
                </div>
              </div>
            </div>

            {/* Project stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {projectStats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.4 + i * 0.08 }}
                  className="bg-white border border-[var(--color-warm-200)] rounded-xl p-4 text-center shadow-[var(--shadow-card)]"
                >
                  <div className="font-display text-2xl text-[var(--color-forest-700)] mb-1">{stat.value}</div>
                  <div className="font-body text-xs text-[var(--color-warm-600)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* License badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="bg-[var(--color-forest-900)] rounded-xl px-5 py-4 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-[var(--color-walnut-300)]/15 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[var(--color-walnut-300)]" />
              </div>
              <div>
                <div className="font-body font-600 text-white text-sm">{BUSINESS.license}</div>
                <div className="font-body text-white/40 text-xs">Licensed General Contractor · Fully Insured</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
