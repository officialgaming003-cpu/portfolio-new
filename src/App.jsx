import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminPanel from './components/AdminPanel'
import AdminTrigger from './components/AdminTrigger'
import Home from './pages/Home'

function App() {
  return (
    <AdminProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <AdminTrigger />
        <AdminPanel />
        <Footer />
      </Router>
    </AdminProvider>
  )
}

export default App
