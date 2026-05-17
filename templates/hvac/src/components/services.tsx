"use client"

import { motion } from "framer-motion"
import { Thermometer, Flame, Droplets, Zap, ShieldCheck, Wrench } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  thermometer: <Thermometer className="w-6 h-6" />,
  flame: <Flame className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  wrench: <Wrench className="w-6 h-6" />,
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
    <section id="services" className="py-24 px-5 bg-[var(--color-slate-50)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-orange-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="font-body text-[var(--color-slate-600)] max-w-xl mx-auto leading-relaxed">
            Full-service HVAC and plumbing for residential and commercial properties across the Central Valley.
          </p>
          <div className="w-16 h-1 bg-[var(--color-orange-500)] rounded-full mx-auto mt-6" />
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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl p-7 border transition-colors duration-300 cursor-default ${
                service.urgent
                  ? "bg-[var(--color-navy-900)] border-[var(--color-orange-500)]/50 hover:border-[var(--color-orange-500)]"
                  : "bg-white border-[var(--color-slate-200)] hover:border-[var(--color-navy-700)]/30 shadow-[var(--shadow-card)]"
              }`}
            >
              {service.urgent && (
                <div className="absolute top-4 right-4 bg-[var(--color-orange-500)] text-white text-[0.6rem] font-700 px-2.5 py-1 rounded-full tracking-wider">
                  24/7
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                service.urgent
                  ? "bg-[var(--color-orange-500)]/20 text-[var(--color-orange-400)]"
                  : "bg-[var(--color-navy-700)]/10 text-[var(--color-navy-700)]"
              }`}>
                {ICON_MAP[service.icon]}
              </div>
              <h3 className={`font-display font-700 text-xl mb-2 ${service.urgent ? "text-white" : "text-[var(--color-navy-900)]"}`}>
                {service.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${service.urgent ? "text-white/60" : "text-[var(--color-slate-600)]"}`}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
