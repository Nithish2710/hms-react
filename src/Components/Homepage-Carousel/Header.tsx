"use client";
import { FaSearch } from "react-icons/fa";

export function Header() {
  return (
<header className="sticky top-0 z-[1000] bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200">
  <div className="max-w-[1200px] h-[60px] mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo Section */}
    <div className="flex items-center gap-2 text-2xl font-bold text-neutral-900">
      <div className="w-8 h-8 flex items-center justify-center text-base rounded-lg bg-neutral-900 text-white">
        🏨
      </div>
      <span className="tracking-tight">QuickStay</span>
    </div>

    {/* Navigation Links */}
    <nav className="hidden md:flex gap-8 text-zinc-700 font-medium">
      <a className="text-black" href="#">Home</a>
      <a className="text-black" href="#">Hotels</a>
      <a className="text-black" href="#">Experience</a>
      <a className="text-black" href="#">About</a>
    </nav>

    {/* Buttons */}
    <div className="flex items-center gap-4">
        <div className="text-black w-[30px]"> <FaSearch /> </div>              
      <div className="px-5 py-2 rounded-3xl font-medium bg-neutral-800 text-white">
        Login
      </div>
    </div>
  </div>
</header>

  );
}
