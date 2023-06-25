module.exports = {
  darkMode: 'class',
  content: ["./**/*.html", "./**/*.md", "./config.toml"],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        },
        Yellow:{
          200:"#FEF08A"
        }
        }
      }

  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  
};
