
import './App.css'
import Footer from './component/Footer'
import Gallery from './component/Gallery'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Stairs from './component/Stairs'
import UnderHero from './component/UnderHero'
import YouTube from './component/YouTube'

function App() {


  return (
    <div className=' w-full relative text-gray-100'>
      <Navbar />
      <Hero />
      <UnderHero />
      <Stairs />
      <YouTube />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
