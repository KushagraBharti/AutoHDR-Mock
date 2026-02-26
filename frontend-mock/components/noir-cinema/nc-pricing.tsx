"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PRICING_PLANS } from "@/data/capabilities"
import Link from "next/link"

type Cycle = "monthly" | "yearly"

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]
const SPRING = { type: "spring" as const, stiffness: 300, damping: 20 }

interface NcPricingProps {
  standalone?: boolean
}

export default function NcPricing({ standalone = false }: NcPricingProps) {
  const [cycle, setCycle] = useState<Cycle>("monthly")
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredCta, setHoveredCta] = useState<string | null>(null)

  return (
    <section
      style={{
        paddingTop: standalone ? "60px" : "100px",
        paddingBottom: "80px",
        background: "var(--t-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Venetian blind shadow overlay at reduced opacity */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(25deg, transparent 0px, transparent 25px, rgba(0,0,0,0.15) 25px, rgba(0,0,0,0.15) 60px)",
          opacity: 0.12,
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
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          {!standalone && (
            <>
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
                Pricing
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display), 'Bodoni MT', serif",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "var(--t-fg)",
                  margin: "0 0 24px",
                }}
              >
                Transparent
                <br />
                <span style={{ color: "var(--t-accent)", fontStyle: "italic" }}>
                  Plans
                </span>
              </h2>
            </>
          )}

          {/* Billing toggle */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid var(--t-muted)",
              borderRadius: 0,
              background: "var(--t-surface)",
              padding: "4px",
              position: "relative",
              gap: "0",
              marginTop: standalone ? "0" : "8px",
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
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontWeight: 500,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  padding: "10px 22px",
                  border: "none",
                  borderRadius: 0,
                  background: "transparent",
                  color: cycle === c ? "#ffffff" : "var(--t-mid-gray)",
                  cursor: "pointer",
                  transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {cycle === c && (
                  <motion.div
                    layoutId="nc-cycle-indicator"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "var(--t-accent)",
                      borderRadius: 0,
                      zIndex: -1,
                    }}
                    transition={SPRING}
                  />
                )}
                {c === "monthly" ? "Monthly" : "Yearly"}
                {c === "yearly" && (
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      background:
                        cycle === "yearly"
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(196,30,42,0.2)",
                      color:
                        cycle === "yearly" ? "#ffffff" : "var(--t-accent)",
                      padding: "2px 6px",
                      letterSpacing: "1px",
                      borderRadius: 0,
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
            gap: "0",
            alignItems: "stretch",
          }}
        >
          {PRICING_PLANS.map((plan, idx) => {
            const price =
              cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
            const isFeatured = plan.highlighted
            const isHovered = hoveredCard === plan.tier
            const isCtaHovered = hoveredCta === plan.tier

            return (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.12 }}
                style={{
                  border: isFeatured
                    ? "1px solid var(--t-accent)"
                    : "1px solid rgba(229,229,229,0.1)",
                  borderRadius: 0,
                  background: `linear-gradient(180deg, var(--t-bg) 0%, var(--t-surface) 100%)`,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                  // Collapse borders between cards
                  marginLeft: idx > 0 ? "-1px" : "0",
                }}
                onMouseEnter={() => setHoveredCard(plan.tier)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Red diagonal ribbon for POPULAR */}
                {isFeatured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "120px",
                      height: "120px",
                      overflow: "hidden",
                      zIndex: 5,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "18px",
                        right: "-32px",
                        width: "160px",
                        background: "var(--t-accent)",
                        color: "#ffffff",
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        textAlign: "center",
                        padding: "4px 0",
                        transform: "rotate(45deg)",
                        transformOrigin: "center",
                        borderRadius: 0,
                      }}
                    >
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Card body */}
                <div
                  style={{
                    padding: "40px 32px 28px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Tier label */}
                  <div
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontWeight: 400,
                      letterSpacing: "5px",
                      textTransform: "uppercase",
                      color: isFeatured ? "var(--t-accent)" : "var(--t-mid-gray)",
                      marginBottom: "8px",
                    }}
                  >
                    {plan.tier}
                  </div>

                  {/* Plan name (large) */}
                  <div
                    style={{
                      fontFamily: "var(--font-display), 'Bodoni MT', serif",
                      fontSize: "28px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--t-fg)",
                      marginBottom: "16px",
                    }}
                  >
                    {plan.tier}
                  </div>

                  {/* Price: Bodoni Moda 900, huge, dollar sign in red */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "2px",
                      marginBottom: "8px",
                    }}
                  >
                    {price > 0 && (
                      <span
                        style={{
                          fontSize: "24px",
                          fontFamily: "var(--font-display), 'Bodoni MT', serif",
                          fontWeight: 900,
                          color: "var(--t-accent)",
                          marginTop: "10px",
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
                          fontFamily: "var(--font-display), 'Bodoni MT', serif",
                          fontSize: "clamp(48px, 6vw, 72px)",
                          fontWeight: 900,
                          lineHeight: 1,
                          letterSpacing: "-0.02em",
                          color: "var(--t-fg)",
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
                      fontSize: "12px",
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontWeight: 300,
                      fontStyle: "italic",
                      letterSpacing: "1px",
                      color: "var(--t-mid-gray)",
                      marginBottom: "8px",
                    }}
                  >
                    {price > 0 ? "per month" : "forever"} &middot; {plan.photos} photos/mo
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "13px",
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: "var(--t-mid-gray)",
                      marginBottom: "28px",
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Separator */}
                  <div
                    style={{
                      height: "1px",
                      background: "var(--t-muted)",
                      marginBottom: "24px",
                    }}
                  />

                  {/* Feature list with red em-dash bullets */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
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
                          fontFamily: "var(--font-body), Georgia, serif",
                          fontWeight: 400,
                          color: "var(--t-silver)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--t-accent)",
                            flexShrink: 0,
                            fontSize: "13px",
                            fontWeight: 400,
                          }}
                        >
                          &mdash;
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
                        : "/noir-cinema/pricing"
                    }
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "12px",
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontWeight: 500,
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "16px 24px",
                      borderRadius: 0,
                      transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                      ...(isFeatured
                        ? {
                            background: isCtaHovered ? "var(--t-accent2)" : "var(--t-accent)",
                            color: "#ffffff",
                            border: "1px solid var(--t-accent)",
                          }
                        : {
                            background: isCtaHovered ? "rgba(229,229,229,0.05)" : "transparent",
                            color: "var(--t-fg)",
                            border: "1px solid rgba(229,229,229,0.2)",
                          }),
                    }}
                    onMouseEnter={() => setHoveredCta(plan.tier)}
                    onMouseLeave={() => setHoveredCta(null)}
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
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            marginTop: "48px",
          }}
        >
          {["No Contracts", "Cancel Anytime", "Credits Roll Over", "USD Pricing"].map((note) => (
            <span
              key={note}
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--t-mid-gray)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "var(--t-accent)" }}>&mdash;</span>
              {note}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
