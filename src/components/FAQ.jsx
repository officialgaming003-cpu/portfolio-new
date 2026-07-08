import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'Berapa lama proses pembuatan website?',
      answer: 'Waktu pengerjaan tergantung kompleksitas project. Rata-rata 4-12 minggu untuk project standar.'
    },
    {
      id: 2,
      question: 'Apakah ada garansi setelah project selesai?',
      answer: 'Ya, kami memberikan garansi maintenance 3 bulan setelah launching.'
    },
    {
      id: 3,
      question: 'Bagaimana dengan revisi design?',
      answer: 'Unlimited revisi selama fase design sesuai brief awal yang disepakati.'
    },
    {
      id: 4,
      question: 'Apakah bisa custom sesuai kebutuhan?',
      answer: 'Tentu saja! Semua project kami custom sesuai requirement dan branding klien.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Jawaban untuk pertanyaan yang sering diajukan klien kami.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-soft"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50 smooth-transition"
              >
                <span className="font-semibold text-left text-gray-900">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-blue-500 text-xl"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 border-t border-gray-200"
                  >
                    <p className="p-6 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ