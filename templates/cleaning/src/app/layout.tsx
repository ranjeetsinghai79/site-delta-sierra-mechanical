import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address} — Professional Cleaning Services`,
  description: `${BUSINESS.name} — Background-checked, eco-friendly cleaning serving ${BUSINESS.serviceAreas.join(", ")}. Deep cleaning, recurring service, move-in/out. No contracts. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
