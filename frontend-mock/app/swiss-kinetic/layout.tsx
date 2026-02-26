import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Swiss Kinetic | AutoHDR",
}

export default function SwissKineticLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#f0f0f0",
        "--t-fg": "#050505",
        "--t-accent": "#ff3b00",
        "--font-sans": "'Inter Tight', -apple-system, sans-serif",
      } as React.CSSProperties}
      className="antialiased min-h-screen relative"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap');
        
        ::selection {
          background: var(--t-accent);
          color: var(--t-bg);
        }
      `}</style>
      <div style={{ background: "var(--t-bg)", color: "var(--t-fg)", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  )
}
