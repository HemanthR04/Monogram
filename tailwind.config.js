/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navblue: "#1a2456",
        whitebg: "#f0efed",
        pink1: "#EFC2B3",
        banner:"#C4C4C4"
      },
      textColor: {
        pink1: "#EFC2B3",
        blacktext: "#080b1b",
        navblue: "#1a2456",
      },
      width:{
        navwidth:"98%",
        productwidth:"550px"
      },
      height:{
        heroHeight:"700px",
        productheight:"100%",
        bannerHeight:"500px",
        imgHeihgt:"500px",
        heroMobile:"400px"
      },
      fontFamily:{
        Inter:"Inter"
      },
      backgroundImage: {
        'hero-pattern': "url('https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/91943/shop_cta_xl_896f6b8270.webp')",
        
        
      },
      borderColor:{
        pink1: "#EFC2B3",
      }
    },
  },
  plugins: [],
};
