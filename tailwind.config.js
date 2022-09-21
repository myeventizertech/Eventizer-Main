module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
      screens: {
        'sm': '640px',
        'md': '768px',
        'mdx': '900px',
        'lg': '1024px',
        'lgx': '1080px',
        'xl': '1280px',
        '1xl': '1400px',
        '2xl': '1536px',
      },
      extend: {
        fontFamily: {
          Poppins: ["Poppins", "sans-serif"],
        },
    },
  },

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

  plugins: [require("daisyui")],
}