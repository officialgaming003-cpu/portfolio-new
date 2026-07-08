import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'zendev2024'

  const handleLogin = async () => {
    setError('')
    setIsLoading(true)

    // Simulasi delay
    await new Promise(resolve => setTimeout(resolve, 500))

    if (passwordInput === ADMIN_PASSWORD) {
      // Simpan token di localStorage
      localStorage.setItem('admin-token', 'authenticated')
      navigate('/admin')
    } else {
      setError('Password salah! Silahkan coba lagi.')
      setPasswordInput('')
    }

    setIsLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleLogin()
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-purple-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl border-3 border-purple-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-teal-500 px-6 sm:px-8 py-8 sm:py-10 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-lg text-purple-600">
                Z
              </div>
              <span className="font-bold text-white text-lg">ZENDEV.ID</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">🔐 Admin Panel</h1>
            <p className="text-purple-100 text-sm">Secure Access Required</p>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Masukkan password admin"
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-3 bg-red-50 border-2 border-red-200 rounded-lg"
              >
                <p className="text-red-600 text-sm font-semibold">❌ {error}</p>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.history.back()}
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 smooth-transition disabled:opacity-50"
              >
                Kembali
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogin}
                disabled={isLoading || !passwordInput}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg smooth-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Loading...
                  </>
                ) : (
                  <>
                    <span>Masuk</span>
                    <span>→</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <p className="text-blue-700 text-xs sm:text-sm">
                <strong>💡 Tip:</strong> Gunakan password yang telah diberikan untuk akses ke admin panel.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Kembali ke <a href="/" className="text-purple-600 font-semibold hover:underline">homepage</a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminLogin
