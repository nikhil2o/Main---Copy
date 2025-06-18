"use client"

import { motion } from "framer-motion"
import { Bot, Zap, BarChart3, Settings, Sparkles, Target } from "lucide-react"

const floatingIcons = [
  { Icon: Bot, delay: 0, x: "10%", y: "20%" },
  { Icon: Zap, delay: 0.5, x: "80%", y: "15%" },
  { Icon: BarChart3, delay: 1, x: "15%", y: "70%" },
  { Icon: Settings, delay: 1.5, x: "85%", y: "75%" },
  { Icon: Sparkles, delay: 2, x: "50%", y: "10%" },
  { Icon: Target, delay: 2.5, x: "90%", y: "45%" },
]

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Icon className="w-4 h-4 text-blue-300" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
