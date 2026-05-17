"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Send, Sparkles, Shield } from "lucide-react"
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
    <section id="contact" className="py-24 px-5 bg-[var(--color-gray-100)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-[var(--shadow-card)]">

          {/* Left panel — dark */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-[var(--color-carbon-900)] p-10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(45deg, var(--color-cyan-500) 1px, transparent 1px), linear-gradient(-45deg, var(--color-cyan-500) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />

            <div className="relative">
              <span className="text-[var(--color-cyan-500)] text-xs font-body font-600 tracking-[0.4em] uppercase mb-3 block">
                Book Your Detail
              </span>
              <h2 className="font-display font-700 text-[var(--color-cyan-400)] text-4xl md:text-5xl uppercase tracking-[0.04em] leading-tight mb-4">
                Book Your<br />Appointment
              </h2>
              <p className="font-body text-[var(--color-silver-400)] leading-relaxed mb-8 max-w-sm">
                Get a free estimate for any service. We&apos;ll confirm your appointment and answer any questions within a few hours.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-[var(--color-silver-400)] hover:text-white transition-colors font-body cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[var(--color-cyan-500)] shrink-0" />
                  <span className="font-600">{BUSINESS.phone}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-[var(--color-silver-400)] hover:text-white transition-colors font-body cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-[var(--color-cyan-500)] shrink-0" />
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="relative space-y-3">
              <div className="bg-[var(--color-cyan-500)]/8 rounded-xl p-5 border border-[var(--color-cyan-500)]/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-cyan-400)]" />
                  <span className="font-display font-700 text-white text-sm tracking-wide uppercase">Ceramic Pro Certified</span>
                </div>
                <p className="font-body text-[var(--color-silver-400)] text-sm">All ceramic coatings backed by a 5-year manufacturer warranty.</p>
              </div>
              <div className="bg-[var(--color-carbon-800)] rounded-xl p-4 flex items-center gap-3 border border-[var(--color-cyan-500)]/10">
                <Shield className="w-5 h-5 text-[var(--color-cyan-400)] shrink-0" />
                <p className="font-body text-[var(--color-silver-400)] text-sm">{BUSINESS.license} · Fully Insured · Mobile Service Available</p>
              </div>
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
                <div className="w-16 h-16 bg-[var(--color-cyan-500)]/10 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[var(--color-cyan-500)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-[var(--color-carbon-900)] text-2xl uppercase tracking-wide mb-2">Booked!</h3>
                <p className="font-body text-[var(--color-gray-400)]">We&apos;ll reach out within a few hours to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="font-display font-700 text-[var(--color-carbon-900)] text-xl uppercase tracking-wide mb-6">
                  Get Your Free Estimate
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "fname", label: "First Name", placeholder: "Marcus", type: "text" },
                    { id: "lname", label: "Last Name", placeholder: "Johnson", type: "text" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="font-body text-xs font-600 text-[var(--color-gray-400)] uppercase tracking-wider mb-1.5 block" htmlFor={f.id}>
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        className="w-full bg-[var(--color-gray-50)] border border-[var(--color-silver-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-carbon-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-cyan-500)] transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="font-body text-xs font-600 text-[var(--color-gray-400)] uppercase tracking-wider mb-1.5 block" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 555-5555"
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-silver-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-carbon-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-cyan-500)] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-600 text-[var(--color-gray-400)] uppercase tracking-wider mb-1.5 block" htmlFor="vehicle-type">
                    Vehicle Type
                  </label>
                  <select
                    id="vehicle-type"
                    name="vehicle-type"
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-silver-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-carbon-900)] focus:outline-none focus:border-[var(--color-cyan-500)] transition-colors cursor-pointer"
                  >
                    <option value="">Select vehicle type...</option>
                    <option>Sedan</option>
                    <option>SUV / Truck</option>
                    <option>Sports Car</option>
                    <option>Luxury / Exotic</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs font-600 text-[var(--color-gray-400)] uppercase tracking-wider mb-1.5 block" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-silver-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-carbon-900)] focus:outline-none focus:border-[var(--color-cyan-500)] transition-colors cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option>Ceramic Coating</option>
                    <option>Paint Correction</option>
                    <option>Full Detail</option>
                    <option>Interior Detail</option>
                    <option>PPF (Paint Film)</option>
                    <option>Window Tinting</option>
                    <option>Custom Package</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs font-600 text-[var(--color-gray-400)] uppercase tracking-wider mb-1.5 block" htmlFor="message">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Year, make, model, current condition..."
                    className="w-full bg-[var(--color-gray-50)] border border-[var(--color-silver-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-carbon-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-cyan-500)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-cyan-500)] hover:bg-[var(--color-cyan-400)] disabled:opacity-60 disabled:cursor-not-allowed text-[var(--color-carbon-950)] font-display font-700 py-4 rounded-lg text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer tracking-wider uppercase"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Get My Free Estimate'}
                </button>
                <p className="font-body text-[var(--color-gray-400)] text-xs text-center">
                  We respond within a few hours · No obligation · Free estimate
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
