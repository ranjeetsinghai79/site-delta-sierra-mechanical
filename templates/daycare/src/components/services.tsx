"use client"

import { motion } from "framer-motion"
import { Baby, Users, BookOpen, Sun, Calendar, Clock } from "lucide-react"
import { SERVICES } from "@/lib/config"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const ICON_MAP: Record<string, React.ReactNode> = {
  baby: <Baby className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  "book-open": <BookOpen className="w-6 h-6" />,
  sun: <Sun className="w-6 h-6" />,
  calendar: <Calendar className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
}

// Alternating card backgrounds for playful variety
const CARD_STYLES = [
  { bg: "var(--color-purple-100)", icon: "var(--color-purple-600)", title: "var(--color-purple-800)" },
  { bg: "var(--color-warm-100)", icon: "var(--color-yellow-500)", title: "var(--color-gray-900)" },
  { bg: "var(--color-peach-100)", icon: "var(--color-purple-600)", title: "var(--color-gray-900)" },
  { bg: "var(--color-purple-100)", icon: "var(--color-purple-600)", title: "var(--color-purple-800)" },
  { bg: "var(--color-warm-100)", icon: "var(--color-yellow-500)", title: "var(--color-gray-900)" },
  { bg: "var(--color-peach-100)", icon: "var(--color-purple-600)", title: "var(--color-gray-900)" },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.07 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-[var(--color-purple-600)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
            Our Programs
          </span>
          <h2 className="font-display font-900 text-[var(--color-gray-900)] text-4xl md:text-5xl mb-4">
            Learning For Every Age
          </h2>
          <p className="font-body text-[var(--color-gray-600)] max-w-xl mx-auto leading-relaxed">
            From infants to school-age children, we offer caring, curriculum-driven programs that support every stage of development.
          </p>
          <div className="w-16 h-1.5 bg-[var(--color-yellow-400)] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const style = CARD_STYLES[i % CARD_STYLES.length]
            return (
              <motion.div
                key={service.title}
                variants={cardVariant}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl p-7 cursor-default"
                style={{ background: style.bg }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-white/70"
                  style={{ color: style.icon }}
                >
                  {ICON_MAP[service.icon]}
                </div>
                <h3
                  className="font-display font-800 text-xl mb-2"
                  style={{ color: style.title }}
                >
                  {service.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-[var(--color-gray-600)]">
                  {service.desc}
                </p>
                <div className="mt-5 pt-4 border-t border-black/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-body font-700 text-xs cursor-pointer hover:gap-2.5 transition-all duration-200"
                    style={{ color: style.icon }}
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-purple-600)] hover:bg-[var(--color-purple-700)] text-white font-display font-800 px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer shadow-[var(--shadow-cta)]"
          >
            Schedule a Tour to See Our Classrooms
          </a>
        </motion.div>
      </div>
    </section>
  )
}
