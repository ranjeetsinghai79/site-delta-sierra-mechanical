import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address}`,
  description: `${BUSINESS.name} — Storm damage specialists serving ${BUSINESS.serviceAreas.join(", ")}. Insurance claim experts. Free inspections. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Fonts: Montserrat (display) + Inter (body) */}
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
