import React from 'react';
import Navbar from './Navbar';
import Vismakara from './Vismakara';
import Krti from './Krti';
import Footer from './Footer';
import Hero from './Hero';

const HomePage = () => {
  return (
    <div className="flex-grow bg-gray-700" style={{ paddingBottom: '5px' }}>
        <Navbar/>
        <div className="my-4 border-4 border-yellow-500 p-3">
            <Vismakara/>
        </div>
        <div className="my-4 border-4 border-yellow-500 p-3">
            <Krti/>
        </div>
        <div className="my-4 border-4 border-yellow-500 p-3">
            <Hero/>
        </div>
            <Footer/>
    </div> 
  )
}

export default HomePage;
