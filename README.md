# Makeup by Meghan - Professional Makeup Services Website

A modern, elegant React website for a professional makeup artist specializing in wedding and events makeup services.

## Features

- **Modern & Elegant Design**: Sleek, professional styling with a white and light color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Service Portfolio**: Beautiful gallery showcasing makeup artistry with stock images
- **Appointment Booking System**:
  - Interactive calendar to select event dates
  - Multi-step booking form with event details
  - Email confirmation system
  - Client information collection (name, email, phone, event type, party size, etc.)
- **Services Showcase**: Display of services including bridal makeup, bridesmaids, and special events
- **Contact Integration**: Direct email integration for booking requests

## Tech Stack

- **React 18.2.0** - UI library
- **React Router 6.18.0** - Client-side routing
- **React Calendar 4.6.1** - Date picker component
- **Vite** - Modern build tool
- **CSS3** - Modern styling with custom properties
- **EmailJS** - Email service integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd makeup-by-meghan
```

2. Install dependencies:
```bash
npm install
```

### Setting Up Email Integration

This project uses EmailJS for sending booking confirmation emails to meghantalerico@gmail.com

1. **Sign up for EmailJS**:
   - Visit [emailjs.com](https://www.emailjs.com)
   - Create a free account
   - Note your **Public Key**

2. **Create an Email Service**:
   - In EmailJS dashboard, create a new service (Gmail recommended)
   - Follow their Gmail setup instructions
   - Note your **Service ID**

3. **Create an Email Template**:
   - Create a new template with the following variables:
     - `{{to_email}}` - Recipient email
     - `{{from_name}}` - Client name
     - `{{from_email}}` - Client email
     - `{{phone}}` - Client phone
     - `{{event_date}}` - Event date
     - `{{event_type}}` - Type of event
     - `{{num_girls}}` - Number of people
     - `{{makeup_preference}}` - Makeup style preference
     - `{{event_details}}` - Additional event details
   - Note your **Template ID**

4. **Update Configuration**:
   - Open `src/pages/BookingForm.jsx`
   - Find these lines in the `handleSubmit` function:
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY') // Replace with your EmailJS public key
     await emailjs.send(
       'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
     ```
   - Replace the placeholders with your actual EmailJS credentials

### Running the Development Server

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Previewing Production Build

```bash
npm run preview
```

## Project Structure

```
makeup-by-meghan/
├── src/
│   ├── components/
│   │   ├── Header.jsx      - Navigation header
│   │   ├── Footer.jsx      - Footer component
│   │   └── Gallery.jsx     - Portfolio gallery
│   ├── pages/
│   │   ├── Home.jsx               - Main landing page
│   │   ├── BookingCalendar.jsx    - Date selection page
│   │   └── BookingForm.jsx        - Booking details form
│   ├── styles/
│   │   └── App.css         - Main stylesheet
│   ├── App.jsx             - Main app component
│   └── main.jsx            - React entry point
├── index.html              - HTML template
├── package.json            - Dependencies
├── vite.config.js          - Vite configuration
└── README.md               - This file
```

## Pages

### Home Page (`/`)
- Hero section with compelling headline
- Service descriptions with icons
- Portfolio gallery with stock images
- Customer benefits section
- Call-to-action buttons

### Booking Calendar (`/booking`)
- Interactive calendar interface
- Date selection for events
- Disabled past dates for convenience
- Quick booking information display

### Booking Form (`/booking-form`)
- Multi-step form for event details
- Event type selection (wedding, bridal party, gala, prom, etc.)
- Number of people field
- Makeup preference selection
- Client information collection
- Event details/notes field
- Form validation
- Success confirmation message

## Customization

### Colors & Fonts
Update CSS variables in `src/styles/App.css`:
```css
:root {
  --primary-color: #2c2c2c;      /* Dark gray */
  --secondary-color: #c9a86d;     /* Gold */
  --accent-color: #f5f5f5;        /* Light gray */
  /* ... */
}
```

### Stock Images
The gallery uses images from Unsplash. To replace images:
1. Find image URLs in `src/components/Gallery.jsx`
2. Replace with your own portfolio images
3. Update image URLs throughout other components

### Business Information
Update the business email and contact info in:
- `src/components/Footer.jsx`
- `src/pages/BookingForm.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading support for images
- Optimized CSS with modern properties
- Responsive design with mobile-first approach
- Fast build times with Vite

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
Update `vite.config.js` with base path and follow GitHub Pages deployment guide.

## Troubleshooting

### Email Not Sending
- Verify EmailJS credentials are correctly set in `BookingForm.jsx`
- Check EmailJS dashboard for error logs
- Ensure email template variables match exactly

### Images Not Loading
- Check internet connection (uses external stock images)
- Verify image URLs are accessible
- Consider downloading images locally for production

### Calendar Not Displaying
- Ensure React Calendar package is installed: `npm install react-calendar`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Future Enhancements

- [ ] Google Maps integration for location services
- [ ] Payment processing integration
- [ ] Client testimonials/reviews section
- [ ] Blog section for makeup tips
- [ ] Social media integration
- [ ] Before/after photo comparison tool
- [ ] Admin dashboard for managing bookings
- [ ] Multi-language support

## License

This project is proprietary to Makeup by Meghan. Unauthorized use is prohibited.

## Contact

Email: meghantalerico@gmail.com

---

**Note**: This website uses stock images from Unsplash for demonstration. Replace with your own professional portfolio images before going live.
