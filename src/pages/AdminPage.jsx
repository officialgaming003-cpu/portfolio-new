import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import AdminDashboard from '../components/admin/AdminDashboard'
import HeroEditor from '../components/admin/HeroEditor'
import ServicesEditor from '../components/admin/ServicesEditor'
import MarketplaceEditor from '../components/admin/MarketplaceEditor'
import { useAdmin } from '../hooks/useAdmin'

const AdminPage = () => {
  const navigate = useNavigate()
  const { adminTab, setAdminTab } = useAdmin()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('admin-token')
    if (!token) {
      navigate('/admin-login')
    } else {
      setIsAuthorized(true)
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('admin-token')
    navigate('/')
  }

  if (!isAuthorized) {
    return null
  }

  return (
    <div className="pt-20 pb-10 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 pb-6 border-b-3 border-purple-200"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">⚙️ Admin Panel</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage your portfolio content</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="px-4 sm:px-6 py-2.5 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 smooth-transition text-sm sm:text-base"
          >
            🚪 Logout
          </motion.button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden mb-8"
        >
          <div className="flex gap-2 p-4 border-b border-gray-200 overflow-x-auto">
            {[
              { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
              { id: 'hero', label: '🎨 Hero', icon: '🎨' },
              { id: 'services', label: '⚙️ Services', icon: '⚙️' },
              { id: 'marketplace', label: '🛒 Marketplace', icon: '🛒' }
            ].map(tab => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAdminTab(tab.id)}
                className={`px-3 sm:px-4 py-2.5 font-semibold text-sm sm:text-base rounded-lg transition whitespace-nowrap ${
                  adminTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={adminTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-8"
          >
            {adminTab === 'dashboard' && <AdminDashboard />}
            {adminTab === 'hero' && <HeroEditor />}
            {adminTab === 'services' && <ServicesEditor />}
            {adminTab === 'marketplace' && <MarketplaceEditor />}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminPage
