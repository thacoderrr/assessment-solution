/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyishBrown: "#6A7548",
        peaGreen: "#ecf1ab",
        golden: "#ffbb00",
        cyanOpaque: "#bababa",
        neutralWhite: "#ffffff",
        blueBg: "#062863",
      },
    },
  },
  plugins: [],
  baseUrl: ".",
  paths: {
    "@/*": ["./src/*"],
  },
};
