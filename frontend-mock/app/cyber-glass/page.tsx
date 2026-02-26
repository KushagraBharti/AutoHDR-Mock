import CgNav from "@/components/cyber-glass/cg-nav"
import CgHero from "@/components/cyber-glass/cg-hero"
import CgCapabilities from "@/components/cyber-glass/cg-capabilities"
import CgPricing from "@/components/cyber-glass/cg-pricing"
import CgFooter from "@/components/cyber-glass/cg-footer"

export default function CyberGlassPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative" }}>
      <CgNav />
      <CgHero />
      <CgCapabilities />
      <CgPricing />
      <CgFooter />
    </main>
  )
}
