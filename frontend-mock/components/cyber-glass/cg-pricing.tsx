"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CgPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "120px 24px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", textShadow: "0 0 10px var(--t-accent)", marginBottom: "32px" }}>
            Network Access
          </h2>
          
          <div style={{ display: "inline-flex", background: "rgba(0, 240, 255, 0.05)", borderRadius: "12px", padding: "4px", border: "1px solid rgba(0, 240, 255, 0.2)", backdropFilter: "blur(10px)" }}>
            <button
              onClick={() => setCycle("monthly")}
              style={{
                padding: "12px 32px",
                borderRadius: "8px",
                background: cycle === "monthly" ? "var(--t-accent)" : "transparent",
                color: cycle === "monthly" ? "#000" : "var(--t-accent)",
                border: "none",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: cycle === "monthly" ? "0 0 20px rgba(0, 240, 255, 0.4)" : "none",
                transition: "all 0.2s"
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setCycle("yearly")}
              style={{
                padding: "12px 32px",
                borderRadius: "8px",
                background: cycle === "yearly" ? "var(--t-accent)" : "transparent",
                color: cycle === "yearly" ? "#000" : "var(--t-accent)",
                border: "none",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: cycle === "yearly" ? "0 0 20px rgba(0, 240, 255, 0.4)" : "none",
                transition: "all 0.2s"
              }}
            >
              Yearly (-20%)
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {PRICING_PLANS.map((plan) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const isHighlighted = plan.highlighted;

            return (
              <motion.div
                key={plan.tier}
                whileHover={{ y: -10, boxShadow: isHighlighted ? "0 20px 50px rgba(255, 0, 60, 0.2)" : "0 20px 50px rgba(0, 240, 255, 0.1)" }}
                style={{
                  background: isHighlighted ? "rgba(255, 0, 60, 0.05)" : "rgba(5, 2, 10, 0.4)",
                  border: "1px solid",
                  borderColor: isHighlighted ? "var(--t-pink)" : "rgba(0, 240, 255, 0.2)",
                  borderRadius: "24px",
                  padding: "48px 32px",
                  backdropFilter: "blur(24px)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: isHighlighted ? "0 0 30px rgba(255, 0, 60, 0.1)" : "0 0 30px rgba(0, 240, 255, 0.05)"
                }}
              >
                {isHighlighted && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--t-pink)", color: "#fff", fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 16px", borderRadius: "100px", boxShadow: "0 0 20px rgba(255, 0, 60, 0.5)" }}>
                    OPTIMAL NODE
                  </div>
                )}

                <h3 style={{ fontSize: "16px", fontWeight: 800, color: isHighlighted ? "var(--t-pink)" : "var(--t-accent)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {plan.tier}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(240, 240, 240, 0.5)", marginBottom: "32px", letterSpacing: "0.05em" }}>
                  {plan.photos} TX / CYCLE
                </p>

                <div style={{ fontSize: "56px", fontWeight: 800, color: "#fff", marginBottom: "32px", letterSpacing: "-0.04em", textShadow: isHighlighted ? "0 0 20px rgba(255, 0, 60, 0.3)" : "none" }}>
                  {price === 0 ? "FREE" : `$${price}`}
                </div>

                <div style={{ flex: 1, marginBottom: "48px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px", fontSize: "13px", color: "rgba(240, 240, 240, 0.8)", lineHeight: 1.5 }}>
                      <span style={{ color: isHighlighted ? "var(--t-pink)" : "var(--t-accent)", fontWeight: 800 }}>&gt;</span>
                      {f}
                    </div>
                  ))}
                </div>

                <Link
                  href="#"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "16px",
                    borderRadius: "12px",
                    background: isHighlighted ? "var(--t-pink)" : "rgba(0, 240, 255, 0.1)",
                    border: `1px solid ${isHighlighted ? "var(--t-pink)" : "var(--t-accent)"}`,
                    color: isHighlighted ? "#fff" : "var(--t-accent)",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    boxShadow: isHighlighted ? "0 0 20px rgba(255, 0, 60, 0.3)" : "none",
                    transition: "all 0.2s"
                  }}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
