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
  {
    slug: "art-deco",
    name: "ART DECO LUXE",
    desc: "Poiret One · Gold on Navy · 1920s Geometric Opulence",
    bg: "#0a0e1a",
    fg: "#f5f0e8",
    accent: "#d4a843",
  },
  {
    slug: "aurora",
    name: "GLASSMORPHISM AURORA",
    desc: "Sora · Aurora Greens & Violets · Frosted Glass",
    bg: "#08060f",
    fg: "#e8eaf0",
    accent: "#4ade80",
  },
  {
    slug: "noir-cinema",
    name: "NOIR CINEMA",
    desc: "Bodoni Moda · Selective Red · Film Noir B&W",
    bg: "#0a0a0a",
    fg: "#e5e5e5",
    accent: "#c41e2a",
  },
  {
    slug: "botanical",
    name: "ORGANIC BOTANICAL",
    desc: "Fraunces · Sage & Terracotta · Nature-Inspired",
    bg: "#1a1a14",
    fg: "#f0ead6",
    accent: "#7c956b",
  },
  {
    slug: "memphis",
    name: "MEMPHIS POSTMODERN",
    desc: "Bricolage Grotesque · Bold Colors · 80s Geometric Chaos",
    bg: "#faf8f2",
    fg: "#1a1a1a",
    accent: "#ff3366",
  },
  {
    slug: "cyber-hologram",
    name: "3D CYBER HOLOGRAM",
    desc: "Three.js Terrain · Holographic UI · CRT Glitches",
    bg: "#030008",
    fg: "#00ffcc",
    accent: "#ff003c",
  },
  {
    slug: "spatial-vision",
    name: "SPATIAL VISION OS",
    desc: "WebGL Fluid Core · Frosted Glass · Parallax Cards",
    bg: "#000000",
    fg: "#ffffff",
    accent: "#ffffff",
  },
  {
    slug: "retro-terminal",
    name: "CRT PHOSPHOR TERMINAL",
    desc: "VT100 Emulation · Scanlines · Typing Effects",
    bg: "#051005",
    fg: "#33ff00",
    accent: "#33ff00",
  },
  {
    slug: "swiss-kinetic",
    name: "SWISS KINETIC TYPOGRAPHY",
    desc: "Inter Tight · Scroll-driven Motion · Massive Scale",
    bg: "#f0f0f0",
    fg: "#050505",
    accent: "#ff3b00",
  },
  {
    slug: "neobrutalism",
    name: "HARD-EDGE NEOBRUTALISM",
    desc: "Syne · Flat Colors · 8px Borders · Spring Physics",
    bg: "#ffc900",
    fg: "#000000",
    accent: "#8b5cf6",
  },
  {
    slug: "cyber-glass",
    name: "CYBER GLASS OS",
    desc: "Neon Noir + Glassmorphism + 3D Core",
    bg: "#05020a",
    fg: "#f0f0f0",
    accent: "#00f0ff",
  },
  {
    slug: "kinetic-brutalism",
    name: "KINETIC NEOBRUTALISM",
    desc: "Swiss Kinetic + Hard-Edge Borders + Spring Physics",
    bg: "#ff3366",
    fg: "#000000",
    accent: "#ffcc00",
  },
  {
    slug: "aurora-hologram",
    name: "AURORA HOLOGRAM 3D",
    desc: "Ethereal Glass 3D + Fluid Shaders + Typography",
    bg: "#020108",
    fg: "#ffffff",
    accent: "#b084ff",
  }
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", width: "100%", maxWidth: "1200px" }}>
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
