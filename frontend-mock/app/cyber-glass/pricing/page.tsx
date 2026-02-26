import CgNav from "@/components/cyber-glass/cg-nav"
import CgPricing from "@/components/cyber-glass/cg-pricing"
import CgFooter from "@/components/cyber-glass/cg-footer"

export default function CyberGlassPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <CgNav />
      <div style={{ flex: 1, paddingTop: "100px" }}>
        <CgPricing />
      </div>
      <CgFooter />
    </main>
  )
}
