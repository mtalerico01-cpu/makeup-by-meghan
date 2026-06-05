import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-accent py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/Headshot_Meghan.png" 
                alt="Meghan, makeup artist" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                Meghan Talerico
              </h1>
              <p className="text-xl text-secondary font-semibold mb-6">
                Professional Makeup Artist | Certified Medical Assistant | CoolSculpting Expert | Johns Creek, GA
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Hi! I'm Meghan Talerico, a passionate makeup artist dedicated to helping you feel confident and beautiful on your most important days.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 7 years of professional experience in the cosmetic and plastic surgery field, combined with 5+ years specializing in wedding and event makeup, and additional training as a certified medical assistant and CoolSculpting expert, I bring expertise, precision, and artistry to every look I create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            My Story
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a born and raised Atlanta girl with deep roots in Georgia. Growing up in the South instilled in me values of hospitality, grace, and a genuine love for making others feel special—qualities that shine through in every service I provide.
              </p>

              <p>
                My journey in beauty began over 7 years ago when I discovered my passion for cosmetics and skincare in the professional beauty and plastic surgery field. This foundation gave me a deep understanding of skin care, color theory, and how makeup can truly enhance and celebrate a person's natural features.
              </p>

              <p>
                Alongside my beauty work, I am also a certified medical assistant and CoolSculpting expert, which has strengthened my knowledge of aesthetics, client care, and the confidence that comes from helping people look and feel their best.
              </p>

              <p>
                For the past 5+ years, I've dedicated myself to mastering the art of bridal and event makeup. I've had the privilege of working with hundreds of beautiful brides, bridesmaids, and event attendees, creating looks that make them feel confident, radiant, and ready to take on their special day.
              </p>

              <p>
                Now based in Johns Creek, Georgia, I continue to fuel my passion for beauty while being present for what matters most to me—my faith and my family.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/Family_Pic_web.jpg"
                alt="Meghan with family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family & Values Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            What Matters Most
          </h2>

          <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">My Faith</h3>
                <p className="text-gray-700 leading-relaxed">
                  My Christian faith is the foundation of who I am and how I serve others. It shapes my values of kindness, integrity, and genuine care for those around me.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">My Family</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My greatest joy is my family. My husband Michael and our four wonderful children—Everett, Elliana, Emerson, and Easton—are my heart and my inspiration.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Balancing my passion for beauty with my role as a mother has taught me the importance of presence, grace under pressure, and creating beautiful moments that last.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">My Passion for Beauty</h3>
                <p className="text-gray-700 leading-relaxed">
                  I believe that beauty is about more than makeup—it's about helping someone feel their best self. Whether it's enhancing natural features or creating a bold new look, my goal is always to celebrate who you are.
                </p>
              </div>

            <div className="rounded-2xl overflow-hidden shadow-lg mt-4">
              <img 
                src="/Family_photo_horses_web.jpg"
                alt="Meghan's family with horses"
                className="w-full"
                style={{display:'block',height:'auto'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Professional Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">7+</div>
              <h3 className="text-xl font-bold text-primary mb-3">Years in Beauty</h3>
              <p className="text-gray-700">
                Professional experience in cosmetics and plastic surgery backgrounds, providing deep expertise in skin care and makeup artistry.
              </p>
            </div>

            <div className="bg-accent p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">5+</div>
              <h3 className="text-xl font-bold text-primary mb-3">Years Bridal & Events</h3>
              <p className="text-gray-700">
                Specialized experience creating stunning looks for weddings, bridal parties, and special events throughout Georgia.
              </p>
            </div>

            <div className="bg-accent p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">CMA</div>
              <h3 className="text-xl font-bold text-primary mb-3">Medical Aesthetics</h3>
              <p className="text-gray-700">
                Certified medical assistant with CoolSculpting expertise, bringing a deeper understanding of client care and aesthetic services.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white border-2 border-secondary rounded-xl p-8 md:p-12">
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">My Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Bridal Makeup & Styling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Bridesmaid & Wedding Party Makeup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Event & Gala Makeup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Professional Color Theory</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Skin Care Analysis & Prep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Long-Lasting Makeup Application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>Photography-Optimized Looks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-3">✓</span>
                  <span>On-Location Event Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            My Philosophy
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            I believe that every person deserves to feel beautiful and confident. My approach is personalized, listening-focused, and rooted in the belief that makeup should enhance, not mask. I'm here to celebrate your natural beauty while creating a look that makes you feel like the best version of yourself.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed">
            Whether it's your wedding day, a special event, or any moment you want to feel extra special, I'm honored to be part of your story and help you look and feel amazing.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-gray-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Let's Create Your Look
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to feel beautiful? Let's work together to create a look that makes you shine.
          </p>
          <Link to="/booking" className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg">
            BOOK NOW →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
