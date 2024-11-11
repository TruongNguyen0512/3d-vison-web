import Navbar from '../components/navbar'
import Hero from '../components/hero'
import ServiceSection from '../components/service-section'
import Footer from '../components/footer'
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to 3D Vision</h1>
        <Hero />
        <ServiceSection />
        <Footer />
        {/* Add your homepage content here */}
      </main>
    </div>
  )
}

export default Homepage