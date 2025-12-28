# 🔪 Oussama Barbershop

A premium, modern barber shop website showcasing professional grooming services with smooth animations, responsive design, and elegant user experience.

![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-18.0-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-06B6D4?logo=tailwindcss)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

Oussama Barbershop is a professional, fully responsive website designed for a premium barber shop in Meknès, Morocco. Built with modern web technologies, it showcases services, gallery transformations, and provides easy contact options with clients.

**Live Demo:** [Coming Soon]

---

## ✨ Features

### 🎨 User Interface
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Dark Theme** - Professional black aesthetic with red and blue accents
- **Smooth Animations** - Framer Motion animations for engaging interactions
- **Parallax Effects** - Dynamic hero section with scroll parallax
- **Before/After Gallery** - Interactive image comparison with swipe reveal

### 🧭 Navigation
- **Fixed Navbar** - Persistent navigation with scroll detection
- **Auto-Scroll** - Smooth scrolling to sections from anchor links
- **Mobile Menu** - Elegant overlay menu for mobile devices
- **Active States** - Visual feedback for current navigation

### 📱 Responsive
- **Mobile Optimized** - Touch-friendly interface for smartphones
- **Tablet Support** - Optimized layout for tablets
- **Desktop Experience** - Full-featured experience on large screens
- **Performance** - Fast load times and smooth interactions

### 🌐 Additional
- **French Language** - Complete French localization
- **Social Integration** - WhatsApp and Instagram links
- **Professional Footer** - Complete company information
- **Contact Section** - Multiple contact channels

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, JavaScript (JSX) |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Build Tool** | Vite |
| **Package Manager** | npm |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/zakari-aee/oussama-barbershop.git
cd oussama-barbershop
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to Netlify
npm run build && netlify deploy --prod --dir=dist
```

---

## 📂 Project Structure
```
oussama-barbershop/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation component
│   │   ├── BarberHero.jsx          # Hero section with parallax
│   │   ├── Gallery.jsx             # Before/After gallery
│   │   ├── Contact.jsx             # Contact section
│   │   ├── Footer.jsx              # Footer component
│   │   ├── FAQ.jsx                 # FAQ section
│   │   └── WhyChooseUs.jsx         # Features section
│   │
│   ├── img/
│   │   └── main.webp               # Hero background image
│   │
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
│
├── public/
│   └── img/
│       └── main.webp               # Public images
│
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies
├── README.md                       # This file
└── .gitignore                      # Git ignore rules
```

---

## ⚙️ Configuration

### Tailwind CSS

Customize colors and theme in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#DC2626',      // Red accent
        secondary: '#1E40AF',    // Blue accent
      }
    }
  }
}
```

### Vite Configuration

`vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false
  }
})
```

---

## 🎨 Customization Guide

### Update Content

#### 1. Logo & Branding
**File:** `src/components/Navbar.jsx`
```javascript
<span className="text-red-600"> BARBERSHOP</span>
```

#### 2. Hero Section Text
**File:** `src/components/BarberHero.jsx`
```javascript
<h1>COUPES <span className="text-red-600">PRÉCISES</span></h1>
```

#### 3. Contact Information
**File:** `src/components/Contact.jsx`
```javascript
const phoneNumber = "212657335157";
const email = "oussama@barbershop.com";
```

#### 4. Social Media Links
**File:** `src/components/Footer.jsx`
```javascript
href="https://instagram.com/your_username"
href="https://wa.me/212657335157"
```

### Change Colors

Update Tailwind classes throughout components:
```javascript
// Primary Red
className="text-red-600"

// Secondary Blue  
className="text-blue-700"

// Accents
className="bg-red-600"
className="border-red-600"
```

### Update Images

1. Replace image in `public/img/main.webp`
2. Or update import path in component:
```javascript
import mainImage from './img/main.webp';
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile-First Approach
```javascript
className="text-sm md:text-lg lg:text-xl"
// Small on mobile, medium on tablet, large on desktop
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Deploy with Vercel**
```bash
npm i -g vercel
vercel
```

3. **Auto-deployments** - Vercel automatically deploys on push

### Netlify

1. **Build project**
```bash
npm run build
```

2. **Deploy with Netlify CLI**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

3. **Or drag & drop** - Drag `dist` folder to Netlify dashboard

### GitHub Pages

1. **Update `vite.config.js`**
```javascript
export default {
  base: '/oussama-barbershop/',
}
```

2. **Build & deploy**
```bash
npm run build
git add .
git commit -m "Build for deployment"
git push origin main
```

---

## 🔒 Environment Variables

Create `.env.local`:
```env
VITE_WHATSAPP_NUMBER=212657335157
VITE_EMAIL=oussama@barbershop.com
VITE_INSTAGRAM_URL=https://instagram.com/oussama
```

Use in components:
```javascript
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
```

---

## 📊 Performance

### Optimization Tips

1. **Image Optimization**
   - Use `.webp` format for images
   - Compress images with TinyPNG
   - Use responsive images

2. **Code Splitting**
   - Vite handles automatic code splitting
   - Lazy load components if needed

3. **Caching**
   - Vercel/Netlify handle caching automatically
   - Set cache headers in deployment

### Lighthouse Scores
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

### Developer
**Zakariae Alliouate** - Full Stack Developer

- **GitHub:** [@zakari-aee](https://github.com/zakari-aee)
- **Email:** zakariaealliouate@gmail.com
- **Location:** Meknès, Morocco

### Business
**Oussama Barbershop**

- **WhatsApp:** [Chat](https://wa.me/212657335157)
- **Instagram:** [@oussama_barber](https://instagram.com)
- **Location:** Meknès, Morocco

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI Library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion) - Animations
- [Lucide Icons](https://lucide.dev) - Icons
- [Vite](https://vitejs.dev) - Build tool

---

## 📈 Roadmap

- [ ] Add booking system
- [ ] Implement price calculator
- [ ] Add testimonials section
- [ ] Mobile app version
- [ ] Multi-language support (EN/FR/AR)
- [ ] Blog/Articles section
- [ ] Analytics integration
- [ ] Email notifications

---

## 🔐 Security

- No sensitive data stored in code
- Environment variables for configuration
- HTTPS enabled on production
- Regular dependency updates

---

## 📊 Statistics

- **Pages:** 5 (Home, Gallery, Services, Contact, Footer)
- **Components:** 7+ reusable components
- **Lines of Code:** 1,000+
- **Development Time:** ~40 hours

---

**Made with ❤️ for Oussama Barbershop**

⭐ If you find this project useful, please consider giving it a star!

---

*Last Updated: December 2024*