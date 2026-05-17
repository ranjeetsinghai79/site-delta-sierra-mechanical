"use client"

import { motion } from "framer-motion"
import { MapPin, Truck } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-[var(--color-gray-50)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-xl overflow-hidden border border-[var(--color-silver-200)] shadow-[var(--shadow-card)] h-80 lg:h-[420px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Tracy+California&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service area map"
            />
          </motion.div>

          {/* Areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="text-[var(--color-cyan-600)] text-xs font-body font-600 tracking-[0.4em] uppercase mb-3 block">
              Service Area
            </span>
            <h2 className="font-display font-700 text-[var(--color-carbon-900)] text-4xl md:text-5xl mb-4 uppercase tracking-[0.04em]">
              We Come To You
            </h2>
            <p className="font-body text-[var(--color-gray-400)] leading-relaxed mb-8">
              Mobile service available across the Central Valley and Bay Area. We work around your schedule — at your home, office, or dealership.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: EASE, delay: i * 0.06 }}
                  className="flex items-center gap-2 p-3 bg-white border border-[var(--color-cyan-500)]/20 rounded-lg hover:border-[var(--color-cyan-400)]/50 hover:bg-[var(--color-cyan-500)]/5 transition-colors duration-200 cursor-default"
                >
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-cyan-500)] shrink-0" />
                  <span className="font-body font-600 text-[var(--color-carbon-900)] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-cyan-500)] hover:bg-[var(--color-cyan-400)] text-[var(--color-carbon-950)] font-display font-700 px-7 py-4 rounded-lg text-sm transition-all duration-200 hover:scale-105 cursor-pointer tracking-wider uppercase shadow-[var(--shadow-cta)]"
              >
                Book Mobile Service
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-carbon-900)]/20 text-[var(--color-carbon-900)] font-body font-600 px-7 py-4 rounded-lg text-sm hover:border-[var(--color-cyan-500)]/40 transition-all duration-200 cursor-pointer"
              >
                <Truck className="w-4 h-4 text-[var(--color-cyan-500)]" />
                {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
