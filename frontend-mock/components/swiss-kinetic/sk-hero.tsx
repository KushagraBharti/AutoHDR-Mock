"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function SkHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Extreme kinetic transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const textX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const textX2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "150vh", // Extra height for scroll
        background: "var(--t-bg)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "48px",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ scale, y: yPos, opacity, transformOrigin: "center center" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8vh" }}>
            <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em" }}>AUTOHDR</span>
            <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--t-accent)" }}>[ A.I. SYSTEM ]</span>
            <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em" }}>2026</span>
          </div>

          <motion.h1
            style={{
              fontSize: "clamp(60px, 15vw, 250px)",
              fontWeight: 800,
              lineHeight: 0.8,
              letterSpacing: "-0.06em",
              margin: 0,
              x: textX1,
              whiteSpace: "nowrap"
            }}
          >
            PERFECT
          </motion.h1>
          <motion.h1
            style={{
              fontSize: "clamp(60px, 15vw, 250px)",
              fontWeight: 800,
              lineHeight: 0.8,
              letterSpacing: "-0.06em",
              margin: 0,
              color: "var(--t-accent)",
              x: textX2,
              whiteSpace: "nowrap",
              textAlign: "right"
            }}
          >
            PIXELS
          </motion.h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginTop: "10vh" }}>
            <p style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "400px" }}>
              Redefining real estate photography through absolute automation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px" }}>
              <Link
                href="#"
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: "var(--t-fg)",
                  textDecoration: "none",
                  borderBottom: "4px solid var(--t-fg)",
                  paddingBottom: "8px",
                  transition: "color 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = "var(--t-accent)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-fg)"
                }}
              >
                UPLOAD
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
