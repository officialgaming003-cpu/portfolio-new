import { useAdmin } from '../../hooks/useAdmin'
import { motion } from 'framer-motion'

const AdminDashboard = () => {
  const { content } = useAdmin()

  const stats = [
    { label: 'Services', value: content.services.length, icon: '⚙️' },
    { label: 'Marketplace Items', value: content.marketplace.length, icon: '🛒' },
    { label: 'Last Updated', value: new Date().toLocaleDateString('id-ID'), icon: '📅' }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-teal-50 rounded-lg border-2 border-purple-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-600">{stat.value}</p>
              </div>
              <span className="text-4xl">{stat.icon}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-blue-800 text-sm">
          💡 <strong>Tip:</strong> Gunakan tab di atas untuk mengedit konten Hero, Services, dan Marketplace
        </p>
      </div>
    </div>
  )
}

export default AdminDashboard
