"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

function CyberCore() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5
      ringRef.current.rotation.y = state.clock.elapsedTime * -0.1
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color={0x00f0ff} wireframe emissive={0x00f0ff} emissiveIntensity={2} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color={0xff003c} emissive={0xff003c} emissiveIntensity={2} />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={5} color={0x00f0ff} />
    </group>
  )
}

export default function CgHero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 })
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 })

  const rotateX = useTransform(smoothY, [0, 1], [5, -5])
  const rotateY = useTransform(smoothX, [0, 1], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      
      {/* 3D Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.1} />
          <CyberCore />
        </Canvas>
      </div>

      {/* Grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)", backgroundSize: "50px 50px", zIndex: 1, pointerEvents: "none" }} />

      {/* Glassmorphism Card */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(5, 2, 10, 0.5)",
          border: "1px solid rgba(0, 240, 255, 0.2)",
          borderRadius: "24px",
          padding: "64px 48px",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(0, 240, 255, 0.1), 0 0 40px rgba(0, 240, 255, 0.1)",
          maxWidth: "800px",
          width: "90%",
          textAlign: "center",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div style={{ transform: "translateZ(50px)" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", border: "1px solid var(--t-pink)", borderRadius: "100px", color: "var(--t-pink)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px", boxShadow: "0 0 10px rgba(255, 0, 60, 0.3)" }}>
            Neural Enhancement V4
          </div>
          
          <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 800, margin: 0, lineHeight: 1, letterSpacing: "-0.03em", textShadow: "0 0 20px rgba(0, 240, 255, 0.5)" }}>
            SYNTHESIZE <br/>
            <span style={{ color: "var(--t-accent)" }}>REALITY</span>
          </h1>

          <p style={{ marginTop: "24px", fontSize: "16px", color: "rgba(240,240,240,0.7)", lineHeight: 1.6, maxWidth: "500px", margin: "24px auto 0" }}>
            High-fidelity AI processing for real estate. Upload raw data, receive perfected visuals through our deep learning matrix.
          </p>

          <div style={{ marginTop: "48px", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: "16px 40px", background: "var(--t-accent)", color: "#000", border: "none", borderRadius: "12px", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)", transition: "all 0.2s" }}>
              INITIALIZE
            </button>
            <button style={{ padding: "16px 40px", background: "rgba(255, 0, 60, 0.1)", color: "var(--t-pink)", border: "1px solid var(--t-pink)", borderRadius: "12px", fontSize: "14px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", boxShadow: "inset 0 0 20px rgba(255, 0, 60, 0.1)", transition: "all 0.2s" }}>
              DOCS
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
