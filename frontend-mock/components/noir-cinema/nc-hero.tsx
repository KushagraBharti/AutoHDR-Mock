"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const STATS = [
  { value: "10%", label: "U.S. Listings" },
  { value: "30+", label: "Min Saved/Day" },
  { value: "2min", label: "Turnaround" },
]

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

const HEADLINE_LINE1 = "AI Real Estate"
const HEADLINE_LINE2 = "Photo Editing"
const SUBTITLE = "Professional-grade AI photo editing built for real estate photographers. HDR processing, virtual staging, and instant enhancements \u2014 delivered in under 2 minutes."

export default function NcHero() {
  const [primaryHovered, setPrimaryHovered] = useState(false)
  const [secondaryHovered, setSecondaryHovered] = useState(false)
  const [uploadHovered, setUploadHovered] = useState(false)
  const [typewriterDone, setTypewriterDone] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Mark typewriter complete after all characters have appeared
  useEffect(() => {
    const totalChars = HEADLINE_LINE1.length + HEADLINE_LINE2.length
    const totalTime = totalChars * 50 + 600 // stagger + buffer
    const timer = setTimeout(() => setTypewriterDone(true), totalTime)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--t-bg)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      {/* Deep vignette background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Spotlight glow at top-center */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "500px",
          background: "radial-gradient(ellipse at top, rgba(229,229,229,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Venetian blind shadow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(25deg, transparent 0px, transparent 25px, rgba(0,0,0,0.15) 25px, rgba(0,0,0,0.15) 60px)",
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "55% 45%",
          gap: "60px",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* LEFT: Text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {/* Typewriter headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display), 'Bodoni MT', serif",
                fontSize: "clamp(56px, 9vw, 120px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {/* Line 1: "AI Real Estate" in silver-white */}
              <span style={{ display: "block", color: "var(--t-fg)" }}>
                {HEADLINE_LINE1.split("").map((char, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: i * 0.05,
                      ease: "linear",
                    }}
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Line 2: "Photo Editing" in RED */}
              <span
                style={{
                  display: "block",
                  color: "var(--t-accent)",
                  fontStyle: "italic",
                }}
              >
                {HEADLINE_LINE2.split("").map((char, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: (HEADLINE_LINE1.length + i) * 0.05,
                      ease: "linear",
                    }}
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
            style={{
              fontSize: "16px",
              fontFamily: "var(--font-body), Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--t-silver)",
              maxWidth: "420px",
              lineHeight: 1.8,
            }}
          >
            {SUBTITLE}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.5 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            {/* Primary: red bg, white text */}
            <Link
              href="/noir-cinema/pricing"
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 500,
                letterSpacing: "4px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: primaryHovered ? "var(--t-fg)" : "#ffffff",
                background: primaryHovered ? "var(--t-accent2)" : "var(--t-accent)",
                padding: "16px 32px",
                borderRadius: 0,
                transition: "background 0.4s cubic-bezier(0.4,0,0.2,1), color 0.4s cubic-bezier(0.4,0,0.2,1)",
                display: "inline-block",
              }}
              onMouseEnter={() => setPrimaryHovered(true)}
              onMouseLeave={() => setPrimaryHovered(false)}
            >
              Upload Photos
            </Link>

            {/* Secondary: white outlined rectangle */}
            <Link
              href="#"
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 500,
                letterSpacing: "4px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: secondaryHovered ? "var(--t-bg)" : "var(--t-fg)",
                background: secondaryHovered ? "var(--t-fg)" : "transparent",
                border: "1px solid var(--t-fg)",
                padding: "15px 32px",
                borderRadius: 0,
                transition: "background 0.4s cubic-bezier(0.4,0,0.2,1), color 0.4s cubic-bezier(0.4,0,0.2,1)",
                display: "inline-block",
              }}
              onMouseEnter={() => setSecondaryHovered(true)}
              onMouseLeave={() => setSecondaryHovered(false)}
            >
              Book a Demo
            </Link>
          </motion.div>

          {/* Stats with thin vertical pipe dividers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.8 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              paddingTop: "8px",
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  paddingRight: i < STATS.length - 1 ? "28px" : "0",
                  paddingLeft: i > 0 ? "28px" : "0",
                  borderRight:
                    i < STATS.length - 1
                      ? "1px solid var(--t-muted)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), 'Bodoni MT', serif",
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "var(--t-fg)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontWeight: 300,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--t-mid-gray)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Upload zone */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "460px",
          }}
        >
          {/* Upload zone: stark white dashed border on black */}
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "4/3",
              border: uploadHovered ? "2px dashed var(--t-accent)" : "2px dashed var(--t-fg)",
              borderRadius: 0,
              background: "var(--t-bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              cursor: "pointer",
              transition: "border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
              position: "relative",
            }}
            onMouseEnter={() => setUploadHovered(true)}
            onMouseLeave={() => setUploadHovered(false)}
          >
            {/* Upload icon area */}
            <div
              style={{
                width: "60px",
                height: "60px",
                border: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Upward arrow using CSS */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderBottom: `10px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                  transition: "border-bottom-color 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "14px",
                fontWeight: 400,
                color: uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              Drop Photos Here
            </p>

            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "12px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--t-muted)",
              }}
            >
              or click to browse
            </p>

            {/* Corner marks for a viewfinder feel */}
            {/* Top-left */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                width: 20,
                height: 20,
                borderTop: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                borderLeft: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                transition: "border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {/* Top-right */}
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                width: 20,
                height: 20,
                borderTop: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                borderRight: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                transition: "border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {/* Bottom-left */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 12,
                width: 20,
                height: 20,
                borderBottom: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                borderLeft: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                transition: "border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {/* Bottom-right */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                right: 12,
                width: 20,
                height: 20,
                borderBottom: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                borderRight: `1px solid ${uploadHovered ? "var(--t-accent)" : "var(--t-mid-gray)"}`,
                transition: "border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, transparent, var(--t-bg))",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
    </section>
  )
}
