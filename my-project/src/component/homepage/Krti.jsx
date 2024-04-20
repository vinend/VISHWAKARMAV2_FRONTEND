import React from 'react'
import logoKrti from '../../assets/logoKRTI.png'

const Krti = () => {
  return (
    <div className='py-[50px] px-[50px] flex flex-row gap-10'>
        <img src={logoKrti} className='h-[300px] md:flex hidden mx-auto my-auto'/>
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center md:w-[50%]">
            <h1 className='text-[50px] font-bold md:text-start'>KRTI</h1>
            <img src={logoKrti} className='h-[200px] md:hidden'/>
            <p className='text-center md:text-start text-[20px]'>
            Vishwakarma's goal this year, is to tackle the challenges of winning KRTI (Kontes Robot Terbang Indonesia) 2024 and also future competitions national or international. Through our hardworking members and dedication to developing unmanned aerial vehicle technology, we strive to take champion title this year. With the gist of the competition coming up, we are working to achieve the best outcome possible and innovate with the technology we have.
            </p>
        </div>
    </div>
  )
}

export default Krti