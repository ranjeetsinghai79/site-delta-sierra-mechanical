import { Phone, Mail, MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-brand-950)] text-white py-14 px-5 relative">
      {/* Rose gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-rose-gold-500)] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                <path d="M16 28C16 28 6 22 6 13C6 9 9 6 12 6C14 6 15.5 7 16 8C16.5 7 18 6 20 6C23 6 26 9 26 13C26 22 16 28 16 28Z" fill="var(--color-rose-gold-500)" opacity="0.8"/>
                <path d="M16 28C16 28 16 16 16 8" stroke="var(--color-rose-gold-300)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="font-display font-600 text-white text-lg leading-none tracking-wide">{BUSINESS.name}</div>
                <div className="font-body text-white/35 text-xs mt-0.5 tracking-wide">{BUSINESS.tagline}</div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[var(--color-rose-gold-400)] fill-[var(--color-rose-gold-400)]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
              <span className="text-white font-700 text-sm ml-1">{BUSINESS.google_rating}</span>
              <span className="text-white/35 text-xs ml-1">{BUSINESS.review_count} reviews</span>
            </div>
            <div className="text-white/25 text-xs font-body">{BUSINESS.license}</div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body text-xs tracking-wider uppercase text-[var(--color-rose-gold-700)] mb-4">Contact</div>
            <div className="space-y-3">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Phone className="w-4 h-4 text-[var(--color-rose-gold-500)] shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm font-body cursor-pointer">
                <Mail className="w-4 h-4 text-[var(--color-rose-gold-500)] shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-white/55 text-sm font-body">
                <MapPin className="w-4 h-4 text-[var(--color-rose-gold-500)] shrink-0 mt-0.5" />
                {BUSINESS.address}
              </div>
            </div>
          </div>

          {/* Areas */}
          <div>
            <div className="font-body text-xs tracking-wider uppercase text-[var(--color-rose-gold-700)] mb-4">We Serve</div>
            <div className="space-y-2">
              {BUSINESS.serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-white/40 text-xs font-body">
                  <div className="w-1 h-1 bg-[var(--color-rose-gold-500)] rounded-full" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-body text-white/25 text-xs">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </div>
          <div className="font-body text-white/15 text-xs">
            Board-Certified · FDA-Approved · {BUSINESS.license}
          </div>
        </div>
      </div>
    </footer>
  )
}
