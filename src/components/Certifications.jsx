import { motion } from 'framer-motion'
import { FaCertificate, FaAward, FaChartLine, FaBrain, FaCode, FaGraduationCap } from 'react-icons/fa'
import { SiCoursera, SiIbm } from 'react-icons/si'

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Development',
      issuer: 'Coursera',
      icon: SiCoursera,
      gradient: 'from-blue-500 to-cyan-500',
      borderGradient: 'from-blue-400 to-cyan-400',
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      icon: FaGraduationCap,
      gradient: 'from-pink-500 to-rose-500',
      borderGradient: 'from-pink-400 to-rose-400',
    },
    {
      title: 'Convolutional Neural Networks',
      issuer: 'Deep Learning Specialization',
      icon: FaBrain,
      gradient: 'from-purple-500 to-indigo-500',
      borderGradient: 'from-purple-400 to-indigo-400',
    },
    {
      title: 'Data Analytics',
      issuer: 'Google / Coursera',
      icon: FaChartLine,
      gradient: 'from-emerald-500 to-teal-500',
      borderGradient: 'from-emerald-400 to-teal-400',
    },
    {
      title: 'Neural Networks and Deep Learning',
      issuer: 'Deep Learning Specialization',
      icon: FaBrain,
      gradient: 'from-green-500 to-emerald-500',
      borderGradient: 'from-green-400 to-emerald-400',
    },
    {
      title: 'Computer Vision',
      issuer: 'NPTEL',
      icon: FaBrain,
      gradient: 'from-violet-500 to-fuchsia-500',
      borderGradient: 'from-violet-400 to-fuchsia-400',
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
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
            ACHIEVEMENTS
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={`${cert.title}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
                className="relative glass-effect-strong rounded-2xl p-8 border border-electric-blue/20 card-hover group overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className={`relative mb-6 p-6 bg-gradient-to-br ${cert.gradient} rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="text-4xl text-white" />
                    <div className="absolute -top-2 -right-2">
                      <FaAward className="text-electric-blue text-xl animate-pulse" />
                    </div>
                  </div>

                  {/* Certificate Icon */}
                  <div className="mb-4">
                    <FaCertificate className={`text-3xl bg-gradient-to-r ${cert.borderGradient} bg-clip-text text-transparent`} />
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-gradient transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary font-semibold text-lg">{cert.issuer}</p>

                  {/* Decorative Elements */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
