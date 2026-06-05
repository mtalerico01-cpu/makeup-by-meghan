import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl font-bold text-primary">Makeup by Meghan</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 font-medium hover:text-secondary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 font-medium hover:text-secondary transition-colors">
              About
            </Link>
            <a href="/#gallery" className="text-gray-700 font-medium hover:text-secondary transition-colors">
              Gallery
            </a>
            <a href="/#testimonials" className="text-gray-700 font-medium hover:text-secondary transition-colors">
              Reviews
            </a>
            <Link 
              to="/booking" 
              className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-md"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <Link to="/" className="block px-2 py-2 text-gray-700 hover:text-secondary">
              Home
            </Link>
            <Link to="/about" className="block px-2 py-2 text-gray-700 hover:text-secondary">
              About
            </Link>
            <a href="/#gallery" className="block px-2 py-2 text-gray-700 hover:text-secondary">
              Gallery
            </a>
            <a href="/#testimonials" className="block px-2 py-2 text-gray-700 hover:text-secondary">
              Reviews
            </a>
            <Link 
              to="/booking"
              className="block mt-4 bg-secondary text-white px-4 py-2 rounded-full font-semibold text-center"
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
