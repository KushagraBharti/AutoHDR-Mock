"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TESTIMONIALS } from "@/data/capabilities"
import { ChevronLeft, ChevronRight } from "lucide-react"

const STEP_TRANSITION = { duration: 0.12, ease: [1, 0, 0, 1] as [number, number, number, number] }

export default function BrutTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (next: number) => {
    const nextIdx = (next + TESTIMONIALS.length) % TESTIMONIALS.length
    setDirection(next > index || (index === TESTIMONIALS.length - 1 && next === 0) ? 1 : -1)
    setIndex(nextIdx)
  }

  const prev = () => {
    const nextIdx = (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    setDirection(-1)
    setIndex(nextIdx)
  }

  const next = () => {
    const nextIdx = (index + 1) % TESTIMONIALS.length
    setDirection(1)
    setIndex(nextIdx)
  }

  const current = TESTIMONIALS[index]

  return (
    <section
      style={{
        background: "var(--t-fg)",
        color: "var(--t-bg)",
        borderTop: "2px solid var(--t-fg)",
        borderBottom: "2px solid var(--t-fg)",
        fontFamily: "var(--font-mono), monospace",
        padding: "0",
      }}
    >
      {/* Section label row */}
      <div
        style={{
          borderBottom: "1px solid rgba(243,243,238,0.15)",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--t-accent)",
          }}
        >
          — 003 — TESTIMONIALS
        </span>
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(243,243,238,0.4)",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
        </span>
      </div>

      {/* Main testimonial area */}
      <div
        style={{
          padding: "60px 40px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          position: "relative",
          overflow: "hidden",
          minHeight: "320px",
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 30 }}
            transition={STEP_TRANSITION}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              width: "100%",
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                fontSize: "64px",
                fontWeight: 800,
                lineHeight: 1,
                color: "var(--t-accent)",
                marginBottom: "-20px",
                alignSelf: "center",
              }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <blockquote
              style={{
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: 1.6,
                textAlign: "center",
                maxWidth: "640px",
                color: "var(--t-bg)",
                margin: 0,
                fontStyle: "normal",
              }}
            >
              {current.quote}
            </blockquote>

            {/* Author */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--t-bg)",
                }}
              >
                {current.name}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(243,243,238,0.5)",
                }}
              >
                {current.role} &mdash; {current.company}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls row */}
      <div
        style={{
          borderTop: "1px solid rgba(243,243,238,0.15)",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Arrow buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={prev}
            style={{
              background: "transparent",
              border: "1px solid rgba(243,243,238,0.3)",
              color: "var(--t-bg)",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.05s steps(1)",
              cursor: "crosshair",
              fontFamily: "var(--font-mono), monospace",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-accent)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-bg)"
              ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(243,243,238,0.3)"
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            style={{
              background: "transparent",
              border: "1px solid rgba(243,243,238,0.3)",
              color: "var(--t-bg)",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.05s steps(1)",
              cursor: "crosshair",
              fontFamily: "var(--font-mono), monospace",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-accent)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-bg)"
              ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(243,243,238,0.3)"
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === index ? "24px" : "8px",
                height: "8px",
                border: "none",
                background: i === index ? "var(--t-accent)" : "rgba(243,243,238,0.3)",
                transition: "all 0.05s steps(1)",
                cursor: "crosshair",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
