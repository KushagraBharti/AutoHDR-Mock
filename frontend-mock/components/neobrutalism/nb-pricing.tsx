"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import Link from "next/link"

export default function NbPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "96px 48px", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
          <h2 style={{ fontSize: "64px", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em", background: "#fff", padding: "12px 24px", border: "4px solid var(--t-fg)", boxShadow: "8px 8px 0px 0px var(--t-fg)", display: "inline-block", transform: "rotate(-2deg)" }}>
            Fair Pricing.
          </h2>
          
          <div style={{ display: "flex", gap: "16px" }}>
            <button
              onClick={() => setCycle("monthly")}
              style={{
                padding: "16px 32px",
                background: cycle === "monthly" ? "var(--t-accent)" : "#fff",
                color: cycle === "monthly" ? "#fff" : "var(--t-fg)",
                border: "4px solid var(--t-fg)",
                boxShadow: cycle === "monthly" ? "8px 8px 0px 0px var(--t-fg)" : "4px 4px 0px 0px var(--t-fg)",
                transform: cycle === "monthly" ? "translate(-4px, -4px)" : "none",
                fontWeight: 800,
                fontSize: "18px",
                cursor: "pointer",
                transition: "all 0.1s"
              }}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setCycle("yearly")}
              style={{
                padding: "16px 32px",
                background: cycle === "yearly" ? "var(--t-accent)" : "#fff",
                color: cycle === "yearly" ? "#fff" : "var(--t-fg)",
                border: "4px solid var(--t-fg)",
                boxShadow: cycle === "yearly" ? "8px 8px 0px 0px var(--t-fg)" : "4px 4px 0px 0px var(--t-fg)",
                transform: cycle === "yearly" ? "translate(-4px, -4px)" : "none",
                fontWeight: 800,
                fontSize: "18px",
                cursor: "pointer",
                transition: "all 0.1s"
              }}
            >
              YEARLY (-20%)
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {PRICING_PLANS.map((plan, i) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const isHighlighted = plan.highlighted;
            const bgColors = ["#fff", "var(--t-pink)", "var(--t-blue)"];
            const bg = isHighlighted ? "var(--t-pink)" : bgColors[i % bgColors.length];

            return (
              <div
                key={plan.tier}
                style={{
                  background: bg,
                  border: "4px solid var(--t-fg)",
                  boxShadow: isHighlighted ? "12px 12px 0px 0px var(--t-fg)" : "8px 8px 0px 0px var(--t-fg)",
                  padding: "48px 32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transform: isHighlighted ? "translate(-4px, -4px)" : "none"
                }}
              >
                {isHighlighted && (
                  <div style={{ position: "absolute", top: "-20px", right: "-20px", background: "var(--t-accent)", color: "#fff", padding: "8px 16px", border: "4px solid var(--t-fg)", fontWeight: 800, transform: "rotate(10deg)" }}>
                    BEST DEAL!
                  </div>
                )}
                
                <h3 style={{ fontSize: "32px", fontWeight: 800, textTransform: "uppercase", margin: "0 0 8px 0" }}>{plan.tier}</h3>
                <div style={{ fontSize: "16px", fontWeight: 800, opacity: 0.8, marginBottom: "32px" }}>{plan.photos} PHOTOS/MO</div>
                
                <div style={{ fontSize: "64px", fontWeight: 800, lineHeight: 1, marginBottom: "32px" }}>
                  {price === 0 ? "FREE" : `$${price}`}
                </div>
                
                <div style={{ flex: 1, marginBottom: "48px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px", display: "flex", gap: "8px" }}>
                      <span>■</span> {f}
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "20px",
                    background: "#fff",
                    color: "var(--t-fg)",
                    border: "4px solid var(--t-fg)",
                    boxShadow: "4px 4px 0px 0px var(--t-fg)",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "20px",
                    textTransform: "uppercase",
                    transition: "all 0.1s"
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translate(-2px, -2px)"
                    el.style.boxShadow = "6px 6px 0px 0px var(--t-fg)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "none"
                    el.style.boxShadow = "4px 4px 0px 0px var(--t-fg)"
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
