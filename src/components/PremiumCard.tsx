'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState, useRef } from 'react'

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'glass' | 'neon' | 'gradient' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  hoverEffect?: 'lift' | 'tilt' | 'scale' | 'glow'
  onClick?: () => void
  icon?: React.ReactNode
  title?: string
  description?: string
  tags?: string[]
}

export default function PremiumCard({
  children,
  className = '',
  variant = 'glass',
  size = 'md',
  hoverEffect = 'lift',
  onClick,
  icon,
  title,
  description,
  tags
}: PremiumCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15])
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15])
  
  const springConfig = { stiffness: 300, damping: 30 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || hoverEffect !== 'tilt') return
    
    const rect = cardRef.current.getBoundingClientRect()
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
      case 'sm': return 'p-4'
      case 'md': return 'p-6'
      case 'lg': return 'p-8'
      default: return 'p-6'
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
      case 'neon':
        return 'bg-black/80 border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.2)]'
      case 'gradient':
        return 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20'
      case 'minimal':
        return 'bg-denincore-gray/50 border border-denincore-orange/20'
      default:
        return 'bg-white/10 backdrop-blur-xl border border-white/20'
    }
  }

  const getHoverEffect = () => {
    switch (hoverEffect) {
      case 'lift':
        return isHovered ? { y: -10, scale: 1.02 } : {}
      case 'tilt':
        return {} // Tilt é tratado no style
      case 'scale':
        return isHovered ? { scale: 1.05 } : {}
      case 'glow':
        return isHovered ? { 
          scale: 1.02,
          boxShadow: '0 20px 60px rgba(255, 102, 0, 0.3)'
        } : {}
      default:
        return {}
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl transition-all duration-500
        transform-gpu perspective-1000 cursor-pointer
        ${getSizeClasses()}
        ${getVariantClasses()}
        ${className}
      `}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverEffect === 'tilt' ? {} : getHoverEffect()}
      style={{
        ...(hoverEffect === 'tilt' && {
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d'
        })
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Background Shine */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        {(icon || title) && (
          <div className="mb-4">
            {icon && (
              <motion.div
                className="w-12 h-12 mb-3 text-denincore-orange"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {icon}
              </motion.div>
            )}
            
            {title && (
              <motion.h3
                className="text-xl font-bold text-white mb-2 font-playfair"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title}
              </motion.h3>
            )}
            
            {description && (
              <motion.p
                className="text-gray-300 text-sm leading-relaxed font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-denincore-orange/20 text-denincore-orange text-xs rounded-full border border-denincore-orange/30 font-montserrat"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0"
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: variant === 'neon' 
            ? 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,102,0,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Floating Elements */}
      {variant === 'glass' && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-denincore-orange/60 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full"
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>
      )}
    </motion.div>
  )
}

// Card especializado para serviços
export function ServiceCard({ 
  icon, 
  title, 
  description, 
  tags = [], 
  ...props 
}: PremiumCardProps & { 
  icon: React.ReactNode
  title: string
  description: string
  tags?: string[]
}) {
  return (
    <PremiumCard
      variant="glass"
      hoverEffect="tilt"
      icon={icon}
      title={title}
      description={description}
      tags={tags}
      {...props}
    >
      {/* Conteúdo padrão para serviços */}
    </PremiumCard>
  )
}

// Card especializado para portfólio
export function PortfolioCard({ 
  image, 
  title, 
  description, 
  tags = [], 
  ...props 
}: PremiumCardProps & { 
  image: string
  title: string
  description: string
  tags?: string[]
}) {
  return (
    <PremiumCard
      variant="gradient"
      hoverEffect="lift"
      title={title}
      description={description}
      tags={tags}
      {...props}
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </PremiumCard>
  )
} 