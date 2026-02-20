"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { FEATURES, ALL_IMAGES, DEFAULT_STATE, resolveImage } from "@/data/capabilities"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import * as Switch from "@radix-ui/react-switch"

export function CapabilitiesSlider() {
  const [state, setState] = useState<CapabilityState>(DEFAULT_STATE)

  const currentImage = resolveImage(state)
  const activeFeature = FEATURES.find((f) => f.id === state.activeFeature)!

  const setFeature = (id: ActiveFeature) => {
    setState((prev) => ({ ...prev, activeFeature: id }))
  }

  const setHdrStyle = (value: string) => {
    setState((prev) => ({ ...prev, hdrStyle: value as CapabilityState["hdrStyle"] }))
  }

  const setTvScene = (value: string) => {
    setState((prev) => ({ ...prev, tvScene: value as CapabilityState["tvScene"] }))
  }

  const setFireOn = (on: boolean) => {
    setState((prev) => ({ ...prev, fireOn: on }))
  }

  const setGrassOn = (on: boolean) => {
    setState((prev) => ({ ...prev, grassOn: on }))
  }

  const getCurrentValue = (): string => {
    if (state.activeFeature === "hdr") return state.hdrStyle
    if (state.activeFeature === "tv") return state.tvScene
    if (state.activeFeature === "fire") return state.fireOn ? "on" : "off"
    return state.grassOn ? "on" : "off"
  }

  const handleOptionChange = (value: string) => {
    if (state.activeFeature === "hdr") setHdrStyle(value)
    else if (state.activeFeature === "tv") setTvScene(value)
    else if (state.activeFeature === "fire") setFireOn(value === "on")
    else setGrassOn(value === "on")
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-accent-green text-sm font-medium tracking-widest uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Every edit, automated
          </h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            From HDR blending to virtual staging — experience each feature live.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden bg-surface"
        >
          {/* Left panel */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-border">
            {/* Feature tabs */}
            <div className="border-b border-border">
              {FEATURES.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setFeature(feature.id)}
                  className={cn(
                    "w-full text-left px-6 py-4 flex flex-col gap-0.5 transition-all duration-200 relative group",
                    state.activeFeature === feature.id
                      ? "bg-surface-2"
                      : "hover:bg-surface-2/50"
                  )}
                >
                  {/* Active indicator */}
                  {state.activeFeature === feature.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-green"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors duration-200",
                      state.activeFeature === feature.id
                        ? "text-foreground"
                        : "text-foreground/50 group-hover:text-foreground/80"
                    )}
                  >
                    {feature.label}
                  </span>
                  <span className="text-xs text-foreground/35 line-clamp-1">
                    {feature.description}
                  </span>
                </button>
              ))}
            </div>

            {/* Options panel */}
            <div className="flex-1 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={state.activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p className="text-xs text-foreground/40 uppercase tracking-widest mb-4 font-medium">
                    {activeFeature.type === "toggle" ? "Toggle" : "Select style"}
                  </p>

                  {activeFeature.type === "radio" ? (
                    <div className="flex flex-wrap gap-2">
                      {activeFeature.options.map((option) => {
                        const isActive = getCurrentValue() === option.value
                        return (
                          <button
                            key={option.value}
                            onClick={() => handleOptionChange(option.value)}
                            className={cn(
                              "px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200",
                              isActive
                                ? "border-accent-green text-accent-green bg-accent-green/10 glow-green"
                                : "border-border text-foreground/50 hover:border-foreground/30 hover:text-foreground/80"
                            )}
                          >
                            {option.label}
                          </button>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {activeFeature.options.map((option) => {
                        const isToggleOn = option.value === "on"
                        const currentOn =
                          state.activeFeature === "fire" ? state.fireOn : state.grassOn

                        return (
                          <div
                            key={option.value}
                            className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface-2/50"
                          >
                            <div>
                              <p className="text-sm font-medium text-foreground/80">
                                {activeFeature.label}{" "}
                                <span
                                  className={cn(
                                    "font-semibold",
                                    option.value === "on"
                                      ? "text-accent-green"
                                      : "text-foreground/40"
                                  )}
                                >
                                  {option.label}
                                </span>
                              </p>
                            </div>
                            <Switch.Root
                              checked={isToggleOn ? currentOn : !currentOn}
                              onCheckedChange={(checked) => {
                                if (isToggleOn) {
                                  handleOptionChange(checked ? "on" : "off")
                                } else {
                                  handleOptionChange(checked ? "off" : "on")
                                }
                              }}
                              className={cn(
                                "relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 focus:ring-offset-surface",
                                (isToggleOn ? currentOn : !currentOn)
                                  ? "bg-accent-green"
                                  : "bg-surface-2 border border-border"
                              )}
                              aria-label={`Toggle ${activeFeature.label} ${option.label}`}
                            >
                              <Switch.Thumb
                                className={cn(
                                  "block h-5 w-5 rounded-full bg-background shadow-lg transition-transform duration-300",
                                  (isToggleOn ? currentOn : !currentOn)
                                    ? "translate-x-5"
                                    : "translate-x-0"
                                )}
                              />
                            </Switch.Root>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right panel — image preview */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[480px] bg-surface-2 overflow-hidden">
            {/* Hidden preload layer */}
            <div className="absolute inset-0 pointer-events-none opacity-0 w-0 h-0 overflow-hidden">
              {ALL_IMAGES.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" aria-hidden />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentImage}
                  alt={`${activeFeature.label} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={currentImage === "/images/classic-desktop.jpg"}
                />
              </motion.div>
            </AnimatePresence>

            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${state.activeFeature}-${getCurrentValue()}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium text-foreground/80"
                >
                  {activeFeature.label}
                  {" · "}
                  <span className="text-accent-green capitalize">
                    {activeFeature.options.find((o) => o.value === getCurrentValue())?.label}
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
