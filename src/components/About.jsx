import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma', 'AWS'] }
  ]

  return (
    <section id="about" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">Learn more about my journey and expertise</p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a full-stack developer with 5+ years of experience building web applications. I specialize in creating beautiful, functional, and scalable solutions that solve real problems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 smooth-transition"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About