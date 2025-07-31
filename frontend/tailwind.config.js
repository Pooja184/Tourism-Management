/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB347",     // Sunset Gold   Buttons, headings, main actions
        secondary: "#2C5F2D",   // Forest Green   Hover bg, footers, accents
        accent: "#386FA4",      // River Blue     Link hovers, icons, decorations
        neutral: "#F5EFE6",     // Mist Beige     Backgrounds, body text, cards
      },
       backgroundImage: {
        'hero-img': "url('/images/hero.jpg')", 
      },
    },
  },
  plugins: [],
}

