import { useState } from 'react'
import './App.css'
import SplineRobot from './components/SplineRobot'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplineRobot />
      <Hero />
      <Nav />
      <Footer />
    </>
  )
}

export default App
