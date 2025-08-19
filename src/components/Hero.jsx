import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Heart, Star, Check } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const features = [
    'Van climatizada e segura',
    'Locais remotos e seguros',
    'Mini adestramento incluído',
    'Profissionais experientes'
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      ></motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-accent-400/20 rounded-full blur-lg"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">Experiência Premium</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Aventuras <span className="text-yellow-300">Inesquecíveis</span> para seu Cão
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Levamos seu melhor amigo para explorar locais remotos e seguros em nossa van climatizada, proporcionando liberdade total e momentos únicos de diversão.
            </motion.p>

            <motion.div
              className="grid sm:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary bg-white text-primary-600 hover:bg-white inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                <span>Agendar Passeio</span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('services')}
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Truck className="w-5 h-5" />
                <span>Conhecer Serviços</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <motion.div
                  className="w-full h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  ></motion.div>
                  
                  <div className="text-center z-10">
                    <motion.div
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Truck className="w-12 h-12 text-primary-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Van Especializada</h3>
                    <p className="text-white/80">Equipada para o máximo conforto e segurança do seu cão</p>
                  </div>
                </motion.div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Climatizada', icon: '❄️' },
                    { label: 'Segura', icon: '🛡️' },
                    { label: 'Confortável', icon: '💎' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-white/90 text-sm font-medium">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            >
              <Heart className="w-12 h-12 text-primary-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}