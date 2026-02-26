import KbNav from "@/components/kinetic-brutalism/kb-nav"
import KbHero from "@/components/kinetic-brutalism/kb-hero"
import KbCapabilities from "@/components/kinetic-brutalism/kb-capabilities"
import KbPricing from "@/components/kinetic-brutalism/kb-pricing"
import KbFooter from "@/components/kinetic-brutalism/kb-footer"

export default function KineticBrutalismPage() {
  return (
    <main style={{ fontFamily: "var(--font-sans)", position: "relative" }}>
      <KbNav />
      <KbHero />
      <KbCapabilities />
      <KbPricing />
      <KbFooter />
    </main>
  )
}
