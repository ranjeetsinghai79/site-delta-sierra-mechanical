"use client"

import { motion } from "framer-motion"
import { Car, Users, Shield, Briefcase, FileText, Globe } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  car: <Car className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  briefcase: <Briefcase className="w-5 h-5" />,
  "file-text": <FileText className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.08 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-[var(--color-cream-50)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-gold-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Legal Services
          </span>
          <h2 className="font-display font-700 text-[var(--color-charcoal-900)] text-4xl md:text-5xl mb-4">
            Practice Areas
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
            Comprehensive legal representation across the areas that matter most to individuals, families, and businesses.
          </p>
          <div className="w-14 h-0.5 bg-[var(--color-gold-500)] mx-auto mt-6" />
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
              className={`relative rounded-xl p-7 border-l-4 transition-all duration-300 cursor-default shadow-[var(--shadow-card)] ${
                service.urgent
                  ? "bg-[var(--color-charcoal-900)] border-l-[var(--color-gold-500)] hover:border-l-[var(--color-gold-400)]"
                  : "bg-white border-l-[var(--color-charcoal-800)] hover:border-l-[var(--color-gold-500)]"
              }`}
            >
              {service.urgent && (
                <div className="absolute top-4 right-4 bg-[var(--color-gold-500)] text-[var(--color-charcoal-950)] text-[0.6rem] font-700 px-2.5 py-1 rounded-full tracking-widest uppercase">
                  Urgent
                </div>
              )}
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                  service.urgent
                    ? "bg-[var(--color-gold-500)]/15 text-[var(--color-gold-400)]"
                    : "bg-[var(--color-charcoal-900)]/8 text-[var(--color-charcoal-800)]"
                }`}
              >
                {ICON_MAP[service.icon]}
              </div>
              <h3
                className={`font-display font-700 text-xl mb-3 ${
                  service.urgent ? "text-white" : "text-[var(--color-charcoal-900)]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`font-body text-sm leading-relaxed ${
                  service.urgent ? "text-white/60" : "text-[var(--color-gray-600)]"
                }`}
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-charcoal-900)] hover:bg-[var(--color-charcoal-800)] text-[var(--color-gold-400)] font-display font-700 px-10 py-4 rounded transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Get a Free Case Evaluation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
