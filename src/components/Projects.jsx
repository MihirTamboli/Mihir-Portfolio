import { motion } from 'framer-motion'
import { FaGithub, FaPython, FaJava, FaJs } from 'react-icons/fa'
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
    },
    {
      title: 'Intellix-AI',
      description: 'AI-based intelligent solution project featuring advanced machine learning capabilities and intelligent decision-making systems.',
      github: 'https://github.com/MihirTamboli/Intellix-AI',
      tech: ['Python', 'AI/ML', 'TensorFlow', 'Keras'],
      featured: true,
    },
    {
      title: 'Brain Tumor Detection',
      description: 'CNN-based MRI image classification system using TensorFlow and OpenCV for accurate tumor detection and medical image analysis.',
      github: 'https://github.com/MihirTamboli/Brain-Tumor-Detection',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN'],
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-stack e-commerce web application with product listings, user authentication, shopping cart, and seamless user interactions.',
      github: 'https://github.com/MihirTamboli/E-Commerce-Website',
      tech: ['JavaScript', 'HTML', 'CSS', 'Backend'],
    },
    {
      title: 'Billing Management Application',
      description: 'Java-based billing system with MySQL database for managing invoices, transactions, and financial records efficiently.',
      github: 'https://github.com/MihirTamboli/Billing_Application',
      tech: ['Java', 'MySQL', 'Desktop Application'],
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gray-900/50 rounded-lg border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 overflow-hidden group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-electric-blue text-deep-navy px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Featured
                </div>
              )}

              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => {
                    const IconComponent = getTechIcon(tech)
                    return (
                      <span
                        key={techIndex}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700"
                      >
                        <IconComponent className="text-electric-blue" />
                        {tech}
                      </span>
                    )
                  })}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-deep-navy transition-all duration-300 glow-effect group/btn"
                >
                  <FaGithub className="group-hover/btn:scale-110 transition-transform" />
                  <span className="font-semibold">View on GitHub</span>
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 to-neon-cyan/0 group-hover:from-electric-blue/5 group-hover:to-neon-cyan/5 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
