import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: ['About Us', 'Team', 'Careers', 'Blog'],
    Services: ['Web Design', 'Development', 'SEO', 'Consulting'],
    Resources: ['Documentation', 'API', 'Pricing', 'Support'],
    Legal: ['Privacy', 'Terms', 'Contact', 'Sitemap']
  }

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Facebook', icon: '📘' },
    { name: 'LinkedIn', icon: '💼' },
    { name: 'Instagram', icon: '📷' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Membuat pengalaman digital yang luar biasa untuk bisnis Anda.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map((key, index) => (
            <motion.div
              key={key[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{key[0]}</h4>
              <ul className="space-y-2">
                {key[1].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white smooth-transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            &copy; {currentYear} Portfolio. Semua hak dilindungi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-xl hover:text-blue-400 smooth-transition"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer