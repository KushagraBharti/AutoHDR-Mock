import EdNav from "@/components/editorial/ed-nav"
import EdPricing from "@/components/editorial/ed-pricing"
import EdFooter from "@/components/editorial/ed-footer"

export default function EditorialPricingPage() {
  return (
    <>
      <EdNav />
      <main
        style={{
          paddingTop: "80px",
          paddingBottom: "0",
          background: "var(--t-bg)",
          minHeight: "100vh",
        }}
      >
        {/* Page header */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "64px 40px 48px",
            textAlign: "center",
            borderBottom: "1px solid var(--t-rule)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--t-accent)",
              marginBottom: "24px",
            }}
          >
            AutoHDR Subscription Plans
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--t-fg)",
              marginBottom: "24px",
            }}
          >
            Simple, transparent pricing.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--t-muted)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Choose the plan that fits your workflow. No hidden fees, no surprise charges.
            Cancel or upgrade at any time.
          </p>
        </div>

        {/* Pricing component — full standalone */}
        <EdPricing />
      </main>
      <EdFooter />
    </>
  )
}
