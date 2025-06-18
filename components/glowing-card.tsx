"use client"

import type React from "react"

import { motion } from "framer-motion"
import { type ReactNode, useState } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowingCard({ children, className = "", glowColor = "blue" }: GlowingCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const glowColors = {
    blue: "rgba(59, 130, 246, 0.3)",
    purple: "rgba(139, 92, 246, 0.3)",
    green: "rgba(16, 185, 129, 0.3)",
    orange: "rgba(245, 158, 11, 0.3)",
    pink: "rgba(236, 72, 153, 0.3)",
    cyan: "rgba(6, 182, 212, 0.3)",
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor as keyof typeof glowColors]}, transparent 40%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
