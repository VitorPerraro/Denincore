'use client'

import { motion } from 'framer-motion'

interface PremiumLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dots' | 'spinner' | 'pulse' | 'wave'
  color?: 'orange' | 'white' | 'gradient'
  text?: string
}

export default function PremiumLoader({
  size = 'md',
  variant = 'dots',
  color = 'orange',
  text
}: PremiumLoaderProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8'
      case 'md': return 'w-12 h-12'
      case 'lg': return 'w-16 h-16'
      default: return 'w-12 h-12'
    }
  }

  const getColorClasses = () => {
    switch (color) {
      case 'orange': return 'text-denincore-orange'
      case 'white': return 'text-white'
      case 'gradient': return 'text-gradient'
      default: return 'text-denincore-orange'
    }
  }

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 bg-current rounded-full ${getColorClasses()}`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        )

      case 'spinner':
        return (
          <motion.div
            className={`${getSizeClasses()} border-2 border-current border-t-transparent rounded-full ${getColorClasses()}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )

      case 'pulse':
        return (
          <motion.div
            className={`${getSizeClasses()} bg-current rounded-full ${getColorClasses()}`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )

      case 'wave':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`w-1 h-8 bg-current rounded-full ${getColorClasses()}`}
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderLoader()}
      
      {text && (
        <motion.p
          className="text-sm text-gray-400 font-inter"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

// Loader especializado para página inteira
export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-denincore-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-24 h-24 mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-denincore-orange to-red-500 rounded-2xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold font-playfair">D</span>
          </div>
        </motion.div>
        
        <PremiumLoader
          variant="dots"
          color="gradient"
          size="lg"
          text="Carregando experiência única..."
        />
      </div>
    </div>
  )
}

// Loader para botões
export function ButtonLoader({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <motion.div
      className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} border-2 border-white/30 border-t-white rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  )
} 