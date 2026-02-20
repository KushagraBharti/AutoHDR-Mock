"use client"

import { motion } from "framer-motion"
import { INTEGRATIONS } from "@/data/capabilities"

export function IntegrationsRow() {
  // Duplicate for seamless loop
  const items = [...INTEGRATIONS, ...INTEGRATIONS]

  return (
    <section className="py-20 px-6 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-foreground/40 text-sm tracking-widest uppercase mb-3">
            Integrations
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
            Fully Automate Your Editing Workflow
          </h2>
          <p className="text-foreground/50 text-base max-w-md mx-auto">
            Connect AutoHDR to your existing delivery platforms and go hands-free.
          </p>
        </motion.div>

        {/* Desktop: static centered row */}
        <div className="hidden md:flex items-center justify-center gap-6 flex-wrap">
          {INTEGRATIONS.map((name) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, color: "#4cffc0" }}
              className="px-6 py-3 rounded-xl border border-border bg-surface text-foreground/40 text-sm font-medium hover:border-accent-green/30 transition-all duration-200"
            >
              {name}
            </motion.div>
          ))}
        </div>

        {/* Mobile: marquee */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="px-5 py-2.5 rounded-xl border border-border bg-surface text-foreground/40 text-sm font-medium whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="text-sm text-accent-green/70 hover:text-accent-green transition-colors duration-200 underline underline-offset-4"
          >
            Set up your integration →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
