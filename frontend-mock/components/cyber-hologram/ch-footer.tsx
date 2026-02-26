"use client"

export default function ChFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--t-fg)", padding: "48px 24px", fontFamily: "var(--font-mono)", background: "rgba(3,0,8,0.95)", color: "rgba(0,255,204,0.5)", fontSize: "12px", textAlign: "center" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ letterSpacing: "0.2em" }}>SYSTEM TERMINATED. END OF LINE.</div>
        <div>© 2026 AUTOHDR CORPORATION. NEURAL NETWORKS SECURED.</div>
      </div>
    </footer>
  )
}
