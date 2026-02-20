import { PricingGrid } from "@/components/pricing/pricing-grid"

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-green/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-green text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6">
            Simple,{" "}
            <span className="text-gradient">transparent</span> pricing
          </h1>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Start free, scale as you grow. All plans include access to our
            full suite of AI editing features.
          </p>
        </div>

        <PricingGrid />

        {/* FAQ teaser */}
        <div className="mt-24 text-center border-t border-border pt-16">
          <h2 className="text-2xl font-display font-bold mb-4">
            Questions? We&apos;ve got answers.
          </h2>
          <p className="text-foreground/50 mb-6">
            Check out our FAQ or reach out to our team directly.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-sm text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-all duration-200"
          >
            Contact support →
          </a>
        </div>
      </div>
    </div>
  )
}
