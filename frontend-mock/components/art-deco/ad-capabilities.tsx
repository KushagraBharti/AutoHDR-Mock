"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const EASE_DECO = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const TAB_NUMBERS = ["I", "II", "III", "IV"]

export default function AdCapabilities() {
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

  return (
    <section
      style={{
        borderTop: "1px solid var(--t-border-gold)",
        borderBottom: "1px solid var(--t-border-gold)",
        fontFamily: "var(--font-body), Georgia, serif",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding: "32px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          borderBottom: "1px solid var(--t-border-gold)",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "var(--t-accent)", opacity: 0.2 }} />
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--t-accent)",
              fontWeight: 500,
              display: "block",
              marginBottom: "8px",
            }}
          >
            Section II
          </span>
          <span
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontFamily: "var(--font-display), serif",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--t-fg)",
            }}
          >
            Capabilities
          </span>
        </div>
        <div style={{ flex: 1, height: "1px", background: "var(--t-accent)", opacity: 0.2 }} />
      </div>

      {/* Main body: sidebar + preview */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
        }}
      >
        {/* LEFT PANEL — feature tabs */}
        <div style={{ borderRight: "1px solid var(--t-border-gold)" }}>
          {FEATURES.map((feature, i) => {
            const isActive = state.activeFeature === feature.id
            return (
              <button
                key={feature.id}
                onClick={() =>
                  setState((prev) => ({ ...prev, activeFeature: feature.id as ActiveFeature }))
                }
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "24px 28px",
                  background: isActive ? "rgba(212, 168, 67, 0.08)" : "transparent",
                  color: "var(--t-fg)",
                  border: "none",
                  borderBottom: i < FEATURES.length - 1 ? "1px solid rgba(212, 168, 67, 0.1)" : "none",
                  borderLeft: isActive ? "3px solid var(--t-accent)" : "3px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-body), Georgia, serif",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLElement).style.background = "rgba(212, 168, 67, 0.04)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLElement).style.background = "transparent"
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  {/* Roman numeral */}
                  <span
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-display), serif",
                      color: isActive ? "var(--t-accent)" : "var(--t-muted)",
                      marginTop: "1px",
                      flexShrink: 0,
                      letterSpacing: "0.05em",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {TAB_NUMBERS[i]}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                        color: isActive ? "var(--t-accent)" : "var(--t-fg)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {feature.label}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        lineHeight: 1.6,
                        color: "rgba(245, 240, 232, 0.45)",
                        fontStyle: "italic",
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT PANEL */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* PREVIEW AREA */}
          <div
            style={{
              position: "relative",
              minHeight: "440px",
              flex: 1,
              overflow: "hidden",
              background: "var(--t-surface)",
            }}
          >
            {/* Art deco corner ornaments */}
            {[
              { top: "12px", left: "12px", borderTop: "2px solid var(--t-accent)", borderLeft: "2px solid var(--t-accent)" },
              { top: "12px", right: "12px", borderTop: "2px solid var(--t-accent)", borderRight: "2px solid var(--t-accent)" },
              { bottom: "12px", left: "12px", borderBottom: "2px solid var(--t-accent)", borderLeft: "2px solid var(--t-accent)" },
              { bottom: "12px", right: "12px", borderBottom: "2px solid var(--t-accent)", borderRight: "2px solid var(--t-accent)" },
            ].map((cornerStyle, idx) => (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  zIndex: 2,
                  opacity: 0.4,
                  pointerEvents: "none",
                  ...cornerStyle,
                }}
              />
            ))}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE_DECO }}
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
                padding: "40px 28px 20px",
                background: "linear-gradient(to top, rgba(10, 14, 26, 0.85) 0%, transparent 100%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                zIndex: 1,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(245, 240, 232, 0.5)",
                    marginBottom: "4px",
                  }}
                >
                  {activeFeatureData.label}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--t-accent)",
                    fontFamily: "var(--font-display), serif",
                  }}
                >
                  {currentValue}
                </div>
              </div>
              <div
                style={{
                  border: "1px solid var(--t-accent)",
                  color: "var(--t-accent)",
                  padding: "4px 12px",
                  fontSize: "8px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Live Preview
              </div>
            </div>

            {/* Hidden preload images */}
            <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0, overflow: "hidden" }}>
              {ALL_IMAGES.map((src) => (
                <Image key={src} src={src} alt="" width={1} height={1} priority={false} />
              ))}
            </div>
          </div>

          {/* OPTIONS BAR */}
          <div
            style={{
              borderTop: "1px solid var(--t-border-gold)",
              padding: "18px 28px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              background: "var(--t-bg)",
            }}
          >
            <span
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--t-accent)",
                flexShrink: 0,
              }}
            >
              Select Style
            </span>
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "var(--t-accent)",
                transform: "rotate(45deg)",
                opacity: 0.3,
                flexShrink: 0,
              }}
            />
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {activeFeatureData.options.map((option) => {
                const isOptionActive = currentValue === option.value
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(state.activeFeature, option.value)}
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "8px 16px",
                      border: `1px solid ${isOptionActive ? "var(--t-accent)" : "rgba(212, 168, 67, 0.2)"}`,
                      background: isOptionActive ? "rgba(212, 168, 67, 0.15)" : "transparent",
                      color: isOptionActive ? "var(--t-accent)" : "var(--t-fg)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      fontFamily: "var(--font-body), Georgia, serif",
                    }}
                    onMouseEnter={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 168, 67, 0.5)"
                        ;(e.currentTarget as HTMLElement).style.color = "var(--t-accent)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 168, 67, 0.2)"
                        ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
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
