import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

const jetMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoHDR — Brutalist",
  description: "AI-powered real estate photo editing. Swiss Brutalist aesthetic.",
}

export default function BrutalistLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="brutalist"
      className={jetMono.variable}
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-mono), monospace",
      }}
    >
      {children}
    </div>
  )
}
