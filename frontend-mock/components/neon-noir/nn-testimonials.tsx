"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TESTIMONIALS } from "@/data/capabilities"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function NNTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = () => {
    setDirection(1)
    setIndex((i) => (i + 1) % TESTIMONIALS.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
  }

  const current = TESTIMONIALS[index]

  return (
    <section
      style={{
        background: "var(--t-surface)",
        padding: "100px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,240,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow — centered */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 70%)",
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--t-pink)",
              marginBottom: "12px",
              textShadow: "0 0 8px rgba(255,45,120,0.4)",
            }}
          >
            ◆ 003 — TESTIMONIALS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Impact, sans-serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: 0.9,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--t-fg)",
              margin: "0 auto",
              display: "inline-block",
            }}
          >
            WHAT PROS
            <br />
            <span
              style={{
                color: "var(--t-pink)",
                textShadow: "0 0 16px rgba(255,45,120,0.5)",
              }}
            >
              ARE SAYING
            </span>
          </h2>

          {/* Cyan underline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, var(--t-cyan))",
                boxShadow: "0 0 6px rgba(0,240,255,0.4)",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "var(--t-cyan)",
                borderRadius: "50%",
                boxShadow: "0 0 8px var(--t-cyan)",
              }}
            />
            <div
              style={{
                width: "80px",
                height: "1px",
                background:
                  "linear-gradient(90deg, var(--t-cyan), transparent)",
                boxShadow: "0 0 6px rgba(0,240,255,0.4)",
              }}
            />
          </div>
        </motion.div>

        {/* Testimonial card */}
        <div
          style={{
            border: "1px solid rgba(255,45,120,0.2)",
            background: "var(--t-bg)",
            padding: "56px 48px",
            position: "relative",
            overflow: "hidden",
            minHeight: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Corner brackets */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              width: 16,
              height: 16,
              borderTop: "2px solid var(--t-cyan)",
              borderLeft: "2px solid var(--t-cyan)",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 16,
              height: 16,
              borderTop: "2px solid var(--t-cyan)",
              borderRight: "2px solid var(--t-cyan)",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              width: 16,
              height: 16,
              borderBottom: "2px solid var(--t-cyan)",
              borderLeft: "2px solid var(--t-cyan)",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              width: 16,
              height: 16,
              borderBottom: "2px solid var(--t-cyan)",
              borderRight: "2px solid var(--t-cyan)",
              opacity: 0.6,
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.3, ease: EASE }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "28px",
                textAlign: "center",
                width: "100%",
              }}
            >
              {/* Stars */}
              <div
                style={{
                  fontSize: "18px",
                  letterSpacing: "4px",
                  color: "var(--t-pink)",
                  textShadow:
                    "0 0 8px var(--t-pink), 0 0 20px rgba(255,45,120,0.3)",
                }}
              >
                {"★".repeat(current.rating)}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontSize: "15px",
                  fontFamily: "var(--font-mono), monospace",
                  lineHeight: 1.8,
                  color: "var(--t-fg)",
                  maxWidth: "640px",
                  margin: 0,
                  fontStyle: "normal",
                  letterSpacing: "0.02em",
                }}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {/* Divider line */}
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, var(--t-pink), transparent)",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-display), Impact, sans-serif",
                    fontSize: "20px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--t-fg)",
                  }}
                >
                  {current.name}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-mono), monospace",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--t-muted)",
                  }}
                >
                  {current.role} &mdash; {current.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "32px",
          }}
        >
          {/* Arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={goPrev}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(255,45,120,0.3)",
                background: "transparent",
                color: "var(--t-muted)",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "var(--font-mono), monospace",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "var(--t-pink)"
                el.style.color = "var(--t-pink)"
                el.style.boxShadow = "0 0 12px rgba(255,45,120,0.3)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(255,45,120,0.3)"
                el.style.color = "var(--t-muted)"
                el.style.boxShadow = "none"
              }}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={goNext}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(255,45,120,0.3)",
                background: "transparent",
                color: "var(--t-muted)",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "var(--font-mono), monospace",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "var(--t-pink)"
                el.style.color = "var(--t-pink)"
                el.style.boxShadow = "0 0 12px rgba(255,45,120,0.3)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(255,45,120,0.3)"
                el.style.color = "var(--t-muted)"
                el.style.boxShadow = "none"
              }}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

          {/* Counter */}
          <div
            style={{
              fontSize: "10px",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.2em",
              color: "var(--t-muted)",
            }}
          >
            {String(index + 1).padStart(2, "0")}{" "}
            <span style={{ color: "rgba(255,45,120,0.4)" }}>/</span>{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === index ? "28px" : "8px",
                  height: "8px",
                  border: "none",
                  borderRadius: i === index ? "4px" : "50%",
                  background:
                    i === index ? "var(--t-pink)" : "rgba(255,45,120,0.2)",
                  boxShadow:
                    i === index ? "0 0 8px rgba(255,45,120,0.5)" : "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
