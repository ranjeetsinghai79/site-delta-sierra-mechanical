"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Droplets, Sun, Activity, Star } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  sun: <Sun className="w-6 h-6" />,
  activity: <Activity className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.07 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[var(--color-rose-gold-400)]" />
            <span className="text-[var(--color-rose-gold-700)] text-xs font-body tracking-[0.35em] uppercase">
              Our Signature Treatments
            </span>
            <div className="w-12 h-px bg-[var(--color-rose-gold-400)]" />
          </div>
          <h2 className="font-display font-600 text-[var(--color-brand-900)] text-4xl md:text-5xl mb-4">
            Science-Backed Beauty
          </h2>
          <p className="font-body font-300 text-[var(--color-stone-600)] max-w-xl mx-auto leading-relaxed">
            Every treatment is performed by board-certified providers using medical-grade products and FDA-approved technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, boxShadow: "0 16px 48px -8px rgba(192,139,106,0.22)" }}
              className="relative bg-[var(--color-blush-100)] border border-[var(--color-rose-gold-300)]/30 hover:border-[var(--color-rose-gold-400)]/60 rounded-2xl p-7 transition-all duration-300 cursor-default group overflow-hidden"
            >
              {/* Decorative circle in corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-rose-gold-300)]/20 rounded-full blur-2xl -translate-y-4 translate-x-4" aria-hidden />

              <div className="relative">
                <div className="w-12 h-12 bg-[var(--color-rose-gold-500)]/15 group-hover:bg-[var(--color-rose-gold-500)]/25 rounded-xl flex items-center justify-center text-[var(--color-rose-gold-700)] mb-5 transition-colors duration-300">
                  {ICON_MAP[service.icon]}
                </div>
                <h3 className="font-display font-600 text-[var(--color-brand-900)] text-xl mb-2.5">
                  {service.title}
                </h3>
                <p className="font-body font-300 text-[var(--color-stone-600)] text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[var(--color-rose-gold-700)] font-body text-xs tracking-wide hover:gap-2.5 transition-all duration-200 cursor-pointer"
                >
                  Free Consultation
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-rose-gold-500)] hover:bg-[var(--color-rose-gold-700)] text-white font-body font-700 px-10 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
