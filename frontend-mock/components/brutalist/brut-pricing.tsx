"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PRICING_PLANS } from "@/data/capabilities"
import Link from "next/link"

type Cycle = "monthly" | "yearly"

const STEP_TRANSITION = { duration: 0.1, ease: [1, 0, 0, 1] as [number, number, number, number] }

interface BrutPricingProps {
  standalone?: boolean
}

export default function BrutPricing({ standalone = false }: BrutPricingProps) {
  const [cycle, setCycle] = useState<Cycle>("monthly")

  return (
    <section
      style={{
        fontFamily: "var(--font-mono), monospace",
        paddingTop: standalone ? "0px" : "0px",
        paddingBottom: standalone ? "0px" : "0px",
      }}
    >
      {/* Section header */}
      <div
        style={{
          borderBottom: "1px solid var(--t-fg)",
          borderTop: standalone ? "none" : "2px solid var(--t-fg)",
          padding: "24px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
            }}
          >
            — 004 — PRICING
          </span>
          <div style={{ width: "1px", height: "16px", background: "var(--t-muted)", opacity: 0.3 }} />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            TRANSPARENT PLANS
          </span>
        </div>

        {/* Billing toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
          <button
            onClick={() => setCycle("monthly")}
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "8px 16px",
              border: "1px solid var(--t-fg)",
              borderRight: "none",
              background: cycle === "monthly" ? "var(--t-fg)" : "transparent",
              color: cycle === "monthly" ? "var(--t-bg)" : "var(--t-fg)",
              transition: "all 0.05s steps(1)",
              cursor: "crosshair",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            MONTHLY
          </button>
          <button
            onClick={() => setCycle("yearly")}
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "8px 16px",
              border: "1px solid var(--t-fg)",
              background: cycle === "yearly" ? "var(--t-fg)" : "transparent",
              color: cycle === "yearly" ? "var(--t-bg)" : "var(--t-fg)",
              transition: "all 0.05s steps(1)",
              cursor: "crosshair",
              fontFamily: "var(--font-mono), monospace",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            YEARLY
            {cycle === "yearly" && (
              <span
                style={{
                  background: "var(--t-accent)",
                  color: "var(--t-fg)",
                  padding: "2px 6px",
                  fontSize: "8px",
                  letterSpacing: "0.1em",
                  fontWeight: 800,
                }}
              >
                SAVE 20%
              </span>
            )}
          </button>
          {cycle === "monthly" && (
            <div
              style={{
                padding: "8px 10px",
                border: "1px solid var(--t-fg)",
                borderLeft: "none",
                fontSize: "8px",
                letterSpacing: "0.1em",
                fontWeight: 800,
                color: "var(--t-muted)",
                opacity: 0.5,
                userSelect: "none",
              }}
            >
              SAVE 20%
            </div>
          )}
        </div>
      </div>

      {/* Plans grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border: "2px solid var(--t-fg)",
          margin: "32px 40px",
        }}
      >
        {PRICING_PLANS.map((plan, i) => {
          const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
          const isHighlighted = plan.highlighted

          return (
            <div
              key={plan.tier}
              style={{
                borderRight: i < PRICING_PLANS.length - 1 ? "1px solid var(--t-fg)" : "none",
                background: isHighlighted ? "var(--t-fg)" : "transparent",
                color: isHighlighted ? "var(--t-bg)" : "var(--t-fg)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Plan header */}
              <div
                style={{
                  padding: "28px 28px 20px",
                  borderBottom: `1px solid ${isHighlighted ? "rgba(243,243,238,0.15)" : "var(--t-fg)"}`,
                }}
              >
                {/* Tier badge */}
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      background: isHighlighted ? "var(--t-accent)" : "transparent",
                      color: isHighlighted ? "var(--t-fg)" : "var(--t-muted)",
                      padding: isHighlighted ? "2px 6px" : "0",
                    }}
                  >
                    {plan.tier.toUpperCase()}
                  </span>
                  {isHighlighted && (
                    <span
                      style={{
                        fontSize: "8px",
                        letterSpacing: "0.15em",
                        color: "rgba(243,243,238,0.5)",
                      }}
                    >
                      MOST POPULAR
                    </span>
                  )}
                </div>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "4px",
                    marginBottom: "12px",
                  }}
                >
                  {price > 0 && (
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        marginTop: "8px",
                        color: isHighlighted ? "rgba(243,243,238,0.6)" : "var(--t-muted)",
                      }}
                    >
                      $
                    </span>
                  )}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${price}-${cycle}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={STEP_TRANSITION}
                      style={{
                        fontSize: "clamp(40px, 5vw, 64px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        display: "block",
                      }}
                    >
                      {price === 0 ? "FREE" : price.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {price > 0 && (
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isHighlighted ? "rgba(243,243,238,0.5)" : "var(--t-muted)",
                      marginBottom: "12px",
                    }}
                  >
                    PER MONTH · {plan.photos} PHOTOS
                  </div>
                )}
                {price === 0 && (
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isHighlighted ? "rgba(243,243,238,0.5)" : "var(--t-muted)",
                      marginBottom: "12px",
                    }}
                  >
                    FOREVER · {plan.photos} PHOTOS / MO
                  </div>
                )}

                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: 1.6,
                    color: isHighlighted ? "rgba(243,243,238,0.6)" : "var(--t-muted)",
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Feature list */}
              <div style={{ flex: 1 }}>
                {plan.features.map((feature, fi) => (
                  <div
                    key={fi}
                    style={{
                      padding: "10px 28px",
                      fontSize: "11px",
                      letterSpacing: "0.05em",
                      borderBottom: `1px solid ${isHighlighted ? "rgba(243,243,238,0.1)" : "rgba(10,10,8,0.08)"}`,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: isHighlighted ? "var(--t-bg)" : "var(--t-fg)",
                    }}
                  >
                    <span
                      style={{
                        color: isHighlighted ? "var(--t-accent)" : "var(--t-muted)",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ padding: "24px 28px" }}>
                <Link
                  href={plan.tier === "Enterprise" ? "#" : "/brutalist/pricing"}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "14px 20px",
                    transition: "all 0.05s steps(1)",
                    fontFamily: "var(--font-mono), monospace",
                    ...(isHighlighted
                      ? {
                          background: "var(--t-accent)",
                          color: "var(--t-fg)",
                          border: "2px solid var(--t-accent)",
                        }
                      : {
                          background: "transparent",
                          color: isHighlighted ? "var(--t-bg)" : "var(--t-fg)",
                          border: `2px solid ${isHighlighted ? "rgba(243,243,238,0.4)" : "var(--t-fg)"}`,
                        }),
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    if (isHighlighted) {
                      el.style.background = "var(--t-bg)"
                      el.style.color = "var(--t-fg)"
                      el.style.borderColor = "var(--t-bg)"
                    } else {
                      el.style.background = "var(--t-fg)"
                      el.style.color = "var(--t-bg)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    if (isHighlighted) {
                      el.style.background = "var(--t-accent)"
                      el.style.color = "var(--t-fg)"
                      el.style.borderColor = "var(--t-accent)"
                    } else {
                      el.style.background = "transparent"
                      el.style.color = "var(--t-fg)"
                      el.style.borderColor = "var(--t-fg)"
                    }
                  }}
                >
                  [ {plan.cta.toUpperCase()} ]
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer note */}
      <div
        style={{
          padding: "0 40px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        {["NO CONTRACTS", "CANCEL ANYTIME", "CREDITS ROLL OVER", "USD PRICING"].map((note) => (
          <span
            key={note}
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "var(--t-fg)", fontWeight: 700 }}>·</span>
            {note}
          </span>
        ))}
      </div>
    </section>
  )
}
