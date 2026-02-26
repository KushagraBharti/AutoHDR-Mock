"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ChPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "80px 24px", fontFamily: "var(--font-mono)", borderTop: "1px solid var(--t-accent)", background: "rgba(3, 0, 8, 0.95)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", borderBottom: "1px solid var(--t-fg)", paddingBottom: "24px" }}>
          <div>
            <div style={{ fontSize: "12px", color: "var(--t-accent)", letterSpacing: "0.2em", marginBottom: "16px" }}>[ COMPUTE ALLOCATION ]</div>
            <h2 className="ch-glow" style={{ fontSize: "40px", color: "var(--t-fg)", margin: 0, textTransform: "uppercase" }}>Acquire Credits</h2>
          </div>
          
          <div style={{ display: "flex", border: "1px solid var(--t-fg)", padding: "4px" }}>
            <button
              onClick={() => setCycle("monthly")}
              style={{
                background: cycle === "monthly" ? "var(--t-fg)" : "transparent",
                color: cycle === "monthly" ? "var(--t-bg)" : "var(--t-fg)",
                border: "none",
                padding: "8px 16px",
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: cycle === "monthly" ? 800 : 400
              }}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setCycle("yearly")}
              style={{
                background: cycle === "yearly" ? "var(--t-fg)" : "transparent",
                color: cycle === "yearly" ? "var(--t-bg)" : "var(--t-fg)",
                border: "none",
                padding: "8px 16px",
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: cycle === "yearly" ? 800 : 400
              }}
            >
              YEARLY (SAVE 20%)
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
                whileHover={{ y: -5, boxShadow: isHighlighted ? "0 0 30px rgba(255, 0, 60, 0.4)" : "0 0 20px rgba(0, 255, 204, 0.2)" }}
                style={{
                  border: `1px solid ${isHighlighted ? "var(--t-accent)" : "rgba(0, 255, 204, 0.3)"}`,
                  background: isHighlighted ? "rgba(255, 0, 60, 0.05)" : "transparent",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                }}
              >
                {isHighlighted && (
                  <div style={{ position: "absolute", top: 0, right: 0, background: "var(--t-accent)", color: "#000", fontSize: "10px", padding: "4px 8px", fontWeight: 800 }}>
                    MAXIMUM YIELD
                  </div>
                )}
                
                <h3 style={{ fontSize: "18px", color: isHighlighted ? "var(--t-accent)" : "var(--t-fg)", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {plan.tier}
                </h3>
                
                <div style={{ fontSize: "48px", fontWeight: 800, color: "var(--t-fg)", marginBottom: "8px", textShadow: isHighlighted ? "0 0 10px var(--t-accent)" : "none" }}>
                  {price === 0 ? "FREE" : `$${price}`}
                </div>
                
                <div style={{ fontSize: "12px", color: "rgba(0, 255, 204, 0.6)", marginBottom: "24px" }}>
                  {plan.photos} CREDITS / {cycle === "monthly" ? "MO" : "YR"}
                </div>
                
                <div style={{ flex: 1, marginBottom: "32px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ fontSize: "12px", display: "flex", gap: "8px", marginBottom: "12px", color: "rgba(255, 255, 255, 0.7)" }}>
                      <span style={{ color: "var(--t-fg)" }}>&gt;</span> {f}
                    </div>
                  ))}
                </div>
                
                <button
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: isHighlighted ? "var(--t-accent)" : "transparent",
                    border: `1px solid ${isHighlighted ? "var(--t-accent)" : "var(--t-fg)"}`,
                    color: isHighlighted ? "#000" : "var(--t-fg)",
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    if (!isHighlighted) {
                      (e.currentTarget as HTMLElement).style.background = "var(--t-fg)";
                      (e.currentTarget as HTMLElement).style.color = "var(--t-bg)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isHighlighted) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "var(--t-fg)";
                    }
                  }}
                >
                  [ {plan.cta} ]
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
