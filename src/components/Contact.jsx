import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Clock, Heart, Check, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    message: '',
    isError: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        "name": formData.name,
        "email": formData.email,
        "message": formData.message,
        "recipientEmail": "ffbrunoff@Yahoo.com.br",
        "token": token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          isError: false
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente.',
        isError: true
      })
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'ffbrunoff@Yahoo.com.br',
      description: 'Resposta em até 24h'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Segunda a Sábado',
      description: '7h às 19h'
    },
    {
      icon: Heart,
      title: 'Experiência',
      info: 'Profissionais dedicados',
      description: 'Cuidado especializado'
    }
  ]

  const whyChooseUs = [
    'Resposta rápida e personalizada',
    'Orçamento gratuito e detalhado',
    'Flexibilidade de horários',
    'Profissionais experientes',
    'Acompanhamento completo',
    'Satisfação garantida'
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 gradient-bg">
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
            <span className="text-primary-700 font-medium">Entre em Contato</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos criar <span className="text-gradient">aventuras inesquecíveis</span> para seu cão
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para conhecer seu melhor amigo e proporcionar experiências únicas 
            e seguras. Entre em contato e descubra como podemos transformar a rotina do seu cão.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-primary-500 to-accent-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Solicite seu Orçamento</h3>
                <p className="text-white/90">
                  Preencha o formulário e receba uma proposta personalizada para seu cão.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu Nome *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Digite seu nome completo"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu cão e qual serviço você gostaria de conhecer..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {status.message && (
                  <motion.div
                    className={`p-4 rounded-xl border ${
                      status.isError 
                        ? 'bg-red-50 border-red-200 text-red-700' 
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-2">
                      {status.isError ? (
                        <AlertCircle className="w-5 h-5" />
                      ) : (
                        <Check className="w-5 h-5" />
                      )}
                      <span className="font-medium">{status.message}</span>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  Seus dados estão protegidos e serão usados apenas para contato.
                </p>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                        <p className="text-primary-600 font-medium mb-1">{item.info}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl p-8 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Por que escolher nossos serviços?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="font-medium">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="font-bold text-gray-900 text-lg mb-3">Primeira experiência?</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Oferecemos uma consulta inicial gratuita para conhecer seu cão e explicar 
                nossos métodos. Assim você pode ter certeza de que seu melhor amigo estará 
                em boas mãos.
              </p>
              <div className="inline-flex items-center space-x-2 text-primary-600 font-medium">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Consulta inicial gratuita</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
          size="invisible"
        />
      </div>
    </section>
  )
}