import { useAdmin } from '../../hooks/useAdmin'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ServicesEditor = () => {
  const { content, updateService } = useAdmin()
  const [editingId, setEditingId] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-gray-900">Edit Services</h3>

      <div className="space-y-4">
        {content.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-2 border-gray-300 rounded-lg p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-900">Service #{service.number}</h4>
              <button
                onClick={() => setEditingId(editingId === service.id ? null : service.id)}
                className="px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-600 transition"
              >
                {editingId === service.id ? 'Selesai' : 'Edit'}
              </button>
            </div>

            {editingId === service.id && (
              <div className="space-y-3 pt-3 border-t-2 border-gray-200">
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => updateService(service.id, { title: e.target.value })}
                  placeholder="Title"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500"
                />
                <textarea
                  value={service.description}
                  onChange={(e) => updateService(service.id, { description: e.target.value })}
                  placeholder="Description"
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500 resize-none"
                />
                <input
                  type="text"
                  value={service.techs.join(', ')}
                  onChange={(e) => updateService(service.id, { techs: e.target.value.split(',').map(t => t.trim()) })}
                  placeholder="Tech stack (pisahkan dengan koma)"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-purple-500"
                />
              </div>
            )}

            {editingId !== service.id && (
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Title:</strong> {service.title}</p>
                <p><strong>Description:</strong> {service.description}</p>
                <p><strong>Techs:</strong> {service.techs.join(', ')}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ServicesEditor
