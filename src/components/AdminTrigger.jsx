import { useAdmin } from '../hooks/useAdmin'
import { motion } from 'framer-motion'

const AdminTrigger = () => {
  const { isAdminOpen, setIsAdminOpen } = useAdmin()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsAdminOpen(!isAdminOpen)}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-teal-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      title="Admin Panel"
    >
      <span className="text-2xl sm:text-3xl">⚙️</span>
    </motion.button>
  )
}

export default AdminTrigger
