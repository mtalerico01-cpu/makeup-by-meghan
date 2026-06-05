import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'

function BookingForm({ bookingData }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    eventDate: bookingData?.date || '',
    eventType: 'wedding',
    numGirls: 1,
    travelArea: 'local',
    travelMiles: 0,
    addonsEstimate: 0,
    fullName: '',
    email: '',
    phone: '',
    eventDetails: '',
    makeupPreference: '',
    policyAccepted: false
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const getBaseRate = (eventType) => {
    switch (eventType) {
      case 'wedding':
        return 175
      case 'gala':
      case 'prom':
      case 'party':
      case 'other':
        return 125
      default:
        return 175
    }
  }

  const getDiscountRate = (numPeople) => {
    const people = Math.max(1, Number(numPeople) || 1)
    if (people >= 9) return 0.20
    if (people >= 5) return 0.15
    if (people >= 3) return 0.10
    return 0
  }

  const travelRatePerMile = 1.35
  const nonLocalBaseTravelFee = 35

  const serviceSubtotal = getBaseRate(formData.eventType) * Math.max(1, Number(formData.numGirls) || 1)
  const discountRate = getDiscountRate(formData.numGirls)
  const discountAmount = Math.round(serviceSubtotal * discountRate)
  const travelMiles = Math.max(0, Number(formData.travelMiles) || 0)
  const travelBaseFee = formData.travelArea === 'nonlocal' ? nonLocalBaseTravelFee : 0
  const travelMileageFee = formData.travelArea === 'nonlocal' ? Math.round(travelMiles * travelRatePerMile) : 0
  const travelFee = travelBaseFee + travelMileageFee
  const addonsFee = Math.max(0, Number(formData.addonsEstimate) || 0)
  const estimatedPrice = serviceSubtotal - discountAmount + travelFee + addonsFee
  const depositDueNow = 250
  const remainingBalance = Math.max(0, estimatedPrice - depositDueNow)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError('Please enter your full name')
      return false
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return false
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email')
      return false
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number')
      return false
    }
    if (!formData.policyAccepted) {
      setError('Please accept the booking and payment policy before submitting')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Initialize EmailJS (you'll need to sign up at emailjs.com)
      emailjs.init('YOUR_PUBLIC_KEY') // Replace with your EmailJS public key

      const templateParams = {
        to_email: 'meghantalerico@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        event_date: formData.eventDate,
        event_type: formData.eventType,
        num_girls: formData.numGirls,
        travel_area: formData.travelArea,
        travel_miles: formData.travelMiles,
        travel_fee: travelFee,
        addons_estimate: formData.addonsEstimate,
        estimated_total: estimatedPrice,
        makeup_preference: formData.makeupPreference,
        event_details: formData.eventDetails
      }

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      )

      setSubmitted(true)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (err) {
      setError('Failed to submit booking. Please try again or contact us directly at meghantalerico@gmail.com')
      console.error('Email error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent to-white flex items-center py-12">
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl text-center">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-5xl font-bold mx-auto mb-6">
            ✓
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Booking Request Submitted!
          </h2>
          
          <p className="text-lg text-gray-700 mb-2">
            Thank you for choosing Makeup by Meghan
          </p>
          
          <p className="text-gray-600 mb-6">
            We've received your booking request and will contact you soon to confirm your appointment.
          </p>
          
          <p className="text-secondary font-semibold animate-pulse">
            Redirecting to home page...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-white py-12">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-primary mb-2">
            Complete Your Booking
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your event
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          {/* Event Information */}
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6 pb-4 border-b-2 border-accent">
              Event Information
            </h3>

            <div className="mb-6">
              <label htmlFor="eventDate" className="block text-sm font-semibold text-primary mb-2">
                Event Date *
              </label>
              <input
                type="text"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                disabled
                className="w-full px-4 py-3 bg-accent border border-gray-300 rounded-lg text-gray-700 cursor-not-allowed opacity-75"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-primary mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                >
                  <option value="wedding">Wedding</option>
                  <option value="gala">Gala/Formal Event</option>
                  <option value="prom">Prom</option>
                  <option value="party">Party</option>
                  <option value="other">Other Event</option>
                </select>
              </div>

              <div>
                <label htmlFor="numGirls" className="block text-sm font-semibold text-primary mb-2">
                  {formData.eventType === 'wedding' ? 'Number of People (Bride + Bridesmaids) *' : 'Number of People *'}
                </label>
                <input
                  type="number"
                  id="numGirls"
                  name="numGirls"
                  value={formData.numGirls}
                  onChange={handleChange}
                  min="1"
                  max="20"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="travelArea" className="block text-sm font-semibold text-primary mb-2">
                  Travel Area
                </label>
                <select
                  id="travelArea"
                  name="travelArea"
                  value={formData.travelArea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                >
                  <option value="local">Local: Alpharetta, Roswell, Johns Creek, Cumming - $0</option>
                  <option value="nonlocal">Outside Local Area - $1.35 per mile</option>
                </select>
              </div>

              <div>
                <label htmlFor="travelMiles" className="block text-sm font-semibold text-primary mb-2">
                  Non-Local Miles (round-trip estimate)
                </label>
                <input
                  type="number"
                  id="travelMiles"
                  name="travelMiles"
                  value={formData.travelMiles}
                  onChange={handleChange}
                  min="0"
                  step="1"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="addonsEstimate" className="block text-sm font-semibold text-primary mb-2">
                  Additional Service Selection
                </label>
                <select
                  id="addonsEstimate"
                  name="addonsEstimate"
                  value={formData.addonsEstimate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                >
                  <option value={0}>None - $0</option>
                  <option value={25}>False Lashes Application - $25</option>
                  <option value={50}>Trial Makeup Appointment - $50</option>
                  <option value={50}>Touch-Up Service (1 hr) - $50</option>
                  <option value={100}>Wedding Day Coordination - $100</option>
                </select>
              </div>
              <div></div>
            </div>

            <div className="mb-6 rounded-xl border border-secondary/30 bg-accent p-4">
              <p className="text-sm font-semibold text-primary">Estimated Booking Total</p>
              <p className="mt-1 text-3xl font-bold text-secondary">${estimatedPrice.toLocaleString('en-US')}</p>
              <div className="mt-3 space-y-1 text-sm text-gray-700">
                <div className="flex items-center justify-between"><span>Service Subtotal</span><span>${serviceSubtotal.toLocaleString('en-US')}</span></div>
                <div className="flex items-center justify-between"><span>{discountRate > 0 ? `Group Discount (${Math.round(discountRate * 100)}%)` : 'Group Discount'}</span><span>{discountAmount > 0 ? `-$${discountAmount.toLocaleString('en-US')}` : '$0'}</span></div>
                <div className="flex items-center justify-between"><span>Travel Base Fee</span><span>${travelBaseFee.toLocaleString('en-US')}</span></div>
                <div className="flex items-center justify-between"><span>Mileage Fee</span><span>${travelMileageFee.toLocaleString('en-US')}</span></div>
                <div className="flex items-center justify-between"><span>{formData.travelArea === 'nonlocal' && travelMiles > 0 ? `Travel Fee ($${travelRatePerMile.toFixed(2)}/mile x ${travelMiles} miles)` : 'Travel Fee'}</span><span>${travelFee.toLocaleString('en-US')}</span></div>
                <div className="flex items-center justify-between"><span>Additional Services</span><span>${addonsFee.toLocaleString('en-US')}</span></div>
                <div className="h-px bg-secondary/20 my-1" />
                <div className="flex items-center justify-between font-semibold"><span>Estimated Total</span><span>${estimatedPrice.toLocaleString('en-US')}</span></div>
                <div className="flex items-center justify-between"><span>Deposit Due at Booking</span><span>${depositDueNow.toLocaleString('en-US')}</span></div>
                <div className="flex items-center justify-between"><span>Remaining Balance</span><span>${remainingBalance.toLocaleString('en-US')}</span></div>
              </div>
              <p className="mt-2 text-xs text-gray-600">Estimate may vary depending on travel fees and additional services.</p>
            </div>

            <div className="mb-6">
              <label htmlFor="makeupPreference" className="block text-sm font-semibold text-primary mb-2">
                Makeup Preference
              </label>
              <select
                id="makeupPreference"
                name="makeupPreference"
                value={formData.makeupPreference}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
              >
                <option value="">Select your preference</option>
                <option value="natural">Natural & Fresh</option>
                <option value="glam">Glam & Bold</option>
                <option value="classic">Classic Elegant</option>
                <option value="modern">Modern Chic</option>
                <option value="undecided">Need Advice</option>
              </select>
            </div>

            <div>
              <label htmlFor="eventDetails" className="block text-sm font-semibold text-primary mb-2">
                Event Details
              </label>
              <textarea
                id="eventDetails"
                name="eventDetails"
                value={formData.eventDetails}
                onChange={handleChange}
                placeholder="Tell us about your event, color scheme, venue, any special requests..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors resize-none"
                rows="4"
              />
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6 pb-4 border-b-2 border-accent">
              Your Information
            </h3>

            <div className="mb-6">
              <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-end pt-8 border-t-2 border-accent">
            <button
              type="button"
              onClick={() => navigate('/booking')}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Submitting...' : 'Submit Booking Request'}
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-secondary/30 bg-accent p-4 text-sm text-gray-700">
            <p className="font-semibold text-primary mb-2">Booking & Payment Policy</p>
            <ul className="space-y-1">
              <li>A non-refundable $250 security deposit is required at booking.</li>
              <li>Remaining balance must be paid in full 2 weeks before the wedding date.</li>
            </ul>
          </div>

          <div className="mt-4 rounded-xl border border-secondary/30 bg-white p-4 text-sm text-gray-700">
            <p className="font-semibold text-primary mb-2">Helpful Bridal Prep Tips</p>
            <ul className="space-y-1">
              <li>Arrive with a clean, moisturized face and no makeup.</li>
              <li>Wear a button-down robe or top to protect your finished look.</li>
              <li>Confirm final headcount and timeline 14 days before the event.</li>
            </ul>
          </div>

          <label className="mt-4 flex items-start gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              name="policyAccepted"
              checked={formData.policyAccepted}
              onChange={handleChange}
              className="mt-1 h-4 w-4"
              required
            />
            <span>I understand and agree to the booking and payment policy.</span>
          </label>

          <p className="text-center text-gray-600 text-sm mt-6">
            We'll review your request and contact you within 24 hours to confirm availability.
          </p>
        </form>
      </div>
    </div>
  )
}

export default BookingForm
