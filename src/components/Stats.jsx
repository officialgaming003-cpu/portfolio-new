import { motion } from 'framer-motion'

const Stats = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* 10+ Years Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-purple-500 bg-white hover:shadow-lg smooth-transition"
          >
            <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600 font-semibold text-sm sm:text-base">YEARS EXPERIENCE</div>
          </motion.div>

          {/* 24/7 Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-teal-500 bg-white hover:shadow-lg smooth-transition"
          >
            <div className="text-4xl sm:text-5xl font-bold text-teal-500 mb-2">24/7</div>
            <div className="text-gray-600 font-semibold text-sm sm:text-base">SUPPORT</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Stats
