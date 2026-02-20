"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PRICING_PLANS } from "@/data/capabilities"
import Link from "next/link"

type Cycle = "monthly" | "yearly"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const SPRING = { type: "spring" as const, stiffness: 300, damping: 20 }

interface NNPricingProps {
  standalone?: boolean
}

export default function NNPricing({ standalone = false }: NNPricingProps) {
  const [cycle, setCycle] = useState<Cycle>("monthly")

  return (
    <section
      style={{
        clipPath: standalone
          ? "none"
          : "polygon(0 60px, 100% 0, 100% 100%, 0 100%)",
        marginTop: standalone ? "0" : "-60px",
        paddingTop: standalone ? "60px" : "100px",
        paddingBottom: "80px",
        background: "var(--t-bg)",
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
            linear-gradient(rgba(255,45,120,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,120,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ambient glow bottom-center */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse at bottom, rgba(255,45,120,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            textAlign: "center",
            marginBottom: "56px",
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
            ◆ 004 — PRICING
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), Impact, sans-serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: 0.9,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--t-fg)",
              margin: "0 0 20px",
            }}
          >
            TRANSPARENT
            <br />
            <span
              style={{
                color: "var(--t-pink)",
                textShadow: "0 0 16px rgba(255,45,120,0.5)",
              }}
            >
              PLANS
            </span>
          </h2>

          {/* Billing toggle — neon pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid rgba(255,45,120,0.3)",
              background: "var(--t-surface)",
              padding: "4px",
              position: "relative",
              gap: "0",
              marginTop: "8px",
            }}
          >
            {(["monthly", "yearly"] as Cycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: "11px",
                  fontFamily: "var(--font-mono), monospace",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "9px 20px",
                  border: "none",
                  background: "transparent",
                  color: cycle === c ? "#07010F" : "var(--t-muted)",
                  cursor: "pointer",
                  transition: "color 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {cycle === c && (
                  <motion.div
                    layoutId="nn-cycle-indicator"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "var(--t-pink)",
                      boxShadow: "var(--t-glow-pink)",
                      zIndex: -1,
                    }}
                    transition={SPRING}
                  />
                )}
                {c.toUpperCase()}
                {c === "yearly" && (
                  <span
                    style={{
                      fontSize: "9px",
                      background:
                        cycle === "yearly"
                          ? "rgba(0,0,0,0.25)"
                          : "rgba(255,45,120,0.15)",
                      color:
                        cycle === "yearly" ? "#07010F" : "var(--t-pink)",
                      padding: "2px 6px",
                      letterSpacing: "0.1em",
                      fontWeight: 800,
                    }}
                  >
                    -20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {PRICING_PLANS.map((plan, idx) => {
            const price =
              cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
            const isFeatured = plan.highlighted
            const isEnterprise = plan.tier === "Enterprise"

            const cardBorder = isFeatured
              ? "1px solid var(--t-pink)"
              : isEnterprise
              ? "1px solid var(--t-cyan)"
              : "1px solid rgba(255,255,255,0.08)"

            const cardShadow = isFeatured
              ? "var(--t-glow-pink)"
              : isEnterprise
              ? "0 0 20px rgba(0,240,255,0.15), 0 0 60px rgba(0,240,255,0.05)"
              : "none"

            return (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                // @ts-ignore — framer-motion allows animate with arrays
                animate={
                  isFeatured
                    ? {
                        boxShadow: [
                          "0 0 20px rgba(255,45,120,0.3)",
                          "0 0 40px rgba(255,45,120,0.6)",
                          "0 0 20px rgba(255,45,120,0.3)",
                        ],
                      }
                    : {}
                }
                // @ts-ignore
                transition={
                  isFeatured
                    ? { boxShadow: { duration: 2, repeat: Infinity } }
                    : SPRING
                }
                style={{
                  border: cardBorder,
                  boxShadow: isFeatured ? undefined : cardShadow,
                  background: isFeatured ? "var(--t-surface2)" : "var(--t-surface)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Featured holographic header strip */}
                {isFeatured && (
                  <div
                    style={{
                      height: "3px",
                      background:
                        "linear-gradient(90deg, var(--t-pink), var(--t-cyan), var(--t-gold), var(--t-pink))",
                      backgroundSize: "200% 100%",
                    }}
                  />
                )}

                {/* Enterprise cyan header strip */}
                {isEnterprise && (
                  <div
                    style={{
                      height: "3px",
                      background:
                        "linear-gradient(90deg, transparent, var(--t-cyan), transparent)",
                      opacity: 0.7,
                    }}
                  />
                )}

                {/* Card body */}
                <div
                  style={{ padding: "32px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}
                >
                  {/* Plan label + badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontFamily: "var(--font-mono), monospace",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: isFeatured
                          ? "var(--t-pink)"
                          : isEnterprise
                          ? "var(--t-cyan)"
                          : "var(--t-muted)",
                        textShadow: isFeatured
                          ? "0 0 8px rgba(255,45,120,0.4)"
                          : isEnterprise
                          ? "0 0 8px rgba(0,240,255,0.3)"
                          : "none",
                      }}
                    >
                      {plan.tier.toUpperCase()}
                    </span>
                    {isFeatured && (
                      <span
                        style={{
                          fontSize: "9px",
                          fontFamily: "var(--font-mono), monospace",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          padding: "2px 8px",
                          border: "1px solid var(--t-pink)",
                          color: "var(--t-pink)",
                          boxShadow: "0 0 6px rgba(255,45,120,0.3)",
                        }}
                      >
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Plan name */}
                  <div
                    style={{
                      fontFamily: "var(--font-display), Impact, sans-serif",
                      fontSize: "28px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--t-fg)",
                      marginBottom: "8px",
                    }}
                  >
                    {plan.tier}
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    {price > 0 && (
                      <span
                        style={{
                          fontSize: "22px",
                          fontFamily: "var(--font-display), Impact, sans-serif",
                          color: isFeatured
                            ? "rgba(255,45,120,0.7)"
                            : "rgba(240,230,255,0.5)",
                          marginTop: "8px",
                        }}
                      >
                        $
                      </span>
                    )}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${price}-${cycle}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        style={{
                          fontFamily: "var(--font-display), Impact, sans-serif",
                          fontSize: "clamp(48px, 6vw, 72px)",
                          lineHeight: 1,
                          letterSpacing: "0.02em",
                          color: isFeatured
                            ? "var(--t-pink)"
                            : "var(--t-fg)",
                          textShadow: isFeatured
                            ? "0 0 20px rgba(255,45,120,0.4)"
                            : "none",
                          display: "block",
                        }}
                      >
                        {price === 0 ? "FREE" : price.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Photos/month */}
                  <p
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--font-mono), monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--t-muted)",
                      marginBottom: "8px",
                    }}
                  >
                    {price > 0 ? "PER MONTH" : "FOREVER"} · {plan.photos} PHOTOS/MO
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--font-mono), monospace",
                      lineHeight: 1.6,
                      color: "var(--t-muted)",
                      marginBottom: "24px",
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Separator */}
                  <div
                    style={{
                      height: "1px",
                      background: isFeatured
                        ? "rgba(255,45,120,0.2)"
                        : isEnterprise
                        ? "rgba(0,240,255,0.15)"
                        : "rgba(255,255,255,0.06)",
                      marginBottom: "20px",
                    }}
                  />

                  {/* Feature list — terminal style */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginBottom: "28px",
                    }}
                  >
                    {plan.features.map((feature, fi) => (
                      <div
                        key={fi}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "12px",
                          fontFamily: "var(--font-mono), monospace",
                          color: "var(--t-fg)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: isFeatured
                              ? "var(--t-pink)"
                              : isEnterprise
                              ? "var(--t-cyan)"
                              : "var(--t-muted)",
                            flexShrink: 0,
                            fontSize: "12px",
                            textShadow: isFeatured
                              ? "0 0 6px rgba(255,45,120,0.4)"
                              : "none",
                          }}
                        >
                          &gt;
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={
                      plan.tier === "Enterprise"
                        ? "#"
                        : "/neon-noir/pricing"
                    }
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono), monospace",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "14px 20px",
                      transition: "all 0.2s ease",
                      ...(isFeatured
                        ? {
                            background: "var(--t-pink)",
                            color: "#07010F",
                            boxShadow: "var(--t-glow-pink)",
                          }
                        : isEnterprise
                        ? {
                            background: "var(--t-cyan)",
                            color: "#07010F",
                            boxShadow: "var(--t-glow-cyan)",
                          }
                        : {
                            background: "transparent",
                            color: "var(--t-fg)",
                            border: "1px solid rgba(255,255,255,0.15)",
                          }),
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      if (isFeatured) {
                        el.style.boxShadow =
                          "0 0 30px rgba(255,45,120,0.7), 0 0 80px rgba(255,45,120,0.25)"
                      } else if (isEnterprise) {
                        el.style.boxShadow =
                          "0 0 30px rgba(0,240,255,0.7), 0 0 80px rgba(0,240,255,0.2)"
                      } else {
                        el.style.background = "rgba(255,255,255,0.06)"
                        el.style.borderColor = "rgba(255,255,255,0.25)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      if (isFeatured) {
                        el.style.boxShadow = "var(--t-glow-pink)"
                      } else if (isEnterprise) {
                        el.style.boxShadow = "var(--t-glow-cyan)"
                      } else {
                        el.style.background = "transparent"
                        el.style.borderColor = "rgba(255,255,255,0.15)"
                      }
                    }}
                  >
                    [ {plan.cta.toUpperCase()} ]
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom trust notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            marginTop: "48px",
          }}
        >
          {["NO CONTRACTS", "CANCEL ANYTIME", "CREDITS ROLL OVER", "USD PRICING"].map((note) => (
            <span
              key={note}
              style={{
                fontSize: "10px",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--t-muted)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  color: "var(--t-pink)",
                  textShadow: "0 0 6px rgba(255,45,120,0.4)",
                }}
              >
                ◆
              </span>
              {note}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
