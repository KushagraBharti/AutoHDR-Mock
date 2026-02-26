"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const AURORA_BORDER_STYLE = `
@keyframes au-border-cycle {
  0%   { border-left-color: #4ade80; }
  25%  { border-left-color: #2dd4bf; }
  50%  { border-left-color: #38bdf8; }
  75%  { border-left-color: #818cf8; }
  100% { border-left-color: #4ade80; }
}
`

export default function AuCapabilities() {
  const [state, setState] = useState<CapabilityState>(DEFAULT_STATE)
  const [styleInjected, setStyleInjected] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  useEffect(() => {
    if (styleInjected) return
    const tag = document.createElement("style")
    tag.textContent = AURORA_BORDER_STYLE
    document.head.appendChild(tag)
    setStyleInjected(true)
  }, [styleInjected])

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
        padding: "120px 40px",
        background: "var(--t-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background aurora orbs */}
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          left: "-10%",
          top: "20%",
        }}
        animate={{
          x: ["0%", "5%", "-3%", "0%"],
          y: ["0%", "-5%", "3%", "0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          right: "-5%",
          bottom: "10%",
        }}
        animate={{
          x: ["0%", "-4%", "6%", "0%"],
          y: ["0%", "4%", "-6%", "0%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--t-accent)",
              marginBottom: "16px",
              opacity: 0.8,
            }}
          >
            Capabilities
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--t-fg)",
              margin: "0 0 16px",
            }}
          >
            AI Enhancement{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal), var(--t-aurora-blue), var(--t-accent2))",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "au-iridescent 4s ease infinite",
              }}
            >
              Suite
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "var(--font-body), sans-serif",
              fontWeight: 300,
              color: "var(--t-fg)",
              opacity: 0.45,
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Select a feature to preview real results. Every edit powered by computer vision trained on real estate imagery.
          </p>
        </motion.div>

        {/* Main glass container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* LEFT PANEL — feature tabs */}
          <div
            style={{
              borderRight: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Panel header */}
            <div
              style={{
                padding: "20px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--t-fg)",
                  opacity: 0.6,
                }}
              >
                Features
              </span>
            </div>

            {/* Feature tabs */}
            <div style={{ flex: 1 }}>
              {FEATURES.map((feature, i) => {
                const isActive = state.activeFeature === feature.id
                const isHovered = hoveredTab === feature.id
                return (
                  <button
                    key={feature.id}
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        activeFeature: feature.id as ActiveFeature,
                      }))
                    }
                    onMouseEnter={() => setHoveredTab(feature.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "18px 28px",
                      background: isActive
                        ? "rgba(255,255,255,0.04)"
                        : isHovered
                        ? "rgba(255,255,255,0.02)"
                        : "transparent",
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: isActive
                        ? "3px solid var(--t-accent)"
                        : "3px solid transparent",
                      borderBottom:
                        i < FEATURES.length - 1
                          ? "1px solid rgba(255,255,255,0.04)"
                          : "none",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                      fontFamily: "var(--font-body), sans-serif",
                      ...(isActive ? { animation: "au-border-cycle 4s linear infinite" } : {}),
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {/* Feature name */}
                      <div
                        style={{
                          fontSize: "14px",
                          fontFamily: "var(--font-display), sans-serif",
                          fontWeight: isActive ? 600 : 400,
                          letterSpacing: "0.01em",
                          color: isActive ? "var(--t-fg)" : "rgba(232,234,240,0.55)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {feature.label}
                      </div>
                      {/* Feature description */}
                      <div
                        style={{
                          fontSize: "12px",
                          fontFamily: "var(--font-body), sans-serif",
                          fontWeight: 300,
                          lineHeight: 1.5,
                          color: "rgba(232,234,240,0.35)",
                        }}
                      >
                        {feature.description}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Option controls below tabs */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "20px 28px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(232,234,240,0.4)",
                  marginBottom: "14px",
                }}
              >
                Select Mode
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {activeFeatureData.type === "toggle" ? (
                  ["off", "on"].map((val) => {
                    const isOptionActive = currentValue === val
                    const isOptionHovered = hoveredOption === val
                    return (
                      <button
                        key={val}
                        onClick={() => handleOptionChange(val)}
                        onMouseEnter={() => setHoveredOption(val)}
                        onMouseLeave={() => setHoveredOption(null)}
                        style={{
                          fontSize: "12px",
                          fontFamily: "var(--font-body), sans-serif",
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                          textTransform: "capitalize",
                          padding: "8px 18px",
                          borderRadius: "20px",
                          border: isOptionActive
                            ? "1px solid transparent"
                            : "1px solid rgba(255,255,255,0.1)",
                          background: isOptionActive
                            ? "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal))"
                            : isOptionHovered
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(255,255,255,0.03)",
                          color: isOptionActive ? "var(--t-bg)" : "rgba(232,234,240,0.6)",
                          boxShadow: isOptionActive
                            ? "0 0 16px rgba(74,222,128,0.3)"
                            : "none",
                          transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                          cursor: "pointer",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                        }}
                      >
                        {val}
                      </button>
                    )
                  })
                ) : (
                  activeFeatureData.options.map((option) => {
                    const isOptionActive = currentValue === option.value
                    const isOptionHovered = hoveredOption === option.value
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleOptionChange(option.value)}
                        onMouseEnter={() => setHoveredOption(option.value)}
                        onMouseLeave={() => setHoveredOption(null)}
                        style={{
                          fontSize: "12px",
                          fontFamily: "var(--font-body), sans-serif",
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          border: isOptionActive
                            ? "1px solid transparent"
                            : "1px solid rgba(255,255,255,0.1)",
                          background: isOptionActive
                            ? "linear-gradient(135deg, var(--t-accent), var(--t-aurora-teal))"
                            : isOptionHovered
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(255,255,255,0.03)",
                          color: isOptionActive ? "var(--t-bg)" : "rgba(232,234,240,0.6)",
                          boxShadow: isOptionActive
                            ? "0 0 16px rgba(74,222,128,0.3)"
                            : "none",
                          transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                          cursor: "pointer",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
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
              minHeight: "520px",
            }}
          >
            {/* Image with AnimatePresence — blur-in/blur-out */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{ position: "absolute", inset: 0, zIndex: 1 }}
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

            {/* Corner brackets — aurora teal */}
            {/* Top-left */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                width: 24,
                height: 24,
                borderTop: "2px solid var(--t-aurora-teal)",
                borderLeft: "2px solid var(--t-aurora-teal)",
                zIndex: 4,
                opacity: 0.5,
                boxShadow: "0 0 8px rgba(45,212,191,0.3)",
              }}
            />
            {/* Top-right */}
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 24,
                height: 24,
                borderTop: "2px solid var(--t-aurora-teal)",
                borderRight: "2px solid var(--t-aurora-teal)",
                zIndex: 4,
                opacity: 0.5,
                boxShadow: "0 0 8px rgba(45,212,191,0.3)",
              }}
            />
            {/* Bottom-left */}
            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                width: 24,
                height: 24,
                borderBottom: "2px solid var(--t-aurora-teal)",
                borderLeft: "2px solid var(--t-aurora-teal)",
                zIndex: 4,
                opacity: 0.5,
                boxShadow: "0 0 8px rgba(45,212,191,0.3)",
              }}
            />
            {/* Bottom-right */}
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                width: 24,
                height: 24,
                borderBottom: "2px solid var(--t-aurora-teal)",
                borderRight: "2px solid var(--t-aurora-teal)",
                zIndex: 4,
                opacity: 0.5,
                boxShadow: "0 0 8px rgba(45,212,191,0.3)",
              }}
            />

            {/* Bottom label overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 3,
                padding: "60px 24px 20px",
                background: "linear-gradient(transparent, rgba(8,6,15,0.85))",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  color: "var(--t-fg)",
                }}
              >
                {activeFeatureData.label}
              </p>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "var(--t-aurora-teal)",
                  background: "rgba(45,212,191,0.1)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(45,212,191,0.2)",
                  borderRadius: "20px",
                  padding: "5px 14px",
                }}
              >
                Live Preview
              </div>
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
