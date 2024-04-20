import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/homepage/Navbar'
import Vismakara from './component/homepage/Vismakara'
import Krti from './component/homepage/Krti'
import Footer from './component/homepage/Footer'
import Hero from './component/homepage/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Vismakara/>
      <Krti/>
      <Hero/>
      <Footer/>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </>
  )
}

export default App
