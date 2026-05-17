"use client"

import { motion } from "framer-motion"
import { MapPin, Heart } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Areas list first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="text-[var(--color-purple-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Our Community
            </span>
            <h2 className="font-display font-900 text-[var(--color-gray-900)] text-4xl md:text-5xl mb-4">
              Serving Families In
            </h2>
            <p className="font-body text-[var(--color-gray-600)] leading-relaxed mb-8">
              Conveniently located in Tracy with easy access from surrounding communities. We welcome families from across the Central Valley.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {BUSINESS.serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: EASE, delay: i * 0.07 }}
                  className="flex items-center gap-2 p-3 bg-[var(--color-purple-100)] rounded-2xl hover:bg-[var(--color-purple-200)]/60 transition-colors duration-200 cursor-default"
                >
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-purple-600)] shrink-0" />
                  <span className="font-body font-600 text-[var(--color-purple-800)] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-purple-600)] hover:bg-[var(--color-purple-700)] text-white font-display font-800 px-7 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 cursor-pointer shadow-[var(--shadow-cta)]"
              >
                <Heart className="w-4 h-4" />
                Enroll Your Child Today
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-purple-300)] text-[var(--color-purple-700)] font-body font-600 px-7 py-4 rounded-full text-sm hover:bg-[var(--color-purple-100)] transition-all duration-200 cursor-pointer"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-3xl overflow-hidden border-4 border-[var(--color-purple-100)] shadow-[var(--shadow-card)] h-80 lg:h-[420px]"
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
        </div>
      </div>
    </section>
  )
}
