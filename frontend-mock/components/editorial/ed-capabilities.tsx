"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { CapabilityState, ActiveFeature, Feature } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

function getCurrentValue(feature: Feature, state: CapabilityState): string {
  if (feature.id === "hdr") return state.hdrStyle
  if (feature.id === "tv") return state.tvScene
  if (feature.id === "fire") return state.fireOn ? "on" : "off"
  if (feature.id === "grass") return state.grassOn ? "on" : "off"
  return ""
}

function getValueLabel(feature: Feature, state: CapabilityState): string {
  const val = getCurrentValue(feature, state)
  const opt = feature.options.find((o) => o.value === val)
  return opt ? opt.label : val
}

export default function EdCapabilities() {
  const [state, setState] = useState<CapabilityState>(DEFAULT_STATE)
  const activeFeature = FEATURES.find((f) => f.id === state.activeFeature)!
  const currentImage = resolveImage(state)

  function handleFeatureClick(id: ActiveFeature) {
    setState((prev) => ({ ...prev, activeFeature: id }))
  }

  function handleOptionSelect(value: string) {
    setState((prev) => {
      if (prev.activeFeature === "hdr") {
        return { ...prev, hdrStyle: value as CapabilityState["hdrStyle"] }
      }
      if (prev.activeFeature === "tv") {
        return { ...prev, tvScene: value as CapabilityState["tvScene"] }
      }
      if (prev.activeFeature === "fire") {
        return { ...prev, fireOn: value === "on" }
      }
      if (prev.activeFeature === "grass") {
        return { ...prev, grassOn: value === "on" }
      }
      return prev
    })
  }

  const activeValue = getCurrentValue(activeFeature, state)

  return (
    <section
      style={{
        background: "var(--t-bg)",
        padding: "96px 0 0",
      }}
    >
      {/* Hidden image preload */}
      <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
        {ALL_IMAGES.map((src) => (
          <img key={src} src={src} alt="" width={1} height={1} loading="eager" />
        ))}
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{ marginBottom: "48px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--t-accent)",
              marginBottom: "14px",
            }}
          >
            Feature &mdash; AI Capabilities
          </p>
          <div style={{ height: "1px", background: "var(--t-rule)" }} />
        </motion.div>
      </div>

      {/* 2-column grid — full bleed on right */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "460px 1fr",
          minHeight: "640px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
          style={{
            padding: "0 48px 64px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* H2 */}
          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "var(--t-fg)",
              marginBottom: "20px",
            }}
          >
            Every edit,
            <br />
            automated.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "var(--t-muted)",
              marginBottom: "40px",
              maxWidth: "360px",
            }}
          >
            Our AI models are trained on millions of professional real estate
            photographs. Select a feature below and watch the result update
            in real time.
          </p>

          {/* Feature list — TOC style */}
          <div style={{ flex: 1 }}>
            {FEATURES.map((feature, i) => {
              const isActive = state.activeFeature === feature.id
              return (
                <div key={feature.id}>
                  <div style={{ height: "1px", background: "var(--t-rule)" }} />
                  <button
                    onClick={() => handleFeatureClick(feature.id)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "18px 0 18px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                      borderLeft: isActive
                        ? "3px solid var(--t-accent)"
                        : "3px solid transparent",
                      transition: "border-color 0.3s ease",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: isActive ? "var(--t-accent)" : "var(--t-muted)",
                        minWidth: "24px",
                        paddingTop: "2px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-body), Georgia, serif",
                            fontSize: "13px",
                            fontWeight: isActive ? 700 : 400,
                            color: isActive ? "var(--t-fg)" : "var(--t-muted)",
                            letterSpacing: "0.02em",
                            transition: "color 0.3s ease, font-weight 0.1s",
                          }}
                        >
                          {feature.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body), Georgia, serif",
                            fontSize: "11px",
                            color: isActive ? "var(--t-accent)" : "var(--t-rule)",
                            transition: "color 0.3s ease",
                          }}
                        >
                          &rarr;
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body), Georgia, serif",
                          fontSize: "11px",
                          color: "var(--t-muted)",
                          lineHeight: 1.5,
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </button>

                  {/* Option controls — shown when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            paddingLeft: "56px",
                            paddingBottom: "20px",
                            paddingTop: "4px",
                          }}
                        >
                          {feature.type === "radio" ? (
                            /* Radio style — underlined text buttons */
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 0" }}>
                              {feature.options.map((opt, oi) => {
                                const isSelected = activeValue === opt.value
                                return (
                                  <button
                                    key={opt.value}
                                    onClick={() => handleOptionSelect(opt.value)}
                                    style={{
                                      background: "none",
                                      border: "none",
                                      padding: "4px 12px 4px 0",
                                      cursor: "pointer",
                                      fontFamily: "var(--font-body), Georgia, serif",
                                      fontSize: "12px",
                                      fontWeight: isSelected ? 700 : 400,
                                      color: isSelected ? "var(--t-accent)" : "var(--t-muted)",
                                      borderBottom: isSelected
                                        ? "2px solid var(--t-accent)"
                                        : "2px solid transparent",
                                      paddingBottom: "2px",
                                      transition: "color 0.25s ease, border-color 0.25s ease",
                                      marginRight: oi < feature.options.length - 1 ? "8px" : "0",
                                    }}
                                  >
                                    {opt.label}
                                  </button>
                                )
                              })}
                            </div>
                          ) : (
                            /* Toggle style — text pill buttons */
                            <div
                              style={{
                                display: "inline-flex",
                                border: "1px solid var(--t-rule)",
                                overflow: "hidden",
                              }}
                            >
                              {feature.options.map((opt) => {
                                const isSelected = activeValue === opt.value
                                return (
                                  <button
                                    key={opt.value}
                                    onClick={() => handleOptionSelect(opt.value)}
                                    style={{
                                      background: isSelected ? "var(--t-accent)" : "transparent",
                                      border: "none",
                                      padding: "6px 20px",
                                      cursor: "pointer",
                                      fontFamily: "var(--font-body), Georgia, serif",
                                      fontSize: "11px",
                                      fontWeight: 700,
                                      letterSpacing: "0.1em",
                                      textTransform: "uppercase",
                                      color: isSelected ? "#F7F4EF" : "var(--t-muted)",
                                      transition: "background 0.25s ease, color 0.25s ease",
                                    }}
                                  >
                                    {opt.label}
                                  </button>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {i === FEATURES.length - 1 && (
                    <div style={{ height: "1px", background: "var(--t-rule)" }} />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* RIGHT PANEL — full bleed image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "560px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={currentImage}
                alt={`${activeFeature.label} — ${getValueLabel(activeFeature, state)}`}
                fill
                sizes="50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "40px 24px 20px",
              background: "linear-gradient(transparent, rgba(28,20,16,0.72))",
              color: "#F7F4EF",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "13px",
                opacity: 0.9,
              }}
            >
              {activeFeature.label} &mdash; {getValueLabel(activeFeature, state)}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div style={{ height: "1px", background: "var(--t-rule)", marginTop: "80px" }} />
    </section>
  )
}
