import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-200 text-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        <h1 className="text-2xl font-bold tracking-wide">HARSHIKA</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-700 transition-colors">About Me</a>
          <a href="#education" className="hover:text-blue-700 transition-colors">Education</a>
          <a href="#skills" className="hover:text-blue-700 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-700 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-200 px-5 py-4 space-y-3">
          <a href="#about" className="block hover:text-blue-700">About Me</a>
          <a href="#education" className="block hover:text-blue-700">Education</a>
          <a href="#skills" className="block hover:text-blue-700">Skills</a>
          <a href="#projects" className="block hover:text-blue-700">Projects</a>
          <a href="#contact" className="block hover:text-blue-700">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
