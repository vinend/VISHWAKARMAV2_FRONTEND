import React, { useState, useEffect } from 'react';
import bgMono from '../../assets/JOR093763.jpg';
import bgMono2 from '../../assets/JOR093764.jpg';
import Drone from '../../assets/Drone.png';

const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(window.innerWidth >= 768 ? bgMono : bgMono2);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(window.innerWidth >= 768 ? bgMono : bgMono2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='h-screen w-screen md:px-[40px] bg-slate-500 text-yellow-500 flex-row bg-no-repeat bg-cover flex' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex md:items-start items-center h-screen justify-center flex-col w-full">
        <p className='text-[100px] font-poppins font-bold md:block hidden'>VISHMAKARMA</p>
        <p className='text-[90px] font-poppins font-bold md:hidden block'>VISHMA</p>
        <p className='text-[90px] font-poppins font-bold md:hidden block'>KARMA</p>
        <div className='bg-yellow-500 text-yellow-100 p-4 rounded-lg'>
          <p className='text-[20px] font-poppins font-bold'>
            The Vishwakarma Aerial Dexterity Research Group (ADRG) founded in 2013 has a strong record in various competitions, including the Brawijaya Copter Competition, the Parahyangan Robotic Competition, and the Annual Indonesian Flying Robot Contest, organized by the Indonesian Ministry of Research and Higher Education
          </p>
        </div>
        <div className='flex justify-center items-center w-full'>
          <a href="/home" className='my-[70px] px-[20px] py-[5px] outline outline-2 rounded-2xl cursor-pointer font-bold bg-yellow-500 text-yellow-100 hover:bg-black hover:text-yellow-500'>
            Read About Us {'>>>'}
          </a>
        </div>
      </div>
      <div className="items-center justify-center w-[100%] md:flex hidden">
        <div className="w-[400px] h-[400px] z-5 bg-yellow-500 rounded-xl flex justify-center items-center">
          <img src={Drone} className='z-10' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

