import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Shield, Heart, Star, Map, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '500+', label: 'Cães Felizes', icon: Heart },
    { number: '50+', label: 'Locais Explorados', icon: Map },
    { number: '2 Anos', label: 'de Experiência', icon: Star },
    { number: '100%', label: 'Segurança', icon: Shield }
  ]

  const benefits = [
    {
      icon: Truck,
      title: 'Van Especializada',
      description: 'Veículo totalmente adaptado com climatização, segurança e conforto para garantir o bem-estar dos cães durante todo o trajeto.'
    },
    {
      icon: Map,
      title: 'Locais Únicos',
      description: 'Exploramos lugares remotos e seguros, longe do movimento urbano, onde seu cão pode correr livremente e se conectar com a natureza.'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Profissionais experientes acompanham cada passeio, garantindo supervisão constante e cuidados especializados para seu melhor amigo.'
    },
    {
      icon: Heart,
      title: 'Amor e Cuidado',
      description: 'Tratamos cada cão como se fosse nosso, com carinho, atenção e respeito às necessidades individuais de cada animal.'
    },
    {
      icon: Star,
      title: 'Mini Adestramento',
      description: 'Durante os passeios, aplicamos técnicas de adestramento positivo, ajudando no desenvolvimento comportamental do seu cão.'
    },
    {
      icon: Clock,
      title: 'Flexibilidade',
      description: 'Horários adaptáveis à sua rotina e às necessidades do seu cão, com opções de passeios diários e hospedagem.'
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 gradient-bg">
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
            <Heart className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-medium">Sobre Nós</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Especializados em <span className="text-gradient">Aventuras Caninas</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na Dog Van Trip, acreditamos que cada cão merece viver aventuras extraordinárias. 
            Nossa missão é proporcionar experiências únicas e seguras, levando seu melhor amigo 
            para explorar o mundo além das quatro paredes.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
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
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Especialidade
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Pegamos os cachorros em nossa van bem estruturada e climatizada, levando-os 
              para locais remotos especialmente escolhidos para que possam ficar soltos, 
              explorar e se divertir em total segurança.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cada passeio é uma oportunidade de crescimento, onde aplicamos técnicas de 
              mini adestramento que contribuem para o desenvolvimento comportamental e 
              social do seu cão.
            </p>
            
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compromisso</h4>
                  <p className="text-gray-600">Bem-estar e felicidade canina</p>
                </div>
              </div>
              <p className="text-gray-600">
                Nosso compromisso vai além do passeio: construímos uma relação de confiança 
                com você e seu cão, garantindo experiências transformadoras.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl p-8 text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
                <h4 className="text-2xl font-bold mb-4">Diferenciais Únicos</h4>
                <ul className="space-y-3">
                  {[
                    'Van com sistema de climatização profissional',
                    'Locais cuidadosamente selecionados',
                    'Acompanhamento profissional constante',
                    'Técnicas de adestramento positivo',
                    'Relatório detalhado de cada passeio'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 text-primary-600" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}