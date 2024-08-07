/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
     /* in extend we here used the self-defined/external color and fonts */
    extend: {

      fontFamily:{
        Whitney:["Whitney"],
        Ginto:["Ginto"],
        ggSans:["ggSans"],
        GintoNord:["GintoNord"],
      },
      
    },
  },
  plugins: [],
  
}
