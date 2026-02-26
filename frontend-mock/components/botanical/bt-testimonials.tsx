"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TESTIMONIALS } from "@/data/capabilities"

const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export default function BtTestimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const t = TESTIMONIALS[current]

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
  }

  const prev = () => go((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => go((current + 1) % TESTIMONIALS.length)

  return (
    <section
      style={{
        padding: "100px 48px",
        fontFamily: "var(--font-body), Georgia, serif",
        position: "relative",
        overflow: "hidden",
        background: "var(--t-surface)",
      }}
    >
      {/* Decorative branch SVG — left side */}
      <svg
        viewBox="0 0 120 300"
        style={{
          position: "absolute",
          top: "20%",
          left: "20px",
          width: "80px",
          height: "200px",
          opacity: 0.06,
          animation: "bt-sway 7s ease-in-out infinite",
          transformOrigin: "bottom center",
        }}
      >
        <path
          d="M60 300 C60 250 40 200 50 150 C55 120 30 80 50 40 C60 20 55 0 55 0"
          fill="none"
          stroke="var(--t-accent)"
          strokeWidth="1"
        />
        <ellipse cx="35" cy="100" rx="20" ry="12" fill="none" stroke="var(--t-accent)" strokeWidth="0.5" transform="rotate(-30, 35, 100)" />
        <ellipse cx="70" cy="65" rx="18" ry="10" fill="none" stroke="var(--t-accent)" strokeWidth="0.5" transform="rotate(25, 70, 65)" />
      </svg>

      <style>{`
        @keyframes bt-sway {
          0%, 100% { transform: rotate(-0.5deg); }
          50% { transform: rotate(0.5deg); }
        }
      `}</style>

      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
          <svg viewBox="0 0 16 16" style={{ width: "10px", height: "10px" }}>
            <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent2)" opacity="0.5" />
          </svg>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "var(--t-accent2)",
              fontStyle: "italic",
            }}
          >
            Words from the Field
          </span>
          <svg viewBox="0 0 16 16" style={{ width: "10px", height: "10px" }}>
            <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent2)" opacity="0.5" />
          </svg>
        </div>
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 30px)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 700,
            color: "var(--t-fg)",
            fontVariationSettings: "'WONK' 1",
          }}
        >
          Testimonials
        </h2>
      </div>

      {/* Testimonial card */}
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          minHeight: "240px",
        }}
      >
        {/* Large decorative quote */}
        <div
          style={{
            fontSize: "100px",
            fontFamily: "var(--font-display), serif",
            color: "var(--t-accent2)",
            opacity: 0.12,
            lineHeight: 0.5,
            position: "absolute",
            top: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            userSelect: "none",
            fontVariationSettings: "'WONK' 1",
          }}
        >
          &ldquo;
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, y: direction * 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction * -20 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
          >
            {/* Stars as terracotta circles */}
            <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "24px" }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "7px",
                    height: "7px",
                    background: "var(--t-accent2)",
                    borderRadius: "50%",
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 20px)",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.75,
                color: "var(--t-fg)",
                margin: "0 0 24px",
                opacity: 0.85,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Organic rule */}
            <div
              style={{
                width: "30px",
                height: "2px",
                background: "var(--t-accent2)",
                margin: "0 auto 16px",
                borderRadius: "2px",
                opacity: 0.4,
              }}
            />

            {/* Attribution */}
            <div
              style={{
                fontSize: "14px",
                fontFamily: "var(--font-display), serif",
                fontWeight: 600,
                color: "var(--t-accent)",
                marginBottom: "4px",
                fontVariationSettings: "'WONK' 1",
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 400,
                fontStyle: "italic",
                color: "rgba(240, 234, 214, 0.4)",
              }}
            >
              {t.role}, {t.company}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "44px",
        }}
      >
        <button
          onClick={prev}
          style={{
            background: "none",
            border: "1px solid rgba(124, 149, 107, 0.25)",
            color: "var(--t-accent)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "14px",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
            ;(e.currentTarget as HTMLElement).style.background = "rgba(124, 149, 107, 0.1)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124, 149, 107, 0.25)"
            ;(e.currentTarget as HTMLElement).style.background = "none"
          }}
        >
          &#8592;
        </button>

        <div style={{ display: "flex", gap: "8px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "var(--t-accent)" : "rgba(124, 149, 107, 0.2)",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background: "none",
            border: "1px solid rgba(124, 149, 107, 0.25)",
            color: "var(--t-accent)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "14px",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
            ;(e.currentTarget as HTMLElement).style.background = "rgba(124, 149, 107, 0.1)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124, 149, 107, 0.25)"
            ;(e.currentTarget as HTMLElement).style.background = "none"
          }}
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}
