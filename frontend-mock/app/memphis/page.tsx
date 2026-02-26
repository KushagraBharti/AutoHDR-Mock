import MpNav from "@/components/memphis/mp-nav"
import MpHero from "@/components/memphis/mp-hero"
import MpTestimonials from "@/components/memphis/mp-testimonials"
import MpCapabilities from "@/components/memphis/mp-capabilities"
import MpPricing from "@/components/memphis/mp-pricing"
import MpFooter from "@/components/memphis/mp-footer"

export default function MemphisPage() {
  return (
    <>
      <MpNav />
      <MpHero />
      <MpTestimonials />
      <MpCapabilities />
      <MpPricing />
      <MpFooter />
    </>
  )
}
