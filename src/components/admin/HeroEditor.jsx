import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../../hooks/useAdmin'

const HeroEditor = () => {
  const { content, updateHero } = useAdmin()

  const handleChange = (field, value) => {
    updateHero({ [field]: value })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-gray-900">Edit Hero Section</h3>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Badge</label>
        <input
          type="text"
          value={content.hero.badge}
          onChange={(e) => handleChange('badge', e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Main Title</label>
        <textarea
          value={content.hero.title}
          onChange={(e) => handleChange('title', e.target.value)}
          rows="3"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
        <textarea
          value={content.hero.description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows="3"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 resize-none"
        />
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded text-sm">
        <p className="text-green-800">✅ Perubahan disimpan otomatis</p>
      </div>
    </motion.div>
  )
}

export default HeroEditor
