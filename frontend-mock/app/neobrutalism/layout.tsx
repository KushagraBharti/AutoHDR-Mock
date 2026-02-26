import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hard-Edge Neobrutalism | AutoHDR",
}

export default function NeobrutalismLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#ffc900",
        "--t-fg": "#000000",
        "--t-accent": "#8b5cf6",
        "--t-pink": "#ff6b6b",
        "--t-blue": "#4ecdc4",
        "--font-sans": "'Syne', system-ui, sans-serif",
      } as React.CSSProperties}
      className="antialiased min-h-screen relative"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap');
        
        body {
          background-image: radial-gradient(var(--t-fg) 2px, transparent 2px);
          background-size: 30px 30px;
          background-color: var(--t-bg);
        }

        .nb-card {
          border: 4px solid var(--t-fg);
          box-shadow: 8px 8px 0px 0px var(--t-fg);
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .nb-card:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0px 0px var(--t-fg);
        }
        
        .nb-card:active {
          transform: translate(4px, 4px);
          box-shadow: 4px 4px 0px 0px var(--t-fg);
        }
      `}</style>
      <div style={{ color: "var(--t-fg)", minHeight: "100vh", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  )
}
