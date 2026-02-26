"use client"

import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import Link from "next/link"

function WireframeTerrain() {
  const meshRef = useRef<THREE.Mesh>(null)

  const { geometry, material } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(150, 150, 60, 60)
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      const z = Math.sin(x / 8) * Math.cos(y / 8) * 3 + Math.sin(x/2)*Math.cos(y/2)*0.5
      pos.setZ(i, z + Math.random() * 0.2)
    }
    geo.computeVertexNormals()

    const mat = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    return { geometry: geo, material: mat }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.position.y = (state.clock.elapsedTime * 4) % 2.5
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      rotation={[-Math.PI / 2.1, 0, 0]}
      position={[0, -8, -30]}
    />
  )
}

function FloatingHologram() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5 + 2
  })

  return (
    <mesh ref={meshRef} position={[0, 2, -5]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial color={0xff003c} wireframe transparent opacity={0.6} />
    </mesh>
  )
}

export default function ChHero() {
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
      }}
    >
      {/* 3D Canvas Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          <fog attach="fog" args={['#030008', 5, 40]} />
          <WireframeTerrain />
          <FloatingHologram />
        </Canvas>
      </div>

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(transparent 95%, var(--t-grid) 100%), linear-gradient(90deg, transparent 95%, var(--t-grid) 100%)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      {/* UI Content overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "32px",
          background: "var(--t-panel)",
          border: "1px solid var(--t-accent)",
          boxShadow: "0 0 30px rgba(255, 0, 60, 0.2)",
          backdropFilter: "blur(4px)",
          maxWidth: "800px",
          width: "90%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontSize: "12px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--t-accent)",
            marginBottom: "16px",
          }}
        >
          [ SYS.INIT : PHOTO.PROCESSOR ]
        </motion.div>

        <motion.h1
          className="ch-glitch-text ch-glow"
          data-text="AUTOHDR_AI"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontSize: "clamp(40px, 8vw, 90px)",
            fontWeight: 800,
            margin: 0,
            lineHeight: 1,
            textShadow: "4px 4px 0 var(--t-accent)",
          }}
        >
          AUTOHDR_AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: "16px",
            color: "rgba(0, 255, 204, 0.7)",
            marginTop: "24px",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          &gt; EXECUTING HIGH-DYNAMIC-RANGE SYNTHESIS...
          <br />
          &gt; NEURAL NETWORK ENGAGED.
          <br />
          &gt; BATCH PROCESSING CAPABILITY: UNLIMITED.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="#"
            style={{
              background: "var(--t-accent)",
              color: "#000",
              textDecoration: "none",
              padding: "16px 32px",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.1em",
              border: "1px solid var(--t-accent)",
              boxShadow: "0 0 15px var(--t-accent)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-accent)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-accent)"
              ;(e.currentTarget as HTMLElement).style.color = "#000"
            }}
          >
            [ INITIALIZE_UPLOAD ]
          </Link>
          <Link
            href="#"
            style={{
              background: "transparent",
              color: "var(--t-fg)",
              textDecoration: "none",
              padding: "16px 32px",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.1em",
              border: "1px solid var(--t-fg)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.color = "#000"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px var(--t-fg)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = "transparent"
              ;(e.currentTarget as HTMLElement).style.color = "var(--t-fg)"
              ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
            }}
          >
            [ SYSTEM_DEMO ]
          </Link>
        </motion.div>
      </div>

      {/* Decorative corner brackets */}
      <div style={{ position: "absolute", top: "40px", left: "40px", width: "40px", height: "40px", borderTop: "2px solid var(--t-fg)", borderLeft: "2px solid var(--t-fg)", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "40px", right: "40px", width: "40px", height: "40px", borderTop: "2px solid var(--t-fg)", borderRight: "2px solid var(--t-fg)", zIndex: 10 }} />
      <div style={{ position: "absolute", bottom: "40px", left: "40px", width: "40px", height: "40px", borderBottom: "2px solid var(--t-fg)", borderLeft: "2px solid var(--t-fg)", zIndex: 10 }} />
      <div style={{ position: "absolute", bottom: "40px", right: "40px", width: "40px", height: "40px", borderBottom: "2px solid var(--t-fg)", borderRight: "2px solid var(--t-fg)", zIndex: 10 }} />
    </section>
  )
}
