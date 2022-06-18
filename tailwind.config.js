module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))',
        '22': 'repeat(22, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-21': 'span 21 / span 21',
      }
    },
  },
  plugins: [],
}