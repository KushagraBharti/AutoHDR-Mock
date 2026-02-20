"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const STEP_TRANSITION = { duration: 0.08, ease: [1, 0, 0, 1] as [number, number, number, number] }

const TAB_NUMBERS = ["01", "02", "03", "04"]

export default function BrutCapabilities() {
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
        borderTop: "2px solid var(--t-fg)",
        borderBottom: "2px solid var(--t-fg)",
        fontFamily: "var(--font-mono), monospace",
      }}
    >
      {/* Section header */}
      <div
        style={{
          borderBottom: "1px solid var(--t-fg)",
          padding: "24px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--t-muted)",
            }}
          >
            — 002 — CAPABILITIES
          </span>
          <div style={{ width: "1px", height: "16px", background: "var(--t-muted)", opacity: 0.3 }} />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            AI PHOTO ENHANCEMENT SUITE
          </span>
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "var(--t-muted)",
            maxWidth: "400px",
            lineHeight: 1.6,
          }}
        >
          Select a feature to preview real results. Every edit powered by computer vision trained on
          real estate imagery.
        </p>
      </div>

      {/* Main body: sidebar + preview */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
        }}
      >
        {/* LEFT PANEL — feature tabs */}
        <div style={{ borderRight: "2px solid var(--t-fg)" }}>
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
                  padding: "20px 24px",
                  background: isActive ? "var(--t-fg)" : "transparent",
                  color: isActive ? "var(--t-bg)" : "var(--t-fg)",
                  border: "none",
                  borderBottom: i < FEATURES.length - 1 ? "1px solid var(--t-fg)" : "none",
                  cursor: "crosshair",
                  transition: "all 0.05s steps(1)",
                  fontFamily: "var(--font-mono), monospace",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLElement).style.background = "var(--t-surface)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLElement).style.background = "transparent"
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  {/* Tab number */}
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: isActive ? "var(--t-accent)" : "var(--t-muted)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {TAB_NUMBERS[i]}
                  </span>
                  <div>
                    {/* Feature name */}
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {feature.label}
                    </div>
                    {/* Feature description */}
                    <div
                      style={{
                        fontSize: "10px",
                        lineHeight: 1.5,
                        color: isActive ? "rgba(243,243,238,0.6)" : "var(--t-muted)",
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
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={STEP_TRANSITION}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={currentImage}
                  alt=""
                  fill
                  sizes="50vw"
                  className="object-cover"
                  priority={currentImage === "/images/classic-desktop.jpg"}
                />
              </motion.div>
            </AnimatePresence>

            {/* Bottom overlay label */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px 24px 16px",
                background:
                  "linear-gradient(to top, rgba(10,10,8,0.85) 0%, transparent 100%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(243,243,238,0.6)",
                    marginBottom: "4px",
                  }}
                >
                  {activeFeatureData.label}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#F3F3EE",
                  }}
                >
                  {currentValue.toUpperCase()}
                </div>
              </div>
              <div
                style={{
                  background: "var(--t-accent)",
                  color: "var(--t-fg)",
                  padding: "4px 8px",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                LIVE PREVIEW
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
              borderTop: "1px solid var(--t-fg)",
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
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--t-muted)",
                flexShrink: 0,
              }}
            >
              SELECT STYLE
            </span>
            <div
              style={{
                width: "1px",
                height: "16px",
                background: "var(--t-muted)",
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
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "8px 14px",
                      border: "1px solid var(--t-fg)",
                      background: isOptionActive ? "var(--t-accent)" : "transparent",
                      color: "var(--t-fg)",
                      transition: "all 0.05s steps(1)",
                      cursor: "crosshair",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                    onMouseEnter={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.background = "var(--t-surface)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isOptionActive) {
                        ;(e.currentTarget as HTMLElement).style.background = "transparent"
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
