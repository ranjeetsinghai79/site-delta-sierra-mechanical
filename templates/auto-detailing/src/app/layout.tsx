import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address}`,
  description: `${BUSINESS.name} — Ceramic coating, paint correction, and full detailing serving ${BUSINESS.serviceAreas.join(", ")}. 5-year warranty. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
