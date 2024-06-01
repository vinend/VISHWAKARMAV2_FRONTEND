import React from 'react';
import logoKrti from '../../assets/logoKRTI.png';
import CounterContainer from './CounterContainer';

const Krti = () => {
  return (
    <div className='py-[50px] px-[20px] md:px-[50px] flex flex-col md:flex-row gap-10 bg-gradient-to-r from-yellow-600 to-yellow-300 w-full rounded-full mx-auto' style={{ maxWidth: '95%' }}>
      <img src={logoKrti} className='h-[300px] md:flex hidden mx-auto my-auto rounded-full transition-transform duration-300 ease-in-out hover:scale-110' />
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-[20px] md:w-[50%]">
        <div className='text-center md:text-left w-full'>
          <h1 className='text-[40px] font-bold text-center'>KRTI</h1>
          <p className='text-center font-poppins md:text-justify text-[16px] rounded-xl p-4 bg-yellow-200 bg-opacity-80 mt-4'>
            Vishwakarma's goal this year is to tackle the challenges of winning KRTI (Kontes Robot Terbang Indonesia) 2024 and also future competitions national or international. Through our hardworking members and dedication to developing unmanned aerial vehicle technology, we strive to take champion title this year. With the gist of the competition coming up, we are working to achieve the best outcome possible and innovate with the technology we have.
          </p>
        </div>
        <CounterContainer />
      </div>
    </div>
  );
}

export default Krti;

