import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🛍️',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Social Dashboard',
      description: 'Analytics dashboard for social media management',
      tech: ['React', 'Firebase', 'Tailwind'],
      image: '📊',
      link: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI Chat App',
      description: 'Intelligent chatbot powered by machine learning',
      tech: ['React', 'Python', 'TensorFlow'],
      image: '🤖',
      link: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Collaborative task management application',
      tech: ['React', 'Express', 'PostgreSQL'],
      image: '✅',
      link: '#'
    },
    {
      id: 5,
      title: 'Mobile App',
      description: 'Cross-platform mobile application for fitness tracking',
      tech: ['React Native', 'Firebase'],
      image: '📱',
      link: '#'
    },
    {
      id: 6,
      title: 'CMS System',
      description: 'Headless CMS for content management',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      image: '📝',
      link: '#'
    }
  ]

  return (
    <section id="work" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here's a collection of projects I'm proud of. Each one is a unique blend of creativity and technical expertise.
          </p>
        </motion.div>

        {/* Featured Projects (3 cols) */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 smooth-transition p-6"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 smooth-transition"></div>

                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 smooth-transition">{project.image}</div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 smooth-transition">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full group-hover:bg-blue-600 group-hover:text-white smooth-transition">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400 group-hover:bg-opacity-10 smooth-transition">
                  <span className="text-lg">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Other Projects (2 cols) */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group flex items-center justify-between p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 smooth-transition"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{project.image}</div>
                  <div>
                    <h3 className="font-bold group-hover:text-blue-400 smooth-transition">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.tech.join(' • ')}</p>
                  </div>
                </div>
                <span className="text-gray-500 group-hover:text-blue-400 smooth-transition">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio