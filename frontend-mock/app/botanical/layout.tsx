import type { Metadata } from "next"
import { Fraunces, Lora } from "next/font/google"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoHDR — Botanical",
  description: "AI-powered real estate photo editing. Organic, nature-inspired design.",
}

export default function BotanicalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="botanical"
      className={`${fraunces.variable} ${lora.variable}`}
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      {children}
    </div>
  )
}
