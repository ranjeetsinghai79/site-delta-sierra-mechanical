"use client"

import { motion } from "framer-motion"
import { Sofa, Zap, Home, HardHat, TreePine, Truck } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  sofa: <Sofa className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  "hard-hat": <HardHat className="w-6 h-6" />,
  "tree-pine": <TreePine className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
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
    <section id="services" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-14"
        >
          <span className="text-[var(--color-orange-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            What We Haul
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-900 text-[var(--color-green-950)] text-4xl md:text-5xl uppercase tracking-wide leading-tight">
              Our Services
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:scale-105 cursor-pointer tracking-wide uppercase shrink-0 shadow-[var(--shadow-cta)]"
            >
              Get Free Quote
            </a>
          </div>
          <div className="w-16 h-1.5 bg-[var(--color-orange-500)] rounded-full mt-5" />
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
              className={`relative rounded-xl p-7 border-l-4 transition-all duration-300 cursor-default group ${
                service.urgent
                  ? "bg-[var(--color-green-950)] border-l-[var(--color-orange-500)] shadow-[var(--shadow-card)]"
                  : "bg-[var(--color-gray-50)] border-l-[var(--color-green-600)] hover:shadow-[var(--shadow-card)] border border-[var(--color-gray-200)] border-l-4"
              }`}
            >
              {service.urgent && (
                <div className="absolute top-4 right-4 bg-[var(--color-orange-500)] text-white text-[0.6rem] font-700 px-2.5 py-1 rounded tracking-wider uppercase font-body">
                  Same-Day
                </div>
              )}

              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                service.urgent
                  ? "bg-[var(--color-orange-500)]/20 text-[var(--color-orange-400)]"
                  : "bg-[var(--color-green-800)]/10 text-[var(--color-green-800)] group-hover:bg-[var(--color-green-800)]/15 transition-colors"
              }`}>
                {ICON_MAP[service.icon]}
              </div>

              <h3 className={`font-display font-800 text-xl mb-2 uppercase tracking-wide ${
                service.urgent ? "text-white" : "text-[var(--color-green-950)]"
              }`}>
                {service.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${
                service.urgent ? "text-white/60" : "text-[var(--color-gray-600)]"
              }`}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center font-body text-[var(--color-gray-400)] text-sm"
        >
          Don&apos;t see your item? Call us — we haul almost anything.{" "}
          <a href={`tel:+15558901234`} className="text-[var(--color-orange-500)] font-600 hover:underline cursor-pointer">
            (555) 890-1234
          </a>
        </motion.p>
      </div>
    </section>
  )
}
