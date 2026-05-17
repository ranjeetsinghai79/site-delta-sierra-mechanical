"use client"

import { motion } from "framer-motion"
import { Phone, Sparkles, Star, ChevronRight } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const servicePills = ["Botox & Fillers", "Laser Hair Removal", "HydraFacial"]

const treatmentHighlights = [
  { label: "Botox Results", sub: "Natural-looking, lasts 3–4 mo" },
  { label: "Laser Hair", sub: "6 sessions, permanent results" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-ivory)]">
      {/* Blush gradient blob */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--color-rose-gold-300)]/30 rounded-full blur-[140px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[var(--color-blush-200)]/50 rounded-full blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 pt-32 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — luxury copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-px bg-[var(--color-rose-gold-500)]" />
              <span className="font-body text-[var(--color-rose-gold-700)] text-xs tracking-[0.35em] uppercase">
                Tracy, California
              </span>
            </motion.div>

            {/* Large heading — Cormorant Garamond */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-600 text-[var(--color-brand-900)] leading-[1.08] text-[3rem] sm:text-[3.8rem] md:text-[5rem] mb-6"
            >
              Reveal Your Most<br />
              <span className="italic text-[var(--color-rose-gold-700)]">Radiant Self.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="font-body font-300 text-[var(--color-stone-600)] text-lg leading-relaxed mb-7 max-w-lg"
            >
              Medical-grade aesthetic treatments delivered by board-certified providers. Science-backed. Results-driven. Deeply personal.
            </motion.p>

            {/* Service preview pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {servicePills.map((s) => (
                <span
                  key={s}
                  className="font-body text-xs text-[var(--color-rose-gold-700)] bg-[var(--color-blush-100)] border border-[var(--color-rose-gold-300)]/50 px-4 py-1.5 rounded-full tracking-wide"
                >
                  {s}
                </span>
              ))}
              <span className="font-body text-xs text-[var(--color-stone-400)] bg-white border border-[var(--color-stone-200)] px-4 py-1.5 rounded-full tracking-wide">
                + More
              </span>
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
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-rose-gold-500)] hover:bg-[var(--color-rose-gold-700)] text-white font-body font-700 px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wide"
              >
                <Sparkles className="w-4 h-4" />
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-rose-gold-400)]/50 hover:border-[var(--color-rose-gold-500)] text-[var(--color-brand-900)] font-body px-8 py-4 rounded-full text-sm transition-all duration-200 hover:bg-[var(--color-blush-100)] cursor-pointer tracking-wide"
              >
                View Treatments
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[var(--color-rose-gold-500)] fill-[var(--color-rose-gold-500)]" />
                ))}
              </div>
              <span className="font-display font-600 text-[var(--color-brand-900)] text-sm">{BUSINESS.google_rating} on Google</span>
              <span className="text-[var(--color-stone-400)] text-xs">· {BUSINESS.review_count} reviews</span>
            </motion.div>
          </div>

          {/* Right — elegant treatment card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative blush circle */}
              <div className="absolute inset-0 bg-[var(--color-rose-gold-300)]/20 rounded-full blur-2xl scale-90" aria-hidden />

              <div className="relative bg-white rounded-3xl p-8 shadow-[var(--shadow-card)] border border-[var(--color-blush-200)]">
                {/* Before & After label */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-px bg-[var(--color-rose-gold-400)]" />
                  <span className="font-body text-[var(--color-rose-gold-700)] text-xs tracking-[0.25em] uppercase">
                    Real Results
                  </span>
                </div>

                {/* Treatment highlight cards */}
                <div className="space-y-4 mb-6">
                  {treatmentHighlights.map((t, i) => (
                    <motion.div
                      key={t.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-[var(--color-blush-100)] rounded-xl border border-[var(--color-rose-gold-300)]/30"
                    >
                      <div className="w-10 h-10 bg-[var(--color-rose-gold-500)]/15 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[var(--color-rose-gold-500)]" />
                      </div>
                      <div>
                        <div className="font-display font-600 text-[var(--color-brand-900)] text-base">{t.label}</div>
                        <div className="font-body text-[var(--color-stone-400)] text-xs">{t.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[var(--color-blush-200)] mb-6" />

                {/* Rating & stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: BUSINESS.google_rating, label: "Rating" },
                    { value: BUSINESS.review_count + "+", label: "Clients" },
                    { value: "10+", label: "Yrs Exp." },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-600 text-xl text-[var(--color-brand-900)]">{s.value}</div>
                      <div className="font-body text-xs text-[var(--color-stone-400)]">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-rose-gold-500)] hover:bg-[var(--color-rose-gold-700)] text-white font-body font-700 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer tracking-wide"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
