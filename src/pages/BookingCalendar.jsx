import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function BookingCalendar({ setBookingData }) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const navigate = useNavigate()

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setBookingData({ date: date.toISOString().split('T')[0] })
    navigate('/booking-form')
  }

  // Disable past dates
  const tileDisabled = ({ date }) => {
    return date < new Date()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-white flex items-center py-12">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-primary mb-2">
            Select Your Event Date
          </h1>
          <p className="text-xl text-gray-600">
            Choose a date that works best for your event
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Calendar 
              onChange={handleDateSelect}
              value={selectedDate}
              minDate={new Date()}
              tileDisabled={tileDisabled}
              className="w-full"
            />
          </div>

          {/* Booking Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Booking Information
            </h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-gray-600 mb-1"><strong className="text-primary">Service:</strong></p>
                <p className="text-lg">Professional Makeup for Events</p>
              </div>
              
              <div>
                <p className="text-gray-600 mb-1"><strong className="text-primary">Selected Date:</strong></p>
                <p className="text-lg font-semibold">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>

            <div className="bg-accent border-l-4 border-secondary p-4 rounded">
              <p className="text-gray-700">
                ✨ Click on a date above to proceed to the booking form and tell us about your event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingCalendar
