"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import Link from "next/link"

export default function KbPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "160px 48px", background: "var(--t-blue)", position: "relative", zIndex: 10, borderTop: "8px solid var(--t-fg)" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "40px" }}>
          <h2 style={{ fontSize: "clamp(60px, 10vw, 150px)", fontWeight: 800, margin: 0, lineHeight: 0.8, letterSpacing: "-0.04em", color: "#fff", textShadow: "12px 12px 0px var(--t-fg)" }}>
            PAY UP.
          </h2>
          
          <div style={{ display: "flex", gap: "16px" }}>
            <button
              onClick={() => setCycle("monthly")}
              style={{
                padding: "24px 48px",
                background: cycle === "monthly" ? "var(--t-accent)" : "#fff",
                color: "var(--t-fg)",
                border: "6px solid var(--t-fg)",
                boxShadow: cycle === "monthly" ? "12px 12px 0px 0px var(--t-fg)" : "6px 6px 0px 0px var(--t-fg)",
                transform: cycle === "monthly" ? "translate(-6px, -6px) rotate(-2deg)" : "none",
                fontWeight: 800,
                fontSize: "24px",
                cursor: "pointer",
                transition: "all 0.1s"
              }}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setCycle("yearly")}
              style={{
                padding: "24px 48px",
                background: cycle === "yearly" ? "var(--t-accent)" : "#fff",
                color: "var(--t-fg)",
                border: "6px solid var(--t-fg)",
                boxShadow: cycle === "yearly" ? "12px 12px 0px 0px var(--t-fg)" : "6px 6px 0px 0px var(--t-fg)",
                transform: cycle === "yearly" ? "translate(-6px, -6px) rotate(2deg)" : "none",
                fontWeight: 800,
                fontSize: "24px",
                cursor: "pointer",
                transition: "all 0.1s"
              }}
            >
              YEARLY
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "48px" }}>
          {PRICING_PLANS.map((plan, i) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const isHighlighted = plan.highlighted;
            const bgColors = ["#fff", "var(--t-bg)", "var(--t-accent)"];
            const bg = isHighlighted ? "var(--t-bg)" : bgColors[i % bgColors.length];

            return (
              <div
                key={plan.tier}
                style={{
                  background: bg,
                  border: "8px solid var(--t-fg)",
                  boxShadow: isHighlighted ? "24px 24px 0px 0px var(--t-fg)" : "16px 16px 0px 0px var(--t-fg)",
                  padding: "64px 48px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transform: isHighlighted ? "translate(-8px, -8px) rotate(1deg)" : "none"
                }}
              >
                {isHighlighted && (
                  <div style={{ position: "absolute", top: "-32px", right: "-32px", background: "var(--t-accent)", color: "var(--t-fg)", padding: "16px 32px", border: "6px solid var(--t-fg)", fontWeight: 800, fontSize: "32px", transform: "rotate(15deg)", boxShadow: "8px 8px 0px 0px var(--t-fg)" }}>
                    BUY THIS!
                  </div>
                )}
                
                <h3 style={{ fontSize: "48px", fontWeight: 800, textTransform: "uppercase", margin: "0 0 16px 0", color: isHighlighted ? "#fff" : "var(--t-fg)", textShadow: isHighlighted ? "6px 6px 0px var(--t-fg)" : "none" }}>
                  {plan.tier}
                </h3>
                
                <div style={{ fontSize: "100px", fontWeight: 800, lineHeight: 1, marginBottom: "16px", color: isHighlighted ? "#fff" : "var(--t-fg)" }}>
                  {price === 0 ? "FREE" : `$${price}`}
                </div>

                <div style={{ fontSize: "24px", fontWeight: 800, marginBottom: "48px", background: "var(--t-fg)", color: bg, display: "inline-block", padding: "8px 16px", alignSelf: "flex-start" }}>
                  {plan.photos} PHOTOS
                </div>
                
                <div style={{ flex: 1, marginBottom: "64px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ fontSize: "20px", fontWeight: 800, marginBottom: "16px", display: "flex", gap: "16px", color: isHighlighted ? "#fff" : "var(--t-fg)" }}>
                      <span>→</span> {f}
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "32px",
                    background: isHighlighted ? "var(--t-accent)" : "var(--t-fg)",
                    color: isHighlighted ? "var(--t-fg)" : bg,
                    border: isHighlighted ? "6px solid var(--t-fg)" : "none",
                    boxShadow: isHighlighted ? "8px 8px 0px 0px var(--t-fg)" : "none",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "32px",
                    textTransform: "uppercase",
                    transition: "all 0.1s"
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translate(-4px, -4px)"
                    if(!isHighlighted) el.style.boxShadow = "8px 8px 0px 0px var(--t-accent)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "none"
                    if(!isHighlighted) el.style.boxShadow = "none"
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
