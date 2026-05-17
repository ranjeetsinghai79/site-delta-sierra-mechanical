"use client"

import { motion } from "framer-motion"
import { Sparkles, Calendar, Truck, Building2, Home, Key } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  calendar: <Calendar className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  key: <Key className="w-6 h-6" />,
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
    <section id="services" className="py-24 px-5 bg-[var(--color-clean-50)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-sky-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            What We Clean
          </span>
          <h2 className="font-display font-800 text-[var(--color-blue-900)] text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
            From weekly maintenance to one-time deep cleans, we have a service for every home and schedule.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-[var(--color-sky-400)] to-[var(--color-sky-300)] rounded-full mx-auto mt-6" />
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
              whileHover={{ y: -6, boxShadow: "0 20px 50px -10px rgba(14,165,233,0.20)" }}
              className="bg-white border border-[var(--color-clean-200)] hover:border-[var(--color-sky-300)] rounded-2xl p-7 transition-all duration-300 cursor-default shadow-[var(--shadow-card)] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-sky-500)]/10 group-hover:bg-[var(--color-sky-500)]/20 flex items-center justify-center text-[var(--color-sky-500)] mb-5 transition-colors duration-300">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="font-display font-800 text-xl text-[var(--color-blue-900)] mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-[var(--color-gray-600)] leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-5 pt-4 border-t border-[var(--color-clean-100)]">
                <a
                  href="#contact"
                  className="font-body font-700 text-xs text-[var(--color-sky-500)] hover:text-[var(--color-sky-400)] flex items-center gap-1 cursor-pointer transition-colors duration-200"
                >
                  Book this service →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
