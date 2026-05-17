"use client"

import { motion } from "framer-motion"
import { Star, Shield, Sparkles } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const PACKAGES = [
  { tier: "Basic Detail", price: "From $149", desc: "Wash, vacuum, windows", accent: false },
  { tier: "Premium Detail", price: "From $299", desc: "Full interior + exterior", accent: false },
  { tier: "Ceramic Coating", price: "From $799", desc: "5-year protection package", accent: true },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-carbon-950)]">
      {/* Carbon fiber grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--color-silver-400) 1px, transparent 1px),
            linear-gradient(-45deg, var(--color-silver-400) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* Cyan glow effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--color-cyan-600)]/15 rounded-full blur-[150px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[var(--color-cyan-500)]/10 rounded-full blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[var(--color-cyan-500)]/10 border border-[var(--color-cyan-500)]/30 text-[var(--color-cyan-400)] text-xs font-body font-600 px-4 py-2 rounded-lg mb-6 tracking-[0.2em] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ceramic Pro Certified Center
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-700 text-white leading-[1.0] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] mb-6 tracking-[0.05em] uppercase"
            >
              SHOWROOM<br />
              QUALITY.<br />
              <span className="text-[var(--color-cyan-400)]">EVERY DETAIL.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="font-body text-[var(--color-silver-400)] text-lg leading-relaxed mb-8 max-w-lg"
            >
              Certified ceramic coatings, multi-stage paint correction, and meticulous detailing. We treat every car like it&apos;s our own — because reputation is everything.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-cyan-500)] hover:bg-[var(--color-cyan-400)] text-[var(--color-carbon-950)] font-display font-700 px-8 py-4 rounded-lg text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wider uppercase"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-cyan-500)]/40 hover:border-[var(--color-cyan-400)] text-[var(--color-cyan-400)] font-display font-600 px-8 py-4 rounded-lg text-base transition-all duration-200 hover:bg-[var(--color-cyan-500)]/8 cursor-pointer tracking-wider uppercase"
              >
                View Packages
              </a>
            </motion.div>

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: <Shield className="w-4 h-4 text-[var(--color-cyan-400)]" />, text: "Ceramic Pro Certified" },
                { icon: <Star className="w-4 h-4 text-[var(--color-cyan-400)] fill-[var(--color-cyan-400)]" />, text: `${BUSINESS.google_rating} Google Rating` },
                { icon: <Sparkles className="w-4 h-4 text-[var(--color-cyan-400)]" />, text: "5-Year Warranty" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[var(--color-silver-400)] text-sm font-body">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — package tier card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="bg-[var(--color-carbon-900)] border border-[var(--color-cyan-500)]/20 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <div className="px-7 py-5 border-b border-[var(--color-cyan-500)]/15">
                <div className="font-display font-700 text-white text-lg tracking-wide uppercase">Service Packages</div>
                <div className="font-body text-[var(--color-silver-400)] text-sm mt-0.5">Select the right protection for your vehicle</div>
              </div>

              <div className="p-4 space-y-3">
                {PACKAGES.map((pkg, i) => (
                  <motion.div
                    key={pkg.tier}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                      pkg.accent
                        ? "bg-[var(--color-cyan-500)]/10 border border-[var(--color-cyan-500)]/30"
                        : "bg-[var(--color-carbon-800)] border border-[var(--color-carbon-700)]"
                    }`}
                  >
                    <div>
                      <div className={`font-display font-700 text-sm tracking-wide ${pkg.accent ? "text-[var(--color-cyan-300)]" : "text-white"}`}>
                        {pkg.tier}
                        {pkg.accent && <span className="ml-2 text-[0.6rem] bg-[var(--color-cyan-500)]/20 text-[var(--color-cyan-400)] px-2 py-0.5 rounded-full">POPULAR</span>}
                      </div>
                      <div className="font-body text-[var(--color-silver-400)] text-xs mt-0.5">{pkg.desc}</div>
                    </div>
                    <div className={`font-display font-700 text-lg ${pkg.accent ? "text-[var(--color-cyan-400)]" : "text-[var(--color-silver-300)]"}`}>
                      {pkg.price}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="px-7 py-5 border-t border-[var(--color-cyan-500)]/15">
                <a
                  href="#contact"
                  className="block w-full text-center bg-[var(--color-cyan-500)] hover:bg-[var(--color-cyan-400)] text-[var(--color-carbon-950)] font-display font-700 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer tracking-wider uppercase text-sm shadow-[var(--shadow-cta)]"
                >
                  Get Free Estimate
                </a>
                <div className="text-center font-body text-[var(--color-silver-400)] text-xs mt-3">
                  Mobile service available · {BUSINESS.serviceAreas.slice(0, 3).join(", ")} + more
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust badges strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-white/8 flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-[var(--color-silver-400)] text-xs font-body border border-[var(--color-cyan-500)]/20 px-4 py-2 rounded-lg tracking-wide"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
