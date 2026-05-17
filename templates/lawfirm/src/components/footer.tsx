import { Phone, Mail, MapPin, Scale } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-charcoal-950)] text-white pt-14 px-5">
      {/* Gold top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent mb-12 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-gold-500)]/15 border border-[var(--color-gold-500)]/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-[var(--color-gold-500)]" />
              </div>
              <div>
                <div className="font-display font-700 text-white text-base">{BUSINESS.name}</div>
                <div className="font-body text-[var(--color-gold-400)] text-[0.6rem] tracking-[0.2em] uppercase">Attorneys at Law</div>
              </div>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              {BUSINESS.tagline} Serving Northern California since {BUSINESS.since}.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[var(--color-gold-500)] fill-[var(--color-gold-500)]" viewBox="0 0 24 24">
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
            <div className="font-display font-700 text-xs tracking-widest uppercase text-[var(--color-gold-600)] mb-4">Contact</div>
            <div className="space-y-3">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white/60 hover:text-[var(--color-gold-400)] transition-colors text-sm font-body cursor-pointer">
                <Phone className="w-4 h-4 text-[var(--color-gold-600)] shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white/60 hover:text-[var(--color-gold-400)] transition-colors text-sm font-body cursor-pointer">
                <Mail className="w-4 h-4 text-[var(--color-gold-600)] shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin className="w-4 h-4 text-[var(--color-gold-600)] shrink-0 mt-0.5" />
                {BUSINESS.address}
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <div className="font-display font-700 text-xs tracking-widest uppercase text-[var(--color-gold-600)] mb-4">Practice Areas</div>
            <ul className="space-y-2">
              {["Personal Injury", "Family Law", "Criminal Defense", "Business Law", "Estate Planning", "Immigration"].map((area) => (
                <li key={area}>
                  <a href="#services" className="font-body text-sm text-white/50 hover:text-[var(--color-gold-400)] transition-colors cursor-pointer">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 pb-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="font-body text-white/30 text-xs">
              © {currentYear} {BUSINESS.name}. All rights reserved.
            </div>
            <div className="font-body text-white/20 text-xs">
              Licensed · Insured · {BUSINESS.license}
            </div>
          </div>
          <p className="font-body text-white/20 text-[0.65rem] leading-relaxed max-w-4xl">
            ATTORNEY ADVERTISING. The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Results depicted are not a guarantee or prediction of results in future cases.
          </p>
        </div>
      </div>
    </footer>
  )
}
