import { useAdmin } from '../../hooks/useAdmin'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MarketplaceEditor = () => {
  const { content, updateMarketplace } = useAdmin()
  const [editingId, setEditingId] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-gray-900">Edit Marketplace Products</h3>

      <div className="space-y-4">
        {content.marketplace.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-2 border-gray-300 rounded-lg p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-900 truncate flex-1">Product #{product.id}</h4>
              <button
                onClick={() => setEditingId(editingId === product.id ? null : product.id)}
                className="px-3 py-1 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 transition ml-2"
              >
                {editingId === product.id ? 'Selesai' : 'Edit'}
              </button>
            </div>

            {editingId === product.id && (
              <div className="space-y-3 pt-3 border-t-2 border-gray-200">
                <input
                  type="text"
                  value={product.title}
                  onChange={(e) => updateMarketplace(product.id, { title: e.target.value })}
                  placeholder="Title"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500"
                />
                <textarea
                  value={product.description}
                  onChange={(e) => updateMarketplace(product.id, { description: e.target.value })}
                  placeholder="Description"
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500 resize-none"
                />
                <input
                  type="text"
                  value={product.price}
                  onChange={(e) => updateMarketplace(product.id, { price: e.target.value })}
                  placeholder="Price"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500"
                />
                <input
                  type="text"
                  value={product.originalPrice}
                  onChange={(e) => updateMarketplace(product.id, { originalPrice: e.target.value })}
                  placeholder="Original Price"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500"
                />
              </div>
            )}

            {editingId !== product.id && (
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Title:</strong> {product.title}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Original Price:</strong> {product.originalPrice}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default MarketplaceEditor
