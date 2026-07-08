import { motion } from 'framer-motion'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'CEO Tech Startup',
      content: 'Tim yang profesional dan responsif. Mereka berhasil mengubah visi kami menjadi kenyataan yang memukau.',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'Marketing Director',
      content: 'Hasil kerjanya luar biasa dan tepat waktu. Sangat merekomendasikan untuk project berikutnya.',
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Ahmad Wijaya',
      role: 'Business Owner',
      content: 'Platform yang dibangun meningkatkan conversion rate kami hingga 300%. Investasi terbaik!',
      avatar: '👨‍🔧'
    }
  ]

  return (
    <section id="testimonial" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonial Klien</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apa kata klien kami tentang pengalaman bekerja sama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-soft hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial