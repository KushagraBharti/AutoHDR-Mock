"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const EASE_ORGANIC = [0.34, 1.56, 0.64, 1] as [number, number, number, number]
const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const H1_LINES = [
  { text: "AI Real", accent: false },
  { text: "Estate", accent: false },
  { text: "Photo", accent: true },
  { text: "Editing", accent: false },
]

const STATS = [
  { value: "10%", label: "U.S. Listings" },
  { value: "30+", label: "Min Saved Daily" },
  { value: "2min", label: "Turnaround" },
]

/* Morphing CSS blob */
function Blob({ size, color, top, left, delay }: { size: number; color: string; top: string; left: string; delay: number }) {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "40% 60% 70% 30% / 40% 50% 60% 50%",
          "70% 30% 50% 50% / 30% 30% 70% 70%",
          "50% 50% 30% 70% / 60% 40% 60% 40%",
          "40% 60% 70% 30% / 40% 50% 60% 50%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        opacity: 0.06,
        top,
        left,
        filter: "blur(40px)",
        pointerEvents: "none",
      }}
    />
  )
}

export default function BtHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 48px 100px",
        textAlign: "center",
        overflow: "hidden",
        background: "var(--t-bg)",
      }}
    >
      {/* Paper grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Background blobs */}
      <Blob size={500} color="var(--t-accent)" top="-10%" left="-5%" delay={0} />
      <Blob size={400} color="var(--t-accent2)" top="40%" left="70%" delay={2} />
      <Blob size={350} color="var(--t-moss)" top="60%" left="10%" delay={4} />

      {/* Sway keyframe */}
      <style>{`
        @keyframes bt-sway {
          0%, 100% { transform: rotate(-0.5deg); }
          50% { transform: rotate(0.5deg); }
        }
        @keyframes bt-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
      `}</style>

      {/* Decorative leaf SVG — top right */}
      <svg
        viewBox="0 0 100 200"
        style={{
          position: "absolute",
          top: "60px",
          right: "40px",
          width: "60px",
          height: "120px",
          opacity: 0.08,
          animation: "bt-sway 6s ease-in-out infinite",
          transformOrigin: "bottom center",
        }}
      >
        <path
          d="M50 200 C50 200 10 120 20 60 C30 10 50 0 50 0 C50 0 70 10 80 60 C90 120 50 200 50 200Z"
          fill="none"
          stroke="var(--t-accent)"
          strokeWidth="1"
        />
        <line x1="50" y1="0" x2="50" y2="200" stroke="var(--t-accent)" strokeWidth="0.5" />
      </svg>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "36px",
          zIndex: 1,
        }}
      >
        {/* Small leaf icon */}
        <svg viewBox="0 0 16 16" style={{ width: "12px", height: "12px" }}>
          <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent)" opacity="0.5" />
        </svg>
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "var(--t-accent)",
            fontFamily: "var(--font-body), Georgia, serif",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Nature-Powered Editing
        </span>
        <svg viewBox="0 0 16 16" style={{ width: "12px", height: "12px" }}>
          <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent)" opacity="0.5" />
        </svg>
      </motion.div>

      {/* H1 — staggered entrance with organic bounce */}
      <h1
        style={{
          fontSize: "clamp(48px, 10vw, 120px)",
          fontFamily: "var(--font-display), serif",
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: "-0.01em",
          margin: 0,
          zIndex: 1,
          fontVariationSettings: "'WONK' 1",
        }}
      >
        {H1_LINES.map((line, i) => (
          <motion.div
            key={line.text}
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE_ORGANIC, delay: 0.15 + i * 0.1 }}
            style={{ display: "block" }}
          >
            {line.accent ? (
              <span style={{ color: "var(--t-accent)" }}>{line.text}</span>
            ) : (
              <span style={{ color: "var(--t-fg)" }}>{line.text}</span>
            )}
          </motion.div>
        ))}
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.65 }}
        style={{
          fontSize: "clamp(14px, 1.4vw, 17px)",
          fontFamily: "var(--font-body), Georgia, serif",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--t-wheat)",
          maxWidth: "500px",
          lineHeight: 1.75,
          marginTop: "28px",
          zIndex: 1,
          opacity: 0.7,
        }}
      >
        Professional-grade AI photo editing rooted in precision. HDR processing,
        virtual staging, and instant enhancements — naturally delivered.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.85 }}
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "36px",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Link
          href="/botanical/pricing"
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textDecoration: "none",
            color: "var(--t-bg)",
            background: "var(--t-accent)",
            padding: "14px 28px",
            borderRadius: "2rem 1rem 2rem 1.5rem",
            transition: "all 0.4s ease",
            fontFamily: "var(--font-body), Georgia, serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(-3px) scale(1.02)"
            el.style.boxShadow = "0 8px 30px rgba(124, 149, 107, 0.35)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(0) scale(1)"
            el.style.boxShadow = "none"
          }}
        >
          Upload Photos — Free
        </Link>
        <Link
          href="#"
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textDecoration: "none",
            color: "var(--t-accent2)",
            background: "transparent",
            padding: "14px 28px",
            border: "1px solid var(--t-accent2)",
            borderRadius: "1rem 2rem 1.5rem 2rem",
            transition: "all 0.4s ease",
            fontFamily: "var(--font-body), Georgia, serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "rgba(198, 122, 74, 0.1)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "transparent"
          }}
        >
          Book a Demo
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 1.1 }}
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "56px",
          zIndex: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            style={{
              textAlign: "center",
              padding: "16px 24px",
              background: "rgba(124, 149, 107, 0.06)",
              borderRadius: i === 0 ? "1.5rem 1rem 2rem 1rem" : i === 1 ? "1rem 2rem 1rem 1.5rem" : "2rem 1rem 1rem 2rem",
              border: "1px solid rgba(124, 149, 107, 0.1)",
              animation: `bt-breathe 4s ease-in-out infinite ${i * 0.8}s`,
            }}
          >
            <div
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontFamily: "var(--font-display), serif",
                fontWeight: 700,
                color: "var(--t-accent)",
                lineHeight: 1,
                fontVariationSettings: "'WONK' 1",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "var(--t-wheat)",
                marginTop: "6px",
                fontFamily: "var(--font-body), Georgia, serif",
                opacity: 0.5,
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
