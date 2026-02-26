import NcNav from "@/components/noir-cinema/nc-nav"
import NcHero from "@/components/noir-cinema/nc-hero"
import NcTestimonials from "@/components/noir-cinema/nc-testimonials"
import NcCapabilities from "@/components/noir-cinema/nc-capabilities"
import NcPricing from "@/components/noir-cinema/nc-pricing"
import NcFooter from "@/components/noir-cinema/nc-footer"

export default function NoirCinemaPage() {
  return (
    <>
      <NcNav />
      <NcHero />
      <NcTestimonials />
      <NcCapabilities />
      <NcPricing />
      <NcFooter />
    </>
  )
}
