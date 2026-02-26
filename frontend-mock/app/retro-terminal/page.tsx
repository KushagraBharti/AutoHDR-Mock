import RtNav from "@/components/retro-terminal/rt-nav"
import RtHero from "@/components/retro-terminal/rt-hero"
import RtCapabilities from "@/components/retro-terminal/rt-capabilities"
import RtPricing from "@/components/retro-terminal/rt-pricing"
import RtFooter from "@/components/retro-terminal/rt-footer"

export default function RetroTerminalPage() {
  return (
    <main style={{ fontFamily: "var(--font-terminal)", position: "relative" }}>
      <RtNav />
      <RtHero />
      <RtCapabilities />
      <RtPricing />
      <RtFooter />
    </main>
  )
}
