"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

type BillingCycle = "monthly" | "yearly"

interface PricingCardProps {
  tier: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  photos: string
  features: string[]
  cta: string
  highlighted?: boolean
  cycle: BillingCycle
}

export function PricingCard({
  tier,
  description,
  monthlyPrice,
  yearlyPrice,
  photos,
  features,
  cta,
  highlighted,
  cycle,
}: PricingCardProps) {
  const price = cycle === "monthly" ? monthlyPrice : yearlyPrice
  const isFree = monthlyPrice === 0

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
        highlighted
          ? "border-accent-green/50 bg-surface glow-green"
          : "border-border bg-surface hover:border-border/80"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-accent-green text-background text-xs font-bold tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display font-bold text-xl mb-2">{tier}</h3>
        <p className="text-sm text-foreground/50 leading-relaxed">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-2 flex items-end gap-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${price}-${cycle}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-4xl font-display font-bold text-foreground"
          >
            {isFree ? "Free" : `$${price.toLocaleString()}`}
          </motion.span>
        </AnimatePresence>
        {!isFree && (
          <span className="text-foreground/40 text-sm mb-1.5">/mo</span>
        )}
      </div>

      {/* Photos */}
      <p className="text-sm text-foreground/50 mb-8">
        <span className="text-foreground font-medium">{photos}</span> photos / month
        {!isFree && cycle === "yearly" && (
          <span className="ml-1 text-accent-green/70">· billed yearly</span>
        )}
      </p>

      {/* CTA */}
      <Link
        href="#"
        className={cn(
          "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold mb-8 transition-all duration-300",
          highlighted
            ? "bg-accent-green text-background hover:glow-green-strong"
            : "border border-border text-foreground hover:border-foreground/30"
        )}
      >
        {cta}
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
            <span className="text-sm text-foreground/70">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
