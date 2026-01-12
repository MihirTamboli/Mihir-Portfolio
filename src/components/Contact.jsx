import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

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

    // Simulate form submission (replace with actual form handling service)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'mihirtamboli262003@gmail.com',
      link: 'mailto:mihirtamboli262003@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91-9028328108',
      link: 'tel:+919028328108',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Maharashtra, India',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/MihirTamboli',
      color: 'hover:text-gray-300',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mihir-tamboli-033690284/',
      color: 'hover:text-blue-400',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      url: 'mailto:mihirtamboli262003@gmail.com',
      color: 'hover:text-red-400',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-white transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-white transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-electric-blue text-deep-navy font-semibold rounded-lg glow-effect hover:bg-neon-cyan transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
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
                    className={`flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 ${
                      !info.link ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    <div className="text-electric-blue text-2xl">
                      <IconComponent />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-electric-blue mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-3xl text-gray-400 ${social.color} transition-colors duration-300 glow-effect`}
                      aria-label={social.label}
                    >
                      <IconComponent />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500"
      >
        <p>© {new Date().getFullYear()} Mihir Tamboli. All rights reserved.</p>
      </motion.footer>
    </section>
  )
}

export default Contact
