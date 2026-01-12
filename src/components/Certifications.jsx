import { motion } from 'framer-motion'
import { FaCertificate, FaGoogle, FaGraduationCap, FaNetworkWired } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Data Analytics Foundations',
      issuer: 'Coursera',
      icon: FaGoogle,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Computer Vision',
      issuer: 'NPTEL',
      icon: FaGraduationCap,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
    },
    {
      title: 'Cisco Networking Fundamentals',
      issuer: 'Cisco',
      icon: FaNetworkWired,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${cert.bgColor} ${cert.borderColor} border-2 rounded-lg p-6 hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${cert.color} text-4xl mb-4`}>
                    <IconComponent />
                  </div>
                  <FaCertificate className={`${cert.color} text-2xl mb-2`} />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
