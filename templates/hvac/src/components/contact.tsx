"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, Send } from "lucide-react"
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
    <section id="contact" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-orange-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl mb-4">
            Get a Free Estimate
          </h2>
          <p className="font-body text-[var(--color-slate-600)] max-w-xl mx-auto leading-relaxed">
            Fill out the form and we'll call you back within 15 minutes during business hours.
          </p>
          <div className="w-16 h-1 bg-[var(--color-orange-500)] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="space-y-5 mb-10">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-4 p-5 bg-[var(--color-navy-900)] rounded-2xl group cursor-pointer hover:bg-[var(--color-navy-800)] transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-[var(--color-orange-500)]/20 rounded-xl flex items-center justify-center text-[var(--color-orange-400)] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body text-white/50 text-xs mb-0.5">Call or Text Anytime</div>
                  <div className="font-display font-700 text-white text-xl group-hover:text-[var(--color-orange-400)] transition-colors">
                    {BUSINESS.phone}
                  </div>
                </div>
                <div className="ml-auto text-white/30 group-hover:text-[var(--color-orange-400)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-[var(--color-slate-50)] rounded-2xl border border-[var(--color-slate-200)]">
                <div className="w-12 h-12 bg-[var(--color-navy-700)]/10 rounded-xl flex items-center justify-center text-[var(--color-navy-700)] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body text-[var(--color-slate-600)] text-xs mb-0.5">Email Us</div>
                  <div className="font-body font-600 text-[var(--color-navy-900)]">{BUSINESS.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-[var(--color-slate-50)] rounded-2xl border border-[var(--color-slate-200)]">
                <div className="w-12 h-12 bg-[var(--color-navy-700)]/10 rounded-xl flex items-center justify-center text-[var(--color-navy-700)] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body text-[var(--color-slate-600)] text-xs mb-0.5">Hours</div>
                  <div className="font-body font-600 text-[var(--color-navy-900)] text-sm">Mon–Fri: 7AM–8PM</div>
                  <div className="font-body font-600 text-[var(--color-navy-900)] text-sm">Sat–Sun: 8AM–6PM</div>
                  <div className="font-body text-[var(--color-orange-500)] text-xs font-700 mt-0.5">24/7 for emergencies</div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[var(--color-orange-500)]/8 border border-[var(--color-orange-500)]/25 rounded-2xl">
              <div className="font-display font-700 text-[var(--color-navy-900)] mb-1">Emergency? Don't fill a form.</div>
              <div className="font-body text-[var(--color-slate-600)] text-sm mb-3">Call directly for fastest response.</div>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-[var(--color-slate-50)] rounded-2xl border border-[var(--color-slate-200)]">
                <div className="w-16 h-16 bg-[var(--color-success)]/15 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[var(--color-success)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-[var(--color-navy-900)] text-2xl mb-2">Got it!</h3>
                <p className="font-body text-[var(--color-slate-600)]">We'll call you back within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--color-slate-50)] rounded-2xl border border-[var(--color-slate-200)] p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-700 text-[var(--color-slate-600)] uppercase tracking-wider mb-1.5 block" htmlFor="fname">
                      First Name
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      required
                      placeholder="John"
                      className="w-full bg-white border border-[var(--color-slate-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-slate-400)] focus:outline-none focus:border-[var(--color-navy-700)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-700 text-[var(--color-slate-600)] uppercase tracking-wider mb-1.5 block" htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full bg-white border border-[var(--color-slate-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-slate-400)] focus:outline-none focus:border-[var(--color-navy-700)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-slate-600)] uppercase tracking-wider mb-1.5 block" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 555-5555"
                    className="w-full bg-white border border-[var(--color-slate-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-slate-400)] focus:outline-none focus:border-[var(--color-navy-700)] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-slate-600)] uppercase tracking-wider mb-1.5 block" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-white border border-[var(--color-slate-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] focus:outline-none focus:border-[var(--color-navy-700)] transition-colors cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>AC Repair or Installation</option>
                    <option>Heating / Furnace</option>
                    <option>Plumbing</option>
                    <option>Emergency Service</option>
                    <option>Maintenance Plan</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-slate-600)] uppercase tracking-wider mb-1.5 block" htmlFor="message">
                    Describe the Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us what's happening..."
                    className="w-full bg-white border border-[var(--color-slate-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-slate-400)] focus:outline-none focus:border-[var(--color-navy-700)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-700 py-4 rounded-full text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Request Free Estimate'}
                </button>
                <p className="font-body text-[var(--color-slate-400)] text-xs text-center">
                  We call back within 15 minutes · No spam · No obligation
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
