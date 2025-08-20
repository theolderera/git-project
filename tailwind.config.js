/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        garamond: ['Cormorant Garamond', 'serif'],
      },
    },
    screens:{
      "mb":{max:"510px"},
      "comp":{min:"511px"},
    }
  },
  plugins: [],
}

