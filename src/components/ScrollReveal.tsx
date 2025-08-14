'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  effect?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'rotate' | '3d-tilt'
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  effect = 'fade-up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  threshold = 0.1
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  
  const getTransform = () => {
    switch (effect) {
      case 'fade-up':
        return {
          y: useSpring(useTransform(scrollYProgress, [0, threshold], [distance, 0]), springConfig),
          opacity: useSpring(useTransform(scrollYProgress, [0, threshold], [0, 1]), springConfig)
        }
      case 'fade-left':
        return {
          x: useSpring(useTransform(scrollYProgress, [0, threshold], [-distance, 0]), springConfig),
          opacity: useSpring(useTransform(scrollYProgress, [0, threshold], [0, 1]), springConfig)
        }
      case 'fade-right':
        return {
          x: useSpring(useTransform(scrollYProgress, [0, threshold], [distance, 0]), springConfig),
          opacity: useSpring(useTransform(scrollYProgress, [0, threshold], [0, 1]), springConfig)
        }
      case 'scale':
        return {
          scale: useSpring(useTransform(scrollYProgress, [0, threshold], [0.8, 1]), springConfig),
          opacity: useSpring(useTransform(scrollYProgress, [0, threshold], [0, 1]), springConfig)
        }
      case 'rotate':
        return {
          rotateY: useSpring(useTransform(scrollYProgress, [0, threshold], [45, 0]), springConfig),
          opacity: useSpring(useTransform(scrollYProgress, [0, threshold], [0, 1]), springConfig)
        }
      case '3d-tilt':
        return {
          rotateX: useSpring(useTransform(scrollYProgress, [0, threshold], [15, 0]), springConfig),
          rotateY: useSpring(useTransform(scrollYProgress, [0, threshold], [15, 0]), springConfig),
          opacity: useSpring(useTransform(scrollYProgress, [0, threshold], [0, 1]), springConfig)
        }
      default:
        return {
          y: useSpring(useTransform(scrollYProgress, [0, threshold], [distance, 0]), springConfig),
          opacity: useSpring(useTransform(scrollYProgress, [0, threshold], [0, 1]), springConfig)
        }
    }
  }

  const transforms = getTransform()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      style={transforms}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

// Componente especializado para títulos
export function TitleReveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <ScrollReveal effect="fade-up" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
}

// Componente especializado para cards
export function CardReveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <ScrollReveal effect="3d-tilt" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
}

// Componente especializado para imagens
export function ImageReveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <ScrollReveal effect="scale" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
} 