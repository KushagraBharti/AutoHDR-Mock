import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/nav"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoHDR — AI Real Estate Photo Editing",
  description:
    "Professional HDR editing, virtual staging, and AI-powered photo enhancements delivered in minutes. Trusted to edit 10% of U.S. real estate listings.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  )
}
