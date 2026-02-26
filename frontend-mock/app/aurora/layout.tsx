"use client"

import { Sora, DM_Sans } from "next/font/google"

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
})

export default function AuroraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="aurora"
      className={`${sora.variable} ${dmSans.variable}`}
      style={{
        fontFamily: "var(--font-body), sans-serif",
        minHeight: "100vh",
        position: "relative",
        background: "var(--t-bg)",
        color: "var(--t-fg)",
      }}
    >
      {children}
    </div>
  )
}
