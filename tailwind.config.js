module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Sadece src içindeki dosyaları hedef al
    './public/index.html'         // HTML dosyasını hedef al
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        corinthia: ['Corinthia', 'cursive'],
      },
      colors: {
        customGreen: '#5DBE8C',
      },
    },
  },
  plugins: [],
};
