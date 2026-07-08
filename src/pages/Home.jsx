import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Workflow from '../components/Workflow'
import Services from '../components/Services'
import Marketplace from '../components/Marketplace'
import Contact from '../components/Contact'
import AdminTrigger from '../components/AdminTrigger'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Workflow />
      <Services />
      <Marketplace />
      <Contact />
      <AdminTrigger />
    </div>
  )
}

export default Home
