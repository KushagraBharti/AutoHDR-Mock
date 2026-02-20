import EdNav from "@/components/editorial/ed-nav"
import EdHero from "@/components/editorial/ed-hero"
import EdTestimonials from "@/components/editorial/ed-testimonials"
import EdCapabilities from "@/components/editorial/ed-capabilities"
import EdPricing from "@/components/editorial/ed-pricing"
import EdFooter from "@/components/editorial/ed-footer"

export default function EditorialPage() {
  return (
    <>
      <EdNav />
      <EdHero />
      <EdTestimonials />
      <EdCapabilities />
      <EdPricing />
      <EdFooter />
    </>
  )
}
