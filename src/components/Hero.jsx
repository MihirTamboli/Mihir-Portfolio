import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const roles = ['Data Analyst', 'AI Engineer', 'Backend Developer']
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    // You'll need to add your resume file to public folder
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Update with your resume file name
    link.download = 'Mihir_Tamboli_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Mihir Tamboli</span>
            </h1>
            
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 min-h-[60px] sm:min-h-[80px] md:min-h-[96px] flex items-center justify-center flex-wrap">
              <span className="text-gray-300">I'm a </span>
              <span className="text-electric-blue ml-2 min-w-[200px] sm:min-w-[300px] md:min-w-[400px] text-left inline-block">
                {displayText || 'Data Analyst'}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 px-4"
            >
              Computer Science undergraduate with hands-on experience in Python development, 
              data analysis, backend systems, and AI/ML projects. Passionate about building 
              intelligent, data-driven solutions and scalable software applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-electric-blue text-deep-navy font-semibold rounded-lg glow-effect hover:bg-neon-cyan transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg glow-effect hover:bg-electric-blue/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/MihirTamboli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-electric-blue transition-colors duration-300 glow-effect"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mihir-tamboli-033690284/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-electric-blue transition-colors duration-300 glow-effect"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:mihirtamboli262003@gmail.com"
                className="text-2xl text-gray-400 hover:text-electric-blue transition-colors duration-300 glow-effect"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+919028328108"
                className="text-2xl text-gray-400 hover:text-electric-blue transition-colors duration-300 glow-effect"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-gray-500 text-sm sm:text-base"
            >
              📍 Maharashtra, India
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-electric-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
