"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ImagePlus } from "lucide-react"

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

const STATS = [
  { value: "10%", label: "of all U.S. listings edited" },
  { value: "30 min", label: "saved per shoot" },
  { value: "5 styles", label: "of HDR processing" },
]

export default function EdHero() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <section
      style={{
        background: "var(--t-bg)",
        padding: "72px 0 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Top label + rule */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{ marginBottom: "20px" }}
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
            Feature / AI Editing
          </p>
          <div style={{ height: "1px", background: "var(--t-rule)" }} />
        </motion.div>

        {/* Main 2-col layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "65fr 35fr",
            gap: "64px",
            alignItems: "start",
            paddingTop: "40px",
          }}
        >
          {/* LEFT — massive headline + body + upload */}
          <div>
            {/* H1 */}
            <h1
              aria-label="Real Estate Photography, Reimagined"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(56px, 8vw, 130px)",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                margin: "0 0 40px",
                overflow: "hidden",
              }}
            >
              {/* Line 1 */}
              <div style={{ overflow: "hidden", display: "block" }}>
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.05 }}
                  style={{
                    display: "block",
                    fontWeight: 400,
                    color: "var(--t-fg)",
                  }}
                >
                  Real Estate
                </motion.span>
              </div>
              {/* Line 2 */}
              <div style={{ overflow: "hidden", display: "block" }}>
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
                  style={{
                    display: "block",
                    fontWeight: 500,
                    fontStyle: "italic",
                    color: "var(--t-fg)",
                  }}
                >
                  Photography,
                </motion.span>
              </div>
              {/* Line 3 */}
              <div style={{ overflow: "hidden", display: "block" }}>
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.25 }}
                  style={{
                    display: "block",
                    fontWeight: 900,
                    color: "var(--t-accent)",
                  }}
                >
                  Reimagined
                </motion.span>
              </div>
            </h1>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.38 }}
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "var(--t-muted)",
                maxWidth: "480px",
                marginBottom: "48px",
              }}
            >
              AutoHDR uses precision AI to transform raw real estate photographs into
              polished, market-ready images — in seconds. HDR enhancement, virtual
              staging, sky replacement, and more, without touching a slider.
            </motion.p>

            {/* Upload area */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.48 }}
            >
              <input
                ref={inputRef}
                type="file"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                aria-label="Upload images"
              />
              <button
                onClick={() => inputRef.current?.click()}
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  border: "1px solid var(--t-rule)",
                  background: "transparent",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "var(--t-accent)"
                  el.style.boxShadow = "0 2px 16px rgba(28,20,16,0.08)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "var(--t-rule)"
                  el.style.boxShadow = "none"
                }}
              >
                <ImagePlus
                  size={28}
                  strokeWidth={1.25}
                  style={{ color: "var(--t-muted)" }}
                />
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--t-fg)",
                      marginBottom: "4px",
                    }}
                  >
                    Drag &amp; drop your images or browse
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "11px",
                      color: "var(--t-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    JPG, TIFF, RAW &mdash; up to 50 files
                  </p>
                </div>
              </button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.62 }}
              style={{ marginTop: "56px", maxWidth: "520px" }}
            >
              <div style={{ height: "1px", background: "var(--t-rule)", marginBottom: "24px" }} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0",
                }}
              >
                {STATS.map((stat, i) => (
                  <div
                    key={stat.value}
                    style={{
                      paddingLeft: i > 0 ? "24px" : "0",
                      borderLeft: i > 0 ? "1px solid var(--t-rule)" : "none",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "clamp(24px, 3vw, 36px)",
                        fontWeight: 700,
                        color: "var(--t-fg)",
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontSize: "11px",
                        color: "var(--t-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — pull quote + attribution */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.3 }}
            style={{
              paddingTop: "12px",
              borderLeft: "3px solid var(--t-accent)",
              paddingLeft: "32px",
            }}
          >
            {/* Pull quote */}
            <blockquote
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.2vw, 30px)",
                fontWeight: 500,
                lineHeight: 1.45,
                color: "var(--t-accent)",
                marginBottom: "28px",
                margin: "0 0 28px",
              }}
            >
              &ldquo;Trusted to edit 10% of all U.S. real estate listings.&rdquo;
            </blockquote>

            <div
              style={{
                height: "1px",
                background: "var(--t-rule)",
                marginBottom: "20px",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--t-fg)",
                marginBottom: "4px",
              }}
            >
              AutoHDR
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "11px",
                color: "var(--t-muted)",
              }}
            >
              Industry report, 2025 &mdash; Q4
            </p>

            {/* Decorative aside block */}
            <div
              style={{
                marginTop: "48px",
                padding: "24px",
                background: "var(--t-surface)",
                borderBottom: "2px solid var(--t-accent2)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--t-accent2)",
                  marginBottom: "12px",
                }}
              >
                How it works
              </p>
              {["Upload raw photos", "AI processes every detail", "Download within minutes"].map(
                (step, i) => (
                  <div
                    key={step}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      paddingBottom: i < 2 ? "12px" : "0",
                      marginBottom: i < 2 ? "12px" : "0",
                      borderBottom: i < 2 ? "1px solid var(--t-rule)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--t-accent)",
                        minWidth: "20px",
                        paddingTop: "1px",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontSize: "12px",
                        lineHeight: 1.5,
                        color: "var(--t-fg)",
                      }}
                    >
                      {step}
                    </p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width decorative rule at bottom */}
      <div style={{ marginTop: "80px", height: "1px", background: "var(--t-rule)" }} />
    </section>
  )
}
