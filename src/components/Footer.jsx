import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12 border-t-3 sm:border-t-4 border-purple-500">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 sm:w-8 h-7 sm:h-8 bg-purple-500 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm">
                A
              </div>
              <span className="font-bold text-sm sm:text-base">ADITDEV.ID</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Building high-performance web apps, bots, and scrapers.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
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
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Social</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
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
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white smooth-transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">Terms</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">Sitemap</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 sm:my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm gap-4">
          <p>&copy; {currentYear} ADITDEV.ID — ALL RIGHTS RESERVED</p>
          <div className="flex gap-4 text-lg sm:text-xl">
            <a href="#" className="hover:text-purple-500 smooth-transition">🐙</a>
            <a href="#" className="hover:text-purple-500 smooth-transition">👤</a>
            <a href="#" className="hover:text-purple-500 smooth-transition">✉️</a>
            <a href="#" className="hover:text-purple-500 smooth-transition">💬</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-6 sm:mt-8 text-gray-500 text-xs">
          <p>MADE WITH 💜 BY ADITAMA</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
