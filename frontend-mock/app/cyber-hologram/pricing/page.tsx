import ChNav from "@/components/cyber-hologram/ch-nav"
import ChPricing from "@/components/cyber-hologram/ch-pricing"
import ChFooter from "@/components/cyber-hologram/ch-footer"

export default function CyberHologramPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-mono)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <ChNav />
      <div style={{ flex: 1, paddingTop: "80px" }}>
        <ChPricing />
      </div>
      <ChFooter />
    </main>
  )
}
