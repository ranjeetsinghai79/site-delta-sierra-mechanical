"use client"

import { motion } from "framer-motion"
import { Phone, CheckCircle, Star, Sparkles } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const checklist = [
  { item: "All Floors Cleaned & Mopped", done: true },
  { item: "Kitchen Deep Scrubbed", done: true },
  { item: "Bathrooms Disinfected", done: true },
  { item: "Dusting & Surfaces Wiped", done: true },
  { item: "Baseboards & Vents", done: true },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white pt-20 overflow-hidden">
      {/* Decorative sparkle dots */}
      {[
        { top: "15%", left: "5%", size: 6, delay: 0 },
        { top: "25%", right: "8%", size: 4, delay: 0.3 },
        { top: "60%", left: "3%", size: 5, delay: 0.6 },
        { top: "75%", right: "5%", size: 3, delay: 0.9 },
        { top: "40%", right: "12%", size: 4, delay: 0.2 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[var(--color-sky-300)] pointer-events-none"
          style={{
            top: dot.top,
            left: (dot as { left?: string }).left,
            right: (dot as { right?: string }).right,
            width: dot.size,
            height: dot.size,
          }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

      {/* Light blue background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 100% 80% at 80% 50%, rgba(14,165,233,0.05) 0%, transparent 60%)",
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
              className="inline-flex items-center gap-2 bg-[var(--color-clean-50)] border border-[var(--color-clean-200)] rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-sky-500)]" />
              <span className="font-body font-600 text-[var(--color-sky-500)] text-xs">
                {BUSINESS.google_rating} Stars · {BUSINESS.review_count}+ Reviews
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
              className="font-display font-800 text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6 text-[var(--color-blue-900)]"
            >
              Your Home.{" "}
              <span className="text-[var(--color-sky-500)]">Spotless.</span>
              <br />
              Always.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
              className="font-body text-[var(--color-gray-600)] text-lg leading-relaxed mb-8 max-w-md"
            >
              Background-checked, eco-friendly cleaners who show up on time, do the job right, and make your home genuinely shine. No contracts — cancel anytime.
            </motion.p>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 bg-[var(--color-clean-50)] border border-[var(--color-clean-200)] rounded-full px-3 py-1.5 text-xs font-body font-600 text-[var(--color-blue-700)]"
                >
                  <CheckCircle className="w-3 h-3 text-[var(--color-sky-500)]" />
                  {badge}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-sky-500)] hover:bg-[var(--color-sky-400)] text-white font-display font-700 px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                Book Your First Clean
              </a>
              <a
                href="#why-us"
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-clean-200)] hover:border-[var(--color-sky-300)] text-[var(--color-blue-700)] hover:text-[var(--color-sky-500)] font-display font-700 px-8 py-4 rounded-full text-base transition-all duration-200 cursor-pointer"
              >
                See Pricing
              </a>
            </motion.div>
          </div>

          {/* Right — Floating checklist card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Clean checklist card */}
            <div
              className="bg-white rounded-2xl border border-[var(--color-clean-200)] p-6"
              style={{ boxShadow: "0 20px 60px -10px rgba(14,165,233,0.18), 0 4px 16px -4px rgba(14,165,233,0.10)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="font-display font-800 text-[var(--color-blue-900)] text-base">Cleaning Checklist</div>
                  <div className="font-body text-[var(--color-gray-400)] text-xs mt-0.5">Standard Deep Clean</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--color-sky-500)] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="space-y-3">
                {checklist.map((item, i) => (
                  <motion.div
                    key={item.item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--color-sky-500)] flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-body text-sm text-[var(--color-blue-900)] font-600">{item.item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Rating badge */}
              <div className="mt-5 pt-4 border-t border-[var(--color-clean-100)] flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--color-sky-400)] fill-[var(--color-sky-400)]" />
                  ))}
                </div>
                <span className="font-display font-800 text-[var(--color-blue-900)] text-sm">{BUSINESS.google_rating}</span>
                <span className="font-body text-[var(--color-gray-400)] text-xs">· {BUSINESS.review_count} reviews</span>
              </div>
            </div>

            {/* Quick stat row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "2-4 hrs", l: "Avg Clean Time" },
                { v: "100%", l: "Satisfaction" },
                { v: "0", l: "Contracts" },
              ].map((s) => (
                <div key={s.l} className="bg-[var(--color-clean-50)] border border-[var(--color-clean-200)] rounded-xl p-4 text-center">
                  <div className="font-display font-800 text-[var(--color-sky-500)] text-xl">{s.v}</div>
                  <div className="font-body text-[var(--color-gray-400)] text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <motion.a
              href={BUSINESS.phoneHref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 bg-[var(--color-blue-900)] text-white rounded-xl px-5 py-4 cursor-pointer hover:bg-[var(--color-blue-800)] transition-colors duration-200"
            >
              <Phone className="w-5 h-5 text-[var(--color-sky-400)] shrink-0" />
              <div>
                <div className="font-body text-xs text-white/50">Call or Text Anytime</div>
                <div className="font-display font-700 text-base">{BUSINESS.phone}</div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
