"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Send, Heart, Camera } from "lucide-react"
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
    <section id="contact" className="py-24 px-5 bg-[var(--color-warm-50)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">

          {/* Left panel — purple */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-[var(--color-purple-700)] p-10 flex flex-col justify-between"
          >
            <div>
              <span className="text-[var(--color-yellow-400)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
                Enroll Today
              </span>
              <h2 className="font-display font-900 text-white text-4xl md:text-5xl leading-tight mb-4">
                Schedule<br />Your Tour
              </h2>
              <p className="font-body text-white/65 leading-relaxed mb-8 max-w-sm">
                Come see our classrooms, meet our teachers, and discover why families love Sunshine Sprouts. Tours are free and available Monday–Friday.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-body cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[var(--color-yellow-400)] shrink-0" />
                  <span className="font-600">{BUSINESS.phone}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-body cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-[var(--color-yellow-400)] shrink-0" />
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-5 h-5 text-[var(--color-yellow-400)]" />
                  <span className="font-display font-800 text-white text-sm">Daily Photo Updates</span>
                </div>
                <p className="font-body text-white/55 text-sm">Stay connected with your child throughout the day via our parent app.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3 border border-white/15">
                <Heart className="w-5 h-5 text-[var(--color-yellow-400)] shrink-0" />
                <p className="font-body text-white/60 text-sm">Currently enrolling Fall 2025 · Limited spots available</p>
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
                <div className="w-16 h-16 bg-[var(--color-purple-100)] rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[var(--color-purple-600)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-900 text-[var(--color-gray-900)] text-2xl mb-2">Tour Requested!</h3>
                <p className="font-body text-[var(--color-gray-600)]">We&apos;ll reach out within 24 hours to confirm your tour time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="font-display font-900 text-[var(--color-gray-900)] text-xl mb-6">
                  Request Your Free Tour
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "fname", label: "First Name", placeholder: "Maria", type: "text" },
                    { id: "lname", label: "Last Name", placeholder: "Garcia", type: "text" },
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
                        className="w-full bg-[var(--color-warm-50)] border border-[var(--color-purple-100)] rounded-2xl px-4 py-3 font-body text-sm text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-purple-400)] transition-colors"
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
                    className="w-full bg-[var(--color-warm-50)] border border-[var(--color-purple-100)] rounded-2xl px-4 py-3 font-body text-sm text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-purple-400)] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="child-age">
                    Child&apos;s Age
                  </label>
                  <input
                    id="child-age"
                    name="child-age"
                    type="text"
                    placeholder="e.g. 8 months, 2 years, 4 years"
                    className="w-full bg-[var(--color-warm-50)] border border-[var(--color-purple-100)] rounded-2xl px-4 py-3 font-body text-sm text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-purple-400)] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="service">
                    Program Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-[var(--color-warm-50)] border border-[var(--color-purple-100)] rounded-2xl px-4 py-3 font-body text-sm text-[var(--color-gray-900)] focus:outline-none focus:border-[var(--color-purple-400)] transition-colors cursor-pointer"
                  >
                    <option value="">Select a program...</option>
                    <option>Infant Care Tour</option>
                    <option>Toddler Program</option>
                    <option>Pre-K Enrollment</option>
                    <option>After-School</option>
                    <option>Summer Camp</option>
                    <option>Drop-In Care</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs font-700 text-[var(--color-gray-600)] uppercase tracking-wider mb-1.5 block" htmlFor="message">
                    Anything Else?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Questions, preferred tour times, special needs..."
                    className="w-full bg-[var(--color-warm-50)] border border-[var(--color-purple-100)] rounded-2xl px-4 py-3 font-body text-sm text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-400)] focus:outline-none focus:border-[var(--color-purple-400)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-purple-600)] hover:bg-[var(--color-purple-700)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-800 py-4 rounded-full text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Request My Free Tour'}
                </button>
                <p className="font-body text-[var(--color-gray-400)] text-xs text-center">
                  We respond within 24 hours · No commitment required
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
