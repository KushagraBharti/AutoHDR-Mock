"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const ASCI_LOGO = `
    ___   __  __  ______  ___      __  __  ____    ____ 
   /   | / / / / /_  __/ / __ \   / / / / / __ \  / __ 
  / /| |/ / / /   / /   / / / /  / /_/ / / / / / / /_/ /
 / ___ / /_/ /   / /   / /_/ /  / __  / / /_/ / / _, _/ 
/_/  |_\____/   /_/    \____/  /_/ /_/ /_____/ /_/ |_|  
`

const LINES = [
  "INITIALIZING BOOT SEQUENCE...",
  "LOADING KERNEL MODULES... OK",
  "MOUNTING VIRTUAL FILE SYSTEMS... OK",
  "STARTING NEURAL NETWORK ENGINE (V 4.2.1)...",
  "ESTABLISHING UPLINK TO IMAGE PROCESSOR...",
  "SYSTEM READY.",
  " ",
  "WELCOME TO AUTOHDR TERMINAL INTERFACE.",
  "TYPE 'HELP' FOR COMMANDS OR PRESS [ENTER] TO UPLOAD.",
]

export default function RtHero() {
  const [renderedLines, setRenderedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((s) => !s), 500)
    return () => clearInterval(interval)
  }, [])

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= LINES.length) return

    const line = LINES[currentLineIndex]
    
    if (currentCharIndex < line.length) {
      const timeout = setTimeout(() => {
        setRenderedLines((prev) => {
          const newLines = [...prev]
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = ""
          }
          newLines[currentLineIndex] += line[currentCharIndex]
          return newLines
        })
        setCurrentCharIndex((prev) => prev + 1)
      }, Math.random() * 30 + 10) // Random typing speed
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      }, 200) // Pause between lines
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex])

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "48px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textShadow: "0 0 5px var(--t-fg)",
        fontSize: "clamp(16px, 2vw, 24px)",
        lineHeight: 1.2,
      }}
    >
      <pre
        style={{
          margin: "0 0 32px 0",
          fontFamily: "inherit",
          fontSize: "clamp(8px, 1vw, 16px)",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all"
        }}
      >
        {ASCI_LOGO}
      </pre>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
        {renderedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {currentLineIndex < LINES.length && (
          <div>
            {LINES[currentLineIndex]?.substring(0, currentCharIndex)}
            <span style={{ opacity: showCursor ? 1 : 0, backgroundColor: "var(--t-fg)", color: "var(--t-bg)" }}>_</span>
          </div>
        )}
        
        {/* Render interactive parts after typing finishes */}
        {currentLineIndex >= LINES.length && (
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "16px" }}>root@autohdr:~$</span>
              <span style={{ opacity: showCursor ? 1 : 0, backgroundColor: "var(--t-fg)", color: "var(--t-bg)" }}>_</span>
            </div>
            
            <div style={{ marginTop: "48px", display: "flex", gap: "32px", flexWrap: "wrap" }}>
              <Link href="#" style={{ textDecoration: "none", color: "var(--t-bg)", backgroundColor: "var(--t-fg)", padding: "4px 16px", fontWeight: "bold" }}>
                [EXECUTE UPLOAD]
              </Link>
              <Link href="#" style={{ textDecoration: "none", color: "var(--t-fg)", border: "1px solid var(--t-fg)", padding: "4px 16px" }}>
                [READ MANUAL]
              </Link>
            </div>

            <div style={{ marginTop: "64px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", borderTop: "1px dashed var(--t-fg)", paddingTop: "32px" }}>
              <div>
                <div>&gt; STATS</div>
                <div style={{ opacity: 0.7, marginTop: "8px" }}>SPEED: 120s / BATCH</div>
                <div style={{ opacity: 0.7 }}>CAPACITY: UNLIMITED</div>
              </div>
              <div>
                <div>&gt; STATUS</div>
                <div style={{ opacity: 0.7, marginTop: "8px" }}>SERVER: ONLINE</div>
                <div style={{ opacity: 0.7 }}>MODELS: LOADED</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
