"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

function GlassShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[2, 0.6, 128, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1}
          chromaticAberration={0.5}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 400]}
          color="#ffffff"
          attenuationColor="#b084ff"
          attenuationDistance={2}
        />
      </mesh>
    </Float>
  )
}

export default function AhHero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      
      {/* Fluid Aurora Background */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-50%",
          background: "radial-gradient(circle at 50% 50%, rgba(176, 132, 255, 0.4), rgba(0, 240, 255, 0.2), transparent 60%)",
          filter: "blur(100px)",
          zIndex: 0,
          animation: "ah-fluid 20s ease infinite alternate",
        }}
      />
      <style>{`
        @keyframes ah-fluid {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 10%) scale(1.1); }
          100% { transform: translate(-5%, -5%) scale(0.9); }
        }
      `}</style>

      {/* 3D Glass Object */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#b084ff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#00f0ff" />
          <GlassShape />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          y,
          opacity,
          pointerEvents: "none"
        }}
      >
        <h1 style={{ fontSize: "clamp(60px, 10vw, 140px)", fontWeight: 300, letterSpacing: "-0.04em", margin: 0, background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Luminous.
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)", fontWeight: 300, marginTop: "24px", maxWidth: "600px", margin: "24px auto 0", lineHeight: 1.6 }}>
          Transform your real estate imagery into ethereal perfection. Powered by next-generation neural networks and glassmorphic spatial rendering.
        </p>
        
        <div style={{ marginTop: "48px", pointerEvents: "auto" }}>
          <Link href="/aurora-hologram/pricing" style={{ display: "inline-block", padding: "16px 48px", borderRadius: "100px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", backdropFilter: "blur(10px)", transition: "all 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "translateY(-2px)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "none" }}>
            Experience Magic
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
