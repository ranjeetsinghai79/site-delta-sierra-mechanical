"use client"

import { motion } from "framer-motion"
import { Phone, ShieldCheck, Star, AlertTriangle } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-slate-900)]">
      {/* Diagonal grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--color-gray-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-400) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      {/* Red glow top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-[var(--color-red-700)]/20 rounded-full blur-[140px] pointer-events-none" aria-hidden />
      {/* Dark glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[var(--color-slate-950)]/60 rounded-full blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 pt-32 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — copy */}
          <div>
            {/* Storm badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[var(--color-red-600)]/15 border border-[var(--color-red-500)]/40 text-[var(--color-red-400)] text-xs font-body font-700 px-4 py-2 rounded-md mb-6"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Storm Damage Specialists · 24/7 Emergency Response
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              className="font-display font-900 text-white leading-[1.05] text-[2.6rem] sm:text-[3.2rem] md:text-[4rem] mb-6"
            >
              Your Roof.<br />
              Our Responsibility.<br />
              <span className="text-[var(--color-red-500)]">Storm Damage?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="font-body text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              We handle everything — inspection, repair, and insurance claim. 95% of storm repairs are fully covered. Don't pay out of pocket.
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
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-white font-display font-700 px-8 py-4 rounded-lg text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-body font-600 px-8 py-4 rounded-lg text-base transition-all duration-200 hover:bg-white/5 cursor-pointer"
              >
                Book Free Inspection
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-5"
            >
              <div className="flex items-center gap-1.5 text-white/55 text-sm font-body">
                <Star className="w-4 h-4 text-[var(--color-red-400)] fill-[var(--color-red-400)]" />
                <span className="text-white font-700">{BUSINESS.google_rating}</span> Google Rating
                <span className="text-white/30 ml-1">({BUSINESS.review_count} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/55 text-sm font-body">
                <ShieldCheck className="w-4 h-4 text-[var(--color-gray-400)]" />
                <span className="text-white font-700">{BUSINESS.license}</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/55 text-sm font-body">
                Serving since <span className="text-white font-700 ml-1">{BUSINESS.since}</span>
              </div>
            </motion.div>
          </div>

          {/* Right — stat cards grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "20+", label: "Years Experience", sub: `In business since ${BUSINESS.since}`, accent: "red" },
              { value: "5,000+", label: "Roofs Completed", sub: "Residential & commercial", accent: "dark" },
              { value: "95%", label: "Insurance Success", sub: "Claims fully covered", accent: "dark" },
              { value: BUSINESS.google_rating + "★", label: "Google Rating", sub: `${BUSINESS.review_count} verified reviews`, accent: "red" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.08 }}
                className={`rounded-xl border p-6 ${
                  stat.accent === "red"
                    ? "bg-[var(--color-red-600)]/12 border-[var(--color-red-500)]/30"
                    : "bg-[var(--color-slate-800)]/60 border-white/8"
                }`}
              >
                <div className={`font-display font-900 text-3xl mb-1 ${
                  stat.accent === "red" ? "text-[var(--color-red-400)]" : "text-white"
                }`}>
                  {stat.value}
                </div>
                <div className="font-body font-700 text-white text-sm">{stat.label}</div>
                <div className="font-body text-white/40 text-xs mt-0.5">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 pt-8 border-t border-white/8 flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-white/50 text-xs font-body font-600 border border-white/10 px-4 py-2 rounded-md"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
