import { HeroSection } from "@/components/home/hero-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CapabilitiesSlider } from "@/components/home/capabilities-slider"
import { PostProcessingCards } from "@/components/home/post-processing-cards"
import { IntegrationsRow } from "@/components/home/integrations-row"
import { VisionStatement } from "@/components/home/vision-statement"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <CapabilitiesSlider />
      <PostProcessingCards />
      <IntegrationsRow />
      <VisionStatement />
    </>
  )
}
