import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <AdminProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AdminProvider>
  )
}

export default App
