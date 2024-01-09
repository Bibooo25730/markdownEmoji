/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "zpix": ['Zpix', "sans-serif"]
      },
      colors: {
        headerColor:'#fee133',
        btnColor:'#4CAF50',
        silver: "#737373",
        footerColor:'#ff5a79',
        footerBackground:'#00e5ff',
        themeBackground:'#2b2b2b'
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1100px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3000px",
      },
    },
  },
  plugins: [],
};
