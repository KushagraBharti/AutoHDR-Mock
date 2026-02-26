import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kinetic Neobrutalism | AutoHDR",
}

export default function KineticBrutalismLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#ff3366",
        "--t-fg": "#000000",
        "--t-accent": "#ffcc00",
        "--t-blue": "#33ccff",
        "--font-sans": "'Syne', 'Inter Tight', sans-serif",
      } as React.CSSProperties}
      className="antialiased min-h-screen relative"
    >
      <style>{`
        body {
          background-color: var(--t-bg);
          overflow-x: hidden;
        }

        .kb-card {
          border: 6px solid var(--t-fg);
          box-shadow: 12px 12px 0px 0px var(--t-fg);
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .kb-card:hover {
          transform: translate(-6px, -6px);
          box-shadow: 18px 18px 0px 0px var(--t-fg);
        }
        
        .kb-card:active {
          transform: translate(6px, 6px);
          box-shadow: 6px 6px 0px 0px var(--t-fg);
        }
      `}</style>
      <div style={{ color: "var(--t-fg)", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  )
}
