"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AhPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "120px 24px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", marginBottom: "32px" }}>
            Select Your Frequency
          </h2>
          
          <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.05)", borderRadius: "100px", padding: "6px", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
            <button
              onClick={() => setCycle("monthly")}
              style={{
                padding: "12px 32px",
                borderRadius: "100px",
                background: cycle === "monthly" ? "rgba(255,255,255,0.15)" : "transparent",
                color: cycle === "monthly" ? "#fff" : "rgba(255,255,255,0.6)",
                border: "none",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setCycle("yearly")}
              style={{
                padding: "12px 32px",
                borderRadius: "100px",
                background: cycle === "yearly" ? "rgba(255,255,255,0.15)" : "transparent",
                color: cycle === "yearly" ? "#fff" : "rgba(255,255,255,0.6)",
                border: "none",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            >
              Yearly (-20%)
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {PRICING_PLANS.map((plan) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const isHighlighted = plan.highlighted;

            return (
              <motion.div
                key={plan.tier}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: isHighlighted ? "linear-gradient(135deg, rgba(176,132,255,0.1), rgba(0,240,255,0.05))" : "rgba(255,255,255,0.02)",
                  border: "1px solid",
                  borderColor: isHighlighted ? "rgba(176,132,255,0.4)" : "rgba(255,255,255,0.1)",
                  borderRadius: "32px",
                  padding: "48px",
                  backdropFilter: "blur(20px)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: isHighlighted ? "0 20px 60px rgba(176,132,255,0.15), inset 0 0 20px rgba(176,132,255,0.1)" : "none"
                }}
              >
                {isHighlighted && (
                  <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "var(--t-accent)", color: "#000", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 24px", borderRadius: "100px", boxShadow: "0 10px 20px rgba(176,132,255,0.3)" }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{ fontSize: "24px", fontWeight: 400, color: "#fff", marginBottom: "8px", letterSpacing: "0.05em" }}>
                  {plan.tier}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>
                  {plan.photos} enhancements
                </p>

                <div style={{ fontSize: "64px", fontWeight: 300, color: "#fff", marginBottom: "40px", letterSpacing: "-0.04em" }}>
                  {price === 0 ? "Free" : `$${price}`}
                </div>

                <div style={{ flex: 1, marginBottom: "48px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: isHighlighted ? "var(--t-accent)" : "#fff" }} />
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
                    borderRadius: "100px",
                    background: isHighlighted ? "#fff" : "rgba(255,255,255,0.1)",
                    color: isHighlighted ? "#000" : "#fff",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "0.05em",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    if(!isHighlighted) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if(!isHighlighted) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    }
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
