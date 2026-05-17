"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, HeadphonesIcon, DollarSign } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const pillars = [
  {
    icon: <Award className="w-7 h-7" />,
    number: "20+",
    title: "Years of Experience",
    desc: "Two decades navigating California courts. We know the judges, the tactics, and how to win.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    number: "$12M+",
    title: "Recovered for Clients",
    desc: "Results matter. We've won millions in settlements and verdicts for clients across Northern California.",
  },
  {
    icon: <HeadphonesIcon className="w-7 h-7" />,
    number: "24/7",
    title: "Accessible to You",
    desc: "Legal emergencies don't keep business hours. Reach us directly — a real attorney picks up.",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    number: "$0",
    title: "No Fee Unless We Win",
    desc: "Contingency means you pay nothing upfront. We only win when you win. Zero financial risk.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-[var(--color-charcoal-900)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-gold-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-display font-700 text-white text-4xl md:text-5xl mb-4">
            The Caldwell Difference
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto leading-relaxed">
            Since {BUSINESS.since}, we have built our reputation on one principle: relentless advocacy for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-[var(--color-charcoal-800)] hover:bg-[var(--color-charcoal-700)] border border-white/8 hover:border-[var(--color-gold-600)]/40 rounded-xl p-7 transition-all duration-300 cursor-default group"
            >
              {/* Top gold accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-600)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 rounded-xl bg-[var(--color-gold-500)]/10 border border-[var(--color-gold-600)]/20 flex items-center justify-center text-[var(--color-gold-500)] mb-5">
                {p.icon}
              </div>
              <div className="font-display font-700 text-3xl text-[var(--color-gold-400)] mb-2">
                {p.number}
              </div>
              <h3 className="font-display font-700 text-white text-base mb-3">{p.title}</h3>
              <p className="font-body text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* License row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-3 bg-[var(--color-charcoal-800)] border border-[var(--color-gold-600)]/20 rounded-xl px-6 py-4">
            <Award className="w-5 h-5 text-[var(--color-gold-500)] shrink-0" />
            <div>
              <div className="font-display font-700 text-white text-sm">{BUSINESS.license}</div>
              <div className="font-body text-white/40 text-xs mt-0.5">AV Preeminent Rated · Super Lawyers 2024</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[var(--color-charcoal-800)] border border-[var(--color-gold-600)]/20 rounded-xl px-6 py-4">
            <TrendingUp className="w-5 h-5 text-[var(--color-gold-500)] shrink-0" />
            <div>
              <div className="font-display font-700 text-white text-sm">Top-Rated in Northern California</div>
              <div className="font-body text-white/40 text-xs mt-0.5">Consistent 4.9★ across Google &amp; Avvo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
