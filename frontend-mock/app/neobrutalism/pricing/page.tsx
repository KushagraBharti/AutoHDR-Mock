import NbNav from "@/components/neobrutalism/nb-nav"
import NbPricing from "@/components/neobrutalism/nb-pricing"
import NbFooter from "@/components/neobrutalism/nb-footer"

export default function NeobrutalismPricingPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NbNav />
      <div style={{ flex: 1, paddingTop: "120px" }}>
        <NbPricing />
      </div>
      <NbFooter />
    </main>
  )
}
