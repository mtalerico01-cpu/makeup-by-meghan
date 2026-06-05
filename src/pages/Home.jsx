import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
                  Your Wedding Day
                </p>
                <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold leading-tight mb-4">
                  Flawless Beauty,<br />Unforgettable Moment
                </h1>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                At Makeup by Meghan, we don't just apply makeup—we create an experience. We listen to your vision and craft looks that enhance your natural beauty and reflect your unique style for the most important moments of your life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/booking" className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
                  Book Your Appointment
                </Link>
                <a href="tel:+17708655862" className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold transition-colors no-underline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:'1.1em',height:'1.1em',flexShrink:0}}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=600&fit=crop" 
                alt="Bride with professional makeup" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About/Philosophy Section */}
      <section className="bg-accent py-16 md:py-24">
        <div className="max-width mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-8">
              Experience You Can Feel.<br />Beauty You Can See.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your wedding day deserves nothing but perfection. We specialize in listening to you and creating looks that mirror your unique style and story. Our expert team of makeup artists is dedicated to transforming your vision into reality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From glamorous modern aesthetics to timeless elegance, we understand the diverse tastes of today's brides and bridesmaids. We craft looks that don't just photograph beautifully—they last all night.
            </p>
          </div>
        </div>
      </section>

      {/* Services/What We Do */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold text-center mb-16">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💄</div>
              <h3 className="font-semibold text-xl text-primary mb-3">Bridal Makeup</h3>
              <p className="text-gray-600">Stunning, long-lasting makeup that makes you feel confident and beautiful on your special day.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👯</div>
              <h3 className="font-semibold text-xl text-primary mb-3">Bridesmaids</h3>
              <p className="text-gray-600">Coordinated makeup looks for your entire wedding party that photograph beautifully together.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-semibold text-xl text-primary mb-3">Special Events</h3>
              <p className="text-gray-600">Professional makeup for galas, proms, anniversaries, and any special celebration.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💅</div>
              <h3 className="font-semibold text-xl text-primary mb-3">Consultations</h3>
              <p className="text-gray-600">Expert advice on makeup styles, colors, and techniques tailored to your unique features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Before & After Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">
              Real Brides & Bridal Party
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Open-source bridal portraits and wedding-day moments featuring real brides and bridesmaids.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1481066717861-4775e000c88a' : i === 2 ? '1649305795256-a48bb558ce1d' : i === 3 ? '1679599441191-aa411b7ac27d' : '1633076748077-4ef9d2ab701c'}?q=80&w=600&h=700&fit=crop`}
                    alt={`Bridal moment ${i}`}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/booking" className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
              VIEW FULL PORTFOLIO →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Choose Us */}
      <section className="bg-accent py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold text-center mb-16">
            Why Choose Makeup by Meghan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl text-secondary mb-3">Professional Expertise</h3>
              <p className="text-gray-600">Years of experience in bridal and events makeup with an eye for detail.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl text-secondary mb-3">Premium Products</h3>
              <p className="text-gray-600">Top-quality, professional-grade makeup brands that last all day.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl text-secondary mb-3">Personalized Service</h3>
              <p className="text-gray-600">Custom looks tailored to your unique style, features, and preferences.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl text-secondary mb-3">On-Site Services</h3>
              <p className="text-gray-600">Available for weddings and events at your venue for your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Let's Create Your Look
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's make your vision come to life. Reach out to us for inquiries and bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors">
              BOOK NOW →
            </Link>
            <a href="mailto:meghantalerico@gmail.com" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
              CONTACT TODAY
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
