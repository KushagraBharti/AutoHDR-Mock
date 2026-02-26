"use client"

import { PRICING_PLANS } from "@/data/capabilities"
import { useState } from "react"
import Link from "next/link"

export default function RtPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section style={{ padding: "48px 24px", fontFamily: "var(--font-terminal)", borderTop: "1px dashed var(--t-fg)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        <div style={{ marginBottom: "32px" }}>
          <div>root@autohdr:~$ cat pricing.txt</div>
          <br/>
          <div>=========================================</div>
          <div>        SERVER RESOURCE ALLOCATION       </div>
          <div>=========================================</div>
        </div>

        <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
          <button
            onClick={() => setCycle("monthly")}
            style={{
              background: cycle === "monthly" ? "var(--t-fg)" : "transparent",
              color: cycle === "monthly" ? "var(--t-bg)" : "var(--t-fg)",
              border: "1px solid var(--t-fg)",
              padding: "4px 16px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "18px"
            }}
          >
            [MONTHLY_BILLING]
          </button>
          <button
            onClick={() => setCycle("yearly")}
            style={{
              background: cycle === "yearly" ? "var(--t-fg)" : "transparent",
              color: cycle === "yearly" ? "var(--t-bg)" : "var(--t-fg)",
              border: "1px solid var(--t-fg)",
              padding: "4px 16px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "18px"
            }}
          >
            [YEARLY_BILLING (-20%)]
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {PRICING_PLANS.map((plan) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.tier}
                style={{
                  border: isHighlighted ? "2px solid var(--t-fg)" : "1px dashed var(--t-fg)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                }}
              >
                {isHighlighted && (
                  <div style={{ position: "absolute", top: "-12px", left: "24px", background: "var(--t-bg)", padding: "0 8px" }}>
                    ** RECOMENDED **
                  </div>
                )}
                
                <div style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "8px" }}>&gt; TIER: {plan.tier}</div>
                <div style={{ fontSize: "16px", opacity: 0.8, marginBottom: "24px" }}>QUOTA: {plan.photos} TX/MO</div>
                
                <div style={{ fontSize: "40px", marginBottom: "32px" }}>
                  {price === 0 ? "$0.00" : `$${price}.00`}
                </div>
                
                <div style={{ flex: 1, marginBottom: "32px", borderTop: "1px dashed var(--t-fg)", paddingTop: "16px" }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ marginBottom: "8px" }}>
                      + {f}
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "8px",
                    background: isHighlighted ? "var(--t-fg)" : "transparent",
                    color: isHighlighted ? "var(--t-bg)" : "var(--t-fg)",
                    border: "1px solid var(--t-fg)",
                    textDecoration: "none",
                    textTransform: "uppercase"
                  }}
                >
                  EXECUTE {plan.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
