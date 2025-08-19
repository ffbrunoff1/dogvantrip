import React from 'react'
import { motion } from 'framer-motion'
import { Dog, Truck, Heart, Clock, Star, Check, Shield, Map } from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const services = [
    {
      title: 'Passeio Diário com Cachorros',
      description: 'Experiências diárias únicas onde seu cão explora locais remotos em total liberdade e segurança.',
      longDescription: 'Nosso serviço de passeio diário é pensado para proporcionar ao seu cão a aventura que ele merece. Utilizamos nossa van climatizada para levar os cães até locais remotos e seguros, especialmente selecionados para que possam correr livremente, socializar e explorar a natureza. Durante cada passeio, aplicamos técnicas de mini adestramento que contribuem para o desenvolvimento comportamental positivo.',
      icon: Truck,
      features: [
        'Van climatizada e equipada',
        'Locais remotos e seguros',
        'Mini adestramento incluído',
        'Supervisão profissional',
        'Relatório do passeio',
        'Coleta e entrega em casa'
      ],
      duration: '4-6 horas',
      price: 'Consulte valores',
      highlight: 'Mais Popular',
      gradient: 'from-primary-500 to-accent-500'
    },
    {
      title: 'Hotelzinho',
      description: 'Hospedagem especializada com todo conforto e cuidado que seu cão precisa quando você não pode estar presente.',
      longDescription: 'Nosso hotelzinho oferece uma experiência de hospedagem única, onde seu cão recebe cuidados especializados em um ambiente seguro e acolhedor. Além da hospedagem, incluímos passeios diários, atividades recreativas, socialização com outros cães e acompanhamento veterinário quando necessário. É a solução perfeita para viagens ou períodos em que você não pode cuidar do seu melhor amigo.',
      icon: Heart,
      features: [
        'Ambiente seguro e confortável',
        'Passeios diários inclusos',
        'Atividades recreativas',
        'Socialização supervisionada',
        'Cuidados individualizados',
        'Relatório diário por fotos'
      ],
      duration: 'Flexível',
      price: 'Sob consulta',
      highlight: '',
      gradient: 'from-accent-500 to-primary-600'
    }
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Profissionais qualificados e protocolos rigorosos de segurança'
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Adaptamos nossos horários à sua rotina e necessidades'
    },
    {
      icon: Map,
      title: 'Locais Exclusivos',
      description: 'Acesso a áreas especiais longe do movimento urbano'
    },
    {
      icon: Star,
      title: 'Experiência Premium',
      description: 'Cada detalhe pensado para o máximo bem-estar do seu cão'
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Dog className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-medium">Nossos Serviços</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experiências <span className="text-gradient">Exclusivas</span> para seu Cão
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços especializados que combinam aventura, cuidado e desenvolvimento 
            comportamental, sempre priorizando o bem-estar e a felicidade do seu melhor amigo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {service.highlight && (
                  <motion.div
                    className="absolute -top-4 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    {service.highlight}
                  </motion.div>
                )}
                
                <motion.div
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden card-hover h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    ></motion.div>
                    
                    <div className="relative z-10">
                      <motion.div
                        className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">{service.description}</p>
                      
                      <div className="flex items-center justify-between mt-6">
                        <div className="bg-white/20 rounded-lg px-4 py-2">
                          <span className="text-sm font-medium">Duração: {service.duration}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{service.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.longDescription}</p>
                    
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Incluído no serviço:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.button
                      onClick={() => scrollToSection('contact')}
                      className="btn-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Solicitar Orçamento
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a Dog Van Trip?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos mais que um serviço de passeio - somos parceiros no bem-estar e felicidade do seu cão.
            </p>
          </div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Agendar Primeira Experiência</span>
            </motion.button>
            <p className="text-gray-600 mt-4">
              Entre em contato e descubra como podemos transformar a rotina do seu cão!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}