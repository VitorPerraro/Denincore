'use client'

import { motion } from 'framer-motion'

const features = [
  "Tecnologia de ponta e frameworks modernos",
  "Design responsivo e otimizado para todos os dispositivos",
  "Suporte técnico especializado 24/7",
  "Entrega rápida e dentro do prazo acordado",
  "Código limpo e manutenível",
  "Garantia de qualidade e satisfação"
]

export default function WhyChoose() {
  return (
    <section id="about" className="section-padding bg-denincore-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Abstract Tech Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              {/* Abstract Tech Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-denincore-orange/20 to-purple-600/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-denincore-orange/5 to-transparent opacity-30"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-20 w-16 h-16 bg-denincore-orange/30 rounded-full blur-sm"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-20 w-20 h-20 bg-purple-500/30 rounded-full blur-sm"
              ></motion.div>
              
              {/* Tech Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 opacity-60">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-denincore-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">
              <span className="text-white">Por que escolher a</span>
              <br />
              <span className="text-gradient">Denincore?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-inter font-light">
              Somos especialistas em transformar ideias em experiências digitais excepcionais. 
              Nossa equipe combina criatividade, tecnologia e inovação para entregar resultados que superam expectativas.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-6 h-6 bg-denincore-orange rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg text-gray-200 font-inter">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="btn-primary mt-8 font-montserrat"
            >
              Conheça Nossa Equipe
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 