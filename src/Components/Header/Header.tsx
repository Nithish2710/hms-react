"use client";
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/harirams_logo.png';

export function Header() {
  return (
  // // Header Component - green background with logo and navigation links
  // <header className="sticky top-0 z-[1000] backdrop-blur-md shadow-md py-1" style={{ backgroundColor: '#57af47' }}>
  //   <div className="max-w-[1200px] h-[100px] mx-auto px-6 py-4 flex justify-between items-center">
  //     {/* Logo Section */}
  //     <div className="flex items-center gap-2 text-2 font-bold text-neutral-900">
  //       {/* <div className="w-8 h-8 flex items-center justify-center text-base rounded-lg bg-neutral-900 text-white">
  //         🏨
  //       </div> */}
  //       {/* <span className="tracking-tight" style={{color:'#06923E'}}>Hari Rams Hemhalayaah</span> */}
  //     <img src={logo} alt="HMS Logo" className="w-30  h-auto flex items-center justify-center" />
  //     </div>

  //     {/* Navigation Links */}
  //     <nav className="hidden md:flex gap-8 text-zinc-700 text-xl">
  //       <a className="{({ isActive }) =>
  //   `transition-colors duration-300 ${
  //     isActive ? 'text-green-600 font-semibold' : 'text-black'
  //   }`
  // }"
  //  href="#" >Home</a>
  //       <a className="{({ isActive }) =>
  //   `transition-colors duration-300 ${
  //     isActive ? 'text-green-600 font-semibold' : 'text-black'
  //   }`
  // }" href="#">Hotels</a>
  //       <a className="{({ isActive }) =>
  //   `transition-colors duration-300 ${
  //     isActive ? 'text-green-600 font-semibold' : 'text-black'
  //   }`
  // }" href="#">Experience</a>
  //       <a className="{({ isActive }) =>
  //   `transition-colors duration-300 ${
  //     isActive ? 'text-green-600 font-semibold' : 'text-black'
  //   }`
  // }" href="#">About</a>
  //     </nav>

  //     {/* Buttons */}
  //     <div className="flex items-center gap-4">
  //   <div className="text-black w-[30px]">
  //     <FaSearch />
  //   </div>
  //   <button
  //     className="bg-[#ffffff] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#2c4129] transition duration-300 shadow-md"
  //   style={{ backgroundColor: '#ffffff', color: '#06923E' }}>
  //     Book Now
  //   </button>
  // </div>

  //   </div>
  // </header>

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
    <nav className="hidden md:flex gap-8 text-zinc-700 text-xl">
      <a className="{({ isActive }) =>
  `transition-colors duration-300 ${
    isActive ? 'text-green-600 font-semibold' : 'text-black'
  }`
}"
 href="/" >Home</a>
 <a className="{({ isActive }) =>
  `transition-colors duration-300 ${
    isActive ? 'text-green-600 font-semibold' : 'text-black'
  }`
}" href="/aboutus">About</a>
      <a className="{({ isActive }) =>
  `transition-colors duration-300 ${
    isActive ? 'text-green-600 font-semibold' : 'text-black'
  }`
}" href="#">Rooms & Tarrif</a>

      <a className="{({ isActive }) =>
  `transition-colors duration-300 ${
    isActive ? 'text-green-600 font-semibold' : 'text-black'
  }`
}" href="#">Food & Beverages</a>
      <a className="{({ isActive }) =>
  `transition-colors duration-300 ${
    isActive ? 'text-green-600 font-semibold' : 'text-black'
  }`
}" href="#">Gallery</a>
<a className="{({ isActive }) =>
  `transition-colors duration-300 ${
    isActive ? 'text-green-600 font-semibold' : 'text-black'
  }`
}" href="#">Contact us</a>

    </nav>

    {/* Buttons */}
    <div className="flex items-center gap-4">
  <div className="text-black w-[30px]">
    <FaSearch />
  </div>
  <button
    className="bg-[#ffffff] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#2c4129] transition duration-300 shadow-md"
  style={{ backgroundColor: '#ffffff', color: '#06923E' }}>
    Book Now
  </button>
</div>

  </div>
</header>
  );
}
9698203777