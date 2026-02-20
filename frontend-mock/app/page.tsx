"use client"

import Link from "next/link"

const THEMES = [
  {
    slug: "brutalist",
    name: "BRUTALIST GRID",
    desc: "JetBrains Mono · Electric Yellow · Swiss Grid",
    bg: "#0A0A08",
    fg: "#F3F3EE",
    accent: "#FFE500",
  },
  {
    slug: "editorial",
    name: "EDITORIAL",
    desc: "Playfair Display · Deep Burgundy · Print Layout",
    bg: "#F7F4EF",
    fg: "#1C1410",
    accent: "#8B1A1A",
  },
  {
    slug: "neon-noir",
    name: "NEON NOIR",
    desc: "Bebas Neue · Hot Pink & Cyan · Cyberpunk",
    bg: "#07010F",
    fg: "#F0E6FF",
    accent: "#FF2D78",
  },
]

export default function ThemeIndex() {
  return (
    <div
      style={{
        background: "#0A0A08",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        padding: "40px 24px",
        gap: "48px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#555", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
          AutoHDR · Frontend Mock
        </p>
        <h1 style={{ color: "#F3F3EE", fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-0.02em", fontWeight: 700 }}>
          Select a Theme
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", width: "100%", maxWidth: "900px" }}>
        {THEMES.map((t) => (
          <Link key={t.slug} href={`/${t.slug}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                background: t.bg,
                color: t.fg,
                border: `1px solid ${t.accent}22`,
                borderRadius: "4px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "transform 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"
                ;(e.currentTarget as HTMLElement).style.borderColor = t.accent
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                ;(e.currentTarget as HTMLElement).style.borderColor = `${t.accent}22`
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: t.accent }}>
                Theme 0{THEMES.indexOf(t) + 1}
              </span>
              <span style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.01em" }}>{t.name}</span>
              <span style={{ fontSize: "12px", color: `${t.fg}99`, lineHeight: 1.6 }}>{t.desc}</span>
              <span style={{ fontSize: "11px", color: t.accent, marginTop: "8px" }}>View Theme →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
