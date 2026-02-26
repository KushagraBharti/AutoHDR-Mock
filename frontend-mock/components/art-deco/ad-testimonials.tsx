"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TESTIMONIALS } from "@/data/capabilities"

const EASE_DECO = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export default function AdTestimonials() {
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
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "64px",
        }}
      >
        <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "var(--t-accent)", opacity: 0.2 }} />
        <span
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--t-fg)",
          }}
        >
          Testimonials
        </span>
        <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "var(--t-accent)", opacity: 0.2 }} />
      </div>

      {/* Testimonial card */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          minHeight: "260px",
        }}
      >
        {/* Large decorative quote mark */}
        <div
          style={{
            fontSize: "120px",
            fontFamily: "var(--font-display), serif",
            color: "var(--t-accent)",
            opacity: 0.1,
            lineHeight: 0.6,
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          &ldquo;
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, y: direction * 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction * -30 }}
            transition={{ duration: 0.6, ease: EASE_DECO }}
          >
            {/* Stars as gold diamonds */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "28px" }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "var(--t-accent)",
                    transform: "rotate(45deg)",
                  }}
                />
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.7,
                color: "var(--t-fg)",
                margin: "0 0 28px",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Gold rule */}
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--t-accent)",
                margin: "0 auto 20px",
                opacity: 0.5,
              }}
            />

            {/* Attribution */}
            <div
              style={{
                fontSize: "14px",
                fontFamily: "var(--font-display), serif",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "var(--t-accent)",
                marginBottom: "6px",
              }}
            >
              {t.name}
            </div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(245, 240, 232, 0.4)",
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
          gap: "24px",
          marginTop: "48px",
        }}
      >
        <button
          onClick={prev}
          style={{
            background: "none",
            border: "1px solid rgba(212, 168, 67, 0.3)",
            color: "var(--t-accent)",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "16px",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
            ;(e.currentTarget as HTMLElement).style.background = "rgba(212, 168, 67, 0.1)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 168, 67, 0.3)"
            ;(e.currentTarget as HTMLElement).style.background = "none"
          }}
        >
          &#8592;
        </button>

        {/* Dot indicators as diamonds */}
        <div style={{ display: "flex", gap: "10px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === current ? "10px" : "6px",
                height: i === current ? "10px" : "6px",
                background: i === current ? "var(--t-accent)" : "rgba(212, 168, 67, 0.25)",
                border: "none",
                transform: "rotate(45deg)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background: "none",
            border: "1px solid rgba(212, 168, 67, 0.3)",
            color: "var(--t-accent)",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontSize: "16px",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
            ;(e.currentTarget as HTMLElement).style.background = "rgba(212, 168, 67, 0.1)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 168, 67, 0.3)"
            ;(e.currentTarget as HTMLElement).style.background = "none"
          }}
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}
