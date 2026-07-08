import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Desain modern dan intuitif yang meningkatkan engagement pengguna.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Web Development',
      description: 'Website cepat, responsif, dan dioptimalkan untuk performa maksimal.'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Mobile App',
      description: 'Aplikasi mobile yang powerful dengan user experience yang sempurna.'
    },
    {
      id: 4,
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Tingkatkan visibilitas online Anda dengan strategi SEO terbaik.'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Analytics',
      description: 'Dapatkan insights mendalam tentang performa digital Anda.'
    },
    {
      id: 6,
      icon: '🚀',
      title: 'Deployment',
      description: 'Launching produk dengan kualitas production-ready.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solusi digital lengkap untuk mengembangkan bisnis Anda ke level berikutnya.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="p-6 rounded-lg bg-gray-50 hover-lift shadow-soft"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services