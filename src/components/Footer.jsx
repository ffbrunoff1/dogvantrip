import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Heart, Mail, Phone, Clock } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  const services = [
    'Passeio Diário',
    'Hotelzinho',
    'Mini Adestramento',
    'Transporte Seguro'
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'ffbrunoff@Yahoo.com.br',
      type: 'email'
    },
    {
      icon: Clock,
      text: 'Seg-Sáb: 7h às 19h',
      type: 'time'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-16 border-b border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => scrollToSection('hero')}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Truck className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold">Dog Van Trip</h3>
                  <p className="text-gray-300">Aventuras Caninas</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Especializados em proporcionar experiências únicas para seu cão, 
                combinando aventura, segurança e cuidado profissional em cada passeio.
              </p>
              
              <motion.div
                className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl p-6 border border-primary-400/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="w-6 h-6 text-accent-400" />
                  <h4 className="font-semibold text-lg">Nossa Missão</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transformar a rotina dos cães através de aventuras seguras e experiências 
                  enriquecedoras que promovem bem-estar físico e mental.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link.label}</span>
                    </motion.button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <h5 className="font-semibold mb-4 text-accent-300">Nossos Serviços</h5>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-400 text-sm flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <span className="w-1 h-1 bg-accent-400 rounded-full"></span>
                      <span>{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent className="w-5 h-5 text-primary-400" />
                      </motion.div>
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed">{info.text}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                className="mt-8 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-xl p-4 border border-accent-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="font-semibold text-accent-300 mb-2">Pronto para começar?</h5>
                <p className="text-gray-400 text-sm mb-3">
                  Entre em contato e agende a primeira aventura do seu cão!
                </p>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Falar Conosco
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dog Van Trip. Todos os direitos reservados.
            </p>
            <motion.p 
              className="text-gray-500 text-xs mt-1"
              whileHover={{ scale: 1.05 }}
            >
              Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors duration-300">Papum</a></em>
            </motion.p>
          </div>
          
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-accent-400" />
              <span className="text-sm">Feito com amor para cães</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}