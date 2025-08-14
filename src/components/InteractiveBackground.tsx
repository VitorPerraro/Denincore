'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface InteractiveBackgroundProps {
  variant?: 'grid' | 'circles' | 'waves' | 'particles' | 'mesh'
  intensity?: 'low' | 'medium' | 'high'
  className?: string
}

export default function InteractiveBackground({
  variant = 'grid',
  intensity = 'medium',
  className = ''
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const getIntensityValue = () => {
    switch (intensity) {
      case 'low': return 0.3
      case 'medium': return 0.6
      case 'high': return 1
      default: return 0.6
    }
  }

  const renderBackground = () => {
    switch (variant) {
      case 'grid':
        return (
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 102, 0, ${getIntensityValue() * 0.1}) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 102, 0, ${getIntensityValue() * 0.1}) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            />
          </div>
        )

      case 'circles':
        return (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-denincore-orange/20"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${20 + i * 10}%`,
                  top: `${20 + i * 10}%`
                }}
                animate={{
                  scale: isHovering ? [1, 1.1, 1] : 1,
                  rotate: isHovering ? 360 : 0
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            ))}
          </div>
        )

      case 'waves':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-denincore-orange/10 to-transparent"
                style={{
                  transform: `translateY(${100 + i * 50}px)`,
                  opacity: 0.3 - i * 0.1
                }}
                animate={{
                  x: isHovering ? [0, 100, 0] : 0
                }}
                transition={{
                  duration: 4 + i * 1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        )

      case 'particles':
        return (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-denincore-orange/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )

      case 'mesh':
        return (
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(at 40% 20%, hsla(28,100%,74%,${getIntensityValue() * 0.1}) 0px, transparent 50%),
                  radial-gradient(at 80% 0%, hsla(189,100%,56%,${getIntensityValue() * 0.1}) 0px, transparent 50%),
                  radial-gradient(at 0% 50%, hsla(355,100%,93%,${getIntensityValue() * 0.1}) 0px, transparent 50%),
                  radial-gradient(at 80% 50%, hsla(340,100%,76%,${getIntensityValue() * 0.1}) 0px, transparent 50%),
                  radial-gradient(at 0% 100%, hsla(269,100%,77%,${getIntensityValue() * 0.1}) 0px, transparent 50%),
                  radial-gradient(at 80% 100%, hsla(242,100%,70%,${getIntensityValue() * 0.1}) 0px, transparent 50%),
                  radial-gradient(at 0% 0%, hsla(343,100%,76%,${getIntensityValue() * 0.1}) 0px, transparent 50%)
                `,
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
              }}
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {renderBackground()}
      
      {/* Mouse trail effect */}
      {isHovering && (
        <motion.div
          className="absolute w-4 h-4 bg-denincore-orange/20 rounded-full pointer-events-none"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        />
      )}
    </motion.div>
  )
} 