"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function SvCapabilities() {
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
    <section style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", background: "linear-gradient(180deg, #fff, rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Intelligent Enhancements
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", marginTop: "16px" }}>Experience the difference with spatial photo processing.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px", alignItems: "start" }}>
          
          {/* Main Display Glass Panel */}
          <div style={{ background: "var(--t-glass)", border: "1px solid var(--t-border)", borderRadius: "32px", overflow: "hidden", backdropFilter: "blur(40px)", padding: "24px" }}>
            <div style={{ position: "relative", height: "600px", borderRadius: "16px", overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, filter: "blur(20px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={currentImage} alt="Preview" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div style={{ display: "flex", gap: "12px", marginTop: "24px", justifyContent: "center" }}>
              {FEATURES.map(f => {
                const isActive = f.id === state.activeFeature;
                return (
                  <button
                    key={f.id}
                    onClick={() => setState(p => ({ ...p, activeFeature: f.id as ActiveFeature }))}
                    style={{
                      padding: "12px 24px",
                      borderRadius: "100px",
                      border: "1px solid",
                      borderColor: isActive ? "rgba(255,255,255,0.4)" : "transparent",
                      background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                      color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Controls Glass Panel */}
          <div style={{ background: "var(--t-glass)", border: "1px solid var(--t-border)", borderRadius: "32px", backdropFilter: "blur(40px)", padding: "32px", position: "sticky", top: "100px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 500, marginBottom: "8px", color: "#fff" }}>{activeFeatureData.label}</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "32px", lineHeight: 1.5 }}>{activeFeatureData.description}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {activeFeatureData.options.map(opt => {
                const isOptActive = opt.value === currentValue;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleOptionClick(state.activeFeature, opt.value)}
                    style={{
                      padding: "16px",
                      borderRadius: "16px",
                      border: "1px solid",
                      borderColor: isOptActive ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.05)",
                      background: isOptActive ? "rgba(255,255,255,0.1)" : "transparent",
                      color: isOptActive ? "#fff" : "rgba(255,255,255,0.5)",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    {opt.label}
                  </button>
                )
              })}
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
