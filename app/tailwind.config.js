module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        white: '1px 2px 8px 2px #ffffff90',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
