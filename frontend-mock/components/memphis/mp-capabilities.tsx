"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const BOUNCE = [0.68, -0.55, 0.265, 1.55] as [number, number, number, number]

const TAB_COLORS = ["#ff3366", "#3344ff", "#ffcc00", "#88dd00"]
const TAB_SHADOWS = ["#3344ff", "#ffcc00", "#88dd00", "#ff3366"]

export default function MpCapabilities() {
  const [state, setState] = useState<CapabilityState>(DEFAULT_STATE)

  const currentImage = resolveImage(state)

  const getCurrentValue = (): string => {
    if (state.activeFeature === "hdr") return state.hdrStyle
    if (state.activeFeature === "tv") return state.tvScene
    if (state.activeFeature === "fire") return state.fireOn ? "on" : "off"
    return state.grassOn ? "on" : "off"
  }

  const handleOptionClick = (featureId: ActiveFeature, value: string) => {
    if (featureId === "hdr") setState((prev) => ({ ...prev, hdrStyle: value as HdrStyle }))
    else if (featureId === "tv") setState((prev) => ({ ...prev, tvScene: value as TvScene }))
    else if (featureId === "fire") setState((prev) => ({ ...prev, fireOn: value === "on" }))
    else if (featureId === "grass") setState((prev) => ({ ...prev, grassOn: value === "on" }))
  }

  const activeFeatureData = FEATURES.find((f) => f.id === state.activeFeature)!
  const currentValue = getCurrentValue()
  const activeIndex = FEATURES.findIndex((f) => f.id === state.activeFeature)

  return (
    <section
      style={{
        padding: "80px 48px",
        fontFamily: "var(--font-body), sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "var(--t-bg)",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: BOUNCE }}
          style={{
            display: "inline-block",
            background: "var(--t-blue)",
            color: "var(--t-surface)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "6px 16px",
            border: "2px solid var(--t-fg)",
            boxShadow: "2px 2px 0 0 var(--t-fg)",
            marginBottom: "16px",
          }}
        >
          Features
        </motion.div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            color: "var(--t-fg)",
            letterSpacing: "-0.02em",
          }}
        >
          <span>What We </span>
          <span style={{ color: "var(--t-pink)" }}>Do</span>
        </h2>
      </div>

      {/* Main body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          maxWidth: "1100px",
          margin: "0 auto",
          border: "3px solid var(--t-fg)",
          boxShadow: "6px 6px 0 0 var(--t-blue)",
          borderRadius: "1rem 0.5rem 1.5rem 0.3rem",
          overflow: "hidden",
          background: "var(--t-surface)",
        }}
      >
        {/* LEFT PANEL */}
        <div style={{ borderRight: "3px solid var(--t-fg)" }}>
          {FEATURES.map((feature, i) => {
            const isActive = state.activeFeature === feature.id
            return (
              <button
                key={feature.id}
                onClick={() => setState((prev) => ({ ...prev, activeFeature: feature.id as ActiveFeature }))}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "18px 20px",
                  background: isActive ? `${TAB_COLORS[i]}15` : "transparent",
                  color: "var(--t-fg)",
                  border: "none",
                  borderBottom: i < FEATURES.length - 1 ? "2px solid var(--t-fg)" : "none",
                  borderLeft: isActive ? `4px solid ${TAB_COLORS[i]}` : "4px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  fontFamily: "var(--font-body), sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLElement).style.background = `${TAB_COLORS[i]}08`
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLElement).style.background = "transparent"
                  }
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: isActive ? TAB_COLORS[i] : "var(--t-fg)",
                    fontFamily: "var(--font-display), sans-serif",
                    marginBottom: "4px",
                    transition: "color 0.15s ease",
                  }}
                >
                  {feature.label}
                </div>
                <div style={{ fontSize: "10px", lineHeight: 1.5, color: "var(--t-muted)" }}>
                  {feature.description}
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT PANEL */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* PREVIEW */}
          <div
            style={{
              position: "relative",
              minHeight: "400px",
              flex: 1,
              overflow: "hidden",
              background: "#f0ede6",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: BOUNCE }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image src={currentImage} alt="" fill sizes="60vw" className="object-cover" priority={currentImage === "/images/classic-desktop.jpg"} />
              </motion.div>
            </AnimatePresence>

            {/* Bottom label */}
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                zIndex: 2,
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: TAB_COLORS[activeIndex],
                  color: TAB_COLORS[activeIndex] === "#ffcc00" ? "var(--t-fg)" : "var(--t-surface)",
                  padding: "4px 12px",
                  fontSize: "10px",
                  fontWeight: 700,
                  border: "2px solid var(--t-fg)",
                  boxShadow: "2px 2px 0 0 var(--t-fg)",
                  fontFamily: "var(--font-body), sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {currentValue}
              </div>
              <div
                style={{
                  background: "var(--t-surface)",
                  color: "var(--t-fg)",
                  padding: "4px 10px",
                  fontSize: "9px",
                  fontWeight: 600,
                  border: "2px solid var(--t-fg)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Live
              </div>
            </div>

            {/* Preload */}
            <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0, overflow: "hidden" }}>
              {ALL_IMAGES.map((src) => (
                <Image key={src} src={src} alt="" width={1} height={1} priority={false} />
              ))}
            </div>
          </div>

          {/* OPTIONS BAR */}
          <div
            style={{
              borderTop: "3px solid var(--t-fg)",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              background: "var(--t-bg)",
            }}
          >
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--t-muted)" }}>
              Style:
            </span>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {activeFeatureData.options.map((option, oi) => {
                const isOptionActive = currentValue === option.value
                const optColor = TAB_COLORS[(activeIndex + oi) % TAB_COLORS.length]
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(state.activeFeature, option.value)}
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "6px 14px",
                      border: `2px solid ${isOptionActive ? "var(--t-fg)" : "var(--t-muted)"}`,
                      background: isOptionActive ? optColor : "transparent",
                      color: isOptionActive ? (optColor === "#ffcc00" ? "var(--t-fg)" : "var(--t-surface)") : "var(--t-fg)",
                      boxShadow: isOptionActive ? `2px 2px 0 0 var(--t-fg)` : "none",
                      borderRadius: "0.5rem",
                      transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "pointer",
                      fontFamily: "var(--font-body), sans-serif",
                      textTransform: "capitalize",
                    }}
                    onMouseEnter={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-fg)"
                        ;(e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = "var(--t-muted)"
                        ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                      }
                    }}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
