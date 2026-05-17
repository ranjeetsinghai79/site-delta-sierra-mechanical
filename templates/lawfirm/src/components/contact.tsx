"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Lock, CheckCircle, Scale } from "lucide-react"
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
    <section id="contact" className="py-24 px-5 bg-[var(--color-cream-50)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-gold-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Get Started
          </span>
          <h2 className="font-display font-700 text-[var(--color-charcoal-900)] text-4xl md:text-5xl mb-3">
            Free Case Consultation
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-md mx-auto">
            Tell us about your situation. We&apos;ll review it and get back to you within one business hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-2 bg-[var(--color-charcoal-900)] rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/30 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7 text-[var(--color-gold-500)]" />
              </div>
              <h3 className="font-display font-700 text-white text-2xl mb-3">
                Your Free <span className="text-[var(--color-gold-400)]">Consultation</span>
              </h3>
              <p className="font-body text-white/55 text-sm leading-relaxed mb-8">
                Speak directly with an attorney. No assistants, no runarounds. We&apos;ll assess your case and tell you honestly what we can do for you.
              </p>

              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-white/75 hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[var(--color-gold-500)] shrink-0" />
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider">Call Directly</div>
                    <div className="font-display font-700 text-base">{BUSINESS.phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-white/75 hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-[var(--color-gold-500)] shrink-0" />
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider">Email Us</div>
                    <div className="font-display font-700 text-sm">{BUSINESS.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 border border-[var(--color-gold-600)]/20 rounded-lg p-4 flex items-start gap-3">
              <Lock className="w-4 h-4 text-[var(--color-gold-500)] mt-0.5 shrink-0" />
              <p className="font-body text-white/50 text-xs leading-relaxed">
                <strong className="text-white/80 font-600">100% Confidential.</strong> Your consultation is protected by attorney-client privilege. We never share your information.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-3 bg-white rounded-xl p-8 shadow-[var(--shadow-card)] border border-[var(--color-cream-200)]"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
                </div>
                <h3 className="font-display font-700 text-[var(--color-charcoal-900)] text-2xl mb-2">
                  We&apos;ve Received Your Case
                </h3>
                <p className="font-body text-[var(--color-gray-600)] text-sm max-w-sm">
                  An attorney will contact you within one business hour. If your matter is urgent, call us directly at {BUSINESS.phone}.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[var(--color-gold-600)] mb-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span className="font-body text-xs tracking-wider uppercase font-600">
                      Confidential & Free — No Obligation
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-600 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">
                        First Name *
                      </label>
                      <input
                        name="fname"
                        required
                        className="w-full border border-[var(--color-cream-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-charcoal-900)] bg-[var(--color-cream-50)] focus:outline-none focus:border-[var(--color-gold-500)] transition-colors duration-200"
                        placeholder="First"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-600 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">
                        Last Name *
                      </label>
                      <input
                        name="lname"
                        required
                        className="w-full border border-[var(--color-cream-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-charcoal-900)] bg-[var(--color-cream-50)] focus:outline-none focus:border-[var(--color-gold-500)] transition-colors duration-200"
                        placeholder="Last"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-600 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-[var(--color-cream-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-charcoal-900)] bg-[var(--color-cream-50)] focus:outline-none focus:border-[var(--color-gold-500)] transition-colors duration-200"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-600 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">
                      Practice Area
                    </label>
                    <select
                      name="service"
                      className="w-full border border-[var(--color-cream-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-charcoal-900)] bg-[var(--color-cream-50)] focus:outline-none focus:border-[var(--color-gold-500)] transition-colors duration-200"
                    >
                      <option value="">Select practice area...</option>
                      <option value="Personal Injury">Personal Injury</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Business Law">Business Law</option>
                      <option value="Estate Planning">Estate Planning</option>
                      <option value="Immigration Law">Immigration Law</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-600 text-[var(--color-gray-600)] mb-1.5 uppercase tracking-wide">
                      Briefly Describe Your Situation
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full border border-[var(--color-cream-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-charcoal-900)] bg-[var(--color-cream-50)] focus:outline-none focus:border-[var(--color-gold-500)] transition-colors duration-200 resize-none"
                      placeholder="What happened? When did it occur? Any details that would help us understand your case..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] disabled:opacity-60 text-[var(--color-charcoal-950)] font-display font-700 py-4 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer"
                  >
                    {loading ? "Sending..." : "Request Free Consultation"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
