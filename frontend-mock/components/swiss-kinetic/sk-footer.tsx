"use client"

export default function SkFooter() {
  return (
    <footer style={{ padding: "80px 48px", background: "var(--t-fg)", color: "var(--t-bg)" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 800, margin: 0, lineHeight: 0.9, letterSpacing: "-0.04em" }}>AUTOHDR<br/>SYSTEMS</h2>
        <div style={{ fontSize: "16px", fontWeight: 600 }}>© 2026. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  )
}
