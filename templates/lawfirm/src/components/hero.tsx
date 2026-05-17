"use client"

import { motion } from "framer-motion"
import { Phone, ChevronRight, Scale, Star } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const winStats = [
  { value: "$12M+", label: "Recovered for Clients" },
  { value: "1,000+", label: "Cases Successfully Won" },
  { value: "20+", label: "Years Fighting for You" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[var(--color-charcoal-950)] pt-20 overflow-hidden">
      {/* Diagonal gold accent line */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "linear-gradient(135deg, transparent 60%, rgba(201,168,76,0.04) 100%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: "linear-gradient(var(--color-gold-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-500) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[var(--color-gold-400)] fill-[var(--color-gold-400)]" />
                ))}
              </div>
              <span className="text-[var(--color-gold-400)] font-body text-sm font-600">
                {BUSINESS.google_rating} · {BUSINESS.review_count} Google Reviews
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
              className="font-display font-700 text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white"
            >
              Your Rights.{" "}
              <span
                className="text-[var(--color-gold-500)]"
                style={{ WebkitTextFillColor: "var(--color-gold-500)" }}
              >
                Our Fight.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
              className="font-body font-300 text-white/65 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Since {BUSINESS.since}, Caldwell &amp; Associates has won millions for injured clients, defended the accused, and protected families across California. One call starts everything.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-[var(--color-charcoal-950)] font-display font-700 px-8 py-4 rounded text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
              >
                <Scale className="w-5 h-5" />
                Free Consultation
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[var(--color-gold-500)]/50 text-white hover:text-[var(--color-gold-400)] font-display font-700 px-8 py-4 rounded text-base transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>
            </motion.div>

            {/* Trust badges strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {TRUST_BADGES.slice(0, 4).map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-white/45 text-xs font-body">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-gold-500)]" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Win stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            {winStats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.35 + i * 0.1 }}
                className="relative bg-[var(--color-charcoal-900)] border border-[var(--color-gold-600)]/20 hover:border-[var(--color-gold-500)]/50 rounded-xl p-6 transition-all duration-300 group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-[var(--color-gold-500)] opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="font-display font-700 text-4xl text-[var(--color-gold-400)] mb-1 pl-3">
                  {stat.value}
                </div>
                <div className="font-body text-white/55 text-sm pl-3">{stat.label}</div>
              </motion.div>
            ))}

            {/* Bottom badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[var(--color-charcoal-800)] border border-[var(--color-gold-600)]/15 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/30 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-[var(--color-gold-500)]" />
              </div>
              <div>
                <div className="font-display font-700 text-white text-sm">No Fee Unless We Win</div>
                <div className="font-body text-white/45 text-xs mt-0.5">
                  You pay nothing until we recover compensation for you.
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--color-gold-500)] ml-auto shrink-0" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
