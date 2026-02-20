"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PricingToggle } from "./pricing-toggle"
import { PricingCard } from "./pricing-card"

type BillingCycle = "monthly" | "yearly"

const PLANS = [
  {
    tier: "Free",
    description: "Perfect for trying out AutoHDR with a small batch of photos.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    photos: "10",
    cta: "Get Started",
    highlighted: false,
    features: [
      "10 photos per month",
      "HDR editing (Classic style)",
      "Standard delivery",
      "Community support",
    ],
  },
  {
    tier: "Standard",
    description: "The go-to plan for professional real estate photographers.",
    monthlyPrice: 265,
    yearlyPrice: 212,
    photos: "500",
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "500 photos per month",
      "All HDR styles (5 styles)",
      "TV screen replacement",
      "Grass greening",
      "Fire in fireplace",
      "Unused credits roll over",
      "Priority delivery",
      "Email support",
    ],
  },
  {
    tier: "Enterprise",
    description: "For high-volume studios and agencies that need it all.",
    monthlyPrice: 2250,
    yearlyPrice: 1800,
    photos: "5,000",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      "5,000 photos per month",
      "Everything in Standard",
      "Auto TV blackout",
      "Auto fire in fireplace",
      "Walkthrough re-ordering",
      "Bulk upload API access",
      "Dedicated Slack channel",
      "SLA guarantee",
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

export function PricingGrid() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly")

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <PricingToggle cycle={cycle} onChange={setCycle} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
      >
        {PLANS.map((plan) => (
          <motion.div key={plan.tier} variants={cardVariants}>
            <PricingCard {...plan} cycle={cycle} />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center text-sm text-foreground/40 mt-8"
      >
        All plans include a 14-day free trial. No credit card required.
        Unused credits roll over to the next month.
      </motion.p>
    </div>
  )
}
