import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaTimes, FaBars } from 'react-icons/fa'

const Navbar = ({ activeSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsSidebarOpen(false)
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Mihir_Tamboli_Resume.pdf'
    link.click()
    setIsSidebarOpen(false)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        setIsSidebarOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isSidebarOpen])

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isSidebarOpen])

  return (
    <>
      {/* Hamburger Button - Always Visible */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-lg text-white hover:text-electric-blue hover:bg-slate-800/90 transition-all duration-300 shadow-lg"
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </motion.button>

      {/* Sidebar - Toggleable on All Screens */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop - Visible on Mobile, Optional on Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:bg-black/40"
              transition={{ duration: 0.3 }}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 z-50 overflow-y-auto shadow-2xl"
            >
              {/* Logo */}
              <div className="px-6 py-8 border-b border-slate-700/50">
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('home')}
                  className="text-3xl font-bold text-white font-['Poppins'] tracking-tight hover:text-electric-blue transition-colors duration-300"
                >
                  MT
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium font-['Inter'] ${
                      activeSection === item.id
                        ? 'text-electric-blue bg-electric-blue/10'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/30'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-electric-blue rounded-r-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Resume Button */}
              <div className="px-6 pb-8">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadResume}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-electric-blue to-blue-600 text-white rounded-lg font-semibold font-['Inter'] shadow-lg shadow-electric-blue/20 hover:shadow-electric-blue/40 transition-all duration-300"
                >
                  <FaDownload className="text-sm" />
                  Resume
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
