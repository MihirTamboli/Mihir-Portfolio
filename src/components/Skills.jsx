import { motion } from 'framer-motion'
import { 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaBrain
} from 'react-icons/fa'
import { SiFlask, SiTensorflow, SiMysql, SiOpencv, SiKeras } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'Java', icon: FaJava, color: 'text-orange-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'SQL', icon: FaDatabase, color: 'text-cyan-500' },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Flask', icon: SiFlask, color: 'text-gray-300' },
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
        { name: 'Keras', icon: SiKeras, color: 'text-red-500' },
        { name: 'OpenCV', icon: SiOpencv, color: 'text-green-500' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
        { name: 'Google Colab', icon: FaPython, color: 'text-yellow-500' },
        { name: 'Android Studio', icon: FaJava, color: 'text-green-500' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
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
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-electric-blue mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                    >
                      <IconComponent className={`text-3xl ${skill.color}`} />
                      <span className="text-sm text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
