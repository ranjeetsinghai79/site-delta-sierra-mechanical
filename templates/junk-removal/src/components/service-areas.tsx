"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-xl overflow-hidden border border-[var(--color-gray-200)] shadow-[var(--shadow-card)] h-80 lg:h-[420px]"
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
            <span className="text-[var(--color-orange-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Where We Work
            </span>
            <h2 className="font-display font-900 text-[var(--color-green-950)] text-4xl md:text-5xl uppercase tracking-wide mb-4">
              Serving the Central Valley
            </h2>
            <p className="font-body text-[var(--color-gray-600)] leading-relaxed mb-8">
              We haul for residential and commercial customers throughout the Central Valley. Don&apos;t see your city? Call us — we may still be able to help.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                  className="flex items-center gap-2.5 p-3.5 bg-[var(--color-gray-50)] rounded-lg border border-[var(--color-gray-200)] hover:border-[var(--color-green-600)]/40 hover:bg-[var(--color-green-600)]/5 transition-colors duration-200 cursor-default"
                >
                  <MapPin className="w-4 h-4 text-[var(--color-orange-500)] shrink-0" />
                  <span className="font-body font-600 text-[var(--color-green-950)] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[var(--color-green-800)] hover:bg-[var(--color-green-900)] text-white font-display font-700 px-8 py-4 rounded-lg text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer tracking-wide uppercase"
            >
              <MapPin className="w-4 h-4" />
              Check My Area — {BUSINESS.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
