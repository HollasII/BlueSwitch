/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/public/imgs/LandingPage/hero.jpg')",
      },
      fontFamily: {
        poppins: ["var(--poppins-font)"],
      },

      colors: {
        LightBlue: "#0AA9F4",
        Blue: "#003573",
        DarkBlue: "#242565",
        Gray: "#424242",
        DarkGray: "#01063D",
        DarkPurple: "#4C4D8B",
        LightGray: "#DADADA",
        MidGray: "#A4A4A4",
        SkyBlue: "#DEEDF3",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
