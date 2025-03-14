"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverElevation?: number
}

export function HoverCard({ children, className = "", hoverScale = 1.03, hoverElevation = 5 }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: hoverScale,
        boxShadow: `0px ${hoverElevation}px ${hoverElevation * 2}px rgba(0, 0, 0, 0.1)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

