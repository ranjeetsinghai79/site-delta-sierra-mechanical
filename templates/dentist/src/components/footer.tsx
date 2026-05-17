import { Phone, Mail, MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-navy-900)] text-white py-14 px-5 relative">
      {/* Teal accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-teal-600)] to-[var(--color-teal-400)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[var(--color-teal-600)] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C9.5 3 7 4.5 6 7c-1 2.5-.5 5 0 7 .5 2 1 4 3 5s2-2 3-4c.5-1 1-2 2-2s1.5 1 2 2c1 2 1 6 3 4s2.5-3 3-5c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4z" />
                </svg>
              </div>
              <div>
                <div className="font-display font-800 text-lg leading-none">{BUSINESS.name}</div>
                <div className="font-body text-white/40 text-xs mt-0.5">{BUSINESS.tagline}</div>
              </div>
            </div>

            {/* New patients badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-teal-600)]/20 border border-[var(--color-teal-500)]/30 text-[var(--color-teal-400)] text-xs font-body font-700 px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-[var(--color-teal-400)] rounded-full animate-pulse" />
              Accepting New Patients
            </div>

            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[var(--color-teal-400)] fill-[var(--color-teal-400)]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
              <span className="text-white font-700 text-sm ml-1">{BUSINESS.google_rating}</span>
              <span className="text-white/40 text-xs ml-1">{BUSINESS.review_count} reviews</span>
            </div>
            <div className="text-white/35 text-xs font-body">{BUSINESS.license}</div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display font-700 text-xs tracking-wider uppercase text-white/40 mb-4">Contact</div>
            <div className="space-y-3">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Phone className="w-4 h-4 text-[var(--color-teal-500)] shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Mail className="w-4 h-4 text-[var(--color-teal-500)] shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-white/65 text-sm font-body">
                <MapPin className="w-4 h-4 text-[var(--color-teal-500)] shrink-0 mt-0.5" />
                {BUSINESS.address}
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <div className="font-display font-700 text-xs tracking-wider uppercase text-white/40 mb-4">Communities We Serve</div>
            <div className="flex flex-wrap gap-2">
              {BUSINESS.serviceAreas.map((area) => (
                <span key={area} className="text-white/45 text-xs font-body border border-white/8 px-2.5 py-1 rounded-full">
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
            Licensed · Insured · {BUSINESS.license}
          </div>
        </div>
      </div>
    </footer>
  )
}
