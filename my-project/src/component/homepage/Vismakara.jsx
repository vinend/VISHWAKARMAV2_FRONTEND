import React from 'react'
import auav from '../../assets/image.png'
import vishmakara from '../../assets/vtol.png'

const Vismakara = () => {
  return (
    <div className='py-[50px] px-[50px] flex flex-row gap-10'>
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center md:w-[50%]">
            <h1 className='text-[50px] font-bold md:text-start'>Vismakara</h1>
            <img src={vishmakara} className='h-[200px] md:hidden'/>
            <p className='text-center md:text-start text-[20px]'>
                Vishwakarma is a team from the University of Indonesia specializing in VTOL (Vertical Take-Off and Landing) technology. They are dedicated to advancing and innovating in the field of aerial vehicles. The team consists of passionate and motivated individuals who strive to push the boundaries of aviation engineering. We actively participate in various competitions and projects, showcasing their expertise and technical skills. Our commitment to excellence and continuous learning makes them a valuable asset in the field of aviation technology.
            </p>
        </div>
        <img src={vishmakara} className='h-[200px] md:flex hidden mx-auto my-auto'/>
    </div>
  )
}

export default Vismakara