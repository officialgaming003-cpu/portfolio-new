import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-5xl">
              👨‍💻
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Adit Dev</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-300 mb-4 font-light"
        >
          Full-Stack Developer & UI/UX Designer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I craft beautiful, scalable, and performant digital experiences. Specialized in React, Node.js, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#work"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 smooth-transition inline-block"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black smooth-transition inline-block"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { icon: '🐙', label: 'GitHub', url: 'https://github.com' },
            { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
            { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com' },
            { icon: '✉️', label: 'Email', url: 'mailto:hello@adit.dev' }
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-lg hover:border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 smooth-transition"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gray-500 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero