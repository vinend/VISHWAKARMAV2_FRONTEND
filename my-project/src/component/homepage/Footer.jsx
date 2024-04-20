import React from 'react'
import location from '../../assets/location.svg'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className=' px-[30px] flex md:flex-row flex-col justify-center md:justify-start md:items-normal bg-zinc-800 text-white py-[20px] md:gap-[20px]'>
        <div className='flex md:justify-start justify-center md:items-start items-center w-full flex-col md:w-[33%] gap-[5px]'>
            <p className='text-[20px] font-bold'>
                AUAV UNIVERSITAS INDONESIA
            </p>
            <div className="bg-yellow-400 md:h-[1px] h-[3px] w-full text-[0.5px]"></div>
            <p className='text-[10px]'>
                Autonomous Unmanned Aerial Vehicle Universitas Indonesia (AUAV UI) @auav_ui merupakan salah satu tim lomba dibawah Tim Robotik Universitas Indonesia (TRUI) yang bergerak pada bidang robot terbang.
            </p>
            <div className="flex flex-row gap-[5px] cursor-pointer">
                <img src={location}/>
                <a className='text-yellow-400 text-[10px]'>Universitas Indonesia, Depok</a>
            </div>

        </div>
        <div className='flex md:justify-start  md:items-start items-center flex-col md:w-[33%] w-full gap-[5px]'>
            <p className='text-[20px] font-bold'>
                Our Term
            </p>
            <div className="bg-yellow-400 md:h-[1px] h-[3px] w-full text-[0.5px]"></div>

        </div>
        <div className='flex md:justify-start justify-center md:items-start items-center flex-col md:w-[33%] w-full gap-[10px]'>
            <p className='text-[20px] font-bold '>
                Contact Us
            </p>
            <div className="bg-yellow-400 md:h-[1px] h-[3px] w-full text-[0.5px]"></div>
            <form className='w-full flex flex-col'>
                <input className='w-full mb-[10px] rounded-sm text-black' placeholder=' Saran dan Masukkan untuk kami'/>
                <div className="flex md:justify-end justify-center">
                    <button className='bg-white text-zinc-800 px-[10px] hover:outline hover:outline-yellow-400 hover:bg-zinc-800 hover:text-white rounded-sm jut'>SUBMIT</button>
                </div>
            </form>
            <div className="flex flex-row grid-cols-3 gap-[10px]">
                <a href="">
                    <img src={linkedin} className='h-[20px]'/>
                </a>
                <a href="">
                    <img src={facebook} className='h-[20px]'/>
                </a>
                <a href="">
                    <img src={twitter} className='h-[20px]'/>
                </a>
                <a href="">
                    <img src={instagram} className='h-[20px]'/>
                </a>
            </div>
        </div>

    </footer>
  )
}

export default Footer