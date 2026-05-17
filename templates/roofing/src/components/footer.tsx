import { Phone, Mail, MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-slate-950)] text-white py-14 px-5 relative">
      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-red-600)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-[var(--color-red-600)] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
                </svg>
              </div>
              <div>
                <div className="font-display font-800 text-lg leading-none">{BUSINESS.name}</div>
                <div className="font-body text-white/40 text-xs mt-0.5">{BUSINESS.tagline}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[var(--color-red-500)] fill-[var(--color-red-500)]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
              <span className="text-white font-700 text-sm ml-1">{BUSINESS.google_rating}</span>
              <span className="text-white/40 text-xs ml-1">{BUSINESS.review_count} reviews</span>
            </div>
            <div className="text-white/35 text-xs font-body">{BUSINESS.license} · Licensed & Insured</div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display font-700 text-xs tracking-wider uppercase text-white/40 mb-4">Contact</div>
            <div className="space-y-3">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Phone className="w-4 h-4 text-[var(--color-red-500)] shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Mail className="w-4 h-4 text-[var(--color-red-500)] shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-white/65 text-sm font-body">
                <MapPin className="w-4 h-4 text-[var(--color-red-500)] shrink-0 mt-0.5" />
                {BUSINESS.address}
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <div className="font-display font-700 text-xs tracking-wider uppercase text-white/40 mb-4">Service Areas</div>
            <div className="flex flex-wrap gap-2">
              {BUSINESS.serviceAreas.map((area) => (
                <span key={area} className="text-white/45 text-xs font-body border border-white/8 px-2.5 py-1 rounded-md">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-body text-white/30 text-xs">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="font-body text-white/20 text-xs">
            GAF Master Elite · Licensed · Insured · {BUSINESS.license}
          </div>
        </div>
      </div>
    </footer>
  )
}
