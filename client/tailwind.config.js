module.exports = {
  mode: "jit",
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: "media", // false, class, or media 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
