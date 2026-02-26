import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aurora Hologram | AutoHDR",
}

export default function AuroraHologramLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#020108",
        "--t-fg": "#ffffff",
        "--t-accent": "#b084ff",
        "--font-sans": "'Inter', sans-serif",
      } as React.CSSProperties}
      className="antialiased min-h-screen relative"
    >
      <div style={{ background: "var(--t-bg)", color: "var(--t-fg)", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  )
}
