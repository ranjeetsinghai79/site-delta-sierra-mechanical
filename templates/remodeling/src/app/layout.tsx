import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address} — Kitchen, Bath & Home Remodeling`,
  description: `${BUSINESS.name} — Licensed general contractor serving ${BUSINESS.serviceAreas.join(", ")}. Kitchen remodels, bathroom renovations, room additions. Free design consultation. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
