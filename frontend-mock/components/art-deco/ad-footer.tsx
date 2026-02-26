"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"

const EASE_DECO = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const FOOTER_LINKS = [
  { label: "Pricing", href: "/art-deco/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
]

/* Small sunburst SVG for footer decoration */
function FooterSunburst() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && svgRef.current) {
            const lines = svgRef.current.querySelectorAll("line")
            lines.forEach((line, i) => {
              const length = line.getTotalLength()
              line.style.strokeDasharray = `${length}`
              line.style.strokeDashoffset = `${length}`
              line.style.transition = `stroke-dashoffset 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.06}s`
              requestAnimationFrame(() => {
                line.style.strokeDashoffset = "0"
              })
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (svgRef.current) observer.observe(svgRef.current)
    return () => observer.disconnect()
  }, [])

  const rays = 10
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 200"
      style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "400px",
        height: "200px",
        pointerEvents: "none",
        opacity: 0.08,
      }}
    >
      {Array.from({ length: rays }).map((_, i) => {
        const angle = -90 + ((i - (rays - 1) / 2) * 100) / (rays - 1)
        const rad = (angle * Math.PI) / 180
        const cx = 200
        const cy = 200
        const len = 190
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(rad) * len}
            y2={cy + Math.sin(rad) * len}
            stroke="var(--t-accent)"
            strokeWidth="0.6"
          />
        )
      })}
    </svg>
  )
}

export default function AdFooter() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      {/* Vision statement */}
      <div
        style={{
          padding: "120px 48px",
          textAlign: "center",
          position: "relative",
          borderTop: "1px solid var(--t-border-gold)",
        }}
      >
        <FooterSunburst />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE_DECO }}
          style={{
            fontSize: "clamp(36px, 7vw, 80px)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "0.05em",
            margin: "0 0 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span style={{ color: "var(--t-fg)" }}>Tools change.</span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, var(--t-accent) 0%, #f5d87a 40%, var(--t-accent) 80%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "ad-shimmer 4s ease-in-out infinite",
            }}
          >
            Vision doesn&apos;t.
          </span>
        </motion.h2>

        <style>{`
          @keyframes ad-shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_DECO, delay: 0.3 }}
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
              transition: "all 0.3s ease",
              fontFamily: "var(--font-body), Georgia, serif",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(212, 168, 67, 0.4)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
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
              transition: "all 0.3s ease",
              fontFamily: "var(--font-body), Georgia, serif",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "rgba(212, 168, 67, 0.1)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
            }}
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>

      {/* Footer bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--t-border-gold)",
          padding: "32px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <Link
          href="/art-deco"
          style={{
            textDecoration: "none",
            fontFamily: "var(--font-display), serif",
            fontSize: "18px",
            letterSpacing: "0.15em",
            color: "var(--t-fg)",
          }}
        >
          Auto
          <span
            style={{
              background: "linear-gradient(135deg, #d4a843, #f5d87a, #d4a843)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            HDR
          </span>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "rgba(245, 240, 232, 0.4)",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-accent)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "rgba(245, 240, 232, 0.4)"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(245, 240, 232, 0.25)",
          }}
        >
          &copy; {new Date().getFullYear()} AutoHDR
        </span>
      </div>

      {/* Bottom attribution */}
      <div
        style={{
          borderTop: "1px solid rgba(212, 168, 67, 0.08)",
          padding: "16px 48px",
          textAlign: "center",
          fontSize: "8px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(245, 240, 232, 0.15)",
        }}
      >
        Art Deco Luxe Theme &nbsp;&#9670;&nbsp; Built with Next.js &nbsp;&#9670;&nbsp; Framer Motion
      </div>
    </footer>
  )
}
