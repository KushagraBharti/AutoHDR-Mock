"use client"

import Link from "next/link"

export default function SkNav() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "24px 48px", mixBlendMode: "difference", color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/swiss-kinetic" style={{ color: "inherit", textDecoration: "none", fontSize: "24px", fontWeight: 800, letterSpacing: "-0.02em" }}>
          AUTOHDR
        </Link>
        <div style={{ display: "flex", gap: "40px", fontWeight: 600 }}>
          <Link href="/swiss-kinetic/pricing" style={{ color: "inherit", textDecoration: "none" }}>
            PRICING
          </Link>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            EXIT
          </Link>
        </div>
      </div>
    </nav>
  )
}
