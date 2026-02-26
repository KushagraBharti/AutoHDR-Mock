"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export default function BtCapabilities() {
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

  const tabRadii = [
    "1rem 0.5rem 0.8rem 0.3rem",
    "0.5rem 1rem 0.3rem 0.8rem",
    "0.8rem 0.3rem 1rem 0.5rem",
    "0.3rem 0.8rem 0.5rem 1rem",
  ]

  return (
    <section
      style={{
        padding: "80px 48px",
        fontFamily: "var(--font-body), Georgia, serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
          <svg viewBox="0 0 16 16" style={{ width: "10px", height: "10px" }}>
            <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent)" opacity="0.5" />
          </svg>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "var(--t-accent)",
              fontStyle: "italic",
            }}
          >
            What We Grow
          </span>
          <svg viewBox="0 0 16 16" style={{ width: "10px", height: "10px" }}>
            <path d="M8 0 C8 0 2 4 2 8 C2 12 8 16 8 16 C8 16 14 12 14 8 C14 4 8 0 8 0Z" fill="var(--t-accent)" opacity="0.5" />
          </svg>
        </div>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontFamily: "var(--font-display), serif",
            fontWeight: 700,
            color: "var(--t-fg)",
            fontVariationSettings: "'WONK' 1",
          }}
        >
          Capabilities
        </h2>
      </div>

      {/* Main body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          maxWidth: "1100px",
          margin: "0 auto",
          background: "var(--t-surface)",
          borderRadius: "2rem 1.5rem 2.5rem 1rem",
          border: "1px solid rgba(124, 149, 107, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* LEFT PANEL */}
        <div style={{ borderRight: "1px solid rgba(124, 149, 107, 0.1)", padding: "8px" }}>
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
                  background: isActive ? "rgba(124, 149, 107, 0.1)" : "transparent",
                  color: "var(--t-fg)",
                  border: "none",
                  borderLeft: isActive ? "3px solid var(--t-accent)" : "3px solid transparent",
                  borderRadius: tabRadii[i],
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  fontFamily: "var(--font-body), Georgia, serif",
                  marginBottom: "4px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLElement).style.background = "rgba(124, 149, 107, 0.05)"
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
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "4px",
                    color: isActive ? "var(--t-accent)" : "var(--t-fg)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {feature.label}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    lineHeight: 1.5,
                    color: "rgba(240, 234, 214, 0.4)",
                    fontStyle: "italic",
                  }}
                >
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
              minHeight: "420px",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE_SMOOTH }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={currentImage}
                  alt=""
                  fill
                  sizes="60vw"
                  className="object-cover"
                  priority={currentImage === "/images/classic-desktop.jpg"}
                />
              </motion.div>
            </AnimatePresence>

            {/* Bottom overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "40px 24px 16px",
                background: "linear-gradient(to top, rgba(26, 26, 20, 0.85) 0%, transparent 100%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                zIndex: 1,
              }}
            >
              <div>
                <div style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(240, 234, 214, 0.5)", marginBottom: "4px", fontStyle: "italic" }}>
                  {activeFeatureData.label}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--t-accent)",
                    fontFamily: "var(--font-display), serif",
                    fontVariationSettings: "'WONK' 1",
                    textTransform: "capitalize",
                  }}
                >
                  {currentValue}
                </div>
              </div>
              <div
                style={{
                  background: "rgba(124, 149, 107, 0.2)",
                  border: "1px solid rgba(124, 149, 107, 0.3)",
                  color: "var(--t-accent)",
                  padding: "4px 12px",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  borderRadius: "1rem",
                  fontStyle: "italic",
                }}
              >
                Live Preview
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
              borderTop: "1px solid rgba(124, 149, 107, 0.1)",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              background: "var(--t-bg)",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "var(--t-accent)",
                flexShrink: 0,
                fontStyle: "italic",
              }}
            >
              Select style
            </span>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {activeFeatureData.options.map((option) => {
                const isOptionActive = currentValue === option.value
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(state.activeFeature, option.value)}
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "7px 14px",
                      border: `1px solid ${isOptionActive ? "var(--t-accent)" : "rgba(124, 149, 107, 0.15)"}`,
                      background: isOptionActive ? "rgba(124, 149, 107, 0.15)" : "transparent",
                      color: isOptionActive ? "var(--t-accent)" : "var(--t-fg)",
                      borderRadius: "1.2rem",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      fontFamily: "var(--font-body), Georgia, serif",
                    }}
                    onMouseEnter={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124, 149, 107, 0.4)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124, 149, 107, 0.15)"
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
