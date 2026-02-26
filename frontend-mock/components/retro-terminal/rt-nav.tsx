"use client"

import Link from "next/link"

export default function RtNav() {
  return (
    <nav style={{ padding: "16px 24px", borderBottom: "1px dashed var(--t-fg)", fontFamily: "var(--font-terminal)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1000px", margin: "0 auto" }}>
        <Link href="/retro-terminal" style={{ color: "var(--t-fg)", textDecoration: "none", fontSize: "20px" }}>
          sys_autohdr_v4.2
        </Link>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/retro-terminal/pricing" style={{ color: "var(--t-fg)", textDecoration: "none" }}>
            ./pricing
          </Link>
          <Link href="/" style={{ color: "var(--t-fg)", textDecoration: "none" }}>
            logout
          </Link>
        </div>
      </div>
    </nav>
  )
}
