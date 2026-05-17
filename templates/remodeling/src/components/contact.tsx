"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, CheckCircle, Hammer } from "lucide-react"
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
    <section id="contact" className="py-24 px-5 bg-[var(--color-warm-100)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-forest-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Get Started
          </span>
          <h2 className="font-display text-[var(--color-forest-900)] text-4xl md:text-5xl mb-3">
            Free Design Consultation
          </h2>
          <p className="font-body text-[var(--color-warm-600)] max-w-md mx-auto">
            Tell us about your project. We&apos;ll schedule a walkthrough and provide a detailed, no-obligation estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-2 bg-[var(--color-forest-900)] rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[var(--color-walnut-300)]/15 border border-[var(--color-walnut-300)]/20 flex items-center justify-center mb-6">
                <Hammer className="w-7 h-7 text-[var(--color-walnut-300)]" />
              </div>
              <h3 className="font-display text-white text-2xl mb-3">
                Let&apos;s Build <span className="text-[var(--color-walnut-300)]">Together</span>
              </h3>
              <p className="font-body text-white/55 text-sm leading-relaxed mb-8">
                Free in-home consultation. We measure, listen to your vision, and deliver a transparent quote — no pressure, no obligation.
              </p>

              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-white/75 hover:text-[var(--color-walnut-300)] transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-[var(--color-walnut-300)] shrink-0" />
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider">Call or Text</div>
                    <div className="font-body font-600 text-base">{BUSINESS.phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-white/75 hover:text-[var(--color-walnut-300)] transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-[var(--color-walnut-300)] shrink-0" />
                  <div>
                    <div className="font-body text-xs text-white/40 uppercase tracking-wider">Email</div>
                    <div className="font-body font-600 text-sm">{BUSINESS.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 border border-[var(--color-walnut-300)]/15 rounded-lg p-4">
              <div className="font-body font-600 text-white/80 text-sm mb-1">On Budget Guarantee</div>
              <p className="font-body text-white/40 text-xs leading-relaxed">
                We quote what we charge. No hidden fees, no scope creep surprises. Your project, your budget.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-3 bg-white rounded-xl p-8 shadow-[var(--shadow-card)] border border-[var(--color-warm-200)]"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
                </div>
                <h3 className="font-display text-[var(--color-forest-900)] text-2xl mb-2">
                  We&apos;ll Be in Touch!
                </h3>
                <p className="font-body text-[var(--color-warm-600)] text-sm max-w-sm">
                  Expect a call within one business day to schedule your free in-home consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs font-600 text-[var(--color-warm-600)] mb-1.5 uppercase tracking-wide">First Name *</label>
                    <input
                      name="fname"
                      required
                      className="w-full border border-[var(--color-warm-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-forest-900)] bg-[var(--color-warm-50)] focus:outline-none focus:border-[var(--color-forest-500)] transition-colors duration-200"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-600 text-[var(--color-warm-600)] mb-1.5 uppercase tracking-wide">Last Name *</label>
                    <input
                      name="lname"
                      required
                      className="w-full border border-[var(--color-warm-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-forest-900)] bg-[var(--color-warm-50)] focus:outline-none focus:border-[var(--color-forest-500)] transition-colors duration-200"
                      placeholder="Last"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-600 text-[var(--color-warm-600)] mb-1.5 uppercase tracking-wide">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-[var(--color-warm-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-forest-900)] bg-[var(--color-warm-50)] focus:outline-none focus:border-[var(--color-forest-500)] transition-colors duration-200"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs font-600 text-[var(--color-warm-600)] mb-1.5 uppercase tracking-wide">Project Type</label>
                  <select
                    name="service"
                    className="w-full border border-[var(--color-warm-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-forest-900)] bg-[var(--color-warm-50)] focus:outline-none focus:border-[var(--color-forest-500)] transition-colors duration-200"
                  >
                    <option value="">Select a project...</option>
                    <option value="Kitchen Remodel">Kitchen Remodel</option>
                    <option value="Bathroom Renovation">Bathroom Renovation</option>
                    <option value="Room Addition">Room Addition / ADU</option>
                    <option value="Flooring">Flooring</option>
                    <option value="Deck / Outdoor">Deck / Outdoor Living</option>
                    <option value="Full Renovation">Full Home Renovation</option>
                    <option value="Free Consultation">Not Sure — Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs font-600 text-[var(--color-warm-600)] mb-1.5 uppercase tracking-wide">Tell Us About Your Project</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-[var(--color-warm-200)] rounded-lg px-4 py-3 font-body text-sm text-[var(--color-forest-900)] bg-[var(--color-warm-50)] focus:outline-none focus:border-[var(--color-forest-500)] transition-colors duration-200 resize-none"
                    placeholder="Size, timeline, budget range, inspiration — anything helps us prepare..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--color-forest-600)] hover:bg-[var(--color-forest-500)] disabled:opacity-60 text-white font-body font-700 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[var(--shadow-cta)] cursor-pointer"
                >
                  {loading ? "Sending..." : "Request Free Consultation"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
