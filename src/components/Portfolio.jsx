import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile App',
      image: '🏦'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      category: 'Web Development',
      image: '📊'
    },
    {
      id: 4,
      title: 'AI Chatbot Solution',
      category: 'AI/ML',
      image: '🤖'
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'Web Development',
      image: '🏠'
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      category: 'Mobile App',
      image: '💪'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Koleksi proyek-proyek terbaik yang telah kami kerjakan untuk klien di seluruh dunia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-soft hover-lift"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 smooth-transition flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio