"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Initialize particles
    const initParticles = () => {
      particles.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
      }))
    }
    initParticles()

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "#60A5FA"
        ctx.fill()

        // Connect particles
        particles.current.forEach((particle2, j) => {
          if (i === j) return
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.strokeStyle = `rgba(96, 165, 250, ${1 - distance / 100})`
            ctx.stroke()
          }
        })

        // Connect to mouse
        const dx = particle.x - mousePosition.current.x
        const dy = particle.y - mousePosition.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y)
          ctx.strokeStyle = `rgba(96, 165, 250, ${1 - distance / 150})`
          ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    canvas.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl bg-[#151C2F]/50 backdrop-blur-sm" />
}

