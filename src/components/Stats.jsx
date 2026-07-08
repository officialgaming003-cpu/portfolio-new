import { motion } from 'framer-motion'

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 10+ Years Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border-4 border-purple-500 bg-white hover:shadow-lg smooth-transition"
          >
            <div className="text-5xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600 font-semibold">YEARS EXPERIENCE</div>
          </motion.div>

          {/* 24/7 Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl border-4 border-teal-500 bg-white hover:shadow-lg smooth-transition"
          >
            <div className="text-5xl font-bold text-teal-500 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold">SUPPORT</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Stats