import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixelify': ['Pixelify Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'bg-light': '#faf8f1',
      },
      maxWidth: {
        'content': 'calc(900px + 32px * 2)',
      }
    },
  },
  plugins: [
    typography,
  ],
  darkMode: 'class',
}
