"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, Send, CalendarDays } from "lucide-react"
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
          <span className="text-[var(--color-teal-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Schedule a Visit
          </span>
          <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl mb-4">
            Book Your Appointment
          </h2>
          <p className="font-body text-[var(--color-stone-600)] max-w-xl mx-auto leading-relaxed">
            New patient? Existing patient? Dental emergency? We're here. Fill out the form and we'll confirm your appointment within 1 hour.
          </p>
          <div className="w-16 h-0.5 bg-[var(--color-teal-600)] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Contact info — teal panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-[var(--color-teal-700)] rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-teal-600)]/40 rounded-full blur-3xl" aria-hidden />
            <div className="relative">
              <h3 className="font-display font-700 text-white text-2xl mb-2">Get in Touch</h3>
              <p className="font-body text-white/65 text-sm mb-8">We're here to help. Reach us by phone, email, or just fill out the form.</p>

              <div className="space-y-5 mb-8">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/15 rounded-xl group cursor-pointer transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-body text-white/55 text-xs mb-0.5">Call or Text</div>
                    <div className="font-display font-700 text-white text-lg group-hover:text-[var(--color-teal-300)] transition-colors">
                      {BUSINESS.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/8 rounded-xl">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <div className="font-body text-white/55 text-xs mb-0.5">Email Us</div>
                    <div className="font-body font-600 text-white text-sm">{BUSINESS.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/8 rounded-xl">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <div className="font-body text-white/55 text-xs mb-0.5">Office Hours</div>
                    <div className="font-body font-600 text-white text-sm">Mon–Thu: 8AM–6PM</div>
                    <div className="font-body font-600 text-white text-sm">Fri: 8AM–4PM · Sat: 9AM–2PM</div>
                    <div className="font-body text-[var(--color-teal-300)] text-xs font-700 mt-0.5">Same-day emergency slots available</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/10 border border-white/15 rounded-xl">
                <div className="font-display font-700 text-white mb-1">Accepting New Patients!</div>
                <div className="font-body text-white/65 text-xs mb-3">Ask about our new patient welcome special.</div>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 bg-white text-[var(--color-teal-700)] font-display font-700 px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <CalendarDays className="w-4 h-4" />
                  Call to Schedule
                </a>
              </div>
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
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-[var(--color-stone-50)] rounded-2xl border border-[var(--color-stone-200)]">
                <div className="w-16 h-16 bg-[var(--color-success)]/12 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[var(--color-success)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-[var(--color-navy-900)] text-2xl mb-2">All set!</h3>
                <p className="font-body text-[var(--color-stone-600)]">We'll confirm your appointment within 1 hour during office hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--color-stone-50)] rounded-2xl border border-[var(--color-stone-200)] p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-700 text-[var(--color-stone-600)] uppercase tracking-wider mb-1.5 block" htmlFor="fname">
                      First Name
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full bg-white border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-stone-400)] focus:outline-none focus:border-[var(--color-teal-500)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-700 text-[var(--color-stone-600)] uppercase tracking-wider mb-1.5 block" htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full bg-white border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-stone-400)] focus:outline-none focus:border-[var(--color-teal-500)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-stone-600)] uppercase tracking-wider mb-1.5 block" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 555-5555"
                    className="w-full bg-white border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-stone-400)] focus:outline-none focus:border-[var(--color-teal-500)] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-stone-600)] uppercase tracking-wider mb-1.5 block" htmlFor="service">
                    I'm Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-white border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] focus:outline-none focus:border-[var(--color-teal-500)] transition-colors cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>Cleaning / Checkup</option>
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Invisalign Consultation</option>
                    <option>Emergency</option>
                    <option>Cosmetic Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-stone-600)] uppercase tracking-wider mb-1.5 block" htmlFor="message">
                    Anything Else to Know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about any concerns, dental anxiety, or special needs..."
                    className="w-full bg-white border border-[var(--color-stone-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-navy-900)] placeholder:text-[var(--color-stone-400)] focus:outline-none focus:border-[var(--color-teal-500)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-teal-600)] hover:bg-[var(--color-teal-700)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-700 py-4 rounded-full text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Request Appointment'}
                </button>
                <p className="font-body text-[var(--color-stone-400)] text-xs text-center">
                  We confirm within 1 hour · No spam · Most insurance accepted
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
