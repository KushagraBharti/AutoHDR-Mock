"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Pricing", href: "/botanical/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

export default function BtNav() {
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
        background: scrolled ? "rgba(26, 26, 20, 0.92)" : "var(--t-bg)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(124, 149, 107, 0.2)" : "rgba(124, 149, 107, 0.08)"}`,
        transition: "all 0.5s ease",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          padding: "0 48px",
          height: "64px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/botanical"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: "2px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontWeight: 500,
              fontSize: "18px",
              color: "var(--t-fg)",
              letterSpacing: "0.02em",
            }}
          >
            Auto
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "var(--t-accent)",
              fontVariationSettings: "'WONK' 1",
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
            gap: "32px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textDecoration: "none",
                color: "rgba(240, 234, 214, 0.55)",
                padding: "4px 0",
                transition: "color 0.4s ease",
                fontFamily: "var(--font-body), Georgia, serif",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-accent)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = "rgba(240, 234, 214, 0.55)"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
          <Link
            href="/botanical/pricing"
            className="hidden md:flex"
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textDecoration: "none",
              color: "var(--t-bg)",
              background: "var(--t-accent)",
              padding: "10px 20px",
              borderRadius: "2rem 1.5rem 2rem 1rem",
              transition: "all 0.4s ease",
              fontFamily: "var(--font-body), Georgia, serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "scale(1.03)"
              el.style.boxShadow = "0 4px 20px rgba(124, 149, 107, 0.3)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = "scale(1)"
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
              border: "1px solid rgba(124, 149, 107, 0.3)",
              color: "var(--t-accent)",
              padding: "8px",
              borderRadius: "12px",
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
            borderTop: "1px solid rgba(124, 149, 107, 0.1)",
            background: "var(--t-bg)",
            padding: "16px 0",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 400,
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "14px 48px",
                transition: "all 0.3s ease",
                fontFamily: "var(--font-body), Georgia, serif",
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
        </div>
      )}
    </nav>
  )
}
