"use client"

import { motion } from "framer-motion"
import { Award, Shield, Truck, CheckCircle } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const PILLARS = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Certified Applicators",
    desc: "Ceramic Pro certified installers. Not hobbyists — professionals trained on the exact products we use, every time.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "5-Year Warranty",
    desc: "Our ceramic coatings carry a 5-year manufacturer-backed warranty. We stand behind every application we do.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Mobile Service Available",
    desc: "We come to you across the Central Valley and Bay Area. Your garage, your office, your schedule.",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: "Results Guaranteed",
    desc: "If you&apos;re not satisfied with paint correction or detail results, we come back and make it right. No questions.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-[var(--color-gray-50)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="text-[var(--color-cyan-600)] text-xs font-body font-600 tracking-[0.4em] uppercase mb-3 block">
              Why Apex
            </span>
            <h2 className="font-display font-700 text-[var(--color-carbon-900)] text-4xl md:text-5xl leading-tight mb-6 uppercase tracking-[0.04em]">
              Professional Grade.<br />
              <span className="text-[var(--color-cyan-600)]">Every Single Car.</span>
            </h2>
            <p className="font-body text-[var(--color-silver-400)] leading-relaxed mb-10 max-w-md">
              Since {BUSINESS.since}, we&apos;ve been the detailer that car enthusiasts and daily drivers alike trust for results that actually last.
            </p>

            {/* Big stats */}
            <div className="grid grid-cols-3 gap-5 mb-10">
              {[
                { value: `${BUSINESS.google_rating}★`, label: "Google Rating" },
                { value: `${BUSINESS.review_count}+`, label: "Clients Served" },
                { value: "5yr", label: "Ceramic Warranty" },
              ].map((s) => (
                <div key={s.label} className="text-center p-5 bg-[var(--color-carbon-900)] rounded-xl">
                  <div className="font-display font-700 text-2xl text-[var(--color-cyan-400)]">{s.value}</div>
                  <div className="font-body text-[var(--color-silver-400)] text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Certification badge */}
            <div className="flex items-center gap-4 p-5 bg-[var(--color-carbon-800)] rounded-xl border border-[var(--color-cyan-500)]/20">
              <div className="w-12 h-12 bg-[var(--color-cyan-500)]/10 rounded-xl flex items-center justify-center text-[var(--color-cyan-400)] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-700 text-white text-sm">Ceramic Pro Certified Center</div>
                <div className="font-body text-[var(--color-silver-400)] text-xs mt-0.5">{BUSINESS.license} · Fully Insured · Tracy, CA</div>
              </div>
            </div>
          </motion.div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl bg-white border border-[var(--color-silver-200)] hover:border-[var(--color-cyan-400)]/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[var(--color-carbon-900)] rounded-xl flex items-center justify-center text-[var(--color-cyan-400)] mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-700 text-[var(--color-carbon-900)] text-base mb-2 uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="font-body text-[var(--color-gray-400)] text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
