import React from 'react'

function Gallery() {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1481066717861-4775e000c88a?q=80&w=500&h=600&fit=crop',
      alt: 'Bride smelling flowers',
      title: 'Real Bride'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1649305795256-a48bb558ce1d?q=80&w=500&h=600&fit=crop',
      alt: 'Bridesmaids wedding photo',
      title: 'Bride & Bridesmaids'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1633076748077-4ef9d2ab701c?q=80&w=500&h=600&fit=crop',
      alt: 'Bride portrait in wedding dress',
      title: 'Bridal Portrait'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1679599441191-aa411b7ac27d?q=80&w=500&h=600&fit=crop',
      alt: 'Bride getting ready',
      title: 'Bridal Prep'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1649305795256-a48bb558ce1d?q=80&w=500&h=600&fit=crop',
      alt: 'Bridesmaids together',
      title: 'Bridesmaids'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1633076748077-4ef9d2ab701c?q=80&w=500&h=600&fit=crop',
      alt: 'Wedding day bride portrait',
      title: 'Wedding Party'
    }
  ]

  return (
    <section id="gallery" className="bg-accent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">
            Real Brides & Bridal Party
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Open-source bridal portraits and wedding-day moments featuring real brides and bridesmaids
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(image => (
            <div 
              key={image.id} 
              className="group relative rounded-lg overflow-hidden h-72 cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-xl">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
