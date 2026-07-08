import { motion } from 'framer-motion'

const Marketplace = () => {
  const products = [
    {
      title: 'Source Code Self-hosted Payment Gateway QRIS GoPay Merchant',
      description: 'Source code self-hosted payment gateway menggunakan akun GoPay Merchant. Dirancang untuk kebutuhan sistem...',
      image: '💻',
      price: 'Rp 2.000.000',
      originalPrice: 'Rp 2.500.000',
      badge: 'SOURCE CODE',
      sale: 'SALE -20%',
      color: 'border-purple-500'
    },
    {
      title: 'Source Code Cek Mutasi Bank BCA Personal (iBank)',
      description: 'Source code pengecekan mutasi rekening BCA Personal (iBank) secara berkala. Dirancang untuk...',
      image: '🏦',
      price: 'Rp 1.000.000',
      originalPrice: 'Rp 1.500.000',
      badge: 'SOURCE CODE',
      sale: 'SALE -33%',
      color: 'border-teal-500'
    }
  ]

  return (
    <section id="store" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border-2 border-orange-500 rounded-full mb-8"
        >
          <span className="text-orange-600 font-bold text-sm">🔷 MARKETPLACE</span>
        </motion.div>

        {/* Title with Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Premium Assets,<br />
              <span className="text-orange-500">Ready to Power Your Business.</span>
            </h2>
          </div>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 smooth-transition whitespace-nowrap">
            ➜ BROWSE ALL
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border-4 ${product.color} bg-white hover:shadow-lg smooth-transition overflow-hidden group`}
            >
              {/* Product Image */}
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-6xl overflow-hidden">
                {product.image}
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full">
                  {product.badge}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full">
                  {product.sale}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-purple-600">{product.price}</div>
                  <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                </div>
                <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-500 hover:bg-purple-50 smooth-transition">
                  →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marketplace