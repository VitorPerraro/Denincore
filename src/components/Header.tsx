'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import PremiumButton from './PremiumButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-denincore-gray/20"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${headerOpacity})`,
        backdropFilter: `blur(${headerBlur}px)`
      }}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center relative group"
        >
          <div className="relative w-80 h-20">
            <Image
              src="/DNC.png"
              alt="Denincore Logo"
              fill
              className="object-contain transition-all duration-300 group-hover:brightness-110"
              priority
            />
          </div>
          
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute inset-0 bg-denincore-orange/20 rounded-full blur-2xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                color: '#FF6600',
                textShadow: '0 0 10px rgba(255, 102, 0, 0.5)'
              }}
              className="text-white hover:text-denincore-orange transition-all duration-300 font-medium relative group font-montserrat"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-denincore-orange to-red-500 transition-all duration-300 group-hover:w-full"></span>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-denincore-orange/20 to-red-500/20 rounded-full blur-xl -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <PremiumButton
            variant="primary"
            size="lg"
            className="font-montserrat"
          >
            Solicitar Orçamento
          </PremiumButton>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-denincore-orange transition-colors relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          {/* Button glow */}
          <motion.div
            className="absolute inset-0 bg-denincore-orange/20 rounded-full blur-lg -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-denincore-orange/20"
        >
          <div className="container-custom py-6 space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-white hover:text-denincore-orange transition-colors py-2 font-medium block font-montserrat relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-denincore-orange transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="pt-4"
            >
              <PremiumButton
                variant="primary"
                size="md"
                className="w-full font-montserrat"
              >
                Solicitar Orçamento
              </PremiumButton>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-denincore-orange to-red-500"
        style={{ width: useTransform(scrollY, [0, 1000], ['0%', '100%']) }}
      />
    </motion.header>
  )
} 