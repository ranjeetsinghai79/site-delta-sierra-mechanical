"use client"

import { motion } from "framer-motion"
import { Sparkles, ShieldCheck, Smile, AlignCenter, Zap, Star } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  smile: <Smile className="w-6 h-6" />,
  "align-center": <AlignCenter className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
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
    <section id="services" className="py-24 px-5 bg-[var(--color-stone-50)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-teal-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl mb-4">
            Our Dental Services
          </h2>
          <p className="font-body text-[var(--color-stone-600)] max-w-xl mx-auto leading-relaxed">
            From routine cleanings to full smile makeovers, we offer comprehensive care for every stage of life.
          </p>
          <div className="w-16 h-0.5 bg-[var(--color-teal-600)] rounded-full mx-auto mt-6" />
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
              whileHover={{ y: -5, boxShadow: "0 12px 40px -8px rgba(13,148,136,0.18)" }}
              className={`rounded-2xl p-7 border transition-all duration-300 cursor-default ${
                service.urgent
                  ? "bg-[var(--color-teal-700)] border-[var(--color-teal-600)]"
                  : "bg-white border-[var(--color-stone-200)] hover:border-[var(--color-teal-400)]/40"
              }`}
            >
              {service.urgent && (
                <div className="absolute top-4 right-4 bg-white/20 text-white text-[0.6rem] font-700 px-2.5 py-1 rounded-full tracking-wider">
                  SAME DAY
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                service.urgent
                  ? "bg-white/15 text-white"
                  : "bg-[var(--color-teal-600)]/10 text-[var(--color-teal-700)]"
              }`}>
                {ICON_MAP[service.icon]}
              </div>
              <h3 className={`font-display font-700 text-xl mb-2.5 ${
                service.urgent ? "text-white" : "text-[var(--color-navy-900)]"
              }`}>
                {service.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${
                service.urgent ? "text-white/70" : "text-[var(--color-stone-600)]"
              }`}>
                {service.desc}
              </p>
              {!service.urgent && (
                <div className="mt-5 pt-4 border-t border-[var(--color-stone-100)]">
                  <a href="#contact" className="font-body text-xs font-700 text-[var(--color-teal-600)] hover:text-[var(--color-teal-700)] cursor-pointer transition-colors">
                    Learn more →
                  </a>
                </div>
              )}
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
            className="inline-flex items-center gap-2 bg-[var(--color-teal-600)] hover:bg-[var(--color-teal-700)] text-white font-display font-700 px-10 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
