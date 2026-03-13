/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Motorcycle-brand neutrals (dark-first UI)
          black: '#0B0D10',
          dark: '#0F1216',
          gray: '#141922',
          line: 'rgba(255,255,255,0.10)',
          text: '#F4F6F8',
          muted: 'rgba(244,246,248,0.72)',
          // Subtle metallic accent
          accent: '#C9A66B',
        },
      },
    },
  },
  plugins: [],
}
