"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const STEP = { ease: [1, 0, 0, 1] as [number, number, number, number], duration: 0.15 }

const H1_LINES = [
  { text: "AI REAL", accent: false },
  { text: "ESTATE", accent: false },
  { text: "PHOTO", accent: true },
  { text: "EDITING", accent: false },
]

const STATS = [
  { value: "10%", label: "U.S. LISTINGS" },
  { value: "30+", label: "MIN SAVED DAILY" },
  { value: "2MIN", label: "TURNAROUND" },
]

export default function BrutHero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
        minHeight: "85vh",
        alignItems: "end",
        padding: "80px 40px",
        borderBottom: "2px solid var(--t-fg)",
        fontFamily: "var(--font-mono), monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LEFT COLUMN */}
      <div style={{ paddingBottom: "8px" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              whiteSpace: "nowrap",
            }}
          >
            — 001 — PRODUCT
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--t-muted)",
              opacity: 0.3,
            }}
          />
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(56px, 9vw, 120px)",
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {H1_LINES.map((line, i) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...STEP, delay: i * 0.08 }}
              style={{ display: "block" }}
            >
              {line.accent ? (
                <span
                  style={{
                    background: "var(--t-accent)",
                    padding: "0 8px",
                    display: "inline-block",
                    color: "var(--t-fg)",
                  }}
                >
                  {line.text}
                </span>
              ) : (
                line.text
              )}
            </motion.div>
          ))}
        </h1>
      </div>

      {/* RIGHT COLUMN */}
      <div
        style={{
          paddingLeft: "40px",
          paddingBottom: "8px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Giant faint section number */}
        <span
          style={{
            position: "absolute",
            top: "-60px",
            right: "0px",
            fontSize: "8vw",
            fontWeight: 800,
            opacity: 0.06,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          001
        </span>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...STEP, delay: 0.32 }}
          style={{
            fontSize: "14px",
            color: "var(--t-muted)",
            maxWidth: "360px",
            lineHeight: 1.7,
          }}
        >
          Professional-grade AI photo editing built for real estate photographers. HDR processing,
          virtual staging, and instant enhancements — delivered in under 2 minutes.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...STEP, delay: 0.4 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          <Link
            href="/brutalist/pricing"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--t-bg)",
              background: "var(--t-fg)",
              padding: "14px 20px",
              border: "2px solid var(--t-fg)",
              transition: "all 0.05s steps(1)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-accent)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-bg)"
              ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-fg)"
            }}
          >
            [ UPLOAD PHOTOS — FREE ]
          </Link>
          <Link
            href="#"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--t-fg)",
              background: "transparent",
              padding: "14px 20px",
              border: "2px solid var(--t-fg)",
              transition: "all 0.05s steps(1)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-bg)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
            }}
          >
            [ BOOK A DEMO ]
          </Link>
        </motion.div>

        {/* Thin horizontal rule */}
        <div style={{ height: "1px", background: "var(--t-fg)", opacity: 0.2 }} />

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...STEP, delay: 0.48 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0px",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                paddingRight: i < STATS.length - 1 ? "20px" : "0px",
                borderRight: i < STATS.length - 1 ? "1px solid var(--t-fg)" : "none",
                paddingLeft: i > 0 ? "20px" : "0px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--t-muted)",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border decoration */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "40px",
          right: "40px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      />
    </section>
  )
}
