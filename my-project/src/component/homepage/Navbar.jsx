    import React from 'react'
    import auav from '../../assets/image.png'
    import vishmakara from '../../assets/vtol.png'
    import hiddenMenu from '../../assets/1366x768-269dd16fa1f5ff51accd09e7e1602267.png'

    const Navbar = () => {
    return (
        <nav className='px-[10px] py-[10px] flex flex-row bg-zinc-800 z-[10px]'>
            <img src={auav} className='h-[50px]'/>
            <img src={vishmakara} className='h-[50px]'/>
            <div className="w-full flex md:justify-center md:flex-row md:gap-[20px] justify-end">
                <img src={hiddenMenu} className='h-[50px] w-[50px] md:hidden cursor-pointer'/>
                <a className='text-white py-[10px] hidden cursor-pointer md:block'>Home</a>
                <a className='text-white py-[10px] hidden cursor-pointer md:block'>Profile</a>
                <a className='text-white py-[10px] hidden cursor-pointer md:block'>Achievement</a>
                <a className='text-white py-[10px] hidden cursor-pointer md:block'>Contact</a>
            </div>
        </nav>
    )
    }

    export default Navbar