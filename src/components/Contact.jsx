import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'mihirtamboli262003@gmail.com',
      link: 'mailto:mihirtamboli262003@gmail.com',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91-9028328108',
      link: 'tel:+919028328108',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Maharashtra, India',
      link: null,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/MihirTamboli',
      gradient: 'from-gray-400 to-gray-600',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mihir-tamboli-033690284/',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      url: 'mailto:mihirtamboli262003@gmail.com',
      gradient: 'from-red-500 to-red-700',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-electric-blue text-sm font-semibold mb-4 px-4 py-2 glass-effect rounded-full"
          >
            GET IN TOUCH
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto rounded-full mb-6" />
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass-effect-strong p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
              <FaPaperPlane className="text-electric-blue" />
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect border border-electric-blue/20 rounded-xl focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-text-primary transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect border border-electric-blue/20 rounded-xl focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-text-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 glass-effect border border-electric-blue/20 rounded-xl focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-text-primary transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-xl text-green-400 font-semibold"
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-bg font-bold rounded-xl glow-effect hover:shadow-lg hover:shadow-electric-blue/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link || '#'}
                      target={info.link ? '_blank' : undefined}
                      rel={info.link ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className={`flex items-center gap-4 p-6 glass-effect-strong rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all group ${
                        !info.link ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <div className={`p-4 bg-gradient-to-br ${info.gradient} rounded-xl group-hover:scale-110 transition-transform`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm font-semibold mb-1">{info.label}</p>
                        <p className="text-text-primary font-bold text-lg">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 glass-effect-strong rounded-xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all group`}
                      aria-label={social.label}
                    >
                      <div className={`p-3 bg-gradient-to-br ${social.gradient} rounded-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-electric-blue/20 text-center text-text-secondary"
      >
        <p className="text-lg">
          © {new Date().getFullYear()} <span className="text-gradient font-bold">Mihir Tamboli</span>. All rights reserved.
        </p>
      </motion.footer>
    </section>
  )
}

export default Contact
