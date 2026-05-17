"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-[var(--color-slate-50)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-2xl overflow-hidden border border-[var(--color-slate-200)] shadow-[var(--shadow-card)] h-80 lg:h-[420px]"
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

          {/* Areas list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="text-[var(--color-orange-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Where We Work
            </span>
            <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl mb-4">
              Service Areas
            </h2>
            <p className="font-body text-[var(--color-slate-600)] leading-relaxed mb-8">
              We serve residential and commercial customers throughout the Central Valley. Don't see your city? Call us — we may still be able to help.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                  className="flex items-center gap-2.5 p-3.5 bg-white rounded-xl border border-[var(--color-slate-200)] hover:border-[var(--color-navy-700)]/30 transition-colors duration-200 cursor-default"
                >
                  <MapPin className="w-4 h-4 text-[var(--color-orange-500)] shrink-0" />
                  <span className="font-body font-600 text-[var(--color-navy-900)] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-[var(--color-navy-700)] hover:bg-[var(--color-navy-800)] text-white font-display font-700 px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              Check My Area — Call {BUSINESS.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
