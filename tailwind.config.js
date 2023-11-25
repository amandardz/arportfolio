/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#0E3B43',
          'secondary': '#357266',
          'accent': '#A3BBAD',
          'neutral': '#14b8a6',
          'base-100': '#0E3B43',
          'info': '#ffffff',
          'success': '#059669',
          'warning': '#f59e0b',
          'error': '#ef4444',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
