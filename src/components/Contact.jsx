import { motion } from 'framer-motion'

const Contact = () => {
  const contacts = [
    { icon: '✉️', title: 'EMAIL', value: 'business@aditdev.id', link: 'mailto:business@aditdev.id' },
    { icon: '💬', title: 'WHATSAPP', value: '+62819194644444', link: 'https://wa.me/62819194644444' },
    { icon: '🐙', title: 'GITHUB', value: '@aditdev', link: 'https://github.com' },
    { icon: '👤', title: 'FACEBOOK', value: '@aditdev', link: 'https://facebook.com' }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-pink-100 border-2 border-pink-500 rounded-full mb-6 sm:mb-8"
        >
          <span className="text-pink-600 font-bold text-xs sm:text-sm">🔷 CONTACT</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          Got an Idea?<br />
          <span className="text-pink-600">Let's Build It Together.</span>
        </motion.h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mb-10 sm:mb-12">
          Web apps, bots, or scrapers — tell me what you need and let's figure it out together.
        </p>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-gray-900 bg-white hover:shadow-lg smooth-transition group"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="text-3xl sm:text-4xl">{contact.icon}</div>
                <span className="text-gray-300 group-hover:text-purple-500 smooth-transition text-lg sm:text-xl">↗</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{contact.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 truncate">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
