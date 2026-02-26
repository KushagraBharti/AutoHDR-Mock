import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retro Terminal | AutoHDR",
}

export default function RetroTerminalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#051005",
        "--t-fg": "#33ff00",
        "--t-accent": "#33ff00",
        "--font-terminal": "'VT323', 'Courier New', Courier, monospace",
      } as React.CSSProperties}
      className="antialiased min-h-screen relative"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        .rt-crt::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 2;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }

        .rt-crt::after {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: radial-gradient(circle, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
          z-index: 3;
          pointer-events: none;
        }

        .rt-flicker {
          animation: crt-flicker 0.15s infinite;
        }

        @keyframes crt-flicker {
          0% { opacity: 0.98; }
          50% { opacity: 0.95; }
          100% { opacity: 0.99; }
        }

        body {
          background-color: var(--t-bg);
        }
      `}</style>
      <div className="rt-crt rt-flicker" style={{ position: 'fixed', inset: 0, zIndex: 50 }} />
      <div style={{ background: "var(--t-bg)", color: "var(--t-fg)", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  )
}
