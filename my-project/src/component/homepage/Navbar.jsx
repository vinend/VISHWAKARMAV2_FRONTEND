import React from 'react';
import { Link } from 'react-router-dom';
import auav from '../../assets/image.png';
import vishmakara from '../../assets/vtol.png';
import hiddenMenu from '../../assets/1366x768-269dd16fa1f5ff51accd09e7e1602267.png';

const Navbar = () => {
    return (
        <>
            <nav className='flex items-center justify-between px-2.5 py-2.5 bg-zinc-800 sticky top-0 z-30 transition-all duration-300 ease-in-out hover:border-yellow-500 border border-transparent'>
                <img src={auav} className='h-12'/>
                <div className="hidden md:flex gap-[75px]">
                    <Link to="/" className='text-white py-2.5 glow-on-hover'>Home</Link>
                    <Link to="/profile" className='text-white py-2.5 glow-on-hover'>Profile</Link>
                    <a className='text-white py-2.5 glow-on-hover'>Achievement</a>
                    <a className='text-white py-2.5 glow-on-hover'>Contact</a>
                </div>
                <img src={vishmakara} className='h-12'/>
                <img src={hiddenMenu} className='h-12 w-12 md:hidden cursor-pointer'/>
            </nav>
            <style>
                {`
                .glow-on-hover:hover {
                    text-shadow:
                        0 0 10px #fff, /* white glow */
                        0 0 20px #f1c40f; /* yellow glow */
                }
                `}
            </style>
        </>
    );
}

export default Navbar;


