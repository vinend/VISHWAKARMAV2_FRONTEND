import React from 'react'
import logoKrti from '../../assets/logoKRTI.png'
import CounterContainer from './CounterContainer'

const Krti = () => {
  return (
    <div className='py-[50px] px-[50px] flex flex-row gap-10 bg-gradient-to-r from-yellow-600 to-yellow-300 w-full'>
        <img src={logoKrti} className='h-[300px] md:flex hidden mx-auto my-auto transition-transform duration-300 ease-in-out hover:scale-110'/>
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-[20px] md:w-[50%]">
            <h1 className='text-[50px] font-bold md:text-start'>KRTI</h1>
            <img src={logoKrti} className='h-[200px] md:hidden'/>
            <p className='text-center font-poppins md:text-justify text-[20px]'>
            Vishwakarma's goal this year, is to tackle the challenges of winning KRTI (Kontes Robot Terbang Indonesia) 2024 and also future competitions national or international. Through our hardworking members and dedication to developing unmanned aerial vehicle technology, we strive to take champion title this year. With the gist of the competition coming up, we are working to achieve the best outcome possible and innovate with the technology we have.
            </p>
            <CounterContainer/>
        </div>
    </div>
  )
}

export default Krti