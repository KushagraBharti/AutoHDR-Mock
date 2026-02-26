import AhNav from "@/components/aurora-hologram/ah-nav"
import AhHero from "@/components/aurora-hologram/ah-hero"
import AhCapabilities from "@/components/aurora-hologram/ah-capabilities"
import AhPricing from "@/components/aurora-hologram/ah-pricing"
import AhFooter from "@/components/aurora-hologram/ah-footer"

export default function AuroraHologramPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative" }}>
      <AhNav />
      <AhHero />
      <AhCapabilities />
      <AhPricing />
      <AhFooter />
    </main>
  )
}
