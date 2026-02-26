"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function ChCapabilities() {
  const [state, setState] = useState<CapabilityState>(DEFAULT_STATE)

  const currentImage = resolveImage(state)

  const getCurrentValue = (): string => {
    if (state.activeFeature === "hdr") return state.hdrStyle
    if (state.activeFeature === "tv") return state.tvScene
    if (state.activeFeature === "fire") return state.fireOn ? "on" : "off"
    return state.grassOn ? "on" : "off"
  }

  const handleOptionClick = (featureId: ActiveFeature, value: string) => {
    if (featureId === "hdr") {
      setState((prev) => ({ ...prev, hdrStyle: value as HdrStyle }))
    } else if (featureId === "tv") {
      setState((prev) => ({ ...prev, tvScene: value as TvScene }))
    } else if (featureId === "fire") {
      setState((prev) => ({ ...prev, fireOn: value === "on" }))
    } else if (featureId === "grass") {
      setState((prev) => ({ ...prev, grassOn: value === "on" }))
    }
  }

  const activeFeatureData = FEATURES.find((f) => f.id === state.activeFeature)!
  const currentValue = getCurrentValue()

  return (
    <section
      style={{
        position: "relative",
        padding: "64px 24px",
        fontFamily: "var(--font-mono)",
        borderTop: "1px solid var(--t-accent)",
        background: "rgba(3, 0, 8, 0.9)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h2 className="ch-glow" style={{ fontSize: "24px", color: "var(--t-fg)", margin: 0 }}>[ SUBSYSTEM: CAPABILITIES ]</h2>
          <p style={{ color: "rgba(0, 255, 204, 0.6)", fontSize: "14px", marginTop: "16px" }}>INITIALIZING IMAGE ENHANCEMENT PROTOCOLS</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", border: "1px solid var(--t-fg)", padding: "2px" }}>
          
          {/* Controls */}
          <div style={{ display: "flex", flexWrap: "wrap", borderBottom: "1px solid var(--t-fg)" }}>
            {FEATURES.map((feature) => {
              const isActive = state.activeFeature === feature.id
              return (
                <button
                  key={feature.id}
                  onClick={() => setState((prev) => ({ ...prev, activeFeature: feature.id as ActiveFeature }))}
                  style={{
                    flex: 1,
                    minWidth: "120px",
                    padding: "16px",
                    background: isActive ? "var(--t-fg)" : "transparent",
                    color: isActive ? "var(--t-bg)" : "var(--t-fg)",
                    border: "none",
                    borderRight: "1px solid var(--t-fg)",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: isActive ? 800 : 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    transition: "all 0.2s"
                  }}
                >
                  {feature.label}
                </button>
              )
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(300px, 1fr) 250px", gap: "2px", padding: "16px" }}>
            {/* Image display */}
            <div style={{ position: "relative", minHeight: "500px", border: "1px solid var(--t-accent)", overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05, filter: "brightness(2) contrast(1.5) hue-rotate(90deg)" }}
                  animate={{ opacity: 1, scale: 1, filter: "brightness(1) contrast(1) hue-rotate(0deg)" }}
                  exit={{ opacity: 0, filter: "brightness(0)" }}
                  transition={{ duration: 0.4 }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={currentImage} alt="Enhancement Preview" fill className="object-cover" />
                  
                  {/* Holographic scanning line overlay */}
                  <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ position: "absolute", left: 0, right: 0, height: "10px", background: "linear-gradient(to bottom, transparent, rgba(0, 255, 204, 0.8), transparent)", boxShadow: "0 0 20px rgba(0, 255, 204, 0.5)", zIndex: 10 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Options Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px", background: "rgba(0,255,204,0.05)", border: "1px solid var(--t-fg)" }}>
              <div style={{ fontSize: "10px", color: "var(--t-accent)", letterSpacing: "0.2em", marginBottom: "8px" }}>&gt; SELECT PARAMETER</div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {activeFeatureData.options.map((option) => {
                  const isOptionActive = currentValue === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleOptionClick(state.activeFeature, option.value)}
                      style={{
                        padding: "12px",
                        background: isOptionActive ? "rgba(255, 0, 60, 0.2)" : "transparent",
                        border: `1px solid ${isOptionActive ? "var(--t-accent)" : "rgba(0, 255, 204, 0.3)"}`,
                        color: isOptionActive ? "var(--t-accent)" : "var(--t-fg)",
                        textAlign: "left",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        boxShadow: isOptionActive ? "inset 0 0 10px rgba(255, 0, 60, 0.5)" : "none",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        if (!isOptionActive) (e.currentTarget as HTMLElement).style.borderColor = "var(--t-fg)"
                      }}
                      onMouseLeave={(e) => {
                        if (!isOptionActive) (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 255, 204, 0.3)"
                      }}
                    >
                      {isOptionActive && <span style={{ marginRight: "8px" }}>[x]</span>}
                      {!isOptionActive && <span style={{ marginRight: "8px" }}>[ ]</span>}
                      {option.label}
                    </button>
                  )
                })}
              </div>

              <div style={{ marginTop: "auto", fontSize: "10px", color: "rgba(0, 255, 204, 0.5)", lineHeight: 1.5 }}>
                {activeFeatureData.description}
              </div>
            </div>
          </div>
        </div>

        {/* Preload */}
        <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 }}>
          {ALL_IMAGES.map((src) => (
            <Image key={src} src={src} alt="" width={1} height={1} />
          ))}
        </div>
      </div>
    </section>
  )
}
