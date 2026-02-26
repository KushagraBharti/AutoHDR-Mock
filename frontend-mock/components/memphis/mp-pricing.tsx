"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { PRICING_PLANS } from "@/data/capabilities"

type Cycle = "monthly" | "yearly"

const BOUNCE = [0.68, -0.55, 0.265, 1.55] as [number, number, number, number]

const CARD_ACCENTS = ["#3344ff", "#ff3366", "#ffcc00"]
const CARD_SHADOWS = ["#ffcc00", "#3344ff", "#ff6633"]
const CARD_ROTATIONS = [-2, 0, 1.5]
const CARD_RADII = [
  "1.5rem 0.5rem 1rem 0.3rem",
  "0.5rem 1.5rem 0.3rem 1rem",
  "1rem 0.3rem 1.5rem 0.5rem",
]

export default function MpPricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly")

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
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: BOUNCE }}
          style={{
            display: "inline-block",
            background: "var(--t-pink)",
            color: "var(--t-surface)",
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
          Plans
        </motion.div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "var(--t-fg)" }}>Pick Your </span>
          <span style={{ color: "var(--t-blue)" }}>Plan</span>
        </h2>
      </div>

      <p style={{ textAlign: "center", fontSize: "13px", color: "var(--t-muted)", marginBottom: "32px" }}>
        No contracts, no surprises, just great photos.
      </p>

      {/* Toggle */}
      <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "48px" }}>
        {(["monthly", "yearly"] as Cycle[]).map((c) => (
          <button
            key={c}
            onClick={() => setCycle(c)}
            style={{
              fontSize: "12px",
              fontWeight: 700,
              padding: "10px 24px",
              background: cycle === c ? "var(--t-yellow)" : "var(--t-surface)",
              color: "var(--t-fg)",
              border: "3px solid var(--t-fg)",
              boxShadow: cycle === c ? "3px 3px 0 0 var(--t-fg)" : "none",
              borderRadius: c === "monthly" ? "1rem 0 0 1rem" : "0 1rem 1rem 0",
              cursor: "pointer",
              transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              fontFamily: "var(--font-body), sans-serif",
              textTransform: "capitalize",
            }}
          >
            {c}
            {c === "yearly" && (
              <span
                style={{
                  background: "var(--t-pink)",
                  color: "var(--t-surface)",
                  fontSize: "8px",
                  fontWeight: 700,
                  padding: "2px 6px",
                  marginLeft: "6px",
                  borderRadius: "4px",
                  border: "1px solid var(--t-fg)",
                }}
              >
                -20%
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
          maxWidth: "1020px",
          margin: "0 auto",
        }}
      >
        {PRICING_PLANS.map((plan, index) => {
          const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
          return (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 40, rotate: CARD_ROTATIONS[index] * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: CARD_ROTATIONS[index] }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: BOUNCE, delay: index * 0.1 }}
              whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
              style={{
                background: "var(--t-surface)",
                border: "3px solid var(--t-fg)",
                boxShadow: `5px 5px 0 0 ${CARD_SHADOWS[index]}`,
                borderRadius: CARD_RADII[index],
                padding: "32px 24px",
                position: "relative",
                transition: "box-shadow 0.2s ease",
              }}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(-3deg)",
                    background: "var(--t-fg)",
                    color: "var(--t-yellow)",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    border: "2px solid var(--t-fg)",
                  }}
                >
                  Popular
                </div>
              )}

              {/* Tier */}
              <div
                style={{
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  color: CARD_ACCENTS[index],
                  marginBottom: "6px",
                  letterSpacing: "-0.01em",
                }}
              >
                {plan.tier}
              </div>

              <p style={{ fontSize: "12px", color: "var(--t-muted)", marginBottom: "20px", lineHeight: 1.4 }}>
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: "24px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${plan.tier}-${cycle}`}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.3, ease: BOUNCE }}
                    style={{ display: "flex", alignItems: "baseline", gap: "2px" }}
                  >
                    {price === 0 ? (
                      <span
                        style={{
                          fontSize: "clamp(36px, 4vw, 48px)",
                          fontFamily: "var(--font-display), sans-serif",
                          fontWeight: 800,
                          color: "var(--t-fg)",
                        }}
                      >
                        Free
                      </span>
                    ) : (
                      <>
                        <span style={{ fontSize: "18px", fontWeight: 800, color: CARD_ACCENTS[index] }}>$</span>
                        <span
                          style={{
                            fontSize: "clamp(36px, 4vw, 48px)",
                            fontFamily: "var(--font-display), sans-serif",
                            fontWeight: 800,
                            color: "var(--t-fg)",
                          }}
                        >
                          {price}
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--t-muted)", fontWeight: 500 }}>
                          /{cycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
                {plan.features.map((feat, fi) => (
                  <div key={feat} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--t-fg)" }}>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: [CARD_ACCENTS[index], "var(--t-yellow)", "var(--t-lime)", CARD_SHADOWS[index]][fi % 4],
                        border: "1.5px solid var(--t-fg)",
                        flexShrink: 0,
                      }}
                    />
                    {feat}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  padding: "12px 20px",
                  background: plan.highlighted ? CARD_ACCENTS[index] : "var(--t-surface)",
                  color: plan.highlighted ? "var(--t-surface)" : "var(--t-fg)",
                  border: "3px solid var(--t-fg)",
                  boxShadow: "3px 3px 0 0 var(--t-fg)",
                  borderRadius: "0.8rem 0.3rem 0.8rem 0.3rem",
                  transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translate(-1px, -1px)"
                  el.style.boxShadow = "4px 4px 0 0 var(--t-fg)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translate(0, 0)"
                  el.style.boxShadow = "3px 3px 0 0 var(--t-fg)"
                }}
              >
                {plan.cta}
              </Link>
            </motion.div>
          )
        })}
      </div>

      <p style={{ textAlign: "center", fontSize: "10px", color: "var(--t-muted)", marginTop: "36px" }}>
        No contracts &bull; Cancel anytime &bull; Credits roll over
      </p>
    </section>
  )
}
