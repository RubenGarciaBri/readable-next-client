module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sample-picture": "url('public/img/bg-sample.jpg')",
      },
    },
  },
  plugins: [],
}
