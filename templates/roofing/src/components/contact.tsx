"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, Send, AlertTriangle } from "lucide-react"
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
    <section id="contact" className="py-24 px-5 bg-[var(--color-gray-50)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-red-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display font-800 text-[var(--color-slate-900)] text-4xl md:text-5xl mb-4">
            Get Your Free Inspection
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
            Storm damage or just overdue for an inspection? We'll send a certified roofer out — at no charge.
          </p>
          <div className="w-12 h-1 bg-[var(--color-red-600)] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="space-y-4 mb-6">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-4 p-5 bg-[var(--color-slate-900)] rounded-xl group cursor-pointer hover:bg-[var(--color-slate-800)] transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-[var(--color-red-600)]/20 rounded-xl flex items-center justify-center text-[var(--color-red-400)] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body text-white/45 text-xs mb-0.5">Call or Text Anytime</div>
                  <div className="font-display font-700 text-white text-xl group-hover:text-[var(--color-red-400)] transition-colors">
                    {BUSINESS.phone}
                  </div>
                </div>
                <div className="ml-auto text-white/30 group-hover:text-[var(--color-red-400)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-gray-200)]">
                <div className="w-12 h-12 bg-[var(--color-gray-100)] rounded-xl flex items-center justify-center text-[var(--color-slate-700)] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body text-[var(--color-gray-400)] text-xs mb-0.5">Email Us</div>
                  <div className="font-body font-600 text-[var(--color-slate-900)]">{BUSINESS.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--color-gray-200)]">
                <div className="w-12 h-12 bg-[var(--color-gray-100)] rounded-xl flex items-center justify-center text-[var(--color-slate-700)] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body text-[var(--color-gray-400)] text-xs mb-0.5">Business Hours</div>
                  <div className="font-body font-600 text-[var(--color-slate-900)] text-sm">Mon–Fri: 7AM–7PM</div>
                  <div className="font-body font-600 text-[var(--color-slate-900)] text-sm">Sat–Sun: 8AM–5PM</div>
                  <div className="font-body text-[var(--color-red-600)] text-xs font-700 mt-0.5">24/7 for storm emergencies</div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[var(--color-red-600)]/8 border border-[var(--color-red-500)]/25 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[var(--color-red-600)]" />
                <div className="font-display font-700 text-[var(--color-slate-900)]">Storm Emergency? Call now.</div>
              </div>
              <div className="font-body text-[var(--color-gray-600)] text-sm mb-3">Don't wait — active damage gets worse fast.</div>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] text-white font-display font-700 px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:scale-105 cursor-pointer shadow-[var(--shadow-cta)]"
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
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-xl border border-[var(--color-gray-200)]">
                <div className="w-16 h-16 bg-[var(--color-success)]/12 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[var(--color-success)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-[var(--color-slate-900)] text-2xl mb-2">Request Received!</h3>
                <p className="font-body text-[var(--color-gray-600)]">We'll call you within 15 minutes to schedule your free inspection.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[var(--color-gray-200)] p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="fname">
                      First Name
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      required
                      placeholder="John"
                      className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-slate-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-red-500)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-slate-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-red-500)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 555-5555"
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-slate-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-red-500)] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-slate-900)] focus:outline-none focus:border-[var(--color-red-500)] transition-colors cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>Roof Replacement</option>
                    <option>Storm Damage Repair</option>
                    <option>Insurance Inspection</option>
                    <option>Free Estimate</option>
                    <option>Emergency Tarping</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="message">
                    Tell Us More
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Describe the issue or what you need..."
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-slate-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-red-500)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-red-600)] hover:bg-[var(--color-red-700)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-700 py-4 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Request Free Inspection'}
                </button>
                <p className="font-body text-[var(--color-gray-400)] text-xs text-center">
                  We call back within 15 minutes · No obligation · 100% free
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
