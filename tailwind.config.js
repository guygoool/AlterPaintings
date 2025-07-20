/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-art': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        'sans-art': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'warm-beige': '#F5F1EB',
        'soft-brown': '#8B7355',
        'deep-brown': '#5D4E37',
        'art-gold': '#DAA520',
        'canvas-white': '#F9F6F2',
        'accent-pink': '#F7D6E0',
        'accent-blue': '#B7C9E2',
      },
    },
  },
  plugins: [],
} 