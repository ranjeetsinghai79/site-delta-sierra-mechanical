"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, CheckCircle, Sparkles } from "lucide-react"
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
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-sky-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Get Started
          </span>
          <h2 className="font-display font-900 text-[var(--color-blue-900)] text-4xl md:text-5xl mb-3">
            Book Your Clean
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-md mx-auto">
            Tell us about your home and schedule. We&apos;ll confirm and send you everything you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-2 bg-[var(--color-blue-900)] rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-sky-500)] flex items-center justify-center mb-6 shadow-[var(--shadow-cta)]">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-900 text-white text-2xl mb-3">
                Spotless Home,{" "}
                <span className="text-[var(--color-sky-400)]">Zero Stress</span>
              </h3>
              <p className="font-body text-white/55 text-sm leading-relaxed mb-8">
                Book in 2 minutes. We handle the rest. No contracts, no commitments — just a sparkling home every time.
              </p>

              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-white/75 hover:text-[var(--color-sky-400)] transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[var(--color-sky-400)] shrink-0" />
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider">Call or Text</div>
                    <div className="font-display font-700 text-base">{BUSINESS.phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-white/75 hover:text-[var(--color-sky-400)] transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-[var(--color-sky-400)] shrink-0" />
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider">Email</div>
                    <div className="font-display font-700 text-sm">{BUSINESS.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 bg-white/5 border border-[var(--color-sky-400)]/15 rounded-xl p-4 space-y-2">
              {["No contracts, cancel anytime", "100% satisfaction guarantee", "Background-checked cleaners"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/60 text-xs font-body">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-sky-400)] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] border border-[var(--color-clean-200)]"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--color-sky-500)] flex items-center justify-center mb-4 shadow-[var(--shadow-cta)]">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-900 text-[var(--color-blue-900)] text-2xl mb-2">
                  You&apos;re Booked!
                </h3>
                <p className="font-body text-[var(--color-gray-600)] text-sm max-w-sm">
                  We&apos;ll confirm your booking within a few hours and send you all the details. Get ready for a spotless home!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs font-700 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">First Name *</label>
                    <input
                      name="fname"
                      required
                      className="w-full border border-[var(--color-clean-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-blue-900)] bg-[var(--color-clean-50)] focus:outline-none focus:border-[var(--color-sky-400)] transition-colors duration-200"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-700 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">Last Name *</label>
                    <input
                      name="lname"
                      required
                      className="w-full border border-[var(--color-clean-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-blue-900)] bg-[var(--color-clean-50)] focus:outline-none focus:border-[var(--color-sky-400)] transition-colors duration-200"
                      placeholder="Last"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-700 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-[var(--color-clean-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-blue-900)] bg-[var(--color-clean-50)] focus:outline-none focus:border-[var(--color-sky-400)] transition-colors duration-200"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-700 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">Service Type</label>
                  <select
                    name="service"
                    className="w-full border border-[var(--color-clean-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-blue-900)] bg-[var(--color-clean-50)] focus:outline-none focus:border-[var(--color-sky-400)] transition-colors duration-200"
                  >
                    <option value="">Select a service...</option>
                    <option value="Regular Cleaning">Regular Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move In / Move Out">Move In / Move Out</option>
                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                    <option value="Post-Construction">Post-Construction</option>
                    <option value="Airbnb Turnover">Airbnb Turnover</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs font-700 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">Frequency</label>
                  <select
                    name="message"
                    className="w-full border border-[var(--color-clean-200)] rounded-xl px-4 py-3 font-body text-sm text-[var(--color-blue-900)] bg-[var(--color-clean-50)] focus:outline-none focus:border-[var(--color-sky-400)] transition-colors duration-200"
                  >
                    <option value="One-time">One-time</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Bi-weekly">Bi-weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--color-sky-500)] hover:bg-[var(--color-sky-400)] disabled:opacity-60 text-white font-display font-700 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  {loading ? "Booking..." : "Book My Clean"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
