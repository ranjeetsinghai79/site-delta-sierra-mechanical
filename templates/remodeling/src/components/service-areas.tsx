"use client"

import { motion } from "framer-motion"
import { MapPin, Phone } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-white relative overflow-hidden">
      {/* Wood-grain decorative border at top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-walnut-700)] via-[var(--color-walnut-500)] to-[var(--color-walnut-700)]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-forest-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Where We Work
          </span>
          <h2 className="font-display text-[var(--color-forest-900)] text-4xl md:text-5xl mb-4">
            Our Service Areas
          </h2>
          <p className="font-body text-[var(--color-warm-600)] max-w-xl mx-auto leading-relaxed">
            Serving homeowners throughout the San Joaquin Valley and Bay Area. Local roots, professional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-2xl overflow-hidden border border-[var(--color-warm-200)] shadow-[var(--shadow-card)] h-80 lg:h-[400px]"
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

          {/* Cities + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <div className="grid grid-cols-2 gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.07 }}
                  className="flex items-center gap-2.5 p-3.5 bg-[var(--color-warm-50)] border border-[var(--color-warm-200)] hover:border-[var(--color-forest-400)]/40 rounded-xl transition-colors duration-200 cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--color-walnut-500)]" />
                  <span className="font-body font-600 text-[var(--color-forest-800)] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[var(--color-forest-600)] hover:bg-[var(--color-forest-500)] text-white font-body font-600 px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer mb-3"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone}
            </a>
            <p className="font-body text-[var(--color-warm-400)] text-xs flex items-center gap-1.5 pl-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-walnut-500)]" />
              Based in {BUSINESS.address} — not listed? Call us, we travel for the right project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
