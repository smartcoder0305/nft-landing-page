/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        babyBlue: "#85f0ff",
        lavender: "#7c6bff",
        magenta: "#d477ff",
      },
    },
    fontFamily: {
      clashGrotesk: ['"Clash Grotesk"'],
      lato: ['"Lato"'],
      poppins: ['"Poppins"'],
      plusJakartaSans: ['"Plus Jakarta Sans"'],
      ubuntu: ["Ubuntu"],
    },
    screens: {
      xs: "376px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
