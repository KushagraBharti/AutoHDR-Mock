import NNNav from "@/components/neon-noir/nn-nav"
import NNPricing from "@/components/neon-noir/nn-pricing"
import NNFooter from "@/components/neon-noir/nn-footer"

export default function NeonNoirPricingPage() {
  return (
    <>
      <NNNav />

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
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,45,120,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,45,120,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        {/* Radial glow top-center */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at top, rgba(255,45,120,0.12) 0%, transparent 70%)",
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
              border: "1px solid rgba(255,45,120,0.4)",
              padding: "6px 16px",
              marginBottom: "28px",
              boxShadow: "0 0 12px rgba(255,45,120,0.15)",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--t-pink)",
              }}
            >
              ▶ AUTOHDR — PLANS &amp; PRICING
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-display), Impact, sans-serif",
              fontSize: "clamp(60px, 10vw, 120px)",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              margin: "0 0 24px",
            }}
          >
            <span style={{ display: "block", color: "var(--t-fg)" }}>CHOOSE YOUR</span>
            <span
              style={{
                display: "block",
                color: "var(--t-pink)",
                textShadow:
                  "0 0 20px var(--t-pink), 0 0 60px rgba(255,45,120,0.4)",
              }}
            >
              POWER LEVEL
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-mono), monospace",
              color: "var(--t-muted)",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            Simple, transparent pricing for professional real estate photographers.
            No hidden fees. No contracts. Cancel anytime.
          </p>

          {/* Decorative divider */}
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
                background:
                  "linear-gradient(90deg, transparent, var(--t-pink))",
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontFamily: "var(--font-mono), monospace",
                color: "var(--t-pink)",
                letterSpacing: "0.3em",
              }}
            >
              ◆
            </span>
            <div
              style={{
                width: "60px",
                height: "1px",
                background:
                  "linear-gradient(90deg, var(--t-pink), transparent)",
              }}
            />
          </div>
        </div>
      </div>

      <NNPricing standalone />
      <NNFooter />
    </>
  )
}
