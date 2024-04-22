import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/homepage/Navbar'
import Vismakara from './component/homepage/Vismakara'
import Krti from './component/homepage/Krti'
import Footer from './component/homepage/Footer'
import Hero from './component/homepage/Hero'
import Profile from './component/homepage/Profile'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Vismakara />
            <Krti />
            <Hero />
            <Footer />
          </>
        } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
