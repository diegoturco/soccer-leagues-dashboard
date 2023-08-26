/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { 
      daisyui: {
        themes: ["light", "dark"],
      },
      width: {
        'table-column': '300px',
        'rank-column': '25px',
        'logo-column': '35px',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar-daisyui')],
}
