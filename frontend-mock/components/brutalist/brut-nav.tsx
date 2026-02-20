"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "PRICING", href: "/brutalist/pricing" },
  { label: "STUDIO", href: "#" },
  { label: "LISTINGS", href: "#" },
  { label: "CONTACT", href: "#" },
]

export default function BrutNav() {
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
        background: "var(--t-bg)",
        backgroundImage:
          "linear-gradient(rgba(10,10,8,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,8,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundAttachment: "fixed",
        borderBottom: scrolled ? "3px solid var(--t-fg)" : "2px solid var(--t-fg)",
        transition: "border-bottom 0.05s steps(1)",
        fontFamily: "var(--font-mono), monospace",
      }}
    >
      {/* Main nav row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          padding: "0 40px",
          height: "60px",
        }}
      >
        {/* Logo */}
        <Link
          href="/brutalist"
          style={{
            textDecoration: "none",
            color: "var(--t-fg)",
            fontWeight: 800,
            fontSize: "18px",
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
              padding: "1px 5px",
              display: "inline-block",
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
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "4px 0",
                borderBottom: "2px solid transparent",
                transition: "all 0.05s steps(1)",
                fontFamily: "var(--font-mono), monospace",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderBottomColor = "var(--t-fg)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
          {/* Desktop CTA */}
          <Link
            href="/brutalist/pricing"
            className="hidden md:flex"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--t-bg)",
              background: "var(--t-fg)",
              padding: "10px 16px",
              border: "2px solid var(--t-fg)",
              transition: "all 0.05s steps(1)",
              fontFamily: "var(--font-mono), monospace",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-accent)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-bg)"
            }}
          >
            [ UPLOAD PHOTOS ]
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "2px solid var(--t-fg)",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.05s steps(1)",
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
            borderTop: "1px solid var(--t-fg)",
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
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "16px 40px",
                borderBottom: i < NAV_LINKS.length - 1 ? "1px solid var(--t-fg)" : "none",
                transition: "all 0.05s steps(1)",
                fontFamily: "var(--font-mono), monospace",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = "var(--t-fg)"
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-bg)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = "transparent"
                ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: "16px 40px", borderTop: "1px solid var(--t-fg)" }}>
            <Link
              href="/brutalist/pricing"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-bg)",
                background: "var(--t-fg)",
                padding: "12px 20px",
                display: "inline-block",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              [ UPLOAD PHOTOS ]
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
