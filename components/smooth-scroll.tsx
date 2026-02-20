"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useRef, type ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches
    if (!supportsFinePointer) return

    const el = cursorRef.current
    if (!el) return

    el.style.display = "block"

    const onMove = (e: PointerEvent) => {
      // Direct DOM write — no React state, no spring, zero lag
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      const hovered = Boolean(
        target?.closest("a, button, [role='button'], input, textarea, select, label, [data-hoverable]")
      )
      el.classList.toggle("hovered", hovered)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerover", onOver, { passive: true })

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerover", onOver)
    }
  }, [])

  return (
    <ReactLenis root>
      <div ref={cursorRef} className="custom-cursor" style={{ display: "none" }} />
      <div className="grain-overlay" />
      {children}
    </ReactLenis>
  )
}
