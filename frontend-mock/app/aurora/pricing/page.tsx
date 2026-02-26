import AuNav from "@/components/aurora/au-nav"
import AuPricing from "@/components/aurora/au-pricing"
import AuFooter from "@/components/aurora/au-footer"

export default function AuroraPricingPage() {
  return (
    <>
      <AuNav />

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
        {/* Background aurora orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "30%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,222,128,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "20%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
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
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "40px",
              padding: "8px 20px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--t-accent)",
                boxShadow: "0 0 8px rgba(74,222,128,0.5)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.05em",
                color: "var(--t-fg)",
                opacity: 0.8,
              }}
            >
              AutoHDR — Plans & Pricing
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              color: "var(--t-fg)",
            }}
          >
            Choose Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue), var(--t-accent2))",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "au-iridescent 4s ease infinite",
              }}
            >
              Plan
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "17px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 300,
              color: "var(--t-fg)",
              opacity: 0.55,
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
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
                background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.4))",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--t-accent)",
                boxShadow: "0 0 8px rgba(74,222,128,0.4)",
              }}
            />
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "linear-gradient(90deg, rgba(74,222,128,0.4), transparent)",
              }}
            />
          </div>
        </div>
      </div>

      <AuPricing standalone />
      <AuFooter />
    </>
  )
}
