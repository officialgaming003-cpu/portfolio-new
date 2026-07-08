import { motion } from 'framer-motion'
import { useAdmin } from '../hooks/useAdmin'

const Marketplace = () => {
  const { content } = useAdmin()

  return (
    <section id="store" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-100 border-2 border-orange-500 rounded-full mb-6 sm:mb-8"
        >
          <span className="text-orange-600 font-bold text-xs sm:text-sm">🔷 MARKETPLACE</span>
        </motion.div>

        {/* Title with Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Premium Assets,<br />
              <span className="text-orange-500">Ready to Power Your Business.</span>
            </h2>
          </div>
          <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white text-sm sm:text-base rounded-full font-bold hover:bg-orange-600 smooth-transition whitespace-nowrap flex-shrink-0">
            ➜ BROWSE ALL
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {content.marketplace.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-3 sm:border-4 ${product.color || 'border-purple-500'} bg-white hover:shadow-lg smooth-transition overflow-hidden group`}
            >
              {/* Product Image */}
              <div className="aspect-video bg-gray-200 rounded-lg mb-3 sm:mb-4 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl overflow-hidden">
                {product.image}
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full">
                  SOURCE CODE
                </span>
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full">
                  SALE -20%
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{product.description}</p>

              {/* Price */}
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-lg sm:text-2xl font-bold text-purple-600">{product.price}</div>
                  <div className="text-xs sm:text-sm text-gray-400 line-through">{product.originalPrice}</div>
                </div>
                <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-500 hover:bg-purple-50 smooth-transition flex-shrink-0 text-lg sm:text-xl">
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
