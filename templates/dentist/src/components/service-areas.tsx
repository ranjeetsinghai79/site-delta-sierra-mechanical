"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-[var(--color-stone-50)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-2xl overflow-hidden border border-[var(--color-stone-200)] shadow-[var(--shadow-card)] h-80 lg:h-[420px]"
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
            <span className="text-[var(--color-teal-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Where We Serve
            </span>
            <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl mb-4">
              Convenient to<br />Your Community
            </h2>
            <p className="font-body text-[var(--color-stone-600)] leading-relaxed mb-8">
              Located in Tracy with easy parking and accessible hours. We serve patients from all surrounding communities.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: EASE, delay: i * 0.06 }}
                  className="flex items-center gap-2 bg-white border border-[var(--color-teal-500)]/30 hover:border-[var(--color-teal-500)]/60 text-[var(--color-navy-900)] px-4 py-2.5 rounded-full text-sm font-body font-600 transition-colors duration-200 cursor-default"
                >
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-teal-600)] shrink-0" />
                  {area}
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-teal-600)] hover:bg-[var(--color-teal-700)] text-white font-display font-700 px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              Book Appointment Near You
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
