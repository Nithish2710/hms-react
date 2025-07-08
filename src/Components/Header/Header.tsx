"use client";
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/harirams logo updated.png';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (

// Header Component - white background with logo and navigation links
<header className="sticky top-0 z-[1000] backdrop-blur-md shadow-md py-1" style={{ backgroundColor: '#ffffff' }}>
  <div className="max-w-[1200px] h-[100px] mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo Section */}
    <div className="flex items-center gap-2 text-3xl font-bold text-neutral-900">
      {/* <div className="w-8 h-8 flex items-center justify-center text-base rounded-lg bg-neutral-900 text-white">
        🏨
      </div> */}
      {/* <span className="tracking-tight" style={{color:'#06923E'}}>Hari Rams Hemhalayaah</span> */}
    <img src={logo} alt="HMS Logo" className="w-30  h-auto flex items-center justify-center" />
    </div>

    {/* Navigation Links */}
   <nav className="hidden md:flex gap-8 text-zinc-700 text-sm">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `transition-colors duration-300 ${
        isActive ? 'text-green-600 font-semibold' : 'text-black'
      }`
    }
  >
    HOME
  </NavLink>

  <NavLink
    to="/aboutus"
    className={({ isActive }) =>
      `transition-colors duration-300 ${
        isActive ? 'text-green-600 font-semibold' : 'text-black'
      }`
    }
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to top on click
  >
    ABOUT
  </NavLink>

  <NavLink
    to="/rooms"
    className={({ isActive }) =>
      `transition-colors duration-300 ${
        isActive ? 'text-green-600 font-semibold' : 'text-black'
      }`
    }
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to top on click
  >
    ROOMS
  </NavLink>

  <NavLink
    to="/food"
    className={({ isActive }) =>
      `transition-colors duration-300 ${
        isActive ? 'text-green-600 font-semibold' : 'text-black'
      }`
    }
  >
    FOOD & BEVERAGES
  </NavLink>

  <NavLink
    to="/gallery"
    className={({ isActive }) =>
      `transition-colors duration-300 ${
        isActive ? 'text-green-600 font-semibold' : 'text-black'
      }`
    }
  >
    GALLERY
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `transition-colors duration-300 ${
        isActive ? 'text-green-600 font-semibold' : 'text-black'
      }`
    }
  >
    CONTACT US
  </NavLink>
</nav>


    {/* Buttons */}
    <div className="flex items-center gap-4">
  <div className="text-black w-[30px]">
    <FaSearch />
  </div>
  <button
    className="bg-[#ffffff] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#79d888] transition duration-300 shadow-md cursor-pointer hover:shadow-xl"
  style={{ backgroundColor: '#57af47', color: 'white' }}> 
  {/* #06923E - dark green  */}
    Book Now
  </button>
</div>

  </div>
</header>
  );
}
