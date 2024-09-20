/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer');

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [tailwindcss('./tailwind.config.cjs'), autoprefixer],
};
