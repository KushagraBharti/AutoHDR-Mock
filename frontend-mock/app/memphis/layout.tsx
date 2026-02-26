import type { Metadata } from "next"
import { Bricolage_Grotesque, Familjen_Grotesk } from "next/font/google"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoHDR — Memphis",
  description: "AI-powered real estate photo editing. Bold Memphis Design postmodern aesthetic.",
}

export default function MemphisLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="memphis"
      className={`${bricolage.variable} ${familjen.variable}`}
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      {children}
    </div>
  )
}
