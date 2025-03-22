'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-50 top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-cyan-400 font-bold text-xl">Nova<span className="text-purple-400">Tech</span></Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Home</Link>
              <Link href="/#features" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Features</Link>
              <Link href="/#pricing" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Pricing</Link>
              <Link href="/security" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Security</Link>
              <Link href="/contact" className="bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-600 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
            <Link href="/" onClick={handleMobileMenuClick} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800">Home</Link>
            <Link href="/#features" onClick={handleMobileMenuClick} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800">Features</Link>
            <Link href="/#pricing" onClick={handleMobileMenuClick} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800">Pricing</Link>
            <Link href="/security" onClick={handleMobileMenuClick} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-gray-800">Security</Link>
            <Link href="/contact" onClick={handleMobileMenuClick} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 