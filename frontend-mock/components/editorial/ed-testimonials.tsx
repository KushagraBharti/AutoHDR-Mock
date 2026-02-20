"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TESTIMONIALS } from "@/data/capabilities"

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export default function EdTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const current = TESTIMONIALS[index]

  function goNext() {
    setDirection(1)
    setIndex((i) => (i + 1) % TESTIMONIALS.length)
  }

  function goPrev() {
    setDirection(-1)
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section
      style={{
        background: "var(--t-surface)",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Three-part header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "var(--t-rule)" }} />
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              whiteSpace: "nowrap",
            }}
          >
            Testimonials
          </p>
          <div style={{ flex: 1, height: "1px", background: "var(--t-rule)" }} />
        </motion.div>

        {/* Testimonial display */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            minHeight: "260px",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: direction * -40, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "32px",
                  color: "var(--t-accent)",
                  fontSize: "14px",
                  letterSpacing: "2px",
                }}
                aria-label={`${current.rating} out of 5 stars`}
              >
                {Array.from({ length: current.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(22px, 3vw, 36px)",
                  fontWeight: 500,
                  lineHeight: 1.45,
                  color: "var(--t-fg)",
                  maxWidth: "700px",
                  marginBottom: "40px",
                  margin: "0 0 40px",
                }}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Thin rule */}
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "var(--t-accent)",
                  marginBottom: "20px",
                }}
              />

              {/* Attribution */}
              <p
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--t-fg)",
                  marginBottom: "4px",
                }}
              >
                {current.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "11px",
                  color: "var(--t-muted)",
                }}
              >
                {current.role} &mdash; {current.company}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            marginTop: "56px",
            paddingTop: "32px",
            borderTop: "1px solid var(--t-rule)",
          }}
        >
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            style={{
              background: "none",
              border: "1px solid var(--t-rule)",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--t-muted)",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = "var(--t-accent)"
              el.style.color = "var(--t-accent)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = "var(--t-rule)"
              el.style.color = "var(--t-muted)"
            }}
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === index ? "24px" : "6px",
                  height: "1px",
                  background: i === index ? "var(--t-accent)" : "var(--t-rule)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 0.35s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next testimonial"
            style={{
              background: "none",
              border: "1px solid var(--t-rule)",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--t-muted)",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = "var(--t-accent)"
              el.style.color = "var(--t-accent)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = "var(--t-rule)"
              el.style.color = "var(--t-muted)"
            }}
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}
