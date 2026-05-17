import { Phone, Mail, MapPin, Sparkles } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-carbon-950)] text-white py-14 px-5">
      {/* Cyan accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-cyan-500)] to-transparent mb-14 opacity-60" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display font-700 text-xl uppercase tracking-[0.12em] mb-1 text-white">
              APEX
            </div>
            <div className="font-body text-[var(--color-silver-400)] text-sm mb-5">Auto Detailing · Tracy, CA</div>

            {/* Certification badge */}
            <div className="flex items-start gap-2 bg-[var(--color-cyan-500)]/8 border border-[var(--color-cyan-500)]/20 rounded-xl px-4 py-3 mb-4 max-w-xs">
              <Sparkles className="w-4 h-4 text-[var(--color-cyan-400)] shrink-0 mt-0.5" />
              <span className="font-body text-[var(--color-cyan-300)]/80 text-xs">
                Ceramic Pro Certified Center — 5-Year Warranty on All Coatings
              </span>
            </div>

            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[var(--color-cyan-400)] fill-[var(--color-cyan-400)]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
              <span className="text-white font-700 text-sm ml-1">{BUSINESS.google_rating}</span>
              <span className="text-white/40 text-xs ml-1">{BUSINESS.review_count} reviews</span>
            </div>
            <div className="text-white/25 text-xs font-body">{BUSINESS.license}</div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display font-700 text-xs tracking-[0.3em] uppercase text-[var(--color-cyan-500)] mb-4">
              Contact
            </div>
            <div className="space-y-3">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-[var(--color-silver-400)] hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Phone className="w-4 h-4 text-[var(--color-cyan-500)] shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-[var(--color-silver-400)] hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Mail className="w-4 h-4 text-[var(--color-cyan-500)] shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-[var(--color-silver-400)] text-sm font-body">
                <MapPin className="w-4 h-4 text-[var(--color-cyan-500)] shrink-0 mt-0.5" />
                {BUSINESS.address}
              </div>
            </div>
          </div>

          {/* Areas */}
          <div>
            <div className="font-display font-700 text-xs tracking-[0.3em] uppercase text-[var(--color-cyan-500)] mb-4">
              Service Areas
            </div>
            <div className="flex flex-wrap gap-2">
              {BUSINESS.serviceAreas.map((area) => (
                <span key={area} className="text-[var(--color-silver-400)] text-xs font-body border border-[var(--color-cyan-500)]/15 px-3 py-1.5 rounded-lg">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-body text-white/25 text-xs">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="font-body text-white/15 text-xs">
            Ceramic Pro Certified · Fully Insured · {BUSINESS.license}
          </div>
        </div>
      </div>
    </footer>
  )
}
