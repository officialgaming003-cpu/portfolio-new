import { motion } from 'framer-motion'
import { useAdmin } from '../hooks/useAdmin'

const Services = () => {
  const { content } = useAdmin()

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-teal-100 border-2 border-teal-500 rounded-full mb-6 sm:mb-8"
        >
          <span className="text-teal-600 font-bold text-xs sm:text-sm">🔷 SERVICES & EXPERTISE</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          Three Core Domains,<br />
          <span className="text-teal-500">Powered by a Modern Tech Stack.</span>
        </motion.h2>

        {/* Services */}
        <div className="space-y-4 sm:space-y-6 mt-10 sm:mt-12">
          {content.services.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-3 sm:border-4 ${domain.color || 'border-purple-500'} bg-white hover:shadow-lg smooth-transition`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{domain.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{domain.description}</p>
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-gray-200 flex-shrink-0">{domain.number}</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-3 sm:pt-4 mt-3 sm:mt-4">
                <div className="flex flex-wrap gap-2">
                  {domain.techs.map((tech) => (
                    <span key={tech} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
