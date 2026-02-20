import type { Metadata } from "next"
import { Playfair_Display, Libre_Baskerville } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoHDR — Editorial",
  description: "AI-powered real estate photography editing. Luxury editorial aesthetic.",
}

export default function EditorialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="editorial"
      className={`${playfair.variable} ${libreBaskerville.variable}`}
      style={{
        fontFamily: "var(--font-body), Georgia, serif",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  )
}
