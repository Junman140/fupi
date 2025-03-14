"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  separator?: string
  className?: string
}

export function CountUp({
  end,
  start = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(countRef, { once: true, margin: "-10% 0px -10% 0px" })
  const frameRate = 1000 / 60 // 60fps
  const totalFrames = Math.round(duration * 60)

  useEffect(() => {
    if (!isInView) return

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = easeOutQuad(progress) * (end - start) + start

      if (frame === totalFrames) {
        clearInterval(counter)
        setCount(end)
      } else {
        setCount(currentCount)
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [isInView, start, end, totalFrames])

  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t)

  // Format the number with separators and decimals
  const formatNumber = (num: number) => {
    return num
      .toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
      .replace(/,/g, separator)
  }

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

