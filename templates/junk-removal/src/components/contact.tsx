"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Send, Recycle } from "lucide-react"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">

          {/* Left panel — green */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-[var(--color-green-900)] p-10 flex flex-col justify-between"
          >
            <div>
              <span className="text-[var(--color-orange-400)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
                Free Quote
              </span>
              <h2 className="font-display font-900 text-[var(--color-orange-400)] text-4xl md:text-5xl uppercase tracking-wide leading-tight mb-4">
                Get Your<br />Free Quote
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-8 max-w-sm">
                Fill out the form and we&apos;ll get back to you within 15 minutes during business hours. Same-day haul available.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-body cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[var(--color-orange-500)] shrink-0" />
                  <span className="font-600">{BUSINESS.phone}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-body cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-[var(--color-orange-500)] shrink-0" />
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="bg-[var(--color-green-800)]/60 rounded-xl p-5 border border-[var(--color-green-700)]/40">
              <div className="flex items-center gap-2 mb-2">
                <Recycle className="w-5 h-5 text-[var(--color-green-400)]" />
                <span className="font-display font-700 text-white text-sm uppercase tracking-wide">Eco-Friendly Promise</span>
              </div>
              <p className="font-body text-white/55 text-sm leading-relaxed">
                85% of what we haul is donated or recycled. We&apos;re proud to keep junk out of landfills.
              </p>
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-white p-10"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-[var(--color-green-600)]/15 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[var(--color-green-600)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-800 text-[var(--color-green-950)] text-2xl uppercase tracking-wide mb-2">Got It!</h3>
                <p className="font-body text-[var(--color-gray-600)]">We&apos;ll call you back within 15 minutes. Same-day haul available!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="font-display font-800 text-[var(--color-green-950)] text-xl uppercase tracking-wide mb-6">
                  Tell Us What to Haul
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "fname", label: "First Name", placeholder: "John", type: "text" },
                    { id: "lname", label: "Last Name", placeholder: "Smith", type: "text" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor={f.id}>
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-green-950)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-green-600)] transition-colors"
                      />
                    </div>
                  ))}
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
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-green-950)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-green-600)] transition-colors"
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
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-green-950)] focus:outline-none focus:border-[var(--color-green-600)] transition-colors cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>Furniture Removal</option>
                    <option>Appliance Removal</option>
                    <option>Estate Cleanout</option>
                    <option>Construction Debris</option>
                    <option>Yard Debris</option>
                    <option>Full Property Cleanout</option>
                    <option>Same-Day Request</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="message">
                    What Are We Hauling?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Describe what you need removed..."
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-green-950)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-green-600)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-700 py-4 rounded-lg text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer tracking-wider uppercase"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Get My Free Quote'}
                </button>
                <p className="font-body text-[var(--color-gray-400)] text-xs text-center">
                  We respond within 15 minutes · No spam · No obligation
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
