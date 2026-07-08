import { motion } from 'framer-motion'

const Services = () => {
  const domains = [
    {
      number: '01',
      title: 'Web Development',
      description: 'Custom full-stack web applications—from strategic landing pages to complex SaaS platforms, built to scale.',
      techs: ['LARAVEL', 'INERTIA', 'NEXT.JS', 'NUXT.JS', 'NUXT 3', 'SVELTE-KIT', 'REACT SPA', 'VUE SPA', 'LIVE-WIRE', 'ASTRO', 'REMIX'],
      color: 'border-purple-500'
    },
    {
      number: '02',
      title: 'Scraping & Automation',
      description: 'Advanced data extraction, automated bank mutation systems, anti-bot bypass, and custom automation workflows.',
      techs: ['PLAYWRIGHT', 'PUPPETEER', 'PUPPETEER STEALTH', 'SELENIUM', 'UNDETECTED CHROME', 'CHEERIO', 'BEAUTIFULSOUP', 'NODE.JS', 'PYTHON'],
      color: 'border-teal-500'
    },
    {
      number: '03',
      title: 'Bot Development',
      description: 'Intelligent bots for Telegram, Discord, and WhatsApp—handling complex logic, queue workers, and multi-platform integrations.',
      techs: ['GRAMMY', 'TELEGRAM', 'DISCORD.JS', 'DISCORD.PY', 'BAILEYS', 'WHATSAPP-WEB.JS', 'BULLING', 'CELERY', 'AIOGRAM'],
      color: 'border-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 border-2 border-teal-500 rounded-full mb-8"
        >
          <span className="text-teal-600 font-bold text-sm">🔷 SERVICES & EXPERTISE</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Three Core Domains,<br />
          <span className="text-teal-500">Powered by a Modern Tech Stack.</span>
        </motion.h2>

        {/* Services */}
        <div className="space-y-6 mt-12">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border-4 ${domain.color} bg-white hover:shadow-lg smooth-transition`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{domain.title}</h3>
                  <p className="text-gray-600 mt-2">{domain.description}</p>
                </div>
                <span className="text-3xl font-bold text-gray-200">{domain.number}</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-4 mt-4">
                <div className="flex flex-wrap gap-2">
                  {domain.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
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