import { motion } from 'framer-motion'
import { useAdmin } from '../hooks/useAdmin'

const Hero = () => {
  const { content } = useAdmin()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-100 border-2 border-purple-500 rounded-full mb-6 sm:mb-8 flex-wrap justify-center">
            <span className="text-purple-600 font-bold text-xs sm:text-sm">{content.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {content.hero.title.split(' ').map((word, idx) => {
              if (word.includes('web') || word.includes('apps')) return <span key={idx} className="text-purple-600">{word} </span>
              if (word.includes('scraper')) return <span key={idx} className="text-teal-500">{word} </span>
              return <span key={idx}>{word} </span>
            })}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            {content.hero.description}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0"
          >
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-purple-500 text-white text-sm sm:text-base rounded-full font-bold hover:bg-purple-600 smooth-transition">
              ➜ VIEW PRODUCTS
            </button>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-purple-500 text-purple-600 text-sm sm:text-base rounded-full font-bold hover:bg-purple-50 smooth-transition">
              ▶ START A PROJECT
            </button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 items-center px-2 sm:px-0"
          >
            {[
              { icon: '⚛️', label: 'REACT' },
              { icon: '▲', label: 'NEXT.JS' },
              { icon: '🎨', label: 'NUXT' },
              { icon: '⚡', label: 'SVELTE' }
            ].map((tech) => (
              <div key={tech.label} className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full">
                <span className="text-lg sm:text-xl">{tech.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{tech.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 rounded-xl sm:rounded-2xl overflow-hidden border-3 sm:border-4 border-purple-500 shadow-2xl"
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold">
            🖥️ Circuit Board Image
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
