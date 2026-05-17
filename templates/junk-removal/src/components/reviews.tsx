"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { TESTIMONIALS, BUSINESS } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-5 bg-[var(--color-gray-50)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-orange-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            What People Say
          </span>
          <h2 className="font-display font-900 text-[var(--color-green-950)] text-4xl md:text-5xl uppercase tracking-wide mb-4">
            Real Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[var(--color-green-600)] fill-[var(--color-green-600)]" />
            ))}
            <span className="font-display font-800 text-[var(--color-green-950)] text-lg ml-2">{BUSINESS.google_rating}</span>
            <span className="text-[var(--color-gray-400)] font-body text-sm">({BUSINESS.review_count} Google Reviews)</span>
          </div>
          <div className="w-16 h-1.5 bg-[var(--color-orange-500)] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl border-l-4 border-l-[var(--color-green-600)] border border-[var(--color-gray-200)] p-7 shadow-[var(--shadow-card)] transition-all duration-300 cursor-default"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[var(--color-green-600)] fill-[var(--color-green-600)]" />
                ))}
              </div>

              <p className="font-body text-[var(--color-gray-600)] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t border-[var(--color-gray-200)] pt-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-green-950)] rounded-lg flex items-center justify-center font-display font-800 text-white text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-display font-800 text-[var(--color-green-950)] text-sm">{t.name}</div>
                  <div className="font-body text-[var(--color-gray-400)] text-xs">{t.location}</div>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-orange-500)] hover:bg-[var(--color-orange-600)] text-white font-display font-700 px-10 py-4 rounded-lg text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[var(--shadow-cta)] cursor-pointer tracking-wide uppercase"
          >
            Join {BUSINESS.review_count}+ Happy Customers — Get Your Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
