/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Primary Green (Inspired by the leaf in the logo)
        primary: {
          DEFAULT: "#4CAF50", // Main green
          light: "#81C784", // Lighter shade
          lighter: "#C7E6C8", // Lighter shade
          dark: "#388E3C", // Darker shade
        },
        // Accent Yellow (for a supermarket feel, inspired by food colors)
        secondary: {
          DEFAULT: "#FFD54F", // Main accent yellow
          light: "#FFF176", // Lighter shade
          lighter: "#FFF9C2", // Lighter shade
          dark: "#FBC02D", // Darker shade
        },
        // Supporting Gray for Neutral Backgrounds
        neutral: {
          DEFAULT: "#9E9E9E", // Neutral shade for text/icons
          light: "#F5F5F5", // Light background
          dark: "#616161", // Darker for contrast
        },
      },
    },
  },
  plugins: [],
};
