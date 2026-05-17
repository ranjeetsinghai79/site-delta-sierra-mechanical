"use client"

import { motion } from "framer-motion"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-2xl overflow-hidden border border-[var(--color-rose-gold-300)]/30 shadow-[var(--shadow-card)] h-80 lg:h-[400px]"
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-[var(--color-rose-gold-400)]" />
              <span className="text-[var(--color-rose-gold-700)] text-xs font-body tracking-[0.35em] uppercase">
                Where We Serve
              </span>
            </div>
            <h2 className="font-display font-600 text-[var(--color-brand-900)] text-4xl md:text-5xl mb-4">
              Close to Home.<br />
              <span className="italic text-[var(--color-rose-gold-700)]">Far from Ordinary.</span>
            </h2>
            <p className="font-body font-300 text-[var(--color-stone-600)] leading-relaxed mb-8">
              Conveniently located in Tracy and serving the greater Central Valley. Easy parking, flexible hours, and a welcome experience from the moment you arrive.
            </p>

            {/* City list with rose gold dots */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                  className="flex items-center gap-3 py-2.5 cursor-default"
                >
                  <div className="w-2 h-2 bg-[var(--color-rose-gold-500)] rounded-full shrink-0" />
                  <span className="font-body text-[var(--color-brand-900)] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-rose-gold-500)] hover:bg-[var(--color-rose-gold-700)] text-white font-body font-700 px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wide"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
