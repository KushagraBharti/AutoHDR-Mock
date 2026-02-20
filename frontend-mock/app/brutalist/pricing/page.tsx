import BrutNav from "@/components/brutalist/brut-nav"
import BrutPricing from "@/components/brutalist/brut-pricing"
import BrutFooter from "@/components/brutalist/brut-footer"

export default function BrutalistPricingPage() {
  return (
    <>
      <BrutNav />
      <div
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        {/* Pricing page header */}
        <div
          style={{
            borderBottom: "2px solid var(--t-fg)",
            padding: "40px 40px 32px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--t-muted)",
                marginBottom: "12px",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              — AUTOHDR — PLANS &amp; PRICING
            </p>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                fontFamily: "var(--font-mono), monospace",
                textTransform: "uppercase",
              }}
            >
              INVEST IN
              <br />
              <span
                style={{
                  background: "var(--t-accent)",
                  padding: "0 8px",
                  display: "inline-block",
                }}
              >
                QUALITY
              </span>
            </h1>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--t-muted)",
              maxWidth: "340px",
              lineHeight: 1.6,
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            Simple, transparent pricing for professional real estate photographers.
            No hidden fees. Cancel anytime.
          </p>
        </div>
        <BrutPricing standalone />
      </div>
      <BrutFooter />
    </>
  )
}
