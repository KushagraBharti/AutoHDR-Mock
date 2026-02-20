"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Upload, Play, ArrowDown } from "lucide-react"
import Link from "next/link"

const STATS = [
  { value: "10%", label: "of U.S. listings" },
  { value: "30+", label: "min saved daily" },
  { value: "2min", label: "avg turnaround" },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const bgX = useTransform(springX, [-0.5, 0.5], ["-5%", "5%"])
  const bgY = useTransform(springY, [-0.5, 0.5], ["-5%", "5%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: bgX, y: bgY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-green/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-green/3 blur-[100px]" />
      </motion.div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,255,192,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(76,255,192,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/5 text-accent-green text-xs font-medium mb-8 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          Trusted to edit 10% of U.S. listings
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6"
        >
          AI Real Estate
          <br />
          <span className="text-gradient">Photo Editing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
        >
          Professional HDR editing, virtual staging, and AI-powered enhancements
          delivered in minutes — not hours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#"
            className="flex items-center gap-2 px-7 py-3.5 bg-accent-green text-background font-semibold rounded-xl hover:glow-green-strong transition-all duration-300 text-sm"
          >
            <Upload className="w-4 h-4" />
            Upload Photos — Free
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-7 py-3.5 border border-border rounded-xl text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-all duration-300 text-sm"
          >
            <Play className="w-4 h-4" />
            Book a Demo
          </Link>
        </motion.div>

        {/* Upload zone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl mx-auto mb-20"
        >
          <UploadZone />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-display font-bold text-gradient-green">
                {stat.value}
              </span>
              <span className="text-sm text-foreground/50">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function UploadZone() {
  const scanX = useMotionValue(0)
  const scanXSpring = useSpring(scanX, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="relative rounded-2xl border-2 border-dashed border-accent-green/30 bg-surface/50 p-12 flex flex-col items-center gap-4 group"
      whileHover={{ borderColor: "rgba(76,255,192,0.6)" }}
      onHoverStart={() => scanX.set(1)}
      onHoverEnd={() => scanX.set(0)}
      transition={{ duration: 0.3 }}
    >
      {/* Scanning line on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        style={{ opacity: scanXSpring }}
      >
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green to-transparent"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="w-12 h-12 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center group-hover:bg-accent-green/15 transition-colors duration-300">
        <Upload className="w-5 h-5 text-accent-green" />
      </div>
      <div className="text-center">
        <p className="text-foreground/80 font-medium mb-1">
          Drag & drop your images here
        </p>
        <p className="text-sm text-foreground/40">
          or{" "}
          <span className="text-accent-green underline underline-offset-2">
            browse files
          </span>{" "}
          — JPG, PNG, TIFF up to 50MB
        </p>
      </div>
    </motion.div>
  )
}
