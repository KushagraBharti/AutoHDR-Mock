"use client"

import Link from "next/link"

export default function ChNav() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(3, 0, 8, 0.8)", borderBottom: "1px solid var(--t-accent)", backdropFilter: "blur(10px)", fontFamily: "var(--font-mono)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/cyber-hologram" style={{ color: "var(--t-fg)", textDecoration: "none", fontSize: "18px", fontWeight: 800, letterSpacing: "0.1em", textShadow: "0 0 8px var(--t-fg)" }}>
          AUTOHDR_AI
        </Link>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/cyber-hologram/pricing" style={{ color: "rgba(0,255,204,0.7)", textDecoration: "none", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}>
            [ PRICING ]
          </Link>
          <Link href="/" style={{ color: "rgba(0,255,204,0.7)", textDecoration: "none", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}>
            [ EXIT ]
          </Link>
        </div>
      </div>
    </nav>
  )
}
