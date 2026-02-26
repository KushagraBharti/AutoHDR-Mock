"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const FOOTER_LINKS = [
  { label: "Pricing", href: "/botanical/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
]

/* Morphing blob for footer background */
function FooterBlob({ size, color, top, left, delay }: { size: number; color: string; top: string; left: string; delay: number }) {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "40% 60% 70% 30% / 40% 50% 60% 50%",
          "60% 40% 30% 70% / 50% 60% 40% 60%",
          "40% 60% 70% 30% / 40% 50% 60% 50%",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay }}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        opacity: 0.06,
        top,
        left,
        filter: "blur(50px)",
        pointerEvents: "none",
      }}
    />
  )
}

export default function BtFooter() {
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
          borderTop: "1px solid rgba(124, 149, 107, 0.1)",
        }}
      >
        <FooterBlob size={400} color="var(--t-accent)" top="20%" left="20%" delay={0} />
        <FooterBlob size={300} color="var(--t-accent2)" top="30%" left="60%" delay={3} />

        {/* Decorative branch */}
        <svg
          viewBox="0 0 200 100"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "250px",
            opacity: 0.04,
            pointerEvents: "none",
          }}
        >
          <path
            d="M0 50 C50 50 80 30 100 50 C120 70 150 50 200 50"
            fill="none"
            stroke="var(--t-accent)"
            strokeWidth="0.5"
          />
          <ellipse cx="60" cy="35" rx="15" ry="10" fill="none" stroke="var(--t-accent)" strokeWidth="0.3" transform="rotate(-20, 60, 35)" />
          <ellipse cx="140" cy="35" rx="15" ry="10" fill="none" stroke="var(--t-accent)" strokeWidth="0.3" transform="rotate(20, 140, 35)" />
          <ellipse cx="80" cy="65" rx="12" ry="8" fill="none" stroke="var(--t-accent)" strokeWidth="0.3" transform="rotate(15, 80, 65)" />
          <ellipse cx="120" cy="65" rx="12" ry="8" fill="none" stroke="var(--t-accent)" strokeWidth="0.3" transform="rotate(-15, 120, 65)" />
        </svg>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE_SMOOTH }}
          style={{
            fontSize: "clamp(32px, 7vw, 72px)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 800,
            lineHeight: 1.1,
            margin: "0 0 32px",
            position: "relative",
            zIndex: 1,
            fontVariationSettings: "'WONK' 1",
          }}
        >
          <span style={{ color: "var(--t-fg)" }}>Tools change.</span>
          <br />
          <span style={{ color: "var(--t-accent)" }}>Vision doesn&apos;t.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.2 }}
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
            href="/botanical/pricing"
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textDecoration: "none",
              color: "var(--t-bg)",
              background: "var(--t-accent)",
              padding: "14px 28px",
              borderRadius: "2rem 1rem 2rem 1.5rem",
              transition: "all 0.4s ease",
              fontFamily: "var(--font-body), Georgia, serif",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(124, 149, 107, 0.35)"
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
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textDecoration: "none",
              color: "var(--t-accent2)",
              background: "transparent",
              padding: "14px 28px",
              border: "1px solid var(--t-accent2)",
              borderRadius: "1rem 2rem 1.5rem 2rem",
              transition: "all 0.4s ease",
              fontFamily: "var(--font-body), Georgia, serif",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "rgba(198, 122, 74, 0.1)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
            }}
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          borderTop: "1px solid rgba(124, 149, 107, 0.1)",
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Link
          href="/botanical"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: "2px",
          }}
        >
          <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontWeight: 500, fontSize: "16px", color: "var(--t-fg)" }}>
            Auto
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), serif",
              fontWeight: 700,
              fontSize: "17px",
              color: "var(--t-accent)",
              fontVariationSettings: "'WONK' 1",
            }}
          >
            HDR
          </span>
        </Link>

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "11px",
                textDecoration: "none",
                color: "rgba(240, 234, 214, 0.35)",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = "var(--t-accent)" }}
              onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = "rgba(240, 234, 214, 0.35)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span style={{ fontSize: "9px", color: "rgba(240, 234, 214, 0.2)" }}>
          &copy; {new Date().getFullYear()} AutoHDR
        </span>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(124, 149, 107, 0.05)",
          padding: "14px 48px",
          textAlign: "center",
          fontSize: "8px",
          letterSpacing: "0.2em",
          color: "rgba(240, 234, 214, 0.12)",
          fontStyle: "italic",
        }}
      >
        Organic Botanical Theme &middot; Built with Next.js &middot; Framer Motion
      </div>
    </footer>
  )
}
