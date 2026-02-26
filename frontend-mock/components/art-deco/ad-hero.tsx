"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"

const EASE_DECO = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const H1_LINES = [
  { text: "AI Real", accent: false },
  { text: "Estate", accent: false },
  { text: "Photo", accent: true },
  { text: "Editing", accent: false },
]

const STATS = [
  { value: "10%", label: "U.S. Listings" },
  { value: "30+", label: "Min Saved Daily" },
  { value: "2min", label: "Turnaround" },
]

/* SVG sunburst: fan of golden lines radiating upward from bottom-center */
function Sunburst() {
  const rays = 14
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return
    const lines = svgRef.current.querySelectorAll("line")
    lines.forEach((line, i) => {
      const length = line.getTotalLength()
      line.style.strokeDasharray = `${length}`
      line.style.strokeDashoffset = `${length}`
      line.style.transition = `stroke-dashoffset 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.08}s`
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line.style.strokeDashoffset = "0"
        })
      })
    })
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 400"
      style={{
        position: "absolute",
        bottom: "-20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        pointerEvents: "none",
        opacity: 0.12,
      }}
    >
      {Array.from({ length: rays }).map((_, i) => {
        const angle = -90 + ((i - (rays - 1) / 2) * 120) / (rays - 1)
        const rad = (angle * Math.PI) / 180
        const cx = 400
        const cy = 400
        const len = 380
        const x2 = cx + Math.cos(rad) * len
        const y2 = cy + Math.sin(rad) * len
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
            stroke="var(--t-accent)"
            strokeWidth="0.8"
          />
        )
      })}
    </svg>
  )
}

export default function AdHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 48px 100px",
        textAlign: "center",
        overflow: "hidden",
        background: "var(--t-bg)",
      }}
    >
      {/* Geometric diamond pattern background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(45deg, rgba(212, 168, 67, 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(212, 168, 67, 0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(212, 168, 67, 0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(212, 168, 67, 0.03) 75%)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          pointerEvents: "none",
        }}
      />

      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(212, 168, 67, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Sunburst />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_DECO, delay: 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "40px",
          zIndex: 1,
        }}
      >
        <div style={{ width: "40px", height: "1px", background: "var(--t-accent)", opacity: 0.5 }} />
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--t-accent)",
            fontFamily: "var(--font-body), Georgia, serif",
            fontWeight: 500,
          }}
        >
          Premiere AI Editing
        </span>
        <div style={{ width: "40px", height: "1px", background: "var(--t-accent)", opacity: 0.5 }} />
      </motion.div>

      {/* H1 — staggered entrance */}
      <h1
        style={{
          fontSize: "clamp(48px, 10vw, 130px)",
          fontFamily: "var(--font-display), serif",
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "0.05em",
          margin: 0,
          zIndex: 1,
        }}
      >
        {H1_LINES.map((line, i) => (
          <motion.div
            key={line.text}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_DECO, delay: 0.2 + i * 0.12 }}
            style={{ display: "block" }}
          >
            {line.accent ? (
              <span
                style={{
                  background: "linear-gradient(90deg, var(--t-accent) 0%, #f5d87a 40%, var(--t-accent) 80%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "ad-shimmer 4s ease-in-out infinite",
                }}
              >
                {line.text}
              </span>
            ) : (
              <span style={{ color: "var(--t-fg)" }}>{line.text}</span>
            )}
          </motion.div>
        ))}
      </h1>

      {/* Shimmer keyframe */}
      <style>{`
        @keyframes ad-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_DECO, delay: 0.7 }}
        style={{
          fontSize: "clamp(14px, 1.4vw, 18px)",
          fontFamily: "var(--font-body), Georgia, serif",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(245, 240, 232, 0.55)",
          maxWidth: "520px",
          lineHeight: 1.7,
          marginTop: "32px",
          zIndex: 1,
        }}
      >
        Professional-grade AI photo editing built for real estate photographers. HDR processing,
        virtual staging, and instant enhancements — delivered in under two minutes.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_DECO, delay: 0.9 }}
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "40px",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* Primary CTA with ornate corners */}
        <Link
          href="/art-deco/pricing"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "var(--t-bg)",
            background: "var(--t-accent)",
            padding: "16px 32px",
            position: "relative",
            transition: "all 0.3s ease",
            fontFamily: "var(--font-body), Georgia, serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.boxShadow = "0 0 30px rgba(212, 168, 67, 0.4)"
            el.style.transform = "translateY(-2px)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.boxShadow = "none"
            el.style.transform = "translateY(0)"
          }}
        >
          Upload Photos — Free
        </Link>
        <Link
          href="#"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "var(--t-accent)",
            background: "transparent",
            padding: "16px 32px",
            border: "1px solid var(--t-accent)",
            position: "relative",
            transition: "all 0.3s ease",
            fontFamily: "var(--font-body), Georgia, serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "rgba(212, 168, 67, 0.1)"
            el.style.boxShadow = "0 0 20px rgba(212, 168, 67, 0.15)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "transparent"
            el.style.boxShadow = "none"
          }}
        >
          Book a Demo
        </Link>
      </motion.div>

      {/* Decorative gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: EASE_DECO, delay: 1.1 }}
        style={{
          width: "60px",
          height: "1px",
          background: "var(--t-accent)",
          marginTop: "48px",
          zIndex: 1,
        }}
      />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_DECO, delay: 1.2 }}
        style={{
          display: "flex",
          gap: "48px",
          marginTop: "32px",
          zIndex: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "48px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontFamily: "var(--font-display), serif",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  color: "var(--t-accent)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(245, 240, 232, 0.4)",
                  marginTop: "8px",
                  fontFamily: "var(--font-body), Georgia, serif",
                }}
              >
                {stat.label}
              </div>
            </div>
            {/* Diamond separator */}
            {i < STATS.length - 1 && (
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "var(--t-accent)",
                  transform: "rotate(45deg)",
                  opacity: 0.4,
                }}
              />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
