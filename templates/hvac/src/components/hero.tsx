"use client"

import { motion } from "framer-motion"
import { Phone, Clock, ShieldCheck, Star } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-navy-900)]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--color-blue-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-blue-400) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      {/* Blue glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-navy-700)]/30 rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-orange-500)]/10 rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* Emergency badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[var(--color-orange-500)]/15 border border-[var(--color-orange-500)]/40 text-[var(--color-orange-400)] text-xs font-body font-700 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[var(--color-orange-500)] rounded-full animate-pulse" />
              24/7 Emergency Service Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              className="font-display font-900 text-white leading-[1.05] text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] mb-6"
            >
              Fast HVAC &<br />
              Plumbing Repair<br />
              <span className="text-[var(--color-orange-500)]">You Can Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="font-body text-white/65 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Licensed, insured, and on-call 24/7. We fix AC, heating, and plumbing the same day — or your service call is free.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-body font-600 px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/8 cursor-pointer"
              >
                Get Free Estimate
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-1.5 text-white/60 text-sm font-body">
                <Star className="w-4 h-4 text-[var(--color-orange-400)] fill-[var(--color-orange-400)]" />
                <span className="text-white font-700">{BUSINESS.google_rating}</span> Google Rating
                <span className="text-white/30 ml-1">({BUSINESS.review_count} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm font-body">
                <ShieldCheck className="w-4 h-4 text-[var(--color-blue-400)]" />
                <span className="text-white font-700">Licensed</span> & Insured
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-sm font-body">
                <Clock className="w-4 h-4 text-[var(--color-blue-400)]" />
                Serving since <span className="text-white font-700 ml-1">{BUSINESS.since}</span>
              </div>
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "45 min", label: "Avg. Response Time", sub: "Emergency calls", accent: "orange" },
              { value: "16+", label: "Years in Business", sub: `Since ${BUSINESS.since}`, accent: "blue" },
              { value: "4,800+", label: "Jobs Completed", sub: "Residential & commercial", accent: "blue" },
              { value: "100%", label: "Satisfaction Guarantee", sub: "Or we make it right", accent: "orange" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.08 }}
                className={`rounded-2xl border p-6 ${
                  stat.accent === "orange"
                    ? "bg-[var(--color-orange-500)]/10 border-[var(--color-orange-500)]/30"
                    : "bg-[var(--color-navy-700)]/30 border-[var(--color-blue-500)]/20"
                }`}
              >
                <div className={`font-display font-900 text-3xl mb-1 ${
                  stat.accent === "orange" ? "text-[var(--color-orange-400)]" : "text-[var(--color-blue-400)]"
                }`}>
                  {stat.value}
                </div>
                <div className="font-body font-700 text-white text-sm">{stat.label}</div>
                <div className="font-body text-white/45 text-xs mt-0.5">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-white/55 text-xs font-body font-600 border border-white/12 px-4 py-2 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
