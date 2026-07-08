import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const contacts = [
    { icon: '✉️', title: 'EMAIL', value: 'business@aditdev.id', link: 'mailto:business@aditdev.id' },
    { icon: '💬', title: 'WHATSAPP', value: '+62819194644444', link: 'https://wa.me/62819194644444' },
    { icon: '🐙', title: 'GITHUB', value: '@aditdev', link: 'https://github.com' },
    { icon: '👤', title: 'FACEBOOK', value: '@aditdev', link: 'https://facebook.com' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border-2 border-pink-500 rounded-full mb-8"
        >
          <span className="text-pink-600 font-bold text-sm">🔷 CONTACT</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Got an Idea?<br />
          <span className="text-pink-600">Let's Build It Together.</span>
        </motion.h2>

        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          Web apps, bots, or scrapers — tell me what you need and let's figure it out together.
        </p>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border-3 border-gray-900 bg-white hover:shadow-lg smooth-transition group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{contact.icon}</div>
                <span className="text-gray-300 group-hover:text-purple-500 smooth-transition">↗</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{contact.title}</h3>
              <p className="text-sm text-gray-600">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact