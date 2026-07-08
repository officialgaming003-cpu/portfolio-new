import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-purple-200 shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 sm:gap-2 min-w-fit hover:opacity-80 smooth-transition">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-lg">
              Z
            </div>
            <span className="font-bold text-xs sm:text-sm md:text-lg whitespace-nowrap">
              ZENDEV.<span className="text-purple-600">ID</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <a href="/#home" className="text-gray-700 hover:text-purple-600 smooth-transition font-medium text-sm">
              HOME
            </a>
            <a href="/#store" className="text-gray-700 hover:text-purple-600 smooth-transition font-medium text-sm">
              STORE
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-purple-600 smooth-transition font-medium text-sm">
              CONTACT
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <a href="/admin-login" className="hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 smooth-transition shadow-md text-xs lg:text-sm whitespace-nowrap">
            🔐 ADMIN
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-3 sm:px-4 py-3 space-y-3">
              <a href="/#home" className="block py-2 text-gray-700 hover:text-purple-600 font-medium text-sm">
                HOME
              </a>
              <a href="/#store" className="block py-2 text-gray-700 hover:text-purple-600 font-medium text-sm">
                STORE
              </a>
              <a href="/#contact" className="block py-2 text-gray-700 hover:text-purple-600 font-medium text-sm">
                CONTACT
              </a>
              <a href="/admin-login" className="w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-full font-semibold text-sm text-center">
                ADMIN
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
