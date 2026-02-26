import SvNav from "@/components/spatial-vision/sv-nav"
import SvPricing from "@/components/spatial-vision/sv-pricing"
import SvFooter from "@/components/spatial-vision/sv-footer"

export default function SpatialVisionPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Background for non-hero pages */}
      <div style={{ position: "fixed", inset: 0, background: "linear-gradient(45deg, rgba(255,0,204,0.2), rgba(51,51,255,0.2), rgba(0,255,204,0.2))", filter: "blur(100px)", zIndex: 0, pointerEvents: "none" }} />
      <SvNav />
      <div style={{ flex: 1, paddingTop: "80px" }}>
        <SvPricing />
      </div>
      <SvFooter />
    </main>
  )
}
