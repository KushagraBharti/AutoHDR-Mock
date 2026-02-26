"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NbHero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}
    >
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          background: "var(--t-pink)",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          zIndex: 10,
          cursor: "grab",
        }}
        className="nb-card"
        whileDrag={{ cursor: "grabbing", scale: 1.1 }}
      />
      
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          background: "var(--t-blue)",
          width: "200px",
          height: "80px",
          zIndex: 10,
          cursor: "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "24px"
        }}
        className="nb-card"
        whileDrag={{ cursor: "grabbing", scale: 1.1, rotate: 5 }}
      >
        DRAG ME
      </motion.div>

      <div
        style={{
          background: "#fff",
          padding: "64px",
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="nb-card"
      >
        <div
          style={{
            background: "var(--t-accent)",
            color: "#fff",
            padding: "8px 24px",
            fontWeight: 800,
            fontSize: "14px",
            letterSpacing: "0.1em",
            border: "4px solid var(--t-fg)",
            boxShadow: "4px 4px 0px 0px var(--t-fg)",
            transform: "rotate(-2deg)",
            marginBottom: "32px",
            display: "inline-block",
          }}
        >
          BETA V1.0
        </div>

        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 100px)",
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Fix Your <br />
          <span style={{ color: "var(--t-pink)", textShadow: "4px 4px 0px var(--t-fg)" }}>Photos</span> Fast.
        </h1>

        <p
          style={{
            fontSize: "20px",
            fontWeight: 600,
            marginTop: "32px",
            maxWidth: "500px",
            lineHeight: 1.4,
          }}
        >
          No sliders. No bullshit. Just upload your raw real estate shots and let the AI do the heavy lifting in seconds.
        </p>

        <div style={{ display: "flex", gap: "24px", marginTop: "48px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="#"
            style={{
              background: "var(--t-accent)",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 40px",
              fontWeight: 800,
              fontSize: "18px",
              textTransform: "uppercase",
              display: "inline-block",
            }}
            className="nb-card"
          >
            Upload Now
          </Link>
          <Link
            href="#"
            style={{
              background: "#fff",
              color: "var(--t-fg)",
              textDecoration: "none",
              padding: "16px 40px",
              fontWeight: 800,
              fontSize: "18px",
              textTransform: "uppercase",
              display: "inline-block",
            }}
            className="nb-card"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
