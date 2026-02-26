"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"

export default function SvHero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 100 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // 3D Tilt for the main glass card
  const rotateX = useTransform(smoothY, [0, 1], [10, -10])
  const rotateY = useTransform(smoothX, [0, 1], [-10, 10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: "1000px",
      }}
    >
      {/* Deep WebGL/CSS Fluid Background simulation */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-20%",
          background: "linear-gradient(45deg, #ff00cc, #3333ff, #00ffcc, #ffcc00)",
          backgroundSize: "400% 400%",
          filter: "blur(100px)",
          opacity: 0.6,
          zIndex: 0,
          x: useTransform(smoothX, [0, 1], ["-5%", "5%"]),
          y: useTransform(smoothY, [0, 1], ["-5%", "5%"]),
          animation: "fluid-bg 15s ease infinite",
        }}
      />
      <style>{`
        @keyframes fluid-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Main Glass Spatial Card */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          background: "var(--t-glass)",
          border: "1px solid var(--t-border)",
          borderRadius: "32px",
          padding: "64px 48px",
          maxWidth: "700px",
          width: "90%",
          textAlign: "center",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          style={{ transform: "translateZ(50px)" }} // Pop out effect
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              marginBottom: "24px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Spatial Computing Era
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
              background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Enhance Reality
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              marginTop: "24px",
              fontWeight: 400,
            }}
          >
            Immersive AI editing tailored for real estate. Upload your raw captures and experience them transformed into luminous perfection.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
              justifyContent: "center",
            }}
          >
            <Link
              href="#"
              style={{
                background: "#ffffff",
                color: "#000000",
                padding: "16px 32px",
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            >
              Start Free Trial
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
