/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      "mb":{max:"510px"},
    }
  },
  plugins: [],
}

