import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          <div>
            <h3 className="font-serif text-xl font-bold text-secondary mb-2">Makeup by Meghan</h3>
            <p className="text-gray-300">Professional wedding and events makeup services</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/booking" className="hover:text-secondary transition-colors">Book Now</Link></li>
              <li><a href="/#gallery" className="hover:text-secondary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-3">Contact</h4>
            <p className="text-gray-300 mb-2">
              <a href="mailto:meghantalerico@gmail.com" className="hover:text-secondary transition-colors">
                meghantalerico@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mb-2">
              <a href="tel:+17708655862" className="hover:text-secondary transition-colors">
                770 865 5862
              </a>
            </p>
            <p className="text-gray-300">Specializing in weddings & events</p>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Makeup by Meghan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
