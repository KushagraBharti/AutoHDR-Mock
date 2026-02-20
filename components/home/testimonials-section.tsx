"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { TESTIMONIALS } from "@/data/capabilities"

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrentIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const testimonial = TESTIMONIALS[currentIndex]

  return (
    <section className="py-24 px-6 border-y border-border bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-accent-green text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Trusted by photographers worldwide
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-green text-accent-green"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl font-display text-foreground/90 leading-relaxed mb-8 max-w-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-accent-green/20 border border-accent-green/30 flex items-center justify-center text-accent-green font-bold text-sm mb-2">
                  {testimonial.name[0]}
                </div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/50">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full border border-border hover:border-accent-green/50 hover:text-accent-green transition-all duration-200 text-foreground/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1)
                    setCurrentIndex(i)
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                  className="relative h-1.5 rounded-full overflow-hidden bg-border transition-all duration-300"
                  style={{ width: i === currentIndex ? "2rem" : "0.75rem" }}
                >
                  {i === currentIndex && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 bg-accent-green rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-2 rounded-full border border-border hover:border-accent-green/50 hover:text-accent-green transition-all duration-200 text-foreground/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
