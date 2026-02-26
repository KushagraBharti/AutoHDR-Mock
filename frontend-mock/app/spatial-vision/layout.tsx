import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spatial Vision OS | AutoHDR",
}

export default function SpatialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#000000",
        "--t-fg": "#ffffff",
        "--t-glass": "rgba(255, 255, 255, 0.05)",
        "--t-border": "rgba(255, 255, 255, 0.15)",
        "--font-sans": "system-ui, -apple-system, sans-serif",
      } as React.CSSProperties}
      className="antialiased min-h-screen relative"
    >
      <div style={{ background: "var(--t-bg)", color: "var(--t-fg)", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  )
}
