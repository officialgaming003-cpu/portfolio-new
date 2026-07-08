import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Workflow from '../components/Workflow'
import Services from '../components/Services'
import Marketplace from '../components/Marketplace'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Stats />
      <About />
      <Workflow />
      <Services />
      <Marketplace />
      <Contact />
    </div>
  )
}

export default Home