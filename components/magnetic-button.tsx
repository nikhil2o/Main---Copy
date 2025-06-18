"use client"

import type React from "react"
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion"
import { type ReactNode, useRef } from "react"

type BaseButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

type MagneticButtonProps = BaseButtonProps & Omit<HTMLMotionProps<"button">, keyof BaseButtonProps>

export function MagneticButton({ 
  children, 
  className = "", 
  onClick,
  type = "button",
  disabled,
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(springY, [-50, 50], [10, -10])
  const rotateY = useTransform(springX, [-50, 50], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={className}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
