import React from 'react';
import { Link } from 'react-router-dom';
import auav from '../../assets/image.png';
import vishmakara from '../../assets/vtol.png';
import hiddenMenu from '../../assets/1366x768-269dd16fa1f5ff51accd09e7e1602267.png';

const Navbar = () => {
    return (
        <nav className='px-[10px] py-[10px] flex flex-row bg-zinc-800 z-[30] sticky top-0 gap-[20px]'>
            <img src={auav} className='h-[50px]'/>
            <img src={vishmakara} className='h-[50px] md:hidden'/>
            <div className="w-full flex md:justify-start md:flex-row md:gap-[20px] justify-end">
                <img src={hiddenMenu} className='h-[50px] w-[50px] md:hidden cursor-pointer'/>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/">Home</a>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/profile">Profile</a>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/achievment">Achievement</a>
                <a className='text-white py-[10px] hidden font-poppins cursor-pointer md:block' href="/Contact">Contact</a>
            </div>
            <img src={vishmakara} className='h-[50px] hidden md:block'/>
        
            <div className=''></div>
        </nav>
    )
}

export default Navbar;


