"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, Send, Sparkles } from "lucide-react"
import { BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.fname,
          lastName: data.lname,
          phone: data.phone,
          service: data.service,
          message: data.message,
        }),
      })
    } catch { /* best-effort */ }
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-0 bg-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left panel — dark brand */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-[var(--color-brand-900)] px-8 py-20 lg:px-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-rose-gold-700)]/15 rounded-full blur-[80px]" aria-hidden />

            <div className="relative">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[var(--color-rose-gold-500)]" />
                <span className="text-[var(--color-rose-gold-400)] text-xs font-body tracking-[0.35em] uppercase">
                  Book Your Visit
                </span>
              </div>

              <h2 className="font-display font-600 text-white text-3xl md:text-4xl mb-4 leading-tight">
                Begin Your<br />
                <span className="italic text-[var(--color-rose-gold-400)]">Transformation</span>
              </h2>
              <p className="font-body font-300 text-white/60 text-sm leading-relaxed mb-10">
                Your free consultation includes a skin analysis, personalized treatment plan, and pricing — no pressure, no commitment.
              </p>

              <div className="space-y-5 mb-10">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-4 p-4 bg-white/8 hover:bg-white/12 rounded-xl group cursor-pointer transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-[var(--color-rose-gold-500)]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-rose-gold-400)]" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs mb-0.5">Call or Text</div>
                    <div className="font-display font-600 text-white text-base group-hover:text-[var(--color-rose-gold-400)] transition-colors">
                      {BUSINESS.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white/50" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs mb-0.5">Email</div>
                    <div className="font-body text-white/80 text-sm">{BUSINESS.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white/50" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs mb-0.5">Hours</div>
                    <div className="font-body text-white/80 text-sm">Tue–Sat: 9AM–7PM</div>
                    <div className="font-body text-white/80 text-sm">Sun–Mon: Closed</div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {["Free Consultations", "Financing Available", "Board-Certified"].map((b) => (
                  <span key={b} className="text-[var(--color-rose-gold-300)] text-xs font-body border border-[var(--color-rose-gold-700)]/40 px-3 py-1.5 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-white px-8 py-20 lg:px-14"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[var(--color-rose-gold-500)]/12 rounded-full flex items-center justify-center mb-5">
                  <Sparkles className="w-8 h-8 text-[var(--color-rose-gold-500)]" />
                </div>
                <h3 className="font-display font-600 text-[var(--color-brand-900)] text-2xl mb-2">You're on your way!</h3>
                <p className="font-body font-300 text-[var(--color-stone-600)]">We'll reach out within 24 hours to schedule your complimentary consultation.</p>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h3 className="font-display font-600 text-[var(--color-brand-900)] text-2xl mb-1">Request a Consultation</h3>
                  <p className="font-body font-300 text-[var(--color-stone-400)] text-sm">We'll be in touch within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-[var(--color-stone-400)] tracking-wider uppercase mb-1.5 block" htmlFor="fname">
                        First Name
                      </label>
                      <input
                        id="fname"
                        name="fname"
                        type="text"
                        required
                        placeholder="Jane"
                        className="w-full bg-[var(--color-ivory)] border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-brand-900)] placeholder:text-[var(--color-stone-300)] focus:outline-none focus:border-[var(--color-rose-gold-500)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-[var(--color-stone-400)] tracking-wider uppercase mb-1.5 block" htmlFor="lname">
                        Last Name
                      </label>
                      <input
                        id="lname"
                        name="lname"
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full bg-[var(--color-ivory)] border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-brand-900)] placeholder:text-[var(--color-stone-300)] focus:outline-none focus:border-[var(--color-rose-gold-500)] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs text-[var(--color-stone-400)] tracking-wider uppercase mb-1.5 block" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 555-5555"
                      className="w-full bg-[var(--color-ivory)] border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-brand-900)] placeholder:text-[var(--color-stone-300)] focus:outline-none focus:border-[var(--color-rose-gold-500)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-[var(--color-stone-400)] tracking-wider uppercase mb-1.5 block" htmlFor="service">
                      I'm Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full bg-[var(--color-ivory)] border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-brand-900)] focus:outline-none focus:border-[var(--color-rose-gold-500)] transition-colors cursor-pointer"
                    >
                      <option value="">Select a treatment...</option>
                      <option>Botox / Fillers Consult</option>
                      <option>Laser Hair Removal</option>
                      <option>HydraFacial</option>
                      <option>Chemical Peel</option>
                      <option>Microneedling</option>
                      <option>Body Contouring</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs text-[var(--color-stone-400)] tracking-wider uppercase mb-1.5 block" htmlFor="message">
                      Tell Us Your Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="What would you like to address or improve?"
                      className="w-full bg-[var(--color-ivory)] border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-brand-900)] placeholder:text-[var(--color-stone-300)] focus:outline-none focus:border-[var(--color-rose-gold-500)] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[var(--color-rose-gold-500)] hover:bg-[var(--color-rose-gold-700)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-body font-700 py-4 rounded-full text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer tracking-wide"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Sending...' : 'Request Free Consultation'}
                  </button>
                  <p className="font-body text-[var(--color-stone-300)] text-xs text-center">
                    Complimentary · No obligation · We respond within 24 hours
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
