/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "maga": ["Maga, sans-serif"],
        "maharlika": ["Maharlika"]
      },
      animation: {
        "bg-text": "animateBg 20s cubic-bezier(.52,0,.47,.49) infinite"
      },
      keyframes: {
        animateBg: {
          "0%": { "background-position": "0% 0%"},
          "50%": { "background-position": "100% 100%"},
          "100%": { "background-position": "0% 0%"}
        }
      }
    },
  },
  plugins: [],
}

