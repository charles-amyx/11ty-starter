const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./tailwind/colors');
const spacing = require('./tailwind/spacing');

module.exports = {
  content: ['./src/**/*.njk', './src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
      spacing,
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('./tailwind/skip-link'),
    require('@tailwindcss/typography'),
  ],
};
