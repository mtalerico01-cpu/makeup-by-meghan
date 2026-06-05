import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import BookingCalendar from './pages/BookingCalendar'
import BookingForm from './pages/BookingForm'

function App() {
  const [bookingData, setBookingData] = useState(null)

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<BookingCalendar setBookingData={setBookingData} />} />
            <Route path="/booking-form" element={<BookingForm bookingData={bookingData} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
