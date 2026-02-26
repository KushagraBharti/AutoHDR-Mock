"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TESTIMONIALS } from "@/data/capabilities"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const AURORA_COLORS = ["#4ade80", "#2dd4bf", "#38bdf8", "#818cf8", "#f472b6"]

export default function AuTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [prevHovered, setPrevHovered] = useState(false)
  const [nextHovered, setNextHovered] = useState(false)

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
        background: "var(--t-bg)",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background aurora orbs */}
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          top: "10%",
          left: "60%",
        }}
        animate={{
          x: ["0%", "-8%", "5%", "0%"],
          y: ["0%", "5%", "-8%", "0%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          bottom: "10%",
          left: "20%",
        }}
        animate={{
          x: ["0%", "6%", "-4%", "0%"],
          y: ["0%", "-4%", "6%", "0%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--t-accent)",
              marginBottom: "16px",
              opacity: 0.8,
            }}
          >
            Testimonials
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--t-fg)",
              margin: 0,
            }}
          >
            What Pros Are{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue), var(--t-accent2))",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "au-iridescent 4s ease infinite",
              }}
            >
              Saying
            </span>
          </h2>
        </motion.div>

        {/* Testimonial card — glass with iridescent top border */}
        <div
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Iridescent top border strip */}
          <div
            style={{
              height: "2px",
              background: "linear-gradient(90deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue), var(--t-accent2), var(--t-aurora-pink), var(--t-accent))",
              backgroundSize: "200% 100%",
              animation: "au-iridescent 4s ease infinite",
            }}
          />

          {/* Card content */}
          <div
            style={{
              padding: "56px 48px",
              position: "relative",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Frosted glass quotation marks */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "32px",
                fontSize: "80px",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                background: "linear-gradient(135deg, rgba(74,222,128,0.15), rgba(45,212,191,0.1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.4,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              &ldquo;
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                right: "32px",
                fontSize: "80px",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                background: "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(56,189,248,0.1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.4,
                pointerEvents: "none",
                userSelect: "none",
                transform: "rotate(180deg)",
              }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -direction * 50, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "28px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {/* Stars — aurora-colored glowing circles */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  {Array.from({ length: current.rating }).map((_, si) => (
                    <div
                      key={si}
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: AURORA_COLORS[si % AURORA_COLORS.length],
                        boxShadow: `0 0 8px ${AURORA_COLORS[si % AURORA_COLORS.length]}80`,
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  style={{
                    fontSize: "17px",
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "var(--t-fg)",
                    maxWidth: "580px",
                    margin: 0,
                    fontStyle: "normal",
                    letterSpacing: "0.01em",
                    opacity: 0.85,
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
                  {/* Divider */}
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, var(--t-accent), transparent)",
                      marginBottom: "8px",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                      color: "var(--t-fg)",
                    }}
                  >
                    {current.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontFamily: "var(--font-body), sans-serif",
                      fontWeight: 300,
                      color: "rgba(232,234,240,0.45)",
                    }}
                  >
                    {current.role} — {current.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "32px",
            padding: "0 8px",
          }}
        >
          {/* Arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={goPrev}
              onMouseEnter={() => setPrevHovered(true)}
              onMouseLeave={() => setPrevHovered(false)}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: prevHovered
                  ? "1px solid rgba(74,222,128,0.4)"
                  : "1px solid rgba(255,255,255,0.1)",
                background: prevHovered
                  ? "rgba(74,222,128,0.06)"
                  : "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                color: prevHovered ? "var(--t-accent)" : "rgba(232,234,240,0.5)",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                boxShadow: prevHovered
                  ? "0 0 16px rgba(74,222,128,0.15)"
                  : "none",
              }}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={goNext}
              onMouseEnter={() => setNextHovered(true)}
              onMouseLeave={() => setNextHovered(false)}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: nextHovered
                  ? "1px solid rgba(74,222,128,0.4)"
                  : "1px solid rgba(255,255,255,0.1)",
                background: nextHovered
                  ? "rgba(74,222,128,0.06)"
                  : "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                color: nextHovered ? "var(--t-accent)" : "rgba(232,234,240,0.5)",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                boxShadow: nextHovered
                  ? "0 0 16px rgba(74,222,128,0.15)"
                  : "none",
              }}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

          {/* Counter */}
          <div
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "rgba(232,234,240,0.4)",
            }}
          >
            {String(index + 1).padStart(2, "0")}{" "}
            <span style={{ color: "rgba(74,222,128,0.3)" }}>/</span>{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </div>

          {/* Dot indicators with aurora gradient fill */}
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
                  background: i === index
                    ? "linear-gradient(90deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue))"
                    : "rgba(255,255,255,0.12)",
                  boxShadow: i === index
                    ? "0 0 10px rgba(74,222,128,0.4)"
                    : "none",
                  transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
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
