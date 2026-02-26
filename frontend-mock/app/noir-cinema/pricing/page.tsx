import NcNav from "@/components/noir-cinema/nc-nav"
import NcPricing from "@/components/noir-cinema/nc-pricing"
import NcFooter from "@/components/noir-cinema/nc-footer"

export default function NoirCinemaPricingPage() {
  return (
    <>
      <NcNav />

      {/* Pricing page hero header */}
      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "0px",
          background: "var(--t-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Venetian blind shadow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(25deg, transparent 0px, transparent 25px, rgba(0,0,0,0.15) 25px, rgba(0,0,0,0.15) 60px)",
            opacity: 0.25,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "60px 40px 48px",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--t-muted)",
              borderRadius: 0,
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 400,
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "var(--t-mid-gray)",
              }}
            >
              PLANS & PRICING
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-display), 'Bodoni MT', serif",
              fontSize: "clamp(60px, 10vw, 120px)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
            }}
          >
            <span style={{ display: "block", color: "var(--t-fg)" }}>Choose Your</span>
            <span
              style={{
                display: "block",
                color: "var(--t-accent)",
                fontStyle: "italic",
              }}
            >
              Plan
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "16px",
              fontFamily: "var(--font-body), Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--t-silver)",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Simple, transparent pricing for professional real estate photographers.
            No hidden fees. No contracts. Cancel anytime.
          </p>

          {/* Decorative red line divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "var(--t-accent)",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "var(--t-accent)",
                borderRadius: 0,
              }}
            />
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "var(--t-accent)",
              }}
            />
          </div>
        </div>
      </div>

      <NcPricing standalone />
      <NcFooter />
    </>
  )
}
