import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-electric-blue mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Computer Science undergraduate passionate about leveraging technology 
              to solve real-world problems. With hands-on experience in Python development, 
              I've worked on various projects spanning backend systems, data analysis, and 
              AI/ML applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise includes building scalable backend solutions, analyzing complex 
              datasets to extract meaningful insights, and developing intelligent systems 
              using machine learning frameworks. I'm particularly interested in roles that 
              combine data-driven decision making with analytical problem-solving.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I thrive in environments where I can apply my technical skills to create 
              innovative solutions and contribute to impactful projects. Whether it's 
              developing robust APIs, training ML models, or designing database schemas, 
              I bring a detail-oriented and results-driven approach to every challenge.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-electric-blue mb-4">
              Education
            </h3>
            
            <div className="space-y-6">
              {/* B.Tech */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-electric-blue text-2xl mt-1">
                    <FaGraduationCap />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      B.Tech Computer Engineering
                    </h4>
                    <p className="text-electric-blue mb-2 flex items-center gap-2">
                      <FaUniversity className="text-sm" />
                      MIT ADT Pune
                    </p>
                    <p className="text-gray-400">
                      CGPA: <span className="text-white font-semibold">7.25</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Diploma */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-electric-blue text-2xl mt-1">
                    <FaGraduationCap />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Diploma in Computer Engineering
                    </h4>
                    <p className="text-gray-400">
                      Percentage: <span className="text-white font-semibold">76%</span>
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
