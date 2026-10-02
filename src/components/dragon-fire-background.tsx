'use client'

import React, { useEffect, useRef } from 'react'

interface DragonFireBackgroundProps {
  faction: 'blacks' | 'greens'
}

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  fadeSpeed: number
  hue: number
  brightness: number
  wobbleSpeed: number
  wobbleRange: number
  wobbleTime: number
}

export function DragonFireBackground({ faction }: DragonFireBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle viewport resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Particle settings
    const particleCount = 45
    const particles: Particle[] = []

    const createParticle = (isInitial = false): Particle => {
      const size = Math.random() * 3 + 1.2
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + Math.random() * 40,
        size,
        speedY: -(Math.random() * 1.5 + 0.5),
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        // Blacks: Crimson/Orange (hues 0-25), Greens: Wildfire Green (hues 100-145)
        hue: faction === 'blacks' ? Math.random() * 28 : Math.random() * 45 + 110,
        brightness: Math.random() * 30 + 50,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
        wobbleRange: Math.random() * 1.2 + 0.4,
        wobbleTime: Math.random() * 100,
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true))
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw subtle dark gradient vignette
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.2,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      )
      
      // Make it slightly tinted depending on faction
      if (faction === 'blacks') {
        gradient.addColorStop(0, 'rgba(5, 2, 2, 0)')
        gradient.addColorStop(1, 'rgba(12, 4, 4, 0.4)')
      } else {
        gradient.addColorStop(0, 'rgba(2, 5, 2, 0)')
        gradient.addColorStop(1, 'rgba(4, 12, 4, 0.35)')
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Update and draw particles
      particles.forEach((p, idx) => {
        // Move particle
        p.y += p.speedY
        p.wobbleTime += p.wobbleSpeed
        p.x += p.speedX + Math.sin(p.wobbleTime) * p.wobbleRange * 0.03

        // Slowly decrease opacity as it rises
        p.opacity -= p.fadeSpeed

        // Reset particle if it is fully faded or rises off the screen
        if (p.opacity <= 0 || p.y < -10) {
          particles[idx] = createParticle(false)
          return
        }

        // Draw glowing ember
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        // Radial gradient for glowing aura
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5)
        glow.addColorStop(0, `hsla(${p.hue}, 100%, ${p.brightness}%, ${p.opacity})`)
        glow.addColorStop(0.3, `hsla(${p.hue}, 95%, ${p.brightness - 10}%, ${p.opacity * 0.7})`)
        glow.addColorStop(1, `hsla(${p.hue}, 90%, 30%, 0)`)

        ctx.fillStyle = glow
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [faction])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000"
      style={{ opacity: 0.8 }}
    />
  )
}
