import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import MostLoved from './Components/MostLoved'
import Banner from './Components/banner'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <MostLoved/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
