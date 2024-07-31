/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-2%)",
            animationTimingFunction: "cubic-bezier(2,1,1,1)",
          },
          "30%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(1,1,1,1)",
          },
        },
      },
    },
  },
  fontFamily: {
    Timers: ["Orbitron"],
    HomemadeApple: ["Homemade Apple", "cursive"],
  },

  plugins: [],
  darkMode: "class",
};
