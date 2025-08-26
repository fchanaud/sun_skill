# Ace Rec - Curated Tennis Camps

A modern, responsive landing page for premium tennis camp experiences in sunny destinations.

## 🎾 Features

- **Hero Section**: Stunning tennis court background with clear value proposition
- **Benefits Section**: Four key advantages highlighting time-saving and quality assurance
- **How It Works**: Simple 3-step process from goals to camp experience
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern Tech Stack**: Pure HTML, CSS, and JavaScript for optimal performance

## 🎨 Design System

### Color Palette
- **Citrus Yellow** (#FFD633) - Bright, tennis-ball & sunshine energy
- **Lime Green** (#66B032) - Fresh, sporty, nature
- **Orange** (#FF7F2A) - Warmth, vitality, Mediterranean feel
- **Grapefruit Red** (#FF4C4C) - Bold accent for calls-to-action
- **Leaf Green** (#2F7D32) - Balance, premium nature tone
- **Light Neutral** (#F7F7F7) - Background, space, elegance
- **Dark Slate** (#1E1E1E) - Text color for premium readability

### Visual Style
- Clean, minimalist, and premium aesthetic
- Mobile-first responsive design
- Modern typography (Inter font family)
- Subtle animations on scroll and hover
- Professional yet energetic feel

## 🚀 Quick Start

### Local Development
1. Clone the repository
2. Open `index.html` in your browser, or
3. Run a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have it)
   npx serve .
   ```

### Deploy to Vercel

#### Option 1: Vercel CLI (Recommended)
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from project directory:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name: **ace-rec-landing** (or your preferred name)
   - In which directory is your code located? **./** 

#### Option 2: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the static site and deploy

#### Option 3: Drag & Drop
1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your project folder
3. Instant deployment!

## 📁 Project Structure

```
sun_skill/
├── index.html          # Main HTML structure
├── styles.css          # Styling with color palette and responsive design
├── script.js           # Interactive animations and smooth scrolling
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata and scripts
└── README.md           # This file
```

## 🎯 Sections Overview

### 1. Hero Section
- Tennis court background image
- "Ace Rec" branding
- Main value proposition with highlighted "Premium Coaching"
- Clear call-to-action button
- Country flags (Spain, France, Portugal)
- Scroll indicator

### 2. What You'll Gain
- Four benefit cards with icons:
  - **Save Time & Avoid Risk** - Pre-vetted camp selection
  - **Serious Tennis Progress** - Skill development focus
  - **Curated Experience** - Premium settings and extras
  - **Complete Confidence** - Expert-tested and approved

### 3. How It Works
- Three-step process:
  1. **Share Your Tennis Goals** - Profile and preferences
  2. **Get Handpicked Options** - 2-3 matched camps
  3. **Pack & Go** - Full arrangement and measurable progress
- Final call-to-action for more information

## 🛠 Customization

### Changing Content
- Edit text content in `index.html`
- Update styling in `styles.css`
- Modify animations in `script.js`

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any required JavaScript interactions in `script.js`

### Updating Colors
All colors are defined as CSS custom properties in `:root` at the top of `styles.css`. Update these values to change the entire color scheme.

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted spacing)
- **Mobile**: 480px-767px (stacked layout)
- **Small Mobile**: <480px (optimized for small screens)

## ⚡ Performance

- Optimized images from Unsplash CDN
- Minimal JavaScript for fast loading
- CSS animations with `prefers-reduced-motion` support
- Efficient use of CSS Grid and Flexbox
- Static site for maximum speed

## 🌐 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

MIT License - feel free to use this project as a template for your own landing pages.

---

Built with ❤️ for tennis enthusiasts seeking premium camp experiences.