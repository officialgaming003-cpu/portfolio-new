import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's chat!</p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '✉️', label: 'Email', value: 'hello@adit.dev', link: 'mailto:hello@adit.dev' },
            { icon: '💬', label: 'Discord', value: 'AditDev#1234', link: '#' },
            { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/aditdev', link: '#' }
          ].map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 smooth-transition text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 smooth-transition inline-block">{contact.icon}</div>
              <h3 className="font-bold mb-1 group-hover:text-blue-400 smooth-transition">{contact.label}</h3>
              <p className="text-gray-400 text-sm">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="p-8 rounded-lg border border-gray-800 bg-gray-900 hover:border-blue-500 smooth-transition"
        >
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 text-white focus:border-blue-500 focus:outline-none smooth-transition placeholder-gray-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 text-white focus:border-blue-500 focus:outline-none smooth-transition placeholder-gray-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="4"
              required
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 text-white focus:border-blue-500 focus:outline-none smooth-transition resize-none placeholder-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 smooth-transition disabled:opacity-50"
            disabled={submitted}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact