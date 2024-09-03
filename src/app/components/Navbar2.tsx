"use client"

import React, { useState } from 'react'
import DropdownNav from './NavComponents/DropdownNav'
import { CiBullhorn, CiPlay1 } from 'react-icons/ci'
import { GrMapLocation } from 'react-icons/gr'
import { RiStarSmileLine } from 'react-icons/ri'
import Image from 'next/image'
import imax from '@/assets/imax.png'
import mtix from '@/assets/mtix.png'
import dobly from '@/assets/dolby.png'

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-10 flex flex-wrap justify-between items-center w-full bg-gray-200 text-sm py-3">
      <nav className="max-w-[85rem] mx-auto px-4 w-full flex items-center justify-between">
        {/* Left Side: Options */}
        <div className="hidden sm:flex items-center space-x-10">
          <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 focus:outline-none inline-flex items-center whitespace-nowrap" href="#">
            <span className='mr-1 inline-block'><CiPlay1/></span>Now Playing
          </a>
          <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 focus:outline-none inline-flex items-center whitespace-nowrap" href="#">
            <span className='mr-1 inline-block'><CiBullhorn/></span>Upcoming
          </a>
          <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 focus:outline-none inline-flex items-center whitespace-nowrap" href="#">
            <span className='mr-1 inline-block'><GrMapLocation/></span>Theaters
          </a>
          <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 focus:outline-none inline-flex items-center whitespace-nowrap" href="#">
            <span className='mr-1 inline-block'><RiStarSmileLine/></span>Promotions
          </a>
          <DropdownNav/>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button 
            type="button" 
            className="flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" x2="21" y1="6" y2="6"/>
              <line x1="3" x2="21" y1="12" y2="12"/>
              <line x1="3" x2="21" y1="18" y2="18"/>
            </svg>
            <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18"/>
              <path d="M6 6l12 12"/>
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col">
            <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 p-4 border-b border-gray-200" href="#">
              <span className='mr-1 inline-block'><CiPlay1/></span>Now Playing
            </a>
            <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 p-4 border-b border-gray-200" href="#">
              <span className='mr-1 inline-block'><CiBullhorn/></span>Upcoming
            </a>
            <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 p-4 border-b border-gray-200" href="#">
              <span className='mr-1 inline-block'><GrMapLocation/></span>Theaters
            </a>
            <a className="font-mono tracking-wider text-teal-800 hover:text-yellow-600 p-4 border-b border-gray-200" href="#">
              <span className='mr-1 inline-block'><RiStarSmileLine/></span>Promotions
            </a>
            <div className="p-4 border-t border-gray-200">
              <DropdownNav/>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="w-px h-8 bg-gray-600"></div>
        <div id="navbar-menu" className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:justify-end gap-10 justify-center mt-5 sm:mt-0">
          <Image src={imax} alt='imax' width={100} height={100}/>
          <Image src={dobly} alt='imax' width={100} height={100}/>
          <Image src={mtix} alt='imax' width={100} height={100}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar2
