"use client"

import { motion } from "framer-motion"
import { Phone, Recycle, Clock } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-green-950)]">
      {/* Industrial diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            var(--color-green-400) 0px,
            var(--color-green-400) 2px,
            transparent 2px,
            transparent 32px
          )`,
        }}
        aria-hidden
      />

      {/* Green glow top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-green-800)]/25 rounded-full blur-[130px] pointer-events-none" aria-hidden />
      {/* Orange glow bottom left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-orange-500)]/12 rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* Same-day badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[var(--color-orange-500)]/15 border border-[var(--color-orange-500)]/40 text-[var(--color-orange-400)] text-xs font-body font-700 px-4 py-2 rounded-lg mb-6 tracking-wider uppercase"
            >
              <span className="w-2 h-2 bg-[var(--color-orange-500)] rounded-full animate-pulse" />
              Same-Day Service Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-900 text-white leading-[0.95] text-[4rem] sm:text-[5rem] md:text-[6rem] mb-6 tracking-wide uppercase"
            >
              WE HAUL.<br />
              <span className="text-[var(--color-orange-500)]">YOU RELAX.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="font-body text-white/65 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Junk removed fast, eco-responsibly, and at an upfront price. No hidden fees, no surprises. We load it, haul it, and recycle or donate what we can.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-8 py-4 rounded-lg text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wide uppercase"
              >
                Get Free Quote
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-display font-700 px-8 py-4 rounded-lg text-base transition-all duration-200 hover:bg-white/8 cursor-pointer tracking-wide uppercase"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: <Clock className="w-4 h-4 text-[var(--color-orange-400)]" />, text: "45 min avg arrival" },
                { icon: <Recycle className="w-4 h-4 text-[var(--color-green-400)]" />, text: "85% donated or recycled" },
                { icon: <span className="font-display font-900 text-[var(--color-orange-400)] text-sm">{BUSINESS.google_rating}★</span>, text: `${BUSINESS.review_count} Google reviews` },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-body">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Main stat block */}
            <div className="bg-[var(--color-green-900)]/60 border border-[var(--color-green-700)]/40 rounded-2xl p-7">
              <div className="font-display font-900 text-[var(--color-orange-400)] text-5xl mb-1 tracking-tight">
                {BUSINESS.google_rating}★
              </div>
              <div className="font-body font-700 text-white text-base">Google Rating</div>
              <div className="font-body text-white/45 text-sm">{BUSINESS.review_count} verified reviews</div>
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                {[
                  { value: "Same-Day", label: "Available" },
                  { value: "85%", label: "Eco Recycled" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-800 text-[var(--color-green-400)] text-2xl">{s.value}</div>
                    <div className="font-body text-white/50 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `Since ${BUSINESS.since}`, label: "Years Experience", accent: "green" },
                { value: "No Hidden", label: "Fees — Ever", accent: "orange" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl border p-5 ${
                    stat.accent === "orange"
                      ? "bg-[var(--color-orange-500)]/10 border-[var(--color-orange-500)]/25"
                      : "bg-[var(--color-green-900)]/40 border-[var(--color-green-700)]/30"
                  }`}
                >
                  <div className={`font-display font-900 text-xl mb-1 ${
                    stat.accent === "orange" ? "text-[var(--color-orange-400)]" : "text-[var(--color-green-400)]"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="font-body text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
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
              className="text-white/60 text-xs font-body font-600 border border-white/15 px-4 py-2 rounded-lg tracking-wide"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
