"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TESTIMONIALS } from "@/data/capabilities"

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

export default function NcTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevHovered, setPrevHovered] = useState(false)
  const [nextHovered, setNextHovered] = useState(false)

  const doTransition = useCallback(
    (newIndex: number, dir: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setDirection(dir)
      // Brief black flash: fade out, wait 50ms, then set new index
      setTimeout(() => {
        setIndex(newIndex)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 50)
    },
    [isTransitioning]
  )

  const goNext = () => {
    doTransition((index + 1) % TESTIMONIALS.length, 1)
  }

  const goPrev = () => {
    doTransition((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1)
  }

  const goTo = (i: number) => {
    if (i === index) return
    doTransition(i, i > index ? 1 : -1)
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
      {/* Venetian blind shadow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(25deg, transparent 0px, transparent 25px, rgba(0,0,0,0.15) 25px, rgba(0,0,0,0.15) 60px)",
          opacity: 0.15,
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-body), Georgia, serif",
              fontWeight: 400,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--t-mid-gray)",
              marginBottom: "12px",
            }}
          >
            Testimonials
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Bodoni MT', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--t-fg)",
              margin: 0,
            }}
          >
            What Professionals
            <br />
            <span style={{ color: "var(--t-accent)", fontStyle: "italic" }}>
              Are Saying
            </span>
          </h2>

          {/* Thin red line divider */}
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "var(--t-accent)",
              margin: "24px auto 0",
            }}
          />
        </motion.div>

        {/* Testimonial card */}
        <div
          style={{
            background: "var(--t-bg)",
            border: "1px solid var(--t-muted)",
            borderRadius: 0,
            padding: "64px 56px",
            position: "relative",
            overflow: "hidden",
            minHeight: "340px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Large red quotation mark */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "40px",
              fontFamily: "var(--font-display), 'Bodoni MT', serif",
              fontSize: "120px",
              fontWeight: 900,
              lineHeight: 1,
              color: "var(--t-accent)",
              opacity: 0.25,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05, ease: "linear" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                textAlign: "center",
                width: "100%",
              }}
            >
              {/* Stars as small red filled circles */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  justifyContent: "center",
                }}
              >
                {Array.from({ length: current.rating }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--t-accent)",
                    }}
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote
                style={{
                  fontFamily: "var(--font-display), 'Bodoni MT', serif",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "var(--t-silver)",
                  maxWidth: "640px",
                  margin: 0,
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
                  gap: "6px",
                }}
              >
                {/* Thin divider */}
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "var(--t-muted)",
                    marginBottom: "8px",
                  }}
                />

                {/* Name with red em-dash prefix */}
                <div
                  style={{
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--t-fg)",
                  }}
                >
                  <span style={{ color: "var(--t-accent)" }}>&mdash;</span>{" "}
                  {current.name}
                </div>

                {/* Role */}
                <div
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                    letterSpacing: "1px",
                    color: "var(--t-mid-gray)",
                  }}
                >
                  {current.role}, {current.company}
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
          {/* Arrows: small white chevrons, no borders */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={goPrev}
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                borderRadius: 0,
                background: "transparent",
                color: prevHovered ? "var(--t-fg)" : "var(--t-mid-gray)",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "color 0.3s cubic-bezier(0.4,0,0.2,1)",
                fontFamily: "var(--font-body), Georgia, serif",
              }}
              onMouseEnter={() => setPrevHovered(true)}
              onMouseLeave={() => setPrevHovered(false)}
              aria-label="Previous testimonial"
            >
              &#8249;
            </button>
            <button
              onClick={goNext}
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                borderRadius: 0,
                background: "transparent",
                color: nextHovered ? "var(--t-fg)" : "var(--t-mid-gray)",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "color 0.3s cubic-bezier(0.4,0,0.2,1)",
                fontFamily: "var(--font-body), Georgia, serif",
              }}
              onMouseEnter={() => setNextHovered(true)}
              onMouseLeave={() => setNextHovered(false)}
              aria-label="Next testimonial"
            >
              &#8250;
            </button>
          </div>

          {/* Counter */}
          <div
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-body), Georgia, serif",
              fontWeight: 300,
              letterSpacing: "2px",
              color: "var(--t-mid-gray)",
            }}
          >
            {String(index + 1).padStart(2, "0")}{" "}
            <span style={{ color: "var(--t-muted)" }}>/</span>{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </div>

          {/* Dot indicators: small SQUARES (noir angular) */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === index ? "20px" : "8px",
                  height: "8px",
                  border: "none",
                  borderRadius: 0,
                  background:
                    i === index ? "var(--t-accent)" : "var(--t-muted)",
                  transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
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
