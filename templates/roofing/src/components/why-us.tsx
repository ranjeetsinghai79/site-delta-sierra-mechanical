"use client"

import { motion } from "framer-motion"
import { FileCheck, Award, Zap, Shield, Clock, DollarSign } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const pillars = [
  {
    icon: <FileCheck className="w-7 h-7" />,
    title: "Insurance Experts",
    desc: "We've processed hundreds of insurance claims. We document the damage, meet with adjusters, and fight for the maximum payout. Most clients pay $0 out of pocket.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "GAF Master Elite",
    desc: "Only 2% of roofing contractors in the country earn GAF Master Elite status. This unlocks the best warranties in the industry — including our lifetime guarantee.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Same-Day Response",
    desc: "Storm just hit? We're there today. Emergency tarping prevents further water damage while we plan your full repair or replacement.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Workmanship Warranty",
    desc: "Every installation comes with our 10-year workmanship guarantee — on top of the manufacturer's material warranty. Your investment is protected.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-[var(--color-slate-900)] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--color-gray-400) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-red-400)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-display font-800 text-white text-4xl md:text-5xl mb-4">
            The Peak Shield Difference
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto leading-relaxed">
            Since {BUSINESS.since}, we've protected thousands of homes. Here's what sets us apart.
          </p>
          <div className="w-12 h-1 bg-[var(--color-red-600)] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="flex gap-5 p-7 bg-[var(--color-slate-800)]/60 border border-white/6 hover:border-[var(--color-red-600)]/30 rounded-xl transition-all duration-300 cursor-default group"
            >
              <div className="w-14 h-14 bg-[var(--color-red-600)]/15 group-hover:bg-[var(--color-red-600)]/25 rounded-xl flex items-center justify-center text-[var(--color-red-400)] shrink-0 transition-colors duration-300">
                {p.icon}
              </div>
              <div>
                <h3 className="font-display font-700 text-white text-lg mb-2">{p.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: <Clock className="w-5 h-5" />, value: "20+", label: "Years Local" },
            { icon: <FileCheck className="w-5 h-5" />, value: "95%", label: "Insurance Covered" },
            { icon: <Award className="w-5 h-5" />, value: "5,000+", label: "Roofs Completed" },
            { icon: <DollarSign className="w-5 h-5" />, value: "$0", label: "Most Clients Pay" },
          ].map((s) => (
            <div key={s.label} className="text-center p-5 bg-[var(--color-slate-800)]/40 border border-white/6 rounded-xl">
              <div className="flex justify-center mb-2 text-[var(--color-red-400)]">{s.icon}</div>
              <div className="font-display font-900 text-2xl text-white">{s.value}</div>
              <div className="font-body text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-white font-display font-700 px-10 py-4 rounded-lg text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            Get a Free Inspection Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
