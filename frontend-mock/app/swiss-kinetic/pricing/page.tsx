import SkNav from "@/components/swiss-kinetic/sk-nav"
import SkPricing from "@/components/swiss-kinetic/sk-pricing"
import SkFooter from "@/components/swiss-kinetic/sk-footer"

export default function SwissKineticPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SkNav />
      <div style={{ flex: 1, paddingTop: "80px" }}>
        <SkPricing />
      </div>
      <SkFooter />
    </main>
  )
}
