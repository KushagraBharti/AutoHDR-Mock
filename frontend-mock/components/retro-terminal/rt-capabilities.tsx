"use client"

import { useState } from "react"
import Image from "next/image"
import type { CapabilityState, ActiveFeature } from "@/types/capabilities"
import type { HdrStyle, TvScene } from "@/types/capabilities"
import { resolveImage, ALL_IMAGES, DEFAULT_STATE, FEATURES } from "@/data/capabilities"

export default function RtCapabilities() {
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
    <section style={{ padding: "48px 24px", fontFamily: "var(--font-terminal)", borderTop: "1px dashed var(--t-fg)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        <div style={{ marginBottom: "32px" }}>
          <div>root@autohdr:~$ ./run_capability_demo.sh</div>
          <div>LOADING MODULES... [OK]</div>
          <br/>
          <div>=== AUTOHDR IMAGE PROCESSING SUITE ===</div>
        </div>

        <div style={{ border: "1px solid var(--t-fg)", padding: "16px", display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", borderBottom: "1px dashed var(--t-fg)", paddingBottom: "16px" }}>
            {FEATURES.map((feature) => {
              const isActive = state.activeFeature === feature.id
              return (
                <button
                  key={feature.id}
                  onClick={() => setState((prev) => ({ ...prev, activeFeature: feature.id as ActiveFeature }))}
                  style={{
                    background: isActive ? "var(--t-fg)" : "transparent",
                    color: isActive ? "var(--t-bg)" : "var(--t-fg)",
                    border: "none",
                    padding: "4px 12px",
                    cursor: "pointer",
                    fontSize: "18px",
                    textTransform: "uppercase",
                    fontFamily: "inherit"
                  }}
                >
                  [{isActive ? "*" : " "}] {feature.label}
                </button>
              )
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(300px, 1fr) 250px", gap: "24px" }}>
            
            <div style={{ border: "1px solid var(--t-fg)", position: "relative", minHeight: "400px", padding: "4px" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", filter: "sepia(100%) hue-rotate(50deg) saturate(300%) brightness(0.8) contrast(1.5)" }}>
                <Image src={currentImage} alt="Terminal Preview" fill className="object-cover" />
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 4px)" }} />
              </div>
              <div style={{ position: "absolute", top: "8px", left: "8px", background: "var(--t-bg)", padding: "2px 8px", zIndex: 10 }}>DISPLAY_OUT</div>
            </div>

            <div>
              <div style={{ marginBottom: "16px" }}>&gt; PARAMS_FOR: {activeFeatureData.label}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {activeFeatureData.options.map((option) => {
                  const isOptionActive = currentValue === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleOptionClick(state.activeFeature, option.value)}
                      style={{
                        background: isOptionActive ? "var(--t-fg)" : "transparent",
                        color: isOptionActive ? "var(--t-bg)" : "var(--t-fg)",
                        border: "1px solid var(--t-fg)",
                        padding: "8px",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontFamily: "inherit",
                        textTransform: "uppercase"
                      }}
                    >
                      {isOptionActive ? "> " : "  "} {option.label}
                    </button>
                  )
                })}
              </div>
              <div style={{ marginTop: "24px", opacity: 0.8, fontSize: "14px", lineHeight: 1.4 }}>
                /* {activeFeatureData.description} */
              </div>
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
