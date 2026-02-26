import SkNav from "@/components/swiss-kinetic/sk-nav"
import SkHero from "@/components/swiss-kinetic/sk-hero"
import SkCapabilities from "@/components/swiss-kinetic/sk-capabilities"
import SkPricing from "@/components/swiss-kinetic/sk-pricing"
import SkFooter from "@/components/swiss-kinetic/sk-footer"

export default function SwissKineticPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative" }}>
      <SkNav />
      <SkHero />
      <SkCapabilities />
      <SkPricing />
      <SkFooter />
    </main>
  )
}
