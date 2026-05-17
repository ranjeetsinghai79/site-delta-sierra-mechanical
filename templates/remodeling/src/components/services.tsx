"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed, Bath, Home, Layers, Sun, Wrench } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  utensils: <UtensilsCrossed className="w-6 h-6" />,
  bath: <Bath className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  sun: <Sun className="w-6 h-6" />,
  tool: <Wrench className="w-6 h-6" />,
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.08 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-[var(--color-warm-100)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-forest-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            What We Build
          </span>
          <h2 className="font-display text-[var(--color-forest-900)] text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="font-body text-[var(--color-warm-600)] max-w-xl mx-auto leading-relaxed">
            Every project is treated as if it were our own home. Quality craftsmanship, transparent pricing, and zero surprises.
          </p>
          <div className="w-14 h-0.5 bg-[var(--color-forest-500)] rounded-full mx-auto mt-6" />
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
              whileHover={{ y: -4, boxShadow: "0 16px 40px -8px rgba(20,54,31,0.18)" }}
              className="bg-white border border-[var(--color-warm-200)] hover:border-[var(--color-forest-400)]/40 rounded-xl p-7 transition-all duration-300 cursor-default shadow-[var(--shadow-card)] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-forest-600)]/10 group-hover:bg-[var(--color-forest-600)]/20 flex items-center justify-center text-[var(--color-forest-600)] mb-5 transition-colors duration-300">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="font-display text-xl text-[var(--color-forest-900)] mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-warm-600)] leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-[var(--color-warm-200)]">
                <a
                  href="#contact"
                  className="font-body font-600 text-xs text-[var(--color-forest-600)] hover:text-[var(--color-forest-500)] flex items-center gap-1 cursor-pointer transition-colors duration-200"
                >
                  Get a free estimate →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
