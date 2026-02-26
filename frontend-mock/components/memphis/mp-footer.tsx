"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const BOUNCE = [0.68, -0.55, 0.265, 1.55] as [number, number, number, number]

const FOOTER_LINKS = [
  { label: "Pricing", href: "/memphis/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
]

const WORD_STYLES = [
  { text: "Tools", color: "#3344ff", rotate: -2 },
  { text: "change.", color: "#ff3366", rotate: 1.5 },
  { text: "Vision", color: "#ffcc00", rotate: -1 },
  { text: "doesn't.", color: "#1a1a1a", rotate: 2 },
]

export default function MpFooter() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-body), sans-serif",
        background: "var(--t-bg)",
      }}
    >
      {/* Vision statement */}
      <div
        style={{
          padding: "100px 48px",
          textAlign: "center",
          position: "relative",
          borderTop: "3px solid var(--t-fg)",
        }}
      >
        {/* Floating decorations */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "8%",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "3px solid #3344ff",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: 0,
            height: 0,
            borderLeft: "25px solid transparent",
            borderRight: "25px solid transparent",
            borderBottom: "40px solid #ffcc00",
            opacity: 0.12,
            pointerEvents: "none",
            transform: "rotate(15deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "5%",
            width: "35px",
            height: "35px",
            background: "#ff3366",
            opacity: 0.08,
            pointerEvents: "none",
            transform: "rotate(20deg)",
          }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: BOUNCE }}
          style={{
            fontSize: "clamp(36px, 8vw, 80px)",
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            lineHeight: 1.15,
            margin: "0 0 36px",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0 16px",
          }}
        >
          {WORD_STYLES.map((word, i) => (
            <motion.span
              key={word.text}
              initial={{ opacity: 0, rotate: word.rotate * 3, scale: 0 }}
              whileInView={{ opacity: 1, rotate: word.rotate, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: BOUNCE, delay: 0.1 + i * 0.08 }}
              style={{
                color: word.color,
                display: "inline-block",
                textShadow: word.color !== "#1a1a1a" ? `2px 2px 0 var(--t-fg)` : "none",
              }}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: BOUNCE, delay: 0.4 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Link
            href="/memphis/pricing"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              color: "var(--t-surface)",
              background: "var(--t-pink)",
              padding: "14px 28px",
              border: "3px solid var(--t-fg)",
              boxShadow: "4px 4px 0 0 var(--t-fg)",
              borderRadius: "1.2rem 0.5rem 1rem 0.3rem",
              transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              fontFamily: "var(--font-body), sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(-2px, -2px) rotate(-1deg)"
              el.style.boxShadow = "6px 6px 0 0 var(--t-fg)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(0, 0) rotate(0deg)"
              el.style.boxShadow = "4px 4px 0 0 var(--t-fg)"
            }}
          >
            Upload Photos — Free
          </Link>
          <Link
            href="#"
            style={{
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              color: "var(--t-fg)",
              background: "var(--t-surface)",
              padding: "14px 28px",
              border: "3px solid var(--t-fg)",
              boxShadow: "4px 4px 0 0 var(--t-blue)",
              borderRadius: "0.5rem 1.2rem 0.3rem 1rem",
              transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              fontFamily: "var(--font-body), sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(-2px, -2px) rotate(1deg)"
              el.style.boxShadow = "6px 6px 0 0 var(--t-blue)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(0, 0) rotate(0deg)"
              el.style.boxShadow = "4px 4px 0 0 var(--t-blue)"
            }}
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          borderTop: "3px solid var(--t-fg)",
          padding: "24px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Link href="/memphis" style={{ textDecoration: "none", display: "flex", alignItems: "baseline" }}>
          <span style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 800, fontSize: "18px", color: "var(--t-fg)" }}>Auto</span>
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: "18px",
              color: "var(--t-pink)",
              transform: "rotate(-2deg)",
              display: "inline-block",
            }}
          >
            HDR
          </span>
        </Link>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--t-muted)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = "var(--t-pink)" }}
              onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = "var(--t-muted)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span style={{ fontSize: "9px", color: "var(--t-muted)" }}>&copy; {new Date().getFullYear()} AutoHDR</span>
      </div>

      <div
        style={{
          borderTop: "2px solid var(--t-muted)",
          padding: "12px 40px",
          textAlign: "center",
          fontSize: "9px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--t-muted)",
          fontWeight: 600,
        }}
      >
        Memphis Postmodern Theme &bull; Built with Next.js &bull; Framer Motion
      </div>
    </footer>
  )
}
