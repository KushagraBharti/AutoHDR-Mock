"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type BillingCycle = "monthly" | "yearly"

interface PricingToggleProps {
  cycle: BillingCycle
  onChange: (cycle: BillingCycle) => void
}

export function PricingToggle({ cycle, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={cn(
          "text-sm font-medium transition-colors duration-200",
          cycle === "monthly" ? "text-foreground" : "text-foreground/40"
        )}
      >
        Monthly
      </span>

      <button
        onClick={() => onChange(cycle === "monthly" ? "yearly" : "monthly")}
        className="relative w-14 h-7 rounded-full border border-border bg-surface-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Toggle billing cycle"
        role="switch"
        aria-checked={cycle === "yearly"}
      >
        <motion.div
          className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-accent-green shadow-md"
          animate={{ x: cycle === "yearly" ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>

      <div className="flex items-center gap-2">
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            cycle === "yearly" ? "text-foreground" : "text-foreground/40"
          )}
        >
          Yearly
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: cycle === "yearly" ? 1 : 0,
            scale: cycle === "yearly" ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="px-2 py-0.5 rounded-full bg-accent-green/15 border border-accent-green/30 text-accent-green text-xs font-semibold"
        >
          Save 20%
        </motion.span>
      </div>
    </div>
  )
}
