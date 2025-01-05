import React from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 left-0 z-50 bg-white text-black flex justify-between items-center h-8 min-w-full py-6 px-10 shadow-md">
            <div className="left flex gap-2">
                <ul className="flex gap-2 items-center">
                    <li className='text-center font-semibold text-2xl leading-none'><a href="/" className='flex gap-0.5 items-center'><span className='text-slate-700'>t</span><span className='text-indigo-600 font-bold text-3xl'>4</span><span className='text-slate-700'>Todo</span></a></li>
                </ul>
            </div>
            <div className="right hidden md:block">
                <ul className="flex items-center">
                    <li className='hover:bg-slate-200 px-4 py-3 rounded-sm'><a href="https://dynamic-portfolios.vercel.app/ateeb/details" target='blank'>About Us</a></li>
                    <li className='hover:bg-slate-200 px-4 py-3 rounded-sm'><a href="https://www.figma.com/design/gHH1OYGYQetR0dum9GE2vq/Twinky">Twinky</a></li>
                    <li className='hover:bg-slate-200 px-4 py-3 rounded-sm'><a href="https://dynamic-portfolios.vercel.app/ateeb" target='blank'>Portfolio</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar