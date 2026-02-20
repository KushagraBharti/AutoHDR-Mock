"use client"

import Link from "next/link"

const FOOTER_LINKS = [
  { label: "PRICING", href: "/brutalist/pricing" },
  { label: "STUDIO", href: "#" },
  { label: "LISTINGS", href: "#" },
  { label: "CONTACT", href: "#" },
  { label: "PRIVACY", href: "#" },
  { label: "TERMS", href: "#" },
]

export default function BrutFooter() {
  return (
    <footer
      style={{
        borderTop: "2px solid var(--t-fg)",
        padding: "32px 40px",
        fontFamily: "var(--font-mono), monospace",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <Link
          href="/brutalist"
          style={{
            textDecoration: "none",
            color: "var(--t-fg)",
            fontWeight: 800,
            fontSize: "16px",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: "0px",
          }}
        >
          AUTO
          <span
            style={{
              background: "var(--t-accent)",
              color: "var(--t-fg)",
              padding: "1px 4px",
              display: "inline-block",
            }}
          >
            HDR
          </span>
        </Link>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-muted)",
                transition: "color 0.05s steps(1)",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-muted)"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
            }}
          >
            &copy; 2026 AUTOHDR INC.
          </span>
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              opacity: 0.5,
            }}
          >
            AI PHOTO EDITING FOR REAL ESTATE
          </span>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          marginTop: "24px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(10,10,8,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--t-muted)",
            opacity: 0.4,
          }}
        >
          SWISS BRUTALIST THEME · BUILT WITH NEXT.JS · FRAMER MOTION
        </span>
      </div>
    </footer>
  )
}
