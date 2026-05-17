"use client"

import { motion } from "framer-motion"
import { MapPin, Phone } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-5 bg-[var(--color-charcoal-950)] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-gold-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Serving Northern California
          </span>
          <h2 className="font-display font-700 text-white text-4xl md:text-5xl mb-4">
            Our <span className="text-[var(--color-gold-400)]">Service Areas</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto leading-relaxed">
            Caldwell &amp; Associates serves clients throughout Northern California. Don&apos;t see your city? Call us — we handle cases statewide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-xl overflow-hidden border border-white/10 h-80 lg:h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Tracy+California&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(30%) invert(5%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service area map"
            />
          </motion.div>

          {/* City chips */}
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
                  className="flex items-center gap-2 bg-[var(--color-charcoal-800)] border border-[var(--color-gold-600)]/20 hover:border-[var(--color-gold-500)]/50 px-4 py-2.5 rounded-full transition-colors duration-200 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-500)]" />
                  <span className="font-body font-600 text-white/70 text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-[var(--color-charcoal-950)] font-display font-700 px-7 py-4 rounded transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer w-fit"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <p className="font-body text-white/35 text-xs flex items-center gap-1.5 pl-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-gold-600)]" />
                Based in {BUSINESS.address} — serving all of Northern California
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
