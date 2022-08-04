const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./tailwind/colors');
const spacing = require('./tailwind/spacing');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing,
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('./tailwind/skip-link'),
  ],
};
