/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "8p": "14px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
