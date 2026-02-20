"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const STATS = [
  { value: "10%", label: "U.S. LISTINGS" },
  { value: "30+", label: "MIN SAVED/DAY" },
  { value: "2MIN", label: "TURNAROUND" },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function NNHero() {
  const glitchRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = glitchRef.current
    if (!el) return
    el.classList.add("glitching")
    const timer = setTimeout(() => el.classList.remove("glitching"), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(160deg, #07010F 0%, #0D0520 50%, #07010F 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      {/* Glitch keyframe + styles */}
      <style>{`
        @keyframes glitch {
          0%   { transform: translate(0); clip-path: none; filter: none; }
          10%  { transform: translate(-4px, 2px); clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%); filter: hue-rotate(90deg); }
          20%  { transform: translate(4px, -2px); clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); filter: none; }
          30%  { transform: translate(-2px, 1px); clip-path: none; }
          50%  { transform: translate(0); clip-path: none; filter: none; }
          100% { transform: translate(0); clip-path: none; filter: none; }
        }
        .glitching {
          animation: glitch 0.25s steps(2) infinite;
        }
        @keyframes nn-scan-ring {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
          50%      { transform: translate(-50%,-50%) scale(1.3); opacity: 0; }
        }
        @keyframes nn-grid-drift {
          0%   { background-position: 0px 0px; }
          100% { background-position: 0px 40px; }
        }
        @keyframes nn-hud-blink {
          0%,94%,100% { opacity: 1; }
          95% { opacity: 0.2; }
          97% { opacity: 0.8; }
        }
      `}</style>

      {/* Full-bleed background grid (faint) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,45,120,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,120,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Left ambient glow */}
      <div
        style={{
          position: "absolute",
          left: "-200px",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Right ambient glow — cyan */}
      <div
        style={{
          position: "absolute",
          right: "-100px",
          bottom: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content container: 55/45 split */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "55% 45%",
          gap: "40px",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* ─── LEFT: Text content ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(255,45,120,0.5)",
                padding: "6px 14px",
                boxShadow: "0 0 12px rgba(255,45,120,0.15)",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "var(--font-mono), monospace",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--t-pink)",
                }}
              >
                ▶ AI PHOTO EDITING
              </span>
            </div>
          </motion.div>

          {/* H1 with glitch */}
          <motion.h1
            ref={glitchRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
            style={{
              fontFamily: "var(--font-display), Impact, sans-serif",
              fontSize: "clamp(72px, 11vw, 150px)",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <span style={{ display: "block", color: "var(--t-fg)" }}>REAL</span>
            <span style={{ display: "block", color: "var(--t-fg)" }}>ESTATE</span>
            <span
              style={{
                display: "block",
                color: "var(--t-pink)",
                textShadow:
                  "0 0 20px var(--t-pink), 0 0 60px rgba(255,45,120,0.4)",
              }}
            >
              REIMAGINED
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.18 }}
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-mono), monospace",
              color: "var(--t-muted)",
              maxWidth: "380px",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            Professional-grade AI photo editing built for real estate photographers.
            HDR processing, virtual staging, and instant enhancements — delivered in under 2 minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.26 }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            {/* Primary */}
            <Link
              href="/neon-noir/pricing"
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono), monospace",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#07010F",
                background: "var(--t-pink)",
                padding: "14px 24px",
                boxShadow: "var(--t-glow-pink)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow =
                  "0 0 30px rgba(255,45,120,0.7), 0 0 80px rgba(255,45,120,0.25)"
                el.style.transform = "scale(1.02)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = "var(--t-glow-pink)"
                el.style.transform = "scale(1)"
              }}
            >
              [ UPLOAD PHOTOS — FREE ]
            </Link>

            {/* Secondary */}
            <Link
              href="#"
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono), monospace",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--t-cyan)",
                border: "1px solid var(--t-cyan)",
                padding: "14px 24px",
                transition: "box-shadow 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = "var(--t-glow-cyan)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = "none"
              }}
            >
              [ BOOK A DEMO ]
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.34 }}
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
                  gap: "2px",
                  paddingRight: i < STATS.length - 1 ? "24px" : "0",
                  paddingLeft: i > 0 ? "24px" : "0",
                  borderRight:
                    i < STATS.length - 1
                      ? "1px solid rgba(255,45,120,0.2)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), Impact, sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    lineHeight: 1,
                    color: "var(--t-pink)",
                    textShadow: "0 0 12px rgba(255,45,120,0.5)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "var(--font-mono), monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--t-muted)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: CSS Wireframe HUD ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          style={{ position: "relative", height: "100%", minHeight: "460px" }}
        >
          {/* Perspective grid floor */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,45,120,0.22) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,45,120,0.22) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              transform: "perspective(400px) rotateX(15deg)",
              transformOrigin: "bottom",
              opacity: 0.4,
              animation: "nn-grid-drift 4s linear infinite",
            }}
          />

          {/* Center orb */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,45,120,0.2) 0%, transparent 70%)",
              boxShadow:
                "0 0 60px rgba(255,45,120,0.3), 0 0 120px rgba(255,45,120,0.1)",
            }}
          />

          {/* HUD corner brackets — Top-left */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              width: 30,
              height: 30,
              borderTop: "2px solid var(--t-cyan)",
              borderLeft: "2px solid var(--t-cyan)",
              boxShadow: "0 0 8px rgba(0,240,255,0.4)",
              animation: "nn-hud-blink 5s infinite",
            }}
          />
          {/* Top-right */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 30,
              height: 30,
              borderTop: "2px solid var(--t-cyan)",
              borderRight: "2px solid var(--t-cyan)",
              boxShadow: "0 0 8px rgba(0,240,255,0.4)",
              animation: "nn-hud-blink 5s infinite 0.5s",
            }}
          />
          {/* Bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              width: 30,
              height: 30,
              borderBottom: "2px solid var(--t-cyan)",
              borderLeft: "2px solid var(--t-cyan)",
              boxShadow: "0 0 8px rgba(0,240,255,0.4)",
              animation: "nn-hud-blink 5s infinite 1s",
            }}
          />
          {/* Bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              width: 30,
              height: 30,
              borderBottom: "2px solid var(--t-cyan)",
              borderRight: "2px solid var(--t-cyan)",
              boxShadow: "0 0 8px rgba(0,240,255,0.4)",
              animation: "nn-hud-blink 5s infinite 1.5s",
            }}
          />

          {/* HUD status text */}
          <div
            style={{
              position: "absolute",
              top: 60,
              left: 24,
              fontSize: "10px",
              color: "var(--t-cyan)",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.1em",
              lineHeight: 1.8,
              textShadow: "0 0 6px rgba(0,240,255,0.5)",
            }}
          >
            SYS.ONLINE
            <br />
            AI.ACTIVE
            <br />
            HDR.READY
          </div>

          {/* Bottom-right status */}
          <div
            style={{
              position: "absolute",
              bottom: 60,
              right: 24,
              fontSize: "10px",
              color: "rgba(0,240,255,0.5)",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.1em",
              textAlign: "right",
              lineHeight: 1.8,
            }}
          >
            PROC: 99.8%
            <br />
            LAT: 1.2ms
          </div>

          {/* Center crosshair */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "2px",
              height: "40px",
              background:
                "linear-gradient(transparent, var(--t-pink), transparent)",
              boxShadow: "0 0 8px var(--t-pink)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, var(--t-pink), transparent)",
              boxShadow: "0 0 8px var(--t-pink)",
            }}
          />

          {/* Animated scan ring 1 */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "1px solid rgba(255,45,120,0.4)",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated scan ring 2 (offset) */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "1px solid rgba(0,240,255,0.3)",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />

          {/* Static ring */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "1px solid rgba(255,45,120,0.15)",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Floating data points */}
          {[
            { top: "25%", left: "15%", label: "HDR" },
            { top: "70%", left: "72%", label: "AI" },
            { top: "45%", left: "80%", label: "2MIN" },
          ].map(({ top, left, label }) => (
            <div
              key={label}
              style={{
                position: "absolute",
                top,
                left,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--t-pink)",
                  boxShadow: "0 0 6px var(--t-pink)",
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "var(--font-mono), monospace",
                  color: "rgba(255,45,120,0.6)",
                  letterSpacing: "0.15em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom diagonal cut hint */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          background:
            "linear-gradient(to bottom, transparent, rgba(19,8,37,0.6))",
          pointerEvents: "none",
        }}
      />
    </section>
  )
}
