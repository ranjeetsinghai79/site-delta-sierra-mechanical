import { Phone, Mail, MapPin, Sparkles } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-blue-900)] text-white pt-14 px-5">
      {/* Sky-blue accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--color-sky-400)] to-transparent mb-12 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[var(--color-sky-500)] flex items-center justify-center shadow-[0_0_16px_rgba(14,165,233,0.40)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-900 text-white text-base">{BUSINESS.name}</div>
                <div className="font-body text-[var(--color-sky-400)] text-[0.6rem] tracking-[0.2em] uppercase font-600">Professional Cleaning</div>
              </div>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              No contracts. Cancel anytime. Spotless results, every time.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[var(--color-sky-400)] fill-[var(--color-sky-400)]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
              <span className="text-white/60 font-700 text-xs ml-1">{BUSINESS.google_rating}</span>
              <span className="text-white/30 text-xs ml-1">{BUSINESS.review_count} reviews</span>
            </div>
            <div className="text-white/30 text-xs font-body">{BUSINESS.license}</div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body font-700 text-xs tracking-widest uppercase text-[var(--color-sky-400)] mb-4">Contact</div>
            <div className="space-y-3">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white/60 hover:text-[var(--color-sky-400)] transition-colors text-sm font-body cursor-pointer">
                <Phone className="w-4 h-4 text-[var(--color-sky-500)] shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white/60 hover:text-[var(--color-sky-400)] transition-colors text-sm font-body cursor-pointer">
                <Mail className="w-4 h-4 text-[var(--color-sky-500)] shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin className="w-4 h-4 text-[var(--color-sky-500)] shrink-0 mt-0.5" />
                {BUSINESS.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-body font-700 text-xs tracking-widest uppercase text-[var(--color-sky-400)] mb-4">Services</div>
            <ul className="space-y-2">
              {["Deep Cleaning", "Weekly / Bi-Weekly", "Move In / Move Out", "Commercial Cleaning", "Post-Construction", "Airbnb Turnover"].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-white/50 hover:text-[var(--color-sky-400)] transition-colors cursor-pointer">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-body text-white/30 text-xs">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="font-body text-white/20 text-xs text-center sm:text-right">
            No contracts. Cancel anytime. · {BUSINESS.license}
          </div>
        </div>
      </div>
    </footer>
  )
}
