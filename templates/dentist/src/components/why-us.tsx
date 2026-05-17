"use client"

import { motion } from "framer-motion"
import { Check, Shield, Cpu, Heart, Clock, DollarSign } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const features = [
  { icon: <Heart className="w-5 h-5" />, title: "Anxiety-Free Dentistry", desc: "We specialize in nervous patients. Gentle techniques and a calm environment." },
  { icon: <Cpu className="w-5 h-5" />, title: "Digital X-Rays", desc: "90% less radiation than traditional X-rays. Immediate, crystal-clear imaging." },
  { icon: <Shield className="w-5 h-5" />, title: "Most Insurance Accepted", desc: "We work with Delta Dental, Cigna, Aetna, Metlife, and 200+ other plans." },
  { icon: <Clock className="w-5 h-5" />, title: "Same-Day Emergencies", desc: "Emergency slots reserved every morning. We'll see you today if you're in pain." },
  { icon: <DollarSign className="w-5 h-5" />, title: "Flexible Financing", desc: "0% APR plans available. CareCredit accepted. We make dental care affordable." },
  { icon: <Check className="w-5 h-5" />, title: "New Patient Specials", desc: "New patient exam, cleaning, and X-rays — ask about our welcome offer." },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — feature checklist */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="text-[var(--color-teal-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Why Patients Love Us
            </span>
            <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl leading-tight mb-6">
              Dentistry Designed<br />
              <span className="text-[var(--color-teal-600)]">Around You</span>
            </h2>
            <p className="font-body text-[var(--color-stone-600)] leading-relaxed mb-10 max-w-md">
              Since {BUSINESS.since}, we've built our practice around patient comfort and trust. We don't rush, we don't upsell, and we treat you like family.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, ease: EASE, delay: i * 0.06 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-[var(--color-stone-50)] transition-colors duration-200 cursor-default group"
                >
                  <div className="w-10 h-10 bg-[var(--color-teal-600)]/10 group-hover:bg-[var(--color-teal-600)]/15 rounded-xl flex items-center justify-center text-[var(--color-teal-700)] shrink-0 transition-colors duration-200">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-[var(--color-navy-900)] text-base mb-1">{f.title}</h3>
                    <p className="font-body text-[var(--color-stone-600)] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — "comfort card" */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="lg:sticky lg:top-28"
          >
            <div className="bg-[var(--color-teal-700)] rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-teal-600)]/40 rounded-full blur-3xl" aria-hidden />

              <div className="relative">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-700 text-white text-2xl mb-3">The Bright Smile Experience</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed mb-7">
                  We know dental visits can feel stressful. That's why we go above and beyond to make every appointment calm, comfortable, and judgment-free.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "No rushing — we take all the time you need",
                    "Detailed explanations before any procedure",
                    "Comfort menu: headphones, blankets, lip balm",
                    "Clear pricing before any treatment begins",
                    "Gentle technique, always — we promise",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[var(--color-teal-400)]/25 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[var(--color-teal-300)]" />
                      </div>
                      <span className="font-body text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-[var(--color-teal-700)] font-display font-700 px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Book Your Visit
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: BUSINESS.google_rating + "★", label: "Google Rating" },
                { value: BUSINESS.review_count + "+", label: "Reviews" },
                { value: "15+", label: "Yrs Practice" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 bg-[var(--color-stone-50)] rounded-xl border border-[var(--color-stone-200)]">
                  <div className="font-display font-700 text-xl text-[var(--color-teal-700)]">{s.value}</div>
                  <div className="font-body text-xs text-[var(--color-stone-400)] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
