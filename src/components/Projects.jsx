import { motion } from 'framer-motion'
import { FaGithub, FaPython, FaJava, FaJs, FaExternalLinkAlt } from 'react-icons/fa'
import { SiTensorflow, SiFlask, SiMysql, SiOpencv } from 'react-icons/si'
import { SiKeras } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'CareerSage AI',
      description: 'AI-powered career guidance platform for 10th & 12th students with aptitude tests, chatbot assistance, and personalized career recommendations.',
      github: 'https://github.com/MihirTamboli/CareerSageAI',
      tech: ['Python', 'AI/ML', 'Flask', 'TensorFlow'],
      featured: true,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Intellix-AI',
      description: 'AI-based intelligent solution project featuring advanced machine learning capabilities and intelligent decision-making systems.',
      github: 'https://github.com/MihirTamboli/Intellix-AI',
      tech: ['Python', 'AI/ML', 'TensorFlow', 'Keras'],
      featured: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Brain Tumor Detection',
      description: 'CNN-based MRI image classification system using TensorFlow and OpenCV for accurate tumor detection and medical image analysis.',
      github: 'https://github.com/MihirTamboli/Brain-Tumor-Detection',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-stack e-commerce web application with product listings, user authentication, shopping cart, and seamless user interactions.',
      github: 'https://github.com/MihirTamboli/E-Commerce-Website',
      tech: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Billing Management Application',
      description: 'Java-based billing system with MySQL database for managing invoices, transactions, and financial records efficiently.',
      github: 'https://github.com/MihirTamboli/Billing_Application',
      tech: ['Java', 'MySQL', 'Desktop Application'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ]

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('python')) return FaPython
    if (techLower.includes('java')) return FaJava
    if (techLower.includes('javascript') || techLower.includes('js')) return FaJs
    if (techLower.includes('tensorflow')) return SiTensorflow
    if (techLower.includes('keras')) return SiKeras
    if (techLower.includes('flask')) return SiFlask
    if (techLower.includes('mysql')) return SiMysql
    if (techLower.includes('opencv')) return SiOpencv
    return FaPython
  }

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
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
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
            MY WORK
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`relative glass-effect-strong rounded-2xl overflow-hidden border border-electric-blue/20 card-hover group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-bg px-4 py-1 rounded-full text-xs font-bold shadow-lg shadow-electric-blue/50">
                    ⭐ Featured
                  </div>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => {
                    const IconComponent = getTechIcon(tech)
                    return (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 glass-effect rounded-full text-xs font-semibold text-text-primary border border-electric-blue/20 hover:border-electric-blue/50 transition-all"
                      >
                        <IconComponent className="text-electric-blue" />
                        {tech}
                      </motion.span>
                    )
                  })}
                </div>

                {/* GitHub Link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-cyan text-dark-bg rounded-xl font-bold glow-effect hover:shadow-lg hover:shadow-electric-blue/50 transition-all group/btn"
                >
                  <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
                  <span>View on GitHub</span>
                  <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
