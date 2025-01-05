import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import React, { useState } from 'react'

const Navbar = () => {
    const [MenuBar, setMenuBar] = useState(false)
    const [Menu, setMenu] = useState(false)
    const HandleMenu = (e) => {
        setMenu(!Menu)
    }

    return (
        <nav className='bg-[#000000] bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-lg shadow-gray-950 text-white fixed z-50 top-0 w-full h-16 px-12 flex justify-between items-center'>
            <div className='logo font-bold text-xl flex items-center justify-center gap-0'>
                <span className='text-[#63e]'>&lt;</span>
                PassKey
                <span className='text-[#63e]'>&nbsp;/&gt;</span>
            </div>
            <ul className='flex items-center justify-center no-underline list-none text-md sm:flex'>
                <li className='hidden gap-6 items-center sm:flex'>
                    <a href="/" className='nav-menu'>Home</a>
                    <a href="/" className='nav-menu'>Contact</a>
                    <a href="/" className='nav-menu'>About</a>
                </li>
                <li className="text-[#63e] p-0 m-0">
                    <IoMenu onClick={(e) => {HandleMenu(e), setMenuBar(!MenuBar)}} className={`size-6 cursor-pointer sm:hidden visible ${Menu ? 'hidden' : ''}`} />
                    <IoIosClose onClick={(e) => {setMenuBar(!MenuBar), setTimeout((e) => HandleMenu(e), 500)}} className={`size-10 p-0 m-0 relative left-2 cursor-pointer sm:hidden visible ${!Menu ? 'hidden' : ''}`} />
                </li>
                {Menu && <li className={`flex sm:hidden flex-row gap-6 items-center justify-center px-6 text-md absolute top-24 right-10 text-center bg-[#000] bg-opacity-60 rounded-full backdrop-filter backdrop-blur-sm shadow-lg shadow-gray-950 m-auto opacity-0 ${MenuBar ? 'menu-bar-in' : 'menu-bar-out'}`}>
                    <a href="/" className='nav-menu'>Home</a>
                    <a href="/" className='nav-menu'>Contact</a>
                    <a href="/" className='nav-menu'>About</a>
                </li>}
            </ul>
        </nav>
    )
}

export default Navbar
