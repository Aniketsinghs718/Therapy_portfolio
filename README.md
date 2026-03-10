# Therapy Website

A beautiful, modern therapy website built with Next.js 14 and Tailwind CSS.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Next.js 14 App Router**: Modern React framework with server components
- **Hero Section**: Eye-catching landing with circular image and call-to-action
- **About Section**: Personal introduction with imagery
- **Specialties Section**: Three specialty cards (Self-Esteem, Relationships, Burnout)
- **Support Section**: List of challenges with empathetic messaging
- **Intro Section**: "Hi, I'm Lilac" with overlapping masked circular images
- **FAQ Section**: Interactive accordion with expandable questions
- **Professional Background**: Accordion for credentials
- **Footer**: Complete footer with contact, hours, and legal links
- **Optimized Images**: Next.js Image component for automatic optimization
- **Fully Responsive**: Mobile-first design that works on all devices
- **Tailwind CSS**: Modern utility-first CSS framework
- **Google Fonts**: Automatically optimized (Outfit & Inter)

## Project Structure

```
Lilac/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── HeroSection.js
│   ├── AboutSection.js
│   ├── SpecialtiesSection.js
│   ├── SupportSection.js
│   ├── IntroSection.js
│   ├── FAQSection.js
│   ├── ProfessionalBackgroundSection.js
│   └── Footer.js
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Customization

### Images
Replace the Unsplash placeholder images with your own images in each component file.

### Colors
Edit the color palette in `tailwind.config.js` to match your brand.

### Content
Update text content in each component file within the `components/` directory.

### Metadata
Update SEO metadata in `app/layout.js`.

## Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **next/font** - Optimized font loading
- **next/image** - Automatic image optimization
