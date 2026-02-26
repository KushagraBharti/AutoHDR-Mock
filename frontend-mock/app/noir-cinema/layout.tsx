import type { Metadata } from "next"
import { Bodoni_Moda, Newsreader } from "next/font/google"

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoHDR — Noir Cinema",
  description: "AI-powered real estate photo editing. 1940s film noir, selective color.",
}

export default function NoirCinemaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-theme="noir-cinema"
      className={`${bodoniModa.variable} ${newsreader.variable}`}
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      {/* Film grain overlay */}
      <div className="nc-film-grain nc-grain-animate">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="nc-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
              seed="2"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#nc-noise)" />
        </svg>
      </div>

      {/* Vignette overlay */}
      <div className="nc-vignette" />

      {children}
    </div>
  )
}
