'use client'

import { motion } from 'framer-motion'
import { TitleReveal } from './ScrollReveal'
import { ServiceCard } from './PremiumCard'

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Desenvolvimento Web",
    description: "Sites responsivos e modernos com as melhores tecnologias do mercado.",
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sistemas Web",
    description: "Aplicações robustas e escaláveis para automatizar seus processos.",
    tags: ["Node.js", "Database", "API"]
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design UI/UX",
    description: "Interfaces intuitivas e experiências memoráveis para seus usuários.",
    tags: ["Figma", "Prototipagem", "UX"]
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Otimização SEO",
    description: "Melhore seu ranking nos motores de busca e aumente sua visibilidade.",
    tags: ["SEO", "Performance", "Analytics"]
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-denincore-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 102, 0, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="container-custom relative z-10">
        <TitleReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            <span className="text-white">Nossos</span>
            <span className="text-denincore-orange"> Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter font-light">
            Soluções completas para transformar sua presença digital
          </p>
        </TitleReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                tags={service.tags}
                className="h-full"
              >
                {/* Conteúdo adicional pode ser adicionado aqui */}
              </ServiceCard>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border border-denincore-orange/10 rounded-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 border border-purple-400/10 rounded-full"
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />
        </div>
      </div>
    </section>
  )
} 