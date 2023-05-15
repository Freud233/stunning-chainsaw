/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
