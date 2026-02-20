"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const TAB_NUMBERS = ["01", "02", "03", "04"]

export default function NNCapabilities() {
  const [state, setState] = useState<CapabilityState>(DEFAULT_STATE)

  const currentImage = resolveImage(state)

  const getCurrentValue = (): string => {
    if (state.activeFeature === "hdr") return state.hdrStyle
    if (state.activeFeature === "tv") return state.tvScene
    if (state.activeFeature === "fire") return state.fireOn ? "on" : "off"
    return state.grassOn ? "on" : "off"
  }

  const handleOptionChange = (value: string) => {
    const f = state.activeFeature
    if (f === "hdr") setState((p) => ({ ...p, hdrStyle: value as HdrStyle }))
    else if (f === "tv") setState((p) => ({ ...p, tvScene: value as TvScene }))
    else if (f === "fire") setState((p) => ({ ...p, fireOn: value === "on" }))
    else setState((p) => ({ ...p, grassOn: value === "on" }))
  }

  const activeFeatureData = FEATURES.find((f) => f.id === state.activeFeature)!
  const currentValue = getCurrentValue()

  return (
    <section
      style={{
        clipPath: "polygon(0 60px, 100% 0, 100% 100%, 0 100%)",
        marginTop: "-60px",
        paddingTop: "100px",
        paddingBottom: "80px",
        background: "var(--t-surface)",
        position: "relative",
      }}
    >
      {/* Subtle grid on section bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,45,120,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,120,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--t-pink)",
                marginBottom: "8px",
                textShadow: "0 0 8px rgba(255,45,120,0.4)",
              }}
            >
              ◆ 002 — CAPABILITIES
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), Impact, sans-serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 0.9,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--t-fg)",
                margin: 0,
              }}
            >
              AI ENHANCEMENT
              <br />
              <span
                style={{
                  color: "var(--t-pink)",
                  textShadow: "0 0 16px rgba(255,45,120,0.5)",
                }}
              >
                SUITE
              </span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-mono), monospace",
              color: "var(--t-muted)",
              maxWidth: "360px",
              lineHeight: 1.7,
            }}
          >
            Select a feature to preview real results. Every edit powered by computer vision trained on real estate imagery.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          style={{
            border: "1px solid rgba(255,45,120,0.3)",
            boxShadow: "0 0 40px rgba(255,45,120,0.05)",
            background: "var(--t-bg)",
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            overflow: "hidden",
          }}
        >
          {/* LEFT PANEL — feature tabs */}
          <div
            style={{
              borderRight: "1px solid rgba(255,45,120,0.2)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Panel header */}
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid rgba(255,45,120,0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--t-pink)",
                  textShadow: "0 0 8px rgba(255,45,120,0.3)",
                }}
              >
                CAPABILITIES
              </span>
            </div>

            {/* Feature tabs */}
            <div style={{ flex: 1 }}>
              {FEATURES.map((feature, i) => {
                const isActive = state.activeFeature === feature.id
                return (
                  <button
                    key={feature.id}
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        activeFeature: feature.id as ActiveFeature,
                      }))
                    }
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "16px 24px",
                      background: isActive
                        ? "rgba(255,45,120,0.08)"
                        : "transparent",
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: isActive
                        ? "3px solid var(--t-pink)"
                        : "3px solid transparent",
                      borderBottom:
                        i < FEATURES.length - 1
                          ? "1px solid rgba(255,45,120,0.15)"
                          : "none",
                      cursor: "pointer",
                      transition:
                        "background 0.2s ease, border-color 0.2s ease",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        ;(e.currentTarget as HTMLElement).style.background =
                          "rgba(255,45,120,0.04)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        ;(e.currentTarget as HTMLElement).style.background =
                          "transparent"
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      {/* Tab number badge */}
                      <span
                        style={{
                          fontFamily: "var(--font-display), Impact, sans-serif",
                          fontSize: "14px",
                          color: isActive ? "var(--t-pink)" : "var(--t-muted)",
                          textShadow: isActive
                            ? "0 0 8px rgba(255,45,120,0.5)"
                            : "none",
                          marginTop: "1px",
                          flexShrink: 0,
                          transition: "color 0.2s ease, text-shadow 0.2s ease",
                        }}
                      >
                        {TAB_NUMBERS[i]}
                      </span>
                      <div>
                        {/* Feature name */}
                        <div
                          style={{
                            fontSize: "12px",
                            fontFamily: "var(--font-mono), monospace",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "4px",
                            color: isActive ? "var(--t-pink)" : "var(--t-fg)",
                            textShadow: isActive
                              ? "0 0 8px var(--t-pink)"
                              : "none",
                            transition: "color 0.2s ease, text-shadow 0.2s ease",
                          }}
                        >
                          {feature.label}
                        </div>
                        {/* Feature description */}
                        <div
                          style={{
                            fontSize: "11px",
                            fontFamily: "var(--font-mono), monospace",
                            lineHeight: 1.5,
                            color: "var(--t-muted)",
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

            {/* Option controls below tabs */}
            <div
              style={{
                borderTop: "1px solid rgba(255,45,120,0.2)",
                padding: "16px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-mono), monospace",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--t-muted)",
                  marginBottom: "12px",
                }}
              >
                SELECT MODE
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {activeFeatureData.type === "toggle" ? (
                  /* Toggle: OFF / ON */
                  ["off", "on"].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleOptionChange(val)}
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-mono), monospace",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "8px 16px",
                        border:
                          currentValue === val
                            ? "1px solid var(--t-pink)"
                            : "1px solid rgba(255,45,120,0.2)",
                        background:
                          currentValue === val
                            ? "var(--t-pink)"
                            : "transparent",
                        color:
                          currentValue === val ? "#07010F" : "var(--t-muted)",
                        boxShadow:
                          currentValue === val
                            ? "var(--t-glow-pink)"
                            : "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                    >
                      {val.toUpperCase()}
                    </button>
                  ))
                ) : (
                  /* Radio pills */
                  activeFeatureData.options.map((option) => {
                    const isOptionActive = currentValue === option.value
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleOptionChange(option.value)}
                        style={{
                          fontSize: "11px",
                          fontFamily: "var(--font-mono), monospace",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "7px 14px",
                          border: isOptionActive
                            ? "1px solid var(--t-pink)"
                            : "1px solid rgba(255,45,120,0.2)",
                          background: isOptionActive
                            ? "var(--t-pink)"
                            : "transparent",
                          color: isOptionActive
                            ? "#07010F"
                            : "var(--t-muted)",
                          boxShadow: isOptionActive
                            ? "var(--t-glow-pink)"
                            : "none",
                          transition: "all 0.2s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          if (!isOptionActive) {
                            ;(
                              e.currentTarget as HTMLElement
                            ).style.borderColor = "rgba(255,45,120,0.5)"
                            ;(
                              e.currentTarget as HTMLElement
                            ).style.color = "var(--t-fg)"
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isOptionActive) {
                            ;(
                              e.currentTarget as HTMLElement
                            ).style.borderColor = "rgba(255,45,120,0.2)"
                            ;(
                              e.currentTarget as HTMLElement
                            ).style.color = "var(--t-muted)"
                          }
                        }}
                      >
                        {option.label}
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — preview */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "480px",
              borderLeft: "1px solid rgba(255,45,120,0.2)",
            }}
          >
            {/* Scanlines overlay on image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                pointerEvents: "none",
                background:
                  "repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 3px)",
              }}
            />

            {/* Image with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: EASE }}
                style={{ position: "absolute", inset: 0, zIndex: 1 }}
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

            {/* Pink bottom gradient + label */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 3,
                padding: "40px 20px 16px",
                background:
                  "linear-gradient(transparent, rgba(7,1,15,0.9))",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--t-pink)",
                  textShadow: "0 0 10px var(--t-pink)",
                }}
              >
                {activeFeatureData.label}
              </p>
              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-mono), monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--t-cyan)",
                  textShadow: "0 0 6px rgba(0,240,255,0.5)",
                  border: "1px solid rgba(0,240,255,0.3)",
                  padding: "4px 8px",
                }}
              >
                LIVE PREVIEW
              </div>
            </div>

            {/* HUD top-left bracket */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                width: 20,
                height: 20,
                borderTop: "2px solid var(--t-pink)",
                borderLeft: "2px solid var(--t-pink)",
                zIndex: 4,
                opacity: 0.6,
                boxShadow: "0 0 8px rgba(255,45,120,0.3)",
              }}
            />
            {/* HUD top-right bracket */}
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                width: 20,
                height: 20,
                borderTop: "2px solid var(--t-pink)",
                borderRight: "2px solid var(--t-pink)",
                zIndex: 4,
                opacity: 0.6,
                boxShadow: "0 0 8px rgba(255,45,120,0.3)",
              }}
            />

            {/* Hidden preload images */}
            <div
              style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                width: 0,
                height: 0,
                overflow: "hidden",
              }}
            >
              {ALL_IMAGES.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={1}
                  height={1}
                  priority={false}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
