import React from 'react';
import fighter from '../../assets/fighter.jpg';

const Hero = () => {
  return (
    <div className='py-[50px] px-[20px] md:px-[50px] flex flex-col md:flex-row gap-10 bg-gradient-to-r from-yellow-300 to-yellow-600 w-full rounded-full mx-auto' style={{ maxWidth: '95%' }}>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:w-[50%] gap-[20px]">
        <div className='text-center md:text-left w-full'>
          <h1 className='text-[40px] font-bold text-center'>OUR HERO</h1>
          <p className='text-center md:text-justify text-[16px] rounded-xl p-4 bg-yellow-200 bg-opacity-80 mt-4'>
            Vishwakarma is a team from the University of Indonesia specializing in VTOL (Vertical Take-Off and Landing) technology. They are dedicated to advancing and innovating in the field of aerial vehicles. The team consists of passionate and motivated individuals who strive to push the boundaries of aviation engineering. We actively participate in various competitions and projects, showcasing their expertise and technical skills. Our commitment to excellence and continuous learning makes them a valuable asset in the field of aviation technology.
          </p>
        </div>
        <img src={fighter} className='h-[200px] md:hidden rounded-full transition-transform duration-300 ease-in-out hover:scale-110' />
      </div>
      <img src={fighter} className='h-[350px] md:flex hidden mx-auto my-auto rounded-full transition-transform duration-300 ease-in-out hover:scale-110' />
    </div>
  );
}

export default Hero;


