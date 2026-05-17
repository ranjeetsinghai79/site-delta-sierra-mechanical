"use client"

import { motion } from "framer-motion"
import { MapPin, Phone } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-[var(--color-clean-50)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-sky-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Where We Clean
          </span>
          <h2 className="font-display font-900 text-[var(--color-blue-900)] text-4xl md:text-5xl mb-4">
            Service Areas
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
            Serving homes and businesses throughout the Tracy area and surrounding communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-2xl overflow-hidden border border-[var(--color-clean-200)] shadow-[var(--shadow-card)] h-80 lg:h-[400px]"
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

          {/* City chips + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <div className="flex flex-wrap gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.07 }}
                  className="flex items-center gap-2 bg-[var(--color-clean-100)] hover:bg-[var(--color-clean-200)] border border-[var(--color-clean-200)] hover:border-[var(--color-sky-300)] px-4 py-2.5 rounded-full transition-all duration-200 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sky-500)]" />
                  <span className="font-body font-600 text-[var(--color-blue-800)] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white border border-[var(--color-clean-200)] rounded-2xl p-5 mb-5 shadow-[var(--shadow-card)]">
              <div className="font-display font-800 text-[var(--color-blue-900)] text-base mb-1">
                Not on the list?
              </div>
              <p className="font-body text-[var(--color-gray-600)] text-sm">
                Call us — we may still cover your area or can refer you to a trusted partner.
              </p>
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[var(--color-sky-500)] hover:bg-[var(--color-sky-400)] text-white font-display font-700 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone}
            </a>
            <p className="font-body text-[var(--color-gray-400)] text-xs flex items-center gap-1.5 mt-3 pl-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-sky-400)]" />
              Based in {BUSINESS.address}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
