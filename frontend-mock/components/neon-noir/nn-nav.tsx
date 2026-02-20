"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "PRICING", href: "/neon-noir/pricing" },
  { label: "STUDIO", href: "#" },
  { label: "LISTINGS", href: "#" },
  { label: "CONTACT", href: "#" },
]

// Inject flicker keyframe once
const FLICKER_STYLE = `
@keyframes border-flicker {
  0%   { opacity: 1; }
  96%  { opacity: 1; }
  97%  { opacity: 0.4; }
  98%  { opacity: 1; }
  99%  { opacity: 0.6; }
  100% { opacity: 1; }
}
@keyframes nn-nav-glow-pulse {
  0%,100% { box-shadow: 0 1px 0 rgba(255,45,120,0.3), 0 2px 20px rgba(255,45,120,0.1); }
  50%      { box-shadow: 0 1px 0 rgba(255,45,120,0.5), 0 2px 30px rgba(255,45,120,0.18); }
}
.nn-neon-btn {
  animation: border-flicker 4s infinite;
}
`

export default function NNNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [styleInjected, setStyleInjected] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (styleInjected) return
    const tag = document.createElement("style")
    tag.textContent = FLICKER_STYLE
    document.head.appendChild(tag)
    setStyleInjected(true)
  }, [styleInjected])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(7,1,15,0.95)"
          : "rgba(7,1,15,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--t-pink)",
        boxShadow:
          "0 1px 0 rgba(255,45,120,0.3), 0 2px 20px rgba(255,45,120,0.1)",
        transition: "background 0.3s ease",
        fontFamily: "var(--font-mono), monospace",
      }}
    >
      {/* Main row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link
          href="/neon-noir"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display), Impact, sans-serif",
              fontSize: "28px",
              color: "var(--t-fg)",
              letterSpacing: "0.04em",
            }}
          >
            AUTO
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), Impact, sans-serif",
              fontSize: "28px",
              color: "var(--t-pink)",
              letterSpacing: "0.04em",
              textShadow:
                "0 0 10px var(--t-pink), 0 0 30px rgba(255,45,120,0.4)",
            }}
          >
            HDR
          </span>
        </Link>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex"
          style={{
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
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-muted)",
                transition: "color 0.2s ease, text-shadow 0.2s ease",
                fontFamily: "var(--font-mono), monospace",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-pink)"
                el.style.textShadow = "0 0 8px var(--t-pink)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-muted)"
                el.style.textShadow = "none"
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Desktop CTA */}
          <Link
            href="/neon-noir/pricing"
            className="nn-neon-btn hidden md:inline-flex"
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--t-pink)",
              border: "1px solid var(--t-pink)",
              padding: "10px 18px",
              transition: "background 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
              boxShadow: "0 0 10px rgba(255,45,120,0.2)",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "var(--t-pink)"
              el.style.color = "#07010F"
              el.style.boxShadow = "var(--t-glow-pink)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "transparent"
              el.style.color = "var(--t-pink)"
              el.style.boxShadow = "0 0 10px rgba(255,45,120,0.2)"
            }}
          >
            [ UPLOAD ]
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "1px solid rgba(255,45,120,0.5)",
              color: "var(--t-pink)",
              padding: "8px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "16px",
              lineHeight: 1,
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid rgba(255,45,120,0.3)",
            background: "rgba(7,1,15,0.98)",
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
                fontFamily: "var(--font-mono), monospace",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-muted)",
                padding: "18px 40px",
                borderBottom:
                  i < NAV_LINKS.length - 1
                    ? "1px solid rgba(255,45,120,0.1)"
                    : "none",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-pink)"
                el.style.background = "rgba(255,45,120,0.05)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-muted)"
                el.style.background = "transparent"
              }}
            >
              {link.label}
            </Link>
          ))}
          <div
            style={{
              padding: "16px 40px",
              borderTop: "1px solid rgba(255,45,120,0.2)",
            }}
          >
            <Link
              href="/neon-noir/pricing"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-pink)",
                border: "1px solid var(--t-pink)",
                padding: "12px 20px",
                display: "inline-block",
                boxShadow: "0 0 10px rgba(255,45,120,0.2)",
              }}
            >
              [ UPLOAD ]
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
