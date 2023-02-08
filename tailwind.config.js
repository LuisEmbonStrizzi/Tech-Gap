/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "CTA-Default": "#0E5FFE",
      "CTA-Hovered": "#3F7FFD",
      "Background-Default": "#010409",
      "Background-Light": "#121924",
      "Background-Variations": "#182436",
      Extras: "#2F3A4F",
      "Text-Default": "#8189A8",
      "Text-Relevant": "#EDEDED",
      Save: "#FFB800",
      Love: "#F30D7C",
      Share: "#A73BFC",
      Danger: "#FF3232",
    },
    directions: { // defaults to these values
      't': 'to top',
      'tr': 'to top right',
      'r': 'to right',
      'br': 'to bottom right',
      'b': 'to bottom',
      'bl': 'to bottom left',
      'l': 'to left',
      'tl': 'to top left',
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "19px"],
      base: ["16px", "22px"],
      lg: ["20px", "27px"],
      xl: ["24px", "32px"],
      xxl: ["48px", "65px"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
