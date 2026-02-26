"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Pricing", href: "/aurora/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

const AURORA_STYLE = `
@keyframes au-logo-iridescent {
  0%   { color: #4ade80; text-shadow: 0 0 12px rgba(74,222,128,0.4); }
  33%  { color: #38bdf8; text-shadow: 0 0 12px rgba(56,189,248,0.4); }
  66%  { color: #818cf8; text-shadow: 0 0 12px rgba(129,140,248,0.4); }
  100% { color: #4ade80; text-shadow: 0 0 12px rgba(74,222,128,0.4); }
}
@keyframes au-nav-glow-breathe {
  0%,100% { box-shadow: 0 0 12px rgba(74,222,128,0.15), inset 0 0 12px rgba(74,222,128,0.05); }
  50%     { box-shadow: 0 0 20px rgba(74,222,128,0.25), inset 0 0 20px rgba(74,222,128,0.08); }
}
`

const AURORA_COLORS = ["#4ade80", "#2dd4bf", "#38bdf8", "#818cf8", "#f472b6"]

export default function AuNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [styleInjected, setStyleInjected] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoverColorIdx, setHoverColorIdx] = useState(0)
  const [ctaHovered, setCtaHovered] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (styleInjected) return
    const tag = document.createElement("style")
    tag.textContent = AURORA_STYLE
    document.head.appendChild(tag)
    setStyleInjected(true)
  }, [styleInjected])

  // Cycle through aurora colors on link hover
  useEffect(() => {
    if (!hoveredLink) return
    const interval = setInterval(() => {
      setHoverColorIdx((i) => (i + 1) % AURORA_COLORS.length)
    }, 400)
    return () => clearInterval(interval)
  }, [hoveredLink])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.4s cubic-bezier(0.22,1,0.36,1)",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      {/* Main row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: "68px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/aurora"
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
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--t-fg)",
              letterSpacing: "0.01em",
            }}
          >
            Auto
          </span>
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.01em",
              animation: "au-logo-iridescent 6s ease infinite",
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
            gap: "32px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isHovered = hoveredLink === link.label
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  color: isHovered ? AURORA_COLORS[hoverColorIdx] : "rgba(232,234,240,0.55)",
                  transition: "color 0.3s cubic-bezier(0.22,1,0.36,1)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </Link>
            )
          })}
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
            href="/aurora/pricing"
            className="hidden md:inline-flex"
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 500,
              letterSpacing: "0.02em",
              textDecoration: "none",
              color: ctaHovered ? "var(--t-bg)" : "var(--t-accent)",
              background: ctaHovered
                ? "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal))"
                : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(74,222,128,0.3)",
              borderRadius: "40px",
              padding: "10px 22px",
              transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
              boxShadow: ctaHovered
                ? "0 0 24px rgba(74,222,128,0.4), 0 0 60px rgba(74,222,128,0.15)"
                : "none",
              alignItems: "center",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            Upload Photos
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              color: "var(--t-fg)",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen glass overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "68px",
            background: "rgba(8,6,15,0.92)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
          }}
        >
          {/* Aurora orb decoration in mobile menu */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "20%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "20%",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontSize: "28px",
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                textDecoration: "none",
                color: "var(--t-fg)",
                padding: "20px 40px",
                transition: "color 0.3s ease, opacity 0.3s ease",
                opacity: 0.7,
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-accent)"
                el.style.opacity = "1"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "var(--t-fg)"
                el.style.opacity = "0.7"
              }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ marginTop: "24px" }}>
            <Link
              href="/aurora/pricing"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "15px",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                color: "var(--t-accent)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(74,222,128,0.3)",
                borderRadius: "40px",
                padding: "14px 32px",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                display: "inline-block",
              }}
            >
              Upload Photos
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
