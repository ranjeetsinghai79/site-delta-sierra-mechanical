"use client"

import { motion } from "framer-motion"
import { Award, Shield, Sparkles, Heart } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const pillars = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Board-Certified Providers",
    desc: "Every injectable, laser, and aesthetic treatment is performed by licensed medical professionals with advanced aesthetic training. Safety is our first priority.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Medical-Grade Products",
    desc: "We use only FDA-approved treatments and medical-grade products — never spa-grade shortcuts. Botox, Juvederm, Restylane — the real thing, every time.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Personalized Treatment Plans",
    desc: "Every face, every body, every goal is unique. Your consultation includes a customized plan tailored to your anatomy, concerns, and desired outcomes.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Natural Results Guarantee",
    desc: "We believe in enhancement, not transformation. Our philosophy: results that make you look like the best version of yourself — not like you've had work done.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-[var(--color-blush-100)] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-rose-gold-300)]/20 rounded-full blur-[100px]" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--color-blush-200)]/60 rounded-full blur-[80px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[var(--color-rose-gold-400)]" />
            <span className="text-[var(--color-rose-gold-700)] text-xs font-body tracking-[0.35em] uppercase">
              Why Choose Lumière
            </span>
            <div className="w-12 h-px bg-[var(--color-rose-gold-400)]" />
          </div>
          <h2 className="font-display font-600 text-[var(--color-brand-900)] text-4xl md:text-5xl mb-4">
            The Lumière Standard
          </h2>
          <p className="font-body font-300 text-[var(--color-stone-600)] max-w-xl mx-auto leading-relaxed">
            Since {BUSINESS.since}, we've maintained the highest standards in medical aesthetics. Here's our commitment to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="flex gap-5 p-7 bg-white/80 border border-[var(--color-rose-gold-300)]/30 hover:border-[var(--color-rose-gold-400)]/60 rounded-2xl transition-all duration-300 cursor-default hover:shadow-[var(--shadow-card)] group"
            >
              <div className="w-14 h-14 bg-[var(--color-rose-gold-500)]/12 group-hover:bg-[var(--color-rose-gold-500)]/20 rounded-xl flex items-center justify-center text-[var(--color-rose-gold-700)] shrink-0 transition-colors duration-300">
                {p.icon}
              </div>
              <div>
                <h3 className="font-display font-600 text-[var(--color-brand-900)] text-lg mb-2">{p.title}</h3>
                <p className="font-body font-300 text-[var(--color-stone-600)] text-sm leading-relaxed">{p.desc}</p>
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
            { value: BUSINESS.google_rating, label: "Google Rating" },
            { value: BUSINESS.review_count + "+", label: "Happy Clients" },
            { value: "10+", label: "Yrs Experience" },
            { value: "6", label: "Treatments Offered" },
          ].map((s) => (
            <div key={s.label} className="text-center p-5 bg-white border border-[var(--color-rose-gold-300)]/30 rounded-xl">
              <div className="font-display font-600 text-2xl text-[var(--color-brand-900)]">{s.value}</div>
              <div className="font-body text-xs text-[var(--color-stone-400)] mt-1">{s.label}</div>
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
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-brand-900)] hover:bg-[var(--color-brand-950)] text-white font-body font-700 px-10 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
          >
            <Sparkles className="w-4 h-4 text-[var(--color-rose-gold-400)]" />
            Start Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
