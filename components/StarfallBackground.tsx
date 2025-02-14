"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  speed: number
  size: number
  opacity: number
}

export function StarfallBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Initialize stars
    const initStars = () => {
      const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)
      starsRef.current = Array.from({ length: numberOfStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1 + 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }))
    }
    initStars()

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Update position
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 197, 253, ${star.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  )
}

