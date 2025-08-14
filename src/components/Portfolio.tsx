'use client'

import { motion } from 'framer-motion'

const portfolioItems = [
  {
    title: "E-commerce Premium",
    category: "E-commerce",
    image: "/api/placeholder/400/300",
    description: "Plataforma completa de vendas online com design moderno e funcionalidades avançadas."
  },
  {
    title: "App Corporativo",
    category: "Sistema Web",
    image: "/api/placeholder/400/300",
    description: "Aplicação empresarial para gestão de processos internos e colaboração."
  },
  {
    title: "Site Institucional",
    category: "Website",
    image: "/api/placeholder/400/300",
    description: "Presença digital profissional com foco em conversão e engajamento."
  },
  {
    title: "Dashboard Analytics",
    category: "Sistema Web",
    image: "/api/placeholder/400/300",
    description: "Painel de controle com métricas e relatórios em tempo real."
  },
  {
    title: "Landing Page",
    category: "Marketing",
    image: "/api/placeholder/400/300",
    description: "Página otimizada para conversão com design impactante."
  },
  {
    title: "Portal Educacional",
    category: "Sistema Web",
    image: "/api/placeholder/400/300",
    description: "Plataforma completa para ensino online e gestão acadêmica."
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-denincore-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nosso</span>
            <span className="text-denincore-orange"> Portfólio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Projetos que demonstram nossa expertise e criatividade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-denincore-black to-denincore-gray p-1">
                <div className="glassmorphism p-6 h-full">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-denincore-orange/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-denincore-orange/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-denincore-orange" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-400">Imagem do Projeto</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-denincore-orange font-medium bg-denincore-orange/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-denincore-orange transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-denincore-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-denincore-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                      >
                        Ver Detalhes
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-secondary"
          >
            Ver Todos os Projetos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 