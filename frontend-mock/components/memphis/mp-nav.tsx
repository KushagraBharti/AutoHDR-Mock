"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Pricing", href: "/memphis/pricing", color: "#ff3366" },
  { label: "Studio", href: "#", color: "#3344ff" },
  { label: "Listings", href: "#", color: "#ffcc00" },
  { label: "Contact", href: "#", color: "#88dd00" },
]

export default function MpNav() {
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
        background: "var(--t-surface)",
        borderBottom: `3px solid var(--t-fg)`,
        boxShadow: scrolled ? "4px 4px 0 0 var(--t-fg)" : "none",
        transition: "box-shadow 0.2s ease",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          padding: "0 40px",
          height: "64px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/memphis"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: "22px",
              color: "var(--t-fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Auto
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: "22px",
              color: "var(--t-pink)",
              transform: "rotate(-2deg)",
              display: "inline-block",
              letterSpacing: "-0.02em",
            }}
          >
            HDR
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex"
          style={{ justifyContent: "center", alignItems: "center", gap: "28px" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "4px 0",
                borderBottom: "3px solid transparent",
                transition: "all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                fontFamily: "var(--font-body), sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderBottomColor = link.color
                el.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderBottomColor = "transparent"
                el.style.transform = "translateY(0)"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
          <Link
            href="/memphis/pricing"
            className="hidden md:flex"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none",
              color: "var(--t-surface)",
              background: "var(--t-pink)",
              padding: "10px 20px",
              border: "3px solid var(--t-fg)",
              boxShadow: "3px 3px 0 0 var(--t-fg)",
              borderRadius: "1rem 0.5rem 1.5rem 0.25rem",
              transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              fontFamily: "var(--font-body), sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(-2px, -2px)"
              el.style.boxShadow = "5px 5px 0 0 var(--t-fg)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "translate(0, 0)"
              el.style.boxShadow = "3px 3px 0 0 var(--t-fg)"
            }}
          >
            Upload Photos
          </Link>

          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "var(--t-yellow)",
              border: "3px solid var(--t-fg)",
              color: "var(--t-fg)",
              padding: "6px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "2px 2px 0 0 var(--t-fg)",
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: "3px solid var(--t-fg)", padding: "16px 40px", background: "var(--t-surface)" }}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontSize: "18px",
                fontWeight: 700,
                fontFamily: "var(--font-display), sans-serif",
                textDecoration: "none",
                color: link.color,
                padding: "12px 0",
                borderBottom: i < NAV_LINKS.length - 1 ? "2px solid var(--t-muted)" : "none",
                transform: `rotate(${(i % 2 === 0 ? -1 : 1)}deg)`,
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
