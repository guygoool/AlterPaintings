/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F5F1EB',
        'soft-brown': '#8B7355',
        'deep-brown': '#5D4E37',
        'art-gold': '#DAA520',
      },
    },
  },
  plugins: [],
} 