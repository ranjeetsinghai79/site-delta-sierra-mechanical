"use client"

import { motion } from "framer-motion"
import { Clock, Recycle, DollarSign, CheckCircle } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const PILLARS = [
  {
    number: "01",
    icon: <Clock className="w-7 h-7" />,
    title: "Same-Day Service",
    desc: "Call by noon and we show up today. Most jobs are booked and completed within 2 hours. No waiting around.",
  },
  {
    number: "02",
    icon: <Recycle className="w-7 h-7" />,
    title: "Eco-Responsible",
    desc: "85% of what we haul is donated to local charities or recycled. We care about the valley we live and work in.",
  },
  {
    number: "03",
    icon: <DollarSign className="w-7 h-7" />,
    title: "Upfront Pricing",
    desc: "We quote before we start, and we stick to it. No hidden fees, no surprises, no upsells when we arrive.",
  },
  {
    number: "04",
    icon: <CheckCircle className="w-7 h-7" />,
    title: "No Leftovers",
    desc: "When we say we'll haul it, we mean all of it. We don't cherry-pick or leave awkward pieces behind.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-[var(--color-green-950)]">
      <div className="relative max-w-7xl mx-auto">
        {/* Background stripe */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, var(--color-green-400) 0px, var(--color-green-400) 1px, transparent 1px, transparent 24px)`,
          }}
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative text-center mb-14"
        >
          <span className="text-[var(--color-orange-400)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-display font-900 text-white text-4xl md:text-5xl uppercase tracking-wide">
            The{" "}
            <span className="text-[var(--color-orange-500)]">Green Haul</span>{" "}
            Difference
          </h2>
          <p className="font-body text-white/55 max-w-lg mx-auto mt-4 leading-relaxed">
            Since {BUSINESS.since}, we&apos;ve built our reputation on showing up, doing the job right, and leaving your space spotless.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[var(--color-green-900)]/60 border border-[var(--color-green-700)]/30 hover:border-[var(--color-orange-500)]/40 rounded-xl p-7 transition-all duration-300 cursor-default"
            >
              <div className="font-display font-900 text-[var(--color-orange-500)] text-5xl leading-none mb-4 opacity-60">
                {pillar.number}
              </div>
              <div className="text-[var(--color-orange-400)] mb-4">
                {pillar.icon}
              </div>
              <h3 className="font-display font-800 text-white text-xl uppercase tracking-wide mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-white/55 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[var(--color-orange-500)]/10 border border-[var(--color-orange-500)]/25 rounded-xl px-8 py-6"
        >
          <div>
            <div className="font-display font-800 text-white text-xl uppercase tracking-wide">
              Ready to Haul?
            </div>
            <div className="font-body text-white/55 text-sm mt-1">
              Call before noon for same-day service · {BUSINESS.license}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-7 py-3 rounded-lg text-sm transition-all duration-200 hover:scale-105 cursor-pointer tracking-wide uppercase shadow-[var(--shadow-cta)]"
            >
              Get Free Quote
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-display font-700 px-7 py-3 rounded-lg text-sm transition-all duration-200 cursor-pointer tracking-wide uppercase"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
