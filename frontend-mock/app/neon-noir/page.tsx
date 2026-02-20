import NNNav from "@/components/neon-noir/nn-nav"
import NNHero from "@/components/neon-noir/nn-hero"
import NNTestimonials from "@/components/neon-noir/nn-testimonials"
import NNCapabilities from "@/components/neon-noir/nn-capabilities"
import NNPricing from "@/components/neon-noir/nn-pricing"
import NNFooter from "@/components/neon-noir/nn-footer"

export default function NeonNoirPage() {
  return (
    <>
      <NNNav />
      <NNHero />
      <NNTestimonials />
      <NNCapabilities />
      <NNPricing />
      <NNFooter />
    </>
  )
}
