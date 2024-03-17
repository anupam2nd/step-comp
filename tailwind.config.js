/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      keyframes : {
        fadein : {
          "0%" : { opacity : "0" },
          "100" : { opacity : "100" }
        },
        'on-scroll' : {
          "0%" : { transform : "translate(0px, 500px)", opacity : "0"},
          "100%" : { transform : "translate(0px, 0px)",  opacity : "1" }
        },
        slideup: {
          "0%": { transform: "translate(0px, -400px)", opacity: "0" },
          "100%": { transform: "translate(0px, 0px)", opacity: "1" },
        },
      },
      animation : 
      { 
        fadein : "fadein 1s ease-in-out forwards",
        fadeinfast : "fadein .5s ease-in-out forwards",
        'on-scroll' : "on-scroll 1s ease-in-out forwards",
        slideup : "slideup 1s ease-in-out"
      },
      
    },
  },
  plugins: [],
}

