"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const STATS = [
  { value: "10%", label: "U.S. Listings" },
  { value: "30+", label: "Min Saved/Day" },
  { value: "2min", label: "Turnaround" },
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const AURORA_FLOAT_STYLE = `
@keyframes au-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes au-breathe {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
`

export default function AuHero() {
  const [styleInjected, setStyleInjected] = useState(false)
  const [primaryHovered, setPrimaryHovered] = useState(false)
  const [secondaryHovered, setSecondaryHovered] = useState(false)

  useEffect(() => {
    if (styleInjected) return
    const tag = document.createElement("style")
    tag.textContent = AURORA_FLOAT_STYLE
    document.head.appendChild(tag)
    setStyleInjected(true)
  }, [styleInjected])

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--t-bg)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "68px",
      }}
    >
      {/* ─── Aurora Orbs ─── */}
      {/* Green orb */}
      <motion.div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{
          x: ["-10%", "15%", "-5%", "10%", "-10%"],
          y: ["-5%", "10%", "20%", "-10%", "-5%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: "-10%", y: "-5%" }}
      />

      {/* Blue orb */}
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
          right: "-5%",
          top: "10%",
        }}
        animate={{
          x: ["5%", "-15%", "10%", "-8%", "5%"],
          y: ["10%", "-5%", "15%", "5%", "10%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Violet orb */}
      <motion.div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 70%)",
          filter: "blur(110px)",
          pointerEvents: "none",
          zIndex: 0,
          left: "40%",
          bottom: "0%",
        }}
        animate={{
          x: ["-8%", "12%", "-12%", "5%", "-8%"],
          y: ["5%", "-10%", "8%", "-15%", "5%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Pink orb */}
      <motion.div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
          left: "10%",
          top: "60%",
        }}
        animate={{
          x: ["10%", "-5%", "15%", "-10%", "10%"],
          y: ["-5%", "12%", "-8%", "5%", "-5%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* ─── Content ─── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "32px",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "40px",
              padding: "8px 20px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--t-accent)",
                boxShadow: "0 0 8px rgba(74,222,128,0.5)",
                display: "inline-block",
                animation: "au-breathe 2s ease infinite",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.05em",
                color: "var(--t-fg)",
                opacity: 0.8,
              }}
            >
              AI-Powered Photo Editing
            </span>
          </div>
        </motion.div>

        {/* H1 with iridescent "Photo" */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(48px, 9vw, 100px)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "var(--t-fg)",
          }}
        >
          Real Estate{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue), var(--t-accent2), var(--t-aurora-pink))",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "au-iridescent 5s ease infinite",
            }}
          >
            Photo
          </span>
          <br />
          Editing, Reimagined
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
          style={{
            fontSize: "18px",
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 300,
            color: "var(--t-fg)",
            opacity: 0.5,
            maxWidth: "520px",
            lineHeight: 1.7,
            letterSpacing: "0.01em",
          }}
        >
          Professional-grade AI photo editing built for real estate photographers.
          HDR processing, virtual staging, and instant enhancements — delivered in under 2 minutes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.38 }}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}
        >
          {/* Primary CTA */}
          <Link
            href="/aurora/pricing"
            style={{
              fontSize: "15px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 500,
              letterSpacing: "0.01em",
              textDecoration: "none",
              color: primaryHovered ? "var(--t-bg)" : "var(--t-bg)",
              background: primaryHovered
                ? "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue))"
                : "var(--t-accent)",
              padding: "14px 32px",
              borderRadius: "40px",
              border: "none",
              boxShadow: primaryHovered
                ? "0 0 30px rgba(74,222,128,0.5), 0 0 80px rgba(74,222,128,0.2)"
                : "0 0 20px rgba(74,222,128,0.25)",
              transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
              display: "inline-block",
              transform: primaryHovered ? "scale(1.03)" : "scale(1)",
            }}
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
          >
            Upload Photos — Free
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#"
            style={{
              fontSize: "15px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 500,
              letterSpacing: "0.01em",
              textDecoration: "none",
              color: secondaryHovered ? "var(--t-fg)" : "rgba(232,234,240,0.7)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "14px 32px",
              borderRadius: "40px",
              boxShadow: secondaryHovered
                ? "0 0 20px rgba(129,140,248,0.2), inset 0 0 20px rgba(129,140,248,0.05)"
                : "none",
              transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
              display: "inline-block",
            }}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
          >
            Book a Demo
          </Link>
        </motion.div>

        {/* Stats — floating glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            paddingTop: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "20px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                minWidth: "130px",
                animation: `au-float 4s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--t-accent)",
                  textShadow: "0 0 12px rgba(74,222,128,0.3)",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  color: "rgba(232,234,240,0.45)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, var(--t-bg))",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </section>
  )
}
