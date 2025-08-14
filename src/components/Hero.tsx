'use client'

import { motion } from 'framer-motion'
import { TitleReveal, ImageReveal } from './ScrollReveal'
import { ParticleButton } from './PremiumButton'
import PremiumButton from './PremiumButton'
import { AnimatedTitle, AnimatedSubtitle } from './AnimatedText'
import InteractiveBackground from './InteractiveBackground'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-denincore-black">
        <div className="absolute top-20 left-20 w-72 h-72 bg-denincore-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-denincore-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Interactive Background */}
        <InteractiveBackground variant="grid" intensity="medium" />
      </div>

      {/* Main Content */}
      <div className="container-custom text-center relative z-10">
        <TitleReveal className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <AnimatedTitle variant="reveal" delay={0.4}>
              Criamos
            </AnimatedTitle>
            <br />
            <AnimatedTitle variant="glitch" delay={0.6}>
              Experiências
            </AnimatedTitle>
            <br />
            <AnimatedTitle variant="reveal" delay={0.8}>
              Digitais Únicas
            </AnimatedTitle>
          </div>

          {/* Subtitle */}
          <AnimatedSubtitle variant="typewriter" delay={1.0}>
            Transformamos ideias em realidade digital com tecnologia de ponta e design inovador. 
            Sua presença online nunca foi tão impactante.
          </AnimatedSubtitle>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <ParticleButton
              variant="primary"
              size="xl"
              className="font-montserrat"
            >
              Solicitar Orçamento
            </ParticleButton>
            
            <PremiumButton
              variant="secondary"
              size="xl"
              className="font-montserrat"
            >
              Ver Portfólio
            </PremiumButton>
          </motion.div>
        </TitleReveal>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-denincore-orange rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-denincore-orange rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-10 w-20 h-20 border border-denincore-orange/20 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-10 w-16 h-16 border border-denincore-orange/30 rounded-full"
        ></motion.div>
        
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-20 text-denincore-orange/30"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-20 text-purple-400/30"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </motion.div>
      </div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-denincore-orange/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
        />
      </div>
    </section>
  )
} 