import type { SiteConfig, BrandStoryChapter } from "@core/web/types"

export const config: SiteConfig & { brandStoryChapters: BrandStoryChapter[] } = {
  business: {
    name: "Delta Sierra Mechanical",
    tagline: "HVAC Comfort. Expert Service. Always.",
    phone: "(916) 872-5479",
    phoneHref: "tel:+19168725479",
    email: "service@deltasierra.com",
    address: "Stockton, California",
    city: "Stockton",
    serviceAreas: ["Stockton", "Lodi", "Manteca", "Tracy", "Sacramento", "Modesto"],
    license: "CSLB #1087654",
    since: "2005",
    google_rating: "4.9",
    review_count: "200+",
    emergency: true,
    social: {
      google: "https://google.com",
      yelp: "https://yelp.com",
      facebook: "https://facebook.com",
    },
    theme: "navy",
    niche: "hvac",
  },

  services: [
    { icon: "thermometer",  title: "AC Repair & Installation",  desc: "Same-day diagnostics for all major brands. New installations backed by a 10-year labor warranty.", urgent: false },
    { icon: "flame",        title: "Heating & Furnace",         desc: "Full furnace repair and replacement. Emergency heat calls answered 24/7 with fast dispatch.", urgent: false },
    { icon: "droplets",     title: "Plumbing Services",         desc: "Leak detection, drain cleaning, water heaters, and burst pipe repair for residential and commercial.", urgent: false },
    { icon: "zap",          title: "24/7 Emergency HVAC",       desc: "No heat or AC in extreme weather? We dispatch within the hour—every call answered, every time.", urgent: true },
    { icon: "shield-check", title: "Maintenance Plans",         desc: "Seasonal tune-ups that extend equipment life by 5+ years and reduce energy costs by up to 20%.", urgent: false },
    { icon: "wrench",       title: "Commercial HVAC",           desc: "Scheduled and emergency HVAC for offices, restaurants, and retail. Full commercial capability.", urgent: false },
  ],

  testimonials: [
    { name: "Carlos M.", location: "Stockton, CA",   stars: 5, text: "AC died in a heat wave. Delta Sierra was out in 90 minutes and had it running before dark. Outstanding." },
    { name: "Karen L.",  location: "Lodi, CA",        stars: 5, text: "Called at midnight with no heat. Tech arrived in under an hour, very professional, fair price. Will use again." },
    { name: "David R.",  location: "Tracy, CA",        stars: 5, text: "Signed up for their maintenance plan—saved over $300 vs the last company I used. Highly recommend." },
  ],

  trustBadges: [
    "Licensed & Insured",
    "NATE Certified",
    "BBB Accredited",
    "24/7 Emergency Service",
    "Free Estimates",
    "20 Years Experience",
  ],

  stats: [
    { value: "20+", label: "Years in Business" },
    { value: "4.9★", label: "Google Rating" },
    { value: "24/7", label: "Emergency Service" },
    { value: "200+", label: "Happy Customers" },
  ],

  reasons: [
    { icon: "clock",        title: "Rapid Response",      desc: "Average on-site arrival under 60 minutes for emergency calls across the Central Valley." },
    { icon: "shield-check", title: "Licensed & Insured",  desc: "CSLB licensed, fully insured, and NATE-certified technicians on every job." },
    { icon: "dollar-sign",  title: "Upfront Pricing",     desc: "We quote before we start. No hidden fees, no surprise invoices." },
    { icon: "star",         title: "20 Years Local",      desc: "Family-owned since 2005. We know Stockton and the Central Valley better than anyone." },
  ],

  brandStoryChapters: [
    {
      index: "01",
      label: "Our Beginning",
      headline: "Built for the Central Valley",
      body: "Delta Sierra Mechanical was founded in 2005 by local technicians who knew the extreme heat and cold of the Central Valley demanded a different kind of HVAC company—one that answered every call.",
      bg: "var(--brand-bg)",
      fg: "var(--brand-text)",
    },
    {
      index: "02",
      label: "Our Standard",
      headline: "Same-Day. Every Time.",
      body: "We built our reputation on one rule: if your HVAC fails, we show up the same day. Twenty years later, that commitment hasn't changed. Neither has the Central Valley's heat.",
      bg: "var(--brand-surface)",
      fg: "var(--brand-text)",
    },
    {
      index: "03",
      label: "Our Promise",
      headline: "Fair Prices. No Surprises.",
      body: "Every job starts with an upfront quote. We explain what we're doing and why. You approve it before we touch anything. That's the Delta Sierra way.",
      bg: "var(--brand-accent)",
      fg: "#ffffff",
    },
  ],
}
