"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AhNav() {
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"])
  const bg = useTransform(scrollY, [0, 100], ["rgba(2, 1, 8, 0)", "rgba(2, 1, 8, 0.6)"])
  const border = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"])

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: bg,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        borderBottom: "1px solid",
        borderBottomColor: border,
        padding: "24px 48px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/aurora-hologram" style={{ color: "#fff", textDecoration: "none", fontSize: "20px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          AUTO<span style={{ color: "var(--t-accent)" }}>HDR</span>
        </Link>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          <Link href="/aurora-hologram/pricing" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
            Pricing
          </Link>
          <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
            Exit
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
