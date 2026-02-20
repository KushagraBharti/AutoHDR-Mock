"use client"

import { motion } from "framer-motion"
import { Sparkles, Sunset, Leaf, Palette } from "lucide-react"
import { POST_PROCESSING_FEATURES } from "@/data/capabilities"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Sunset,
  Leaf,
  Palette,
}

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

export function PostProcessingCards() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-accent-green text-sm font-medium tracking-widest uppercase mb-4">
            Post-processing
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Beyond the basics
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Advanced AI features that set your listings apart from the competition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {POST_PROCESSING_FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon]
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border bg-surface p-6 flex flex-col gap-4 hover:border-accent-green/30 hover:glow-green transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center group-hover:bg-accent-green/15 transition-colors duration-300">
                  {Icon && <Icon className="w-5 h-5 text-accent-green" />}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <span className="text-xs text-accent-green/60 font-medium">
                    Learn more →
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
