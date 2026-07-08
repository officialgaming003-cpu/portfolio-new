import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-100 border-2 border-purple-500 rounded-full mb-6 sm:mb-8"
        >
          <span className="text-purple-600 font-bold text-xs sm:text-sm">🔷 ABOUT ME</span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          More than just code —<br />
          production-ready <span className="text-purple-600">web apps, bots,</span> and
          <span className="text-gray-900"> scrapers.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mb-8 sm:mb-10 md:mb-12 leading-relaxed"
        >
          Need a full-stack web application? An automated Telegram bot? A 24/7 bank mutation scraper? I handle end-to-end development, from initial architecture to production deployment.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {[
            { icon: '💻', title: 'WEB DEVELOPER', desc: 'Full-stack web applications utilizing Laravel, Next.js, Nuxt, and SvelteKit, or modern SPAs with React/Vue.' },
            { icon: '🤖', title: 'BOT BUILDER', desc: 'Interactive bots for Telegram, Discord, and WhatsApp built with grammY, discord.js, and more.' },
            { icon: '🔍', title: 'SCRAPER ENGINEER', desc: 'Advanced web scraping, bank mutation extraction, and anti-bot bypass using Playwright, Puppeteer, and Selenium.' },
            { icon: '🚀', title: 'DEVOPS & INFRA', desc: 'Comprehensive deployment to VPS, Docker containerization, CI/CD pipelines, and active monitoring.' }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-gray-900 bg-white hover:shadow-lg smooth-transition"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{service.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
