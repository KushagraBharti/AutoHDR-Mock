"use client"

import Link from "next/link"

const NAV_LINKS = [
  { label: "Home", href: "/editorial" },
  { label: "Pricing", href: "/editorial/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
]

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
]

export default function EdFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: "var(--t-bg)",
        borderTop: "3px solid var(--t-fg)",
      }}
    >
      {/* Main footer columns */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 48px 48px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
        }}
      >
        {/* Column 1: Logo + tagline */}
        <div>
          <Link href="/editorial" style={{ textDecoration: "none", display: "inline-block" }}>
            <span
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "32px",
                letterSpacing: "-0.01em",
                color: "var(--t-fg)",
                display: "block",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              AutoHDR
            </span>
          </Link>
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              marginBottom: "24px",
            }}
          >
            AI Real Estate Photography
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "12px",
              lineHeight: 1.75,
              color: "var(--t-muted)",
              maxWidth: "280px",
            }}
          >
            Trusted by professional real estate photographers and agencies
            across North America. Editing 10% of all U.S. listings, every day.
          </p>

          {/* Issue stamp */}
          <div
            style={{
              marginTop: "32px",
              display: "inline-block",
              borderLeft: "3px solid var(--t-accent)",
              paddingLeft: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--t-accent)",
              }}
            >
              Issue 001 &mdash; February 2026
            </p>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-fg)",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--t-rule)",
            }}
          >
            Navigation
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} style={{ marginBottom: "10px" }}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontSize: "12px",
                    color: "var(--t-muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    display: "inline-block",
                    paddingBottom: "1px",
                    borderBottom: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = "var(--t-accent)"
                    el.style.borderBottomColor = "var(--t-accent)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = "var(--t-muted)"
                    el.style.borderBottomColor = "transparent"
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-fg)",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--t-rule)",
            }}
          >
            Legal
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.label} style={{ marginBottom: "10px" }}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontSize: "12px",
                    color: "var(--t-muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    display: "inline-block",
                    paddingBottom: "1px",
                    borderBottom: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = "var(--t-accent)"
                    el.style.borderBottomColor = "var(--t-accent)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = "var(--t-muted)"
                    el.style.borderBottomColor = "transparent"
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-fg)",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--t-rule)",
            }}
          >
            Follow
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label} style={{ marginBottom: "10px" }}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontSize: "12px",
                    color: "var(--t-muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    display: "inline-block",
                    paddingBottom: "1px",
                    borderBottom: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = "var(--t-accent)"
                    el.style.borderBottomColor = "var(--t-accent)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = "var(--t-muted)"
                    el.style.borderBottomColor = "transparent"
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div
        style={{
          borderTop: "1px solid var(--t-rule)",
          padding: "20px 48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: "11px",
            color: "var(--t-muted)",
            letterSpacing: "0.04em",
          }}
        >
          &copy; {year} AutoHDR, Inc. All rights reserved. &mdash; Made with precision for professionals.
        </p>
      </div>
    </footer>
  )
}
