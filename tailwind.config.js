/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whothisli: "#FFDB15",
        cardheader:"#222",
        cardbody:"#444",
        aibtn:"#fbe137"
      },
    },
  },
  plugins: [],
};
