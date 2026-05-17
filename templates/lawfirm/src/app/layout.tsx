import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address} — Personal Injury, Family Law & Criminal Defense`,
  description: `${BUSINESS.name} — ${BUSINESS.since}+ years fighting for clients in ${BUSINESS.serviceAreas.join(", ")}. Free consultations. No fee unless we win. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
