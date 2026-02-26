"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import Link from "next/link"

export default function SkPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "120px 48px", background: "var(--t-bg)", color: "var(--t-fg)" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "40px" }}>
          <h2 style={{ fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 800, letterSpacing: "-0.04em", margin: 0, lineHeight: 0.9 }}>
            PLANS & <br/>
            <span style={{ color: "var(--t-accent)" }}>PRICING</span>
          </h2>
          
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setCycle("monthly")}
              style={{
                padding: "16px 32px",
                background: cycle === "monthly" ? "var(--t-fg)" : "transparent",
                color: cycle === "monthly" ? "var(--t-bg)" : "var(--t-fg)",
                border: "2px solid var(--t-fg)",
                borderRadius: "100px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setCycle("yearly")}
              style={{
                padding: "16px 32px",
                background: cycle === "yearly" ? "var(--t-fg)" : "transparent",
                color: cycle === "yearly" ? "var(--t-bg)" : "var(--t-fg)",
                border: "2px solid var(--t-fg)",
                borderRadius: "100px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              YEARLY / -20%
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
          {PRICING_PLANS.map((plan) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.tier}
                style={{
                  border: "2px solid var(--t-fg)",
                  background: isHighlighted ? "var(--t-fg)" : "transparent",
                  color: isHighlighted ? "var(--t-bg)" : "var(--t-fg)",
                  padding: "48px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                  <h3 style={{ fontSize: "32px", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>{plan.tier}</h3>
                  {isHighlighted && (
                    <span style={{ background: "var(--t-accent)", color: "var(--t-bg)", padding: "4px 12px", fontSize: "12px", fontWeight: 700, borderRadius: "100px" }}>
                      PRO
                    </span>
                  )}
                </div>
                
                <div style={{ fontSize: "80px", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "8px" }}>
                  {price === 0 ? "FREE" : `$${price}`}
                </div>
                <div style={{ fontSize: "16px", fontWeight: 600, opacity: 0.6, marginBottom: "48px" }}>
                  {plan.photos} PHOTOS / {cycle === "monthly" ? "MO" : "YR"}
                </div>
                
                <div style={{ flex: 1, marginBottom: "48px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ fontSize: "18px", fontWeight: 500, padding: "16px 0", borderBottom: `1px solid ${isHighlighted ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` }}>
                      {f}
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "24px",
                    background: isHighlighted ? "var(--t-bg)" : "var(--t-fg)",
                    color: isHighlighted ? "var(--t-fg)" : "var(--t-bg)",
                    textDecoration: "none",
                    fontSize: "20px",
                    fontWeight: 700,
                    borderRadius: "100px",
                    transition: "transform 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
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
