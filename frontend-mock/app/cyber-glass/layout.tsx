import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cyber Glass OS | AutoHDR",
}

export default function CyberGlassLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#05020a",
        "--t-fg": "#f0f0f0",
        "--t-accent": "#00f0ff",
        "--t-pink": "#ff003c",
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
