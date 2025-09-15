import React from "react"
import FeaturesGrid from "../../components/Features/FeaturesGrid.jsx"

export default function Home() {
  const features = [
    { title: "Interactive Games", description: "Engaging STEM games that make learning fun" },
    { title: "Offline Mode", description: "Download for low-connectivity areas" },
    { title: "Multilingual", description: "Content in multiple languages" },
    { title: "Teacher Analytics", description: "Track progress and engagement" },
    { title: "Gamification", description: "Badges, leaderboards, rewards" },
    { title: "Low-Cost Devices", description: "Optimized for basic devices" }
  ]

  return (
    <main style={{ padding: 24 }}>
      <section style={{ textAlign: "center", padding: "48px 16px" }}>
        <div style={{ display: "inline-block", background: "#e8f5e9", color: "#166534", padding: "6px 10px", borderRadius: 999 }}>
          Offline-Ready Learning Platform
        </div>
        <h1 style={{ fontSize: 48, margin: "16px 0" }}>
          Gamified STEM Learning for Rural Schools
        </h1>
        <p style={{ color: "#475569" }}>
          Interactive games, multilingual content, and offline access designed for students in grades 6-12 with limited internet connectivity.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
          <button style={{ background: "#166534", color: "white", padding: "10px 16px", border: 0, borderRadius: 8 }}>Start Learning</button>
          <button style={{ background: "white", color: "#166534", padding: "10px 16px", border: "1px solid #bbf7d0", borderRadius: 8 }}>Download</button>
        </div>
      </section>
      <FeaturesGrid items={features} />
    </main>
  )
}

