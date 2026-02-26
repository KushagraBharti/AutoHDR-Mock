"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function AhCapabilities() {
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
        
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff" }}>
            Ethereal Processing
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "48px", alignItems: "center" }}>
          
          {/* Controls - Glass Tabs */}
          <div style={{ display: "flex", gap: "16px", background: "rgba(255,255,255,0.05)", padding: "8px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", flexWrap: "wrap", justifyContent: "center" }}>
            {FEATURES.map(f => {
              const isActive = f.id === state.activeFeature;
              return (
                <button
                  key={f.id}
                  onClick={() => setState(p => ({ ...p, activeFeature: f.id as ActiveFeature }))}
                  style={{
                    padding: "12px 32px",
                    borderRadius: "100px",
                    background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  {f.label}
                </button>
              )
            })}
          </div>

          {/* Main Visualizer */}
          <div style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "32px", padding: "16px", backdropFilter: "blur(40px)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
            
            <div style={{ position: "relative", height: "65vh", minHeight: "500px", borderRadius: "20px", overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={currentImage} alt="Enhancement" fill className="object-cover" />
                  
                  {/* Subtle aurora tint overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(176,132,255,0.1), transparent, rgba(0,240,255,0.1))", mixBlendMode: "overlay" }} />
                </motion.div>
              </AnimatePresence>

              {/* Inner Controls Overlay */}
              <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "100px", padding: "8px", display: "flex", gap: "8px", backdropFilter: "blur(20px)" }}>
                {activeFeatureData.options.map(opt => {
                  const isOptActive = opt.value === currentValue;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionClick(state.activeFeature, opt.value)}
                      style={{
                        padding: "10px 24px",
                        borderRadius: "100px",
                        background: isOptActive ? "var(--t-accent)" : "transparent",
                        color: isOptActive ? "#000" : "#fff",
                        border: "none",
                        fontSize: "13px",
                        fontWeight: isOptActive ? 600 : 400,
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <p style={{ textAlign: "center", marginTop: "24px", color: "rgba(255,255,255,0.6)", fontSize: "14px", maxWidth: "600px", margin: "24px auto 8px", lineHeight: 1.6 }}>
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
