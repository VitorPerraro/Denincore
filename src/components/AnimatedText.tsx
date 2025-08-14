'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  variant?: 'typewriter' | 'reveal' | 'split' | 'glitch' | 'wave'
  delay?: number
  duration?: number
  once?: boolean
}

export default function AnimatedText({
  text,
  className = '',
  variant = 'reveal',
  delay = 0,
  duration = 0.8,
  once = true
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })

  const renderText = () => {
    switch (variant) {
      case 'typewriter':
        return (
          <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay }}
          >
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.1,
                  delay: delay + index * 0.05
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        )

      case 'reveal':
        return (
          <motion.div
            ref={ref}
            className={`overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, delay }}
          >
            <motion.div
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration, delay }}
            >
              {text}
            </motion.div>
          </motion.div>
        )

      case 'split':
        return (
          <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay }}
          >
            {text.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: delay + wordIndex * 0.1
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )

      case 'glitch':
        return (
          <motion.div
            ref={ref}
            className={`relative ${className}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay }}
          >
            <motion.span
              className="relative z-10"
              animate={{
                x: [0, -2, 2, -2, 0],
                y: [0, 1, -1, 1, 0]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              {text}
            </motion.span>
            
            {/* Glitch layers */}
            <motion.span
              className="absolute inset-0 text-red-500 opacity-70"
              animate={{
                x: [0, 2, -2, 2, 0],
                y: [0, -1, 1, -1, 0]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.1
              }}
            >
              {text}
            </motion.span>
            
            <motion.span
              className="absolute inset-0 text-cyan-500 opacity-70"
              animate={{
                x: [0, -1, 1, -1, 0],
                y: [0, 2, -2, 2, 0]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.2
              }}
            >
              {text}
            </motion.span>
          </motion.div>
        )

      case 'wave':
        return (
          <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay }}
          >
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ y: 0 }}
                animate={isInView ? { y: [0, -10, 0] } : {}}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: delay + index * 0.1
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        )

      default:
        return (
          <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, delay }}
          >
            {text}
          </motion.div>
        )
    }
  }

  return renderText()
}

// Componente especializado para títulos
export function AnimatedTitle({ 
  children, 
  variant = 'reveal',
  ...props 
}: Omit<AnimatedTextProps, 'text'> & { children: string }) {
  return (
    <AnimatedText
      text={children}
      variant={variant}
      className="text-4xl md:text-5xl font-bold font-playfair"
      {...props}
    />
  )
}

// Componente especializado para subtítulos
export function AnimatedSubtitle({ 
  children, 
  variant = 'typewriter',
  ...props 
}: Omit<AnimatedTextProps, 'text'> & { children: string }) {
  return (
    <AnimatedText
      text={children}
      variant={variant}
      className="text-xl text-gray-300 font-inter font-light"
      {...props}
    />
  )
} 