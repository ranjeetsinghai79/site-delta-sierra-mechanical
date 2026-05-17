"use client"

import { motion } from "framer-motion"
import { Phone, CalendarDays, Star, ShieldCheck, Zap, Heart } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  const featurePills = [
    { icon: <ShieldCheck className="w-4 h-4" />, label: "Digital X-Rays" },
    { icon: <Heart className="w-4 h-4" />, label: "Gentle Care" },
    { icon: <Star className="w-4 h-4" />, label: "Cosmetic Services" },
    { icon: <Zap className="w-4 h-4" />, label: "Family Friendly" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-stone-50)]">
      {/* Light background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-teal-500)]/8 rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-[var(--color-teal-400)]/6 rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — copy */}
          <div>
            {/* Inline trust badges */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex flex-wrap gap-2 mb-7"
            >
              {["Accepting New Patients", "Most Insurance Accepted", "Same-Day Emergencies"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-[var(--color-teal-600)]/10 border border-[var(--color-teal-500)]/30 text-[var(--color-teal-700)] text-xs font-body font-700 px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-teal-500)] rounded-full" />
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              className="font-display font-800 text-[var(--color-navy-900)] leading-[1.1] text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] mb-5"
            >
              Your Best Smile<br />
              <span className="text-[var(--color-teal-600)]">Starts Here.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="font-body text-[var(--color-stone-600)] text-lg leading-relaxed mb-8 max-w-lg"
            >
              Gentle, modern dental care for the whole family. We make every visit comfortable — whether you're due for a cleaning or ready for a smile transformation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-teal-600)] hover:bg-[var(--color-teal-700)] text-white font-display font-700 px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
              >
                <CalendarDays className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 border border-[var(--color-teal-500)]/40 hover:border-[var(--color-teal-600)] text-[var(--color-teal-700)] font-body font-600 px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-[var(--color-teal-600)]/5 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </motion.div>

            {/* Rating bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[var(--color-stone-200)] shadow-sm max-w-sm"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[var(--color-teal-500)] fill-[var(--color-teal-500)]" />
                ))}
              </div>
              <div className="font-display font-700 text-[var(--color-navy-900)] text-sm">{BUSINESS.google_rating}</div>
              <div className="font-body text-[var(--color-stone-400)] text-xs">{BUSINESS.review_count} Google Reviews</div>
            </motion.div>
          </div>

          {/* Right — decorative feature card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
            className="hidden lg:flex flex-col items-center justify-center gap-6"
          >
            {/* Feature pills in 2x2 grid */}
            <div className="relative">
              {/* Large circle */}
              <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[var(--color-teal-500)]/10 via-[var(--color-teal-400)]/5 to-transparent border border-[var(--color-teal-500)]/15 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {featurePills.map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.1 }}
                      className="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 border border-[var(--color-stone-200)] shadow-[var(--shadow-card)] text-center"
                    >
                      <div className="w-10 h-10 bg-[var(--color-teal-600)]/10 rounded-xl flex items-center justify-center text-[var(--color-teal-600)]">
                        {f.icon}
                      </div>
                      <span className="font-body font-700 text-[var(--color-navy-900)] text-xs leading-tight">{f.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stat row below */}
            <div className="flex gap-8 mt-2">
              {[
                { value: "15+", label: "Years Practice" },
                { value: "10k+", label: "Happy Smiles" },
                { value: BUSINESS.google_rating, label: "Star Rating" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-800 text-2xl text-[var(--color-teal-700)]">{s.value}</div>
                  <div className="font-body text-xs text-[var(--color-stone-400)] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
