import AhNav from "@/components/aurora-hologram/ah-nav"
import AhPricing from "@/components/aurora-hologram/ah-pricing"
import AhFooter from "@/components/aurora-hologram/ah-footer"

export default function AuroraHologramPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(176, 132, 255, 0.15), transparent 60%)", zIndex: 0, pointerEvents: "none" }} />
      <AhNav />
      <div style={{ flex: 1, paddingTop: "100px", position: "relative", zIndex: 10 }}>
        <AhPricing />
      </div>
      <AhFooter />
    </main>
  )
}
