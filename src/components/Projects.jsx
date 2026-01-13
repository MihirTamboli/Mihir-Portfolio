import { motion } from 'framer-motion'
import { FaGithub, FaPython, FaJava, FaJs, FaExternalLinkAlt } from 'react-icons/fa'
import { SiTensorflow, SiFlask, SiMysql, SiOpencv, SiKeras, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiDjango } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'CareerSage AI',
      description: 'Situation: Students struggle to choose career paths without data-driven guidance. Task: Build an AI-powered career guidance system. Action: Developed a full-stack web application with ML-based recommendation engine using React, Node.js, MongoDB, and Python to analyze academic performance and aptitude results. Result: System provides personalized career path recommendations, course suggestions, and college matches with chatbot assistance and automated report generation.',
      github: 'https://github.com/MihirTamboli/CareerSageAI',
      tech: ['React', 'Node.js', 'MongoDB', 'Python', 'Machine Learning'],
      featured: true,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Brain Tumor Detection',
      description: 'Situation: Manual MRI tumor diagnosis is time-consuming and requires expert radiologists. Task: Build an automated detection system using deep learning. Action: Developed a CNN model with image preprocessing and data augmentation using TensorFlow, Keras, and OpenCV. Implemented evaluation dashboard for performance analysis. Result: Achieved 96% classification accuracy and deployed an interactive demo for real-time predictions, significantly reducing diagnosis time.',
      github: 'https://github.com/MihirTamboli/Brain-Tumor-Detection',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      featured: true,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Intellix AI ',
      description: 'Intellix AI is a smart conversational AI assistant developed using Google’s Gemini API to provide real-time intelligent responses and task automation. The system is designed to simulate human-like interaction, answer user queries, assist with problem-solving, and deliver quick access to information through a clean and responsive web interface.',
      github: 'https://github.com/MihirTamboli/Intellix-AI',
      tech: ['Tensorflow', 'Python'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'E-Commerce Website',
      description: 'Situation: Need a scalable e-commerce solution with comprehensive features. Task: Build a full-featured online shopping platform. Action: Developed a complete e-commerce system with React frontend and Node.js backend, implementing user authentication, product catalog, shopping cart, payment integration, and order management using MongoDB for data storage. Result: Fully functional e-commerce platform with secure payment processing and seamless user experience.',
      github: 'https://github.com/MihirTamboli/E-Commerce-Website',
      tech: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Billing Application',
      description: 'Situation: Businesses need efficient invoice and billing management systems. Task: Create a comprehensive billing solution. Action: Built a full-stack billing application using Django, Python, MySQL, and JavaScript with user authentication, automated invoice generation, payment tracking, and detailed reporting features. Result: Streamlined billing system that automates invoice creation and payment tracking, improving business billing operations efficiency.',
      github: 'https://github.com/MihirTamboli/Billing_Application',
      tech: ['Python', 'Django', 'MySQL', 'JavaScript'],
      gradient: 'from-cyan-500 to-blue-500',
    },
  ]

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('react')) return SiReact
    if (techLower.includes('tailwind')) return SiTailwindcss
    if (techLower.includes('node')) return SiNodedotjs
    if (techLower.includes('mongo')) return SiMongodb
    if (techLower.includes('python')) return FaPython
    if (techLower.includes('java')) return FaJava
    if (techLower.includes('javascript') || techLower.includes('js')) return FaJs
    if (techLower.includes('tensorflow')) return SiTensorflow
    if (techLower.includes('keras')) return SiKeras
    if (techLower.includes('flask')) return SiFlask
    if (techLower.includes('django')) return SiDjango
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
