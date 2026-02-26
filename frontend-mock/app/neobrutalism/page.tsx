import NbNav from "@/components/neobrutalism/nb-nav"
import NbHero from "@/components/neobrutalism/nb-hero"
import NbCapabilities from "@/components/neobrutalism/nb-capabilities"
import NbPricing from "@/components/neobrutalism/nb-pricing"
import NbFooter from "@/components/neobrutalism/nb-footer"

export default function NeobrutalismPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative" }}>
      <NbNav />
      <NbHero />
      <NbCapabilities />
      <NbPricing />
      <NbFooter />
    </main>
  )
}
