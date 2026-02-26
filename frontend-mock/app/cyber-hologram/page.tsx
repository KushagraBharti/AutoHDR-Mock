import ChNav from "@/components/cyber-hologram/ch-nav"
import ChHero from "@/components/cyber-hologram/ch-hero"
import ChCapabilities from "@/components/cyber-hologram/ch-capabilities"
import ChPricing from "@/components/cyber-hologram/ch-pricing"
import ChFooter from "@/components/cyber-hologram/ch-footer"

export default function CyberHologramPage() {
  return (
    <main style={{ fontFamily: "var(--font-mono)", position: "relative" }}>
      <ChNav />
      <ChHero />
      <ChCapabilities />
      <ChPricing />
      <ChFooter />
    </main>
  )
}
