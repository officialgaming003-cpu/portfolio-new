import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">adit.dev</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer crafting beautiful digital experiences.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white smooth-transition">Home</a></li>
              <li><a href="#work" className="hover:text-white smooth-transition">Work</a></li>
              <li><a href="#about" className="hover:text-white smooth-transition">About</a></li>
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
              <li><a href="#" className="hover:text-white smooth-transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white smooth-transition">Discord</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="mailto:hello@adit.dev" className="hover:text-white smooth-transition">hello@adit.dev</a></li>
              <li className="pt-2"><a href="#contact" className="px-4 py-2 border border-gray-700 rounded-lg hover:border-white smooth-transition inline-block">Get In Touch</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} adit.dev. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white smooth-transition">Privacy</a>
            <a href="#" className="hover:text-white smooth-transition">Terms</a>
            <a href="#" className="hover:text-white smooth-transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer