"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

export default function NcCapabilities() {
  const [state, setState] = useState<CapabilityState>(DEFAULT_STATE)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

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
        padding: "100px 0",
        background: "var(--t-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Venetian blind shadow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(25deg, transparent 0px, transparent 25px, rgba(0,0,0,0.15) 25px, rgba(0,0,0,0.15) 60px)",
          opacity: 0.2,
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
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-body), Georgia, serif",
                fontWeight: 400,
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "var(--t-mid-gray)",
                marginBottom: "12px",
              }}
            >
              Capabilities
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Bodoni MT', serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "var(--t-fg)",
                margin: 0,
              }}
            >
              AI Enhancement
              <br />
              <span
                style={{
                  color: "var(--t-accent)",
                  fontStyle: "italic",
                }}
              >
                Suite
              </span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "var(--font-body), Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--t-silver)",
              maxWidth: "360px",
              lineHeight: 1.7,
            }}
          >
            Select a feature to preview real results. Every edit powered by computer vision trained on real estate imagery.
          </p>
        </motion.div>

        {/* Two-panel layout with hard vertical divider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          style={{
            border: "1px solid var(--t-muted)",
            borderRadius: 0,
            background: "var(--t-bg)",
            display: "grid",
            gridTemplateColumns: "320px 1px 1fr",
            overflow: "hidden",
            minHeight: "520px",
          }}
        >
          {/* LEFT PANEL: Feature tabs + options */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Panel header */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid var(--t-muted)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), 'Bodoni MT', serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--t-mid-gray)",
                }}
              >
                Features
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
                      padding: "18px 24px",
                      background: isActive
                        ? "rgba(196,30,42,0.05)"
                        : hoveredTab === feature.id
                        ? "rgba(255,255,255,0.02)"
                        : "transparent",
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: isActive
                        ? "3px solid var(--t-accent)"
                        : "3px solid transparent",
                      borderBottom:
                        i < FEATURES.length - 1
                          ? "1px solid rgba(51,51,51,0.5)"
                          : "none",
                      cursor: "pointer",
                      transition:
                        "background 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
                      fontFamily: "var(--font-body), Georgia, serif",
                      borderRadius: 0,
                    }}
                    onMouseEnter={() => setHoveredTab(feature.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontWeight: 500,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                        color: isActive ? "var(--t-fg)" : "var(--t-mid-gray)",
                        transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    >
                      {feature.label}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontWeight: 300,
                        fontStyle: "italic",
                        lineHeight: 1.5,
                        color: "var(--t-mid-gray)",
                      }}
                    >
                      {feature.description}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Option controls */}
            <div
              style={{
                borderTop: "1px solid var(--t-muted)",
                padding: "18px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--t-mid-gray)",
                  marginBottom: "14px",
                }}
              >
                Select Mode
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {activeFeatureData.type === "toggle" ? (
                  ["off", "on"].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleOptionChange(val)}
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontWeight: 500,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        padding: "8px 18px",
                        border:
                          currentValue === val
                            ? "1px solid var(--t-accent)"
                            : "1px solid var(--t-muted)",
                        borderRadius: 0,
                        background: "transparent",
                        color:
                          currentValue === val ? "var(--t-accent)" : "var(--t-mid-gray)",
                        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                        cursor: "pointer",
                      }}
                    >
                      {val.toUpperCase()}
                    </button>
                  ))
                ) : (
                  activeFeatureData.options.map((option) => {
                    const isOptionActive = currentValue === option.value
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleOptionChange(option.value)}
                        style={{
                          fontSize: "11px",
                          fontFamily: "var(--font-body), Georgia, serif",
                          fontWeight: 500,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          padding: "7px 14px",
                          border: isOptionActive
                            ? "1px solid var(--t-accent)"
                            : `1px solid ${hoveredOption === option.value ? "var(--t-mid-gray)" : "var(--t-muted)"}`,
                          borderRadius: 0,
                          background: "transparent",
                          color: isOptionActive
                            ? "var(--t-accent)"
                            : hoveredOption === option.value
                            ? "var(--t-fg)"
                            : "var(--t-mid-gray)",
                          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => setHoveredOption(option.value)}
                        onMouseLeave={() => setHoveredOption(null)}
                      >
                        {option.label}
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          </div>

          {/* HARD VERTICAL 1px WHITE DIVIDER */}
          <div
            style={{
              background: "var(--t-fg)",
              opacity: 0.15,
              width: "1px",
            }}
          />

          {/* RIGHT PANEL: Image preview with film-frame border */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "480px",
            }}
          >
            {/* Film-frame border: sprocket holes on left side */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "20px",
                height: "100%",
                background: "#000",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={`left-${i}`}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--t-muted)",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Film-frame border: sprocket holes on right side */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "20px",
                height: "100%",
                background: "#000",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={`right-${i}`}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--t-muted)",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Black outer border (top/bottom of film frame) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "12px",
                background: "#000",
                zIndex: 3,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "12px",
                background: "#000",
                zIndex: 3,
              }}
            />

            {/* Image with AnimatePresence — HARD CUT (0.05s) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.05, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                }}
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

            {/* B&W desaturation filter over image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                pointerEvents: "none",
                mixBlendMode: "saturation",
                background: "gray",
                opacity: 0.3,
              }}
            />

            {/* Bottom label gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 4,
                padding: "40px 32px 24px",
                background:
                  "linear-gradient(transparent, rgba(10,10,10,0.9))",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), 'Bodoni MT', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--t-fg)",
                }}
              >
                {activeFeatureData.label}
              </p>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontWeight: 400,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--t-mid-gray)",
                  border: "1px solid var(--t-muted)",
                  padding: "4px 10px",
                  borderRadius: 0,
                }}
              >
                LIVE PREVIEW
              </span>
            </div>

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
