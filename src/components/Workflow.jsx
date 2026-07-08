import { motion } from 'framer-motion'

const Workflow = () => {
  const steps = [
    {
      number: '01',
      icon: '💬',
      title: 'Discovery & Briefing',
      description: 'Define your requirements — web app, bot, or scraper. I\'ll map out the workflow and find the best approach before writing a single line of code.',
      color: 'border-purple-500'
    },
    {
      number: '02',
      icon: '🔧',
      title: 'Build & Iterate',
      description: 'Building from the ground up or integrating with legacy systems. I leverage specialized tech stacks ensuring high performance and scalability.',
      color: 'border-teal-500'
    },
    {
      number: '03',
      icon: '⚡',
      title: 'Quality Assurance',
      description: 'Rigorous testing to ensure complete stability—including unit tests, edge-case validation, and load testing.',
      color: 'border-orange-500'
    },
    {
      number: '04',
      icon: '🚀',
      title: 'Deployment & Support',
      description: 'Seamless transition to live servers with proactive monitoring and dedicated maintenance. Support is always within reach.',
      color: 'border-blue-500'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 border-2 border-blue-500 rounded-full mb-6 sm:mb-8"
        >
          <span className="text-blue-600 font-bold text-xs sm:text-sm">🔷 WORKFLOW</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 leading-tight"
        >
          A Streamlined Process,<br />
          <span className="text-blue-600">Production-Grade Results.</span>
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-3 sm:border-4 ${step.color} bg-white hover:shadow-lg smooth-transition`}
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                <span className="text-3xl sm:text-4xl flex-shrink-0">{step.icon}</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-200 flex-shrink-0">{step.number}</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
              <div className={`h-1 w-full mt-3 sm:mt-4 rounded-full bg-gradient-to-r ${step.color.replace('border', 'from').replace('-500', '')}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow
