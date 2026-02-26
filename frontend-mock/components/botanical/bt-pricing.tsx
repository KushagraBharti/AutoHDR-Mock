"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { PRICING_PLANS } from "@/data/capabilities"

type Cycle = "monthly" | "yearly"

const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const cardRadii = [
  "2rem 1.5rem 2.5rem 1rem",
  "1.5rem 2rem 1rem 2.5rem",
  "2.5rem 1rem 1.5rem 2rem",
]

export default function BtPricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly")

  return (
    <section
      style={{
        padding: "100px 48px",
        fontFamily: "var(--font-body), Georgia, serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
          <svg viewBox="0 0 16 16" style={{ width: "10px", height: "10px" }}>
            <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent)" opacity="0.5" />
          </svg>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--t-accent)", fontStyle: "italic" }}>
            Choose Your Soil
          </span>
          <svg viewBox="0 0 16 16" style={{ width: "10px", height: "10px" }}>
            <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent)" opacity="0.5" />
          </svg>
        </div>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 700,
            color: "var(--t-fg)",
            fontVariationSettings: "'WONK' 1",
          }}
        >
          Pricing
        </h2>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "13px",
          fontStyle: "italic",
          color: "rgba(240, 234, 214, 0.45)",
          marginBottom: "36px",
        }}
      >
        Transparent plans that grow with you
      </p>

      {/* Billing toggle */}
      <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "48px" }}>
        {(["monthly", "yearly"] as Cycle[]).map((c) => (
          <button
            key={c}
            onClick={() => setCycle(c)}
            style={{
              fontSize: "11px",
              fontWeight: 500,
              padding: "9px 22px",
              background: cycle === c ? "rgba(124, 149, 107, 0.15)" : "transparent",
              color: cycle === c ? "var(--t-accent)" : "rgba(240, 234, 214, 0.4)",
              border: `1px solid ${cycle === c ? "var(--t-accent)" : "rgba(124, 149, 107, 0.12)"}`,
              borderRadius: c === "monthly" ? "1.5rem 0.5rem 0.5rem 1.5rem" : "0.5rem 1.5rem 1.5rem 0.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "var(--font-body), Georgia, serif",
              textTransform: "capitalize",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {PRICING_PLANS.map((plan, index) => {
          const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
          return (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: index * 0.1 }}
              style={{
                background: plan.highlighted ? "rgba(124, 149, 107, 0.06)" : "var(--t-surface)",
                border: `1px solid ${plan.highlighted ? "rgba(124, 149, 107, 0.3)" : "rgba(124, 149, 107, 0.1)"}`,
                borderRadius: cardRadii[index],
                padding: "36px 28px",
                position: "relative",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(-4px)"
                el.style.borderColor = "rgba(124, 149, 107, 0.35)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(0)"
                el.style.borderColor = plan.highlighted ? "rgba(124, 149, 107, 0.3)" : "rgba(124, 149, 107, 0.1)"
              }}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "var(--t-accent2)",
                    color: "var(--t-fg)",
                    fontSize: "8px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    padding: "4px 10px",
                    borderRadius: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Tier */}
              <div
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  fontFamily: "var(--font-display), serif",
                  fontWeight: 700,
                  color: plan.highlighted ? "var(--t-accent)" : "var(--t-fg)",
                  marginBottom: "6px",
                  fontVariationSettings: "'WONK' 1",
                }}
              >
                {plan.tier}
              </div>

              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "italic",
                  color: "rgba(240, 234, 214, 0.4)",
                  marginBottom: "20px",
                  lineHeight: 1.5,
                }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: "24px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${plan.tier}-${cycle}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                    style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
                  >
                    {price === 0 ? (
                      <span
                        style={{
                          fontSize: "clamp(32px, 4vw, 44px)",
                          fontFamily: "var(--font-display), serif",
                          fontWeight: 700,
                          color: "var(--t-fg)",
                          fontVariationSettings: "'WONK' 1",
                        }}
                      >
                        Free
                      </span>
                    ) : (
                      <>
                        <span style={{ fontSize: "14px", color: "var(--t-accent)", opacity: 0.6 }}>$</span>
                        <span
                          style={{
                            fontSize: "clamp(32px, 4vw, 44px)",
                            fontFamily: "var(--font-display), serif",
                            fontWeight: 700,
                            color: plan.highlighted ? "var(--t-accent)" : "var(--t-fg)",
                            fontVariationSettings: "'WONK' 1",
                          }}
                        >
                          {price}
                        </span>
                        <span style={{ fontSize: "12px", color: "rgba(240, 234, 214, 0.4)", fontStyle: "italic" }}>
                          /{cycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {plan.features.map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "rgba(240, 234, 214, 0.6)" }}>
                    <svg viewBox="0 0 16 16" style={{ width: "8px", height: "8px", flexShrink: 0 }}>
                      <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent)" opacity="0.5" />
                    </svg>
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
                  fontSize: "12px",
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "12px 20px",
                  background: plan.highlighted ? "var(--t-accent)" : "transparent",
                  color: plan.highlighted ? "var(--t-bg)" : "var(--t-accent)",
                  border: `1px solid ${plan.highlighted ? "var(--t-accent)" : "rgba(124, 149, 107, 0.3)"}`,
                  borderRadius: "1.5rem 1rem 1.5rem 1rem",
                  transition: "all 0.4s ease",
                  fontFamily: "var(--font-body), Georgia, serif",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  if (plan.highlighted) {
                    el.style.boxShadow = "0 4px 20px rgba(124, 149, 107, 0.35)"
                  } else {
                    el.style.background = "rgba(124, 149, 107, 0.1)"
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = "none"
                  if (!plan.highlighted) el.style.background = "transparent"
                }}
              >
                {plan.cta}
              </Link>
            </motion.div>
          )
        })}
      </div>

      <p style={{ textAlign: "center", fontSize: "10px", color: "rgba(240, 234, 214, 0.2)", marginTop: "40px", fontStyle: "italic" }}>
        No contracts &middot; Cancel anytime &middot; Credits roll over
      </p>
    </section>
  )
}
