"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PRICING_PLANS } from "@/data/capabilities"
import Link from "next/link"

type Cycle = "monthly" | "yearly"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const SPRING = { type: "spring" as const, stiffness: 300, damping: 24 }

interface AuPricingProps {
  standalone?: boolean
}

export default function AuPricing({ standalone = false }: AuPricingProps) {
  const [cycle, setCycle] = useState<Cycle>("monthly")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredCta, setHoveredCta] = useState<string | null>(null)

  return (
    <section
      style={{
        paddingTop: standalone ? "40px" : "120px",
        paddingBottom: "100px",
        background: "var(--t-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background aurora orbs */}
      <motion.div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
          bottom: "0%",
          left: "30%",
        }}
        animate={{
          x: ["0%", "5%", "-3%", "0%"],
          y: ["0%", "-8%", "4%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          top: "10%",
          right: "10%",
        }}
        animate={{
          x: ["0%", "-6%", "4%", "0%"],
          y: ["0%", "6%", "-4%", "0%"],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Section header */}
        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE }}
            style={{
              textAlign: "center",
              marginBottom: "48px",
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
              Pricing
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--t-fg)",
                margin: "0 0 16px",
              }}
            >
              Transparent{" "}
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
                Plans
              </span>
            </h2>
          </motion.div>
        )}

        {/* Billing toggle — glass capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "40px",
              padding: "4px",
              position: "relative",
              gap: "0",
            }}
          >
            {(["monthly", "yearly"] as Cycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: "13px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  padding: "10px 24px",
                  border: "none",
                  borderRadius: "36px",
                  background: "transparent",
                  color: cycle === c ? "var(--t-bg)" : "rgba(232,234,240,0.5)",
                  cursor: "pointer",
                  transition: "color 0.3s cubic-bezier(0.22,1,0.36,1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textTransform: "capitalize",
                }}
              >
                {cycle === c && (
                  <motion.div
                    layoutId="au-cycle-indicator"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal))",
                      borderRadius: "36px",
                      zIndex: -1,
                      boxShadow: "0 0 20px rgba(74,222,128,0.3)",
                    }}
                    transition={SPRING}
                  />
                )}
                {c}
                {c === "yearly" && (
                  <span
                    style={{
                      fontSize: "10px",
                      background: cycle === "yearly"
                        ? "rgba(0,0,0,0.2)"
                        : "rgba(74,222,128,0.15)",
                      color: cycle === "yearly" ? "var(--t-bg)" : "var(--t-accent)",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontWeight: 700,
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
            gap: "24px",
            alignItems: "start",
          }}
        >
          {PRICING_PLANS.map((plan, idx) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
            const isFeatured = plan.highlighted
            const isHovered = hoveredCard === plan.tier
            const isCtaHovered = hoveredCta === plan.tier

            return (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: EASE, delay: idx * 0.12 }}
                onMouseEnter={() => setHoveredCard(plan.tier)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: "relative",
                  background: isFeatured
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: isFeatured
                    ? "1px solid rgba(74,222,128,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: isFeatured
                    ? "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(74,222,128,0.1)"
                    : "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.2)",
                  transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                {/* Iridescent top strip for featured card */}
                {isFeatured && (
                  <div
                    style={{
                      height: "2px",
                      background: "linear-gradient(90deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue), var(--t-accent2), var(--t-aurora-pink), var(--t-accent))",
                      backgroundSize: "200% 100%",
                      animation: "au-iridescent 4s ease infinite",
                    }}
                  />
                )}

                {/* Card body */}
                <div
                  style={{
                    padding: "36px 32px 28px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Plan label + badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "var(--font-body), sans-serif",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: isFeatured ? "var(--t-accent)" : "rgba(232,234,240,0.5)",
                      }}
                    >
                      {plan.tier}
                    </span>
                    {isFeatured && (
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "var(--font-body), sans-serif",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          padding: "3px 12px",
                          borderRadius: "20px",
                          background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue))",
                          backgroundSize: "200% 200%",
                          animation: "au-iridescent 3s ease infinite",
                          color: "var(--t-bg)",
                        }}
                      >
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Plan name */}
                  <div
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "24px",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
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
                          fontSize: "18px",
                          fontFamily: "var(--font-display), sans-serif",
                          fontWeight: 400,
                          color: "rgba(232,234,240,0.4)",
                          marginTop: "8px",
                        }}
                      >
                        $
                      </span>
                    )}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${price}-${cycle}`}
                        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                        transition={{ duration: 0.3, ease: EASE }}
                        style={{
                          fontFamily: "var(--font-display), sans-serif",
                          fontSize: "clamp(40px, 5vw, 60px)",
                          fontWeight: 700,
                          lineHeight: 1,
                          letterSpacing: "-0.02em",
                          color: price === 0
                            ? "var(--t-accent)"
                            : "var(--t-fg)",
                          textShadow: price === 0
                            ? "0 0 20px rgba(74,222,128,0.3)"
                            : "none",
                          display: "block",
                        }}
                      >
                        {price === 0 ? "Free" : price.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Photos/month */}
                  <p
                    style={{
                      fontSize: "13px",
                      fontFamily: "var(--font-body), sans-serif",
                      fontWeight: 400,
                      color: "rgba(232,234,240,0.4)",
                      marginBottom: "8px",
                    }}
                  >
                    {price > 0 ? "per month" : "forever"} · {plan.photos} photos/mo
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-body), sans-serif",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: "rgba(232,234,240,0.4)",
                      marginBottom: "28px",
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Separator */}
                  <div
                    style={{
                      height: "1px",
                      background: isFeatured
                        ? "linear-gradient(90deg, transparent, rgba(74,222,128,0.2), transparent)"
                        : "rgba(255,255,255,0.06)",
                      marginBottom: "24px",
                    }}
                  />

                  {/* Feature list */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      marginBottom: "32px",
                    }}
                  >
                    {plan.features.map((feature, fi) => (
                      <div
                        key={fi}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "13px",
                          fontFamily: "var(--font-body), sans-serif",
                          fontWeight: 400,
                          color: "rgba(232,234,240,0.7)",
                          lineHeight: 1.5,
                        }}
                      >
                        {/* Aurora-colored filled circle checkmark */}
                        <span
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: isFeatured
                              ? "linear-gradient(135deg, rgba(74,222,128,0.2), rgba(45,212,191,0.15))"
                              : "rgba(255,255,255,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            fontSize: "10px",
                            color: isFeatured ? "var(--t-accent)" : "rgba(232,234,240,0.4)",
                            marginTop: "1px",
                          }}
                        >
                          ✓
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={plan.tier === "Enterprise" ? "#" : "/aurora/pricing"}
                    onMouseEnter={() => setHoveredCta(plan.tier)}
                    onMouseLeave={() => setHoveredCta(null)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "var(--font-body), sans-serif",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      textDecoration: "none",
                      padding: "14px 20px",
                      borderRadius: "40px",
                      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                      ...(isFeatured
                        ? {
                            background: isCtaHovered
                              ? "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue))"
                              : "var(--t-accent)",
                            color: "var(--t-bg)",
                            boxShadow: isCtaHovered
                              ? "0 0 30px rgba(74,222,128,0.5), 0 0 80px rgba(74,222,128,0.2)"
                              : "0 0 20px rgba(74,222,128,0.25)",
                          }
                        : {
                            background: isCtaHovered
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(255,255,255,0.04)",
                            color: "var(--t-fg)",
                            border: isCtaHovered
                              ? "1px solid rgba(255,255,255,0.2)"
                              : "1px solid rgba(255,255,255,0.1)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                          }),
                    }}
                  >
                    {plan.cta}
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
          transition={{ duration: 1.0, ease: EASE, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            marginTop: "56px",
          }}
        >
          {["No Contracts", "Cancel Anytime", "Credits Roll Over", "USD Pricing"].map((note) => (
            <span
              key={note}
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 400,
                color: "rgba(232,234,240,0.4)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--t-accent)",
                  boxShadow: "0 0 6px rgba(74,222,128,0.4)",
                  display: "inline-block",
                }}
              />
              {note}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
