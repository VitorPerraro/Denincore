'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Section {
  id: string
  label: string
  color?: string
}

const sections: Section[] = [
  { id: 'home', label: 'Início', color: '#FF6600' },
  { id: 'services', label: 'Serviços', color: '#FF6600' },
  { id: 'about', label: 'Sobre', color: '#FF6600' },
  { id: 'portfolio', label: 'Portfólio', color: '#FF6600' },
  { id: 'contact', label: 'Contato', color: '#FF6600' }
]

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      style={{ opacity, scale }}
    >
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Section indicator */}
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-denincore-orange border-denincore-orange scale-125'
                  : 'bg-transparent border-gray-400 hover:border-denincore-orange'
              }`}
              animate={{
                scale: activeSection === section.id ? [1, 1.3, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: activeSection === section.id ? Infinity : 0
              }}
            />
            
            {/* Section label */}
            <motion.div
              className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-montserrat opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              initial={{ x: 20, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              {section.label}
            </motion.div>
            
            {/* Connection line */}
            <motion.div
              className="absolute right-6 top-1/2 w-8 h-px bg-gray-400/30"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </div>

      {/* Progress indicator */}
      <motion.div
        className="absolute right-4 top-0 w-1 h-full bg-gray-400/20 rounded-full overflow-hidden"
        style={{ height: '100%' }}
      >
        <motion.div
          className="w-full bg-gradient-to-b from-denincore-orange to-red-500 rounded-full"
          style={{ height: scrollYProgress.get() * 100 + '%' }}
        />
      </motion.div>
    </motion.div>
  )
} 