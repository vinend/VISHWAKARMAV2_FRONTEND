import React from 'react'
import fighter from '../../assets/fighter.jpg'

const Hero = () => {
  return (
    <div className='py-[50px] px-[50px] flex flex-row gap-10 bg-gradient-to-r from-yellow-300 to-yellow-600 w-full'>
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center md:w-[50%] gap-[10px]">
            <h1 className='text-[50px] font-bold md:text-start'>OUR HERO</h1>
            <img src={fighter} className='h-[200px] md:hidden rounded transition-transform duration-300 ease-in-out hover:scale-110'/>
            <p className='text-center md:text-justify text-[20px]'>
                Vishwakarma is a team from the University of Indonesia specializing in VTOL (Vertical Take-Off and Landing) technology. They are dedicated to advancing and innovating in the field of aerial vehicles. The team consists of passionate and motivated individuals who strive to push the boundaries of aviation engineering. We actively participate in various competitions and projects, showcasing their expertise and technical skills. Our commitment to excellence and continuous learning makes them a valuable asset in the field of aviation technology.
            </p>
        </div>
        <img src={fighter} className='h-[350px] md:flex hidden mx-auto my-auto rounded transition-transform duration-300 ease-in-out hover:scale-110'/>
    </div>
  )
}

export default Hero