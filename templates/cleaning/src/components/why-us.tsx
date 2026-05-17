"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Leaf, ThumbsUp, CalendarCheck } from "lucide-react"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Background-Checked",
    desc: "Every cleaner passes a thorough background check before entering your home. You can trust who walks through your door.",
    color: "var(--color-sky-500)",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Eco-Friendly Products",
    desc: "We use non-toxic, plant-based cleaners that are safe for kids, pets, and the planet — without sacrificing cleaning power.",
    color: "var(--color-success)",
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: "Satisfaction Guarantee",
    desc: "Not happy with something? We&apos;ll come back and re-clean it within 24 hours, free of charge. No questions asked.",
    color: "var(--color-sky-400)",
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Easy Scheduling",
    desc: "Book online or by phone in minutes. Reschedule anytime with no penalties. Your schedule, your rules.",
    color: "var(--color-blue-600)",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-sky-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-display font-800 text-[var(--color-blue-900)] text-4xl md:text-5xl mb-4">
            Cleaning You Can Trust
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
            We built Sparkle Clean on four commitments that every customer deserves from a cleaning service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[var(--color-clean-200)] hover:border-[var(--color-sky-300)] rounded-2xl p-7 text-center transition-all duration-300 cursor-default shadow-[var(--shadow-card)] group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `color-mix(in srgb, ${r.color} 12%, white)`, color: r.color }}
              >
                {r.icon}
              </div>
              <h3 className="font-display font-800 text-[var(--color-blue-900)] text-base mb-3">{r.title}</h3>
              <p className="font-body text-[var(--color-gray-600)] text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 bg-[var(--color-clean-50)] border border-[var(--color-clean-200)] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <div className="font-display font-900 text-3xl text-[var(--color-blue-900)] mb-1">No Contracts. Ever.</div>
            <div className="font-body text-[var(--color-gray-600)]">Book once or weekly — cancel anytime, no fees, no questions.</div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[var(--color-sky-500)] hover:bg-[var(--color-sky-400)] text-white font-display font-700 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer"
          >
            Book Your First Clean
          </a>
        </motion.div>
      </div>
    </section>
  )
}
