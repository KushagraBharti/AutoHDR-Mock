import SvNav from "@/components/spatial-vision/sv-nav"
import SvHero from "@/components/spatial-vision/sv-hero"
import SvCapabilities from "@/components/spatial-vision/sv-capabilities"
import SvPricing from "@/components/spatial-vision/sv-pricing"
import SvFooter from "@/components/spatial-vision/sv-footer"

export default function SpatialVisionPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative" }}>
      <SvNav />
      <SvHero />
      <SvCapabilities />
      <SvPricing />
      <SvFooter />
    </main>
  )
}
