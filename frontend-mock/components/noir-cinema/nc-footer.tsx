"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

const FOOTER_NAV = [
  { label: "Pricing", href: "/noir-cinema/pricing" },
  { label: "Studio", href: "#" },
  { label: "Listings", href: "#" },
  { label: "Contact", href: "#" },
]

const FOOTER_LEGAL = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
]

export default function NcFooter() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const [hoveredLegal, setHoveredLegal] = useState<string | null>(null)
  const [primaryCtaHovered, setPrimaryCtaHovered] = useState(false)
  const [secondaryCtaHovered, setSecondaryCtaHovered] = useState(false)

  // Film strip sprocket hole count
  const sprocketCount = 30

  return (
    <footer
      style={{
        background: "var(--t-bg)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      {/* Top section: Big statement */}
      <div
        style={{
          position: "relative",
          padding: "100px 40px 80px",
          textAlign: "center",
        }}
      >
        {/* Venetian blind shadow subtle */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(25deg, transparent 0px, transparent 25px, rgba(0,0,0,0.15) 25px, rgba(0,0,0,0.15) 60px)",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Red line above */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              width: "200px",
              height: "1px",
              background: "var(--t-accent)",
              margin: "0 auto 48px",
              transformOrigin: "center",
            }}
          />

          {/* "Tools change. Vision doesn't." */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display), 'Bodoni MT', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--t-fg)",
              margin: "0 0 48px",
            }}
          >
            Tools change.{" "}
            <span style={{ color: "var(--t-accent)", fontStyle: "italic" }}>
              Vision
            </span>{" "}
            doesn&apos;t.
          </motion.h2>

          {/* Red line below */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            style={{
              width: "200px",
              height: "1px",
              background: "var(--t-accent)",
              margin: "0 auto 48px",
              transformOrigin: "center",
            }}
          />

          {/* CTAs in noir style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/noir-cinema/pricing"
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 500,
                letterSpacing: "4px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: primaryCtaHovered ? "var(--t-fg)" : "#ffffff",
                background: primaryCtaHovered ? "var(--t-accent2)" : "var(--t-accent)",
                padding: "16px 36px",
                borderRadius: 0,
                transition: "background 0.4s cubic-bezier(0.4,0,0.2,1)",
                display: "inline-block",
              }}
              onMouseEnter={() => setPrimaryCtaHovered(true)}
              onMouseLeave={() => setPrimaryCtaHovered(false)}
            >
              Get Started Free
            </Link>
            <Link
              href="#"
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 500,
                letterSpacing: "4px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: secondaryCtaHovered ? "var(--t-bg)" : "var(--t-fg)",
                background: secondaryCtaHovered ? "var(--t-fg)" : "transparent",
                border: "1px solid var(--t-fg)",
                padding: "15px 36px",
                borderRadius: 0,
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                display: "inline-block",
              }}
              onMouseEnter={() => setSecondaryCtaHovered(true)}
              onMouseLeave={() => setSecondaryCtaHovered(false)}
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Film strip decorative element */}
      <div
        style={{
          width: "100%",
          height: "32px",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top border of film strip */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "var(--t-muted)",
          }}
        />
        {/* Bottom border of film strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "var(--t-muted)",
          }}
        />
        {/* Sprocket holes */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: sprocketCount }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "transparent",
                border: "1.5px solid var(--t-muted)",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom content area */}
      <div
        style={{
          background: "var(--t-surface)",
          padding: "48px 40px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Grid: Logo, Nav, Contact, Description */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            {/* Col 1: Logo + tagline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link
                href="/noir-cinema"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), 'Bodoni MT', serif",
                    fontSize: "22px",
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
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--t-accent)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  HDR
                </span>
              </Link>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "var(--t-mid-gray)",
                  maxWidth: "200px",
                }}
              >
                AI-powered real estate photo editing. Professional results in under 2 minutes.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--t-mid-gray)",
                  margin: 0,
                }}
              >
                Navigate
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                {FOOTER_NAV.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      textDecoration: "none",
                      color: hoveredNav === link.label ? "var(--t-fg)" : "var(--t-mid-gray)",
                      transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
                    }}
                    onMouseEnter={() => setHoveredNav(link.label)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3: Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--t-mid-gray)",
                  margin: 0,
                }}
              >
                Contact
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                {[
                  { label: "Support", val: "hello@autohdr.ai" },
                  { label: "Sales", val: "sales@autohdr.ai" },
                  { label: "Press", val: "press@autohdr.ai" },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 300,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "var(--t-muted)",
                      }}
                    >
                      {label}
                    </span>
                    <a
                      href={`mailto:${val}`}
                      style={{
                        fontSize: "13px",
                        fontWeight: 400,
                        textDecoration: "none",
                        color: "var(--t-mid-gray)",
                        transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = "var(--t-mid-gray)"
                      }}
                    >
                      {val}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: About */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  color: "var(--t-mid-gray)",
                  margin: 0,
                }}
              >
                Community
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "var(--t-mid-gray)",
                }}
              >
                Join 5,000+ photographers already using AutoHDR to transform their real estate listings.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid var(--t-muted)",
              paddingTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {/* Copyright: Newsreader italic, gray, very small */}
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--t-muted)",
              }}
            >
              &copy; 2026 AutoHDR Inc. &mdash; AI photo editing for real estate
            </span>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    textDecoration: "none",
                    color: hoveredLegal === link.label ? "var(--t-fg)" : "var(--t-muted)",
                    transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={() => setHoveredLegal(link.label)}
                  onMouseLeave={() => setHoveredLegal(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <span
              style={{
                fontSize: "10px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--t-muted)",
                opacity: 0.5,
              }}
            >
              Noir Cinema &middot; Next.js &middot; Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
