"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const WORDS = ["Tools", "change.", "Vision", "doesn't."]

export function VisionStatement() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-green/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
            {WORDS.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`text-5xl sm:text-6xl lg:text-7xl font-display font-bold ${
                  word === "Vision" ? "text-gradient" : "text-foreground"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-foreground/50 max-w-xl mx-auto mb-10"
        >
          No matter how AI evolves, great photography is still about telling a
          story. We&apos;re here to make yours effortless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#"
            className="flex items-center gap-2 px-7 py-3.5 bg-accent-green text-background font-semibold rounded-xl hover:glow-green-strong transition-all duration-300 text-sm"
          >
            Start for free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/pricing"
            className="flex items-center gap-2 px-7 py-3.5 border border-border rounded-xl text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-all duration-300 text-sm"
          >
            View pricing
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
