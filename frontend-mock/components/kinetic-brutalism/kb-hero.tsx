"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function KbHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const textX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const textX2 = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"])

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "150vh",
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
          overflow: "hidden",
        }}
      >
        <motion.div
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          style={{ position: "absolute", top: "15%", right: "15%", zIndex: 20, cursor: "grab" }}
          whileDrag={{ cursor: "grabbing", scale: 1.1 }}
        >
          <div style={{ background: "var(--t-accent)", width: "200px", height: "200px", borderRadius: "50%", border: "8px solid var(--t-fg)", boxShadow: "12px 12px 0px 0px var(--t-fg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", fontWeight: 800, transform: "rotate(15deg)" }}>
            DRAG ME!
          </div>
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          style={{ position: "absolute", bottom: "15%", left: "10%", zIndex: 20, cursor: "grab" }}
          whileDrag={{ cursor: "grabbing", scale: 1.1 }}
        >
          <div style={{ background: "var(--t-blue)", padding: "24px 48px", border: "8px solid var(--t-fg)", boxShadow: "12px 12px 0px 0px var(--t-fg)", fontSize: "40px", fontWeight: 800, transform: "rotate(-10deg)" }}>
            * BOING *
          </div>
        </motion.div>

        <motion.div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "24px", whiteSpace: "nowrap" }}>
          <motion.h1
            style={{
              fontSize: "clamp(100px, 20vw, 300px)",
              fontWeight: 800,
              lineHeight: 0.8,
              letterSpacing: "-0.04em",
              margin: 0,
              x: textX1,
              color: "transparent",
              WebkitTextStroke: "6px var(--t-fg)",
            }}
          >
            PERFECT PHOTOS
          </motion.h1>
          <motion.h1
            style={{
              fontSize: "clamp(100px, 20vw, 300px)",
              fontWeight: 800,
              lineHeight: 0.8,
              letterSpacing: "-0.04em",
              margin: 0,
              x: textX2,
              color: "#fff",
              textShadow: "16px 16px 0px var(--t-fg)",
            }}
          >
            ZERO EFFORT.
          </motion.h1>
        </motion.div>

        <div style={{ position: "absolute", bottom: "48px", right: "48px", zIndex: 30 }}>
          <Link
            href="#"
            style={{
              background: "#fff",
              padding: "32px 64px",
              border: "8px solid var(--t-fg)",
              boxShadow: "16px 16px 0px 0px var(--t-fg)",
              color: "var(--t-fg)",
              textDecoration: "none",
              fontSize: "40px",
              fontWeight: 800,
              textTransform: "uppercase",
              display: "inline-block",
              transform: "rotate(-5deg)",
              transition: "transform 0.1s, box-shadow 0.1s"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(-8px, -8px) rotate(-8deg)"
              el.style.boxShadow = "24px 24px 0px 0px var(--t-fg)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "rotate(-5deg)"
              el.style.boxShadow = "16px 16px 0px 0px var(--t-fg)"
            }}
          >
            UPLOAD NOW
          </Link>
        </div>
      </div>
    </section>
  )
}
