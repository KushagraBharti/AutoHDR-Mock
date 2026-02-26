"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function NbCapabilities() {
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
    <section style={{ padding: "96px 48px", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        
        <div style={{ background: "#fff", padding: "48px", border: "4px solid var(--t-fg)", boxShadow: "8px 8px 0px 0px var(--t-fg)", display: "flex", flexDirection: "column", gap: "48px" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px" }}>
            <h2 style={{ fontSize: "48px", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              See The <br/> <span style={{ color: "var(--t-accent)" }}>Magic.</span>
            </h2>
            <div style={{ background: "var(--t-pink)", padding: "12px 24px", border: "4px solid var(--t-fg)", fontWeight: 800, transform: "rotate(3deg)" }}>
              INTERACTIVE DEMO
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "32px" }}>
            
            {/* Sidebar Controls */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {FEATURES.map((f) => {
                const isActive = state.activeFeature === f.id
                return (
                  <button
                    key={f.id}
                    onClick={() => setState(prev => ({ ...prev, activeFeature: f.id as ActiveFeature }))}
                    style={{
                      padding: "16px",
                      background: isActive ? "var(--t-accent)" : "#fff",
                      color: isActive ? "#fff" : "var(--t-fg)",
                      border: "4px solid var(--t-fg)",
                      boxShadow: isActive ? "4px 4px 0px 0px var(--t-fg)" : "0px 0px 0px 0px var(--t-fg)",
                      transform: isActive ? "translate(-4px, -4px)" : "none",
                      fontWeight: 800,
                      fontSize: "16px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.1s"
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>

            {/* Display Area */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              
              <div style={{ border: "4px solid var(--t-fg)", boxShadow: "8px 8px 0px 0px var(--t-fg)", position: "relative", minHeight: "450px", overflow: "hidden", background: "var(--t-fg)" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image src={currentImage} alt="Preview" fill className="object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sub-controls */}
              <div style={{ background: "var(--t-blue)", padding: "24px", border: "4px solid var(--t-fg)", boxShadow: "4px 4px 0px 0px var(--t-fg)" }}>
                <div style={{ fontWeight: 800, fontSize: "18px", marginBottom: "16px", textTransform: "uppercase" }}>Tweak Settings:</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {activeFeatureData.options.map(opt => {
                    const isOptActive = opt.value === currentValue;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleOptionClick(state.activeFeature, opt.value)}
                        style={{
                          padding: "12px 24px",
                          background: isOptActive ? "#fff" : "transparent",
                          color: "var(--t-fg)",
                          border: "4px solid var(--t-fg)",
                          boxShadow: isOptActive ? "4px 4px 0px 0px var(--t-fg)" : "none",
                          transform: isOptActive ? "translate(-4px, -4px)" : "none",
                          fontWeight: 800,
                          fontSize: "14px",
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
