import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-purple-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center font-bold">
                A
              </div>
              <span className="font-bold">ADITDEV.ID</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building high-performance web apps, bots, and scrapers.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white smooth-transition">Home</a></li>
              <li><a href="#store" className="hover:text-white smooth-transition">Store</a></li>
              <li><a href="#contact" className="hover:text-white smooth-transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Social</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white smooth-transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">WhatsApp</a></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white smooth-transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">Terms</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">Sitemap</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ADITDEV.ID — ALL RIGHTS RESERVED</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-xl">
            <a href="#" className="hover:text-purple-500 smooth-transition">🐙</a>
            <a href="#" className="hover:text-purple-500 smooth-transition">👤</a>
            <a href="#" className="hover:text-purple-500 smooth-transition">✉️</a>
            <a href="#" className="hover:text-purple-500 smooth-transition">💬</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-8 text-gray-500 text-xs">
          <p>MADE WITH 💜 BY ADITAMA</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer