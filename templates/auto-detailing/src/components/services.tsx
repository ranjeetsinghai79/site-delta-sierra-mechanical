"use client"

import { motion } from "framer-motion"
import { Sparkles, Star, Zap, Droplets, Shield, Sun } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  sun: <Sun className="w-6 h-6" />,
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: i * 0.08 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-[var(--color-carbon-900)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-cyan-500)] text-xs font-body font-600 tracking-[0.4em] uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="font-display font-700 text-white text-4xl md:text-5xl mb-4 uppercase tracking-[0.05em]">
            Our Services
          </h2>
          <p className="font-body text-[var(--color-silver-400)] max-w-xl mx-auto leading-relaxed">
            From a basic wash to full ceramic protection, every service is performed by certified professionals with premium materials.
          </p>
          <div className="w-16 h-0.5 bg-[var(--color-cyan-500)] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4, borderColor: "var(--color-cyan-400)" }}
              transition={{ duration: 0.2 }}
              className="relative rounded-xl p-7 bg-[var(--color-carbon-800)] border border-[var(--color-cyan-500)]/20 hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-default group"
            >
              {/* Cyan top border accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-cyan-500)]/40 to-transparent" />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[var(--color-cyan-500)]/10 text-[var(--color-cyan-400)] group-hover:bg-[var(--color-cyan-500)]/20 transition-colors duration-300">
                {ICON_MAP[service.icon]}
              </div>

              <h3 className="font-display font-700 text-white text-lg mb-2 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="font-body text-[var(--color-silver-400)] text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-5 pt-4 border-t border-[var(--color-cyan-500)]/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[var(--color-cyan-400)] font-body font-600 text-xs hover:gap-3 transition-all duration-200 cursor-pointer tracking-wide"
                >
                  Get a quote
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-cyan-500)] hover:bg-[var(--color-cyan-400)] text-[var(--color-carbon-950)] font-display font-700 px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer tracking-wider uppercase text-sm shadow-[var(--shadow-cta)]"
          >
            <Sparkles className="w-4 h-4" />
            Book Your Detail — Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  )
}
