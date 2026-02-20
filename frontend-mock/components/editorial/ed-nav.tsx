"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Pricing", href: "/editorial/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

export default function EdNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--t-bg)",
        transition: "box-shadow 0.4s ease",
        boxShadow: scrolled ? "0 1px 20px rgba(28,20,16,0.08)" : "none",
      }}
    >
      {/* Top issue bar */}
      <div
        style={{
          borderBottom: "1px solid var(--t-rule)",
          padding: "7px 0",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--t-accent)",
          }}
        >
          Issue 001 &mdash; February 2026 &middot; AI Real Estate Photography
        </p>
      </div>

      {/* Main nav row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 48px",
          height: "68px",
          borderBottom: "1px solid var(--t-rule)",
        }}
      >
        {/* Left: nameplate */}
        <Link
          href="/editorial"
          style={{ textDecoration: "none", color: "var(--t-fg)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: "-0.01em",
              color: "var(--t-fg)",
              display: "block",
              lineHeight: 1.1,
            }}
          >
            AutoHDR
          </span>
          <span
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              display: "block",
            }}
          >
            AI Real Estate Photography
          </span>
        </Link>

        {/* Center: nav links */}
        <nav
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "36px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Upload CTA + hamburger */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Link
            href="#"
            className="hidden md:inline-block"
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--t-accent)",
              border: "1px solid var(--t-accent)",
              padding: "9px 20px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "var(--t-accent)"
              el.style.color = "#F7F4EF"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "transparent"
              el.style.color = "var(--t-accent)"
            }}
          >
            Upload
          </Link>

          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "1px solid var(--t-rule)",
              padding: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--t-fg)",
              cursor: "pointer",
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--t-bg)",
            borderBottom: "1px solid var(--t-rule)",
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "12px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "18px 48px",
                borderBottom: i < NAV_LINKS.length - 1 ? "1px solid var(--t-rule)" : "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-accent)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: "20px 48px", borderTop: "1px solid var(--t-rule)" }}>
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#F7F4EF",
                background: "var(--t-accent)",
                padding: "12px 24px",
                display: "inline-block",
              }}
            >
              Upload
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-body), Georgia, serif",
        fontSize: "12px",
        fontWeight: 400,
        letterSpacing: "0.06em",
        textDecoration: "none",
        color: hovered ? "var(--t-accent)" : "var(--t-fg)",
        borderBottom: hovered ? "1px solid var(--t-accent)" : "1px solid transparent",
        paddingBottom: "2px",
        transition: "color 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  )
}
