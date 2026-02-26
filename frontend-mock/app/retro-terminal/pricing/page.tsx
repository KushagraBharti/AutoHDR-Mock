import RtNav from "@/components/retro-terminal/rt-nav"
import RtPricing from "@/components/retro-terminal/rt-pricing"
import RtFooter from "@/components/retro-terminal/rt-footer"

export default function RetroTerminalPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-terminal)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <RtNav />
      <div style={{ flex: 1, paddingTop: "40px" }}>
        <RtPricing />
      </div>
      <RtFooter />
    </main>
  )
}
