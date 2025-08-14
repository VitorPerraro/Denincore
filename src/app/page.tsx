'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChoose from '@/components/WhyChoose'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import SectionNavigator from '@/components/SectionNavigator'

export default function Home() {
  return (
    <main className="min-h-screen bg-denincore-black">
      <ParticleBackground />
      <SectionNavigator />
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  )
} 