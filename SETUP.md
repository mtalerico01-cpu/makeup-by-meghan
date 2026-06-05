# SETUP INSTRUCTIONS FOR MAKEUP BY MEGHAN WEBSITE

## Quick Start Guide

### 1. Prerequisites
- Node.js v14+ installed
- npm or yarn package manager

### 2. Installation Steps

```bash
# Navigate to project directory
cd makeup-by-meghan

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:3000`

### 3. Email Service Setup (Important!)

The booking system uses **EmailJS** to send booking confirmations to meghantalerico@gmail.com

**Required Steps:**

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com
   - Sign up for free account
   - Verify your email

2. **Add Email Service** (Gmail recommended)
   - In Dashboard → Email Services → Create New Service
   - Choose Gmail
   - Follow their authentication steps
   - Save your **Service ID**

3. **Create Email Template**
   - Dashboard → Email Templates → Create New Template
   - Name: "makeup_booking"
   - Set up template with these variables:
     - `{{from_name}}` - Client's full name
     - `{{from_email}}` - Client's email
     - `{{phone}}` - Client's phone
     - `{{event_date}}` - Event date
     - `{{event_type}}` - Type of event
     - `{{num_girls}}` - Number of people getting makeup
     - `{{makeup_preference}}` - Style preference
     - `{{event_details}}` - Additional notes
   - Save your **Template ID**

4. **Get Your Public Key**
   - Dashboard → Account → API Keys
   - Copy your **Public Key** (NOT secret key)

5. **Update BookingForm.jsx**
   - Open: `src/pages/BookingForm.jsx`
   - Find the `handleSubmit` function (around line 40)
   - Replace these three lines:
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY')  // ← Replace with your public key
     await emailjs.send(
       'YOUR_SERVICE_ID',  // ← Replace with your service ID
       'YOUR_TEMPLATE_ID',  // ← Replace with your template ID
     ```

### 4. Test the Booking System
1. Run `npm run dev`
2. Click "Book Now" or "Schedule Now"
3. Select a date on calendar
4. Fill in the form
5. Submit and check meghantalerico@gmail.com for test email

### 5. Customize Content

**Update Business Information:**
- Company name: Edit in `src/components/Header.jsx`
- Gallery images: Update URLs in `src/components/Gallery.jsx`
- Services: Modify in `src/pages/Home.jsx`
- Contact email: Update in `src/components/Footer.jsx` and `src/pages/BookingForm.jsx`

**Customize Colors:**
- Edit CSS variables in `src/styles/App.css` (lines 4-13)
- Primary (dark): `--primary-color`
- Secondary (gold): `--secondary-color`
- Backgrounds: `--light-bg`, `--accent-color`

### 6. Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### 7. Deployment Options

**Option A: Vercel (Easiest)**
```bash
npm i -g vercel
vercel
```

**Option B: Netlify**
- Push code to GitHub
- Connect repo to Netlify
- Deploy automatically

**Option C: Your Own Server**
- Upload `dist` folder to web server
- Configure server to serve `index.html` for all routes

### 8. Stock Images

The gallery uses free stock images from Unsplash:
- https://unsplash.com/

**To use your own images:**
1. Upload photos to image hosting (Cloudinary, ImgBB, etc.)
2. Replace URLs in `src/components/Gallery.jsx`
3. Update hero images in `src/pages/Home.jsx`

### Troubleshooting

**Problem: "npm: command not found"**
- Solution: Install Node.js from https://nodejs.org

**Problem: Email not sending**
- Check EmailJS dashboard for error logs
- Verify credentials in BookingForm.jsx match exactly
- Ensure template variables match

**Problem: Port 3000 already in use**
- Solution: `npm run dev -- --port 3001`

**Problem: Images not loading**
- Check internet connection
- Verify image URLs are accessible
- Try incognito/private browser mode

### Support

For questions about deployment or configuration:
- EmailJS Help: https://www.emailjs.com/docs/
- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev

---

**Congratulations!** Your Makeup by Meghan website is ready! 🎉
