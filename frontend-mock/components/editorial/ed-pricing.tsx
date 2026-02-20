"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { PRICING_PLANS } from "@/data/capabilities"

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export default function EdPricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section
      style={{
        background: "var(--t-bg)",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Three-part header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "56px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "var(--t-rule)" }} />
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
              whiteSpace: "nowrap",
            }}
          >
            Pricing
          </p>
          <div style={{ flex: 1, height: "1px", background: "var(--t-rule)" }} />
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            marginBottom: "56px",
          }}
        >
          <button
            onClick={() => setYearly(false)}
            style={{
              background: "none",
              border: "none",
              padding: "4px 0",
              cursor: "pointer",
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "13px",
              fontWeight: yearly ? 400 : 700,
              color: yearly ? "var(--t-muted)" : "var(--t-fg)",
              borderBottom: yearly ? "none" : "1px solid var(--t-fg)",
              marginRight: "24px",
              paddingBottom: "3px",
              transition: "color 0.25s ease, font-weight 0.15s",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            style={{
              background: "none",
              border: "none",
              padding: "4px 0",
              cursor: "pointer",
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "13px",
              fontWeight: yearly ? 700 : 400,
              color: yearly ? "var(--t-fg)" : "var(--t-muted)",
              borderBottom: yearly ? "1px solid var(--t-fg)" : "none",
              paddingBottom: "3px",
              transition: "color 0.25s ease, font-weight 0.15s",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Yearly
            <AnimatePresence>
              {yearly && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "var(--t-accent)",
                  }}
                >
                  Save 20%
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Pricing cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.tier} plan={plan} yearly={yearly} index={i} />
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: "11px",
            color: "var(--t-muted)",
            textAlign: "center",
            marginTop: "48px",
            lineHeight: 1.7,
          }}
        >
          All plans include a 14-day free trial. No credit card required.
          <br />
          Photos roll over for 90 days. Cancel or upgrade anytime.
        </motion.p>
      </div>
    </section>
  )
}

function PricingCard({
  plan,
  yearly,
  index,
}: {
  plan: (typeof PRICING_PLANS)[number]
  yearly: boolean
  index: number
}) {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice
  const [hovered, setHovered] = useState(false)

  const isHighlighted = plan.highlighted

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: isHighlighted
          ? `2px solid var(--t-accent)`
          : `1px solid ${hovered ? "var(--t-accent)" : "var(--t-rule)"}`,
        borderLeft: isHighlighted
          ? `4px solid var(--t-accent)`
          : `${hovered ? "3px" : "1px"} solid ${hovered ? "var(--t-accent)" : "var(--t-rule)"}`,
        background: "var(--t-bg)",
        padding: "36px 28px",
        boxShadow: hovered
          ? "0 4px 24px rgba(28,20,16,0.12)"
          : isHighlighted
          ? "0 2px 16px rgba(28,20,16,0.08)"
          : "none",
        transition:
          "border-color 0.3s ease, border-width 0.25s ease, box-shadow 0.3s ease",
        position: "relative",
      }}
    >
      {/* Featured badge */}
      {isHighlighted && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            right: "20px",
            background: "var(--t-accent)",
            padding: "4px 12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F7F4EF",
            }}
          >
            Most Popular
          </p>
        </div>
      )}

      {/* Plan name */}
      <p
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "20px",
          fontWeight: 600,
          color: "var(--t-fg)",
          marginBottom: "8px",
          letterSpacing: "-0.01em",
        }}
      >
        {plan.tier}
      </p>

      <p
        style={{
          fontFamily: "var(--font-body), Georgia, serif",
          fontSize: "12px",
          color: "var(--t-muted)",
          lineHeight: 1.6,
          marginBottom: "28px",
          minHeight: "40px",
        }}
      >
        {plan.description}
      </p>

      {/* Price */}
      <div style={{ marginBottom: "28px", minHeight: "72px", display: "flex", alignItems: "flex-end", gap: "4px" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={`${plan.tier}-${yearly}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1,
              color: "var(--t-fg)",
              letterSpacing: "-0.02em",
            }}
          >
            {price === 0 ? "Free" : `$${price.toLocaleString()}`}
          </motion.span>
        </AnimatePresence>
        {price > 0 && (
          <span
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "12px",
              color: "var(--t-muted)",
              paddingBottom: "10px",
            }}
          >
            / mo
          </span>
        )}
      </div>

      {/* Photos per month */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "28px",
          paddingBottom: "20px",
          borderBottom: "1px solid var(--t-rule)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "18px",
            fontWeight: 700,
            color: isHighlighted ? "var(--t-accent)" : "var(--t-fg)",
          }}
        >
          {plan.photos}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: "11px",
            color: "var(--t-muted)",
            letterSpacing: "0.04em",
          }}
        >
          photos / month
        </span>
      </div>

      {/* Feature list */}
      <ul
        style={{
          listStyle: "none",
          margin: "0 0 32px",
          padding: 0,
        }}
      >
        {plan.features.map((feat, fi) => (
          <li
            key={feat}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "10px 0",
              borderBottom:
                fi < plan.features.length - 1 ? "1px solid var(--t-rule)" : "none",
            }}
          >
            <Check
              size={12}
              strokeWidth={2.5}
              style={{
                color: "var(--t-accent)",
                minWidth: "12px",
                marginTop: "3px",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "12px",
                color: "var(--t-fg)",
                lineHeight: 1.5,
              }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <a
        href="#"
        style={{
          display: "block",
          textAlign: "center",
          fontFamily: "var(--font-body), Georgia, serif",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "14px 24px",
          background: isHighlighted ? "var(--t-accent)" : "transparent",
          color: isHighlighted ? "#F7F4EF" : "var(--t-accent)",
          border: "1px solid var(--t-accent)",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          if (!isHighlighted) {
            el.style.background = "var(--t-accent)"
            el.style.color = "#F7F4EF"
          } else {
            el.style.opacity = "0.88"
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          if (!isHighlighted) {
            el.style.background = "transparent"
            el.style.color = "var(--t-accent)"
          } else {
            el.style.opacity = "1"
          }
        }}
      >
        {plan.cta}
      </a>
    </motion.div>
  )
}
