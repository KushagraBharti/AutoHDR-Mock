"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function CgCapabilities() {
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
    <section style={{ padding: "120px 24px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", textShadow: "0 0 10px var(--t-accent)" }}>
            Matrix Capabilities
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "32px" }}>
          
          {/* Main Visualizer (Glass) */}
          <div style={{ background: "rgba(5, 2, 10, 0.4)", border: "1px solid rgba(0, 240, 255, 0.3)", borderRadius: "24px", padding: "24px", backdropFilter: "blur(24px)", boxShadow: "0 0 40px rgba(0, 240, 255, 0.05)" }}>
            <div style={{ position: "relative", height: "600px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255, 0, 60, 0.3)" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, filter: "brightness(2) contrast(1.5) blur(10px)" }}
                  animate={{ opacity: 1, filter: "brightness(1) contrast(1) blur(0px)" }}
                  exit={{ opacity: 0, filter: "brightness(0)" }}
                  transition={{ duration: 0.4 }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={currentImage} alt="Enhancement" fill className="object-cover" />
                  {/* Cyber grid overlay on image */}
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(transparent 50%, rgba(0, 240, 255, 0.05) 50%)", backgroundSize: "100% 4px", pointerEvents: "none" }} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "24px", overflowX: "auto", paddingBottom: "8px" }}>
              {FEATURES.map(f => {
                const isActive = f.id === state.activeFeature;
                return (
                  <button
                    key={f.id}
                    onClick={() => setState(p => ({ ...p, activeFeature: f.id as ActiveFeature }))}
                    style={{
                      padding: "12px 24px",
                      background: isActive ? "rgba(0, 240, 255, 0.1)" : "transparent",
                      border: `1px solid ${isActive ? "var(--t-accent)" : "rgba(240, 240, 240, 0.2)"}`,
                      color: isActive ? "var(--t-accent)" : "rgba(240, 240, 240, 0.6)",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      boxShadow: isActive ? "inset 0 0 10px rgba(0, 240, 255, 0.2)" : "none",
                      transition: "all 0.2s"
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Controls Glass Panel */}
          <div style={{ background: "rgba(5, 2, 10, 0.4)", border: "1px solid rgba(255, 0, 60, 0.3)", borderRadius: "24px", padding: "32px", backdropFilter: "blur(24px)", boxShadow: "0 0 40px rgba(255, 0, 60, 0.05)", position: "sticky", top: "100px" }}>
            <div style={{ color: "var(--t-pink)", fontSize: "10px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>
              &gt; Active Protocol
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 24px 0", color: "#fff", textShadow: "0 0 10px rgba(255,255,255,0.3)" }}>
              {activeFeatureData.label}
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {activeFeatureData.options.map(opt => {
                const isOptActive = opt.value === currentValue;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleOptionClick(state.activeFeature, opt.value)}
                    style={{
                      padding: "16px",
                      background: isOptActive ? "var(--t-pink)" : "rgba(255, 0, 60, 0.05)",
                      border: `1px solid ${isOptActive ? "var(--t-pink)" : "rgba(255, 0, 60, 0.2)"}`,
                      color: isOptActive ? "#fff" : "rgba(240, 240, 240, 0.7)",
                      borderRadius: "8px",
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      boxShadow: isOptActive ? "0 0 20px rgba(255, 0, 60, 0.4)" : "none",
                      transition: "all 0.2s"
                    }}
                  >
                    {isOptActive && <span style={{ marginRight: "8px" }}>■</span>}
                    {!isOptActive && <span style={{ marginRight: "8px", opacity: 0.3 }}>□</span>}
                    {opt.label}
                  </button>
                )
              })}
            </div>

            <p style={{ marginTop: "32px", fontSize: "13px", color: "rgba(240, 240, 240, 0.5)", lineHeight: 1.6, borderTop: "1px solid rgba(255,0,60,0.2)", paddingTop: "24px" }}>
              {activeFeatureData.description}
            </p>
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
