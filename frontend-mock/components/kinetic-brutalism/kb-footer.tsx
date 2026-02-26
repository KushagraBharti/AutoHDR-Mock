"use client"

export default function KbFooter() {
  return (
    <footer style={{ padding: "100px 48px", background: "var(--t-fg)", color: "#fff" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", textAlign: "center", fontWeight: 800, fontSize: "clamp(40px, 8vw, 100px)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
        AUTOHDR © 2026<br/>
        <span style={{ color: "var(--t-accent)" }}>NO SLIDERS ALLOWED.</span>
      </div>
    </footer>
  )
}
