import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const roles = ['Data Analyst', 'AI Engineer', 'Backend Developer']
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseTime = 2000

    const typeRole = () => {
      const fullText = roles[currentRole]
      
      if (!isDeleting && displayText.length < fullText.length) {
        setDisplayText(fullText.substring(0, displayText.length + 1))
      } else if (!isDeleting && displayText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }

    const timer = setTimeout(
      typeRole,
      isDeleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole, roles])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Mihir_Tamboli_Resume.pdf'
    link.click()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-blue/30 rounded-full blur-[100px] animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-purple/30 rounded-full blur-[120px] animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-neon-cyan/20 rounded-full blur-[80px] animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/10 via-transparent to-accent-purple/10 animate-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <div className="glass-effect px-6 py-2 rounded-full border border-electric-blue/30">
              <span className="text-electric-blue text-sm font-medium">👋 Welcome to my portfolio</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="block text-text-primary">Hi, I'm</span>
            <span className="block text-gradient mt-2">Mihir Tamboli</span>
          </motion.h1>
          
          {/* Typing Animation */}
          <motion.div
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 min-h-[80px] sm:min-h-[100px] flex items-center justify-center flex-wrap"
          >
            <span className="text-text-secondary mr-3">I'm a</span>
            <span className="text-gradient-2 inline-block min-w-[250px] sm:min-w-[350px] md:min-w-[450px] text-left">
              {displayText || 'Data Analyst'}
              <span className="inline-block w-1 h-8 bg-electric-blue ml-2 animate-pulse" />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 px-4 leading-relaxed"
          >
            Computer Science undergraduate with hands-on experience in Python development, 
            data analysis, backend systems, and AI/ML projects. Passionate about building 
            intelligent, data-driven solutions and scalable software applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="group relative px-10 py-4 bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-bg font-bold rounded-xl overflow-hidden glow-effect"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="group glass-effect-strong px-10 py-4 border-2 border-electric-blue/50 text-electric-blue font-bold rounded-xl glow-effect hover:border-electric-blue transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 mb-8"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/MihirTamboli', label: 'GitHub', color: 'hover:text-gray-300' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mihir-tamboli-033690284/', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: FaEnvelope, href: 'mailto:mihirtamboli262003@gmail.com', label: 'Email', color: 'hover:text-red-400' },
              { icon: FaPhone, href: 'tel:+919028328108', label: 'Phone', color: 'hover:text-green-400' },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-3xl text-text-secondary ${social.color} transition-all duration-300 glass-effect p-4 rounded-full`}
                  aria-label={social.label}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Location */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-base sm:text-lg flex items-center justify-center gap-2"
          >
            <span className="text-electric-blue">📍</span>
            Maharashtra, India
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-text-secondary text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center p-2 glass-effect">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-gradient-to-b from-electric-blue to-neon-cyan rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
