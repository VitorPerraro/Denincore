'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState, useRef } from 'react'

interface PremiumButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'gradient' | 'neon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  icon?: React.ReactNode
  loading?: boolean
}

export default function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon,
  loading = false
}: PremiumButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15])
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15])
  
  const springConfig = { stiffness: 300, damping: 30 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'px-4 py-2 text-sm'
      case 'md': return 'px-6 py-3 text-base'
      case 'lg': return 'px-8 py-4 text-lg'
      case 'xl': return 'px-12 py-6 text-xl'
      default: return 'px-6 py-3 text-base'
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-denincore-orange via-orange-500 to-red-500 shadow-[0_0_30px_rgba(255,102,0,0.3)] hover:shadow-[0_0_50px_rgba(255,102,0,0.6)]'
      case 'secondary':
        return 'bg-transparent border-2 border-denincore-orange text-denincore-orange hover:bg-denincore-orange hover:text-white shadow-[0_0_20px_rgba(255,102,0,0.2)] hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]'
      case 'gradient':
        return 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]'
      case 'neon':
        return 'bg-black border-2 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]'
      default:
        return 'bg-gradient-to-r from-denincore-orange via-orange-500 to-red-500'
    }
  }

  return (
    <motion.button
      ref={buttonRef}
      className={`
        relative overflow-hidden rounded-xl font-bold transition-all duration-300
        transform-gpu perspective-1000
        ${getSizeClasses()}
        ${getVariantClasses()}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Background Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2"
        style={{ transform: 'translateZ(20px)' }}
      >
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )}
        
        {icon && !loading && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {icon}
          </motion.div>
        )}
        
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {children}
        </motion.span>
      </motion.div>

      {/* Ripple Effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: variant === 'neon' 
            ? 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,102,0,0.3) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  )
}

// Botão com efeito de partículas
export function ParticleButton({ children, ...props }: PremiumButtonProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  
  const createParticles = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }))
    setParticles(newParticles)
    
    setTimeout(() => setParticles([]), 1000)
  }

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      createParticles(e)
    }
    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <div className="relative">
      <PremiumButton {...props} onClick={handleClick}>
        {children}
      </PremiumButton>
      
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-denincore-orange rounded-full pointer-events-none"
          initial={{ 
            x: particle.x, 
            y: particle.y, 
            scale: 1, 
            opacity: 1 
          }}
          animate={{ 
            x: particle.x + (Math.random() - 0.5) * 100,
            y: particle.y + (Math.random() - 0.5) * 100,
            scale: 0,
            opacity: 0
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
} 