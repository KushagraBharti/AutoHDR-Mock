import KbNav from "@/components/kinetic-brutalism/kb-nav"
import KbPricing from "@/components/kinetic-brutalism/kb-pricing"
import KbFooter from "@/components/kinetic-brutalism/kb-footer"

export default function KineticBrutalismPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <KbNav />
      <div style={{ flex: 1, paddingTop: "120px" }}>
        <KbPricing />
      </div>
      <KbFooter />
    </main>
  )
}
