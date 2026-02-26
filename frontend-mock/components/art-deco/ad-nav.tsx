"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Pricing", href: "/art-deco/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

export default function AdNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10, 14, 26, 0.95)" : "var(--t-bg)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--t-border-gold)" : "rgba(212, 168, 67, 0.1)"}`,
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          padding: "0 48px",
          height: "68px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/art-deco"
          style={{
            textDecoration: "none",
            color: "var(--t-fg)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 400,
            fontSize: "22px",
            letterSpacing: "0.15em",
            display: "flex",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <span>Auto</span>
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

        {/* Desktop nav links */}
        <div
          className="hidden md:flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "36px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "4px 0",
                position: "relative",
                transition: "color 0.3s ease",
                fontFamily: "var(--font-body), Georgia, serif",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-accent)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-fg)"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
          <Link
            href="/art-deco/pricing"
            className="hidden md:flex"
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--t-bg)",
              background: "var(--t-accent)",
              padding: "10px 20px",
              border: "1px solid var(--t-accent)",
              transition: "all 0.3s ease",
              fontFamily: "var(--font-body), Georgia, serif",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "transparent"
              el.style.color = "var(--t-accent)"
              el.style.boxShadow = "0 0 20px rgba(212, 168, 67, 0.3)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "var(--t-accent)"
              el.style.color = "var(--t-bg)"
              el.style.boxShadow = "none"
            }}
          >
            Upload Photos
          </Link>

          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "1px solid var(--t-accent)",
              color: "var(--t-accent)",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--t-border-gold)",
            background: "var(--t-bg)",
            padding: "0",
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "18px 48px",
                borderBottom: i < NAV_LINKS.length - 1 ? "1px solid rgba(212, 168, 67, 0.1)" : "none",
                transition: "all 0.3s ease",
                fontFamily: "var(--font-display), serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-accent)"
                el.style.paddingLeft = "60px"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-fg)"
                el.style.paddingLeft = "48px"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
