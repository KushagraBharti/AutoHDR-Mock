"use client"

import { useEffect, useRef } from "react"
import { Bebas_Neue, Space_Mono } from "next/font/google"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
})

export default function NeonNoirLayout({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    const supportsFine = window.matchMedia("(pointer: fine)").matches
    if (!supportsFine) return
    el.style.display = "block"

    const onMove = (e: PointerEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      const hovered = Boolean(target?.closest("a, button, [role='button']"))
      el.style.width = hovered ? "36px" : "10px"
      el.style.height = hovered ? "36px" : "10px"
      el.style.opacity = hovered ? "0.5" : "1"
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerover", onOver, { passive: true })

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerover", onOver)
    }
  }, [])

  return (
    <div
      data-theme="neon-noir"
      className={`${bebasNeue.variable} ${spaceMono.variable}`}
      style={{
        fontFamily: "var(--font-mono), monospace",
        minHeight: "100vh",
        position: "relative",
        background: "var(--t-bg)",
        color: "var(--t-fg)",
      }}
    >
      {/* Scanlines overlay */}
      <div className="scanlines" />

      {/* Custom cursor dot */}
      <div
        ref={cursorRef}
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          background: "var(--t-pink)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 100000,
          mixBlendMode: "screen",
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
          boxShadow: "0 0 8px var(--t-pink), 0 0 20px rgba(255,45,120,0.4)",
        }}
      />

      {children}
    </div>
  )
}
