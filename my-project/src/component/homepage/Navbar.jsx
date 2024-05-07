import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auav from '../../assets/image.png';
import vishmakara from '../../assets/vtol.png';
import hiddenMenu from '../../assets/1366x768-269dd16fa1f5ff51accd09e7e1602267.png';
import close from '../../assets/close.svg';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='px-[10px] py-[10px] flex flex-row bg-zinc-800 z-[30] sticky top-0 gap-[20px]'>
            <img src={auav} className='h-[50px]'/>
            <img src={vishmakara} className='h-[50px] md:hidden'/>
            <div className="w-full flex md:justify-start md:flex-row md:gap-[20px] justify-end">
                <div className='flex items-center'>
                    <img src={toggle ? close : hiddenMenu} onClick={() => setToggle((prev)=>!prev)} className={`${toggle ? 'h-[25px] w-[25px]' : 'h-[35px] w-[35px]'} md:hidden cursor-pointer`}/>
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-zinc-800 rounded-xl sidebar absolute top-20 right-0 mx-2 min-w-[140px] flex-col gap-[5px] opacity-[100%]`}>
                        <a className='text-white font-poppins cursor-pointer ' href="/home">Home</a>
                        <a className='text-white font-poppins cursor-pointer ' href="/profile">Profile</a>
                        <a className='text-white font-poppins cursor-pointer ' href="/achievment">Achievement</a>
                        <a className='text-white font-poppins cursor-pointer ' href="/Contact">Contact</a>
                    </div>
                </div>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/home">Home</a>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/profile">Profile</a>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/achievment">Achievement</a>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/Contact">Contact</a>
            </div>
            <img src={vishmakara} className='h-[50px] hidden md:block'/>
        
        </nav>
    )
}

export default Navbar;


