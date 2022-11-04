/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
  ],
}
