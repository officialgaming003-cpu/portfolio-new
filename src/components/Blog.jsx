import { motion } from 'framer-motion'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Tren UI/UX Design 2024',
      excerpt: 'Pelajari tren desain terbaru yang akan mendominasi industri tahun ini.',
      date: '15 Juli 2024',
      category: 'Design'
    },
    {
      id: 2,
      title: 'Optimasi Web Performance',
      excerpt: 'Tips dan trik untuk membuat website Anda lebih cepat dan responsif.',
      date: '12 Juli 2024',
      category: 'Development'
    },
    {
      id: 3,
      title: 'SEO Strategy yang Efektif',
      excerpt: 'Strategi lengkap untuk meningkatkan ranking website di mesin pencari.',
      date: '10 Juli 2024',
      category: 'Marketing'
    }
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, trik, dan insights tentang dunia digital dan teknologi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-soft hover-lift"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-500 uppercase">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <button className="mt-4 text-blue-500 font-semibold hover:text-blue-700 smooth-transition">
                  Baca Selengkapnya →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog