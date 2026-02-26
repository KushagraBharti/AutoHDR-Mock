"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function SvPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Choose Your Reality
          </h2>
          
          <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.05)", borderRadius: "100px", padding: "4px", marginTop: "32px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <button
              onClick={() => setCycle("monthly")}
              style={{
                padding: "12px 32px",
                borderRadius: "100px",
                background: cycle === "monthly" ? "rgba(255,255,255,0.15)" : "transparent",
                color: cycle === "monthly" ? "#fff" : "rgba(255,255,255,0.5)",
                border: "none",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease"
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
                color: cycle === "yearly" ? "#fff" : "rgba(255,255,255,0.5)",
                border: "none",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Yearly (Save 20%)
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
                whileHover={{ y: -10 }}
                style={{
                  background: isHighlighted ? "rgba(255,255,255,0.1)" : "var(--t-glass)",
                  border: "1px solid",
                  borderColor: isHighlighted ? "rgba(255,255,255,0.3)" : "var(--t-border)",
                  borderRadius: "32px",
                  padding: "48px 32px",
                  backdropFilter: "blur(40px)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: isHighlighted ? "0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.2)" : "none"
                }}
              >
                {isHighlighted && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#fff", color: "#000", fontSize: "12px", fontWeight: 600, padding: "4px 16px", borderRadius: "100px" }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{ fontSize: "24px", fontWeight: 500, color: "#fff", marginBottom: "8px" }}>{plan.tier}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>{plan.photos} photos / mo</p>

                <div style={{ fontSize: "56px", fontWeight: 300, color: "#fff", marginBottom: "32px", letterSpacing: "-0.04em" }}>
                  {price === 0 ? "Free" : `$${price}`}
                  {price > 0 && <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", letterSpacing: "normal", fontWeight: 400 }}>/mo</span>}
                </div>

                <div style={{ flex: 1, marginBottom: "48px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fff" }}><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                    fontSize: "15px",
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
