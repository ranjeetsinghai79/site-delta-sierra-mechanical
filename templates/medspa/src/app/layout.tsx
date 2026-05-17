import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address}`,
  description: `${BUSINESS.name} — Where science meets beauty. Medical-grade aesthetic treatments serving ${BUSINESS.serviceAreas.join(", ")}. Free consultations. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Fonts: Cormorant Garamond (display) + Lato (body) */}
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
