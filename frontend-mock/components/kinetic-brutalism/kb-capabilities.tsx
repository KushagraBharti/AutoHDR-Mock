"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function KbCapabilities() {
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
    <section style={{ padding: "160px 48px", background: "var(--t-bg)", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        
        <h2 style={{ fontSize: "clamp(60px, 10vw, 150px)", fontWeight: 800, margin: "0 0 64px 0", lineHeight: 0.8, letterSpacing: "-0.04em", color: "#fff", textShadow: "12px 12px 0px var(--t-fg)" }}>
          SEE THE MAGIC.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "64px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {FEATURES.map((f, i) => {
              const isActive = state.activeFeature === f.id
              const bgs = ["var(--t-accent)", "var(--t-blue)", "#fff", "var(--t-bg)"]
              const bg = bgs[i % bgs.length]
              
              return (
                <motion.button
                  key={f.id}
                  onClick={() => setState(p => ({ ...p, activeFeature: f.id as ActiveFeature }))}
                  style={{
                    padding: "32px",
                    background: isActive ? bg : "transparent",
                    color: "var(--t-fg)",
                    border: "8px solid var(--t-fg)",
                    boxShadow: isActive ? "16px 16px 0px 0px var(--t-fg)" : "0px 0px 0px 0px var(--t-fg)",
                    transform: isActive ? "translate(-8px, -8px)" : "none",
                    fontWeight: 800,
                    fontSize: "40px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "transform 0.1s, box-shadow 0.1s, background 0.2s"
                  }}
                  whileHover={{ scale: isActive ? 1 : 1.02 }}
                >
                  {f.label}
                </motion.button>
              )
            })}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            
            <div style={{ background: "#fff", border: "8px solid var(--t-fg)", boxShadow: "24px 24px 0px 0px var(--t-fg)", position: "relative", minHeight: "600px", overflow: "hidden", transform: "rotate(2deg)" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={currentImage} alt="Preview" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "48px" }}>
              {activeFeatureData.options.map(opt => {
                const isOptActive = opt.value === currentValue;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleOptionClick(state.activeFeature, opt.value)}
                    style={{
                      padding: "24px 48px",
                      background: isOptActive ? "var(--t-fg)" : "#fff",
                      color: isOptActive ? "#fff" : "var(--t-fg)",
                      border: "6px solid var(--t-fg)",
                      boxShadow: isOptActive ? "8px 8px 0px 0px var(--t-accent)" : "8px 8px 0px 0px var(--t-fg)",
                      transform: isOptActive ? "translate(-4px, -4px) rotate(-3deg)" : "none",
                      fontWeight: 800,
                      fontSize: "24px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 0.1s"
                    }}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
            
            <p style={{ marginTop: "24px", fontSize: "24px", fontWeight: 800, padding: "24px", background: "var(--t-accent)", border: "6px solid var(--t-fg)", boxShadow: "8px 8px 0px 0px var(--t-fg)" }}>
              {activeFeatureData.description}
            </p>

          </div>
        </div>

        <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 }}>
          {ALL_IMAGES.map((src) => (
            <Image key={src} src={src} alt="" width={1} height={1} />
          ))}
        </div>
      </div>
    </section>
  )
}
