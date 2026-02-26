"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const BOUNCE = [0.68, -0.55, 0.265, 1.55] as [number, number, number, number]

const STATS = [
  { value: "10%", label: "U.S. Listings", bg: "#ff3366", shadow: "#3344ff", rotate: -2 },
  { value: "30+", label: "Min Saved Daily", bg: "#3344ff", shadow: "#ffcc00", rotate: 1 },
  { value: "2min", label: "Turnaround", bg: "#ffcc00", shadow: "#ff3366", rotate: -1.5 },
]

/* Floating geometric decoration */
function Deco({ shape, color, size, top, left, rotate, delay }: {
  shape: "circle" | "triangle" | "square" | "squiggle"
  color: string; size: number; top: string; left: string; rotate: number; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.5, ease: BOUNCE, delay }}
      style={{
        position: "absolute",
        top,
        left,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {shape === "circle" && (
        <div style={{ width: size, height: size, borderRadius: "50%", border: `3px solid ${color}` }} />
      )}
      {shape === "triangle" && (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${color}`,
          }}
        />
      )}
      {shape === "square" && (
        <div style={{ width: size, height: size, background: color, opacity: 0.15 }} />
      )}
      {shape === "squiggle" && (
        <svg width={size * 2} height={size / 2} viewBox="0 0 80 20">
          <path
            d="M0 10 C10 0, 20 20, 30 10 C40 0, 50 20, 60 10 C70 0, 80 20, 80 10"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )}
    </motion.div>
  )
}

export default function MpHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 48px 80px",
        textAlign: "center",
        overflow: "hidden",
        background: "var(--t-bg)",
      }}
    >
      {/* Terrazzo dots background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, var(--t-fg) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      {/* Floating decorations */}
      <Deco shape="circle" color="#ff3366" size={60} top="12%" left="8%" rotate={0} delay={0.3} />
      <Deco shape="triangle" color="#ffcc00" size={40} top="20%" left="85%" rotate={15} delay={0.5} />
      <Deco shape="squiggle" color="#3344ff" size={40} top="70%" left="5%" rotate={-10} delay={0.7} />
      <Deco shape="square" color="#88dd00" size={45} top="65%" left="88%" rotate={12} delay={0.4} />
      <Deco shape="circle" color="#3344ff" size={35} top="80%" left="15%" rotate={0} delay={0.6} />
      <Deco shape="triangle" color="#ff6633" size={30} top="10%" left="70%" rotate={-20} delay={0.8} />
      <Deco shape="squiggle" color="#ff3366" size={30} top="45%" left="92%" rotate={5} delay={0.9} />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.5, ease: BOUNCE, delay: 0.1 }}
        style={{
          background: "var(--t-yellow)",
          color: "var(--t-fg)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "6px 16px",
          border: "2px solid var(--t-fg)",
          boxShadow: "2px 2px 0 0 var(--t-fg)",
          marginBottom: "32px",
          zIndex: 1,
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        AI Photo Editing
      </motion.div>

      {/* H1 — each word different color + rotation */}
      <h1
        style={{
          fontSize: "clamp(48px, 10vw, 120px)",
          fontFamily: "var(--font-display), sans-serif",
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          margin: 0,
          zIndex: 1,
        }}
      >
        {[
          { text: "AI Real", color: "var(--t-fg)", rotate: 0, shadowColor: "transparent" },
          { text: "Estate", color: "var(--t-fg)", rotate: 0, shadowColor: "transparent" },
          { text: "Photo", color: "var(--t-pink)", rotate: -1.5, shadowColor: "var(--t-blue)" },
          { text: "Editing", color: "var(--t-blue)", rotate: 1, shadowColor: "var(--t-pink)" },
        ].map((line, i) => (
          <motion.div
            key={line.text}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotate: line.rotate * 3 }}
            animate={{ opacity: 1, x: 0, rotate: line.rotate }}
            transition={{ duration: 0.5, ease: BOUNCE, delay: 0.2 + i * 0.08 }}
            style={{
              display: "block",
              color: line.color,
              textShadow: line.shadowColor !== "transparent" ? `3px 3px 0 ${line.shadowColor}` : "none",
              transform: `rotate(${line.rotate}deg)`,
            }}
          >
            {line.text}
          </motion.div>
        ))}
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: BOUNCE, delay: 0.6 }}
        style={{
          fontSize: "clamp(13px, 1.3vw, 16px)",
          fontFamily: "var(--font-body), sans-serif",
          fontWeight: 400,
          color: "var(--t-muted)",
          maxWidth: "480px",
          lineHeight: 1.6,
          marginTop: "24px",
          zIndex: 1,
        }}
      >
        Professional-grade AI photo editing built for real estate photographers. HDR processing,
        virtual staging, and instant enhancements — in under 2 minutes.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: BOUNCE, delay: 0.75 }}
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "32px",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Link
          href="/memphis/pricing"
          style={{
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            color: "var(--t-surface)",
            background: "var(--t-pink)",
            padding: "14px 28px",
            border: "3px solid var(--t-fg)",
            boxShadow: "4px 4px 0 0 var(--t-fg)",
            borderRadius: "1.2rem 0.5rem 1rem 0.3rem",
            transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            fontFamily: "var(--font-body), sans-serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translate(-2px, -2px) rotate(-1deg)"
            el.style.boxShadow = "6px 6px 0 0 var(--t-fg)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translate(0, 0) rotate(0deg)"
            el.style.boxShadow = "4px 4px 0 0 var(--t-fg)"
          }}
        >
          Upload Photos — Free
        </Link>
        <Link
          href="#"
          style={{
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            color: "var(--t-fg)",
            background: "var(--t-surface)",
            padding: "14px 28px",
            border: "3px solid var(--t-fg)",
            boxShadow: "4px 4px 0 0 var(--t-blue)",
            borderRadius: "0.5rem 1.2rem 0.3rem 1rem",
            transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            fontFamily: "var(--font-body), sans-serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translate(-2px, -2px) rotate(1deg)"
            el.style.boxShadow = "6px 6px 0 0 var(--t-blue)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translate(0, 0) rotate(0deg)"
            el.style.boxShadow = "4px 4px 0 0 var(--t-blue)"
          }}
        >
          Book a Demo
        </Link>
      </motion.div>

      {/* Stats — colored cards tilted */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: BOUNCE, delay: 0.95 }}
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "56px",
          zIndex: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0, rotate: stat.rotate * 3 }}
            animate={{ opacity: 1, scale: 1, rotate: stat.rotate }}
            transition={{ duration: 0.4, ease: BOUNCE, delay: 1.0 + i * 0.1 }}
            style={{
              background: stat.bg,
              color: stat.bg === "#ffcc00" ? "var(--t-fg)" : "var(--t-surface)",
              padding: "20px 28px",
              border: "3px solid var(--t-fg)",
              boxShadow: `4px 4px 0 0 ${stat.shadow}`,
              borderRadius: i === 0 ? "1rem 0.5rem 1.5rem 0.3rem" : i === 1 ? "0.5rem 1rem 0.3rem 1.5rem" : "1.5rem 0.3rem 0.5rem 1rem",
              textAlign: "center",
              transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = `rotate(${-stat.rotate}deg) translateY(-4px)`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = `rotate(${stat.rotate}deg) translateY(0)`
            }}
          >
            <div
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                marginTop: "4px",
                opacity: 0.8,
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
