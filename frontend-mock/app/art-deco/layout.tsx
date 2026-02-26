import type { Metadata } from "next"
import { Poiret_One, Cormorant_Garamond } from "next/font/google"

const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoHDR — Art Deco Luxe",
  description: "AI-powered real estate photo editing. 1920s geometric opulence.",
}

export default function ArtDecoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="art-deco"
      className={`${poiretOne.variable} ${cormorant.variable}`}
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      {children}
    </div>
  )
}
