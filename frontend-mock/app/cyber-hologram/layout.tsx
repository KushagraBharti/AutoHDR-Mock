import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cyber Hologram | AutoHDR",
}

export default function CyberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--t-bg": "#030008",
        "--t-fg": "#00ffcc",
        "--t-accent": "#ff003c",
        "--t-grid": "rgba(0, 255, 204, 0.1)",
        "--t-panel": "rgba(3, 0, 8, 0.8)",
        "--font-mono": "JetBrains Mono, Courier, monospace",
      } as React.CSSProperties}
      className="antialiased min-h-screen relative"
    >
      <style>{`
        @keyframes scanlines {
          0% { background-position: 0 0; }
          100% { background-position: 0 100vh; }
        }
        .ch-scanlines {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 50;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
          opacity: 0.15;
        }
        .ch-glow {
          text-shadow: 0 0 10px var(--t-fg), 0 0 20px var(--t-fg);
        }
        .ch-glitch-text {
          position: relative;
        }
        .ch-glitch-text::before,
        .ch-glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .ch-glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 var(--t-accent);
          clip: rect(24px, 550px, 90px, 0);
          animation: ch-glitch-anim 3s infinite linear alternate-reverse;
        }
        .ch-glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 var(--t-fg);
          clip: rect(85px, 550px, 140px, 0);
          animation: ch-glitch-anim 2.5s infinite linear alternate-reverse;
        }
        @keyframes ch-glitch-anim {
          0% { clip: rect(10px, 9999px, 83px, 0); }
          20% { clip: rect(60px, 9999px, 15px, 0); }
          40% { clip: rect(35px, 9999px, 90px, 0); }
          60% { clip: rect(15px, 9999px, 45px, 0); }
          80% { clip: rect(95px, 9999px, 10px, 0); }
          100% { clip: rect(50px, 9999px, 60px, 0); }
        }
      `}</style>
      <div className="ch-scanlines" />
      <div style={{ background: "var(--t-bg)", color: "var(--t-fg)", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  )
}
