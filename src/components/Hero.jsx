import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border-2 border-purple-500 rounded-full mb-8">
            <span className="text-purple-600 font-bold text-sm">⭐ WEB DEVELOPER • BOT BUILDER • SCRAPER ENGINEER</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building high-performance <span className="text-purple-600">web apps, bots,</span> and
            <span className="text-teal-500"> scrapers</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm Aditama Gilang Farel — a full-stack developer focused on web apps, automation bots, and scraping systems — end-to-end, from architecture to deployment.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="px-8 py-3 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-600 smooth-transition">
              ➜ VIEW PRODUCTS
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 text-purple-600 rounded-full font-bold hover:bg-purple-50 smooth-transition">
              ▶ START A PROJECT
            </button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 items-center"
          >
            {[
              { icon: '⚛️', label: 'REACT' },
              { icon: '▲', label: 'NEXT.JS' },
              { icon: '🎨', label: 'NUXT' },
              { icon: '⚡', label: 'SVELTE' }
            ].map((tech) => (
              <div key={tech.label} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{tech.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl"
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            🖥️ Circuit Board Image
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero