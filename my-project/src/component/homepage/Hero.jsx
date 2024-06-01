import React from 'react';
import fighter from '../../assets/fighter.jpg';

const Hero = () => {
  return (
    <div className='py-[50px] px-[20px] md:px-[50px] flex flex-col md:flex-row gap-10 bg-gradient-to-r from-yellow-300 to-yellow-600 w-full rounded-full mx-auto' style={{ maxWidth: '95%' }}>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:w-[50%] gap-[20px]">
        <div className='text-center md:text-left w-full'>
          <h1 className='text-[40px] font-bold text-center'>OUR HERO</h1>
          <p className='text-center md:text-justify text-[16px] rounded-xl p-4 bg-yellow-200 bg-opacity-80 mt-4'>
          Explore the future of aerial technology with the ADRG VTOL Team from the University of Indonesia. Our state-of-the-art drone, equipped with the powerful Jetson Xavier, delivers unmatched performance and precision. Revolutionizing the skies with advanced AI capabilities, robust design, and unparalleled efficiency, this drone is set to redefine aerial solutions. Join us in pioneering innovation and excellence in vertical takeoff and landing technology.
          </p>
        </div>
        <img src={fighter} className='h-[200px] md:hidden rounded-full transition-transform duration-300 ease-in-out hover:scale-110' />
      </div>
      <img src={fighter} className='h-[350px] md:flex hidden mx-auto my-auto rounded-full transition-transform duration-300 ease-in-out hover:scale-110' />
    </div>
  );
}

export default Hero;


