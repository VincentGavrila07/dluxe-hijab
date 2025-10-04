
import './App.css'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import AboutSection from './section/About'
import WaFloating from './section/WaFloating'
import Product from './section/Product'
import Portfolio from './section/Portofolio'
import Achievement from './section/Achievment'
import Clients from './section/Clients'

import Footer from './section/Kontak'
function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Product/>
      <Portfolio/>
      <Achievement/>
      <Clients/>

      <Footer/>
      <WaFloating/>
    </>
  )
}

export default App
