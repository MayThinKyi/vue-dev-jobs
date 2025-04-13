module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        active: '#15803D',
        activeHover: '#14532D',
        bgContainer: '#EFF6FF',
        footer: '#111827',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
