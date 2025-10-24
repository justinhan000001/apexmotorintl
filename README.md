# Apex Motor Intl Website

A minimal, responsive company website for Apex Motor Intl, a motorcycle repair shop and race pit service team.

## Features

- **Hero Section**: Company name "Apex Motor Intl" with slogan "Performance. Precision. Passion." and background image
- **Services Section**: Cards for Maintenance, Customization, and Race Support
- **Contact Section**: Shop address, phone number, and contact form
- **Responsive Design**: Mobile-friendly with dark theme and red highlights
- **Navigation**: Smooth scrolling navbar linking to each section
- **Footer**: Copyright and social media links

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Responsive Design

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and TailwindCSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
├── tailwind.config.js       # TailwindCSS configuration
└── package.json             # Dependencies and scripts
```

## Customization

The website is designed to be easily customizable:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Update text content in each component file
- **Images**: Replace the background image in `Hero.tsx`
- **Contact Info**: Update address and phone in `Contact.tsx` and `Footer.tsx`
- **Social Links**: Update social media links in `Footer.tsx`

## Build for Production

```bash
npm run build
npm start
```
