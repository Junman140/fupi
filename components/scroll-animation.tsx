"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  type?: "fade" | "slide" | "scale" | "parallax"
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  className?: string
}

export function ScrollAnimation({
  children,
  direction = "up",
  type = "fade",
  delay = 0,
  duration = 0.5,
  distance = 50,
  once = true,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Set the direction of the animation
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: [distance, 0] }
      case "down":
        return { y: [-distance, 0] }
      case "left":
        return { x: [distance, 0] }
      case "right":
        return { x: [-distance, 0] }
      default:
        return { y: [distance, 0] }
    }
  }

  // parallax value, defined outside of the switch statement to avoid conditional hook call
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Set the animation type
  const getAnimationProps = () => {
    switch (type) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration, delay, ease: "easeOut" },
        }
      case "slide":
        const dirValues = getDirectionValues()
        return {
          initial: {
            opacity: 0,
            ...Object.fromEntries(Object.entries(dirValues).map(([key, [initial]]) => [key, initial])),
          },
          animate: isInView
            ? { opacity: 1, ...Object.fromEntries(Object.entries(dirValues).map(([key, [, final]]) => [key, final])) }
            : {
                opacity: 0,
                ...Object.fromEntries(Object.entries(dirValues).map(([key, [initial]]) => [key, initial])),
              },
          transition: { duration, delay, ease: "easeOut" },
        }
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
          transition: { duration, delay, ease: "easeOut" },
        }
      case "parallax":
        return {
          style: { y: parallaxY },
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration, delay, ease: "easeOut" },
        }
      default:
        return {
          initial: { opacity: 0 },
          animate: isInView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration, delay, ease: "easeOut" },
        }
    }
  }

  const animationProps = getAnimationProps()

  return (
    <motion.div ref={ref} {...animationProps} className={className}>
      {children}
    </motion.div>
  )
}

