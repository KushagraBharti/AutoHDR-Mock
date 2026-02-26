"use client"

import Link from "next/link"

export default function KbNav() {
  return (
    <nav style={{ padding: "24px 48px", position: "absolute", top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/kinetic-brutalism" style={{ background: "#fff", padding: "12px 32px", border: "6px solid var(--t-fg)", boxShadow: "8px 8px 0px 0px var(--t-fg)", color: "var(--t-fg)", textDecoration: "none", fontSize: "32px", fontWeight: 800, textTransform: "uppercase", transform: "rotate(-2deg)" }}>
          AUTOHDR
        </Link>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/kinetic-brutalism/pricing" style={{ background: "var(--t-accent)", padding: "12px 32px", border: "6px solid var(--t-fg)", boxShadow: "8px 8px 0px 0px var(--t-fg)", color: "var(--t-fg)", textDecoration: "none", fontWeight: 800, textTransform: "uppercase", fontSize: "20px", transform: "rotate(2deg)" }}>
            PRICING
          </Link>
          <Link href="/" style={{ background: "var(--t-blue)", padding: "12px 32px", border: "6px solid var(--t-fg)", boxShadow: "8px 8px 0px 0px var(--t-fg)", color: "var(--t-fg)", textDecoration: "none", fontWeight: 800, textTransform: "uppercase", fontSize: "20px", transform: "rotate(-1deg)" }}>
            EXIT
          </Link>
        </div>
      </div>
    </nav>
  )
}
