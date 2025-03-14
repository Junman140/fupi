"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageSliderProps {
  images: string[]
  interval?: number
  className?: string
}

export function ImageSlider({ images, interval = 6000, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Reset the auto-play timer when slides change
  const resetTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current)
    }

    if (isAutoPlaying) {
      slideTimerRef.current = setInterval(() => {
        nextSlide()
      }, interval)
    }
  }, [isAutoPlaying, interval])

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsTransitioning(false), 500) // Match transition duration
    resetTimer()
  }, [images.length, isTransitioning, resetTimer])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setTimeout(() => setIsTransitioning(false), 500) // Match transition duration
    resetTimer()
  }, [images.length, isTransitioning, resetTimer])

  // Initialize the timer when the component mounts
  useEffect(() => {
    resetTimer()
    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current)
      }
    }
  }, [isAutoPlaying, resetTimer])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
    resetTimer()
  }

  // Ensure we have at least one image
  if (images.length === 0) {
    return null
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 border-none text-white rounded-full z-20"
        onClick={prevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 border-none text-white rounded-full z-20"
        onClick={nextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-4 bg-mint-green" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentIndex(index)
                setTimeout(() => setIsTransitioning(false), 500)
                resetTimer()
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

