"use client"

import Link from "next/link"

const FOOTER_NAV = [
  { label: "PRICING", href: "/neon-noir/pricing" },
  { label: "STUDIO", href: "#" },
  { label: "LISTINGS", href: "#" },
  { label: "CONTACT", href: "#" },
]

const FOOTER_LEGAL = [
  { label: "PRIVACY", href: "#" },
  { label: "TERMS", href: "#" },
  { label: "COOKIES", href: "#" },
]

const SOCIAL_LINKS = [
  { label: "TW", href: "#" },
  { label: "IG", href: "#" },
  { label: "LI", href: "#" },
  { label: "YT", href: "#" },
]

export default function NNFooter() {
  return (
    <footer
      style={{
        background: "var(--t-surface)",
        borderTop: "1px solid transparent",
        borderImage:
          "linear-gradient(90deg, transparent, var(--t-pink), var(--t-cyan), transparent) 1",
        fontFamily: "var(--font-mono), monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow from border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,45,120,0.6), rgba(0,240,255,0.6), transparent)",
          boxShadow:
            "0 0 20px rgba(255,45,120,0.2), 0 0 40px rgba(0,240,255,0.1)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,45,120,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,120,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "56px 40px 40px",
        }}
      >
        {/* Top grid: 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Col 1: Logo + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link
              href="/neon-noir"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                  fontSize: "24px",
                  letterSpacing: "0.04em",
                  color: "var(--t-fg)",
                }}
              >
                AUTO
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                  fontSize: "24px",
                  letterSpacing: "0.04em",
                  color: "var(--t-pink)",
                  textShadow:
                    "0 0 10px var(--t-pink), 0 0 30px rgba(255,45,120,0.3)",
                }}
              >
                HDR
              </span>
            </Link>
            <p
              style={{
                fontSize: "11px",
                lineHeight: 1.7,
                color: "var(--t-muted)",
                letterSpacing: "0.02em",
                maxWidth: "200px",
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
                border: "1px solid rgba(0,240,255,0.2)",
                padding: "4px 10px",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--t-cyan)",
                  boxShadow: "0 0 6px var(--t-cyan)",
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--t-cyan)",
                }}
              >
                SYSTEMS ONLINE
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--t-pink)",
                textShadow: "0 0 8px rgba(255,45,120,0.3)",
                margin: 0,
              }}
            >
              NAVIGATE
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "var(--t-muted)",
                    transition: "color 0.2s ease, text-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = "var(--t-fg)"
                    el.style.textShadow = "0 0 6px rgba(240,230,255,0.4)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = "var(--t-muted)"
                    el.style.textShadow = "none"
                  }}
                >
                  &gt; {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--t-pink)",
                textShadow: "0 0 8px rgba(255,45,120,0.3)",
                margin: 0,
              }}
            >
              CONTACT
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                { label: "SUPPORT", val: "hello@autohdr.ai" },
                { label: "SALES", val: "sales@autohdr.ai" },
                { label: "PRESS", val: "press@autohdr.ai" },
              ].map(({ label, val }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(123,106,154,0.6)",
                    }}
                  >
                    {label}
                  </span>
                  <a
                    href={`mailto:${val}`}
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.04em",
                      textDecoration: "none",
                      color: "var(--t-muted)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color =
                        "var(--t-fg)"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color =
                        "var(--t-muted)"
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
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--t-pink)",
                textShadow: "0 0 8px rgba(255,45,120,0.3)",
                margin: 0,
              }}
            >
              FOLLOW
            </h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(255,45,120,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    color: "var(--t-muted)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "var(--t-pink)"
                    el.style.color = "var(--t-pink)"
                    el.style.boxShadow = "0 0 10px rgba(255,45,120,0.3)"
                    el.style.background = "rgba(255,45,120,0.06)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "rgba(255,45,120,0.2)"
                    el.style.color = "var(--t-muted)"
                    el.style.boxShadow = "none"
                    el.style.background = "transparent"
                  }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: 1.6,
                color: "var(--t-muted)",
                letterSpacing: "0.02em",
              }}
            >
              Join 5,000+ photographers already using AutoHDR.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,45,120,0.1)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              opacity: 0.6,
            }}
          >
            &copy; 2026 AUTOHDR INC. — AI PHOTO EDITING FOR REAL ESTATE
          </span>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "var(--t-muted)",
                  opacity: 0.5,
                  transition: "opacity 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.opacity = "1"
                  el.style.color = "var(--t-fg)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.opacity = "0.5"
                  el.style.color = "var(--t-muted)"
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              opacity: 0.35,
            }}
          >
            NEON NOIR · NEXT.JS · FRAMER MOTION
          </span>
        </div>
      </div>
    </footer>
  )
}
