import { motion } from 'framer-motion'
import { 
  FaPython, 
  FaJs, 
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaJava,
} from 'react-icons/fa'
import { 
  SiTensorflow, 
  SiFlask, 
  SiNodedotjs, 
  SiDjango, 
  SiReact, 
  SiTailwindcss, 
  SiPostman, 
  SiVisualstudiocode,
  SiPandas,
  SiNumpy,
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: FaBrain,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-blue-400', glow: 'shadow-blue-500/50' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', glow: 'shadow-yellow-500/50' },
        { name: 'SQL', icon: FaDatabase, color: 'text-cyan-400', glow: 'shadow-cyan-500/50' },
        { name: 'Java', icon: FaJava, color: 'text-cyan-400', glow: 'shadow-cyan-500/50' },
      ],
    },
    {
      title: 'AI / Data',
      icon: FaBrain,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', icon: FaBrain, color: 'text-purple-300', glow: 'shadow-purple-500/50' },
        { name: 'Deep Learning', icon: FaBrain, color: 'text-pink-300', glow: 'shadow-pink-500/50' },
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-400', glow: 'shadow-orange-500/50' },
        { name: 'Pandas', icon: SiPandas, color: 'text-blue-300', glow: 'shadow-blue-500/50' },
        { name: 'NumPy', icon: SiNumpy, color: 'text-sky-300', glow: 'shadow-sky-500/50' },
        { name: 'Data Visualization', icon: FaChartLine, color: 'text-green-300', glow: 'shadow-green-500/50' },
      ],
    },
    {
      title: 'Backend',
      icon: SiNodedotjs,
      gradient: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Django', icon: SiDjango, color: 'text-emerald-300', glow: 'shadow-emerald-500/50' },
        { name: 'Flask', icon: SiFlask, color: 'text-gray-300', glow: 'shadow-gray-500/50' },
        { name: 'REST APIs', icon: FaCloud, color: 'text-cyan-300', glow: 'shadow-cyan-500/50' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', glow: 'shadow-green-500/50' },
      ],
    },
    {
      title: 'Frontend',
      icon: SiReact,
      gradient: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'React.js', icon: SiReact, color: 'text-cyan-300', glow: 'shadow-cyan-500/50' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-400', glow: 'shadow-orange-500/50' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400', glow: 'shadow-blue-500/50' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-300', glow: 'shadow-sky-500/50' },
      ],
    },
    {
      title: 'Tools',
      icon: FaGitAlt,
      gradient: 'from-gray-500 to-slate-600',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-400', glow: 'shadow-orange-500/50' },
        { name: 'GitHub', icon: FaGithub, color: 'text-white', glow: 'shadow-gray-500/50' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-300', glow: 'shadow-orange-500/50' },
        { name: 'VS Code', icon: SiVisualstudiocode, color: 'text-blue-400', glow: 'shadow-blue-500/50' },
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
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
            SKILLS & TECHNOLOGIES
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            My <span className="text-gradient">Skills</span>
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
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect-strong p-6 rounded-2xl border border-electric-blue/20 card-hover group relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gradient group-hover:text-gradient-2 transition-all">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="flex flex-col items-center gap-3 p-4 rounded-xl glass-effect border border-electric-blue/10 hover:border-electric-blue/50 transition-all group/skill"
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 group-hover/skill:from-electric-blue/40 group-hover/skill:to-neon-cyan/40 transition-all ${skill.glow} shadow-lg group-hover/skill:shadow-xl`}>
                            <SkillIcon className={`text-3xl ${skill.color} group-hover/skill:scale-110 transition-transform`} />
                          </div>
                          <span className="text-sm font-semibold text-text-primary text-center group-hover/skill:text-electric-blue transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
