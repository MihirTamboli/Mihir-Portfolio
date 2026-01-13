import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaCode, FaRocket } from 'react-icons/fa'

const About = () => {
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
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
            ABOUT ME
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Professional Summary */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-6 glass-effect-strong p-8 rounded-2xl card-hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 rounded-xl">
                <FaCode className="text-3xl text-electric-blue" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                Professional Summary
              </h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed">
              I’m a Computer Science Engineering student passionate about Artificial Intelligence, Data Analytics, and Backend Development. I enjoy transforming complex data into meaningful insights and building smart web applications that help users make better decisions.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I have hands-on experience developing machine learning models, web-based AI systems, and database-driven applications. I’m constantly exploring new technologies and improving my problem-solving skills to build impactful software solutions.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 rounded-xl">
                <FaRocket className="text-3xl text-accent-purple" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-2">
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {/* B.Tech */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect-strong p-6 rounded-xl border border-electric-blue/20 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-electric-blue/30 to-neon-cyan/30 rounded-lg group-hover:scale-110 transition-transform">
                    <FaGraduationCap className="text-2xl text-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-text-primary mb-2 group-hover:text-gradient transition-colors">
                      B.Tech Computer Engineering
                    </h4>
                    <p className="text-electric-blue mb-2 flex items-center gap-2 font-semibold">
                      <FaUniversity className="text-sm" />
                      MIT ADT Pune
                    </p>
                    <p className="text-text-secondary">
                      CGPA: <span className="text-electric-blue font-bold text-lg">7.25</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Diploma */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect-strong p-6 rounded-xl border border-accent-purple/20 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent-purple/30 to-accent-pink/30 rounded-lg group-hover:scale-110 transition-transform">
                    <FaGraduationCap className="text-2xl text-accent-purple" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-text-primary mb-2 group-hover:text-gradient-2 transition-colors">
                      Diploma in Computer Engineering
                    </h4>
                    <p className="text-text-secondary">
                      Percentage: <span className="text-accent-purple font-bold text-lg">76%</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
