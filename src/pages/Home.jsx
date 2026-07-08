import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonial />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Home