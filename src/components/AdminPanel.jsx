import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../hooks/useAdmin'
import AdminDashboard from './admin/AdminDashboard'
import HeroEditor from './admin/HeroEditor'
import ServicesEditor from './admin/ServicesEditor'
import MarketplaceEditor from './admin/MarketplaceEditor'

const AdminPanel = () => {
  const { isAdminOpen, setIsAdminOpen, adminTab, setAdminTab } = useAdmin()
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')

  const ADMIN_PASSWORD = 'admin123' // Ganti dengan password yang lebih aman

  const handlePasswordSubmit = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setIsPasswordCorrect(true)
      setPasswordInput('')
    } else {
      alert('Password salah!')
      setPasswordInput('')
    }
  }

  if (!isAdminOpen) return null

  if (!isPasswordCorrect) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-4">🔐 Admin Panel</h2>
          <p className="text-gray-600 mb-6">Masukkan password untuk akses admin panel</p>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
            placeholder="Masukkan password"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          />
          <div className="flex gap-3">
            <button
              onClick={() => setIsAdminOpen(false)}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 smooth-transition"
            >
              Batal
            </button>
            <button
              onClick={handlePasswordSubmit}
              className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 smooth-transition"
            >
              Masuk
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-4"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between rounded-t-2xl">
          <h1 className="text-xl sm:text-2xl font-bold text-white">⚙️ Admin Panel</h1>
          <button
            onClick={() => {
              setIsAdminOpen(false)
              setIsPasswordCorrect(false)
            }}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 px-4 sm:px-8 overflow-x-auto">
          <div className="flex gap-2 sm:gap-4 py-4">
            {[
              { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
              { id: 'hero', label: '🎨 Hero', icon: '🎨' },
              { id: 'services', label: '⚙️ Services', icon: '⚙️' },
              { id: 'marketplace', label: '🛒 Marketplace', icon: '🛒' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setAdminTab(tab.id)}
                className={`px-3 sm:px-4 py-2 font-semibold text-sm sm:text-base rounded-lg transition whitespace-nowrap ${
                  adminTab === tab.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 max-h-96 sm:max-h-[600px] overflow-y-auto">
          {adminTab === 'dashboard' && <AdminDashboard />}
          {adminTab === 'hero' && <HeroEditor />}
          {adminTab === 'services' && <ServicesEditor />}
          {adminTab === 'marketplace' && <MarketplaceEditor />}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AdminPanel
