/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#f5f1ec',
          100: '#ebe4da',
          200: '#e0d7ca',
          300: '#d4c9ba',
        },
        darkGreen: {
          DEFAULT: '#3d4a3d',
          light: '#5a6b5a',
        },
        sage: {
          100: '#d4d9d0',
          200: '#b8c0b3',
        },
        lilac: {
          100: '#d8c8d8',
          200: '#c4b4c4',
        }
      },
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      clipPath: {
        arch: 'ellipse(50% 100% at 50% 0%)',
      }
    },
  },
  plugins: [],
}
