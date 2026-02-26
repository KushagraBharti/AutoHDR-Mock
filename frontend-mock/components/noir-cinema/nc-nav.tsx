"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "PRICING", href: "/noir-cinema/pricing" },
  { label: "STUDIO", href: "#" },
  { label: "LISTINGS", href: "#" },
  { label: "CONTACT", href: "#" },
]

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

// Film flicker keyframe for logo hover
const FLICKER_STYLE = `
@keyframes nc-logo-flicker {
  0%   { opacity: 1; }
  5%   { opacity: 0.6; }
  10%  { opacity: 1; }
  15%  { opacity: 0.8; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  85%  { opacity: 0.7; }
  90%  { opacity: 1; }
  95%  { opacity: 0.85; }
  100% { opacity: 1; }
}
@keyframes nc-underline-draw {
  0%   { transform: scaleX(0); transform-origin: left; }
  100% { transform: scaleX(1); transform-origin: left; }
}
`

export default function NcNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
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
        background: scrolled ? "rgba(10,10,10,0.96)" : "rgba(10,10,10,0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
        transition: "background 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1)",
        fontFamily: "var(--font-body), Georgia, serif",
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
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link
          href="/noir-cinema"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0",
            flexShrink: 0,
            animation: logoHovered ? "nc-logo-flicker 0.3s steps(4) infinite" : "none",
          }}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <span
            style={{
              fontFamily: "var(--font-display), 'Bodoni MT', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "var(--t-fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Auto
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), 'Bodoni MT', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "var(--t-accent)",
              letterSpacing: "-0.02em",
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
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 400,
                letterSpacing: "5px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: hoveredLink === link.label ? "var(--t-fg)" : "var(--t-mid-gray)",
                transition: "color 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
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
            href="/noir-cinema/pricing"
            className="hidden md:inline-flex"
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-body), Georgia, serif",
              fontWeight: 400,
              letterSpacing: "5px",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--t-accent)",
              background: "transparent",
              border: "none",
              padding: "10px 0",
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            Upload Photos
            {/* Animated underline draw left to right */}
            <span
              style={{
                position: "absolute",
                bottom: 6,
                left: 0,
                width: "100%",
                height: "1px",
                background: "var(--t-accent)",
                transform: ctaHovered ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "var(--t-fg)",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "20px",
              lineHeight: 1,
              borderRadius: 0,
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{
              position: "fixed",
              inset: 0,
              top: "64px",
              background: "var(--t-bg)",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: i * 0.08,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontWeight: 400,
                    letterSpacing: "5px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "var(--t-mid-gray)",
                    padding: "24px 40px",
                    textAlign: "center",
                    transition: "color 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = "var(--t-mid-gray)"
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: EASE, delay: NAV_LINKS.length * 0.08 }}
              style={{ marginTop: "24px" }}
            >
              <Link
                href="/noir-cinema/pricing"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "var(--t-accent)",
                  padding: "14px 28px",
                  display: "inline-block",
                  borderRadius: 0,
                }}
              >
                Upload Photos
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
