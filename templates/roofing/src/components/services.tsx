"use client"

import { motion } from "framer-motion"
import { Home, CloudLightning, FileText, Shield, Droplets, Search } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  home: <Home className="w-6 h-6" />,
  "cloud-lightning": <CloudLightning className="w-6 h-6" />,
  "file-text": <FileText className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
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
          <span className="text-[var(--color-red-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="font-display font-800 text-[var(--color-slate-900)] text-4xl md:text-5xl mb-4">
            Roofing Services
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
            From storm damage repair to full replacements — we handle every roofing need in the Central Valley with speed and expertise.
          </p>
          <div className="w-12 h-1 bg-[var(--color-red-600)] rounded-full mx-auto mt-6" />
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
              whileHover={{ y: -5 }}
              className={`relative rounded-xl p-7 border transition-all duration-300 cursor-default ${
                service.urgent
                  ? "bg-[var(--color-slate-900)] border-[var(--color-red-600)]/40 hover:border-[var(--color-red-500)]"
                  : "bg-white border-[var(--color-gray-200)] hover:border-[var(--color-gray-400)] shadow-[var(--shadow-card)] hover:shadow-lg"
              }`}
            >
              {/* Red left border accent for urgent */}
              {service.urgent && (
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-[var(--color-red-500)] rounded-r-full" />
              )}
              {service.urgent && (
                <div className="absolute top-4 right-4 bg-[var(--color-red-600)] text-white text-[0.6rem] font-700 px-2.5 py-1 rounded-md tracking-wider">
                  24/7
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                service.urgent
                  ? "bg-[var(--color-red-600)]/20 text-[var(--color-red-400)]"
                  : "bg-[var(--color-gray-100)] text-[var(--color-slate-700)]"
              }`}>
                {ICON_MAP[service.icon]}
              </div>
              <h3 className={`font-display font-700 text-xl mb-2.5 ${
                service.urgent ? "text-white" : "text-[var(--color-slate-900)]"
              }`}>
                {service.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed ${
                service.urgent ? "text-white/55" : "text-[var(--color-gray-600)]"
              }`}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-white font-display font-700 px-10 py-4 rounded-lg text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            Get Your Free Roof Inspection
          </a>
        </motion.div>
      </div>
    </section>
  )
}
