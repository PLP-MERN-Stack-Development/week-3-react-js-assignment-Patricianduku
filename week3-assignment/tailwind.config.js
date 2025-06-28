// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightblue: '#dbeafe', // optional: add light blue for bg
      },
    },
  },
  plugins: [],
};
