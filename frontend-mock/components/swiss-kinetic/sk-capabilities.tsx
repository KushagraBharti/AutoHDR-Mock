"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function SkCapabilities() {
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
    <section style={{ padding: "120px 48px", background: "var(--t-bg)", color: "var(--t-fg)" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        
        <h2 style={{ fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "0 0 80px 0", lineHeight: 0.9 }}>
          ENGINE <br/>
          <span style={{ color: "var(--t-accent)" }}>CAPABILITIES</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          
          {/* Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            
            <div style={{ display: "flex", flexDirection: "column" }}>
              {FEATURES.map((feature, i) => {
                const isActive = state.activeFeature === feature.id
                return (
                  <button
                    key={feature.id}
                    onClick={() => setState((prev) => ({ ...prev, activeFeature: feature.id as ActiveFeature }))}
                    style={{
                      textAlign: "left",
                      padding: "24px 0",
                      background: "transparent",
                      border: "none",
                      borderTop: i === 0 ? "2px solid var(--t-fg)" : "none",
                      borderBottom: "2px solid var(--t-fg)",
                      color: isActive ? "var(--t-accent)" : "var(--t-fg)",
                      cursor: "pointer",
                      fontSize: "clamp(24px, 3vw, 40px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "color 0.3s"
                    }}
                  >
                    {feature.label}
                    {isActive && <span style={{ fontSize: "20px" }}>●</span>}
                  </button>
                )
              })}
            </div>

            <div>
              <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "24px", letterSpacing: "-0.01em" }}>PARAMETERS / {activeFeatureData.label.toUpperCase()}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {activeFeatureData.options.map((option) => {
                  const isOptionActive = currentValue === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleOptionClick(state.activeFeature, option.value)}
                      style={{
                        padding: "12px 24px",
                        background: isOptionActive ? "var(--t-fg)" : "transparent",
                        color: isOptionActive ? "var(--t-bg)" : "var(--t-fg)",
                        border: "2px solid var(--t-fg)",
                        borderRadius: "100px",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
              <p style={{ marginTop: "32px", fontSize: "18px", lineHeight: 1.5, maxWidth: "400px" }}>
                {activeFeatureData.description}
              </p>
            </div>
          </div>

          {/* Visual Output */}
          <div style={{ position: "sticky", top: "48px" }}>
            <div style={{ position: "relative", height: "80vh", maxHeight: "900px", width: "100%", overflow: "hidden", background: "#000" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={currentImage} alt="Enhancement Preview" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px", fontSize: "14px", fontWeight: 600 }}>
              <span>OUTPUT</span>
              <span>{activeFeatureData.label} — {currentValue.toUpperCase()}</span>
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
