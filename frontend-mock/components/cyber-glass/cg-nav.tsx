"use client"

import Link from "next/link"

export default function CgNav() {
  return (
    <nav style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 100, background: "rgba(5, 2, 10, 0.4)", border: "1px solid rgba(0, 240, 255, 0.3)", backdropFilter: "blur(20px)", borderRadius: "16px", padding: "12px 32px", boxShadow: "0 0 30px rgba(0, 240, 255, 0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
        <Link href="/cyber-glass" style={{ color: "var(--t-fg)", textDecoration: "none", fontSize: "16px", fontWeight: 800, letterSpacing: "0.1em", textShadow: "0 0 10px var(--t-accent)" }}>
          AUTOHDR // GLASS
        </Link>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <Link href="/cyber-glass/pricing" style={{ color: "rgba(240,240,240,0.7)", textDecoration: "none", transition: "color 0.2s" }}>
            PRICING
          </Link>
          <Link href="/" style={{ color: "var(--t-pink)", textDecoration: "none", textShadow: "0 0 10px var(--t-pink)", transition: "color 0.2s" }}>
            EXIT
          </Link>
        </div>
      </div>
    </nav>
  )
}
