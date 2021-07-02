import React from 'react'
import { images } from '../../constants/imageLinks'
import { Link } from 'react-router-dom'
import './header.css'

const Header: React.FC = () => {

    return (
        <header className = 'flex justify-between items-center h-20 md:h-24 w-screen bg-purple-700 px-12 z-500'>
            <div className = 'w-1/2 md:w-1/5'>
                <Link to = '/'><img src={images.header.LOGO} alt="" className = 'w-4/5 md:w-2/3' /></Link>
            </div>

            <input type="checkbox" id="menu-btn" className='hidden menu-btn' />
            <label htmlFor="menu-btn" className = 'relative p6-6 px-0 cursor-pointer z-500 block md:hidden block menu-icon'>
                <span className = 'block relative bg-white h-px w-4 rounded menu-icon__line'></span>
            </label>

            <ul
                className = 'flex flex-col md:flex-row w-screen absolute md:relative top-0 left-0 h-screen md:h-auto justify-start items-start md:items-center nav__links opacity-0 transition duration-500 bg-white md:opacity-100 md:bg-transparent'
                // list-none flex-col justify-evenly transform absolute transition md:relative top-0 left-0 opacity-0 md:opacity-100 md:flex w-screen md:w-full items-center py-40 md:py-0 md:h-auto h-screen bg-red nav__links
            >
                <div className = 'block md:hidden bg-white w-full py-6 px-8 flex'>
                    <div className = 'w-1/3 h-full'><img src={images.header.LOGO_BLACK} alt="" /></div>
                </div>
                <li className = 'm-1 mr-8 py-4 px-2 text-black md:text-white flex justify-center ml-12 md:ml-0 font-bold font-display text-xl md:text-base'>Product</li>
                <li className = 'm-1 mr-8 py-4 px-2 text-black md:text-white flex justify-center ml-12 md:ml-0 font-bold font-display text-xl md:text-base'>Enterprise</li>
                <li className = 'm-1 mr-8 py-4 px-2 text-black md:text-white flex justify-center ml-12 md:ml-0 font-bold font-display text-xl md:text-base'>Resource</li>
                <li className = 'm-1 mr-8 py-4 px-2 text-black md:text-white flex justify-center ml-12 md:ml-0 font-bold font-display text-xl md:text-base'>Pricing</li>
                <div className = 'flex absolute md:relative bottom-28 md:bottom-0 md:right-0 w-full md:w-full md:w-auto flex justify-center md:justify-end'>
                    <button className = 'w-4/5 md:w-1/3 bg-purple-700 md:bg-white py-4 text-white md:text-purple-700 font-display rounded font-bold md:px-2'>CREATE A NEW WORKSPACE</button>
                </div>
            </ul>
        </header>
    )
}

export default Header