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
      description: 'Building from the ground up or integrating with legacy systems. I leverage specialized tech stacks—from Laravel and Next.js to Python—ensuring high performance and scalability.',
      color: 'border-teal-500'
    },
    {
      number: '03',
      icon: '⚡',
      title: 'Quality Assurance',
      description: 'Rigorous testing to ensure complete stability—including unit tests, edge-case validation, and load testing. This process minimizes risks and ensures reliability before hitting production.',
      color: 'border-orange-500'
    },
    {
      number: '04',
      icon: '🚀',
      title: 'Deployment & Support',
      description: 'Seamless transition to live servers with proactive monitoring and dedicated maintenance. Whether it\'s a bug fix or a new feature, support is always within reach.',
      color: 'border-blue-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border-2 border-blue-500 rounded-full mb-8"
        >
          <span className="text-blue-600 font-bold text-sm">🔷 WORKFLOW</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 leading-tight"
        >
          A Streamlined Process,<br />
          <span className="text-blue-600">Production-Grade Results.</span>
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border-4 ${step.color} bg-white hover:shadow-lg smooth-transition`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{step.icon}</span>
                <span className="text-3xl font-bold text-gray-200">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <div className={`h-1 w-full bg-gradient-to-r mt-4 rounded-full ${step.color.replace('border', 'from').replace('-500', '')}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow