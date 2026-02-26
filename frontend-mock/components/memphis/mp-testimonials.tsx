"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TESTIMONIALS } from "@/data/capabilities"

const BOUNCE = [0.68, -0.55, 0.265, 1.55] as [number, number, number, number]
const CARD_COLORS = ["#ff3366", "#3344ff", "#ffcc00"]
const SHADOW_COLORS = ["#3344ff", "#ffcc00", "#ff3366"]

export default function MpTestimonials() {
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
        padding: "80px 48px",
        fontFamily: "var(--font-body), sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "var(--t-bg)",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: BOUNCE }}
          style={{
            display: "inline-block",
            background: "var(--t-yellow)",
            color: "var(--t-fg)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "6px 16px",
            border: "2px solid var(--t-fg)",
            boxShadow: "2px 2px 0 0 var(--t-fg)",
            marginBottom: "16px",
          }}
        >
          What They Say
        </motion.div>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            color: "var(--t-fg)",
            letterSpacing: "-0.02em",
          }}
        >
          <span>Love </span>
          <span style={{ color: "var(--t-pink)" }}>Letters</span>
        </h2>
      </div>

      {/* Testimonial card */}
      <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative", minHeight: "280px" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80, rotate: direction * 5, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, rotate: -1, scale: 1 }}
            exit={{ opacity: 0, x: direction * -80, rotate: direction * -5, scale: 0.9 }}
            transition={{ duration: 0.4, ease: BOUNCE }}
            style={{
              background: "var(--t-surface)",
              border: "3px solid var(--t-fg)",
              boxShadow: `6px 6px 0 0 ${SHADOW_COLORS[current]}`,
              borderRadius: "1rem 0.5rem 1.5rem 0.3rem",
              padding: "36px 32px",
              textAlign: "center",
            }}
          >
            {/* Large colored quote mark */}
            <div
              style={{
                fontSize: "60px",
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 800,
                color: CARD_COLORS[current],
                lineHeight: 0.5,
                marginBottom: "12px",
              }}
            >
              &ldquo;
            </div>

            {/* Stars */}
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "20px" }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "16px",
                    height: "16px",
                    background: "var(--t-yellow)",
                    border: "2px solid var(--t-fg)",
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  }}
                />
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: "clamp(14px, 1.5vw, 18px)",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 500,
                lineHeight: 1.65,
                color: "var(--t-fg)",
                margin: "0 0 24px",
              }}
            >
              {t.quote}
            </p>

            {/* Author */}
            <div
              style={{
                fontSize: "15px",
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 700,
                color: CARD_COLORS[current],
                marginBottom: "4px",
              }}
            >
              {t.name}
            </div>
            <div style={{ fontSize: "11px", color: "var(--t-muted)" }}>
              {t.role}, {t.company}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "36px" }}>
        <button
          onClick={prev}
          style={{
            background: "var(--t-blue)",
            color: "var(--t-surface)",
            border: "3px solid var(--t-fg)",
            boxShadow: "2px 2px 0 0 var(--t-fg)",
            width: "40px",
            height: "40px",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: 700,
            transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = "translate(-1px, -1px)"
            ;(e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0 0 var(--t-fg)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = "translate(0, 0)"
            ;(e.currentTarget as HTMLElement).style.boxShadow = "2px 2px 0 0 var(--t-fg)"
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
                width: i === current ? "28px" : "12px",
                height: "12px",
                background: CARD_COLORS[i],
                border: "2px solid var(--t-fg)",
                borderRadius: i === current ? "6px" : "50%",
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background: "var(--t-pink)",
            color: "var(--t-surface)",
            border: "3px solid var(--t-fg)",
            boxShadow: "2px 2px 0 0 var(--t-fg)",
            width: "40px",
            height: "40px",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: 700,
            transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = "translate(-1px, -1px)"
            ;(e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0 0 var(--t-fg)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = "translate(0, 0)"
            ;(e.currentTarget as HTMLElement).style.boxShadow = "2px 2px 0 0 var(--t-fg)"
          }}
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}
