import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Meghan made me feel like a goddess on my wedding day. Her attention to detail was incredible, and my makeup stayed flawless through the entire ceremony and reception!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Jessica L.",
      rating: 5,
      text: "I was a little stressed about getting 8 bridesmaids ready in time, but Meghan and her team absolutely crushed it. Everyone felt beautiful and confident. Cannot recommend enough!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Amanda R.",
      rating: 5,
      text: "The entire experience was seamless from start to finish. Not only did my makeup look stunning in person, but it photographed even better. Truly a professional!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Michelle T.",
      rating: 5,
      text: "I had a gala event and Meghan created the most elegant look. She really listened to what I wanted and enhanced my natural beauty. Best decision ever!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ]

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 justify-center mb-3">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  )

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">
            Hear From Our Happy Brides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of brides and event attendees. See why our clients love our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-accent p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <StarRating rating={testimonial.rating} />
              
              <p className="text-gray-700 text-center mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-3 object-cover"
                />
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Rated 5 out of 5 stars by our clients
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
