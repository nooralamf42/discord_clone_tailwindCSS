/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["gg sans","Noto Sans","Helvetica Neue","Helvetica,Arial","sans-serif"],
        headingFont : ["ABC Ginto Nord","Noto Sans","Helvetica Neue","Helvetica","Arial","sans-serif"]
      },
    },
  },
  plugins: [],
}

