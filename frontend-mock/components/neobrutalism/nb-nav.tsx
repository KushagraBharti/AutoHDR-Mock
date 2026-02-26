"use client"

import Link from "next/link"

export default function NbNav() {
  return (
    <nav style={{ padding: "24px 48px", position: "absolute", top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/neobrutalism" style={{ background: "#fff", padding: "8px 24px", border: "4px solid var(--t-fg)", boxShadow: "4px 4px 0px 0px var(--t-fg)", color: "var(--t-fg)", textDecoration: "none", fontSize: "24px", fontWeight: 800, textTransform: "uppercase" }}>
          AUTOHDR
        </Link>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/neobrutalism/pricing" style={{ background: "#fff", padding: "8px 24px", border: "4px solid var(--t-fg)", boxShadow: "4px 4px 0px 0px var(--t-fg)", color: "var(--t-fg)", textDecoration: "none", fontWeight: 800, textTransform: "uppercase" }}>
            PRICING
          </Link>
          <Link href="/" style={{ background: "var(--t-accent)", color: "#fff", padding: "8px 24px", border: "4px solid var(--t-fg)", boxShadow: "4px 4px 0px 0px var(--t-fg)", textDecoration: "none", fontWeight: 800, textTransform: "uppercase" }}>
            EXIT
          </Link>
        </div>
      </div>
    </nav>
  )
}
