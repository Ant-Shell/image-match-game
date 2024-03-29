/** @type {import('tailwindcss').Config} */
let plugin = require("tailwindcss/plugin")

let FlipStyle = plugin(function ({addUtilities}) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg) scaleX(-1)"
    },
    ".rotate-y-0": {
      transform: "rotateY(0deg) scaleX(-1)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".perspective-1000": {
      perspective: "1000px"
    },
  })
})

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [FlipStyle],
}