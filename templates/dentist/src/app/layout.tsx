import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address}`,
  description: `${BUSINESS.name} — Gentle, modern dentistry serving ${BUSINESS.serviceAreas.join(", ")}. Accepting new patients. Most insurance accepted. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Fonts: Plus Jakarta Sans (display) + Inter (body) */}
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
