"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

const FOOTER_NAV = [
  { label: "Pricing", href: "/aurora/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

const FOOTER_LEGAL = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
]

const SOCIAL_LINKS = [
  { label: "TW", href: "#" },
  { label: "IG", href: "#" },
  { label: "LI", href: "#" },
  { label: "YT", href: "#" },
]

export default function AuFooter() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [hoveredLegal, setHoveredLegal] = useState<string | null>(null)

  return (
    <footer
      style={{
        background: "var(--t-bg)",
        fontFamily: "var(--font-body), sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Intensified aurora orbs converging */}
      <motion.div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          left: "20%",
          top: "-20%",
        }}
        animate={{
          x: ["0%", "8%", "-4%", "0%"],
          y: ["0%", "5%", "-3%", "0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          right: "15%",
          top: "10%",
        }}
        animate={{
          x: ["0%", "-6%", "4%", "0%"],
          y: ["0%", "-4%", "6%", "0%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          left: "50%",
          bottom: "-10%",
          transform: "translateX(-50%)",
        }}
        animate={{
          x: ["-50%", "-45%", "-55%", "-50%"],
          y: ["0%", "-5%", "3%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Tagline section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 40px 0",
          textAlign: "center",
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "var(--t-fg)",
            margin: "0 auto",
            maxWidth: "600px",
            lineHeight: 1.3,
          }}
        >
          Tools change.{" "}
          <span
            style={{
              fontWeight: 700,
              background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue), var(--t-accent2), var(--t-aurora-pink))",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "au-iridescent 5s ease infinite",
            }}
          >
            Vision
          </span>{" "}
          doesn&apos;t.
        </motion.h3>
      </div>

      {/* Glass divider */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "48px auto 0",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.2), rgba(45,212,191,0.15), rgba(56,189,248,0.15), rgba(129,140,248,0.2), transparent)",
          }}
        />
      </div>

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "48px 40px 32px",
        }}
      >
        {/* Top grid: 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Col 1: Logo + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link
              href="/aurora"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "var(--t-fg)",
                }}
              >
                Auto
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue))",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "au-iridescent 4s ease infinite",
                }}
              >
                HDR
              </span>
            </Link>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(232,234,240,0.4)",
                maxWidth: "220px",
              }}
            >
              AI-powered real estate photo editing. Professional results in under 2 minutes.
            </p>
            {/* Status pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(74,222,128,0.15)",
                borderRadius: "20px",
                padding: "5px 14px",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--t-accent)",
                  boxShadow: "0 0 6px rgba(74,222,128,0.5)",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "var(--t-accent)",
                  opacity: 0.8,
                }}
              >
                Systems Online
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(232,234,240,0.35)",
                margin: 0,
              }}
            >
              Navigate
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    textDecoration: "none",
                    color: hoveredNav === link.label ? "var(--t-fg)" : "rgba(232,234,240,0.45)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(232,234,240,0.35)",
                margin: 0,
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Support", val: "hello@autohdr.ai" },
                { label: "Sales", val: "sales@autohdr.ai" },
                { label: "Press", val: "press@autohdr.ai" },
              ].map(({ label, val }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(232,234,240,0.25)",
                    }}
                  >
                    {label}
                  </span>
                  <a
                    href={`mailto:${val}`}
                    style={{
                      fontSize: "13px",
                      fontWeight: 300,
                      textDecoration: "none",
                      color: "rgba(232,234,240,0.45)",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = "rgba(232,234,240,0.45)"
                    }}
                  >
                    {val}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Social */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(232,234,240,0.35)",
                margin: 0,
              }}
            >
              Follow
            </h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  onMouseEnter={() => setHoveredSocial(s.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "12px",
                    border: hoveredSocial === s.label
                      ? "1px solid rgba(74,222,128,0.3)"
                      : "1px solid rgba(255,255,255,0.08)",
                    background: hoveredSocial === s.label
                      ? "rgba(74,222,128,0.06)"
                      : "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    color: hoveredSocial === s.label
                      ? "var(--t-accent)"
                      : "rgba(232,234,240,0.45)",
                    transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                    boxShadow: hoveredSocial === s.label
                      ? "0 0 12px rgba(74,222,128,0.15)"
                      : "none",
                  }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "rgba(232,234,240,0.35)",
              }}
            >
              Join 5,000+ photographers already using AutoHDR.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Copyright in DM Sans 300 */}
          <span
            style={{
              fontSize: "12px",
              fontWeight: 300,
              letterSpacing: "0.02em",
              color: "rgba(232,234,240,0.3)",
            }}
          >
            &copy; 2026 AutoHDR Inc. — AI Photo Editing for Real Estate
          </span>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLegal(link.label)}
                onMouseLeave={() => setHoveredLegal(null)}
                style={{
                  fontSize: "12px",
                  fontWeight: 300,
                  textDecoration: "none",
                  color: hoveredLegal === link.label
                    ? "var(--t-fg)"
                    : "rgba(232,234,240,0.3)",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Attribution bar */}
          <span
            style={{
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "rgba(232,234,240,0.2)",
            }}
          >
            Aurora · Next.js · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  )
}
