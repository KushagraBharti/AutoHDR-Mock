"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { PRICING_PLANS } from "@/data/capabilities"

type Cycle = "monthly" | "yearly"

const EASE_DECO = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export default function AdPricing() {
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
      {/* Subtle gold radial glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(212, 168, 67, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "16px",
        }}
      >
        <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "var(--t-accent)", opacity: 0.2 }} />
        <span
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--t-fg)",
          }}
        >
          Pricing
        </span>
        <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "var(--t-accent)", opacity: 0.2 }} />
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "13px",
          fontStyle: "italic",
          color: "rgba(245, 240, 232, 0.45)",
          marginBottom: "40px",
          fontWeight: 300,
        }}
      >
        Transparent plans for every studio size
      </p>

      {/* Billing toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          marginBottom: "56px",
        }}
      >
        {(["monthly", "yearly"] as Cycle[]).map((c) => (
          <button
            key={c}
            onClick={() => setCycle(c)}
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "10px 24px",
              background: cycle === c ? "rgba(212, 168, 67, 0.12)" : "transparent",
              color: cycle === c ? "var(--t-accent)" : "rgba(245, 240, 232, 0.4)",
              border: `1px solid ${cycle === c ? "var(--t-accent)" : "rgba(212, 168, 67, 0.15)"}`,
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "var(--font-body), Georgia, serif",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Pricing cards */}
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
              transition={{ duration: 0.8, ease: EASE_DECO, delay: index * 0.12 }}
              style={{
                border: plan.highlighted
                  ? "2px solid var(--t-accent)"
                  : "1px solid rgba(212, 168, 67, 0.15)",
                padding: plan.highlighted ? "40px 32px" : "36px 28px",
                position: "relative",
                background: plan.highlighted ? "rgba(212, 168, 67, 0.04)" : "transparent",
                boxShadow: plan.highlighted ? "0 0 60px rgba(212, 168, 67, 0.08)" : "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "var(--t-accent)"
                if (!plan.highlighted) el.style.background = "rgba(212, 168, 67, 0.02)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = plan.highlighted ? "var(--t-accent)" : "rgba(212, 168, 67, 0.15)"
                if (!plan.highlighted) el.style.background = "transparent"
              }}
            >
              {/* Art deco corner ornaments */}
              {[
                { top: "-1px", left: "-1px", borderTop: "2px solid var(--t-accent)", borderLeft: "2px solid var(--t-accent)" },
                { top: "-1px", right: "-1px", borderTop: "2px solid var(--t-accent)", borderRight: "2px solid var(--t-accent)" },
                { bottom: "-1px", left: "-1px", borderBottom: "2px solid var(--t-accent)", borderLeft: "2px solid var(--t-accent)" },
                { bottom: "-1px", right: "-1px", borderBottom: "2px solid var(--t-accent)", borderRight: "2px solid var(--t-accent)" },
              ].map((cornerStyle, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    zIndex: 2,
                    opacity: plan.highlighted ? 0.7 : 0.3,
                    ...cornerStyle,
                  }}
                />
              ))}

              {/* Most Popular badge */}
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    background: "var(--t-accent)",
                    color: "var(--t-bg)",
                    fontSize: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "4px 16px",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Tier name */}
              <div
                style={{
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontFamily: "var(--font-display), serif",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: plan.highlighted ? "var(--t-accent)" : "var(--t-fg)",
                  marginBottom: "8px",
                }}
              >
                {plan.tier}
              </div>

              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "italic",
                  color: "rgba(245, 240, 232, 0.4)",
                  marginBottom: "24px",
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: "28px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${plan.tier}-${cycle}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: EASE_DECO }}
                    style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
                  >
                    {price === 0 ? (
                      <span
                        style={{
                          fontSize: "clamp(36px, 4vw, 48px)",
                          fontFamily: "var(--font-display), serif",
                          fontWeight: 400,
                          color: "var(--t-fg)",
                        }}
                      >
                        Free
                      </span>
                    ) : (
                      <>
                        <span
                          style={{
                            fontSize: "16px",
                            fontFamily: "var(--font-display), serif",
                            color: "var(--t-accent)",
                            opacity: 0.6,
                          }}
                        >
                          $
                        </span>
                        <span
                          style={{
                            fontSize: "clamp(36px, 4vw, 48px)",
                            fontFamily: "var(--font-display), serif",
                            fontWeight: 400,
                            color: plan.highlighted ? "var(--t-accent)" : "var(--t-fg)",
                          }}
                        >
                          {price}
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "rgba(245, 240, 232, 0.4)",
                            fontStyle: "italic",
                          }}
                        >
                          /{cycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Feature list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                {plan.features.map((feat) => (
                  <div
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "12px",
                      color: "rgba(245, 240, 232, 0.65)",
                      lineHeight: 1.4,
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        background: "var(--t-accent)",
                        transform: "rotate(45deg)",
                        flexShrink: 0,
                        opacity: 0.6,
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
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "14px 24px",
                  background: plan.highlighted ? "var(--t-accent)" : "transparent",
                  color: plan.highlighted ? "var(--t-bg)" : "var(--t-accent)",
                  border: "1px solid var(--t-accent)",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-body), Georgia, serif",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  if (plan.highlighted) {
                    el.style.boxShadow = "0 0 30px rgba(212, 168, 67, 0.4)"
                  } else {
                    el.style.background = "rgba(212, 168, 67, 0.1)"
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

      {/* Trust note */}
      <p
        style={{
          textAlign: "center",
          fontSize: "9px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(245, 240, 232, 0.25)",
          marginTop: "48px",
        }}
      >
        No Contracts &nbsp;&#9670;&nbsp; Cancel Anytime &nbsp;&#9670;&nbsp; Credits Roll Over &nbsp;&#9670;&nbsp; USD Pricing
      </p>
    </section>
  )
}
