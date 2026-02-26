"use client"

import Link from "next/link"

export default function SvNav() {
  return (
    <nav style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 100, background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: "100px", padding: "8px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <Link href="/spatial-vision" style={{ color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>
          AutoHDR OS
        </Link>
        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.2)" }} />
        <Link href="/spatial-vision/pricing" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px" }}>
          Pricing
        </Link>
        <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px" }}>
          Exit Space
        </Link>
      </div>
    </nav>
  )
}
